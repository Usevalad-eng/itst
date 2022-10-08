let K = 8;
let number1 = [1, 2, 5, 8, 4,];
let number2 = [25, 42, 7];
let numbers = number1.concat(number2);//let numbers = [ 1, 2, 5, 8, 4, 25, 42,7 ];
numbers = numbers.sort(function(a, b){return a - b});
console.log(numbers);


//let filteredNumbers = numbers.filter(n => n > K);//25,42
//console.log(filteredNumbers); 
//let filteredNumbers2 = numbers.filter(n => n < K);//1,2,4,5,7
//console.log(filteredNumbers2); 
//let arr3 = filteredNumbers2.concat(filteredNumbers);
//console.log (arr3);//[1,2,4,5,8,25,42]//не отсортировала?

function getMax(arr) {
    let m = []; 
    let K = 8;
    for (let i = 0; i < arr.length; i++) {
      //K = 8;
      if (arr[i] < K) {
        // maxSum = [];
        m.push(arr[i]);//а дальше как?
      }
    }
  
    return m;
  }
  
  console.log(getMax(numbers)); // 1,2,4,5,7