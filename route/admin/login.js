// 此admin文件夹存放各类路由和功能代码
const { Manage } = require('../../models/manage'); //在下方功能代码中使用到了数据集合，因此需要导入数据集合
const bcrypt = require('bcrypt'); //导入明文加密
// 将登录功能代码导出
module.exports = async(req, res) => {
    // 获取请求参数
    const { username, passward } = req.body;
    console.log(req.body);

    // 判断信息是否输入
    if (username.trim().length == 0 || passward.trim().length == 0) {
        return res.status(400).render('admin/404', { msg: '用户名或密码输入错误' });
    }
    // 查询用户信息
    let manage = await Manage.findOne({ username });

    if (manage) {
        // 查询到用户
        // 将客户端传递过来的信息进行比对
        let isValid = await bcrypt.compare(passward, manage.passward);
        if (isValid) {
            // 将用户名存储在请求对象中
            req.session.username = manage.username;
            // 将信息开放到locals对象下
            req.app.locals.userInfo = manage;
            // 登录成功redirect重定向页面
            res.redirect('/admin/manage');
        } else {
            res.status(400).render('admin/404', { msg: '用户名或密码输入错误' });
        }
    } else { //没有查询到用户
        res.status(400).render('admin/404', { msg: '用户名或密码输入错误' });
    }
}