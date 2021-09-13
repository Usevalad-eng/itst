const numbers = [45, 4, 9, -16, 25];
let allOverMinus = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value < 0;
}
console.log(allOverMinus);