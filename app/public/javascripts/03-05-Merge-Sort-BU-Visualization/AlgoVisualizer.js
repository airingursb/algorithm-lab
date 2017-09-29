"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoFrame_1 = require("./AlgoFrame");
var MergeSortData_1 = require("./MergeSortData");
var AlgoVisualizer = (function () {
    function AlgoVisualizer(g2d, sceneWidth, sceneHeight, N) {
        this.DELAY = 40;
        this.g2d = g2d;
        this.data = new MergeSortData_1.MergeSortData(N, sceneHeight);
        this.data_list = [];
        this.N = N;
        this.sceneHeight = sceneHeight;
        this.frame = new AlgoFrame_1.AlgoFrame(g2d, sceneWidth, sceneHeight);
        this.run();
    }
    AlgoVisualizer.prototype.run = function () {
        this.setData(-1, -1, -1);
        for (var sz = 1; sz < this.data.N(); sz *= 2)
            for (var i = 0; i < this.data.N() - sz; i += sz + sz)
                this.merge(i, i + sz - 1, Math.min(i + sz + sz - 1, this.data.N() - 1));
        this.setData(0, this.data.N() - 1, this.data.N() - 1);
        this.render();
    };
    AlgoVisualizer.prototype.merge = function (l, mid, r) {
        var aux = [];
        for (var a = l; a < r + 1; a++) {
            aux.push(this.data.numbers[a]);
        }
        var i = l, j = mid + 1;
        for (var k = l; k <= r; k++) {
            if (i > mid) {
                this.data.numbers[k] = aux[j - l];
                j++;
            }
            else if (j > r) {
                this.data.numbers[k] = aux[i - l];
                i++;
            }
            else if (aux[i - l] < aux[j - l]) {
                this.data.numbers[k] = aux[i - l];
                i++;
            }
            else {
                this.data.numbers[k] = aux[j - l];
                j++;
            }
            this.setData(l, r, k);
        }
    };
    AlgoVisualizer.prototype.setData = function (l, r, mergeIndex) {
        var data = new MergeSortData_1.MergeSortData(this.N, this.sceneHeight);
        data.l = l;
        data.r = r;
        data.mergeIndex = mergeIndex;
        data.numbers = this.data.numbers.slice();
        this.data_list[this.data_list.length] = data;
    };
    AlgoVisualizer.prototype.render = function () {
        var _this = this;
        var i = 0;
        setInterval(function () {
            if (i < _this.data_list.length) {
                _this.frame.render(_this.data_list[i]);
                i++;
            }
        }, this.DELAY);
    };
    return AlgoVisualizer;
}());
exports.AlgoVisualizer = AlgoVisualizer;
//# sourceMappingURL=AlgoVisualizer.js.map