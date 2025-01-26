"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceTooFarError = exports.ExpressHTTPError = exports.FacadeError = void 0;
class FacadeError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.name = "FacadeError";
        this.errorCode = errorCode;
        Object.setPrototypeOf(this, FacadeError.prototype);
    }
}
exports.FacadeError = FacadeError;
class ExpressHTTPError extends Error {
    constructor(message, statusCode, errorCode, details) {
        super(message);
        this.name = "ExpressHTTPError";
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.details = details;
        Object.setPrototypeOf(this, ExpressHTTPError.prototype);
    }
}
exports.ExpressHTTPError = ExpressHTTPError;
class DistanceTooFarError extends ExpressHTTPError {
    constructor(message, details) {
        super(message, 400, "EXCEEDS_MAX_DISTANCE", details);
        this.name = "DistanceTooFarError";
        this.difference = this.difference;
        Object.setPrototypeOf(this, DistanceTooFarError.prototype);
    }
}
exports.DistanceTooFarError = DistanceTooFarError;
//# sourceMappingURL=classes.js.map