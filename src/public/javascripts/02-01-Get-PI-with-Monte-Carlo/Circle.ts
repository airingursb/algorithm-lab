import {Point} from './Point'

export class Circle {
    private x: number;
    private y: number;
    private r: number;

    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }

    public getR() {
        return this.r;
    }

    public contain(point: Point) {
        return Math.pow(point.getX() - this.x, 2) + Math.pow(point.getY() - this.y, 2) <= this.r * this.r
    }
}