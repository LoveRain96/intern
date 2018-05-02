const express         = require('express');
const path            = require('path');
//const favicon         = require('serve-favicon');
const logger          = require('morgan');
const cookieParser    = require('cookie-parser');
const bodyParser      = require('body-parser');
const nunjucks        = require('nunjucks');
const router          = require('../router/router');
const cors            = require('cors');

module.exports =function (app) {

    nunjucks.configure('views', {
        autoescape: true,
        express: app
    });

    app.use(express.static(path.join('public')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(cors());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/', router);

};
