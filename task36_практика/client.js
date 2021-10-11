import {User} from "./user.js";

class Client extends User{
    pet;
    constructor(name, login, pass){
        super(name, login, pass);
    }

    addPet(Pet){
        console.log(`${this.weight}`);
    }

    
}

export {Client};