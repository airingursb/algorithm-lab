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
//# sourceMappingURL=main.js.map