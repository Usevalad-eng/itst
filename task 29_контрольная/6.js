

const numbers = [45, 4, 9, -4, 25];
let numbers2 = [4, 5, 6, 7, 8];
let allOver0 = numbers.every(myFunction);

function myFunction(value, index, array) {
    
  return value > 0;
}
console.log(allOver0);
