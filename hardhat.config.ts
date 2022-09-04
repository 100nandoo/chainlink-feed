import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import * as constant from "./constant"

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: constant.ALCHEMY_GOERLY_URL,
      accounts: [`0x${constant.PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: constant.ETHERSCAN_KEY
  }
}

export default config
