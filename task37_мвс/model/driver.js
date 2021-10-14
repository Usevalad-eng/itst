import {User} from "./user.js";
//import {Service} from "./service.js";
//import {Review} from "./review.js";

class Driver extends User{
    car;
   

    constructor(id, login, password){
        super(id, login, password);
        this.car = car;
        
    }

    addService(service){
        this.services.push(service);
    }

    addReview(review){
        this.reviews.push(review);
    }

    getRating(){
        let rating = this.reviews.reduce(function(sum,review){
           return sum + review.rating;
        },0);
        if(this.reviews.length > 0)
            return Math.round(rating / this.reviews.length);
        else 
            return undefined; 
    }

    checkService(name){
        let service = this.services.find(function(service){
            return service.name == name;
        }); 
        return service;
    }
}

export {Driver};