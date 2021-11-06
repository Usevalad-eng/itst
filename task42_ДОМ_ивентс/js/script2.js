document.getElementById("calc").onclick = function(){
    let x = document.getElementsByTagName("p").item(0);
    x = x.outerHTML = "<p><b id='result'>произвольный текст</b></p>";
    //document.getElementsByTagName("p").item(0) = x;

}

