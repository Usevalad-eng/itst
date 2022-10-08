class Close {
material = 0;
size = 0;
constructor(material, size){
    this.material = material;
    this.size = size;
}
getFat(){
    return this.material + this.size;
}

}

class Short extends Close {
    remen = 0;
    constructor(material, size, remen){
        super(material, size);
        this.material = material;
        this.size = size;
        this.remen = remen;
    }
    getFat(){
        return this.material + this.size + this.remen;
    }
    
    }

    class Trous extends Close {
        remen = 0;
        constructor(material, size, remen){
            super(material, size);
            this.material = material;
            this.size = size;
            this.remen = remen;
        }
        getFat(){
            return this.material + this.size + this.remen;
        }
        
        }

    let close1 = new Close(10, 10);
    console.log(close1.getFat());

    let close2 = new Short(10, 10, 10);
    console.log(close2.getFat());

    let close3 = new Trous(10, 10, 10);
    console.log(close2.getFat());
    
