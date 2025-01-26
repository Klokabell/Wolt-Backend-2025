"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const dopcFacade_1 = require("../services/dopcFacade");
exports.routes = express_1.default.Router();
exports.routes.get("/v1/delivery-order-price", (_req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const queryObject = {
        venue: String(_req.query.venue_slug),
        cartValue: Number(_req.query.cart_value),
        userCoordinates: {
            longitude: Number(_req.query.user_lon),
            latitude: Number(_req.query.user_lat),
        },
    };
    try {
        const deliveryObject = yield (0, dopcFacade_1.dopcFacade)(queryObject);
        console.log("deliveryObject", deliveryObject);
        _res.send(deliveryObject);
    }
    catch (error) {
        console.error("Router caught error: ", error.message);
        next(error);
    }
}));
//# sourceMappingURL=deliveryPriceRoute.routes.js.map