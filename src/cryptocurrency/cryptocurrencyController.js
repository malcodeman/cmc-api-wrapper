import axios from "../axiosInstance";

export async function getAllCryptocurrenciesLatest(req, res, next) {
  try {
    const response = await axios.get("/cryptocurrency/listings/latest");
    const data = response.data.data;

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ exception: "general", error });
  }
}

export async function getMarketQuotesLatest(req, res, next) {
  try {
    const symbol = req.query.symbol;

    if (symbol) {
      const response = await axios.get(
        `/cryptocurrency/quotes/latest?symbol=${symbol}`
      );
      const data = response.data.data;

      res.status(200).send(data);
      return;
    }
    throw new Error("Must contain at least one symbol");
  } catch (error) {
    res.status(400).send({ exception: "general", error: error.message });
  }
}
