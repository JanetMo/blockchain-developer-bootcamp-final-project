// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;
/// @title Register your medical appointment on the blockchain.
/// @author JanetMo
/// @notice This is a test contract, it's only deployed on the testnet. 
/// custom:experimental This is an experimental contract.

import "@openzeppelin/contracts/access/Ownable.sol";


contract Booking is Ownable { 

    address[6] patients;
    
    modifier appIdInrange (uint _appId) {
        require(_appId >= 0 && _appId <= 5, "Maximum number of appointments bookings is reached");
        _;
    }

/// Booking a medical appointment
    function book(uint appId) public appIdInrange(appId) returns (uint) {

        patients[appId] = msg.sender;

        return appId;
    }

  /// Retrieving the appointment 
    function getPatients() public view returns (address[] memory) {

        return patients;
    }



}