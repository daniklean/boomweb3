import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Testing for contracts, Hello World", function() {
    it("should say hello world", async function() {
        // 1 step: setup enviroments
        // 2 step: deploy our contract
        // 3 stetp: call our functions to test

        const HW = await ethers.getContractFactory("HelloWorld");
        const deploy = await HW.deploy();
        await deploy.deployed();

        expect( await deploy.hello()).to.equal("hello")

    });
});