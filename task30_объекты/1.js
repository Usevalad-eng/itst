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

/*
let s = {};
if(s == undefined){
    console.log("empty");
}
*/
/*
let obj = {
    name: 20,
    age: 30,
}
let dum = 0;
function plus (obj){
    for(let key in obj){
        if(typeof(obj[key]) = Number){
        dum = obj[key] * 2;
        }
    }
}
console.log(plus(obj));
*/
