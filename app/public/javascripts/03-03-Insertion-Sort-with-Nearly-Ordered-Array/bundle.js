(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoVisHelper_1 = require("./AlgoVisHelper");
var AlgoFrame = (function () {
    function AlgoFrame(g2d, title, canvasWidth, canvasHeight) {
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

},{"./AlgoVisHelper":2}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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
        this.frame = new AlgoFrame_1.AlgoFrame(g2d, "Selection Sort Visualization", sceneWidth, sceneHeight);
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

},{"./AlgoFrame":1,"./InsertionSortData":4}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InsertionSortData = (function () {
    function InsertionSortData(N, randomBound) {
        this.numbers = new Array(N);
        this.orderedIndex = -1;
        this.currentIndex = -1;
        for (var i = 0; i < N; i++) {
            this.numbers[i] = Math.floor((Math.random() * randomBound)) + 1;
        }
        this.numbers.sort(function (a, b) {
            return a - b;
        });
        var swapTime = Math.floor(0.02 * N);
        for (var i = 0; i < swapTime; i++) {
            var a = Math.floor(Math.random() * N);
            var b = Math.floor(Math.random() * N);
            this.swap(a, b);
        }
    }
    InsertionSortData.prototype.N = function () {
        return this.numbers.length;
    };
    InsertionSortData.prototype.get = function (index) {
        if (index < 0 || index >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }
        return this.numbers[index];
    };
    InsertionSortData.prototype.swap = function (i, j) {
        if (i < 0 || i >= this.numbers.length || j < 0 || j >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }
        var t = this.numbers[i];
        this.numbers[i] = this.numbers[j];
        this.numbers[j] = t;
    };
    return InsertionSortData;
}());
exports.InsertionSortData = InsertionSortData;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoVisualizer_1 = require("./AlgoVisualizer");
var containerWidth = document.getElementById('container').clientWidth;
var sceneWidth = containerWidth - 20;
var sceneHeight = 600;
var canvas = document.getElementById('canvas');
var g2d = canvas.getContext('2d');
canvas.width = sceneWidth;
canvas.height = sceneHeight;
var N = 100;
var visualizer = new AlgoVisualizer_1.AlgoVisualizer(g2d, sceneWidth, sceneHeight, N);

},{"./AlgoVisualizer":3}]},{},[5]);
