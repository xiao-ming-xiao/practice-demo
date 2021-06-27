var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const { _isIsoDate } = require('joi/lib/types/date');
var manageSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
            // minlength:
    },
    passward: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    regisTime: {
        type: Date,
    }

})
var Manage = mongoose.model('Manage', manageSchema);

async function creatManage() {
    // 对密码进行加密
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456', salt);
    const manage = await Manage.create({
        username: 'adminnn',
        passward: pass,
        tel: '18111429394',
        email: 'xiaoxiao@163.com',
        regisTime: new Date()
    });
    // }).then(() => {
    //     console.log('管理员创建成功');
    // }).catch(() => {
    //     console.log('管理员创建失败');
    // })
}
// creatManage();
// 声明一个验证用户信息的方法
const validateManage = manage => {

        const schema = {
            username: Joi.string().min(3).max(20).required().error(new Error('用户名验证未通过')),
            passward: Joi.string().regex(/^[A-Za-z0-9]{6,16}$/).required().error(new Error('密码验证未通过')),
            tel: Joi.string().regex(/^1[34578]\d{9}$/).required().error(new Error('手机号验证未通过')),
            email: Joi.string().email().required().error(new Error('邮箱验证错误'))
        }
        return Joi.validate(manage, schema);
    }
    // 导出
module.exports = { Manage, validateManage }