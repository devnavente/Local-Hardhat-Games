// add the game address here and update the contract name if necessary
const gameAddr = "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d";
const contractName = "Game3";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  const y = 210;
  const sum = 255;

  const tx = await game.win(sum - y);

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