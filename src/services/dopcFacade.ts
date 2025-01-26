import {
  DeliveryInputObject,
  OrderQuery,
  DOPCResponseObject,
  HomeAssignmentObject,
  Coordinates,
  DistanceRangesObject,
} from "../types";
import { homeAssignmentHandler } from "./homeAssignmentAPI/homeAssignmentHandler";
import { createDeliveryFeeObject } from "./deliveryLogic/createDeliveryFeeObject";
import { totalPriceCalculator } from "./totalPriceCalculator";

export const dopcFacade = async (queryObject: OrderQuery) => {
  const { cartValue, userCoordinates, venue } = queryObject;
  let venueCoordinates: Coordinates,
    orderMinNoSurcharge: number,
    basePrice: number,
    distanceRangeArray: DistanceRangesObject[];

  const responseObject: DOPCResponseObject = {
    total_price: 0,
    small_order_surcharge: 0,
    cart_value: cartValue,
    delivery: { fee: 0, distance: 0 },
  };

  // retrieves static & dynamic values from the external APIs
  try {
    const homeAssignmentObject: HomeAssignmentObject =
      await homeAssignmentHandler(venue);
    ({ venueCoordinates, orderMinNoSurcharge, basePrice, distanceRangeArray } =
      homeAssignmentObject);
  } catch (error) {
    console.error("homeAssignmentHandler error: ", error);
    throw error;
  }

  // creates an object of the input values related to the delivery
  const deliveryInputObject: DeliveryInputObject = {
    venueCoordinates,
    userCoordinates,
    distanceRangeArray,
    basePrice,
  };

  // calls the logic for calculating the delivery fees and returning them as an object
  try {
    responseObject.delivery = createDeliveryFeeObject(deliveryInputObject);
  } catch (error) {
    console.error("Caught error", error);
    throw error;
  }

  // calculates the total price of the delivery + cart
  try {
    const priceObject = totalPriceCalculator(
      orderMinNoSurcharge,
      responseObject.delivery.fees,
      cartValue
    );

    responseObject.total_price = priceObject.totalPrice;
    responseObject.small_order_surcharge = priceObject.surchargeFee;
  } catch (error) {
    throw error;
  }

  return responseObject;
};
