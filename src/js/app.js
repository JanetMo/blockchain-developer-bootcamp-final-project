App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load appointments
    $.getJSON('../appointments.json', function(data) {
      var appsRow = $('#appsRow');
      var appTemplate = $('#appTemplate');

      for (i = 0; i < data.length; i ++) {
        appTemplate.find('.panel-title').text(data[i].name);
        appTemplate.find('img').attr('src', data[i].picture);
        appTemplate.find('.appointment-specialization').text(data[i].specialization);
        appTemplate.find('.appointment-date').text(data[i].date);
        appTemplate.find('.appointment-location').text(data[i].location);
        appTemplate.find('.btn-book').attr('data-id', data[i].id);

        appsRow.append(appTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {

    // Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });;
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {

      $.getJSON('Booking.json', function(data) {
    // Get the necessary contract artifact file and instantiate it with @truffle/contract
    var BookingArtifact = data;
    App.contracts.Booking = TruffleContract(BookingArtifact);

    // Set the provider for our contract
    App.contracts.Booking.setProvider(App.web3Provider);

    // Use our contract to retrieve and mark the booek appointments
    return App.markBooked();
  });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-book', App.handleBook);
  },

  markBooked: function() {
    var BookingInstance;

      App.contracts.Booking.deployed().then(function(instance) {
        BookingInstance = instance;

        return BookingInstance.getPatients.call();
      }).then(function(patients) {
        for (i = 0; i < patients.length; i++) {
          if (patients[i] !== '0x0000000000000000000000000000000000000000') {
            $('.panel-app').eq(i).find('button').text('Success').attr('disabled', true);
          }
        }
      }).catch(function(err) {
        console.log(err.message);
      });
  },

  handleBook: function(event) {
    event.preventDefault();

    var appId = parseInt($(event.target).data('id'));

        var BookingInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.Booking.deployed().then(function(instance) {
        BookingInstance = instance;

        // Execute booking as a transaction by sending account
        return BookingInstance.book(appId, {from: account});
      }).then(function(result) {
        return App.markBooked();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
