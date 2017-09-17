(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoFrame_1 = require("./AlgoFrame");
var AlgoVisualizer = (function () {
    function AlgoVisualizer(sceneWidth, sceneHeight) {
        this.DELAY = 10;
        this.money = [];
        for (var i = 0; i < 100; i++) {
            this.money[i] = 100;
        }
        this.frame = new AlgoFrame_1.AlgoFrame(sceneWidth, sceneHeight);
        this.run();
    }
    AlgoVisualizer.prototype.run = function () {
        var _this = this;
        setInterval(function () {
            _this.frame.render(_this.money);
            for (var i = 0; i < _this.money.length; i++) {
                if (_this.money[i] > 0) {
                    var j = Math.floor(Math.random() * _this.money.length);
                    _this.money[i] -= 1;
                    _this.money[j] += 1;
                }
            }
        }, this.DELAY);
    };
    return AlgoVisualizer;
}());
exports.AlgoVisualizer = AlgoVisualizer;

},{"./AlgoFrame":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoVisualizer_1 = require("./AlgoVisualizer");
var containerWidth = document.getElementById('container').clientWidth;
var sceneWidth = containerWidth - 20;
var sceneHeight = 400;
var vis_01 = new AlgoVisualizer_1.AlgoVisualizer(sceneWidth, sceneHeight);

},{"./AlgoVisualizer":2}]},{},[3]);
