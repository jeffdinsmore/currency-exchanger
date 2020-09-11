import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './../js/currency-service.js';
import CurrencyConversion from './../js/currency-logic.js';

$(document).ready(function () {
  $("#exchangeButton").click(function () {
    const currencyAmount = parseInt($("#currency")).val();
    const exchangeFrom = $("#currencyType").val();
    const exchangeTo = $("#currencyType2").val();
  })
})
