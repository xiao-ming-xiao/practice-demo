const { User, validateUser } = require('../../models/user');
const bcrypt = require('bcrypt'); //导入明文加密
module.exports = async(req, res) => {
    try {
        await validateUser(req.body); //验证格式
    } catch (e) {
        // 验证未通过，重定向会用户注册页面
        console.log("Joi false");
        // 重定向的同时做res.end操作，因此重定向要return
        return res.redirect('/home/register?message=${e.message}');
    }
    // 根据邮箱地址查询管理员是否已存在(所有的数据库操作都是异步操作)
    let user = await User.findOne({ user_number: req.body.user_number });
    // console.log(manage);
    if (user) { //存在此管理员，重定向会管理员注册页面
        console.log("createuserhave");

        res.send("此用户学号已存在");
        // return res.redirect('/home/register?message=此用户学号已存在');
    }
    // console.log(req.body);
    // 对密码进行加密
    const salt = await bcrypt.genSalt(10);
    const user_passward = await bcrypt.hash(req.body.user_passward, salt);
    req.body.user_passward = user_passward;
    // 创建
    await User.create({
        user_id: Math.floor(Math.random() * 500),
        user_name: req.body.user_name,
        user_passward: req.body.user_passward,
        user_number: req.body.user_number,
        user_registime: new Date()
    });
    console.log('reeate new user successful!');
    // 重定向至index
    res.redirect('/home/login');
    // console.log(req.body);
};