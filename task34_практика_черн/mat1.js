class Mat1 {
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

    addWall(x,y){
        this.cells[x][y] = 1;
    }

    addMine(x,y){
        this.cells[x][y] = 2;
    }

    removeMine(x,y){
        this.cells[x][y] = 0;
    }

    show(){
        console.table(this.cells);
    }
}

export {Mat1};