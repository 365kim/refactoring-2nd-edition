// 전역객체 thermostat
const thermostat = {
  selectedTemperature: 15,
  currentTemperature: 20,
};

if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
else setOff();

class HeatingPlan {
  // targetTemperature가 전역객체 thermostat에 의존
  get targetTemperature() {
    if (thermostat.selectedTemperature > this._max) return this._max;
    else if (thermostat.selectedTemperature < this._min) return this._min;
    else return thermostat.selectedTemperature;
  }
}
