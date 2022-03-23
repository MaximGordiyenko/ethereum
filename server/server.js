const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const app = express();
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const getBlockByNumber = require('./Routes/blockByNumber');
const getTransactionByHash = require('./Routes/transactionByHash');

app.use('/blockByNumber', getBlockByNumber);
app.use('/transactionByHash', getTransactionByHash);

mongoose.connect(process.env.MONGO_DB)
  .then(response => console.log('connect to DB', !!response.connections))
  .catch(error => console.log(error))

app.listen(process.env.PORT, () => console.log(`server port: ${process.env.PORT}`));