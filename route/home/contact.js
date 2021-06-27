const { Goods } = require('../../models/goods');
// const ObjectID = require('mongodb'.ObjectID);
module.exports = async(req, res) => {
    console.log(req.body.id);
    if (!req.session.user_name) {
        res.redirect('/home/login');
    } else {
        let goods = await Goods.findOne({
            id: req.body.id
        });
        let result = {
                contact: goods.contact,
                contactNumber: goods.contactNumber
            }
            // console.log(result);
        res.send(result);
    }

};