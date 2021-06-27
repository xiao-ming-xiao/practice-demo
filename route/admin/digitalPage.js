const { Goods } = require('../../models/goods');
module.exports = async(req, res) => {
    console.log('digitalPage');
    let digitals = await Goods.find({ "category": "digital" });
    let amount = digitals.length;
    // console.log(amount);
    res.render('admin/category_digital', {
        digitals: digitals,
        amount: amount
    });
}