//middleware文件夹存放app.js里的中间件函数
//登录拦截，判断用户登录状态
const guard = (req, res, next) => {
    if (req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        next();
    }
}
module.exports = guard;