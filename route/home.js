// 展示页面路由
const express = require('express');
const { User, validateUser } = require('../models/user');
const bcrypt = require('bcrypt'); //导入明文加密
const home = express.Router();

home.get('/index', require('./home/indexPage'));
home.post('/contact', require('./home/contact'));
home.get('/login', require('./home/loginPage'));
home.post('/login', require('./home/login'));
home.get('/register', require('./home/registerPage'));
home.post('/register', require('./home/register'));
home.get('/release', require('./home/releasePage'));
home.post('/release', require('./home/release'));
home.get('/help', require('./home/helpPage'));
home.get('/personal', require('./home/personPage'));
home.post('/personDel', require('./home/personDel'));
module.exports = home;