//8 - пока не верно 

let min = 1, max = 100, n = 10, a = [];
let k = 1;


for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min; 
        
    
    
    if (a[k]) {
    a[k] = a[k++];
    console.log(a[i]);
    } 
}








 

