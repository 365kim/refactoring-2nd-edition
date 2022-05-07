class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() {
    return this._name;
  }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }
  static get legalTypeCodes() {
    return {
      E: 'Engineer',
      M: 'Manager',
      S: 'Salesperson',
    };
  }
}

// 팩터리 함수
function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

function createEngineer(name) {
  return new Employee(name, 'E');
}

const candidate = new Employee(document.name, document.empType);
const leadEngineer = new Employee(document.leadEngineer);
