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

// department 정보가 필요할 때마다 서버가 대신 접근해줌
manager = aPerson.manager;
