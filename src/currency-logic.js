// Business Logic
export default class CurrencyConversion {
  constructor(amount, apiObject, convertTo) {
    this.amount = amount;
    this.apiObject = apiObject;
    this.convertTo = convertTo;
  }
  
  filterConvertTo(convertToAmount) {
    this.apiObject = Object.filter
  }

  multipyAmount() {
    this.amount = (this.amount * unknown).toFixed(2);
  }

}