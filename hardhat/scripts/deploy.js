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


//Channels Contract => 0x53Df47f2342F4dDdc06c6A943DC885E7DA4fc651
// startBlock: 13710667