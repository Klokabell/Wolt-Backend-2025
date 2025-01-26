import { distanceCalculator } from "../../../src/services/deliveryLogic/distanceCalculator";

import {
  helsinkiTestObject,
  stockholmTestObject,
  tokyoTestObject,
  berlinTestObject,
} from "./deliveryTestObjects";

const testObjects = [
  { name: "helsinki", data: helsinkiTestObject },
  { name: "stockholm", data: stockholmTestObject },
  { name: "tokyo", data: tokyoTestObject },
  { name: "berline", data: berlinTestObject },
];

test.each(testObjects)(
  "City: ${name}. Returns the distance between two coordinates",
  ({ name, data }) => {
    const upperBound = data.expectedDistance + 5;
    const lowerBound = data.expectedDistance - 5;
    expect(
      distanceCalculator(data.venueCoordinates, data.userCoordinates)
    ).toBeGreaterThanOrEqual(lowerBound);
    expect(
      distanceCalculator(data.venueCoordinates, data.userCoordinates)
    ).toBeLessThanOrEqual(upperBound);
  }
);
