const { Goods } = require('../../models/goods');
module.exports = async(req, res) => {

    let cloths = await Goods.find({ "category": "cloth" });
    let dailyuses = await Goods.find({ "category": "dailyuse" });
    let makeups = await Goods.find({ "category": "makeup" });
    let digitals = await Goods.find({ "category": "digital" });
    res.render('home/index', {
        makeups: makeups,
        cloths: cloths,
        dailyuses: dailyuses,
        digitals: digitals

    });
    console.log('this is index page');
    // console.log(makeups);
}