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
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const util_1 = require("util");
const deliveryPriceRoute_routes_1 = require("./routing/deliveryPriceRoute.routes");
const errorHandler_1 = require("./routing/errorHandler");
const PORT = Number(process.env.PORT);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", deliveryPriceRoute_routes_1.routes);
app.use(errorHandler_1.errorHandler);
const sleep = (0, util_1.promisify)(setTimeout);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let connected = false;
    let attempt = 0;
    const limit = 3;
    try {
        app.listen(PORT, () => console.log(`Listening at localhost:${PORT}`));
        connected = true;
    }
    catch (error) {
        attempt++;
        console.error(`Connection failed, attempting retry ${attempt}`);
        if (attempt < limit) {
            yield sleep(5000);
        }
        else {
            console.log(`Retry limit reached, please resolve issue and try again`);
            process.exit(1);
        }
    }
});
main();
//# sourceMappingURL=app.js.map