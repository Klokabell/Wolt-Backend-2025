"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryFeeCalculator = void 0;
const deliveryFeeCalculator = (distance, ranges, basePrice) => {
    const maxDistance = ranges[ranges.length - 2].max;
    let deliveryFee;
    console.log("basePrice", basePrice);
    if (distance > maxDistance) {
        throw new Error(`Route Exceeds Maximum Delivery Distance of ${maxDistance}`);
    }
    const rangeObject = ranges.find((range) => {
        return distance <= range.max && distance >= range.min;
    });
    if (rangeObject) {
        const flatFee = rangeObject.a;
        const feeMultiplier = rangeObject.b;
        deliveryFee = (feeMultiplier * distance) / 10 + flatFee + basePrice;
        return deliveryFee;
    }
};
exports.deliveryFeeCalculator = deliveryFeeCalculator;
//# sourceMappingURL=rangeFeesCalculator.js.map