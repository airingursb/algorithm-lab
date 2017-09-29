"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MergeSortData = (function () {
    function MergeSortData(N, randomBound) {
        this.numbers = new Array(N);
        for (var i = 0; i < N; i++) {
            this.numbers[i] = Math.floor(Math.random() * randomBound) + 1;
        }
    }
    MergeSortData.prototype.N = function () {
        return this.numbers.length;
    };
    MergeSortData.prototype.get = function (index) {
        if (index < 0 || index >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }
        return this.numbers[index];
    };
    MergeSortData.prototype.swap = function (i, j) {
        if (i < 0 || i >= this.numbers.length || j < 0 || j >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }
        var t = this.numbers[i];
        this.numbers[i] = this.numbers[j];
        this.numbers[j] = t;
    };
    return MergeSortData;
}());
exports.MergeSortData = MergeSortData;
//# sourceMappingURL=MergeSortData.js.map