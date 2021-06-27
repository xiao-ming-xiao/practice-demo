const { User } = require('../../models/user');
module.exports = async(req, res) => {
    console.log('userinfoPage');
    // 将用户集合查询出来
    let users = await User.find({});
    // res.send(users);
    res.render('admin/userinfo', {
        users: users
    });
}