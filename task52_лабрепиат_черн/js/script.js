//1

function isEqual(str1, str2){

    if(str1.split("").sort().join("") == str2.split("").sort().join("")){
        return true;
    }

    return false;
}

//2
/*
function outArray(arr) {
    let i = 0;
    let  counter  = setInterval(function() {
          console.log(i);
          i++;
          if(i == arr.length)
            clearInterval(counter);
        }, 3000);
}

outArray([1,2,3,4,5]);
*/

//8
function fillArray(a, n){

    const min = 1, max = 10;

    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return a;
}

/*
function changeArray(a){
    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 == 0){
            a[i] *= 2;
        }
    }

    return a;
}
*/

let mas = [];
let s = fillArray(mas, 100);
console.log(s);
//m = changeArray(s);
//console.log(m);


//9

function out2Array(arr) {
    let i = 0;
    let j =0;
    let  counter  = setInterval(function() {
          console.log(i, j);
          
          i++;
          //console.log(j);
          j++
          if(i == 3 || j == 3)
            clearInterval(counter);
        }, 1000);
}

out2Array([[0, 1, 2],[0, 1, 2],[0, 1, 2],[0, 1, 2],[0, 1, 2]]);


//6
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => a - b);

console.log(arr);


//4
let arr = [5, 2, 1, -10, 8];
 
arr.sort((a, b) => a - b);

console.log(arr);

