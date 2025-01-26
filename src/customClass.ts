class DeliveryError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
    this.name = this.constructor.name;
  }
}
