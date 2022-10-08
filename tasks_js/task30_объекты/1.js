user = {};

user.name = "John";
user.surname = "Smith";
console.log(user.name, user.surname);
user.name = "Pete";
console.log(user.name, user.surname);
delete user.name;
console.log(user.name);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
//5
let sum = 0;
  for(let key in salaries){
    
     sum += salaries[key];

    
};
console.log(sum);


let obj = {
    age1: 20,
    age2: 30,
}

let dum = 0;
function plus(object){
    for(let key in object){
        
        object[key] *= 2;
        
    }
}
plus(obj);

console.log(obj);




let admin = {
    name: "Вася",
    age: 30,
};

for(let key in admin){
     // key - имя свойства(поля)
    // user[key] - значение  свойства(поля)
    console.log(key, admin[key]);
}

