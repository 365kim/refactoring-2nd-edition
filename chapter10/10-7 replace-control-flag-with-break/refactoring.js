checkForMiscreants(people);

function checkForMiscreants(people) {
  for (const p of people) {
    if (!found) {
      if (p === '조커') {
        sendAlert();
        return;
      }
      if (p === '사루만') {
        sendAlert();
        return;
      }
    }
  }
}

// Or

function checkForMiscreantsAlt(people) {
  if (people.some((p) => ['조커', '사루만'].includes(p))) sendAlert();
}
