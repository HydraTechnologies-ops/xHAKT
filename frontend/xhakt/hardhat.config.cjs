require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("dotenv/config");

const alchemyAPI = process.env.ALCHEMY_API_KEY_ETH;
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyAPI}`,
      accounts: [process.env.LOCAL_PRIVATE_KEY],
    },
  },
};
