export const PRICE_ADDR = "0x6D8E001A204e9c96c0fFD658Ce507C87193b5a2D";
export const PRICE_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getLatestPrice",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

export const PRIVATE_KEY = process.env.PRIVATE_KEY;
export const ALCHEMY_GOERLY_URL = process.env.ALCHEMY_GOERLY_RPC_URL
export const ETHERSCAN_KEY = process.env.ETHERSCAN_API_KEY