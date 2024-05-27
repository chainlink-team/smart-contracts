const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const Roulette = await ethers.getContractFactory("Roulette");
  const contract = await Roulette.deploy(
    "12824529544710224527394711280176968075090057706560042378439322172826527236482",
    "0x5c210ef41cd1a72de73bf76ec39637bb0d3d7bee",
    "0xc799bd1e3bd4d1a41cd4968997a4e03dfd2a3c7c04b695881138580163f42887",
    "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846"
  );

  await contract.waitForDeployment();
  console.log("Contract deployed to:", await contract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
