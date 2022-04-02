class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set department(arg) {
    this._department = arg;
  }
  get manager() {
    return this._department.manager;
  }
}

class Department {
  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

// 클라이언트가 department 클래스의 동작방식을 몰라도 됨.
manager = aPerson.manager;
