let a = 10;
Number.prototype.conv = function(exchange) {
    return this + exchange;
}

console.log(a.conv("$"));


//1
let a = 10;
Number.prototype.conv = function() {
    if(a > 0){
    return this;
    }
}

console.log(a.conv());