var mongoose = require('mongoose');
const Joi = require('joi'); //验证
const bcrypt = require('bcrypt'); //加密
var userSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    user_name: {
        type: String,
        required: true,
        unique: true
            // minlength:
    },
    user_passward: {
        type: String,
        required: true
    },
    user_number: {
        type: String,
        required: true,
        unique: true
    },
    user_registime: {
        type: Date
    }
})
var User = mongoose.model('User', userSchema);

async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456', salt);
    const user = await User.create({
        user_id: Math.floor(Math.random() * 500),
        user_name: 'xiaoxiao',
        user_passward: pass,
        user_number: '17101010623',
        user_registime: new Date()
    });
}
// createUser();
// 用户信息验证
const validateUser = user => {
    console.log("validateUser");
    const schema = {
        user_name: Joi.string().regex(/^[a-z0-9_-]{4,16}$/).required().error(new Error('用户名验证未通过')),
        user_passward: Joi.string().regex(/^[a-z0-9_-]{6,18}$/).required().error(new Error('密码验证未通过')),
        user_number: Joi.string().regex(/^(1+[\d]{10})$/).required().error(new Error('学号验证未通过'))

    }
    return Joi.validate(user, schema);
}

// User.create({
//     username: 'admin',
//     passward: 123456
// }).then(() => {
//     console.log('管理员创建成功');
// }).catch(() => {
//     console.log('管理员创建失败');
// })
module.exports = { User, validateUser }