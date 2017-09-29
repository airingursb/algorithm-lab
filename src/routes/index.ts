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



export default router;