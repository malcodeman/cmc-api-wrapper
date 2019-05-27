import express from "express";

import {
  getCoinMarketCapMap,
  listAllCryptocurrenciesLatest,
  getMarketQuotesLatest
} from "./cryptocurrencyController";

const router = express.Router();

router.get("/map", getCoinMarketCapMap);
router.get("/listing/latest", listAllCryptocurrenciesLatest);
router.get("/quotes/latest", getMarketQuotesLatest);

export default router;
