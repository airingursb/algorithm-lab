"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectionSortData = (function () {
    function SelectionSortData(N, randomBound) {
        this.numbers = new Array(N);
        this.orderedIndex = -1;
        this.currentCompareIndex = -1;
        this.currentMinIndex = -1;
        for (var i = 0; i < N; i++) {
            this.numbers[i] = Math.floor((Math.random() * randomBound)) + 1;
        }
    }
    SelectionSortData.prototype.N = function () {
        return this.numbers.length;
    };
    SelectionSortData.prototype.get = function (index) {
        if (index < 0 || index >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }
        return this.numbers[index];
    };
    SelectionSortData.prototype.swap = function (i, j) {
        if (i < 0 || i >= this.numbers.length || j < 0 || j >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }
        var t = this.numbers[i];
        this.numbers[i] = this.numbers[j];
        this.numbers[j] = t;
    };
    return SelectionSortData;
}());
exports.SelectionSortData = SelectionSortData;
//# sourceMappingURL=SelectionSortData.js.map