document.getElementById("calc").onclick = function(){
    let x = document.getElementsByTagName("p").item(0);
    x = x.outerHTML = "<b>произвольный текст</b>";
    //document.getElementsByTagName("p").item(0) = x;

}

