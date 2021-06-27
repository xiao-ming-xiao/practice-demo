window.addEventListener('load', function() {
    var arrow_l = document.querySelector('.arrow_l');
    var arrow_r = document.querySelector('.arrow_r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            arrow_r.click();
        }, 2000);
    });
    var ul = focus.querySelector('ul');
    console.log(ul.children.length);
    console.log(ul);
    var ol = focus.querySelector('.circle');
    // 动态生成小圆圈
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i);
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].style.backgroundColor = '';
            }
            this.style.backgroundColor = 'rgb(255, 80, 0)';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            console.log(focusWidth);
            animate(ul, -index * focusWidth);
        })
    };
    var num = 0;
    var circle = 0;
    var flag = true;
    // 右侧按钮
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    arrow_r.addEventListener('click', function() {
            if (flag) {
                flag = false
                if (num == ul.children.length - 1) {
                    num = 0;
                    ul.style.left = 0;
                }
                num++;
                animate(ul, -num * focusWidth, function() {
                    flag = true;
                });
                circle++;
                if (circle == ol.children.length) {
                    circle = 0;
                }
                circleChange();
            }



        })
        // 左侧按钮
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';

            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }

            circleChange();
        }

    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].style.backgroundColor = '';
        }
        ol.children[circle].style.backgroundColor = '#fff';
    }
    var timer = setInterval(function() {
        arrow_r.click();
    }, 1000);
})