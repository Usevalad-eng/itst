let d = [1, 3, 4, 4, 5];
let uniqueD = d.filter(function(item, index, array){
    return index == array.indexOf(item);
});

/*
uniqueD = [];
d.forEach(function(item,index,array){
    if(uniqueD.includes(item) == false)
    uniqueD.push(item);
});*/
console.log(uniqueD);

