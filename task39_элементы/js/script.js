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
//element.style.textTransform = "lowercase"; //нижний регистр 
//console.log(element.tagName.style.textTransform = "lowercase"); //вывести название тега в нижнем регистре 
console.log(element.tagName); //вывести название тега в нижнем регистре 
element.innerHTML = "я элемент" + "<br>  <span> мой любимый спан </span>";//Вставьте ему в конец span с текстом 'мой любимый спан'





