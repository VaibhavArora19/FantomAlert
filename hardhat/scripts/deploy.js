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

//contract needs to be redeployed
//Channels Contract => 0xddDe75Cd5cBe775A82Ca76D2080a24082Ce6927f
// startBlock: 13899200