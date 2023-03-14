async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const RideChain = await ethers.getContractFactory("RideChain");
  const ridechain = await RideChain.deploy();

  console.log("RideChain deployed to:", ridechain.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });