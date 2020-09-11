import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-service.js';
// import CurrencyConversion from './../js/currency-logic.js';

$(document).ready(function () {
  $("#executeButton").click(function () {
    // const currencyAmount = parseInt($("#currency")).val();
    const exchangeFrom = $("#currencyType").val();
    console.log(exchangeFrom);
    // const exchangeTo = $("#currencyType2").val();
    $("#currency").val("");
    let promise = CurrencyExchange.getCurrency(exchangeFrom);
    promise.then(function(response) {
      const main = JSON.parse(response);
      $("#currencyOutput1").text(main.conversion_rates.USD);
      $("#currencyOutput2").text(main.conversion_rates.AED);
    }, function(error) {
      $("#outputError").html(`Error! Please try again ${error}`);
    });
  });
});
