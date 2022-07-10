import { ethers } from "ethers";

async function hasSigners(): Promise<boolean> {
    //@ts-ignore
    const metamask = window.ethereum;
    const signers = await (metamask.request({method: 'eth_accounts'}) as Promise<string[]>);
    return signers.length > 0;
}

async function requestAccess(): Promise<boolean> {
    //@ts-ignore
    const result = (await window.ethereum.request({ method: 'eth_requestAccounts'})) as string[];
    return result && result.length > 0;
}

async function getContract() {
    const address = process.env.CONTRACT_ADDRESS;
    

    if (!(await hasSigners()) && !(await requestAccess())) {
        console.log("You are in trouble, no one wants to play");
    } 

    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum).getSigner();
    const contract = new ethers.Contract(
        address,
        [
            "function count() public returns (uint)",
            "function views() public view returns (uint32)"

        ], // abi
        provider
    );
    const elem = document.createElement("div");
    const setCounter = async () => {
        elem.innerHTML = await contract.views();
    };
    setCounter();

    const button = document.createElement("button");
    button.innerHTML = "Increment";
    button.onclick = async () => {
        const tx = await contract.count();
       await tx.wait();
        setCounter();
    } 

    console.log("We have done it, time to call");

    document.body.appendChild(elem);
    document.body.appendChild(button);
    //console.log(await contract.hello());
}

getContract();