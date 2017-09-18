"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoFrame_1 = require("./AlgoFrame");
var Circle_1 = require("./Circle");
var Point_1 = require("./Point");
var AlgoVisualizer = (function () {
    function AlgoVisualizer(sceneWidth, sceneHeight, N) {
        this.DELAY = 200;
        this.N = N;
        this.circle = new Circle_1.Circle(sceneWidth / 2, sceneHeight / 2, sceneWidth / 2);
        this.points = [];
        this.frame = new AlgoFrame_1.AlgoFrame(sceneWidth, sceneHeight);
        this.run();
    }
    AlgoVisualizer.prototype.run = function () {
        var _this = this;
        var i = 0;
        setInterval(function () {
            if (i < _this.N) {
                var x = Math.floor(Math.random() * _this.frame.getCanvasWidth());
                var y = Math.floor(Math.random() * _this.frame.getCanvasHeight());
                var p = new Point_1.Point(x, y);
                _this.points.push(p);
                _this.frame.render(_this.circle, _this.points);
                i++;
            }
        }, this.DELAY);
    };
    return AlgoVisualizer;
}());
exports.AlgoVisualizer = AlgoVisualizer;
//# sourceMappingURL=AlgoVisualizer.js.map