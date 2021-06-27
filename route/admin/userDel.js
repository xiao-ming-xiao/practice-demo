const { User } = require('../../models/user');
module.exports = async(req, res) => {
    await User.deleteOne({ "user_id": req.body.user_id },
        function(err, result) {
            if (err) {
                console.log(err.message);
            } else {
                console.log('删除成功');
                // res.status(200).send('删除成功');
                res.status(200).send('删除成功');
            }
        }
    );
}