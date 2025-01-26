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
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeAssignmentHandler = void 0;
const staticHandler_1 = require("./staticHandler");
const dynamicHandler_1 = require("./dynamicHandler");
const homeAssignmentHandler = (venueSlug) => __awaiter(void 0, void 0, void 0, function* () {
    let venueCoordinates;
    let orderMinNoSurcharge, basePrice, distanceRangeArray;
    // fetches the venueCoordinates from the static endpoint
    try {
        venueCoordinates = yield (0, staticHandler_1.staticHandler)(venueSlug);
    }
    catch (error) {
        throw error;
    }
    // fetches the surcharge, basePrice and distance ranges from the dynamic endpoint
    try {
        ({ orderMinNoSurcharge, basePrice, distanceRangeArray } =
            yield (0, dynamicHandler_1.dynamicHandler)(venueSlug));
    }
    catch (error) {
        throw error;
    }
    return {
        venueCoordinates,
        orderMinNoSurcharge,
        basePrice,
        distanceRangeArray,
    };
});
exports.homeAssignmentHandler = homeAssignmentHandler;
//# sourceMappingURL=homeAssignmentHandler.js.map