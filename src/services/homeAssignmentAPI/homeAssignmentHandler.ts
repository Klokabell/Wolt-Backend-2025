import {
  Coordinates,
  DistanceRangesObject,
  HomeAssignmentObject,
} from "../../types";
import { staticHandler } from "./staticHandler";
import { dynamicHandler } from "./dynamicHandler";
import { FacadeError } from "../../classes";

export const homeAssignmentHandler = async (venueSlug: string) => {
  let venueCoordinates: Coordinates;
  let orderMinNoSurcharge: number,
    basePrice: number,
    distanceRangeArray: DistanceRangesObject[];

  // fetches the venueCoordinates from the static endpoint
  try {
    venueCoordinates = await staticHandler(venueSlug);
  } catch (error) {
    throw error;
  }

  // fetches the surcharge, basePrice and distance ranges from the dynamic endpoint
  try {
    ({ orderMinNoSurcharge, basePrice, distanceRangeArray } =
      await dynamicHandler(venueSlug));
  } catch (error) {
    throw error;
  }

  return {
    venueCoordinates,
    orderMinNoSurcharge,
    basePrice,
    distanceRangeArray,
  } as HomeAssignmentObject;
};
