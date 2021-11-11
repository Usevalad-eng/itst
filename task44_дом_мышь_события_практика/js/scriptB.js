document.querySelector(".parent").onmouseenter = function(event){
    
        event.target.classList.add("bg-blue")
    }
   
    
    document.querySelector(".parent").onmouseleave = function(event){
    
        event.target.classList.remove("bg-blue")
    }
   
    document.querySelector(".parent").addEventListener("click", function(event) {
        let style = getComputedStyle(this);
        let w = style.width;
        let h = style.height;
        width = +w.substr(0, w.length - 2) * 2;
        height = +h.substr(0, h.length - 2) * 2;
        this.style.width = `${width}px`;
        this.style.height = `${height}px`;
        
    
    });

document.querySelector(".parent").addEventListener("contextmenu", function(event) {
    let style = getComputedStyle(this);
    let w = style.width;
    let h = style.height;
    width = +w.substr(0, w.length - 2) / 2;
    height = +h.substr(0, h.length - 2) / 2;
    this.style.width = `${width}px`;
    this.style.height = `${height}px`;
    return false;

});

