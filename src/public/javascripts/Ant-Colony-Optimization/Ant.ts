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

    constructor(map: Map) {
        this.map = map;
        this.map.add_ant(this);
        this.dir = Math.floor(Math.random() * 4);
        this.memory = [];
        this.food = false;
        this.x = this.map.get_home_coor()[0];
        this.y = this.map.get_home_coor()[1];

        this.smell_home = Ant.MAX_SMELL;
        this.smell_food = 0;
        this.speed = Math.floor(Math.random() * 3 + 1);
        this.time = 0;
    }

    initial_home() {
        this.memory = [];
        this.food = false;
        this.smell_home = Ant.MAX_SMELL;
        this.smell_food = 0;
        this.dir = this.go_back();
    }

    initial_food() {
        this.memory = [];
        this.food = true;
        this.smell_home = 0;
        this.smell_food = Ant.MAX_SMELL;
        this.dir = this.go_back();
    }

    show_home_smell() {
        return this.smell_home;
    }

    show_food_smell() {
        return this.smell_food;
    }

    move(dir) {
        this.dir = dir;
        this.x = this.calcu_dire_coor(dir)[0];
        this.y = this.calcu_dire_coor(dir)[1];

        if (this.memory.length >= Ant.MAX_MEMORY) {
            this.memory.pop(0)
        }
        this.memory.push([this.x, this.y])
    }

    // 根据当前方向，计算出前，左，右，三个方向中可达的方向
    can_go_dires() {
        let cango_dirs = [];
        let dirs;

        if (this.dir === Ant.UP) {
        }
    }

    // 计算此方向的视野
    calcu_vision(dir) {

    }

    // 计算如果按照此方向移动后，将会到达的坐标
    calcu_dire_coor(dir) {
        if (dir === Ant.UP) {
            return [this.x, this.y - 1]
        } else if (dir === Ant.DOWN) {
            return [this.x, this.y + 1]
        } else if (dir === Ant.LEFT) {
            return [this.x - 1, this.y]
        } else {
            return [this.x + 1, this.y]
        }
    }

    go_back() {

    }
}
