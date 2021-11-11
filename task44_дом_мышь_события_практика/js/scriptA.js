document.querySelector(".parent").onmouseenter = function(event){
    
        event.target.classList.add("bg-blue")
    }
   
    
    document.querySelector(".parent").onmouseleave = function(event){
    
        event.target.classList.remove("bg-blue")
    }
   
    /*
    document.querySelector(".parent").onclick = function(event){
        
        if (event.which == 1) {
            // event.target.classList.add("bg-black");
            event.target.style.cssText  = "width:200px; height:200px";
           }
    }
    */
    


   //let computedStyle = getComputedStyle(document.querySelector(".parent"));

/*

   document.querySelector(".parent").addEventListener("click", function(event) {
    let elem =  document.querySelector(".parent");  
    var theCSSprop = window.getComputedStyle(elem,null).getPropertyValue("height");   
    //let computedStyle = getComputedStyle(document.querySelector(".parent"));   
    if (event.which == 3) {
        // event.target.classList.add("bg-black");
        event.target.theCSSprop = "height:800px";
       }
});

*/

document.querySelector(".parent").addEventListener("click", function(event) {
    if (event.which == 1) {
        // event.target.classList.add("bg-black");
        event.target.style.cssText  = "width:200px; height:200px";
       }
});


document.querySelector(".parent").addEventListener("contextmenu", function(event) {
    if (event.which == 3) {
        // event.target.classList.add("bg-black");
        event.target.style.cssText  = "width:800px; height:800px";
       }
});
