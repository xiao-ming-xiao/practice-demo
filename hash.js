const bcrypt = require('bcrypt');
async function run() {
    const salt = await bcrypt.genSalt(10);
    // 对密码进行加密

    console.log(salt);
}

run();