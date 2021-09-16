
let array1 = [3, 9, 1, 2, 8];


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
    if(array1[i] > sredAr){
      c.push(array1[i]);
    }  
    
  }

  return c;
}


/*
//без методов, но оставляет пустые места 
function getArray(a){

  let c = [];

  for(let i = 0; i < array1.length; i++){
    if(array1[i] > sredAr){
      c[i] = array1[i];
    }  
    
  }

  return c;
}
*/
let a = getArray(array1);
console.log(a);

