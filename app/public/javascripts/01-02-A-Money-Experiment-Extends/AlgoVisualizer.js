"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgoFrame_1 = require("./AlgoFrame");
var AlgoVisualizer = (function () {
    function AlgoVisualizer(sceneWidth, sceneHeight) {
        this.DELAY = 10;
        this.money = [];
        for (var i = 0; i < 100; i++) {
            this.money[i] = 100;
        }
        this.frame = new AlgoFrame_1.AlgoFrame(sceneWidth, sceneHeight);
        this.run();
    }
    AlgoVisualizer.prototype.run = function () {
        var _this = this;
        setInterval(function () {
            _this.frame.render(_this.money);
            for (var i = 0; i < _this.money.length; i++) {
                var j = Math.floor(Math.random() * _this.money.length);
                _this.money[i] -= 1;
                _this.money[j] += 1;
            }
        }, this.DELAY);
    };
    return AlgoVisualizer;
}());
exports.AlgoVisualizer = AlgoVisualizer;
//# sourceMappingURL=AlgoVisualizer.js.map