"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoFrame_1 = require("./AlgoFrame");
var QuickSortData_1 = require("./QuickSortData");
var AlgoVisualizer = (function () {
    function AlgoVisualizer(g2d, sceneWidth, sceneHeight, N) {
        this.DELAY = 40;
        this.g2d = g2d;
        this.data = new QuickSortData_1.QuickSortData(N, sceneHeight);
        this.data_list = [];
        this.N = N;
        this.sceneHeight = sceneHeight;
        this.frame = new AlgoFrame_1.AlgoFrame(g2d, sceneWidth, sceneHeight);
        this.run();
    }
    AlgoVisualizer.prototype.run = function () {
        this.setData(-1, -1, -1, -1, -1);
        this.quickSort(0, this.data.N() - 1);
        this.setData(-1, -1, -1, -1, -1);
        this.render();
    };
    AlgoVisualizer.prototype.quickSort = function (l, r) {
        if (l > r)
            return;
        if (l == r) {
            this.setData(l, r, l, -1, -1);
            return;
        }
        this.setData(l, r, -1, -1, -1);
        var p = this.partition(l, r);
        this.quickSort(l, p - 1);
        this.quickSort(p + 1, r);
    };
    AlgoVisualizer.prototype.partition = function (l, r) {
        var p = Math.floor(Math.random() * (r - l + 1)) + l;
        this.setData(l, r, -1, p, -1);
        this.data.swap(l, p);
        var v = this.data.get(l);
        this.setData(l, r, -1, l, -1);
        var j = l;
        for (var i = l + 1; i <= r; i++) {
            this.setData(l, r, -1, l, i);
            if (this.data.get(i) < v) {
                j++;
                this.data.swap(j, i);
                this.setData(l, r, -1, l, i);
            }
        }
        this.data.swap(l, j);
        this.setData(l, r, j, -1, -1);
        return j;
    };
    AlgoVisualizer.prototype.setData = function (l, r, fixedPivot, curPivot, curElement) {
        var data = new QuickSortData_1.QuickSortData(this.N, this.sceneHeight);
        data.l = l;
        data.r = r;
        if (fixedPivot != -1)
            data.fixedPivots[fixedPivot] = true;
        data.curPivot = curPivot;
        data.curElement = curElement;
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