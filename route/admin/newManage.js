const { Err } = require('joi/lib/errors');
const { Manage, validateManage } = require('../../models/manage'); //引入用户集合构造函数
const bcrypt = require('bcrypt');
// 使用joi进行验证
module.exports = async(req, res) => {
    console.log("createmanage");


    try {
        await validateManage(req.body); //验证信息
    } catch (err) {
        // 验证未通过，重定向会创建管理员页面
        console.log("createmanagefalse");
        // 重定向的同时做res.end操作，因此重定向要return
        return res.redirect('/admin/newManage?message=${err.message}');
    }
    // 根据邮箱地址查询管理员是否已存在(所有的数据库操作都是异步操作)
    let manage = await Manage.findOne({ email: req.body.email });
    // console.log(manage);
    if (manage) { //存在此管理员，重定向会管理员注册页面
        console.log("createmanagehave");

        res.send(req.body);
        return res.redirect('/admin/newManage?message=邮箱地址已存在');
    }
    // console.log(req.body);
    // 对密码进行加密
    const salt = await bcrypt.genSalt(10);
    const passward = await bcrypt.hash(req.body.passward, salt);
    req.body.passward = passward;
    // 创建
    await Manage.create({
        username: req.body.username,
        passward: req.body.passward,
        tel: req.body.tel,
        email: req.body.email,
        regisTime: new Date()
    });
    console.log('reeate new manage successful!');
    // 重定向至manage
    res.redirect('/admin/manage');
    // console.log(req.body);
}