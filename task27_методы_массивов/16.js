const numbers1 = [5, 4, 9, 16, 25_000];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value ** 2;
}
console.log(numbers2);