//import {Phone} from "./user.js";

class Order{
    price;
    client;
    petsitter;
    service;
    pet;
    
    constructor(price, client, petsitter, service, pet){
        this.price = price;
        this.client = client;
        this.petsitter = petsitter;
        this.service = service;
        this.pet = pet;
        
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

export {Order};