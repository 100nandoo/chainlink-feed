import { BigNumber } from "ethers"
import { ethers } from "hardhat"
import * as constant from "../constant"
import { Price } from "../typechain-types"

async function main() {
  const goerli = ethers.getDefaultProvider("goerli")
  const priceContract: Price = new ethers.Contract(
    constant.PRICE_ADDR,
    constant.PRICE_ABI,
    goerli
  ) as Price

  const ethUsd = formatNumber(await priceContract.getEthUsd())
  console.log("ETH/USD", ethUsd)

  const daiUsd = formatNumber(await priceContract.getDaiUsd())
  console.log("DAI/USD", daiUsd)

  const usdcUsd = formatNumber(await priceContract.getUsdcUsd())
  console.log("USDC/USD", usdcUsd)
}

function formatNumber(input: BigNumber): number {
  return input.toNumber() / 10 ** 8
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
