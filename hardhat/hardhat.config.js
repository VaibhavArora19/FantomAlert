require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const URL = process.env.FANTOM_URL;

module.exports = {
  solidity: "0.8.17",
  networks: {
    fantom:{
    url: URL,
    accounts: [PRIVATE_KEY],
  }
}
};
