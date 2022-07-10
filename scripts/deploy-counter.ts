import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

const deployCounter = async () => {
    const C = await ethers.getContractFactory("Counter");
    const counter = await C.deploy()
    console.log(await counter.count())
    console.log("counter", await counter.views())
}

deployCounter()