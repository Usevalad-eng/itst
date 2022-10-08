//восьмое задание 
let a = [1,3,6,4,3,3,5,6];
let c = [1,3];



function excludeArray(a){

    let b = [], j = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i] != c[0] && a[i] != c[1]){
            b[j] = a[i];
            j++;
        }
    }  

    return b;
}
let g = [];
g = excludeArray(a);
console.log(g);