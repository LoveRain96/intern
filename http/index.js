const express         = require('express');
const session         = require('express-session');
const MySQLStore      = require('express-mysql-session')(session);
const path            = require('path');
//const favicon         = require('serve-favicon');
const logger          = require('morgan');
const cookieParser    = require('cookie-parser');
const bodyParser      = require('body-parser');
const nunjucks        = require('nunjucks');
const cors            = require('cors');

module.exports =function (app) {

    nunjucks.configure('views', {
        autoescape: true,
        express: app
    });

    let options = {
        host: 'localhost',
        user: 'root',
        password: 'anhtien1996',
        database: 'QLTT'
    };

    let sessionStore = new MySQLStore(options);
    app.use(session({
        key : 'session_key',
        secret : 'bibi',
        store  : sessionStore,
        resave : false,
        saveUninitialized : false
    }));
    app.use(express.static(path.join('public')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(cors());
    app.use(express.static(path.join(__dirname, 'public')));
};
