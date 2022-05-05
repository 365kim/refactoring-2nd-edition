const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;

if (aPlan.withinRange(low, high)) {
  alert.push('방 온도가 지정범위를 벗어났습니다.');
}

class HeatingPlan {
  withinRange(bottom, top) {
    return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
  }
}
