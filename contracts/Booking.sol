// SPDX-License-Identifier: MIT
pragma solidity 0.5.16;
/// @title Register your medical appointment on the blockchain.
/// @author JanetMo
/// @notice This is a test contract, it's only deployed on the testnet.
/// custom:experimental This is an experimental contract.

// import "@openzeppelin/contracts/access/Ownable.sol";

contract Booking // is Ownable
{ 

address[16] public patients;

/// Booking a medical appointment
function book(uint appId) public returns (uint) {
  require(appId >= 0 && appId <= 5);

  patients[appId] = msg.sender;

  return appId;
  }

  /// Retrieving the appointment
function getPatients() public view returns (address[16] memory) {
  return patients;
    }



}