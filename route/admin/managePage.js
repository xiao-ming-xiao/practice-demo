// manage页面渲染
module.exports = (req, res) => {
    console.log('managePage');
    res.setHeader('Content-type', 'text/html;charset=utf-8');
    // render
    res.render('admin/manage');
}