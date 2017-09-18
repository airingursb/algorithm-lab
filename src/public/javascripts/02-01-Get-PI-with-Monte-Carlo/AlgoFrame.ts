import {Circle} from './Circle'
import {Point} from './Point'
import {AlgoVisHelper} from './AlgoVisHelper'

export class AlgoFrame {

    private canvasWidth: number;
    private canvasHeight: number;

    canvas: any;

    private circle: Circle;
    private points: any;

    private pi: any;
    private count: any;

    private insideCircle: number;
    private piEstimation: number;

    constructor(canvasWidth, canvasHeight) {

        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.canvas = document.getElementById('canvas');
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
    }

    public getCanvasWidth() {
        return this.canvasWidth;
    }

    public getCanvasHeight() {
        return this.canvasHeight;
    }

    public render(circle: Circle, points) {
        this.circle = circle;
        this.points = points;
        this.repaint();
    }

    private repaint() {

        this.pi = document.getElementById('pi');
        this.count = document.getElementById('count');

        let ctx = this.canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

        ctx.lineWidth = 3;
        ctx.strokeStyle = '#2196F3';
        AlgoVisHelper.strokeCircle(ctx, this.circle.getX(), this.circle.getY(), this.circle.getR()
        );

        this.insideCircle = 0;

        for(let i = 0; i < this.points.length; i++) {
            let p: Point = this.points[i];
            if(this.circle.contain(p)) {
                ctx.fillStyle = '#F44336';
                this.insideCircle ++
            } else {
                ctx.fillStyle = '#4CAF50';
            }
            AlgoVisHelper.fillCircle(ctx, p.getX(), p.getY(), 3);
        }

        this.count.innerHTML = this.points.length;
        this.points.length === 0 ? this.piEstimation = 0 : this.piEstimation = 4 * this.insideCircle / this.points.length;
        this.pi.innerHTML = this.piEstimation.toFixed(8);
    }
}