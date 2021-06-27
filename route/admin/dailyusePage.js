const { Goods } = require('../../models/goods');
module.exports = async(req, res) => {
    console.log('dailyusePage');
    let dailyuses = await Goods.find({ "category": "dailyuse" });
    let amount = dailyuses.length;
    // console.log(amount);
    res.render('admin/category_dailyuse', {
        dailyuses: dailyuses,
        amount: amount
    });
}