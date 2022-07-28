import "@nomiclabs/hardhat-ethers"
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Hero Test", function() {
    async function createHero() {
        const Hero = await ethers.getContractFactory("Hero");
        const hero = await Hero.deploy();
        await hero.deployed()

        return hero;
    }

    let hero;

    before(async function() {
        hero = await createHero()
    });

    it("Should fail at creating hero cause of payment", async function() {
        let e;

        try {
            await hero.createHero(0, {
                value: ethers.utils.parseEther("0.049999999")
            })
        } catch (error) {
            e = error
        }
        expect(e.message.includes("Please send more money")).to.equal(true)
    })
});