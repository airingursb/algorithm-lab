"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoVisHelper = (function () {
    function AlgoVisHelper() {
    }
    AlgoVisHelper.strokeCircle = function (context, x, y, r) {
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.closePath();
        context.stroke();
    };
    AlgoVisHelper.fillCircle = function (context, x, y, r) {
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
    };
    return AlgoVisHelper;
}());
exports.AlgoVisHelper = AlgoVisHelper;
//# sourceMappingURL=AlgoVisHelper.js.map