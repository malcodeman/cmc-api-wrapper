import express from "express";
import cors from "cors";

import cryptocurrencyRoutes from "./cryptocurrency/cryptocurrencyRoutes";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use("/api/cryptocurrency/", cryptocurrencyRoutes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
