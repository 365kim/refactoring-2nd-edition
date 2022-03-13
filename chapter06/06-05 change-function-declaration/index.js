function circum(radius) {
  return 2 * Math.PI * radius;
}

class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}

const newEnglanders = someCustomers.filter((c) => isNewEngland(c));
function isNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}
