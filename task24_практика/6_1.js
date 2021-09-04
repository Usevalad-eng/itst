

//6 

let b = [0,1,2,3,4,5,8,9,10,11];
let a = b;
let c = b;
let n = 10;
for (i = 0; i < n; i++) {
    if (a[i] % 2 == 0) {
    console.log(a[i] = a[i] / 2);//чет
} 

}
for (i = 0; i < n; i++) {
    if (a[i] % 2 != 0) {
    console.log(b[i] = b[i] + 1);//не чет
} 

}

