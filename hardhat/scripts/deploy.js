const {ethers} = require("hardhat");

async function main() {

  const ChannelsFactory = await ethers.getContractFactory("Channels");

  const Channels = await ChannelsFactory.deploy();

  await Channels.deployed();

  console.log("Channels deployed to:", Channels.address);

};


main()
.then(() => {
  process.exit(0)
})
.catch(error => {
  console.error(error)
  process.exit(1)
})


//Channels Contract => 0x60bD227D0EcD35C7518D361aBf395eFcEb2AacCa
// startBlock: 13726967 // to be changed