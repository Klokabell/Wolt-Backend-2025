import axios from "axios";
import { FacadeError } from "../../classes";

export const dynamicHandler = async (city: string) => {
  const dynamicEndpointURL = `https://consumer-api.development.dev.woltapi.com/home-assignment-api/v1/venues/${city}/dynamic`;

  try {
    const response = await axios.get(dynamicEndpointURL);
    const data = response.data;
    return {
      orderMinNoSurcharge:
        data.venue_raw.delivery_specs.order_minimum_no_surcharge,
      basePrice: data.venue_raw.delivery_specs.delivery_pricing.base_price,
      distanceRangeArray:
        data.venue_raw.delivery_specs.delivery_pricing.distance_ranges,
    };
  } catch (error) {
    throw new FacadeError("dynamic handler error", "DYNAMIC_ENDPOINT_ERROR");
  }
};
