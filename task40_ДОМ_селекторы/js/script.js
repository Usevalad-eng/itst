let element = document.getElementById("first-element");

let elements = document.getElementsByTagName("div");

console.log(elements.length);

let sections = document.getElementsByClassName("first-section");

let section = sections.item(0);// sections[0];

let sectionDivs = section.getElementsByTagName("div");

console.log(sectionDivs.length);

let divs = document.querySelectorAll(".first-section div");
console.log(divs.length);

//let element_ = document.getElementById("first-element");//Элемент: #first-element.
//console.log(element_);
//element_1 = element_.item(1);
//element_1.innerHTML = "Я хороший сосед";//
sections = document.getElementsByClassName("first-section");//- поменяйте "Я сосед" на "Я хороший сосед"
console.log(sections);
section = sections.item(0);
let neighbors = section.getElementsByClassName("neighbor");
for(let i = 0;i < neighbors.length;i++){
    neighbors.item(i).innerHTML = "Я хороший сосед";
}


for(let i = 0;i < neighbors.length;i++){
    let x = neighbors.item(i).innerHTML;
    neighbors.item(i).innerHTML = "Я хороший сосед" + `N${i+1}`;//- добавить к каждому соседу его номер, например, "Я хороший сосед №2"
}


for(let i = 0;i < neighbors.length;i++){
    let x = neighbors.item(i).innerHTML;
    neighbors.item(i).innerHTML = `<span>${x}</span>`;//оберните в спан
}
/*
for(let i = 0;i < neighbors.length;i++){
    let x = neighbors.item(i).innerHTML;
    neighbors.item(i).innerHTML = `<b>${x}</b>`;//оберните в b без span
}
*/
for(let i = 0;i < neighbors.length;i++){
    let span = neighbors.item(i).getElementsByTagName("span").item(0);
    span.outerHTML = `<b>${span.innerHTML}</b>`;//- замените теги span на тег b тж см картинка -второй способ -карт 20

}

/*
for(let i = 0; i < neighbors.length; i++){
    let neighbor = neighbors.item(i);
    console.log(neighbor);
    let span = neighbor.getElementsByTagName("span").item(0);
    //span.outerHTML = `<b>${span.innerHTML}</b>`;
    let b = document.createElement("b");//карт 20
    b.innerHTML = span.innerHTML;
    neighbor.innerHTML = "";
    neighbor.appendChild(b);
}
*/

let divs_ = document.querySelectorAll(".first-section .fourth-neighbor");
console.log(divs_);
divs_.item(0).innerHTML = "я последний хороший сосед";//- замените текст "Я хороший сосед" на "Я последний хороший сосед" у элемента с классом "fourth-neighbor"


let element2 = document.getElementById("second-element");//Элемент: #second-element.
console.log(element2);
let elements_ = ["пункт1", "пункт2", "пункт3", "пункт4", "пункт5", "пункт6", "пункт7", "пункт8", "пункт9", "пункт10"];
let out = "<ul>";
elements_.forEach(function(item){
    out += `<li>${item}</li>`;  
});
element2.innerHTML = out;

//elements_.forEach(function(item){
 //   item(0).style.color = "red";
//});

let elementLi = document.getElementsByTagName("li"); //каждый четный пункт покрасить в красный цвет
console.log(elementLi);
for(let i = 0;i < 10;i++){
    if(i % 2 == 0){
        elementLi.item(i).style.color = "red";
    }
}
elementLi = document.getElementsByTagName("li"); //каждый нечетный пункт - добавить класс odd-element
console.log(elementLi);
for(let i = 0;i < 10;i++){
    if(i % 2 != 0){
        
        elementLi.item(i).classList.toggle("odd-element");
    }
}
/*
elementLi = document.getElementsByTagName("li");
let elementLi_ = elementLi.getElementsByClassName("odd-element"); //элементам кратным 3 с классом odd-element увеличить шрифт в 2 раза.
console.log(elementLi_);
for(let i = 0;i < 10;i++){
    if(i % 3 == 0){
        
        elementLi_.item(i).style.fontSize = "30 px";//не работает 
    }
}
*/

let items = document.querySelectorAll("#second-element ul li");
for(let i = 0;i < 10;i++){
    if(i % 3 == 0){
        
        items.item(i).style.fontSize = "30px";//работает
    }
}

items = document.querySelectorAll("#second-element ul li");
let items_ = items.getElementsByClassName("odd-element");//почему здесь ошибка
console.log(items_);
for(let i = 0;i < 10;i++){
    if(i % 3 == 0){
        
        items_.item(i).style.fontSize = "30px";
    }
}