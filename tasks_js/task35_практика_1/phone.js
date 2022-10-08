class Phone{
    weight;
    model;
    number;
    name;
    constructor(weight, model, number, name){
        this.weight = weight;
        this.model = model;
        this.number = number;
        this.name = name; 
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

export {Phone};