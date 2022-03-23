const express = require('express');
const axios = require("axios");
let app = express.Router();

app.get('/', (req, res) => {
  axios.get('https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=0xbc78ab8a9e9a0bca7d0321a27b2c03addeae08ba81ea98b03cd3dd237eabed44&apikey=B24CIKIPII6ADYHUZQRZUT3FSEY5MKEAXX@')
    .then(result => res.send(result.data.result))
    .catch(err => console.log(err));
});

module.exports = app;