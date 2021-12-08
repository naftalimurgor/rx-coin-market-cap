const express = require("express");
const http = require("http");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require('cors')

// get env secrets
dotenv.config();
const app = express();
app.use(cors())


const CMC_API_KEY = process.env.CMC_API_KEY;

async function getCoinListing() {
  const headers = {
    "X-CMC_PRO_API_KEY": CMC_API_KEY,
  };

  const listing = await axios.default.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    { headers }
  );
  return listing.data;
}

app.get("/crypto/listing", async (req, res) => {
  const listing = await getCoinListing();
  res.status(200).json({ msg: "success", data: listing });
});

http.Server(app).listen(8000);
