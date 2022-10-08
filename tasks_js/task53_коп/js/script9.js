let c = "Вчащахюгажилбылцитрусданофальшивыйэкземпляр";
let d = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
//перед сортировкой надо сделать "c" массивом
let c1 = c.split("");
console.log(c1);
let d1 = d.split("");
console.log(d1);
// становится массивом посимвольно

c1.sort(function(a, b){return a - b});
console.log(c1);

function exArray(c, d){

    let b = [], j = 0;

    for(let i = 0; i < d.length; i++){
        if(c[i] == d[i]){
            
            j++;
        }
    }  

    return j;
}
let g = [];
g = exArray(c1, d1);
console.log(g);
//if j > 0 - не панграмма 
if (g == 0){
console.log("панграмма");
}else{
    console.log("не панграмма");
}


