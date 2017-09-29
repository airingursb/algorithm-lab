(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
            if (i >= this.data.l && i <= this.data.r) {
                AlgoVisHelper_1.AlgoVisHelper.setColor(this.g2d, AlgoVisHelper_1.AlgoVisHelper.Green);
            }
            else {
                AlgoVisHelper_1.AlgoVisHelper.setColor(this.g2d, AlgoVisHelper_1.AlgoVisHelper.Grey);
            }
            if (i >= this.data.l && i <= this.data.mergeIndex) {
                AlgoVisHelper_1.AlgoVisHelper.setColor(this.g2d, AlgoVisHelper_1.AlgoVisHelper.Red);
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
var MergeSortData_1 = require("./MergeSortData");
var AlgoVisualizer = (function () {
    function AlgoVisualizer(g2d, sceneWidth, sceneHeight, N) {
        this.DELAY = 40;
        this.g2d = g2d;
        this.data = new MergeSortData_1.MergeSortData(N, sceneHeight);
        this.data_list = [];
        this.N = N;
        this.sceneHeight = sceneHeight;
        this.frame = new AlgoFrame_1.AlgoFrame(g2d, sceneWidth, sceneHeight);
        this.run();
    }
    AlgoVisualizer.prototype.run = function () {
        this.setData(-1, -1, -1);
        this.mergeSort(0, this.data.N() - 1);
        this.setData(0, this.data.N() - 1, this.data.N() - 1);
        this.render();
    };
    AlgoVisualizer.prototype.mergeSort = function (l, r) {
        if (l >= r)
            return;
        this.setData(l, r, -1);
        var mid = Math.floor((l + r) / 2);
        this.mergeSort(l, mid);
        this.mergeSort(mid + 1, r);
        this.merge(l, mid, r);
    };
    AlgoVisualizer.prototype.merge = function (l, mid, r) {
        var aux = [];
        for (var a = l; a < r + 1; a++) {
            aux.push(this.data.numbers[a]);
        }
        console.log(aux);
        var i = l, j = mid + 1;
        for (var k = l; k <= r; k++) {
            if (i > mid) {
                this.data.numbers[k] = aux[j - l];
                j++;
            }
            else if (j > r) {
                this.data.numbers[k] = aux[i - l];
                i++;
            }
            else if (aux[i - l] < aux[j - l]) {
                this.data.numbers[k] = aux[i - l];
                i++;
            }
            else {
                this.data.numbers[k] = aux[j - l];
                j++;
            }
            this.setData(l, r, k);
        }
    };
    AlgoVisualizer.prototype.setData = function (l, r, mergeIndex) {
        var data = new MergeSortData_1.MergeSortData(this.N, this.sceneHeight);
        data.l = l;
        data.r = r;
        data.mergeIndex = mergeIndex;
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

},{"./AlgoFrame":1,"./MergeSortData":4}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MergeSortData = (function () {
    function MergeSortData(N, randomBound) {
        this.numbers = new Array(N);
        for (var i = 0; i < N; i++) {
            this.numbers[i] = Math.floor(Math.random() * randomBound) + 1;
        }
    }
    MergeSortData.prototype.N = function () {
        return this.numbers.length;
    };
    MergeSortData.prototype.get = function (index) {
        if (index < 0 || index >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }
        return this.numbers[index];
    };
    MergeSortData.prototype.swap = function (i, j) {
        if (i < 0 || i >= this.numbers.length || j < 0 || j >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }
        var t = this.numbers[i];
        this.numbers[i] = this.numbers[j];
        this.numbers[j] = t;
    };
    return MergeSortData;
}());
exports.MergeSortData = MergeSortData;

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
