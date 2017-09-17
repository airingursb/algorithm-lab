'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index');
});
router.get('/1-1', function (req, res, next) {
    res.render('canvas_01_01');
});
router.get('/1-2', function (req, res, next) {
    res.render('canvas_01_02');
});
exports.default = router;
//# sourceMappingURL=index.js.map