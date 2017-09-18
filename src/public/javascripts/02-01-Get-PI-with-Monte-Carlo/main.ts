import {AlgoVisualizer as AlgoVisualizer_01} from './AlgoVisualizer'

let containerWidth: any = document.getElementById('container').clientWidth;
let sceneWidth = containerWidth - 20;

let vis_01 = new AlgoVisualizer_01(sceneWidth, sceneWidth, 20000);
