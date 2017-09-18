(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./AlgoVisHelper":2}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./AlgoFrame":1,"./Circle":4,"./Point":5}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    return Point;
}());
exports.Point = Point;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoVisualizer_1 = require("./AlgoVisualizer");
var containerWidth = document.getElementById('container').clientWidth;
var sceneWidth = containerWidth - 20;
var vis_01 = new AlgoVisualizer_1.AlgoVisualizer(sceneWidth, sceneWidth, 20000);

},{"./AlgoVisualizer":3}]},{},[6]);
