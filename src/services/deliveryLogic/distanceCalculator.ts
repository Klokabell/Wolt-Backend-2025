import { getDistance } from "geolib";
import { Coordinates } from "../../types";

export const distanceCalculator = (
  venueCoordinates: Coordinates,
  userCoordinates: Coordinates
) => {
  const distance = getDistance(venueCoordinates, userCoordinates, 0.01);
  return distance;
};
