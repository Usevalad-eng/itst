a = [1, 2, 3, 4, 5, 6];
let k = 0;
let result = a.reduceRight(function(sum,item){
    if(sum <= 10){
        sum += item;
        k++;
    }
    return k;
}

);
console.log(k);