"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoFrame_1 = require("./AlgoFrame");
var SelectionSortData_1 = require("./SelectionSortData");
var AlgoVisualizer = (function () {
    function AlgoVisualizer(g2d, sceneWidth, sceneHeight, N) {
        this.DELAY = 5;
        this.g2d = g2d;
        this.data = new SelectionSortData_1.SelectionSortData(N, sceneHeight);
        this.data_list = [];
        this.N = N;
        this.sceneHeight = sceneHeight;
        this.frame = new AlgoFrame_1.AlgoFrame(g2d, "Selection Sort Visualization", sceneWidth, sceneHeight);
        this.run();
    }
    AlgoVisualizer.prototype.run = function () {
        this.setData(0, -1, -1);
        for (var i = 0; i < this.data.N(); i++) {
            var minIndex = i;
            this.setData(i, -1, minIndex);
            for (var j = i + 1; j < this.data.N(); j++) {
                this.setData(i, j, minIndex);
                if (this.data.get(j) < this.data.get(minIndex)) {
                    minIndex = j;
                    this.setData(i, j, minIndex);
                }
            }
            this.data.swap(i, minIndex);
            this.setData(i + 1, -1, -1);
        }
        this.setData(this.data.N(), -1, -1);
        this.render();
    };
    AlgoVisualizer.prototype.setData = function (orderedIndex, currentCompareIndex, currentMinIndex) {
        var data = new SelectionSortData_1.SelectionSortData(this.N, this.sceneHeight);
        data.orderedIndex = orderedIndex;
        data.currentCompareIndex = currentCompareIndex;
        data.currentMinIndex = currentMinIndex;
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