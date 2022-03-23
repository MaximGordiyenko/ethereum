const express = require('express');
const axios = require("axios");
let app = express.Router();

app.get('/', (req, res) => {
  axios.get('https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=0x10d4f&boolean=true&apikey=B24CIKIPII6ADYHUZQRZUT3FSEY5MKEAXX')
    .then(result => res.send(result.data.result))
    .catch(err => console.log(err));
});

module.exports = app;