import { DistanceRangesObject } from "../../types";
import { FacadeError, DistanceTooFarError } from "../../classes";
export const deliveryFeeCalculator = (
  distance: number,
  ranges: DistanceRangesObject[],
  basePrice: number
) => {
  let deliveryFee: number;
  const maxDistance = ranges[ranges.length - 1].min;

  if (distance > maxDistance) {
    console.log("Distance too far");
    const difference: number = distance - maxDistance;
    throw new DistanceTooFarError(
      `Route Exceeds Maximum Delivery Distance of ${maxDistance}`,
      { difference: difference }
    );
  }

  const rangeObject = ranges.find((range) => {
    return distance < range.max && distance >= range.min;
  });

  if (!rangeObject) {
    throw new FacadeError("rangeObject returned falsey", "RANGEOBJECT_FALSE");
  }
  const flatFee = rangeObject.a;
  const feeMultiplier = rangeObject.b;

  deliveryFee = (feeMultiplier * distance) / 10 + flatFee + basePrice;
  return deliveryFee;
};
