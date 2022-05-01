function alertForMiscreant(people) {
  if (findMiscreant(people) !== '') setOffAlarms();
}

function findMiscreant(people) {
  for (const p of people) {
    if (p === '조커') {
      return ' 조커';
    }
    if (p === '사루만') {
      return ' 사루만';
    }
  }
  return '';
}

const found = findMiscreant(people);
alertForMiscreant(people);
