class Customer {
  applyDiscount(aNumber) {
    if (!this.discountRate) {
      return aNumber;
    } else {
      return aNumber - this.discountRate * aNumber;
    }
  }
  set discountRate(aNumber) {
    assert(aNumber === null || this.discountRate >= 0);
    this._discountRate = aNumber;
  }
}
