"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoFrame_1 = require("./AlgoFrame");
var InsertionSortData_1 = require("./InsertionSortData");
var AlgoVisualizer = (function () {
    function AlgoVisualizer(g2d, sceneWidth, sceneHeight, N) {
        this.DELAY = 40;
        this.g2d = g2d;
        this.data = new InsertionSortData_1.InsertionSortData(N, sceneHeight);
        this.data_list = [];
        this.N = N;
        this.sceneHeight = sceneHeight;
        this.frame = new AlgoFrame_1.AlgoFrame(g2d, sceneWidth, sceneHeight);
        this.run();
    }
    AlgoVisualizer.prototype.run = function () {
        this.setData(0, -1);
        for (var i = 0; i < this.data.N(); i++) {
            this.setData(i, i);
            for (var j = i; j > 0 && this.data.get(j) < this.data.get(j - 1); j--) {
                this.data.swap(j, j - 1);
                this.setData(i + 1, j - 1);
            }
        }
        this.setData(this.data.N(), -1);
        this.render();
    };
    AlgoVisualizer.prototype.setData = function (orderedIndex, currentIndex) {
        var data = new InsertionSortData_1.InsertionSortData(this.N, this.sceneHeight);
        data.orderedIndex = orderedIndex;
        data.currentIndex = currentIndex;
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