class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

highPriorityCount = order.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority
).length;
