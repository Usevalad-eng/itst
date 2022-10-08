a = [1, 2, 0, 4, 5, 6];
let k = 0;
let sum;
let result = a.reduceRight(function(sum,item){
    if(a[k] != 0){
        sum + item;
        ++k;
    }
    return sum;
}

);
console.log(result);