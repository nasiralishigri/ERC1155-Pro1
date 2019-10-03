// require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = require('mnemonic');
// require('dotenv').config();

// const INFURA_KEY="fd33c43e73154584bf76f01e33d81b31";
 const MNEMONIC = ["hat", "plants", "girls", "suit", "grade", "sneeze", "glass", "rainstorm", "planes", "chickens", "exchange", "gate"];
// const MNEMONIC = process.env.MNEMONIC;
// const INFURA_KEY = process.env.INFURA_KEY;
// console.log("MNEMONIC  "+ MNEMONIC);

// if (!MNEMONIC || !INFURA_KEY) {
//   console.error("Please set a mnemonic and infura key.")
//   return
// }

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      gas: 4600000,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          "https://rinkeby.infura.io/v3/fd33c43e73154584bf76f01e33d81b31"
        );
      },
      network_id: "*",
      gas: 4000000
    },
    live: {
      network_id: 1,
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          "https://mainnet.infura.io/v3/" + INFURA_KEY
        );
      },
      gas: 4000000,
      gasPrice: 50000000000
    },
    mocha: {
      reporter: 'eth-gas-reporter',
      reporterOptions : {
        currency: 'USD',
        gasPrice: 2
      }
    },
    compilers: {
      solc: {
        version: "^0.5.0"
      }
    },
  }
};