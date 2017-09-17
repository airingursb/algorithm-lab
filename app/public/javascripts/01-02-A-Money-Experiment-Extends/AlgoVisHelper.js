"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoVisHelper = (function () {
    function AlgoVisHelper() {
    }
    AlgoVisHelper.strokeCircle = function (context, x, y, r) {
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.stroke();
    };
    AlgoVisHelper.fillCircle = function (context, x, y, r) {
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.fill();
    };
    return AlgoVisHelper;
}());
exports.AlgoVisHelper = AlgoVisHelper;
//# sourceMappingURL=AlgoVisHelper.js.map