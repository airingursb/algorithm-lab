export class AlgoVisHelper {

    private constructor() {
    }

    public static strokeCircle(context, x: number, y: number, r: number) {
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.closePath();
        context.stroke()
    }

    public static fillCircle(context, x: number, y: number, r: number) {
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.closePath();
        context.fill()
    }
}