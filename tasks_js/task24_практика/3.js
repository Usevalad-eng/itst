
//3

let b = [0,1,2,3,4,5,8,9,10,11];
let n = 10;
let i = 1;
max = b[i];
for (let i = 1; i < n; i++){
    
    if (b[i] > max) {
    max = b[i]
    }

}

min = b[i];
for (let i = 0; i < n; i++){
    
    if (b[i] < min) {
    min = b[i]
    }
    
}
console.log(max + min); 

