export class SelectionSortData {

    public numbers;
    public orderedIndex;
    public currentCompareIndex;
    public currentMinIndex;

    constructor(N: number, randomBound: number) {

        this.numbers = new Array(N);
        this.orderedIndex = -1;         // [0...orderedIndex) 是有序的
        this.currentCompareIndex = -1;  // 当前正在比较的元素索引
        this.currentMinIndex = -1;      // 当前找到的最小元素的索引

        for (let i = 0; i < N; i++) {
            this.numbers[i] = Math.floor((Math.random() * randomBound)) + 1;
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