import {Ant} from './Ant';

export class Map {
    static LAWN: number = 0;
    static OBSTACLE: number = 1;
    static HOME: number = 2;
    static FOOD: number = 3;
    static ANT: number = 4;

    static SMELL_GONE_SPEED: number = 50;
    static SMELL_GONE_RATE: number = 0.05;
    static OBSTACLE_COUNT: number = 30;

    private _data: any;
    private _ants: any;
    private _home_food: number;
    private _food_foods: number;
    private _smells: any;
    private X: number;
    private Y: number;
    private time: number;

    constructor(x, y, food_counts) {
        this._data = [];
        this._ants = [];
        this._home_food = 0;
        this._food_foods = food_counts;
        this._smells = {};
        this.X = x;
        this.Y = y;
        this.time = 0;

        for (let i = 0; i < x; i++) {
            this._data[i] = [];
            for (let j = 0; j < y; j++) {
                this._data[i][j] = Map.LAWN;
            }
        }

        this._data[0][0] = Map.HOME;
        this._data[x - 1][y - 1] = Map.FOOD;

        // 随机放置障碍物
        for (let i = 0; i < Map.OBSTACLE_COUNT; i++) {
            let x1 = Math.floor(Math.random() * x);
            let y1 = Math.floor(Math.random() * y);
            if (this.is_home(x1, y1) || this.is_food(x1, y1)) {
                continue
            }
            this._data[x1][y1] = Map.OBSTACLE;
        }

        // 初始化每个草地的默认信息素值
        this._smells = [];
        for (let i = 0; i < x; i++) {
            this._smells[i] = [];
            for (let j = 0; j < y; j++) {
                if (this._data[i][j] == Map.LAWN) {
                    this._smells[i][j] = {HOME_SMELL: 0, FOOD_SMELL: 0};
                }
            }
        }
    }

    private landform() {
        return this._data
    }

    private is_home(x, y) {
        return this._data[x][y] == Map.HOME
    }

    private is_food(x, y) {
        return this._data[x][y] == Map.FOOD
    }

    add_ant(ant) {
        this._ants.push(ant);
    }
}