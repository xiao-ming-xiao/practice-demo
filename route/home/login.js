const { User } = require('../../models/user');
const bcrypt = require('bcrypt'); //导入明文加密

module.exports = async(req, res) => {

    const { user_name, user_passward, user_number } = req.body;

    // 判断信息是否输入
    if (user_name.trim().length == 0 || user_passward.trim().length == 0 || user_number.trim().length == 0) {
        // return res.status(400).render('admin/404', { msg: '用户名或密码输入错误' });
        res.status(400).send('用户名或密码输入错误');
    }
    // 查询用户信息
    let user = await User.findOne({ user_name });
    if (user) {
        // 查询到用户
        // 将客户端传递过来的信息进行比对
        let isValid = await bcrypt.compare(user_passward, user.user_passward);
        let isValid_n = await bcrypt.compare(user_number, user.user_number);
        if (isValid || isValid_n) {
            // 将用户名存储在请求对象中
            req.session.user_name = user._id;
            // 将信息开放到locals对象下
            req.app.locals.userInfo = user;
            // 登录成功redirect重定向页面
            res.redirect('/home/index');
        } else {
            // res.status(400).render('admin/404', { msg: '用户名或密码输入错误' });
            res.status(400).send('用户密码或学号错误');
        }
    } else { //没有查询到用户
        // res.status(400).render('admin/404', { msg: '用户名或密码输入错误' });
        res.status(400).send('当前用户未注册');
    }
    // res.send(req.body);
};