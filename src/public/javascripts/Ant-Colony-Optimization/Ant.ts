import {Map} from './Map';

export class Ant {
    static UP: number = 0;
    static LEFT: number = 1;
    static DOWN: number = 2;
    static RIGHT: number = 3;

    static HOME_SMELL: number = 0;
    static FOOD_SMELL: number = 1;

    static MAX_SMELL: number = 500;
    static MAX_MEMORY: number = 100;

    static VISION: number = 6;
    static SMELL_LEAVE_RATE: number = 0.05;

    private map;
    private dir;
    private memory;
    private food;
    private x;
    private y;
    private smell_home;
    private smell_food;
    private speed;
    private time;

    constructor(map) {
        this.map = map;
        this.map.add_ant(this);
    }
}
