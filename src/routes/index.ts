'use strict';

import * as express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/1-1', (req, res, next) => {
    res.render('canvas_01_01');
});

router.get('/1-2', (req, res, next) => {
    res.render('canvas_01_02');
});

router.get('/2-1', (req, res, next) => {
    res.render('canvas_02_01');
});

router.get('/3-1', (req, res, next) => {
    res.render('canvas_03_01');
});

router.get('/3-2', (req, res, next) => {
    res.render('canvas_03_02');
});

router.get('/3-3', (req, res, next) => {
    res.render('canvas_03_03');
});

router.get('/3-4', (req, res, next) => {
    res.render('canvas_03_04');
});

router.get('/3-5', (req, res, next) => {
    res.render('canvas_03_05');
});

router.get('/3-6', (req, res, next) => {
    res.render('canvas_03_06');
});

router.get('/3-7', (req, res, next) => {
    res.render('canvas_03_07');
});

router.get('/3-8', (req, res, next) => {
    res.render('canvas_03_08');
});

router.get('/3-9', (req, res, next) => {
    res.render('canvas_03_09');
});

router.get('/3-10', (req, res, next) => {
    res.render('canvas_03_10');
});

router.get('/3-11', (req, res, next) => {
    res.render('canvas_03_11');
});

router.get('/3-12', (req, res, next) => {
    res.render('canvas_03_12');
});

export default router;