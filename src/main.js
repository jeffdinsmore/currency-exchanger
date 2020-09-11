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
    const exchangeTo = $("#currencyType2").val();
    $("#currency").val("");
    let promise = CurrencyExchange.getCurrency(exchangeFrom);
    promise.then(function(response) {

      const main = JSON.parse(response);
      const USD = main.conversion_rates.USD;
      const AED = main.conversion_rates.AED;
      const ARS = main.conversion_rates.ARS;
      const AUD = main.conversion_rates.AUD;
      const BGN = main.conversion_rates.BGN;
      const BRL = main.conversion_rates.BRL;
      const BSD = main.conversion_rates.BSD;
      console.log(USD);
      console.log(AED);
      console.log(ARS);
      console.log(AUD);
      console.log(BGN);
      console.log(BRL);
      console.log(BSD);
      $("#currencyOutput1").attr(exchangeFrom);
      $("#currencyOutput2").text(exchangeTo);
    }, function(error) {
      $("#outputError").html(`Error! Please try again ${error}`);
    });
  });
});
