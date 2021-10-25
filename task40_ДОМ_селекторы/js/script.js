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

let divs_ = document.querySelectorAll(".first-section .fourth-neighbor");
console.log(divs_);
divs_.item(0).innerHTML = "я последний хороший сосед";