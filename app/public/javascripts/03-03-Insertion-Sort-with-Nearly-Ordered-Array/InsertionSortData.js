"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InsertionSortData = (function () {
    function InsertionSortData(N, randomBound) {
        this.numbers = new Array(N);
        this.orderedIndex = -1;
        this.currentIndex = -1;
        for (var i = 0; i < N; i++) {
            this.numbers[i] = Math.floor((Math.random() * randomBound)) + 1;
        }
        this.numbers.sort(function (a, b) {
            return a - b;
        });
        var swapTime = Math.floor(0.02 * N);
        for (var i = 0; i < swapTime; i++) {
            var a = Math.floor(Math.random() * N);
            var b = Math.floor(Math.random() * N);
            this.swap(a, b);
        }
    }
    InsertionSortData.prototype.N = function () {
        return this.numbers.length;
    };
    InsertionSortData.prototype.get = function (index) {
        if (index < 0 || index >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }
        return this.numbers[index];
    };
    InsertionSortData.prototype.swap = function (i, j) {
        if (i < 0 || i >= this.numbers.length || j < 0 || j >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }
        var t = this.numbers[i];
        this.numbers[i] = this.numbers[j];
        this.numbers[j] = t;
    };
    return InsertionSortData;
}());
exports.InsertionSortData = InsertionSortData;
//# sourceMappingURL=InsertionSortData.js.map