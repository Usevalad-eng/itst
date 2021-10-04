import {Mat1} from "./mat1.js";

class Mat2{
    cells;
    m;
    n;

    constructor(m,n){
        this.m = m;
        this.n = n;
        this.cells = Array(m);

        for(let i = 0; i < m; i++){
            this.cells[i] = Array(n).fill(1);
        }
    }

    
    add(){
        let x,y;
        
        
            this.Mat1.add(x,y);
               
    }
}

export {Mat2};