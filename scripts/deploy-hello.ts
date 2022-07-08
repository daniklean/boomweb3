import "@nomiclabs/hardhat-ethers"
import { ethers } from "hardhat";

async function deployment() {
    const HW = await ethers.getContractFactory("HelloWorld");
    const hello = await HW.deploy();
    await hello.deployed()

    return hello;
}

// @ts-ignore
async function sayHello(hello) {
   console.log("Say Hello Contract", await hello.hello()) ;
}

async function main(){
    const contract = await deployment();
    await sayHello(contract);
}
main();
 