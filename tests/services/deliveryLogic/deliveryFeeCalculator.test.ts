import { deliveryFeeCalculator } from "../../../src/services/deliveryLogic/deliveryFeeCalculator";
import { DistanceTooFarError } from "../../../src/classes";

const testRanges1 = [
  {
    min: 0,
    max: 500,
    a: 0,
    b: 0,
  },
  {
    min: 500,
    max: 1000,
    a: 1000,
    b: 1,
  },
  {
    min: 1000,
    max: 0,
    a: 1000,
    b: 2,
  },
];
const testRanges2 = [
  {
    min: 100,
    max: 500,
    a: 0,
    b: 0,
  },
  {
    min: 500,
    max: 1000,
    a: 1000,
    b: 1,
  },
  {
    min: 1000,
    max: 2000,
    a: 2000,
    b: 2,
  },
  {
    min: 2000,
    max: 0,
    a: 2000,
    b: 2,
  },
];

const successTestDistances = [500, 1000, 1500, 1999, 15];
const failTestDistances = [4000, 5000, 6000];
const basePrice = 2000;
describe("deliveryFeeCalculator", () => {
  it("should calculate the delivery fee correctly within a range", () => {
    expect(
      deliveryFeeCalculator(successTestDistances[0], testRanges1, basePrice)
    ).toBe(3050);
    expect(
      deliveryFeeCalculator(successTestDistances[2], testRanges2, basePrice)
    ).toBe(4300);
    expect(
      deliveryFeeCalculator(successTestDistances[3], testRanges2, basePrice)
    ).toBe(4399.8);
  });

  it("throws DistanceTooFarError when distance exceeds maxDistance", () => {
    expect(() =>
      deliveryFeeCalculator(failTestDistances[0], testRanges1, basePrice)
    ).toThrow(DistanceTooFarError);
    expect(() =>
      deliveryFeeCalculator(failTestDistances[1], testRanges2, basePrice)
    ).toThrow(DistanceTooFarError);
    try {
      deliveryFeeCalculator(failTestDistances[2], testRanges2, basePrice);
    } catch (error) {
      expect(error.details).toEqual({
        difference: 4000,
      });
    }
  });

  it("should handle min distance correctly", () => {
    expect(
      deliveryFeeCalculator(successTestDistances[4], testRanges1, basePrice)
    ).toBe(2000);
    expect(deliveryFeeCalculator(100, testRanges2, basePrice)).toBe(2000);
  });
});
