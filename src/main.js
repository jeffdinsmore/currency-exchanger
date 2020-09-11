import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-service.js';
// import CurrencyConversion from './../js/currency-logic.js';

$(document).ready(function () {
  $("#executeButton").click(function () {
    const currencyAmount = parseFloat($("#currency").val()).toFixed(2);
    console.log(currencyAmount)
    const exchangeFrom = $("#currencyType").val();
    // const exchangeTo = $("#currencyType2").val();
    $("#currency").val("");
    let promise = CurrencyExchange.getCurrency(exchangeFrom);
    promise.then(function(response) {
      // const exchangeTo = $("#currencyType2").val();
      const apiResponse = JSON.parse(response);
      console.log(apiResponse.conversion_rates);
      const USD = apiResponse.conversion_rates.USD;
      const AED = apiResponse.conversion_rates.AED;
      const ARS = apiResponse.conversion_rates.ARS;
      const AUD = apiResponse.conversion_rates.AUD;
      const BGN = apiResponse.conversion_rates.BGN;
      const BRL = apiResponse.conversion_rates.BRL;
      const BSD = apiResponse.conversion_rates.BSD;
      console.log(USD);
      console.log(AED);
      console.log(ARS);
      console.log(AUD);
      console.log(BGN);
      console.log(BRL);
      console.log(BSD);
      $("#currencyOutput1").text((currencyAmount * USD).toFixed(2));
      $("#currencyOutput2").text((currencyAmount * AED).toFixed(2));
    }, function(error) {
      $("#outputError").html(`Error! Please try again ${error}`);
    });
  });
});
