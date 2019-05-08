var defaults = {
        selector: "#lottery",
        width: 3,
        height: 3,
        initSpeed: 350,
        speed: 0,
        upStep: 80,
        upMax: 100,
        downStep: 40,
        downMax: 100,
        waiting: 1200,
        index: 8,
        target: 7,
        isRunning: !1
    },
    lottery = {
        lottery: function (t) {
            this.options = $.extend(!0, defaults, t), 
            this.options.speed = this.options.initSpeed, 
            this.container = $(this.options.selector), 
            this._setup()
        },
        _setup: function () {
            for (var t = 0; t < this.options.width; ++t) this.container.find(".lottery-group:first .lottery-unit:eq(" + t + ")").attr("lottery-unit-index", t);
            t = lottery._count() - this.options.height + 1;
            for (var i = 0, o = this.options.width + this.options.height - 2; o <= t; --t, ++i) this.container.find(".lottery-group:last .lottery-unit:eq(" + i + ")").attr("lottery-unit-index", t);
            for (t = 1, o = this.options.height - 2; t <= o; ++t) this.container.find(".lottery-group:eq(" + t + ") .lottery-unit:first").attr("lottery-unit-index", lottery._count() - t), this.container.find(".lottery-group:eq(" + t + ") .lottery-unit:last").attr("lottery-unit-index", this.options.width + t - 1);
            this._enable()
        },
        _enable: function () {
            this.container.find("a").bind("click", this.beforeRoll)
        },
        _disable: function () {
            this.container.find("a").unbind("click", this.beforeRoll)
        },
        _stop: function () {
            var t = this;
            clearTimeout(t.downTimer), clearTimeout(t.rollerTimer), t.options.speed = t.options.initSpeed, t.options.isRunning = !1, t._enable(), $.magnificPopup.open({
                items: {
                    src: "#youGetit"
                },
                midClick: !0,
                fixedContentPos: "true",
                mainClass: "my-mfp-zoom-in",
                type: "inline"
            }, 0)
        },
        beforeRoll: function () {
            var t = lottery;
            t._disable(), t.options.beforeRoll && t.options.beforeRoll.call(t), t._roll()
        },
        _roll: function () {
            var t = this;
            t.container.find("[lottery-unit-index=" + t._index() + "]").removeClass("active"),
            ++t.options.index, 
            t.container.find("[lottery-unit-index=" + t._index() + "].lottery-unit").addClass("active"),
            t.rollerTimer = setTimeout(function () {
                t._roll()
            }, t.options.speed)
        },
        _index: function () {
            return this.options.index % this._count()
        },
        _count: function () {
            return this.options.width * this.options.height - 1
        },
        aim: function () {
            this.options.aim ? this.options.aim.call(this) : (this.options.target = parseInt(parseInt(10 * Math.random()) * this._count() / 10), console.log(this.options.target))
        }
    };