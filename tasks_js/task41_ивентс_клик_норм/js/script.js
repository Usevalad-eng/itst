function myclick(){
    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);

    document.getElementsByTagName("p").item(0).innerHTML = x+y;                 //пример
    
    button2.style.background = "white";
}

var button2 = document.getElementById("calc2")
button2.onclick = function(){
    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);

    document.getElementsByTagName("p").item(0).innerHTML = x-y;
}

button2.addEventListener("click", function() {
    button2.style.background = "red";
});

button2.addEventListener("click", function() {
    calc.style.background = "red";
});

//2

var button3 = document.getElementById("calc3")
button3.addEventListener("click", function() {
    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);
    let z = document.getElementById("c").value;

    //document.getElementsByTagName("p").item(0).innerHTML = x+y;
    switch (z) {
        case "+":
            document.getElementsByTagName("p").item(0).innerHTML = x+y;
          break;
        case "-":
            document.getElementsByTagName("p").item(0).innerHTML = x-y;
          break;
        case "*":
            document.getElementsByTagName("p").item(0).innerHTML = x*y;
          break;
          case "/":
            document.getElementsByTagName("p").item(0).innerHTML = x/y;
          break;
        default:
            document.getElementsByTagName("p").item(0).innerHTML = "";
      }
});

/*
//3 - cм карт в пред 41
var button4 = document.getElementById("calc4")
button4.addEventListener("click", function() {
    //let x = + document.getElementById("a").value;
    //let y = parseFloat(document.getElementById("b").value);
    let z = document.getElementById("c").value;
    let q = document.getElementById("d").value;
    //document.getElementsByTagName("p").item(0).innerHTML = x+y;
    switch (q) {
        case "q" > "z":
            document.getElementsByTagName("p").item(0).innerHTML = "много";
          break;
        case "q" < "z":
            document.getElementsByTagName("p").item(0).innerHTML = "мало";
          break;
        case "q" == "z":
            document.getElementsByTagName("p").item(0).innerHTML = "угадали";
          break;
          
        default:
            document.getElementsByTagName("p").item(0).innerHTML = "";
      }
});
*/

