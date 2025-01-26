export class FacadeError extends Error {
  errorCode: string;

  constructor(message: string, errorCode: string) {
    super(message);
    this.name = "FacadeError";
    this.errorCode = errorCode;
    Object.setPrototypeOf(this, FacadeError.prototype);
  }
}

export class ExpressHTTPError extends Error {
  statusCode: number;
  errorCode: string;
  details?: any;

  constructor(
    message: string,
    statusCode: number,
    errorCode: string,
    details: any
  ) {
    super(message);
    this.name = "ExpressHTTPError";
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.details = details;
    Object.setPrototypeOf(this, ExpressHTTPError.prototype);
  }
}

export class DistanceTooFarError extends ExpressHTTPError {
  difference: number;
  constructor(message: string, details?: any) {
    super(message, 400, "EXCEEDS_MAX_DISTANCE", details);
    this.name = "DistanceTooFarError";
    this.difference = this.difference
    Object.setPrototypeOf(this, DistanceTooFarError.prototype);
  }
}
