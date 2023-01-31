const {expect} = require("chai");
const { ethers } = require("hardhat")

describe("Channels", async function() {   

    let Channels

    let [owner, addr1, addr2] = await ethers.getSigners();
    
    beforeEach(async () => {
        const ChannelsFactory = await ethers.getContractFactory("Channels");
        Channels = await ChannelsFactory.deploy();
        await Channels.deployed();
    });

});