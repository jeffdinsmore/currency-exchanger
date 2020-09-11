import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-service.js';

$(document).ready(function () {
  $("#executeButton").click(function () {
    const currencyAmount = parseFloat($("#currency").val()).toFixed(2);
    let exchangeFromInput = $("#currencyType").val();
    let exchangeToInput = $("#currencyType2").val();
    if (currencyAmount == "NaN") {
      alert("Please enter a number in the 'Enter An Amount' field.");
    } else {
      $("#result").show();
    
      let promise = CurrencyExchange.getCurrency(exchangeFromInput);
      
      promise.then(function(response) {
        const apiResponse = JSON.parse(response);
        let firstCurrencyTypeInput = apiResponse.conversion_rates[exchangeFromInput];
        let secondCurrencyTypeInput = apiResponse.conversion_rates[exchangeToInput];
        $("#outputRate").text(firstCurrencyTypeInput + exchangeFromInput + " = " + secondCurrencyTypeInput + exchangeToInput);
        $("#currencyOutput1").text((currencyAmount * firstCurrencyTypeInput).toFixed(2));
        $("#currencyOutput2").text((currencyAmount * secondCurrencyTypeInput).toFixed(2));
        $("#currencyOutputType1").text(exchangeFromInput);
        $("#currencyOutputType2").text(exchangeToInput);
      }, function(error) {
        $("#outputError").html(`There was an error processing your request: ${error}`);
      });
    }
    
  });
});
