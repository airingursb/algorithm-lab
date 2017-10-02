"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map = (function () {
    function Map(x, y, food_counts) {
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
        for (var i = 0; i < x; i++) {
            this.data[i] = [];
            for (var j = 0; j < y; j++) {
                this.data[i][j] = Map.LAWN;
            }
        }
        this.data[0][0] = Map.HOME;
        this.data[x - 1][y - 1] = Map.FOOD;
        for (var i = 0; i < Map.OBSTACLE_COUNT; i++) {
            var x1 = Math.floor(Math.random() * x);
            var y1 = Math.floor(Math.random() * y);
            if (this.is_home(x1, y1) || this.is_food(x1, y1)) {
                continue;
            }
            this.data[x1][y1] = Map.OBSTACLE;
        }
        this.smells = [];
        for (var i = 0; i < x; i++) {
            this.smells[i] = [];
            for (var j = 0; j < y; j++) {
                if (this.data[i][j] == Map.LAWN) {
                    this.smells[i][j] = { HOME_SMELL: 0, FOOD_SMELL: 0 };
                }
            }
        }
    }
    Map.prototype.landform = function () {
        return this.data;
    };
    Map.prototype.is_home = function (x, y) {
        return this.data[x][y] == Map.HOME;
    };
    Map.prototype.is_food = function (x, y) {
        return this.data[x][y] == Map.FOOD;
    };
    Map.prototype.get_home_coor = function () {
        return this.home_coor;
    };
    Map.prototype.get_food_coor = function () {
        return this.food_coor;
    };
    Map.prototype.add_ant = function (ant) {
        this.ants.push(ant);
    };
    return Map;
}());
Map.LAWN = 0;
Map.OBSTACLE = 1;
Map.HOME = 2;
Map.FOOD = 3;
Map.ANT = 4;
Map.SMELL_GONE_SPEED = 50;
Map.SMELL_GONE_RATE = 0.05;
Map.OBSTACLE_COUNT = 30;
exports.Map = Map;
//# sourceMappingURL=Map.js.map