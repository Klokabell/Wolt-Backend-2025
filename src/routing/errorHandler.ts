import { Request, Response, NextFunction } from "express";
import { ExpressHTTPError, DistanceTooFarError } from "../classes";
import { ErrorResponseObject } from "../interfaces";
// error handling middleware
export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode = 500;
  let message = "Internal Server Error";
  let errorCode = "UNKNOWN_INTERNAL_ERROR";
  let details = undefined;

  // checks if the error is an HTTPError or a FacadeError
  if (error instanceof DistanceTooFarError) {
    statusCode = error.statusCode;
    message = error.message;
    errorCode = error.errorCode;
    details = { difference: error.difference }; 
  } else if (error instanceof ExpressHTTPError) {

    statusCode = error.statusCode;
    message = error.message;
    errorCode = error.errorCode;
    details = error.details;
  } else {
    // Handle other errors (if needed)
  }
  const errorResponseObject: ErrorResponseObject = {
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
