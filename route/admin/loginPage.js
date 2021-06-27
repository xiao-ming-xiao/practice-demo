// 路由页面渲染功能代码
module.exports = (req, res) => {
    console.log('loginPage');
    res.setHeader('Content-type', 'text/html;charset=utf-8');
    res.render('admin/login')
}