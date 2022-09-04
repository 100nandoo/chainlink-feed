import { expect } from "chai"
import { ethers } from "hardhat"
import * as constant from "../constant"
import { Price } from "../typechain-types"

describe("Price", () => {
  let price: Price
  beforeEach(async () => {
    const goerli = ethers.getDefaultProvider("goerli")
    price = new ethers.Contract(constant.PRICE_ADDR, constant.PRICE_ABI, goerli) as Price
  })

  describe("getPrice", async () => {
    it("Get ETH/USD price", async () => {
      expect(await price.getLatestPrice()).to.greaterThan(0)
    })
  })
})
