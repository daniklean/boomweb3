// SPDX-Licence-Identifier: MIT

pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Counter {

    uint private counter;

    function count() public returns (uint) 
    {
        counter++;
        console.log("Counter is now", counter);
        return counter;
    }

    function view() view pure returns (uint) 
    {
        return counter;
    }
}