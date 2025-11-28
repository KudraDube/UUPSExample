// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// CHANGE THESE IMPORTS - use "contracts-upgradeable" instead of "contracts"
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

// CHANGE THE INHERITANCE - use OwnableUpgradeable instead of Ownable
contract MyContract is UUPSUpgradeable, OwnableUpgradeable {
    uint256 public value;

    function initialize(uint256 initialValue) public initializer {
        value = initialValue;
        __Ownable_init(msg.sender); // ADD THIS LINE - initialize OwnableUpgradeable
    }

    function setValue(uint256 newValue) public onlyOwner {
        value = newValue;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}