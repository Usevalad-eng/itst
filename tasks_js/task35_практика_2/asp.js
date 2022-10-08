import {Student} from "./student.js";

class Asp extends Student{

    constructor(firstName, lastName, group, averageMark){
        super(firstName, lastName, group, averageMark);
    }

    getS(){
        
        let x;
        if(this.averageMark > 5){
            x = 200;
            
        } else{
            x = 180;
        }
        console.log(x);
    }

    
}

export {Asp};