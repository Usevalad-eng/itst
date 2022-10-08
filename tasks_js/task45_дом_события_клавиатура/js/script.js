document.body.onkeydown = function(event){
    if (event.ctrlKey) {
        let classes = document.getElementsByTagName("div").item(0).classList;
        let ol = document.createElement("ol");
        for(let i = 0;i < 1; i++){
        let li = document.createElement("li");
        li.textContent = "пункт";
        ol.append(li);
        document.getElementsByTagName("div").item(0).append(ol);
    }
    }
    
    
}

/*

//document.getElementById("calc").onkeydown = function(event){

    document.body.onkeydown = function(event){
        if (event.shiftKey) {
            let classes = document.getElementsByTagName("div").item(0).classList;
            let ol = document.createElement("ol");
            for(let i = 0;i < 1; i++){
            let li = document.createElement("li");
            li.textContent = "пункт";
            ol.append(li);
            document.getElementsByTagName("div").item(0).append(ol);
        }
        }
        
        
    }


*/
