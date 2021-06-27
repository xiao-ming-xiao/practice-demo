const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session');
// const nunjucks = require('nunjucks');
const app = express();
// 连接数据库
require('./models/connect');
// 使用manage创建管理员
require('./models/manage');
require('./models/user');
app.use(bodyParser.urlencoded({ extended: false }));
// 配置Session
// app.use(session({ secret: 'secret key' }));
app.use(session({
    resave: false, //添加 resave 选项
    saveUninitialized: true, //添加 saveUninitialized 选项
    secret: 'aF,.j)wBhq+E9n#aHHZ91Ba!VaoMfC', // 建议使用 128 个字符的随机字符串
    // cookie: { maxAge: 60 * 1000 }
}));
//模板位置
app.set('views', path.join(__dirname, 'views'));
// 默认后缀art
app.set('view engine', 'art');
// 渲染后缀为art的模板时所使用的模板引擎
app.engine('art', require('express-art-template'));
// 开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));
// 引入路由
const home = require('./route/home');
const admin = require('./route/admin');
// 拦截请求，判断用户登录状态，进入后台管理页面必须登录
app.use('/admin', require('./middleware/loginGuard'));
app.use('/home', require('./middleware/userGuard'));
// app.use('/home/release', require())
// 拦截路由，匹配路径
app.use('/home', home);
app.use('/admin', admin);

// 监听端口
app.listen(80);
console.log('服务器启动成功');