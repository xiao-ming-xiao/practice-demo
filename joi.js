const Joi = require('joi');
//引入joi模块
//定义对象的验证规则
const schema = {
    username: Joi.string().min(3).max(20).required().error(new Error('username没有通过验证')),
    passward:
};


async function run() {
    try {
        await Joi.validate({ username: '333asd1' }, schema);
    } catch (ex) {
        console.log(ex);
        return;
    }
    console.log('pass');
}

run();