// add the game address here and update the contract name if necessary
const gameAddr = "0x9A676e781A523b5d0C0e43731313A708CB607508";
const contractName = "Game2";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  await game.setX(25);
  await game.setY(25);

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