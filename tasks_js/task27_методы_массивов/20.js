a = [1, 2, 0, 4, 5, 6];
let k = 0;

let result = a.reduce(function(sum,item){
    if(item != 0){
        sum + item;
        k++;
    }
    return sum;
}

);
console.log(result);