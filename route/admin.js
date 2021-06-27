// 管理页面路由

var express = require('express');
const { Manage } = require('../models/manage');
const { User } = require('../models/user');
var admin = express.Router();
const bcrypt = require('bcrypt');
const session = require('express-session');
const { Session } = require('express-session');
// 页面渲染路由
admin.get('/login', require('./admin/loginPage')); //将所有的功能代码，页面渲染代码放入admin文件夹，通过require导入
// 管理员登录
admin.post('/login', require('./admin/login'));
admin.get('/manage', require('./admin/managePage'));
admin.get('/userinfo', require('./admin/userinfoPage'));
admin.post('/userinfo', async(req, res) => {
    let user = await User.findOne({ user_id: req.body.user_id });
    res.send(user);
    console.log(user);
});
admin.post('/userchange', require('./admin/userChange'));
admin.post('/userdel', require('./admin/userDel'));
admin.get('/message', require('./admin/messagePage'));
// 创建管理员页面路由
admin.get('/newManage', require('./admin/newPage'));
admin.post('/newManage', require('./admin/newManage'));
admin.get('/cloth', require('./admin/clothPage'));
admin.get('/dailyuse', require('./admin/dailyusePage'));
admin.get('/digital', require('./admin/digitalPage'));
admin.get('/makeup', require('./admin/makeupPage'));
admin.post('/goodsDel', require('./admin/goodsDel'));
admin.get('/logout', (req, res) => {
    req.session.username = null;
    req.app.locals.userInfo = null;
    res.redirect('/admin/login');
})

module.exports = admin;