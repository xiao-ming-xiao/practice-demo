//创建管理员表单验证
window.onload = function(e) {
    var form = document.querySelector('form');
    var passWord = document.querySelector('#passWord');
    var rePassWord = document.querySelector('#rePassWord');
    // var name = document.querySelector('#name');
    var username = document.querySelector('#username');
    var tel = document.querySelector('#tel');
    var email = document.querySelector('#email');
    var span = document.querySelectorAll('.right-off span');

    //onsubmit事件
    form.onsubmit = function(e) {

        var password = checkPassWord();
        if (!password) {
            return false;
        }
        var rePassWord = checkRePassWord();
        if (!rePassWord) {
            return false;
        }
        // var name = checkName();
        // if (!name) {
        //     return false;
        // }
        var username = checkusername();
        if (!username) {
            return false;
        }
        var tel = checkTel();
        if (!tel) {
            return false;
        }
        var email = checkEmail();
        if (!email) {
            return false;
        }
        return true;
    };



    //onblur失去焦点事件

    passWord.onblur = function(e) {
        checkPassWord();
    };
    rePassWord.onblur = function(e) {
        checkRePassWord();
    };
    // name.onblur = function(e) {
    //     checkName();
    // };
    username.onblur = function(e) {
        checkusername();
    };
    tel.onblur = function(e) {
        checkTel();
    };
    email.onblur = function(e) {
        checkEmail();
    };



    //---------------------------------函数封装-------------------------------------------------------------


    //昵称（6-20位所有字符）
    function checkusername(e) {
        if (username.value.length == 0) {
            span[0].innerText = '昵称不能为空';
            span[0].className = 'inputDanger';
            return false;
        }
        var pattern = /^.{3,20}$/;
        if (!pattern.test(username.value)) {
            span[0].innerText = '昵称格式错误，请重新输入';
            span[0].className = 'inputDanger';
            return false;
        }
        span[0].innerText = '昵称输入正确';
        span[0].className = 'inputSuccess';
        return true;
    }



    //登录密码
    function checkPassWord(e) {
        if (passWord.value.length == 0) {
            span[1].innerText = '密码不能为空';
            span[1].className = 'inputDanger';
            return false;
        }
        var pattern = /^[A-Za-z0-9]{6,16}$/;
        if (!pattern.test(passWord.value)) {
            span[1].innerText = '密码不符合格式，请重新输入';
            span[1].className = 'inputDanger';
            return false;
        }
        span[1].innerText = '密码输入正确';
        span[1].className = 'inputSuccess';
        return true;
    }


    //重复登录密码
    function checkRePassWord(e) {
        if (rePassWord.value.length == 0) {
            span[2].innerText = '重复密码不能为空';
            span[2].className = 'inputDanger';
            return false;
        }
        if (rePassWord.value != passWord.value) {
            span[2].innerText = '两次输入的密码不一致，请重新输入';
            span[2].className = 'inputDanger';
            return false;
        }
        span[2].innerText = '两次密码一致';
        span[2].className = 'inputSuccess';
        return true;
    }


    //真实姓名（2-4位汉字）
    // function checkName(e) {
    //     if (name.value.length == 0) {
    //         span[3].innerText = '真实姓名不能为空';
    //         span[3].className = 'inputDanger';
    //         return false;
    //     }
    //     var pattern = /^[\u4e00-\u9fa5]{2,4}$/;
    //     if (!pattern.test(name.value)) {
    //         span[3].innerText = '真实姓名格式错误，请重新输入';
    //         span[3].className = 'inputDanger';
    //         return false;
    //     }
    //     span[3].innerText = '真实姓名输入正确';
    //     span[3].className = 'inputSuccess';
    //     return true;
    // }




    //手机号（）
    function checkTel(e) {
        if (tel.value.length == 0) {
            span[3].innerText = '手机号不能为空';
            span[3].className = 'inputDanger';
            return false;
        }
        var pattern = /^1[34578]\d{9}$/;
        if (!pattern.test(tel.value)) {
            span[3].innerText = '手机号码格式错误，请重新输入';
            span[3].className = 'inputDanger';
            return false;
        }
        span[3].innerText = '手机号输入正确';
        span[3].className = 'inputSuccess';
        return true;
    }

    //邮箱
    function checkEmail(e) {
        if (email.value.length == 0) {
            span[4].innerText = '邮箱不能为空';
            span[4].className = 'inputDanger';
            return false;
        }
        var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!pattern.test(email.value)) {
            span[4].innerText = '邮箱格式错误，请重新输入';
            span[4].className = 'inputDanger';
            return false;
        }
        span[4].innerText = '邮箱输入正确';
        span[4].className = 'inputSuccess';
        return true;
    }
}