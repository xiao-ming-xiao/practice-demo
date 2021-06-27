const { Goods } = require('../../models/goods');
const { User } = require('../../models/user');
module.exports = async(req, res) => {
    console.log('person page');
    // console.log(userInfo);
    var username = req.query.username;
    let goods = await Goods.find({ seller: username });
    res.render('home/personal', {
        goods: goods
    });
};