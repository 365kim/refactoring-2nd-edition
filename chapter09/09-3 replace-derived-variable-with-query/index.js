class ProductionPlan {
  constructor(production) {
    this._production = production;
    this._adjustments = [];
  }

  get production() {
    return this._production;
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}

// adjustment를 적용하는 과정에서 직접 관련이 없는 누적 값 production까지 갱신한다.
