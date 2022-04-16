// 다섯 건의 Order가 들어오면 같은 고객이더라도 같은 Customer 객체 5개가 만들어진다.

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}
