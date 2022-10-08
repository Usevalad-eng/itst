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

let x = intersectArray([1,2,3,1], [1,2]);//[1,2]
//x = [1,2];
let y = [4,8];
let z =[];
for (let item of x) {
    
        if (item  == y[0] && item  == y[1]) {
            return false
            
        } else {
            z.push(item);
        }
        
        //return z;
    

}

console.log(z);