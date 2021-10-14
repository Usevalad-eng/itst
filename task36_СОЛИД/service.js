//import {Phone} from "./user.js";

class Service{
    name;
    price;
    time;
    
    
    constructor(name, price, time){
        this.name = name;
        this.price = price;
        this.time = time;
        
        
    }

    getWeight(){
        console.log(this.weight);
    }

    getModel(){
        console.log(`${this.model}`);
    }

    getNumber(){
        console.log(`${this.number}`);
    }

    getName(){
        console.log(`${this.name}`);
    }
}

export {Service};