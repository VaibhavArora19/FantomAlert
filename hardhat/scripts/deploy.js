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


//Channels Contract => 0x9cdaf55edFcb42f7A65d2ffbE7A5Fd80Ed65C326
// startBlock: 13710667