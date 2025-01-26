export type Coordinates = {
  longitude: number;
  latitude: number;
};

export interface OrderQuery {
  venue: string;
  cartValue: number;
  userCoordinates: Coordinates;
}

export type DistanceRangesObject = {
  min: number;
  max: number;
  a: number;
  b: number;
};

export type HomeAssignmentObject = {
  venueCoordinates: Coordinates;
  orderMinNoSurcharge: number;
  basePrice: number;
  distanceRangeArray: DistanceRangesObject[];
};

export type DeliveryInputObject = {
  venueCoordinates: Coordinates;
  userCoordinates: Coordinates;
  distanceRangeArray: DistanceRangesObject[];
  basePrice: number;
};

export type DOPCResponseObject = {
  total_price: number;
  small_order_surcharge: number;
  cart_value: number;
  delivery: Record<string, number>;
};
