import express from "express";
import { OrderQuery } from "../types";
import { dopcFacade } from "../services/dopcFacade";

export const routes = express.Router();

routes.get("/v1/delivery-order-price", async (_req, _res, next) => {
  const queryObject: OrderQuery = {
    venue: String(_req.query.venue_slug),
    cartValue: Number(_req.query.cart_value),
    userCoordinates: {
      longitude: Number(_req.query.user_lon),
      latitude: Number(_req.query.user_lat),
    },
  };
  try {
    const deliveryObject = await dopcFacade(queryObject);
    console.log("deliveryObject", deliveryObject);
    _res.send(deliveryObject);
  } catch (error) {
    console.error("Router caught error: ", error.message);
    next(error);
  }
});
