const { User, validateUser } = require('../../models/user');
const bcrypt = require('bcrypt'); //导入明文加密
module.exports = async(req, res) => {
    // let user = await User.findOne({ user_id: req.body.user_id });
    // const { user_name, user_passward, user_number } = req.body;
    console.log(req.body);
    let user = {
        user_name: req.body.user_name,
        user_passward: req.body.user_passward,
        user_number: req.body.user_number
    };
    try {
        await validateUser(user); //验证格式
        console.log('Joi true');
    } catch (e) {
        // 验证未通过，重定向会用户注册页面
        console.log(e.message);
        // 重定向的同时做res.end操作，因此重定向要return
        return res.status(400).send('格式验证未通过');
    }
    // 对密码进行加密
    const salt = await bcrypt.genSalt(10);
    const user_passward = await bcrypt.hash(req.body.user_passward, salt);
    req.body.user_passward = user_passward;
    await User.updateOne({ "user_id": req.body.user_id },

        {
            $set: { "user_name": user.user_name, "user_passward": user.user_passward, "user_number": user.user_number }
        },
        function(err, result) {
            if (err) {
                console.log(err.message);
                res.status(400).send('数据库更新数据失败失败');
            } else {
                console.log('更新成功');
                res.status(200).send('修改成功');
            }
        });


    // console.log(req.body);
};