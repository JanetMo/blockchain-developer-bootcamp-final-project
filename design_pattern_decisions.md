The two design pattern decisions used in the project are:

  Inheritance and interfaces: 
  - The project contract inherits Ownable.sol from OpenZeppelin to manage ownership.
  

  Access control design patterns: 
  - Ownable.sol is used to make contract ownership more robust and easily verified.


"This function is restricted to the contract's owner" modifier in Migrations.sol

Ownable design pattern is used to only allow owner of the contract to withdraw any leftover ERC20 tokens (LINK).

Adds restrictions to some actions in GambleSaleListing by using modfiers (onlyOwner) from the imported Ownable contract.

The main contract uses the Ownable module from OpenZeppelin.
In this pattern, a single account has exclusive access to specific functions. This account (the owner) will be the the address that deploys the contract.

import "@openzeppelin/contracts/access/Ownable.sol";

contract Booking is Ownable { 