export interface ErrorResponseObject {
  status: "error";
  message: string;
  errorCode: string;
  details?: any;
  stack?: string;
}
