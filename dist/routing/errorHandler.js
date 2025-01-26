"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const classes_1 = require("../classes");
// error handling middleware
function errorHandler(error, req, res, next) {
    let statusCode = 500;
    let message = "Internal Server Error";
    let errorCode = "UNKNOWN_INTERNAL_ERROR";
    let details = undefined;
    // checks if the error is an HTTPError or a FacadeError
    if (error instanceof classes_1.DistanceTooFarError) {
        statusCode = error.statusCode;
        message = error.message;
        errorCode = error.errorCode;
        details = { difference: error.difference };
    }
    else if (error instanceof classes_1.ExpressHTTPError) {
        statusCode = error.statusCode;
        message = error.message;
        errorCode = error.errorCode;
        details = error.details;
    }
    else {
        // Handle other errors (if needed)
    }
    const errorResponseObject = {
        status: "error",
        message: message,
        errorCode: errorCode,
        details: details,
    };
    if (process.env.NODE_ENV === "development") {
        errorResponseObject.stack = error.stack;
    }
    res.status(statusCode).json(errorResponseObject); // Send the response
}
//# sourceMappingURL=errorHandler.js.map