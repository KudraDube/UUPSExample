const { ethers, upgrades } = require("hardhat");

async function main() {
  const MyContractV2 = await ethers.getContractFactory("MyContractV2");
  
  // Replace with your actual proxy address from deployment
  const proxyAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  
  console.log("Upgrading MyContract...");
  const myContractV2 = await upgrades.upgradeProxy(proxyAddress, MyContractV2);
  
  console.log("MyContract upgraded to V2 at:", await myContractV2.getAddress());
  
  // Test the new function
  console.log("Testing increment function...");
  await myContractV2.incrementValue();
  const newValue = await myContractV2.value();
  console.log("New value after increment:", newValue.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});