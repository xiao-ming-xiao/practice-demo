"use strict";
! function(n) {
    var i = function(i, e) {
        function c() { r.config.current < d - 2 && (r.config.current++, o.stop(!0, !1).animate({ left: -r.config.w * r.config.current - r.config.w }, r.config.speed, function() { v(r.config.current), r.config.current === d - 2 && (o.css("left", -r.config.w), r.config.current = 0, v(r.config.current)) })) }

        function t() { clearInterval(w), w = setInterval(c, r.config.intervalTime) }
        var r = this;
        this.el = i, this.userConfig = e, this.config = { w: this.el.width(), current: 0, speed: 500, intervalTime: 5e3 }, null != e && n.extend(this.config, this.userConfig);
        var f = this.el.children(".slider-img"),
            o = f.children("ul"),
            l = o.children("li");
        this.el.append('<a href="javascript:" class="slider-btn slider-btn-left">&lt;</a>'), this.el.append('<a href="javascript:" class="slider-btn slider-btn-right">&gt;</a>');
        var s = this.el.children(".slider-btn-left"),
            g = this.el.children(".slider-btn-right");
        this.el.append('<div class="slider-dot"><ul></ul></div>');
        for (var a = this.el.children(".slider-dot"), u = a.children("ul"), d = l.length, h = 0; h < d - 2; h++) h === this.config.current ? u.append('<li class="active"></li>') : u.append("<li></li>");
        var p = u.children("li");
        o.css("left", -this.config.w * this.config.current - this.config.w);
        var v = function(n) { p.removeClass("active"), p.eq(n).addClass("active") };
        g.on("click", function(n) { n.preventDefault(), r.config.current < d - 2 && (t(), r.config.current++, r.config.current != d - 2 && o.stop(!0, !1).animate({ left: -r.config.w * r.config.current - r.config.w }, r.config.speed, function() { v(r.config.current) }), r.config.current === d - 2 && o.stop(!0, !1).animate({ left: -r.config.w * r.config.current - r.config.w }, r.config.speed, function() { o.css("left", -r.config.w), r.config.current = 0, v(r.config.current) })) }), s.on("click", function(n) { n.preventDefault(), r.config.current > -1 && (t(), r.config.current--, r.config.current != -1 && o.stop(!0, !1).animate({ left: -r.config.w * r.config.current - r.config.w }, r.config.speed, function() { v(r.config.current) }), r.config.current === -1 && o.stop(!0, !1).animate({ left: 0 }, r.config.speed, function() { o.css("left", -r.config.w * (d - 2)), r.config.current = d - 3, v(r.config.current) })) }), p.on("click", function(i) {
            i.preventDefault(), t();
            var e = n(this).index();
            v(e), o.stop(!0, !1).animate({ left: -r.config.w * e - r.config.w }, r.config.speed, function() { r.config.current = e })
        });
        var w = setInterval(c, r.config.intervalTime)
    };
    n.fn.extend({ xSlider: function() { new i(n(this)) } })
}(jQuery);
var config = { current: 0, speed: 500, intervalTime: 2e3 };
$(".slider").xSlider(config);