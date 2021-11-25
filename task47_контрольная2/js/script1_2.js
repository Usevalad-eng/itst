


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
    arr = y.split(" ");

    //function arraySum(array){
        //var sum = 0;
       // for(var i = 0; i < array.length; i++){
            //sum += array[i];
            //}
        
       //}
        //arraySum(arr);
        
        document.getElementsByTagName("div").item(1).innerHTML = arr;
    
    
}



