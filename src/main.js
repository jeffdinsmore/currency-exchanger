import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-service.js';

$(document).ready(function () {
  $("#executeButton").click(function () {
    const currencyAmount = parseFloat($("#currency").val()).toFixed(2);
    let firstCurrencyTypeInput = $("#currencyType1").val();
    let secondCurrencyTypeInput = $("#currencyType2").val();
    if (currencyAmount == "NaN") {
      alert("Please enter a number in the 'Enter An Amount' field.");
    } else if (firstCurrencyTypeInput.length == 0 || secondCurrencyTypeInput.length == 0) {    
      $("#outputErrorFromInput").show();
      $("#outputRate").hide();
      $("#result").hide();
    } else {
      $("#result").show();
      $("#outputErrorFromInput").hide();
      $("#outputRate").show();
      
      let promise = CurrencyExchange.getCurrency(firstCurrencyTypeInput);
      promise.then(function(response) {
        const apiResponse = JSON.parse(response);
        if (apiResponse.result === "error" || apiResponse.conversion_rates[secondCurrencyTypeInput] == null || apiResponse.conversion_rates[firstCurrencyTypeInput] == null) {
          $("#outputErrorFromInput").show();
          $("#outputRate").hide();
          $("#result").hide();
        }
        let firstCurrencyApiResponseForOutput = apiResponse.conversion_rates[firstCurrencyTypeInput];
        let secondCurrencyApiResponseForOutput = apiResponse.conversion_rates[secondCurrencyTypeInput];
        $("#outputRate").text(firstCurrencyApiResponseForOutput + firstCurrencyTypeInput + " = " + secondCurrencyApiResponseForOutput + secondCurrencyTypeInput);
        $("#currencyExchangeOutput").text("You have " + (currencyAmount * firstCurrencyApiResponseForOutput).toFixed(2) + firstCurrencyTypeInput + " that equals " + (currencyAmount * secondCurrencyApiResponseForOutput).toFixed(2) + secondCurrencyTypeInput + ".");
      }, function(error) {
        $("#outputError").html(`There was an error processing your request: ${error}`);
      });
    } 
  });
});

