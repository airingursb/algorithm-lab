"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoVisHelper = (function () {
    function AlgoVisHelper() {
    }
    AlgoVisHelper.strokeCircle = function (g2d, x, y, r) {
        g2d.beginPath();
        g2d.arc(x, y, r, 0, 2 * Math.PI);
        g2d.closePath();
        g2d.stroke();
    };
    AlgoVisHelper.fillCircle = function (g2d, x, y, r) {
        g2d.beginPath();
        g2d.arc(x, y, r, 0, 2 * Math.PI);
        g2d.closePath();
        g2d.fill();
    };
    AlgoVisHelper.fillRectangle = function (g2d, x, y, w, h) {
        g2d.fillRect(x, y, w, h);
    };
    AlgoVisHelper.setColor = function (g2d, color) {
        g2d.fillStyle = color;
    };
    return AlgoVisHelper;
}());
AlgoVisHelper.Red = "#F44336";
AlgoVisHelper.Pink = "#E91E63";
AlgoVisHelper.Purple = "#9C27B0";
AlgoVisHelper.DeepPurple = "#673AB7";
AlgoVisHelper.Indigo = "#3F51B5";
AlgoVisHelper.Blue = "#2196F3";
AlgoVisHelper.LightBlue = "#03A9F4";
AlgoVisHelper.Cyan = "#00BCD4";
AlgoVisHelper.Teal = "#009688";
AlgoVisHelper.Green = "#4CAF50";
AlgoVisHelper.LightGreen = "#8BC34A";
AlgoVisHelper.Lime = "#CDDC39";
AlgoVisHelper.Yellow = "#FFEB3B";
AlgoVisHelper.Amber = "#FFC107";
AlgoVisHelper.Orange = "#FF9800";
AlgoVisHelper.DeepOrange = "#FF5722";
AlgoVisHelper.Brown = "#795548";
AlgoVisHelper.Grey = "#9E9E9E";
AlgoVisHelper.BlueGrey = "#607D8B";
AlgoVisHelper.Black = "#000000";
AlgoVisHelper.White = "#FFFFFF";
exports.AlgoVisHelper = AlgoVisHelper;
//# sourceMappingURL=AlgoVisHelper.js.map