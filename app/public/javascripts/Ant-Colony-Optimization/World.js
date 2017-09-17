"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = require("./Map");
var Ant_1 = require("./Ant");
var World = (function () {
    function World(x, y, ant_counts, food_counts) {
        this.map = new Map_1.Map(x, y, food_counts);
        for (var i = 0; i < ant_counts; i++) {
            this.ant = new Ant_1.Ant(this.map);
        }
    }
    World.prototype.run = function () {
    };
    return World;
}());
exports.World = World;
//# sourceMappingURL=World.js.map