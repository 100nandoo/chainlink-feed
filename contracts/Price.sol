// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Price {
    AggregatorV3Interface internal priceFeedEthUsd;
    AggregatorV3Interface internal priceFeedDaiUsd;
    AggregatorV3Interface internal priceFeedUsdcUsd;


    /**
     * Network: Goerli
     * More addresses: https://docs.chain.link/docs/ethereum-addresses/
     */

    address constant ETH_USD = 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e;
    address constant DAI_USD = 0x0d79df66BE487753B02D015Fb622DED7f0E9798d;
    address constant USDC_USD = 0xAb5c49580294Aff77670F839ea425f5b78ab3Ae7;

    constructor() {
        priceFeedEthUsd = AggregatorV3Interface(ETH_USD);
        priceFeedDaiUsd = AggregatorV3Interface(DAI_USD);
        priceFeedUsdcUsd = AggregatorV3Interface(USDC_USD);
    }

    /**
     * Returns the latest price
     */
    function getEthUsd() public view returns (int) {
        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeedEthUsd.latestRoundData();
        return price;
    }

    function getDaiUsd() public view returns (int) {
        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeedDaiUsd.latestRoundData();
        return price;
    }

    function getUsdcUsd() public view returns (int) {
        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeedUsdcUsd.latestRoundData();
        return price;
    }
}