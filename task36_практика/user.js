class User{
    name;
    login;
    pass;
    
    constructor(name, login, pass){
        this.name = name;
        this.login = login;
        this.pass = pass;
        
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

export {User};