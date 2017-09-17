"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ant = (function () {
    function Ant(map) {
        this.map = map;
        this.map.add_ant(this);
    }
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