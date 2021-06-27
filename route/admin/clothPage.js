const { Goods } = require('../../models/goods');
module.exports = async(req, res) => {
    console.log('clothPage');
    let cloths = await Goods.find({ "category": "cloth" });
    let amount = cloths.length;
    // console.log(amount);
    res.render('admin/category_cloth', {
        cloths: cloths,
        amount: amount
    });
}