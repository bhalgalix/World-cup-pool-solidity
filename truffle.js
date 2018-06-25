require('babel-register')
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "abstract protect torch poverty anger pen remove core airport omit cable eager";


module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
      gas: 4000,
      gasPrice: 200000
    },
    rinkeby: {
        provider: function() {
          return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/8CRFBT3k9ttMzakEOVAp")
        },
        network_id: 4,
        gas: 3000000
      }
  }
}