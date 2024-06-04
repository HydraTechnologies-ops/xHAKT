import dotenv from "dotenv";
dotenv.config();

async function main() {
  const hre = await import("hardhat");
  const { ethers } = hre.default;
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const DAO = await ethers.getContractFactory("DAO");
  const dao = await DAO.deploy();

  await dao.deploymentTransaction();

  const daoAddress = await dao.getAddress();
  await console.log("DAO contract deployed to:", daoAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
