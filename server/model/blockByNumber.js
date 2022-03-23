import mongoose from 'mongoose';

const BlockByNumberSchema = new mongoose.Schema({
  difficulty: {
    type: String
  },
  extraData: {
    type: String
  },
  gasLimit: {
    type: String
  },
  gasUsed: {
    type: String
  },
  hash: {
    type: String
  },
  logsBloom: {
    type: String
  },
  miner: {
    type: String
  },
  mixHash: {
    type: String
  },
  nonce: {
    type: String
  },
  number: {
    type: String
  },
  parentHash: {
    type: String
  },
  receiptsRoot: {
    type: String
  },
  sha3Uncles: {
    type: String
  },
  size: {
    type: String
  },
  stateRoot: {
    type: String
  },
  timestamp: {
    type: String
  },
  totalDifficulty: {
    type: String
  },
  transactions: [
    {
      blockHash: {
        type: String
      },
      blockNumber: {
        type: String
      },
      from: {
        type: String
      },
      gas: {
        type: String
      },
      gasPrice: {
        type: String
      },
      hash: {
        type: String
      },
      input: {
        type: String
      },
      nonce: {
        type: String
      },
      to: {
        type: String
      },
      transactionIndex: {
        type: String
      },
      value: {
        type: String
      },
      type: {
        type: String
      },
      v: {
        type: String
      },
      r: {
        type: String
      },
      s: {
        type: String
      }
    }
  ],
  transactionsRoot: {
    type: String
  },
  uncles: {
      type: []
  }
});

const BlockByNumber = mongoose.model('BlockByNumber', BlockByNumberSchema);
export default BlockByNumber;