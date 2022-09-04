import {  ethers } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

async function main() {

    const PriceABI = [
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

    const goerli = ethers.getDefaultProvider("goerli")
    const priceAddress = "0x6D8E001A204e9c96c0fFD658Ce507C87193b5a2D"
    const priceContract = new ethers.Contract(priceAddress, PriceABI, goerli)
	console.log(await priceContract.getLatestPrice());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });