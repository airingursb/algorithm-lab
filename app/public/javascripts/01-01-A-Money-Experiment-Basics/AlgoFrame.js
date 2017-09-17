"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoFrame = (function () {
    function AlgoFrame(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.count = 0;
        this.rounds = document.getElementById('rounds');
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
    AlgoFrame.prototype.render = function (money) {
        this.money = money;
        this.repaint();
    };
    AlgoFrame.prototype.repaint = function () {
        this.count++;
        this.rounds.innerHTML = this.count;
        var ctx = this.canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        var w = this.canvasWidth / this.money.length;
        ctx.fillStyle = '#2196F3';
        for (var i = 0; i < this.money.length; i++) {
            ctx.fillRect(i * w + 1, this.canvasHeight - this.money[i], w - 1, this.money[i]);
        }
    };
    return AlgoFrame;
}());
exports.AlgoFrame = AlgoFrame;
//# sourceMappingURL=AlgoFrame.js.map