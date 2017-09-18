import {AlgoFrame} from './AlgoFrame'
import {Circle} from './Circle'
import {Point} from './Point'

export class AlgoVisualizer {

    private DELAY: number = 200;

    private circle: Circle;
    private points: any;

    private frame: AlgoFrame;
    private N: number;

    constructor(sceneWidth, sceneHeight, N) {

        this.N = N;
        this.circle = new Circle(sceneWidth / 2, sceneHeight / 2, sceneWidth / 2);

        this.points = [];

        this.frame = new AlgoFrame(sceneWidth, sceneHeight);
        this.run();
    }

    private run() {
        let i = 0;
        setInterval(() => {
            if (i < this.N) {
                let x = Math.floor(Math.random() * this.frame.getCanvasWidth());
                let y = Math.floor(Math.random() * this.frame.getCanvasHeight());
                let p: Point = new Point(x, y);
                this.points.push(p);
                this.frame.render(this.circle, this.points);
                i++
            }
        }, this.DELAY);

    }
}