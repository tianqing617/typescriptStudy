function buildName(firstName: string, lastName?: string) {
  return firstName + ' ' + lastName;
}

const result1 = buildName('Bob');
// const result2 = buildName('Bob', 'Adams', 'Sr.');
const result3 = buildName('Bob', 'Adams');

console.log(result1, result2, result3);
