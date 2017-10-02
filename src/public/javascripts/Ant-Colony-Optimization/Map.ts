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

    private data: any;
    private ants: any;
    private home_food: number;
    private food_foods: number;
    private smells: any;
    private X: number;
    private Y: number;
    private time: number;

    private home_coor: any;
    private food_coor: any;

    constructor(x, y, food_counts) {
        this.data = [];
        this.ants = [];
        this.home_food = 0;
        this.food_foods = food_counts;
        this.smells = {};
        this.X = x;
        this.Y = y;
        this.time = 0;

        this.home_coor = [0, 0];
        this.food_coor = [x - 1, y - 1];


        for (let i = 0; i < x; i++) {
            this.data[i] = [];
            for (let j = 0; j < y; j++) {
                this.data[i][j] = Map.LAWN;
            }
        }

        this.data[0][0] = Map.HOME;
        this.data[x - 1][y - 1] = Map.FOOD;

        // 随机放置障碍物
        for (let i = 0; i < Map.OBSTACLE_COUNT; i++) {
            let x1 = Math.floor(Math.random() * x);
            let y1 = Math.floor(Math.random() * y);
            if (this.is_home(x1, y1) || this.is_food(x1, y1)) {
                continue
            }
            this.data[x1][y1] = Map.OBSTACLE;
        }

        // 初始化每个草地的默认信息素值
        this.smells = [];
        for (let i = 0; i < x; i++) {
            this.smells[i] = [];
            for (let j = 0; j < y; j++) {
                if (this.data[i][j] == Map.LAWN) {
                    this.smells[i][j] = {HOME_SMELL: 0, FOOD_SMELL: 0};
                }
            }
        }
    }

    private landform() {
        return this.data
    }

    private is_home(x, y) {
        return this.data[x][y] == Map.HOME
    }

    private is_food(x, y) {
        return this.data[x][y] == Map.FOOD
    }

    get_home_coor() {
        return this.home_coor;
    }

    get_food_coor() {
        return this.food_coor;
    }

    add_ant(ant) {
        this.ants.push(ant);
    }
}