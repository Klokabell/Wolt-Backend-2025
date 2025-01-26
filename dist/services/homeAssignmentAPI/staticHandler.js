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
exports.staticHandler = void 0;
const axios_1 = __importDefault(require("axios"));
const classes_1 = require("../../classes");
const staticHandler = (venue) => __awaiter(void 0, void 0, void 0, function* () {
    const staticEndpointURL = `https://consumer-api.development.dev.woltapi.com/home-assignment-api/v1/venues/${venue}/static`;
    try {
        const response = yield axios_1.default.get(staticEndpointURL);
        return {
            longitude: response.data.venue_raw.location.coordinates[0],
            latitude: response.data.venue_raw.location.coordinates[1],
        };
    }
    catch (error) {
        throw new classes_1.FacadeError("static handler error", "STATIC_ENDPOINT_ERROR");
    }
});
exports.staticHandler = staticHandler;
//# sourceMappingURL=staticHandler.js.map