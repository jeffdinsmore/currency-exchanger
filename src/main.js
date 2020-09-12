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
      $("#outputErrorFromInput").hide();
      $("#outputRate").show();
      
      let promise = CurrencyExchange.getCurrency(exchangeFromInput);
      promise.then(function(response) {
        const apiResponse = JSON.parse(response);
        if (apiResponse.result === "error" || apiResponse.conversion_rates[exchangeToInput] == null) {
          $("#outputErrorFromInput").show();
          $("#outputRate").hide();
          $("#result").hide();
        }
        let firstCurrencyTypeInput = apiResponse.conversion_rates[exchangeFromInput];
        let secondCurrencyTypeInput = apiResponse.conversion_rates[exchangeToInput];
        $("#outputRate").text(firstCurrencyTypeInput + exchangeFromInput + " = " + secondCurrencyTypeInput + exchangeToInput);
        $("#currencyExchangeOutput").text("You have " + (currencyAmount * firstCurrencyTypeInput).toFixed(2) + exchangeFromInput + " that equals " + (currencyAmount * secondCurrencyTypeInput).toFixed(2) + exchangeToInput);
      }, function(error) {
        $("#outputError").html(`There was an error processing your request: ${error}`);
      });
    } 
  });
});

