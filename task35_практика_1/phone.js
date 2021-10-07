class Phone{
    weight;
    model;
    number;
    constructor(weight, model, number){
        this.weight = weight;
        this.model = model;
        this.number = number;
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

export {Phone};