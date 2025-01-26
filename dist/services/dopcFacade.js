"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dopcFacade = void 0;
const homeAssignmentHandler_1 = require("./homeAssignmentAPI/homeAssignmentHandler");
const createDeliveryFeeObject_1 = require("./deliveryLogic/createDeliveryFeeObject");
const totalPriceCalculator_1 = require("./totalPriceCalculator");
const dopcFacade = (queryObject) => __awaiter(void 0, void 0, void 0, function* () {
    const { cartValue, userCoordinates, venue } = queryObject;
    let venueCoordinates, orderMinNoSurcharge, basePrice, distanceRangeArray;
    const responseObject = {
        total_price: 0,
        small_order_surcharge: 0,
        cart_value: cartValue,
        delivery: { fee: 0, distance: 0 },
    };
    // retrieves static & dynamic values from the external APIs
    try {
        const homeAssignmentObject = yield (0, homeAssignmentHandler_1.homeAssignmentHandler)(venue);
        ({ venueCoordinates, orderMinNoSurcharge, basePrice, distanceRangeArray } =
            homeAssignmentObject);
    }
    catch (error) {
        console.error("homeAssignmentHandler error: ", error);
        throw error;
    }
    // creates an object of the input values related to the delivery
    const deliveryInputObject = {
        venueCoordinates,
        userCoordinates,
        distanceRangeArray,
        basePrice,
    };
    // calls the logic for calculating the delivery fees and returning them as an object
    try {
        responseObject.delivery = (0, createDeliveryFeeObject_1.createDeliveryFeeObject)(deliveryInputObject);
    }
    catch (error) {
        console.error("Caught error", error);
        throw error;
    }
    // calculates the total price of the delivery + cart
    try {
        const priceObject = (0, totalPriceCalculator_1.totalPriceCalculator)(orderMinNoSurcharge, responseObject.delivery.fees, cartValue);
        responseObject.total_price = priceObject.totalPrice;
        responseObject.small_order_surcharge = priceObject.surchargeFee;
    }
    catch (error) {
        throw error;
    }
    return responseObject;
});
exports.dopcFacade = dopcFacade;
//# sourceMappingURL=dopcFacade.js.map