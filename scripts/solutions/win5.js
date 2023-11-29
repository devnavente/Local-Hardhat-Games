// add the game address here and update the contract name if necessary
const gameAddr = "0x9E545E3C0baAB3E08CdfD552C960A1050f373042";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  const balance = 10000;
  await game.giveMeAllowance(balance);
  await game.mint(balance);

  const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });