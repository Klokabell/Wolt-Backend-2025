import "dotenv/config";
import express from "express";
import { promisify } from "util";
import { routes } from "./routing/deliveryPriceRoute.routes";
import { errorHandler } from "./routing/errorHandler";

const PORT = Number(process.env.PORT);

const app = express();
app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);

const sleep = promisify(setTimeout);

const main = async () => {
  let connected = false;
  let attempt = 0;
  const limit = 3;
  try {
    app.listen(PORT, () => console.log(`Listening at localhost:${PORT}`));
    connected = true;
  } catch (error) {
    attempt++;
    console.error(`Connection failed, attempting retry ${attempt}`);
    if (attempt < limit) {
      await sleep(5000);
    } else {
      console.log(`Retry limit reached, please resolve issue and try again`);
      process.exit(1);
    }
  }
};

main();
