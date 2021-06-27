const { Goods } = require('../../models/goods');
module.exports = async(req, res) => {
    await Goods.deleteOne({ 'id': req.body.id }, {
        function(err, result) {
            if (err) {
                console.log(err.message);
            } else {
                res.status(200).send('删除成功');
            }
        }
    });
}