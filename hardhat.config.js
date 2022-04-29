require("@nomiclabs/hardhat-waffle");
//require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/AbcUup-ussWTFlWAjQ6iSaEzdIvZpOZK",
      accounts: ["329dbeab55c08f6ed56d29af9ac44dc74e6d6380c12e4d938abf4664cd227f81"]
    },
  },
};