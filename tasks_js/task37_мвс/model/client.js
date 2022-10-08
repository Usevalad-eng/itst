import {User} from "./user.js";
//import {Pet} from "./pet.js";

class Client extends User{
    
    
    constructor(id, login, password){
        super(id, login, password);
        
    }

    addPet(pet){
        this.pets.push(pet);
    }

    checkPet(name){
        let pet = this.pets.find(function(pet){
            return pet.name == name;
        }); 
        return pet;
    }
}

export {Client};