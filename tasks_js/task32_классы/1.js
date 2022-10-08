class Ellips {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;

    }
    s(a, b) {
      this.a = a;
      this.b = b;
      return s = 3.14 * a * b;
    }
    
  }
  
  // Наследуем 
  class Ellipsoid extends Ellips {
    s(a, b) {
        this.a = a;
        this.b = b;
        this.c = c;
        return s = 3.14 * a * b;
      }
  }
  
  let rabbit = new Rabbit("Белый кролик");
  
  rabbit.run(5); // Белый кролик бежит со скоростью 5.
  rabbit.hide(); // Белый кролик прячется!