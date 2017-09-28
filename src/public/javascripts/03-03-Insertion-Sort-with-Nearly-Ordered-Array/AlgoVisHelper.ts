export class AlgoVisHelper {

    private constructor() {
    }

    static Red = "#F44336";
    static Pink = "#E91E63";
    static Purple = "#9C27B0";
    static DeepPurple = "#673AB7";
    static Indigo = "#3F51B5";
    static Blue = "#2196F3";
    static LightBlue = "#03A9F4";
    static Cyan = "#00BCD4";
    static Teal = "#009688";
    static Green = "#4CAF50";
    static LightGreen = "#8BC34A";
    static Lime = "#CDDC39";
    static Yellow = "#FFEB3B";
    static Amber = "#FFC107";
    static Orange = "#FF9800";
    static DeepOrange = "#FF5722";
    static Brown = "#795548";
    static Grey = "#9E9E9E";
    static BlueGrey = "#607D8B";
    static Black = "#000000";
    static White = "#FFFFFF";

    public static strokeCircle(g2d, x: number, y: number, r: number) {
        g2d.beginPath();
        g2d.arc(x, y, r, 0, 2 * Math.PI);
        g2d.closePath();
        g2d.stroke()
    }

    public static fillCircle(g2d, x: number, y: number, r: number) {
        g2d.beginPath();
        g2d.arc(x, y, r, 0, 2 * Math.PI);
        g2d.closePath();
        g2d.fill()
    }

    public static fillRectangle(g2d, x, y, w, h){
        g2d.fillRect(x, y, w, h);
    }

    public static setColor(g2d, color){
        g2d.fillStyle = color;
    }
}