"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoVisHelper_1 = require("./AlgoVisHelper");
var AlgoFrame = (function () {
    function AlgoFrame(g2d, canvasWidth, canvasHeight) {
        this.g2d = g2d;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    AlgoFrame.prototype.getCanvasWidth = function () {
        return this.canvasWidth;
    };
    AlgoFrame.prototype.getCanvasHeight = function () {
        return this.canvasHeight;
    };
    AlgoFrame.prototype.repaint = function () {
        this.g2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        var w = this.canvasWidth / this.data.N();
        for (var i = 0; i < this.data.N(); i++) {
            if (i < this.data.orderedIndex) {
                AlgoVisHelper_1.AlgoVisHelper.setColor(this.g2d, AlgoVisHelper_1.AlgoVisHelper.Red);
            }
            else {
                AlgoVisHelper_1.AlgoVisHelper.setColor(this.g2d, AlgoVisHelper_1.AlgoVisHelper.Grey);
            }
            if (i == this.data.currentIndex) {
                AlgoVisHelper_1.AlgoVisHelper.setColor(this.g2d, AlgoVisHelper_1.AlgoVisHelper.LightBlue);
            }
            AlgoVisHelper_1.AlgoVisHelper.fillRectangle(this.g2d, i * w, this.canvasHeight - this.data.get(i), w - 1, this.data.get(i));
        }
    };
    AlgoFrame.prototype.render = function (data) {
        this.data = data;
        this.repaint();
    };
    return AlgoFrame;
}());
exports.AlgoFrame = AlgoFrame;
//# sourceMappingURL=AlgoFrame.js.map