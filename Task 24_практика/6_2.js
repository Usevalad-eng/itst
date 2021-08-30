//7

let min = 1, max = 100, n = 10, a = [];


for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    if (a[i] % 2 == 0) {
        console.log(a[i] = a[i] / 2);//чет
    } else if (a[i] % 2 != 0) {
        console.log(a[i] = a[i] + 1);//не чет
    } 
}







 

