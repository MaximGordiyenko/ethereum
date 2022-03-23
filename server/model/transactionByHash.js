import mongoose from 'mongoose';

const TransactionByHashSchema = new mongoose.Schema({
  blockHash: String,
  blockNumber: String,
  from: String,
  gas: String,
  gasPrice: String,
  maxFeePerGas: String,
  maxPriorityFeePerGas: String,
  hash: String,
  input: String,
  nonce: String,
  to: String,
  transactionIndex: String,
  value: String,
  type: String,
  accessList: [],
  chainId: String,
  v: String,
  r: String,
  s: String
});

const TransactionByHash = mongoose.model('TransactionByHash', TransactionByHashSchema);
export default TransactionByHash;