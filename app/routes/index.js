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
router.get('/2-1', function (req, res, next) {
    res.render('canvas_02_01');
});
router.get('/3-1', function (req, res, next) {
    res.render('canvas_03_01');
});
router.get('/3-2', function (req, res, next) {
    res.render('canvas_03_02');
});
router.get('/3-3', function (req, res, next) {
    res.render('canvas_03_03');
});
router.get('/3-4', function (req, res, next) {
    res.render('canvas_03_04');
});
router.get('/3-5', function (req, res, next) {
    res.render('canvas_03_05');
});
exports.default = router;
//# sourceMappingURL=index.js.map