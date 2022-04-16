class ProductionPlan {
  constructor(production) {
    this._production = production;
    this._adjustments = [];
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
  }

  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
}
