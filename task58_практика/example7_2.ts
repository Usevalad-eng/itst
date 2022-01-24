function validator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldSet = descriptor.set;
  
    descriptor.set = function(value: number) {
        if (value % value == 1 && value % value > 0) {
            throw new Error("Invalid value");
        }
        if(oldSet!==undefined) oldSet.call(this, value);
    }
}
class User {
  
    private _name: number;
    constructor(name: number){
        this.name = name;
    }
      
    public get name(): number {
        return this._name;
    }
    
    @validator
    public set name(n: number) {
        this._name = n;
    }
    sub(x: number): number{
        return x ** 0.5;
    }
}


let calc = new User();

let z = calc.sub(5);
console.log(z);
/*
let tom = new User("Tom");
console.log(tom.name);
tom.name= "admin";
console.log(tom.name);
*/