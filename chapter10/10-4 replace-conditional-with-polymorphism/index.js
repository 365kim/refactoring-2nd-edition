/* Example 1 */

function plumages(birds) {
  return new Map(birds.map((b) => [b.name, plumage(b)]));
}

function speed(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return '보통이다';
    case 'AfricanSwallow':
      return bird.numberOfCoconuts > 2 ? '지쳤다' : '보통이다';
    case 'NorwegianBlueParrot':
      return bird.voltage > 100 ? '그을렸다' : '예쁘다';
    default:
      return '알 수 없다';
  }
}

function airSpeedVelocity(bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return 35;
    case 'AfricanSwallow':
      return 40 - 2 * bird.numberOfCoconuts;
    case 'NorwegianBlueParrot':
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    default:
      return null;
  }
}
