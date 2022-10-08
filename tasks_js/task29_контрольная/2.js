let array1 = [3, 3, 1, 2, 7];
sum = 0;
array1.forEach(func);
function func(value){
  if(value > 0){  
  sum += value;
  }
}
console.log(sum);