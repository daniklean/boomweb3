import "@nomiclabs/hardhat-ethers"
import { ethers } from "hardhat";

describe("Test Gas", function() {
    it("Test now", async function() {
        // 1 step: setup enviroments
        // 2 step: deploy our contract
        // 3 stetp: call our functions to test

        const Gas = await ethers.getContractFactory("TestReport");
        const deploy = await Gas.deploy();
        await deploy.deployed();

        for( let i = 0; 1 < 10; ++i) {
            await deploy.test1();
            await deploy.test2();
            await deploy.test3();
            await deploy.test4();
            await deploy.test5();
        }

    });
});