const { ethers, upgrades } = require("hardhat");

async function main() {
  const MyContract = await ethers.getContractFactory("MyContract");
  console.log("Deploying MyContract...");
  
  const myContract = await upgrades.deployProxy(MyContract, [100], {
    initializer: "initialize",
    kind: "uups"
  });
  
  await myContract.waitForDeployment();
  console.log("MyContract deployed to:", await myContract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});