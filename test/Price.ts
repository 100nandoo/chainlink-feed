import { EtherscanProvider } from "@ethersproject/providers"
import { expect } from "chai"
import { ethers } from "hardhat"
import * as constant from "../constant"
import { Price } from "../typechain-types"

describe("Price", () => {
  let price: Price
  beforeEach(async () => {
    const goerli = new EtherscanProvider("goerli", constant.ETHERSCAN_KEY)
    price = new ethers.Contract(constant.PRICE_ADDR, constant.PRICE_ABI, goerli) as Price
  })

  describe("getPrice", async () => {
    it("Get ETH/USD price", async () => {
      let result = (await price.getEthUsd()).toNumber()
      expect(result).is.a("number")
      expect(result).is.greaterThan(0)
    })
    it("Get DAI/USD price", async () => {
      expect(await (await price.getDaiUsd()).toNumber()).is.a("number")
    })
    it("Get USDC/USD price", async () => {
      expect((await price.getUsdcUsd()).toNumber()).is.a("number")
    })
  })
})
