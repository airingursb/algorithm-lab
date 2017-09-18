export class Point {
    private x: number;
    private y: number;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }
}