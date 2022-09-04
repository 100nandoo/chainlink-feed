import { ethers } from "hardhat"

async function main() {
  const Price = await ethers.getContractFactory("Price")
  const price = await Price.deploy()

  await price.deployed()

  console.log(`Deployed to ${price.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
