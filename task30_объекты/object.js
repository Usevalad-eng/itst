let user = {
    name: "Вася",
    age: 30,
    print: function(){
        console.log(this.name,this.age);    // this - текущий объект  this = user
    },
    print2: function(){
      //  console.log(name,age);   // ошибка!!! ТОлько через this
    }
}
let admin = user;
//user = null;

admin.print(); // this = admin
admin.print2();


function Man(name,sex){
    this.name = name;
    this.sex = sex;
    this.print = function(){
        console.log(this.name,this.sex);    // this - текущий объект  this = man
    }
    this.print2 = () => {
        console.log(this.name,this.sex); 
    }
}

Man.prototype.changeName = function(newname) {
    this.name = newname;
}


let man = new Man("Вася", "m"); //this = man
man.changeSex = () => {
    this.sex = (this.sex == "m") ? "f" : "m";
}
let man2 = new Man("Петя", "m"); //this = man2
let man3 = man;
man3.sex = "f";
man.print();
man.changeSex();
man.changeName("Аня");
man.print2();
man3.print();
man3.changeSex();
man3.changeName("Катя");
man3.print2();

man2.print();
//man2.changeSex();
man2.changeName("Лена");
man2.print2();


//калькулятор1
let calculator = {
    add() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = 4;
      this.b = 5;
    },
    sub() {
        return this.a - this.b;
      },
    div() {
        return this.a / this.b;
      },

  };
  
  calculator.read();
  //console.log( calculator.add() );
  //console.log( calculator.mul() );
  //console.log( calculator.sub() );
  //console.log( calculator.div() );
  let c = calculator.sub() * calculator.add();
  
  console.log(c);

  //калькулятор 2
  let cal = {
    add: function() {
      return this.a + this.b;
    },
  
    mul: function() {
      return this.a * this.b;
    },
  
    read: function() {
      this.a = 4;
      this.b = 5;
    },
    sub: function() {
        return this.a - this.b;
      },
    div: function() {
        return this.a / this.b;
      },

  };
  
  cal.read();
  //console.log( calculator.add() );
  //console.log( calculator.mul() );
  //console.log( calculator.sub() );
  //console.log( calculator.div() );
  let cc = cal.sub() * cal.add();
  
  console.log(cc);

  let a = cal.sub();
  let b = cal.add();
  console.log(a * b);

  //кальк 3 
  
let call = {
    add(a,b) {
      return a + b;
    },
  
    mul(a,b) {
      return a * b;
    },
  
    
    sub(a,b) {
        return a - b;
      },

    div(a,b) {
        return a / b;
      },

  };
  
 
  
  let ccc = call.sub(4,5) * call.add(4,5);
  console.log(ccc);
  
  //console.log(mul(call.sub(4,5), call.add(4,5)));
