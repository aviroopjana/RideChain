require("@nomicfoundation/hardhat-toolbox");
const fs = require('fs');

const privateKey = fs.readFileSync('.secret').toString().trim();
const ALCHEMY_API_KEY = 'kbBFdIM2TepxIlWDle62S4C9HLj2Tg6p';

const SEPOLIA_PRIVATE_KEY = privateKey;

module.exports = {
  solidity: "0.8.10",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};