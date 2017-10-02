"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ant = (function () {
    function Ant(map) {
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
    Ant.prototype.initial_home = function () {
        this.memory = [];
        this.food = false;
        this.smell_home = Ant.MAX_SMELL;
        this.smell_food = 0;
        this.dir = this.go_back();
    };
    Ant.prototype.initial_food = function () {
        this.memory = [];
        this.food = true;
        this.smell_home = 0;
        this.smell_food = Ant.MAX_SMELL;
        this.dir = this.go_back();
    };
    Ant.prototype.show_home_smell = function () {
        return this.smell_home;
    };
    Ant.prototype.show_food_smell = function () {
        return this.smell_food;
    };
    Ant.prototype.move = function (dir) {
        this.dir = dir;
        this.x = this.calcu_dire_coor(dir)[0];
        this.y = this.calcu_dire_coor(dir)[1];
        if (this.memory.length >= Ant.MAX_MEMORY) {
            this.memory.pop(0);
        }
        this.memory.push([this.x, this.y]);
    };
    Ant.prototype.can_go_dires = function () {
        var cango_dirs = [];
        var dirs;
        if (this.dir === Ant.UP) {
        }
    };
    Ant.prototype.calcu_vision = function (dir) {
    };
    Ant.prototype.calcu_dire_coor = function (dir) {
        if (dir === Ant.UP) {
            return [this.x, this.y - 1];
        }
        else if (dir === Ant.DOWN) {
            return [this.x, this.y + 1];
        }
        else if (dir === Ant.LEFT) {
            return [this.x - 1, this.y];
        }
        else {
            return [this.x + 1, this.y];
        }
    };
    Ant.prototype.go_back = function () {
    };
    return Ant;
}());
Ant.UP = 0;
Ant.LEFT = 1;
Ant.DOWN = 2;
Ant.RIGHT = 3;
Ant.HOME_SMELL = 0;
Ant.FOOD_SMELL = 1;
Ant.MAX_SMELL = 500;
Ant.MAX_MEMORY = 100;
Ant.VISION = 6;
Ant.SMELL_LEAVE_RATE = 0.05;
exports.Ant = Ant;
//# sourceMappingURL=Ant.js.map