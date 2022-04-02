function foundPerson(people) {
  for (let i = 0; i < people; i++) {
    if (people[i] === 'Don') return 'Don';
    if (people[i] === 'John') return 'John';
    if (people[i] === 'Kent') return 'Kent';
    return '';
  }
}
