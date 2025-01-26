export const totalPriceCalculator = (
  orderMinNoSurcharge: number,
  deliveryFee: number,
  cartValue: number
) => {
  let surchargeFee = orderMinNoSurcharge - cartValue;
  if (surchargeFee > 0) surchargeFee = 0;

  console.log(
    `deliveryFee: ${deliveryFee} + cartValue: ${cartValue} + surchargeFee: ${surchargeFee}`
  );
  const totalPrice: number = deliveryFee + cartValue + surchargeFee;
  return { totalPrice, surchargeFee };
};
