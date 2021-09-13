let x = (3 && 5) || (4 && 0); // => 5 || 0 => 5
let y = 3 || (5 && 4) || 0; // 3 || 4 || 0 => 3
let z = !x || y; // false || 3 => 3

let condition1 = x > y;
let condition2 = x < y;
let condition3 = x == y;
let condition4 = x != y;
let condition5 = x >= y;
let condition6 = x <= y;
let condition7 = !x;

if(x== undefined || x == null || x == 0 || x == "") {//!x
    console.log("Error");    
    }

if (condition1) {
    
}

if (condition2) {
    
} else {
    
}

if (x > 0) {
    console.log("positive");
} else if (x < 0) {
    console.log("negative")
} else {
    console.log("0")
} 

let a = 4, b = 5;

if(a > b)
    {
    console.log(a);
    console.log(a++);
    }
else if(b > a)
    console.log(b);
else
    console.log("equal");

if (b==a) {
    
} else {
    
}


let t = 4;
if (t % 2 == 0) {
console.log("even");
} else {
    console.log("odd");
}

let year = 2000;
if (year % 400 == 0) {
    console.log("високосный");
} else if (year % 100 == 0) {
        console.log("не високосный");
} else {
    console.log("don't know");
}


    let n = 10; 
    n = Math.abs(n) % 100; 
    
    if (n > 10 && n < 20) {
         console.log("грибов"); 
    } else if (n > 1 && n < 5) {
         console.log("гриба");
    
    } else { console.log("гриб");
    }


let day = 1;
let hour = 5;
deliveryDay = console.log(day + 0);
deliveryHour = console.log(hour + 0);
if ((day >= 1 && day <=5) && (hour >=0 && <=16)){
    console.log("delivery is today");
} else if ()


    
    


