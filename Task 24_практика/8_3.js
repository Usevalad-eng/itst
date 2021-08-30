//8- пока не верно 

let a = [0,1,2,3,4,5,6,7,8,9];
let k = 0;
let n = 10;



for(let i = 0; i < n; i++){
     if (a[i] % 2 == 0) {
        a.shift(k);
    } else { 
        a.shift(k + 1);
    
    }
         console.log(a[i]);
}









 

