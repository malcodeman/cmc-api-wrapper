import express from "express";

import { getAllCryptocurrenciesLatest } from "./cryptocurrencyController";

const router = express.Router();

router.get("/listing/latest", getAllCryptocurrenciesLatest);

export default router;
