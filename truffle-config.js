// const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
// const infuraKey = fs.readFileSync(".infura").toString();
// const mnemonic = fs.readFileSync(".mnemonic").toString().trim();

//   contracts_build_directory: "./client/src/contracts",

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "172.20.32.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }

    // ropsten: {
      // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      // network_id: 3,       // Ropsten's id
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      // },
  }

// Configure your compilers
// compilers: {
  // solc: {
    // version: "0.8.10", // Fetch exact version from solc-bin (default: truffle's version)
    // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
    // settings: {
        // See the solidity docs for advice about optimization and evmVersion
     // optimizer: {
      //  enabled: false,
      //  runs: 200,
      //},
      //evmVersion: "byzantium",
    //},
  //},
//},

};
