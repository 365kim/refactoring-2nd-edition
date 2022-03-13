// 원둘레(circumference)
function circumference(radius) {
  return 2 * Math.PI * radius;
}

class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    // 새로 추가한 매개변수를 사용하는지 확인
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

const newEnglanders = someCustomers.filter((c) => isNewEngland(c.address.statusCode));
function isNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}
