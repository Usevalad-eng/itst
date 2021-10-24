let element = document.getElementById("first-element");
console.log(element.tagName);
console.log(element);
element.classList.add("www");//добавьте класс www.
element.classList.remove("www");//Удалите  класс www.
console.log(element);
element.classList.add("www");

console.log(element.classList.contains("www")); //true  Проверьте наличие класса www.
element.classList.toggle("www");//Добавьте ему класс www, если его нет и удалите - если есть.
console.log(element.classList.length);//количество классов 
console.log(element.classList);//Выведите последовательно через console.log его классы.
element.style.color = "red";//cделайте красным 
element.style.fontSize = "30px"; //размер шрифта 
element.style.borderStyle = "solid"; //граница
console.log(element.tagName); //вывести название тега в нижнем регистре ?
element.innerHTML = "я элемент" + "<br>  <span> мой любимый спан </span>";//Вставьте ему в конец span с текстом 'мой любимый спан'


// - Вставьте ему в конец список ul с элементами массива [createElement, appendChild, insertBefore] 
//так, чтобы каждый элемент стоял в своем li.
//1 способ
let elements = ["createElement", "appendChild", "insertBefore"];

let out = "<ul>";
elements.forEach(function(item){
    out += `<li>${item}</li>`;
});

out += "</ul>";
element.innerHTML += out;
//2  способ
let newList = document.createElement("ul");

elements.forEach(function(item){
    let newItem = document.createElement("li");
    newItem.innerHTML = item;
    newList.appendChild(newItem);
});
element.appendChild(newList);

//Вставьте ему в конец span с текстом 'мой любимый спан'
let node = document.createElement("span");                 // Create a <span> node
let textnode = document.createTextNode("мой любимый спан");         // Create a text node
node.appendChild(textnode);                              // Append the text to <span>
element.appendChild(node);     // Append span to the end 
//- Вставьте перед ним div с классом neighbor и текстом 'еще один сосед'
let nod = document.createElement("div");                 // Create a <div> node
let textnod = document.createTextNode("ещё один сосед");         // Create a text node
nod.appendChild(textnod);                              // Append the text to <div>
element.insertBefore(nod, element.childNodes[0]);     // Append div to the start
nod.classList.add("neger");//добавьте класс neighbor

let element2 = document.getElementById("second-element");//Элемент: #second-element.
console.log(element2);
element2.insertAdjacentHTML("beforebegin", "<span>!!!</span>");//- Вставьте перед ним span с текстом '!!!'.
element2.insertAdjacentHTML("afterend", "<span>!!!</span>");//- Вставьте после него span с текстом '!!!'.
element2.innerHTML = "<span> !!! </span> я тоже элемент";//- Вставьте ему в начало span с текстом '!!!'.
element2.innerHTML = "я тоже элемент <span> !!! </span>";//- Вставьте ему в конец span с текстом '!!!'.

let element3 = document.getElementById("third-element");//Элемент: #third--element.
console.log(element3);
let x = element3.firstElementChild;//Найдите первого потомка этого элемента и сделайте его текст красного цвета.
console.log(x);
x.style.color = "red";
//x.style.cssText = "color: red;";
let y = element3.lastElementChild;//Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
console.log(y);
y.style.cssText = "color: red;";

let z = element3.children;//Найдите всех потомков этого элемента и добавьте им в конец текст '!' - наверное должен быть цикл 
console.log(z);
//z.innerHTML += "<span> ! </span>"; //- не правильно 
//console.log(z);//и добавьте им в конец текст '!'. //не правильно
//let nodeZ = document.createElement("span");                 // Create a <span> node
//et textnodeZ = document.createTextNode("!");         // Create a text node
//nodeZ.appendChild(textnodeZ);                              // Append the text to <span>
//z.appendChild(nodeZ);// не работает 
let outt = "!";// работает 
x.innerHTML += outt;//  работает 
y.innerHTML += outt;//  работает

let element4 = document.getElementById("fourth-element");//Элемент: #fourth-element.
console.log(element4);
let X = element4.previousElementSibling;//- Найдите его соседа сверху и добавьте ему в конец текст '!'.
console.log(X);
X.innerHTML += outt;//add !
let Y = element4.nextElementSibling;//- Найдите его соседа cнизу и добавьте ему в конец текст '!'.
console.log(Y);
Y.innerHTML += outt;//add !
let Z = element4.nextElementSibling.nextElementSibling;//Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'. 
console.log(Z);
Z.innerHTML += outt;//add !

let element5 = document.getElementById("fifth-element");//Элемент: #fifth-element.
console.log(element5);
let X_ = element5.parentElement;//- Найдите его родителя и покрасьте его в синий цвет.
console.log(X_);
X_.style.color = "blue";
let Y_ = element5.parentNode;//- Найдите  родителя его родителя и покрасьте его в желтый цвет.
console.log(Y_);
Y_.style.color = "yellow";