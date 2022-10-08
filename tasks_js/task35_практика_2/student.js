class Student{
    firstName;
    lastName;
    group;
    averageMark;
    constructor(firstName, lastName, group, averageMark){
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageMark = averageMark;
    }

    getS(){
        
        let x;
        if(this.averageMark > 5){
            x = 100;
            
        } else{
            x = 80;
        }
        console.log(x);
    }
    
    
    
}

export {Student};