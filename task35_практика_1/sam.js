import {Phone} from "./phone.js";

class Sam extends Phone{
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
export {Sam};