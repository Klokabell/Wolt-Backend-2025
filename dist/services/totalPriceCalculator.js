"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalPriceCalculator = void 0;
const totalPriceCalculator = (orderMinNoSurcharge, deliveryFee, cartValue) => {
    let surchargeFee = orderMinNoSurcharge - cartValue;
    if (surchargeFee > 0)
        surchargeFee = 0;
    console.log(`deliveryFee: ${deliveryFee} + cartValue: ${cartValue} + surchargeFee: ${surchargeFee}`);
    const totalPrice = deliveryFee + cartValue + surchargeFee;
    return { totalPrice, surchargeFee };
};
exports.totalPriceCalculator = totalPriceCalculator;
//# sourceMappingURL=totalPriceCalculator.js.map