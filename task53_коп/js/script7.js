//7
/*
let array1 = [3, 9, 1, 2, 8];
let k = 5;
/*
sum = 0;
array1.forEach(func);
function func(value){
  sum += value;
}
let sredAr= sum / array1.length;
console.log(sredAr);//среднее арифметическое массива 



function getArray(a){

  let c = [];
  

  for(let i = 0; i < array1.length; i++){
    if(array1[i] < k){
      c.push(array1[i]);
    }  
    
  }

  return c;
  
}
/*
function getArray(b){

    
    let d = [];
  
    for(let i = 0; i < array1.length; i++){
      if(array1[i] > k){
        d.push(array1[i]);
      }  
      
    }
  
    return d;
    
  }

let a = getArray(array1);
console.log(a);
//let b = getArray(array1);
//console.log(b);
*/

//7
let A = 0;
let numbers = [ 1, -12, 8, -4, 25, 42 ];
let filteredNumbers = numbers.filter(n => n > A);
console.log(filteredNumbers); // [1, 8, 25, 42]
let filteredNumbers2 = numbers.filter(n => n < A);
console.log(filteredNumbers2); // [-12,14]
let arr3 = filteredNumbers2.concat(filteredNumbers);
console.log (arr3);