function fn() {
  return `최연소: ${youngestAge()}, 총급여: ${totalSalary}`;

  function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
  }

  function youngestAge() {
    return Math.min(...people.map((p) => p.age));
  }
}
