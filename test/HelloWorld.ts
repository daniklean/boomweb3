import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", function() {
    it("Should say hi", async function() {
        // 1 Setup
        // 2 Deploy to smart contract
        // 3 Call our function to test

        const HelloWorld = await ethers.getContractFactory("MyContractWorld");
        const hello = await HelloWorld.deploy();
        await hello.deployed()
        expect(await hello.helloworld()).to.equal('Hello Word')
    });
});