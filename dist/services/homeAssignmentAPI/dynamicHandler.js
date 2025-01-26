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
exports.dynamicHandler = void 0;
const axios_1 = __importDefault(require("axios"));
const classes_1 = require("../../classes");
const dynamicHandler = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const dynamicEndpointURL = `https://consumer-api.development.dev.woltapi.com/home-assignment-api/v1/venues/${city}/dynamic`;
    try {
        const response = yield axios_1.default.get(dynamicEndpointURL);
        const data = response.data;
        return {
            orderMinNoSurcharge: data.venue_raw.delivery_specs.order_minimum_no_surcharge,
            basePrice: data.venue_raw.delivery_specs.delivery_pricing.base_price,
            distanceRangeArray: data.venue_raw.delivery_specs.delivery_pricing.distance_ranges,
        };
    }
    catch (error) {
        throw new classes_1.FacadeError("dynamic handler error", "DYNAMIC_ENDPOINT_ERROR");
    }
});
exports.dynamicHandler = dynamicHandler;
//# sourceMappingURL=dynamicHandler.js.map