import axios from "axios";

const COIN_MARKET_CAP_API_URL = process.env.API_URL;
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY;
const instance = axios.create({
  headers: {
    ["X-CMC_PRO_API_KEY"]: COIN_MARKET_CAP_API_KEY
  },
  baseURL: COIN_MARKET_CAP_API_URL
});

instance.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    console.log(error.response.data);
    return Promise.resolve(error);
  }
);

export default instance;
