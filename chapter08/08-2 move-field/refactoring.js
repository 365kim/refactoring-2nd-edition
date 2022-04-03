class Customer {
  constructor(name, discountRate) {
    this._name = name;
    // this._discountRate = discountRate;
    this._contract = new CustomerContract(dateToday());
    this._setDiscountRate(this._contract.discountRate);
  }

  get discountRate() {
    return this._discountRate;
  }
  _setDiscountRate(aNumber) {
    this._contract.discountRate = aNumber;
  }
  becomePreferred() {
    this._setDiscountRate(this._discountRate + 0.03);
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }
  set discountRate(arg) {
    this._discountRate = arg;
  }
}
