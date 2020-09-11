// Business Logic
export default class CurrencyConversion {
  constructor(amount, apiObject, convertTo) {
    this.amount = amount;
    this.apiObject = apiObject;
    this.convertTo = convertTo;
  }
  
  filterConvertTo(convertToAmount) {
    let apiInfo = this.apiObject;
    this.apiValue = apiInfo.filter(convertToAmount => convertToAmount )
  }

  multipyAmount() {
    this.amount = (this.amount * unknown).toFixed(2);
  }

}