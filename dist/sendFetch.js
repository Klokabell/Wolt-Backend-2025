var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sendFetch = (city, id) => __awaiter(this, void 0, void 0, function* () {
    const urlObject = {
        Helsinki: {
            1: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-helsinki&cart_value=1000&user_lat=60.17094&user_lon=24.93087",
            2: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-helsinki&cart_value=1000&user_lat=60.16952&user_lon=24.93545",
            3: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-helsinki&cart_value=1000&user_lat=60.17391&user_lon=24.92763",
            4: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-helsinki&cart_value=1000&user_lat=60.17223&user_lon=24.93822",
        },
        Berlin: {
            1: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-berlin&cart_value=1000&user_lat=52.520008&user_lon=13.404954",
            2: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-berlin&cart_value=1000&user_lat=52.52221&user_lon=13.41053",
            3: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-berlin&cart_value=1000&user_lat=52.51856&user_lon=13.40618",
            4: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-berlin&cart_value=1000&user_lat=52.51636&user_lon=13.39958",
        },
        Tokyo: {
            1: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-tokyo&cart_value=1000&user_lat=35.652832&user_lon=139.839478",
            2: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-tokyo&cart_value=1000&user_lat=35.65672&user_lon=139.83522",
            3: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-tokyo&cart_value=1000&user_lat=35.65042&user_lon=139.84492",
            4: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-tokyo&cart_value=1000&user_lat=35.65431&user_lon=139.84157",
        },
        Stockholm: {
            1: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-stockholm&cart_value=1000&user_lat=59.3561&user_lon=18.045",
            2: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-stockholm&cart_value=1000&user_lat=59.3371&user_lon=18.02",
            3: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-stockholm&cart_value=1000&user_lat=59.33891&user_lon=18.07109",
            4: "http://localhost:8000/api/v1/delivery-order-price?venue_slug=home-assignment-venue-stockholm&cart_value=1000&user_lat=59.334591&user_lon=24.93087",
        },
    };
    const fetchURL = urlObject[city][id];
    console.log(`sending fetch request to ${fetchURL}`);
    try {
        const res = yield fetch(fetchURL);
        if (!res.ok) {
            throw new Error(`${res.status}: ${res.statusText}`);
        }
        const data = yield res.json();
        console.log("response data: ", data);
    }
    catch (error) {
        // Handle both custom and unexpected errors
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
        else {
            console.error("An unexpected error occurred:", error);
        }
    }
});
sendFetch("Stockholm", 3);
//# sourceMappingURL=sendFetch.js.map