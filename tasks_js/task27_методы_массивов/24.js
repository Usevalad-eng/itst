

let a = [1,2,-3,4,5], b = [];


a.forEach(function(item,index,array) {
    if(item >= 0)
    b.push(item);

});

console.log(b);
let numbers1 = b;
let numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value ** 0.5;
}
console.log(numbers2);