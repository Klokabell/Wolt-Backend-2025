import axios from "axios";
import { FacadeError } from "../../classes";

export const staticHandler = async (venue: string) => {
  const staticEndpointURL = `https://consumer-api.development.dev.woltapi.com/home-assignment-api/v1/venues/${venue}/static`;

  try {
    const response = await axios.get(staticEndpointURL);
    return {
      longitude: response.data.venue_raw.location.coordinates[0],
      latitude: response.data.venue_raw.location.coordinates[1],
    };
  } catch (error) {
    throw new FacadeError("static handler error", "STATIC_ENDPOINT_ERROR");
  }
};
