var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DataManage', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('数据库连接成功'); })
    .catch((err) => { console.log(err); })