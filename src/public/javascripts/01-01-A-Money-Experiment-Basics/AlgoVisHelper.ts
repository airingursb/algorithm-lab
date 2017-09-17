export class AlgoVisHelper {

    private constructor() {
    }

    public static strokeCircle(context, x: number, y: number, r: number) {
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.stroke()
    }

    public static fillCircle(context, x: number, y: number, r: number) {
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.fill()
    }
}