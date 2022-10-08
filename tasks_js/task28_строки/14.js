function Capitalize(str){
    var arr = str.split("_");
    for(var i = 0; i< arr.length; i++)
    {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    var result = arr.join("!");
    console.log(result);
    }
    
    Capitalize("var_test_text");