class GameController{

    game;

    login(){
        let y = document.getElementById("task").value;
        let ol = document.createElement("ul");
        for(let i = 0;i < 1; i++){
        let li = document.createElement("li");
        li.textContent = y;
        
        //let close = document.createElement("span");
       //close.classList.add(close);
        //close.textContent = "x";
        //li.append(close);
        //list.append(li);

           
        ol.append(li);
        //ol.append(close);
        //z.outerHTML = "<span>x</span>";
        document.getElementsByTagName("p").item(0).append(ol);
    }



        
        return false;
    }

    
}
