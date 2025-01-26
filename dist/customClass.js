class DeliveryError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = this.constructor.name;
    }
}
//# sourceMappingURL=customClass.js.map