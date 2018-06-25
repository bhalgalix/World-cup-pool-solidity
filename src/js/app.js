App = {
  // Attributes
  account: undefined,
  config:{
    protocol: 'http',
    host: 'localhost',
    port: '7485',
  },
  contracts: {},
  elements: {
    betBtn: $('.btn-bet-js'),
    test1Btn: $('.btn-test1-js'),
    test2Btn: $('.btn-test2-js'),

  },
  web3: undefined,

  // Methods
  init: function(){
    App.initWeb3();
    App.bindEvents();
  },
  initWeb3: function(){
    // Is there an injected web3 instance?
    var web3Provider = typeof web3 !== 'undefined';
    if (web3Provider) {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider(App.config.protocol + '://' + App.config.host + ':' + App.config.port);
    }
    App.web3 = new Web3(App.web3Provider);
    App.initContract();
    App.getAccount();
  },
  initContract: function(){
    $.getJSON('PoolMain2.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var PoolMain2Artifact = data;
      App.contracts.PoolMain2 = TruffleContract(PoolMain2Artifact);

      // Set the provider for our contract
      App.contracts.PoolMain2.setProvider(App.web3Provider);

      // Use our contract to retrieve and mark the adopted pets
      return App.instantiateContract();

    });
  },
  instantiateContract: function(){
    App.contracts.PoolMain2
      .deployed()
      .then(function(instance) { App.contractInstance = instance; })
      .catch(function(error){ console.log(error.message); });

  },
  getAccount: function(){
    // Not sure that it always going to be 0 if some isn's using metamask.
    App.account = App.web3.eth.accounts[0];
  },
  bindEvents: function(){
    App.elements.betBtn.on('click', App.participate);
    App.elements.test1Btn.on('click', App.test1js);
    App.elements.test2Btn.on('click', App.test2js);

  },
  participate: function(e){
    App.contractInstance.getBet(
      { from: App.account,
        value: App.web3.toWei(0.1, "ether")
      }).then(function(addr){
        App.contractInstance.getBalance
        .call()
        .then(function(balance){
          console.log(App.web3.fromWei(balance.toString(), 'ether'));
          App.elements.balanceText.html(App.web3.fromWei(balance.toString(), 'ether'));
        }) 
        .catch(function(error){ console.log(error); });
      })
        .catch(function(error){ console.log(error); });
  },  
  test1js: function(){
    App.contractInstance.test1(
      ).then(function(test1Var){ console.log(test1Var.toLocaleString())})
        .catch(function(error){ console.log(error); });
  },
    test2js: function(){
    App.contractInstance.test2(
      ).then(function(test2Var){ console.log(test2Var.toLocaleString())})
        .catch(function(error){ console.log(error); });
  },
  /*selectTheWinner: function(){
    App.contractInstance.selectWinner(
      { from: App.account,
        value: App.web3.toWei(1.0, "ether")
      }
      ).then(function(addr){ console.log(addr)})
        .catch(function(error){ console.log(error); });
  },
  getBalancejs: function(){
    App.contractInstance.getBalance(
      ).then(function(balance){ console.log(App.web3.fromWei(balance.toString(), 'ether'))})
        .catch(function(error){ console.log(error); });
  },
  payTheRewardjs: function(){
    App.contractInstance.payTheReward(
      {from: App.account,
        value: App.web3.toWei(0.1, "ether")
      }
      ).then(function(balance){ console.log("reward paid!!!")})
        .catch(function(error){ console.log(error); });
  },
  test1js: function(){
    App.contractInstance.test1(
      ).then(function(test1Var){ console.log(test1Var) })
        .catch(function(error){ console.log(error); });
  },
  test2js: function(){
    App.contractInstance.test2(
      ).then(function(test2Var){ console.log(test2Var.toLocaleString())})
        .catch(function(error){ console.log(error); });
  }*/
  }


window.App = App;

(function(init){
  init();
})(window.App.init);
