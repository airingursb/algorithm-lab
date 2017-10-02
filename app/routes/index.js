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
router.get('/3-6', function (req, res, next) {
    res.render('canvas_03_06');
});
router.get('/3-7', function (req, res, next) {
    res.render('canvas_03_07');
});
router.get('/3-8', function (req, res, next) {
    res.render('canvas_03_08');
});
router.get('/3-9', function (req, res, next) {
    res.render('canvas_03_09');
});
router.get('/3-10', function (req, res, next) {
    res.render('canvas_03_10');
});
router.get('/3-11', function (req, res, next) {
    res.render('canvas_03_11');
});
router.get('/3-12', function (req, res, next) {
    res.render('canvas_03_12');
});
exports.default = router;
//# sourceMappingURL=index.js.map