class Order {
  constructor(data) {
    this._priority = data.priority;
  }

  get priorityString() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`<${value}>는 유효하지 않은 우선순위입니다.`);
    }
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }

  get priority() {
    return this.value;
  }

  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }

  higherThan(other) {
    return this._index > other._index;
  }
}

highPriorityCount = order.filter(
  (o) => 'high' === o.priorityString || 'rush' === o.priorityString
).length;
