"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryFeeCalculator = void 0;
const classes_1 = require("../../classes");
const deliveryFeeCalculator = (distance, ranges, basePrice) => {
    let deliveryFee;
    const maxDistance = ranges[ranges.length - 1].min;
    if (distance > maxDistance) {
        console.log("Distance too far");
        const difference = distance - maxDistance;
        throw new classes_1.DistanceTooFarError(`Route Exceeds Maximum Delivery Distance of ${maxDistance}`, { difference: difference });
    }
    const rangeObject = ranges.find((range) => {
        return distance < range.max && distance >= range.min;
    });
    if (!rangeObject) {
        throw new classes_1.FacadeError("rangeObject returned falsey", "RANGEOBJECT_FALSE");
    }
    const flatFee = rangeObject.a;
    const feeMultiplier = rangeObject.b;
    deliveryFee = (feeMultiplier * distance) / 10 + flatFee + basePrice;
    return deliveryFee;
};
exports.deliveryFeeCalculator = deliveryFeeCalculator;
//# sourceMappingURL=deliveryFeeCalculator.js.map