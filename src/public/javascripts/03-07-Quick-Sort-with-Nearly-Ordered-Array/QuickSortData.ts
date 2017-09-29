export class QuickSortData {

    public numbers;
    public l;
    public r;
    public fixedPivots;
    public curPivot;
    public curElement;

    constructor(N: number, randomBound: number) {

        this.numbers = new Array(N);
        this.fixedPivots = new Array(N);
        for (let i = 0; i < N; i++) {
            this.numbers[i] = Math.floor(Math.random() * randomBound) + 1;
            this.fixedPivots[i] = false;
        }

        this.numbers.sort();
        let swapTime = Math.floor(0.01*N);
        for(let i = 0 ; i < swapTime; i ++){
            let a = Math.floor(Math.random()*N);
            let b = Math.floor(Math.random()*N);
            this.swap(a, b);
        }
    }

    N() {
        return this.numbers.length;
    }

    get(index) {
        if (index < 0 || index >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }

        return this.numbers[index];
    }

    swap(i, j) {

        if (i < 0 || i >= this.numbers.length || j < 0 || j >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }

        let t = this.numbers[i];
        this.numbers[i] = this.numbers[j];
        this.numbers[j] = t;
    }

}