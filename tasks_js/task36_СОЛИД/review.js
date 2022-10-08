import {Phone} from "./user.js";

class Review{
    client;
    text;
    rating;
    data;
    
    constructor(client, text, rating, data){
        this.client = client;
        this.text = text;
        this.rating = rating;
        this.data = data;
        
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

export {Review};

