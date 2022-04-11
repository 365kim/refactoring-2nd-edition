function distanceTraveled(scenario, time) {
  let result;
  let acc = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);

  result = 0.5 * acc * primaryTime * primaryTime;

  let secondaryTime = time - scenario.delay;

  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay;

    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
  }

  return result;
}
