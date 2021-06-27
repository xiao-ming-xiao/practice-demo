const userguard = (req, res, next) => {
    if (req.url == '/release' || req.url == '/personal') {
        if (!req.session.user_name) {
            res.redirect('/home/login');
        } else {
            next();
        }
    } else {
        next();
    }

};
module.exports = userguard;