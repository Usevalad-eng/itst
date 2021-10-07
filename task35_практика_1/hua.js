import {Phone} from "./phone.js";

class Hua extends Phone{

    constructor(weight, model, number){
        super(weight, model, number);
    }

    getWeight(){
        console.log(`${this.weight}`);
    }

    getModel(){
        console.log(`${this.model}`);
    }

    getNumber(){
        console.log(`${this.number}`);
    }
}

export {Hua};