"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle = (function () {
    function Circle(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    Circle.prototype.getX = function () {
        return this.x;
    };
    Circle.prototype.getY = function () {
        return this.y;
    };
    Circle.prototype.getR = function () {
        return this.r;
    };
    Circle.prototype.contain = function (point) {
        return Math.pow(point.getX() - this.x, 2) + Math.pow(point.getY() - this.y, 2) <= this.r * this.r;
    };
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map