//7

let min = 1, max = 100, n = 10, a = [];
let x = 4;

for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    if (a[i] == x) {
        console.log("есть");
    } 
    else {
        console.log("нет такого");
    }
}







 

