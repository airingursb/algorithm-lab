import {AlgoVisualizer } from './AlgoVisualizer'

let containerWidth: any = document.getElementById('container').clientWidth;
let sceneWidth = containerWidth - 20;
let sceneHeight = 600;

let canvas:any = document.getElementById('canvas');
let g2d = canvas.getContext('2d');

canvas.width = sceneWidth;
canvas.height = sceneHeight;

let N = 100;

let visualizer = new AlgoVisualizer(g2d, sceneWidth, sceneHeight, N);
