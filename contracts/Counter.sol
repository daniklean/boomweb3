// SPDX-Licence-Identifier: MIT

pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Counter {

    uint private counter;
    event CounterInc( address indexed adrr, uint counter);

    function count() public returns (uint) 
    {
        counter++;
        console.log("Counter is now", counter);
        return counter;
        emit CounterInc(msg.sender, counter);
    }

    function views() public view returns (uint32) 
    {
        return uint32(counter);
    }
}