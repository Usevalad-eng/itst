//№ 6
function intersectArray(a,b){
    let intersect = a.filter(function(item){
        return b.includes(item);
    });
    let uniqueIntersect = intersect.filter(function(item, index){
        return index == intersect.indexOf(item);
    });

    return uniqueIntersect;
}

let x = console.log(intersectArray([1,2,3,1], [1,2]));//[1,2]
x = [1,2];
let y = [4,5,8,9];
for (i = 0; i < x.length; i++) {
    if (x[i]  != y.map(y => y[i])) {
    console.log(x[i]);
} 
else{
    return false;
}
}

