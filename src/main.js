import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-service.js';

$(document).ready(function () {
  $("#executeButton").click(function () {
    const currencyAmount = parseFloat($("#currency").val()).toFixed(2);
    let exchangeFrom = $("#currencyType").val();
    let exchangeTo = $("#currencyType2").val();
    console.log(currencyAmount);
    if (currencyAmount == "NaN") {
      alert("Please enter a number in the 'Enter An Amount' field.");
    } else {
      $("#result").show();
    
      let promise = CurrencyExchange.getCurrency(exchangeFrom);
      
      promise.then(function(response) {
        const apiResponse = JSON.parse(response);
        let firstInput= apiResponse.conversion_rates[exchangeFrom];
        let secondInput = apiResponse.conversion_rates[exchangeTo];
        $("#outputRate").text(firstInput + exchangeFrom + " = " + secondInput + exchangeTo);
        $("#currencyOutput1").text((currencyAmount * firstInput).toFixed(2));
        $("#currencyOutput2").text((currencyAmount * secondInput).toFixed(2));
        $("#currencyOutputType1").text(exchangeFrom);
        $("#currencyOutputType2").text(exchangeTo);
      }, function(error) {
        $("#outputError").html(`There was an error processing your request: ${error}`);
      });
    }
    
  });
});
