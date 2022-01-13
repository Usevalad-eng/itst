//№ 6
function intersectArray(a,b,c){
    let intersect = a.filter(function(item){
        return b.includes(item);
    });
    let uniqueIntersect = intersect.filter(function(item, index){
        return index == intersect.indexOf(item);
    });
    let uniqueIntersect2 = uniqueIntersect.filter(function(item, index){
        return uniqueIntersect != c.includes(item);
    });

    return uniqueIntersect2;
}

let x = console.log(intersectArray([1,2,3,1], [1,2], [4,5,8,9]));//[1,2]



    

