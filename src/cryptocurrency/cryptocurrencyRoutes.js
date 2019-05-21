import express from "express";

import {
  getAllCryptocurrenciesLatest,
  getMarketQuotesLatest
} from "./cryptocurrencyController";

const router = express.Router();

router.get("/listing/latest", getAllCryptocurrenciesLatest);
router.get("/quotes/latest", getMarketQuotesLatest);

export default router;
