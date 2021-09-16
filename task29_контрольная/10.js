
let str = "Я! учу, javascript.";
let str1 = str.split("");
console.log(str1);
//let str1 = [ 'я', 'учу', 'javascript' ]; те становится массивом посимвольно

function getArray(a){

    let c = [];
  
    for(let i = 0; i < str1.length; i++){
      if(str1[i] != "," && str1[i] != "." && str1[i] != "!"){
        c.push(str1[i]);
      }  
      
    }
  
    return c;
  }
  
  
  
  let a = getArray(str1);
  console.log(a);

let str2 = a.join(" ");
console.log(str2);
