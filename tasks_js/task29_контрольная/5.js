let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

c = arr1.concat(arr2);
c = c.concat(arr3);
console.log(c);
c.sort(function(a, b){return b - a});
console.log(c);
