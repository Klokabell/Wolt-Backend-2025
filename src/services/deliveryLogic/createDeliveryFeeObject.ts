import { DeliveryInputObject } from "../../types";
import { distanceCalculator } from "./distanceCalculator";
import { deliveryFeeCalculator } from "./deliveryFeeCalculator";

export const createDeliveryFeeObject = (
  deliveryInputObject: DeliveryInputObject
) => {
  const delivery: Record<string, number> = {};

  // gets distance from coordinate pairs
  try {
    delivery.distance = distanceCalculator(
      deliveryInputObject.venueCoordinates,
      deliveryInputObject.userCoordinates
    );
  } catch (error) {
    throw error;
  }

  //then creates the delivery object
  try {
    delivery.fees = deliveryFeeCalculator(
      delivery.distance,
      deliveryInputObject.distanceRangeArray,
      deliveryInputObject.basePrice
    );
  } catch (error) {
    console.error("createDeliveryFeeObject Error:", error.message);
    throw error;
  }

  return delivery;
};
