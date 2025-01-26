"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distanceCalculator = void 0;
const geolib_1 = require("geolib");
const distanceCalculator = (venueCoordinates, userCoordinates) => {
    const distance = (0, geolib_1.getDistance)(venueCoordinates, userCoordinates, 0.01);
    return distance;
};
exports.distanceCalculator = distanceCalculator;
//# sourceMappingURL=distanceCalculator.js.map