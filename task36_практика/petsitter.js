import {User} from "./user.js";

class Petsitter extends User{
    services;
    constructor(name, login, pass){
        super(name, login, pass);
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
}

export {Petsitter};