if (aPlan.withinRange(aRoom.daysTempRange)) {
  alert.push('방 온도가 지정범위를 벗어났습니다.');
}

class HeatingPlan {
  withinRange(aNumberRange) {
    return aNumberRange.low >= this._temperatureRange.low && aNumberRange.high <= this._temperatureRange.high;
  }
}
