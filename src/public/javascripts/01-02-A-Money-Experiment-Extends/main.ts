import {AlgoVisualizer as AlgoVisualizer_01} from './AlgoVisualizer'

let containerWidth: any = document.getElementById('container').clientWidth;
let sceneWidth = containerWidth - 20;
let sceneHeight = 800;

let vis_01 = new AlgoVisualizer_01(sceneWidth, sceneHeight);
