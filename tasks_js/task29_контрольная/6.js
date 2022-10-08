
/*
const numbers = [45, 4, 9, -4, 25];
let numbers2 = [4, 5, 6, 7, 8];
let allOver0 = numbers.every(myFunction);

function myFunction(value, index, array) {
    
  return value > 0;
}
console.log(allOver0);
*/
a = [1, 2, 3], b = [1, 2, 3];
let result = a.every(function(item,index,array){
  return item == b[index];
});
console.log(result);
