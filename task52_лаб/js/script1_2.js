
/*

document.getElementById("calc").onclick = function(){
    let classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    x = document.getElementById("a").value;
    let ol = document.createElement("ul");
    for(let i = 0;i < x; i++){
        let li = document.createElement("li");
        li.textContent = classes[i];
        ol.append(li);
        document.getElementsByTagName("div").item(0).append(ol);
    }
    
}

document.getElementById("calc2").onclick = function(){
    
    let y = document.getElementById("b").value;
   
    //y = y.split("-").map(item => item[0] + item[2]).join(".");
    arr = y.split(" ").map(function(item){
        return +item;
    }).reduce((sum, current) => sum + current);

    //function arraySum(array){
        //var sum = 0;
       // for(var i = 0; i < array.length; i++){
            //sum += array[i];
            //}
        
       //}
        //arraySum(arr);
        
        document.getElementsByTagName("div").item(1).innerHTML = arr;
    
    
}
*/

document.getElementById("calc3").onclick = function(){
    
    let z = document.getElementById("bb").value;
    let zz = document.getElementById("bbb").value;
   
    
    let arr = z.split("").sort();
      let arr2 = zz.split("").sort();
      for(let i = 0;i < z.length; i++){
        if(arr[i] ==arr2[i]){
        } else{
            return false;
        }

    }
    return true;        
        //document.getElementsByTagName("div").item(1).innerHTML = r;
    
    
}
//11
function intersectArray(a,b){
    let intersect = a.filter(function(item){
        return b.includes(item);
    });
    let uniqueIntersect = intersect.filter(function(item, index){
        return index == intersect.indexOf(item);
    });

    return uniqueIntersect;
}

console.log(intersectArray([1,2,3,1], [1,2]));


