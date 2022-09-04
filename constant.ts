export const PRICE_ADDR = "0x7AA0D607E05306A921B49b0c7fA7A186191Eb667"
export const PRICE_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "getDaiUsd",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getEthUsd",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getUsdcUsd",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
]

import * as dotenv from "dotenv"
dotenv.config({ path: __dirname + "/.env" })

export const PRIVATE_KEY = process.env.PRIVATE_KEY
export const ALCHEMY_GOERLY_URL = process.env.ALCHEMY_GOERLY_RPC_URL
export const ETHERSCAN_KEY = process.env.ETHERSCAN_API_KEY
