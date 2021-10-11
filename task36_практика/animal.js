//import {Phone} from "./user.js";

class Animal{
    weight;
    name;
    breed;
    age;
    
    constructor(weight, name, breed, age){
        this.weight = weight;
        this.name = name;
        this.breed = breed;
        this.age = age;
        
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

export {Animal};