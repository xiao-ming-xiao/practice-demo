const { Goods } = require('../../models/goods');
module.exports = async(req, res) => {
    console.log('makeupPage');
    let makeups = await Goods.find({ "category": "makeup" });
    let amount = makeups.length;
    // console.log(amount);
    res.render('admin/category_makeup', {
        makeups: makeups,
        amount: amount
    });
}