"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoVisHelper_1 = require("./AlgoVisHelper");
var AlgoFrame = (function () {
    function AlgoFrame(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.canvas = document.getElementById('canvas');
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
    }
    AlgoFrame.prototype.getCanvasWidth = function () {
        return this.canvasWidth;
    };
    AlgoFrame.prototype.getCanvasHeight = function () {
        return this.canvasHeight;
    };
    AlgoFrame.prototype.render = function (circle, points) {
        this.circle = circle;
        this.points = points;
        this.repaint();
    };
    AlgoFrame.prototype.repaint = function () {
        this.pi = document.getElementById('pi');
        this.count = document.getElementById('count');
        var ctx = this.canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#2196F3';
        AlgoVisHelper_1.AlgoVisHelper.strokeCircle(ctx, this.circle.getX(), this.circle.getY(), this.circle.getR());
        this.insideCircle = 0;
        for (var i = 0; i < this.points.length; i++) {
            var p = this.points[i];
            if (this.circle.contain(p)) {
                ctx.fillStyle = '#F44336';
                this.insideCircle++;
            }
            else {
                ctx.fillStyle = '#4CAF50';
            }
            AlgoVisHelper_1.AlgoVisHelper.fillCircle(ctx, p.getX(), p.getY(), 3);
        }
        this.count.innerHTML = this.points.length;
        this.points.length === 0 ? this.piEstimation = 0 : this.piEstimation = 4 * this.insideCircle / this.points.length;
        this.pi.innerHTML = this.piEstimation.toFixed(8);
    };
    return AlgoFrame;
}());
exports.AlgoFrame = AlgoFrame;
//# sourceMappingURL=AlgoFrame.js.map