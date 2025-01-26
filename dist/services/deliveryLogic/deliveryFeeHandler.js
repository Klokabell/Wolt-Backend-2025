"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeliveryFeeObject = void 0;
const distanceCalculator_1 = require("./distanceCalculator");
const deliveryFeeCalculator_1 = require("./deliveryFeeCalculator");
const createDeliveryFeeObject = (deliveryInputObject) => {
    const delivery = {};
    // gets distance from coordinate pairs
    try {
        delivery.distance = (0, distanceCalculator_1.distanceCalculator)(deliveryInputObject.venueCoordinates, deliveryInputObject.userCoordinates);
    }
    catch (error) {
        throw error;
    }
    //then creates the delivery object
    try {
        delivery.fees = (0, deliveryFeeCalculator_1.deliveryFeeCalculator)(delivery.distance, deliveryInputObject.distanceRangeArray, deliveryInputObject.basePrice);
    }
    catch (error) {
        throw error;
    }
    return delivery;
};
exports.createDeliveryFeeObject = createDeliveryFeeObject;
//# sourceMappingURL=deliveryFeeHandler.js.map