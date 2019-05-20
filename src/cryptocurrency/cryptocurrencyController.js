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
