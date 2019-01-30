(function() {
    window._App = {},
    $(function() {
        window._App = new App,
        window._App.init()
    }),
    this.App = function() {
        function t() {
            this._canvas = null,
            this._stage = null,
            this._stats = null,
            this._gui = null,
            this._guiProp = null,
            this._global = null,
            this._util = null,
            this._scene = null,
            this._router = null,
            this._container = null,
            this._Loader = null,
            this._Threejs = null,
            this._Header = null,
            this._GlobalNavi = null,
            this._Bg = null,
            this._ContentsBg = null,
            this._Top = null,
            this._About = null,
            this._Mission1 = null,
            this._Mission2 = null,
            this._Profile1 = null,
            this._Profile2 = null,
            this._Profile3 = null,
            this._Contact = null
        }
        return t.prototype.init = function() {
            var t;
            t = this,
            this._global = new Global,
            this._util = new Util,
            this._global._debugMode && (this._stats = new Stats,
            this._stats.setMode(0),
            this._stats.domElement.style.position = "fixed",
            this._stats.domElement.style.left = "0px",
            this._stats.domElement.style.top = "0px",
            document.body.appendChild(this._stats.domElement)),
            this._canvas = document.getElementById("App"),
            this._stage = new createjs.Stage(this._canvas),
            this._stage.enableMouseOver(),
            createjs.Touch.enable(this._stage),
            createjs.Ticker.setFPS(60),
            createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED,
            createjs.Ticker.addEventListener("tick", function() {
                t._stage.update(),
                t._global._debugMode && t._stats.update()
            }),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc(),
            this._container = new createjs.Container,
            this._stage.addChild(this._container),
            this._util.getDirName(location.href).split("/").pop(),
            this._util.getBaseName(location.href),
            void 0 !== window._DirRoot && (this._global._dirRoot = window._DirRoot),
            window._App._util.useWebGL() && console.log("webgl"),
            this._Loader = new Loader,
            this._Threejs = new ThreeJs,
            this._Header = new Header,
            this._GlobalNavi = new GlobalNavi,
            this._Bg = new Bg,
            this._ContentsBg = new ContentsBg,
            this._Top = new Top,
            this._About = new About,
            this._Mission1 = new Mission1,
            this._Mission2 = new Mission2,
            this._Profile1 = new Profile1,
            this._Profile2 = new Profile2,
            this._Profile3 = new Profile3,
            this._Contact = new Contact,
            this._container.addChild(this._Loader)
        }
        ,
        t.prototype.startScene = function() {
            this._Loader.toRemoveAC(),
            this._scene = new SceneManager,
            this._router = new Router,
            this._router.silent = !0
        }
        ,
        t.prototype.resizeEv = function(t) {
            window._App.resizeAc()
        }
        ,
        t.prototype.resizeAc = function() {
            var t, e, i;
            i = (t = window._App._util.targetResize(window._App._canvas)).width,
            e = t.height,
            this._canvas.width = i,
            this._canvas.height = e,
            this._canvas.style.width = String(i / devicePixelRatio) + "px",
            this._canvas.style.height = String(e / devicePixelRatio) + "px"
        }
        ,
        t
    }()
}
).call(this),
function() {
    this.Global = function() {
        return function() {
            this._debugMode = !1,
            this._minW = 640,
            this._minH = 640,
            this._mediaQuery_large = 980,
            this._mediaQuery_middle = 640,
            this._mediaQuery_small = 420,
            this._mediaQuery_xsmall = 380,
            this._mediaQuery_xxsmall = 320,
            this._dirRoot = "/"
        }
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.About = function(e) {
        function i() {
            this._assets = null,
            this._$target = null,
            this._txtEfect = [],
            this._scrollTween = null,
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t;
            t = this,
            this._assets = new createjs.MovieClip,
            this.addChild(this._assets),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/about/catch.png"),
            $("#Container").append(window._PageData._about),
            this._$target = $("#About"),
            TweenMax.set(this._$target, {
                autoAlpha: 0,
                display: "none"
            }),
            this._txtEfect.ttl = new ShuffleText(document.querySelector("#About .ttl")),
            this._txtEfect.txt1 = new ShuffleText(document.querySelector("#About .txt1")),
            this._txtEfect.txt2 = new ShuffleText(document.querySelector("#About .txt2")),
            this._txtEfect.ttl.emptyCharacter = "",
            this._txtEfect.txt1.emptyCharacter = "",
            this._txtEfect.txt2.emptyCharacter = "",
            this.addEventListener("added", function(e) {
                t.addedAC()
            }),
            this.addEventListener("removed", function(e) {
                t.removedAC()
            })
        }
        ,
        i.prototype.addedAC = function() {
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            TweenMax.set(this._$target, {
                display: "block"
            }),
            TweenMax.to(this._$target, 1, {
                autoAlpha: 1,
                delay: 0,
                ease: Expo.easeOut
            }),
            $("#About .left-box .txts").css({
                height: $("#About .left-box .txts").height() + "px"
            }),
            $("#About .left-box .ttl").css({
                height: $("#About .left-box .ttl").height() + "px"
            }),
            $("#About .left-box .txt1").css({
                height: $("#About .left-box .txt1").height() + "px"
            }),
            $("#About .left-box .txt2").css({
                height: $("#About .left-box .txt2").height() + "px"
            }),
            this._txtEfect.ttl.start(),
            this._txtEfect.txt1.start(),
            this._txtEfect.txt2.start(),
            TweenMax.to(this, 1, {
                alpha: 100,
                onComplete: function() {
                    $("#About .left-box .txts").css({
                        height: "auto"
                    }),
                    $("#About .left-box .ttl").css({
                        height: "auto"
                    }),
                    $("#About .left-box .txt1").css({
                        height: "auto"
                    }),
                    $("#About .left-box .txt2").css({
                        height: "auto"
                    })
                },
                ease: Expo.easeOut
            }),
            this._scrollTween && this._scrollTween.kill(),
            this._scrollTween = new TimelineMax,
            this._scrollTween.to($("#About .scroll .line2"), 0, {
                scaleY: 0,
                transformOrigin: "50% 0",
                ease: Expo.easeOut
            }).to($("#About .scroll .line2"), 1, {
                scaleY: 1,
                ease: Expo.easeOut
            }).to($("#About .scroll .line2"), 0, {
                scaleY: 1,
                transformOrigin: "50% 100%",
                ease: Expo.easeOut
            }).to($("#About .scroll .line2"), 1, {
                scaleY: 0,
                ease: Expo.easeOut
            }),
            this._scrollTween.repeat(-1),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !1
            }, 600, createjs.Ease.quartOut).call(function() {
                t.toRemoveComplete()
            }),
            TweenMax.to(this._$target, .6, {
                autoAlpha: 0,
                display: "none",
                delay: 0,
                ease: Expo.easeOut
            })
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this.parent && this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.sceneChange = function() {}
        ,
        i.prototype.sceneChangeEnd = function() {
            window._App
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._About.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            window._App._util.targetResize(window._App._canvas)
        }
        ,
        i
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.Bg = function(e) {
        function i() {
            this._assets = null,
            this._Main = null,
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t;
            t = this,
            this.addEventListener("added", function(e) {
                t.addedAC()
            }),
            this.addEventListener("removed", function(e) {
                t.removedAC()
            }),
            this._assets = new createjs.MovieClip,
            this.addChild(this._assets),
            this._Main = new Main
        }
        ,
        i.prototype.addedAC = function() {
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            this._Main.addedAC(),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !1
            }, 600, createjs.Ease.quartOut).wait(250).call(function() {
                t.toRemoveComplete()
            }),
            this._Main.removedAC()
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._Bg.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            window._App._util.targetResize(window._App._canvas)
        }
        ,
        i
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.ContentsBg = function(e) {
        function i() {
            this._assets = null,
            this._$target = null,
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t;
            t = this,
            this.addEventListener("added", function(e) {
                t.addedAC()
            }),
            this.addEventListener("removed", function(e) {
                t.removedAC()
            }),
            this._assets = new createjs.MovieClip,
            this.addChild(this._assets),
            $("#Container").append('<div id="ContentsBg"></div>'),
            this._$target = $("#ContentsBg"),
            TweenMax.set(this._$target, {
                autoAlpha: 0
            })
        }
        ,
        i.prototype.addedAC = function() {
            var t, e;
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            e = (t = window._App._util.targetResize(window._App._canvas)).width,
            t.height,
            e / devicePixelRatio <= window._App._global._mediaQuery_large ? (TweenMax.to(this._$target, 0, {
                scaleX: 1,
                scaleY: 0,
                autoAlpha: 1,
                delay: 0,
                transformOrigin: "0 100%",
                ease: Expo.easeOut
            }),
            TweenMax.to(this._$target, .6, {
                scaleX: 1,
                scaleY: 1,
                delay: 0,
                ease: Expo.easeOut
            })) : (TweenMax.to(this._$target, 0, {
                scaleX: 0,
                scaleY: 1,
                autoAlpha: 1,
                delay: 0,
                transformOrigin: "0 0",
                ease: Expo.easeOut
            }),
            TweenMax.to(this._$target, .6, {
                scaleX: 1,
                scaleY: 1,
                delay: 0,
                ease: Expo.easeOut
            })),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t, e, i;
            i = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !1
            }, 600, createjs.Ease.quartOut).wait(250).call(function() {
                i.toRemoveComplete()
            }),
            e = (t = window._App._util.targetResize(window._App._canvas)).width,
            t.height,
            e / devicePixelRatio <= window._App._global._mediaQuery_large ? (TweenMax.set(this._$target, {
                transformOrigin: "0 100%"
            }),
            TweenMax.to(this._$target, .6, {
                scaleY: 0,
                delay: 0,
                ease: Expo.easeOut
            })) : (TweenMax.set(this._$target, {
                transformOrigin: "0 0"
            }),
            TweenMax.to(this._$target, .6, {
                scaleX: 0,
                delay: 0,
                ease: Expo.easeOut
            }))
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._ContentsBg.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            var t, e;
            e = (t = window._App._util.targetResize(window._App._canvas)).width,
            t.height,
            e / devicePixelRatio <= window._App._global._mediaQuery_large ? TweenMax.set(this._$target, {
                height: window.innerHeight - 250
            }) : TweenMax.set(this._$target, {
                height: window.innerHeight
            })
        }
        ,
        i
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.GlobalNavi = function(e) {
        function i() {
            this._assets = null,
            this._naviH = [],
            this._touchmoveNum = 0,
            this._touchmoveBeforeNum = 0,
            this._txtEfect = [],
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t, e, i, o;
            for (e = this,
            this.addEventListener("added", function(t) {
                e.addedAC()
            }),
            this.addEventListener("removed", function(t) {
                e.removedAC()
            }),
            this._assets = new createjs.MovieClip,
            this.addChild(this._assets),
            $("#Container").append(window._PageData._globalnavi),
            this._$target = $("#GlobalNavi"),
            TweenMax.set(this._$target, {
                autoAlpha: 0
            }),
            t = i = 1; i <= 4; t = ++i)
                new GlobalNaviNavi($("#GlobalNavi .list" + t),t),
                this._txtEfect["list" + t + "dt"] = new ShuffleText(document.querySelector("#GlobalNavi .list" + t + " dt")),
                this._txtEfect["list" + t + "dt"].emptyCharacter = "",
                1 === t ? (this._txtEfect["list" + t + "dd1"] = new ShuffleText(document.querySelector("#GlobalNavi .list" + t + " dd .txts .t1")),
                this._txtEfect["list" + t + "dd2"] = new ShuffleText(document.querySelector("#GlobalNavi .list" + t + " dd .txts .t2")),
                this._txtEfect["list" + t + "dd3"] = new ShuffleText(document.querySelector("#GlobalNavi .list" + t + " dd .txts .t3")),
                this._txtEfect["list" + t + "dd4"] = new ShuffleText(document.querySelector("#GlobalNavi .list" + t + " dd .txts .t4")),
                this._txtEfect["list" + t + "dd5"] = new ShuffleText(document.querySelector("#GlobalNavi .list" + t + " dd .txts .t5")),
                this._txtEfect["list" + t + "dd1"].emptyCharacter = "",
                this._txtEfect["list" + t + "dd2"].emptyCharacter = "",
                this._txtEfect["list" + t + "dd3"].emptyCharacter = "",
                this._txtEfect["list" + t + "dd4"].emptyCharacter = "",
                this._txtEfect["list" + t + "dd5"].emptyCharacter = "") : (this._txtEfect["list" + t + "dd"] = new ShuffleText(document.querySelector("#GlobalNavi .list" + t + " dd .txts")),
                this._txtEfect["list" + t + "dd"].emptyCharacter = "");
            for (t = o = 1; o <= 4; t = ++o)
                this._naviH["line" + t] = $("#GlobalNavi ul .list" + t + " dd .line-b").css("height");
            this._naviH.txts1 = "8em",
            this._naviH.txts2 = "5em",
            this._naviH.txts3 = "6em",
            this._naviH.txts4 = "5em",
            this.initWheelScroll(),
            this.initTouchMove(),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        i.prototype.addedAC = function() {
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            TweenMax.to(this._$target, 1, {
                autoAlpha: 1,
                delay: 0,
                ease: Expo.easeOut
            })
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !1
            }, 600, createjs.Ease.quartOut).wait(250).call(function() {
                t.toRemoveComplete()
            }),
            TweenMax.to(this._$target, .6, {
                autoAlpha: 0,
                delay: 0,
                ease: Expo.easeOut
            })
        }
        ,
        i.prototype.toRemoveComplete = function() {}
        ,
        i.prototype.removedAC = function() {}
        ,
        i.prototype.changeNavigation = function(t) {
            var e, i, o, s;
            for (o = this,
            i = 0,
            "about" === t ? i = 1 : "mission1" === t ? i = 2 : "mission2" === t ? i = 2 : "profile1" === t ? i = 3 : "profile2" === t ? i = 3 : "profile3" === t ? i = 3 : "contact" === t && (i = 4),
            e = s = 1; s <= 4; e = ++s)
                i !== e && ($("#GlobalNavi ul .list" + e + " dd .txts").css({
                    display: "none",
                    height: 0
                }),
                $("#GlobalNavi ul .list" + e + " dd .line-b").css({
                    display: "none",
                    height: 0
                }),
                $("#GlobalNavi ul .list" + e + " dd .line-t .line-sub").css({
                    opacity: 0
                }),
                $("#GlobalNavi ul .list" + e + " dd .line-b .line-sub").css({
                    opacity: 0
                })),
                this._txtEfect["list" + e + "dt"].start();
            $("#GlobalNavi ul .list" + i + " dd .txts").css({
                display: "block",
                height: this._naviH["txts" + i]
            }),
            $("#GlobalNavi ul .list" + i + " dd .line-b").css({
                display: "block",
                height: this._naviH["line" + i]
            }),
            $("#GlobalNavi ul .list" + i + " dd .line-t .line-sub").css({
                opacity: 1
            }),
            $("#GlobalNavi ul .list" + i + " dd .line-b .line-sub").css({
                opacity: 1
            }),
            1 === i ? (this._txtEfect["list" + i + "dd1"].start(),
            this._txtEfect["list" + i + "dd2"].start(),
            this._txtEfect["list" + i + "dd4"].start(),
            this._txtEfect["list" + i + "dd5"].start()) : this._txtEfect["list" + i + "dd"].start(),
            TweenMax.to(this, .7, {
                onComplete: function() {
                    o.resizeAc()
                },
                ease: Expo.easeOut
            }),
            this.resizeAc()
        }
        ,
        i.prototype.initVektorScroll = function() {
            window.onscroll = function() {
                return $(document).innerHeight() - $(window).innerHeight()
            }
        }
        ,
        i.prototype.initWheelScroll = function() {
            var t;
            t = this,
            $("body").mousewheel(function(e, i, o, s) {
                if (!window._App._scene._movingSceneFlg)
                    return t.acWheelScroll(i)
            })
        }
        ,
        i.prototype.acWheelScroll = function(t) {
            t >= 1 && $(window).scrollTop() <= 0 ? window._App._scene.atScenePrevGoto() : t <= -1 && $(document).innerHeight() - $(window).innerHeight() <= $(window).scrollTop() && window._App._scene.atSceneNextGoto()
        }
        ,
        i.prototype.initTouchMove = function() {
            createjs.Touch.isSupported() && (document.addEventListener("touchstart", this.acTouchMove),
            document.addEventListener("touchmove", this.acTouchMove),
            document.addEventListener("touchend", this.acTouchMove),
            document.addEventListener("touchcancel", this.acTouchMove))
        }
        ,
        i.prototype.acTouchMove = function(t) {
            var e, i, o, s, n;
            for ("touchstart" === t.type ? (this._touchmoveNum = 0,
            this._touchmoveBeforeNum = 0) : "touchmove" === t.type ? console.log("") : "touchend" === t.type ? this._touchmoveNum > 30 && $(window).scrollTop() <= 0 ? (this._touchmoveNum = 0,
            this._touchmoveBeforeNum = 0,
            window._App._scene.atScenePrevGoto()) : this._touchmoveNum < -30 && $(document).innerHeight() - window.innerHeight <= $(window).scrollTop() && (this._touchmoveNum = 0,
            this._touchmoveBeforeNum = 0,
            window._App._scene.atSceneNextGoto()) : "touchcancel" === t.type && (this._touchmoveNum = 0,
            this._touchmoveBeforeNum = 0),
            e = s = 0,
            n = (o = t.changedTouches).length - 1; 0 <= n ? s <= n : s >= n; e = 0 <= n ? ++s : --s)
                i = o[e],
                0 === this._touchmoveBeforeNum ? this._touchmoveBeforeNum = i.screenY : this._touchmoveNum = i.screenY - this._touchmoveBeforeNum
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._GlobalNavi.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            var t, e, i, o, s, n;
            for (window._App._util.targetResize(window._App._canvas),
            window.innerWidth,
            e = window.innerHeight,
            TweenMax.set($("#GlobalNavi ul dt"), {
                x: 0,
                y: 0,
                rotation: -90
            }),
            TweenMax.set($("#GlobalNavi ul dt dd"), {
                x: 0,
                y: 0
            }),
            o = $("#GlobalNavi ul dd .txts").width(),
            $("#GlobalNavi ul dd").css({
                width: o + "px"
            }),
            i = 0,
            t = s = 1; s <= 4; t = ++s)
                $("#GlobalNavi .list" + t + " dt").css({
                    position: "relative"
                }),
                $("#GlobalNavi .list" + t + " dd").css({
                    position: "relative"
                }),
                TweenMax.set($("#GlobalNavi .list" + t + " dt"), {
                    x: 0,
                    y: i
                }),
                i += $("#GlobalNavi .list" + t + " dt").height(),
                TweenMax.set($("#GlobalNavi .list" + t + " dd"), {
                    x: 0,
                    y: i + 30 + $("#GlobalNavi .list" + t + " dd .line-t").height()
                }),
                i += $("#GlobalNavi .list" + t + " dd .txts").height() + 30 + $("#GlobalNavi .list" + t + " dd .line-t").height() + $("#GlobalNavi .list" + t + " dd .line-b").height();
            for (t = n = 1; n <= 4; t = ++n)
                $("#GlobalNavi .list" + t + " dt").css({
                    position: "absolute"
                }),
                $("#GlobalNavi .list" + t + " dd").css({
                    position: "absolute"
                });
            TweenMax.set($("#GlobalNavi"), {
                y: (e - i) / 2
            })
        }
        ,
        i
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.Header = function(e) {
        function i() {
            this._assets = null,
            this._$target = null,
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t;
            t = this,
            this.addEventListener("added", function(e) {
                t.addedAC()
            }),
            this.addEventListener("removed", function(e) {
                t.removedAC()
            }),
            this._assets = new createjs.MovieClip,
            this.addChild(this._assets),
            $("#Container").append(window._PageData._header),
            this._$target = $("#GlobalHeader"),
            TweenMax.set(this._$target, {
                autoAlpha: 0
            }),
            new HeaderContact($("#GlobalHeader .contact"))
        }
        ,
        i.prototype.addedAC = function() {
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            TweenMax.to(this._$target, 1, {
                autoAlpha: 1,
                delay: 0,
                ease: Expo.easeOut
            }),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !1
            }, 600, createjs.Ease.quartOut).wait(250).call(function() {
                t.toRemoveComplete()
            }),
            TweenMax.to(this._$target, .6, {
                autoAlpha: 0,
                delay: 0,
                ease: Expo.easeOut
            })
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._Header.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            var t;
            (t = window._App._util.targetResize(window._App._canvas)).width,
            t.height
        }
        ,
        i
    }()
}
.call(this),
function() {
    this.Main = function() {
        function t() {
            this._assets = null,
            this._numImages = 14400,
            this._particlesVertexShader = null,
            this._particlesFragmentShader = null,
            this._TilingMesh = null,
            this._TilingMeshBlue = null,
            this._animateTween = null,
            this._animationValue1 = 0,
            this._animationValue2 = 0,
            this._animationValue3 = 0,
            this._animationValue4 = 0,
            this._animationValue5 = 0,
            this._animationValue6 = 0,
            this._cameraRot = 0,
            this._point = [],
            this._jsonApi = [],
            this._news = [],
            this._apiLoaded = !1,
            this._profileNewsTxt = "",
            this._fontFamily = "Noto Sans JP",
            this._fontLoaded = !1,
            this._shaderLoaded = !1,
            this._layoutType = null,
            this.init()
        }
        return t.prototype.init = function() {
            this._assets = new THREE.Group,
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/top/arw_white.png"),
            this.loadShader(),
            this.loadWebFont(),
            this.loadAPI()
        }
        ,
        t.prototype.loadWebFont = function() {
            var t;
            t = this,
            window._App._Loader._lenNum++,
            WebFont.load({
                google: {
                    families: [this._fontFamily]
                },
                loading: function() {
                    console.log("webfonts load start")
                },
                active: function() {
                    console.log("webfonts loaded"),
                    window._App._Loader._compNum++,
                    t._fontLoaded = !0,
                    t._apiLoaded && t._fontLoaded && t._shaderLoaded && t.createNewsBmd()
                },
                inactive: function() {
                    console.log("webfonts loaded"),
                    window._App._Loader._compNum++,
                    t._fontLoaded = !0,
                    t._apiLoaded && t._fontLoaded && t._shaderLoaded && t.createNewsBmd()
                }
            })
        }
        ,
        t.prototype.loadAPI = function() {
            var t;
            t = this,
            window._App._Loader._lenNum++,
            $.ajax({
                url: "http://ku-p.co.jp/api/get",
                type: "GET",
                success: function(e) {
                    return console.log(e),
                    t._jsonApi = e,
                    window._App._Loader._compNum++,
                    t.parseApi()
                },
                error: function(t) {
                    return console.log(t.responseText)
                }
            })
        }
        ,
        t.prototype.parseApi = function() {
            var t, e, i, o;
            for (i = this,
            e = this._jsonApi[0].item.length - 1,
            console.log(this._jsonApi),
            t = o = 0; 0 <= e ? o <= e : o >= e; t = 0 <= e ? ++o : --o)
                this._jsonApi[0].item && (this._news[t] = this._jsonApi[0].item[t].title),
                this._jsonApi[0].item && (this._profileNewsTxt += this._jsonApi[0].item[t].title),
                this._jsonApi[1].item && (this._profileNewsTxt += this._jsonApi[1].item[t].title),
                this._jsonApi[2].item && (this._profileNewsTxt += this._jsonApi[2].item[t].title),
                this._jsonApi[3].item && (this._profileNewsTxt += this._jsonApi[3].item[t].title),
                this._news[t] = window._App._util.changeOverString(this._news[t], 22);
            i._apiLoaded = !0,
            console.log("api loaded"),
            i._apiLoaded && i._fontLoaded && i._shaderLoaded && i.createNewsBmd(),
            this.setProfilePage()
        }
        ,
        t.prototype.setProfilePage = function() {
            "edge" === window._App._util.targetBrowser() ? ($("#Profile1 .right-box .pic p").css({
                "mix-blend-mode": "normal",
                "background-clip": "border-box",
                "-webkit-background-clip": "border-box"
            }),
            $("#Profile2 .right-box .pic p").css({
                "mix-blend-mode": "normal",
                "background-clip": "border-box",
                "-webkit-background-clip": "border-box"
            }),
            $("#Profile3 .right-box .pic p").css({
                "mix-blend-mode": "normal",
                "background-clip": "border-box",
                "-webkit-background-clip": "border-box"
            }),
            $("#Profile1 .right-box .pic p").text(""),
            $("#Profile2 .right-box .pic p").text(""),
            $("#Profile3 .right-box .pic p").text("")) : ($("#Profile1 .right-box .pic p").text(this._profileNewsTxt),
            $("#Profile2 .right-box .pic p").text(this._profileNewsTxt),
            $("#Profile3 .right-box .pic p").text(this._profileNewsTxt),
            window._App._Profile1._txtEfect.pic = new ShuffleText(document.querySelector("#Profile1 .right-box .pic p")),
            window._App._Profile1._txtEfect.pic.emptyCharacter = "K",
            window._App._Profile1._txtEfect.pic.sourceRandomCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂズデドバビブベボパピプペポ",
            window._App._Profile2._txtEfect.pic = new ShuffleText(document.querySelector("#Profile2 .right-box .pic p")),
            window._App._Profile2._txtEfect.pic.emptyCharacter = "U",
            window._App._Profile2._txtEfect.pic.sourceRandomCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂズデドバビブベボパピプペポ",
            window._App._Profile3._txtEfect.pic = new ShuffleText(document.querySelector("#Profile3 .right-box .pic p")),
            window._App._Profile3._txtEfect.pic.emptyCharacter = "P",
            window._App._Profile3._txtEfect.pic.sourceRandomCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂズデドバビブベボパピプペポ")
        }
        ,
        t.prototype.createNewsBmd = function() {
            var t, e, i, o, s, n, a, r, l, h, p;
            for (o = null,
            this._news = window._App._util.shuffle(this._news),
            20,
            64,
            a = (o = this._news[0] + this._news[1] + this._news[2] + this._news[3] + this._news[4]).length,
            s = Math.ceil(a / 20),
            (r = document.createElement("canvas")).className = "NewsArea",
            l = r.getContext("2d"),
            r.width = 1280,
            r.height = 64 * s,
            l.font = "normal 51.2px " + this._fontFamily,
            l.textAlign = "left",
            l.fillStyle = "#ffffff",
            i = h = 0,
            p = o.length - 1; 0 <= p ? h <= p : h >= p; i = 0 <= p ? ++h : --h)
                e = i % 20,
                n = Math.floor(i / 20),
                l.fillText(o.charAt(i), 64 * e, 64 * n + 51.2, 64);
            t = new createjs.BitmapData(r),
            this.imgPixels(t)
        }
        ,
        t.prototype.loadShader = function() {
            var t;
            t = this,
            window._App._Loader._lenNum++,
            SHADER_LOADER.load(function(e) {
                if (t._particlesVertexShader = e.myShader.vertex,
                t._particlesFragmentShader = e.myShader.fragment,
                window._App._Loader._compNum++,
                t._shaderLoaded = !0,
                console.log("shaderloaded"),
                t._apiLoaded && t._fontLoaded && t._shaderLoaded)
                    return t.createNewsBmd()
            })
        }
        ,
        t.prototype.imgPixels = function(t) {
            var e, i, o, s, n, a, r;
            for (s = t.context.getImageData(0, 0, t.width, t.height),
            this._point = [],
            i = 0,
            o = a = 0,
            r = s.data.length - 1; a < r; o = a += 4)
                e = s.data[o + 3],
                n = o / 4,
                5 === i ? (e > 0 && this._point.push({
                    x: n % t.width - t.width / 2,
                    y: t.height / 2 - Math.floor(n / t.width)
                }),
                i = 0) : i += 1;
            this.initTilingMesh()
        }
        ,
        t.prototype.initTilingMesh = function() {
            var t;
            t = this,
            (new THREE.TextureLoader).load(window._App._global._dirRoot + "assets/images/top/arw_white.png", function(e) {
                e.flipY = !1,
                e.needsUpdate = !0,
                t._TilingMesh = new TilingMesh(t._numImages,e.image.width,e.image.height,t._particlesVertexShader,t._particlesFragmentShader),
                t._TilingMesh.createTexture(e),
                t._assets.add(t._TilingMesh),
                t._TilingMesh.setUniform("_colorHSV", new THREE.Vector3(0,.99,.99)),
                t._TilingMeshBlue = new TilingMesh(t._numImages,e.image.width,e.image.height,t._particlesVertexShader,t._particlesFragmentShader),
                t._TilingMeshBlue.createTexture(e),
                t._assets.add(t._TilingMeshBlue),
                t._TilingMeshBlue.setUniform("_colorHSV", new THREE.Vector3(2.71,.78,.5)),
                window._App._global._debugMode && t.createDatGUIBox()
            })
        }
        ,
        t.prototype.addedAC = function() {
            window._App._Threejs._scene.add(this._assets),
            this._assets.alpha = 0,
            createjs.Tween.get(this._assets).to({
                alpha: 1
            }, 3e3, createjs.Ease.quartOut),
            this.renderStart(),
            this.animetionStart(),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        t.prototype.removedAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this._assets).to({
                alpha: 0
            }, 600, createjs.Ease.quartOut).call(function() {
                t.toRemoveComplete()
            })
        }
        ,
        t.prototype.toRemoveComplete = function() {
            window.removeEventListener("resize", this.resizeEv),
            this.renderStop(),
            window._App._Threejs._scene.remove(this._assets)
        }
        ,
        t.prototype.renderStart = function() {
            createjs.Ticker.addEventListener("tick", this.rendering)
        }
        ,
        t.prototype.renderStop = function() {
            createjs.Ticker.removeEventListener("tick", this.rendering)
        }
        ,
        t.prototype.rendering = function() {
            window._App._Bg._Main.render()
        }
        ,
        t.prototype.render = function() {
            this._TilingMesh.update(window._App._Threejs._camera),
            this._TilingMeshBlue.update(window._App._Threejs._camera)
        }
        ,
        t.prototype.createDatGUIBox = function() {
            var t, e, i, o, s, n, a, r;
            r = this,
            t = (a = new dat.GUI).add(this, "_animationValue1", 0, 1).listen(),
            e = a.add(this, "_animationValue2", 0, 1).listen(),
            i = a.add(this, "_animationValue3", 0, 1).listen(),
            o = a.add(this, "_animationValue4", 0, 1).listen(),
            s = a.add(this, "_animationValue5", 0, 1).listen(),
            n = a.add(this, "_animationValue6", 0, 1).listen(),
            a.add(this, "animation1"),
            a.add(this, "animation2"),
            a.add(this, "animation3"),
            a.add(this, "animation4"),
            a.add(this, "animation5"),
            a.add(this, "animation6"),
            t.onChange(function(t) {
                r._TilingMesh.setUniform("animationValue1", t),
                r._TilingMeshBlue.setUniform("animationValue1", t)
            }),
            e.onChange(function(t) {
                r._TilingMesh.setUniform("animationValue2", t),
                r._TilingMeshBlue.setUniform("animationValue2", t)
            }),
            i.onChange(function(t) {
                r._TilingMesh.setUniform("animationValue3", t),
                r._TilingMeshBlue.setUniform("animationValue3", t)
            }),
            o.onChange(function(t) {
                r._TilingMesh.setUniform("animationValue4", t),
                r._TilingMeshBlue.setUniform("animationValue4", t)
            }),
            s.onChange(function(t) {
                r._TilingMesh.setUniform("animationValue5", t),
                r._TilingMeshBlue.setUniform("animationValue5", t)
            }),
            n.onChange(function(t) {
                r._TilingMesh.setUniform("animationValue6", t),
                r._TilingMeshBlue.setUniform("animationValue6", t)
            })
        }
        ,
        t.prototype.animetionStart = function() {
            createjs.Ticker.addEventListener("tick", this.orbitMoveCamera2)
        }
        ,
        t.prototype.animate = function(t) {
            var e;
            e = this,
            this._animateTween && this._animateTween.kill(),
            this._animateTween = TweenMax.to(this, 1, {
                ease: Expo.easeOut,
                _animationValue1: 1 === t ? 1 : 0,
                _animationValue2: 2 === t ? 1 : 0,
                _animationValue3: 3 === t ? 1 : 0,
                _animationValue4: 4 === t ? 1 : 0,
                _animationValue5: 5 === t ? 1 : 0,
                _animationValue6: 6 === t ? 1 : 0,
                onUpdate: function() {
                    e._TilingMesh.setUniform("animationValue1", e._animationValue1),
                    e._TilingMeshBlue.setUniform("animationValue1", e._animationValue1),
                    e._TilingMesh.setUniform("animationValue2", e._animationValue2),
                    e._TilingMeshBlue.setUniform("animationValue2", e._animationValue2),
                    e._TilingMesh.setUniform("animationValue3", e._animationValue3),
                    e._TilingMeshBlue.setUniform("animationValue3", e._animationValue3),
                    e._TilingMesh.setUniform("animationValue4", e._animationValue4),
                    e._TilingMeshBlue.setUniform("animationValue4", e._animationValue4),
                    e._TilingMesh.setUniform("animationValue5", e._animationValue5),
                    e._TilingMeshBlue.setUniform("animationValue5", e._animationValue5),
                    e._TilingMesh.setUniform("animationValue6", e._animationValue6),
                    e._TilingMeshBlue.setUniform("animationValue6", e._animationValue6)
                }
            })
        }
        ,
        t.prototype.animation1 = function() {
            this.animate(1)
        }
        ,
        t.prototype.animation2 = function() {
            this.animate(2)
        }
        ,
        t.prototype.animation3 = function() {
            this.animate(3)
        }
        ,
        t.prototype.animation4 = function() {
            this.animate(4)
        }
        ,
        t.prototype.animation5 = function() {
            this.animate(5)
        }
        ,
        t.prototype.animation6 = function() {
            this.animate(6)
        }
        ,
        t.prototype.changeAnimationFirst = function() {
            var t, e;
            e = this,
            this._animateTween = TweenMax.to(this, 0, {
                ease: Expo.easeOut,
                _animationValue1: 0,
                _animationValue2: 0,
                _animationValue3: 0,
                _animationValue4: 0,
                _animationValue5: 1,
                _animationValue6: 0,
                onUpdate: function() {
                    e._TilingMesh.setUniform("animationValue1", e._animationValue1),
                    e._TilingMeshBlue.setUniform("animationValue1", e._animationValue1),
                    e._TilingMesh.setUniform("animationValue2", e._animationValue2),
                    e._TilingMeshBlue.setUniform("animationValue2", e._animationValue2),
                    e._TilingMesh.setUniform("animationValue3", e._animationValue3),
                    e._TilingMeshBlue.setUniform("animationValue3", e._animationValue3),
                    e._TilingMesh.setUniform("animationValue4", e._animationValue4),
                    e._TilingMeshBlue.setUniform("animationValue4", e._animationValue4),
                    e._TilingMesh.setUniform("animationValue5", e._animationValue5),
                    e._TilingMeshBlue.setUniform("animationValue5", e._animationValue5),
                    e._TilingMesh.setUniform("animationValue6", e._animationValue6),
                    e._TilingMeshBlue.setUniform("animationValue6", e._animationValue6)
                }
            }),
            createjs.Ticker.removeEventListener("tick", e.orbitMoveCameraFirst),
            createjs.Ticker.removeEventListener("tick", e.orbitMoveCamera1),
            createjs.Ticker.removeEventListener("tick", e.orbitMoveCamera2),
            createjs.Ticker.removeEventListener("tick", e.orbitMoveCamera3),
            TweenMax.to(this._assets.rotation, 0, {
                z: -(this._cameraRot - 90) / 180 * Math.PI,
                y: -(this._cameraRot - 90) / 180 * Math.PI / 8,
                delay: 0,
                overwrite: 1,
                onComplete: function() {
                    createjs.Ticker.addEventListener("tick", e.orbitMoveCameraFirst)
                },
                ease: Expo.easeOut
            }),
            t = window._App._util.targetResize(window._App._canvas).width,
            TweenMax.to(this._TilingMesh.rotation, 0, {
                x: -.25 * Math.PI,
                y: (this._cameraRot - 90) / 180 * Math.PI,
                z: 1 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to(this._TilingMeshBlue.rotation, 0, {
                x: .25 * Math.PI,
                y: (this._cameraRot + 90) / 180 * Math.PI,
                z: 0 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to(this._TilingMesh.position, 0, {
                x: .03 * -t,
                y: 0,
                z: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to(this._TilingMeshBlue.position, 0, {
                x: .03 * t,
                y: 0,
                z: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to([this._TilingMesh.scale, this._TilingMeshBlue.scale], 0, {
                x: 1,
                y: 1,
                z: 1,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            })
        }
        ,
        t.prototype.changeAnimation1 = function() {
            var t, e;
            e = this,
            this._animateTween && this._animateTween.kill(),
            this._animateTween = TweenMax.to(this, 2, {
                ease: Expo.easeInOut,
                _animationValue1: 0,
                _animationValue2: 0,
                _animationValue3: 0,
                _animationValue4: 0,
                _animationValue5: 1,
                _animationValue6: 0,
                onUpdate: function() {
                    e._TilingMesh.setUniform("animationValue1", e._animationValue1),
                    e._TilingMeshBlue.setUniform("animationValue1", e._animationValue1),
                    e._TilingMesh.setUniform("animationValue2", e._animationValue2),
                    e._TilingMeshBlue.setUniform("animationValue2", e._animationValue2),
                    e._TilingMesh.setUniform("animationValue3", e._animationValue3),
                    e._TilingMeshBlue.setUniform("animationValue3", e._animationValue3),
                    e._TilingMesh.setUniform("animationValue4", e._animationValue4),
                    e._TilingMeshBlue.setUniform("animationValue4", e._animationValue4),
                    e._TilingMesh.setUniform("animationValue5", e._animationValue5),
                    e._TilingMeshBlue.setUniform("animationValue5", e._animationValue5),
                    e._TilingMesh.setUniform("animationValue6", e._animationValue6),
                    e._TilingMeshBlue.setUniform("animationValue6", e._animationValue6)
                }
            }),
            createjs.Ticker.removeEventListener("tick", e.orbitMoveCameraFirst),
            createjs.Ticker.removeEventListener("tick", e.orbitMoveCamera1),
            createjs.Ticker.removeEventListener("tick", e.orbitMoveCamera2),
            createjs.Ticker.removeEventListener("tick", e.orbitMoveCamera3),
            TweenMax.to(this._assets.rotation, 2, {
                z: -(this._cameraRot - 90) / 180 * Math.PI,
                y: -(this._cameraRot - 90) / 180 * Math.PI / 8,
                delay: 0,
                overwrite: 1,
                onComplete: function() {
                    createjs.Ticker.addEventListener("tick", e.orbitMoveCamera1)
                },
                ease: Expo.easeInOut
            }),
            t = window._App._util.targetResize(window._App._canvas).width,
            TweenMax.to(this._TilingMesh.rotation, 2, {
                x: -.25 * Math.PI,
                y: (this._cameraRot - 90) / 180 * Math.PI,
                z: 1 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to(this._TilingMeshBlue.rotation, 2, {
                x: .25 * Math.PI,
                y: (this._cameraRot + 90) / 180 * Math.PI,
                z: 0 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to(this._TilingMesh.position, 2, {
                x: .03 * -t,
                y: 0,
                z: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to(this._TilingMeshBlue.position, 2, {
                x: .03 * t,
                y: 0,
                z: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to([this._TilingMesh.scale, this._TilingMeshBlue.scale], 2, {
                x: 1,
                y: 1,
                z: 1,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            })
        }
        ,
        t.prototype.changeAnimation2 = function() {
            var t;
            t = this,
            this._animateTween && this._animateTween.kill(),
            this._animateTween = TweenMax.to(this, 2, {
                ease: Expo.easeInOut,
                _animationValue1: 0,
                _animationValue2: 0,
                _animationValue3: 0,
                _animationValue4: 1,
                _animationValue5: 0,
                _animationValue6: 1,
                onUpdate: function() {
                    t._TilingMesh.setUniform("animationValue1", t._animationValue1),
                    t._TilingMeshBlue.setUniform("animationValue1", t._animationValue1),
                    t._TilingMesh.setUniform("animationValue2", t._animationValue2),
                    t._TilingMeshBlue.setUniform("animationValue2", t._animationValue2),
                    t._TilingMesh.setUniform("animationValue3", t._animationValue3),
                    t._TilingMeshBlue.setUniform("animationValue3", t._animationValue3),
                    t._TilingMesh.setUniform("animationValue4", t._animationValue4),
                    t._TilingMeshBlue.setUniform("animationValue4", t._animationValue4),
                    t._TilingMesh.setUniform("animationValue5", t._animationValue5),
                    t._TilingMeshBlue.setUniform("animationValue5", t._animationValue5),
                    t._TilingMesh.setUniform("animationValue6", t._animationValue6),
                    t._TilingMeshBlue.setUniform("animationValue6", t._animationValue6)
                }
            }),
            createjs.Ticker.removeEventListener("tick", t.orbitMoveCameraFirst),
            createjs.Ticker.removeEventListener("tick", t.orbitMoveCamera1),
            createjs.Ticker.removeEventListener("tick", t.orbitMoveCamera2),
            createjs.Ticker.removeEventListener("tick", t.orbitMoveCamera3),
            TweenMax.to(this._assets.rotation, 2, {
                x: 0 * Math.PI,
                y: 0 * Math.PI,
                z: 0 * Math.PI,
                delay: 0,
                overwrite: 1,
                onComplete: function() {
                    createjs.Ticker.addEventListener("tick", t.orbitMoveCamera2)
                },
                ease: Expo.easeInOut
            }),
            window._App._util.targetResize(window._App._canvas).width,
            TweenMax.to(this._TilingMesh.rotation, 2, {
                x: 0 * Math.PI,
                y: (this._cameraRot - 0) / 180 * Math.PI,
                z: 0 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to(this._TilingMeshBlue.rotation, 2, {
                x: 0 * Math.PI,
                y: (this._cameraRot - 0) / 180 * Math.PI,
                z: 0 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to(this._TilingMesh.position, 2, {
                x: 150,
                y: -50,
                z: -250,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to(this._TilingMeshBlue.position, 2, {
                x: -3e3,
                y: 40,
                z: -250,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to([this._TilingMesh.scale, this._TilingMeshBlue.scale], 2, {
                x: 1.3,
                y: 1.3,
                z: 1.3,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            })
        }
        ,
        t.prototype.changeAnimation3 = function() {
            var t;
            t = this,
            this._animateTween && this._animateTween.kill(),
            this._animateTween = TweenMax.to(this, 2, {
                ease: Expo.easeInOut,
                _animationValue1: 0,
                _animationValue2: 0,
                _animationValue3: 0,
                _animationValue4: 1,
                _animationValue5: 0,
                _animationValue6: 1,
                onUpdate: function() {
                    t._TilingMesh.setUniform("animationValue1", t._animationValue1),
                    t._TilingMeshBlue.setUniform("animationValue1", t._animationValue1),
                    t._TilingMesh.setUniform("animationValue2", t._animationValue2),
                    t._TilingMeshBlue.setUniform("animationValue2", t._animationValue2),
                    t._TilingMesh.setUniform("animationValue3", t._animationValue3),
                    t._TilingMeshBlue.setUniform("animationValue3", t._animationValue3),
                    t._TilingMesh.setUniform("animationValue4", t._animationValue4),
                    t._TilingMeshBlue.setUniform("animationValue4", t._animationValue4),
                    t._TilingMesh.setUniform("animationValue5", t._animationValue5),
                    t._TilingMeshBlue.setUniform("animationValue5", t._animationValue5),
                    t._TilingMesh.setUniform("animationValue6", t._animationValue6),
                    t._TilingMeshBlue.setUniform("animationValue6", t._animationValue6)
                }
            }),
            createjs.Ticker.removeEventListener("tick", t.orbitMoveCameraFirst),
            createjs.Ticker.removeEventListener("tick", t.orbitMoveCamera1),
            createjs.Ticker.removeEventListener("tick", t.orbitMoveCamera2),
            createjs.Ticker.removeEventListener("tick", t.orbitMoveCamera3),
            TweenMax.to(this._assets.rotation, 2, {
                x: 0 * Math.PI,
                y: 0 * Math.PI,
                z: 0 * Math.PI,
                delay: 0,
                overwrite: 1,
                onComplete: function() {
                    createjs.Ticker.addEventListener("tick", t.orbitMoveCamera3)
                },
                ease: Expo.easeInOut
            }),
            TweenMax.to(this._TilingMesh.rotation, 2, {
                x: 20 / 180 * Math.PI,
                y: (this._cameraRot - 40) / 180 * Math.PI,
                z: -10 / 180 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to(this._TilingMeshBlue.rotation, 2, {
                x: 20 / 180 * Math.PI,
                y: (this._cameraRot - 40) / 180 * Math.PI,
                z: 20 / 180 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to(this._TilingMesh.position, 2, {
                x: -30,
                y: -50,
                z: -400,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to(this._TilingMeshBlue.position, 2, {
                x: 250,
                y: 0,
                z: -200,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to([this._TilingMesh.scale], 2, {
                x: .6,
                y: .6,
                z: .6,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to([this._TilingMeshBlue.scale], 2, {
                x: .7,
                y: .7,
                z: .7,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            })
        }
        ,
        t.prototype.changeAnimation4 = function() {
            var t;
            t = this,
            this._animateTween && this._animateTween.kill(),
            this._animateTween = TweenMax.to(this, 2, {
                ease: Expo.easeInOut,
                _animationValue1: 0,
                _animationValue2: 0,
                _animationValue3: 0,
                _animationValue4: 1,
                _animationValue5: 0,
                _animationValue6: 0,
                onUpdate: function() {
                    t._TilingMesh.setUniform("animationValue1", t._animationValue1),
                    t._TilingMeshBlue.setUniform("animationValue1", t._animationValue1),
                    t._TilingMesh.setUniform("animationValue2", t._animationValue2),
                    t._TilingMeshBlue.setUniform("animationValue2", t._animationValue2),
                    t._TilingMesh.setUniform("animationValue3", t._animationValue3),
                    t._TilingMeshBlue.setUniform("animationValue3", t._animationValue3),
                    t._TilingMesh.setUniform("animationValue4", t._animationValue4),
                    t._TilingMeshBlue.setUniform("animationValue4", t._animationValue4),
                    t._TilingMesh.setUniform("animationValue5", t._animationValue5),
                    t._TilingMeshBlue.setUniform("animationValue5", t._animationValue5),
                    t._TilingMesh.setUniform("animationValue6", t._animationValue6),
                    t._TilingMeshBlue.setUniform("animationValue6", t._animationValue6)
                }
            }),
            createjs.Ticker.removeEventListener("tick", t.orbitMoveCameraFirst),
            createjs.Ticker.removeEventListener("tick", t.orbitMoveCamera1),
            createjs.Ticker.removeEventListener("tick", t.orbitMoveCamera2),
            createjs.Ticker.removeEventListener("tick", t.orbitMoveCamera3),
            TweenMax.to(this._assets.rotation, 2, {
                x: 0 * Math.PI,
                y: 0 * Math.PI,
                z: 0 * Math.PI,
                delay: 0,
                overwrite: 1,
                onComplete: function() {
                    createjs.Ticker.addEventListener("tick", t.orbitMoveCamera3)
                },
                ease: Expo.easeInOut
            }),
            TweenMax.to(this._TilingMesh.rotation, 2, {
                x: 20 / 180 * Math.PI,
                y: (this._cameraRot - 40) / 180 * Math.PI,
                z: -10 / 180 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to(this._TilingMeshBlue.rotation, 2, {
                x: 20 / 180 * Math.PI,
                y: (this._cameraRot - 40) / 180 * Math.PI,
                z: 20 / 180 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to(this._TilingMesh.position, 2, {
                x: 150,
                y: -30,
                z: -150,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to(this._TilingMeshBlue.position, 2, {
                x: -300,
                y: 0,
                z: -1550,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            }),
            TweenMax.to([this._TilingMesh.scale, this._TilingMeshBlue.scale], 2, {
                x: 1.1,
                y: 1.1,
                z: 1.1,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeInOut
            })
        }
        ,
        t.prototype.changeRemoveAnimation = function() {
            var t, e;
            e = this,
            this._animateTween && this._animateTween.kill(),
            this._animateTween = TweenMax.to(this, 1, {
                ease: Expo.easeOut,
                _animationValue1: .5,
                _animationValue2: .5,
                _animationValue3: 1,
                _animationValue4: .5,
                _animationValue5: 1,
                _animationValue6: .5,
                onUpdate: function() {
                    e._TilingMesh.setUniform("animationValue1", e._animationValue1),
                    e._TilingMeshBlue.setUniform("animationValue1", e._animationValue1),
                    e._TilingMesh.setUniform("animationValue2", e._animationValue2),
                    e._TilingMeshBlue.setUniform("animationValue2", e._animationValue2),
                    e._TilingMesh.setUniform("animationValue3", e._animationValue3),
                    e._TilingMeshBlue.setUniform("animationValue3", e._animationValue3),
                    e._TilingMesh.setUniform("animationValue4", e._animationValue4),
                    e._TilingMeshBlue.setUniform("animationValue4", e._animationValue4),
                    e._TilingMesh.setUniform("animationValue5", e._animationValue5),
                    e._TilingMeshBlue.setUniform("animationValue5", e._animationValue5),
                    e._TilingMesh.setUniform("animationValue6", e._animationValue6),
                    e._TilingMeshBlue.setUniform("animationValue6", e._animationValue6)
                }
            }),
            createjs.Ticker.removeEventListener("tick", e.orbitMoveCameraFirst),
            createjs.Ticker.removeEventListener("tick", e.orbitMoveCamera1),
            createjs.Ticker.removeEventListener("tick", e.orbitMoveCamera2),
            createjs.Ticker.removeEventListener("tick", e.orbitMoveCamera3),
            t = window._App._util.targetResize(window._App._canvas).width,
            TweenMax.to(this._TilingMesh.rotation, 1, {
                x: -.25 * Math.PI,
                y: (this._cameraRot - 90) / 180 * Math.PI,
                z: 1 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to(this._TilingMeshBlue.rotation, 1, {
                x: .25 * Math.PI,
                y: (this._cameraRot + 90) / 180 * Math.PI,
                z: 0 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to(this._TilingMesh.position, 1, {
                x: .03 * -t,
                y: 0,
                z: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to(this._TilingMeshBlue.position, 1, {
                x: .03 * t,
                y: 0,
                z: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to([this._TilingMesh.scale, this._TilingMeshBlue.scale], 1, {
                x: 1,
                y: 1,
                z: 1,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to([this._assets.scale], 1, {
                x: 1,
                y: 1,
                z: 1,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to([this._assets.position], 1, {
                y: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            })
        }
        ,
        t.prototype.orbitMoveCameraFirst = function() {
            window._App._Bg._Main._assets.rotation.y = -(window._App._Bg._Main._cameraRot - 90) / 180 * Math.PI / 8,
            window._App._Bg._Main._assets.rotation.z = -(window._App._Bg._Main._cameraRot - 90) / 180 * Math.PI,
            window._App._Bg._Main._cameraRot -= .1,
            window._App._Bg._Main._cameraRot <= -360 && (window._App._Bg._Main._cameraRot = 0)
        }
        ,
        t.prototype.orbitMoveCamera1 = function() {
            window._App._Bg._Main._assets.rotation.y = -(window._App._Bg._Main._cameraRot - 90) / 180 * Math.PI / 8,
            window._App._Bg._Main._assets.rotation.z = -(window._App._Bg._Main._cameraRot - 90) / 180 * Math.PI,
            window._App._Bg._Main._cameraRot -= .1,
            window._App._Bg._Main._cameraRot <= -360 && (window._App._Bg._Main._cameraRot = 0)
        }
        ,
        t.prototype.orbitMoveCamera2 = function() {
            window._App._Bg._Main._TilingMesh.rotation.y = (window._App._Bg._Main._cameraRot - 0) / 180 * Math.PI,
            window._App._Bg._Main._TilingMeshBlue.rotation.y = (window._App._Bg._Main._cameraRot - 0) / 180 * Math.PI,
            window._App._Bg._Main._cameraRot -= .1,
            window._App._Bg._Main._cameraRot <= -360 && (window._App._Bg._Main._cameraRot = 0)
        }
        ,
        t.prototype.orbitMoveCamera3 = function() {
            window._App._Bg._Main._TilingMesh.rotation.y = (window._App._Bg._Main._cameraRot - 40) / 180 * Math.PI,
            window._App._Bg._Main._TilingMeshBlue.rotation.y = (window._App._Bg._Main._cameraRot - 40) / 180 * Math.PI,
            window._App._Bg._Main._cameraRot -= .1,
            window._App._Bg._Main._cameraRot <= -360 && (window._App._Bg._Main._cameraRot = 0)
        }
        ,
        t.prototype.resizeEv = function(t) {
            window._App._Bg._Main.resizeAc()
        }
        ,
        t.prototype.resizeAc = function() {
            var t, e;
            e = (t = window._App._util.targetResize(window._App._canvas)).width,
            t.height,
            this._TilingMesh && this._TilingMeshBlue && "top" === window._App._scene._currentScene && (this._TilingMesh.position.x = .03 * -e,
            this._TilingMeshBlue.position.x = .03 * e),
            e / devicePixelRatio <= window._App._global._mediaQuery_middle ? ("SP" !== this._layoutType && (this._layoutType = "SP",
            this.changeLayout()),
            this._layoutType = "SP") : e / devicePixelRatio <= window._App._global._mediaQuery_large ? ("TB" !== this._layoutType && (this._layoutType = "TB",
            this.changeLayout()),
            this._layoutType = "TB") : ("PC" !== this._layoutType && (this._layoutType = "PC",
            this.changeLayout()),
            this._layoutType = "PC")
        }
        ,
        t.prototype.changeLayout = function() {
            "top" !== window._App._scene._currentScene && "PC" !== this._layoutType ? (TweenMax.to([this._assets.scale], 1, {
                x: .5,
                y: .5,
                z: .5,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to([this._assets.position], 1, {
                x: -80,
                y: 80,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            })) : (TweenMax.to([this._assets.scale], 1, {
                x: 1,
                y: 1,
                z: 1,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to([this._assets.position], 1, {
                x: 0,
                y: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }))
        }
        ,
        t
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.ThreeJs = function(e) {
        function i() {
            this._threejs = null,
            this._scene = null,
            this._camera = null,
            this._composer = null,
            this._renderer = null,
            this._controls = null,
            this._canvas = null,
            this._lookFlg = !1,
            this._hemisphereLight = null,
            this._ambientLight = null,
            this._directionalLight = null,
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t, e, i;
            i = this,
            this.addEventListener("added", function(t) {
                i.addedAC()
            }),
            this.addEventListener("removed", function(t) {
                i.removedAC()
            }),
            this._threejs = document.getElementById("ThreeJSContainer"),
            e = window._App._util.targetResize(window._App._canvas),
            this._camera = new THREE.PerspectiveCamera(35,e.width / e.height,1,6e3),
            this._camera.position.x = 0,
            this._camera.position.y = 0,
            this._camera.position.z = 400,
            this._scene = new THREE.Scene;
            try {
                this._renderer = new THREE.WebGLRenderer({
                    antialias: !0,
                    preserveDrawingBuffer: !1,
                    alpha: !1
                })
            } catch (t) {
                t,
                this._renderer = new THREE.CanvasRenderer
            }
            this._renderer.shadowMap.enabled = !0,
            this._renderer.autoClear = !0,
            this._renderer.setClearColor(15921906, 1),
            this._renderer.setPixelRatio(window.devicePixelRatio),
            this._renderer.setSize(e.width, e.height),
            this._threejs.appendChild(this._renderer.domElement),
            t = document.getElementById("CanvasContainer"),
            window._App._global._debugMode && (this._controls = new THREE.TrackballControls(this._camera,t),
            this._controls.zoomSpeed = .02),
            $(this._threejs).css("visibility", "hidden")
        }
        ,
        i.prototype.addedAC = function() {
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc(),
            this.renderStart(),
            $(this._threejs).css("visibility", "visible")
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !1
            }, 1e3, createjs.Ease.quartOut).call(function() {
                t.toRemoveComplete()
            })
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this.renderStop(),
            $(this._threejs).css("visibility", "hidden"),
            this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.renderStart = function() {
            createjs.Ticker.addEventListener("tick", this.rendering)
        }
        ,
        i.prototype.renderStop = function() {
            createjs.Ticker.removeEventListener("tick", this.rendering)
        }
        ,
        i.prototype.rendering = function() {
            window._App._Threejs.render()
        }
        ,
        i.prototype.render = function() {
            window._App._global._debugMode && this._controls.update(),
            this._renderer.render(this._scene, this._camera)
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._Threejs.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            var t, e, i;
            i = (t = window._App._util.targetResize(window._App._canvas)).width,
            e = t.height,
            this._camera.aspect = i / e,
            this._camera.updateProjectionMatrix(),
            this._renderer.setSize(i / devicePixelRatio, e / devicePixelRatio),
            window._App._global._debugMode && this._controls.handleResize()
        }
        ,
        i
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.TilingMesh = function(e) {
        function i(t, e, i, o, s) {
            this._assets = null,
            this._numImages = t,
            this._imageW = e,
            this._imageH = i,
            this._vertexShader = o,
            this._fragmentShader = s,
            this.material = null,
            this.geometry = null,
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, THREE.Mesh),
        i.prototype.init = function() {
            this.geometry = new TilingMeshGeometry(this._numImages,this._imageW,this._imageH),
            this.material = new THREE.RawShaderMaterial({
                transparent: !0,
                wireframe: !1,
                side: THREE.DoubleSide,
                uniforms: {
                    imageTexture: {
                        type: "t"
                    },
                    time: {
                        type: "1f",
                        value: 0
                    },
                    numImages: {
                        type: "1f",
                        value: this._numImages
                    },
                    animationValue1: {
                        type: "1f",
                        value: 0
                    },
                    animationValue2: {
                        type: "1f",
                        value: 0
                    },
                    animationValue3: {
                        type: "1f",
                        value: 0
                    },
                    animationValue4: {
                        type: "1f",
                        value: 0
                    },
                    animationValue5: {
                        type: "1f",
                        value: 0
                    },
                    animationValue6: {
                        type: "1f",
                        value: 0
                    },
                    _colorHSV: {
                        type: "v3",
                        value: new THREE.Vector3(.06,.92,.97)
                    }
                },
                vertexShader: this._vertexShader,
                fragmentShader: this._fragmentShader
            }),
            THREE.Mesh.call(this, this.geometry, this.material)
        }
        ,
        i.prototype.update = function() {
            this.material.uniforms.time.value += .001
        }
        ,
        i.prototype.createTexture = function(t) {
            this.material.uniforms.imageTexture.value = t
        }
        ,
        i.prototype.setUniform = function(t, e) {
            this.material.uniforms[t].value = e
        }
        ,
        i
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.TilingMeshGeometry = function(e) {
        function i(t, e, i) {
            THREE.BufferGeometry.call(this),
            this.numImages = t,
            this.imageWidth = e / 100,
            this.imageHeight = i / 100,
            this.vertices = [],
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, THREE.BufferGeometry),
        i.prototype.init = function() {
            var t, e, i, o, s, n, a, r, l, h, p, c, d;
            for (this.vertices = [],
            s = [],
            h = [],
            p = [],
            r = [],
            n = [],
            this.imageWidth,
            o = this.imageHeight,
            i = this.imageWidth / 2,
            e = o / 2,
            t = c = 0,
            d = this.numImages - 1; 0 <= d ? c <= d : c >= d; t = 0 <= d ? ++c : --c)
                l = [Math.random(), Math.random(), Math.random()],
                this.vertices.push(-i),
                this.vertices.push(e),
                this.vertices.push(0),
                p.push(0),
                p.push(0),
                s.push(t),
                h.push(l[0]),
                h.push(l[1]),
                h.push(l[2]),
                this.vertices.push(i),
                this.vertices.push(e),
                this.vertices.push(0),
                p.push(1),
                p.push(0),
                s.push(t),
                h.push(l[0]),
                h.push(l[1]),
                h.push(l[2]),
                this.vertices.push(-i),
                this.vertices.push(-e),
                this.vertices.push(0),
                p.push(0),
                p.push(1),
                s.push(t),
                h.push(l[0]),
                h.push(l[1]),
                h.push(l[2]),
                this.vertices.push(i),
                this.vertices.push(-e),
                this.vertices.push(0),
                p.push(1),
                p.push(1),
                s.push(t),
                h.push(l[0]),
                h.push(l[1]),
                h.push(l[2]),
                a = 4 * t,
                r.push(a + 0),
                r.push(a + 2),
                r.push(a + 1),
                r.push(a + 2),
                r.push(a + 3),
                r.push(a + 1),
                window._App._Bg._Main._point[t] ? (n.push(window._App._Bg._Main._point[t].x),
                n.push(window._App._Bg._Main._point[t].y),
                n.push(1),
                n.push(window._App._Bg._Main._point[t].x),
                n.push(window._App._Bg._Main._point[t].y),
                n.push(1),
                n.push(window._App._Bg._Main._point[t].x),
                n.push(window._App._Bg._Main._point[t].y),
                n.push(1),
                n.push(window._App._Bg._Main._point[t].x),
                n.push(window._App._Bg._Main._point[t].y),
                n.push(1)) : (n.push(1e3 * l[0]),
                n.push(1e4),
                n.push(1e3 * l[2]),
                n.push(1e3 * l[0]),
                n.push(1e4),
                n.push(1e3 * l[2]),
                n.push(1e3 * l[0]),
                n.push(1e4),
                n.push(1e3 * l[2]),
                n.push(1e3 * l[0]),
                n.push(1e4),
                n.push(1e3 * l[2]));
            this.addAttribute("position", new THREE.BufferAttribute(new Float32Array(this.vertices),3)),
            this.addAttribute("randomValues", new THREE.BufferAttribute(new Float32Array(h),3)),
            this.addAttribute("imageIndex", new THREE.BufferAttribute(new Float32Array(s),1)),
            this.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(p),2)),
            this.addAttribute("imgPosition", new THREE.BufferAttribute(new Float32Array(n),3)),
            this.setIndex(new THREE.BufferAttribute(new Uint16Array(r),1)),
            this.computeVertexNormals()
        }
        ,
        i
    }()
}
.call(this),
function() {
    this.GlobalNaviNavi = function() {
        function t(t, e) {
            this._obj = t,
            this._num = e,
            this.init()
        }
        return t.prototype.init = function() {
            var t;
            t = this,
            this._obj.on("mouseenter", function(e) {
                t._onRollOver(e)
            }),
            this._obj.on("mouseleave", function(e) {
                t._onRollOut(e)
            }),
            this._obj.on("click", function(e) {
                t._onCLICK(e)
            })
        }
        ,
        t.prototype._onRollOver = function(t) {
            document.body.style.cursor = "pointer"
        }
        ,
        t.prototype._onRollOut = function(t) {
            document.body.style.cursor = ""
        }
        ,
        t.prototype._onCLICK = function(t) {
            1 === this._num ? window._App._router.change("/about") : 2 === this._num ? window._App._router.change("/mission1") : 3 === this._num ? window._App._router.change("/profile1") : 4 === this._num && window._App._router.change("/contact")
        }
        ,
        t
    }()
}
.call(this),
function() {
    this.HeaderContact = function() {
        function t(t) {
            this._obj = t,
            this._txtEfect = null,
            this.init()
        }
        return t.prototype.init = function() {
            var t;
            t = this,
            this._txtEfect = new ShuffleText(document.querySelector("#GlobalHeader .contact a")),
            this._txtEfect.emptyCharacter = "",
            this._obj.on("mouseenter", function(e) {
                t._onRollOver(e)
            }),
            this._obj.on("mouseleave", function(e) {
                t._onRollOut(e)
            }),
            this._obj.on("click", function(e) {
                t._onCLICK(e)
            })
        }
        ,
        t.prototype._onRollOver = function(t) {
            document.body.style.cursor = "pointer",
            $("#GlobalHeader .contact").css({
                height: $("#GlobalHeader .contact").height() + "px"
            }),
            this._txtEfect.start(),
            TweenMax.to(this, .6, {
                onComplete: function() {
                    $("#GlobalHeader .contact").css({
                        height: "auto"
                    })
                },
                overwrite: 1,
                ease: Expo.easeOut
            })
        }
        ,
        t.prototype._onRollOut = function(t) {
            document.body.style.cursor = ""
        }
        ,
        t.prototype._onCLICK = function(t) {}
        ,
        t
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.Contact = function(e) {
        function i() {
            this._assets = null,
            this._$target = null,
            this._brightness = 100,
            this._txtEfect = [],
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t;
            t = this,
            this._assets = new createjs.MovieClip,
            this.addChild(this._assets),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/contact/catch.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/contact/ico_mail.png"),
            $("#Container").append(window._PageData._contact),
            this._$target = $("#Contact"),
            TweenMax.set(this._$target, {
                autoAlpha: 0,
                display: "none"
            }),
            this._txtEfect.ttl = new ShuffleText(document.querySelector("#Contact .ttl")),
            this._txtEfect.list1_dt = new ShuffleText(document.querySelector("#Contact .list1 dt")),
            this._txtEfect.list1_dd = new ShuffleText(document.querySelector("#Contact .list1 dd")),
            this._txtEfect.list2_dt = new ShuffleText(document.querySelector("#Contact .list2 dt")),
            this._txtEfect.list2_dd = new ShuffleText(document.querySelector("#Contact .list2 dd")),
            this._txtEfect.list3_dt = new ShuffleText(document.querySelector("#Contact .list3 dt")),
            this._txtEfect.list3_dd = new ShuffleText(document.querySelector("#Contact .list3 dd")),
            this._txtEfect.list4_dt = new ShuffleText(document.querySelector("#Contact .list4 dt")),
            this._txtEfect.list4_dd = new ShuffleText(document.querySelector("#Contact .list4 dd")),
            this._txtEfect.bt = new ShuffleText(document.querySelector("#Contact .bt a span")),
            this._txtEfect.ttl.emptyCharacter = "",
            this._txtEfect.list1_dt.emptyCharacter = "",
            this._txtEfect.list1_dd.emptyCharacter = "",
            this._txtEfect.list2_dt.emptyCharacter = "",
            this._txtEfect.list2_dd.emptyCharacter = "",
            this._txtEfect.list3_dt.emptyCharacter = "",
            this._txtEfect.list3_dd.emptyCharacter = "",
            this._txtEfect.list4_dt.emptyCharacter = "",
            this._txtEfect.list4_dd.emptyCharacter = "",
            this._txtEfect.bt.emptyCharacter = "",
            TweenMax.set([$("#Contact .right-box")], {
                "-webkit-filter": "brightness(" + t._brightness + "%)",
                filter: "brightness(" + t._brightness + "%)"
            }),
            new ContactNavi($("#Contact .bt")),
            this.addEventListener("added", function(e) {
                t.addedAC()
            }),
            this.addEventListener("removed", function(e) {
                t.removedAC()
            }),
            window._App._Loader._lenNum++,
            $("body").append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7S-GLyx5bq5q3r51MNZ8alsY3OcO1HmY&amp;callback=window._App._Contact.initGmap" async defer><\/script>')
        }
        ,
        i.prototype.initGmap = function() {
            var t;
            window._App._Loader._compNum++,
            t = {
                lat: "34.774308, 135.511062"
            },
            window._App._util.setGmap(t)
        }
        ,
        i.prototype.addedAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            TweenMax.set(this._$target, {
                display: "block"
            }),
            TweenMax.to(this._$target, 1, {
                autoAlpha: 1,
                delay: 0,
                ease: Expo.easeOut
            }),
            $("#Contact .left-box .txts").css({
                height: $("#Contact .left-box .txts").height() + "px"
            }),
            $("#Contact .left-box .ttl").css({
                height: $("#Contact .left-box .ttl").height() + "px"
            }),
            $("#Contact .left-box .list1").css({
                height: $("#Contact .left-box .list1").height() + "px"
            }),
            $("#Contact .left-box .list2").css({
                height: $("#Contact .left-box .list2").height() + "px"
            }),
            $("#Contact .left-box .list3").css({
                height: $("#Contact .left-box .list3").height() + "px"
            }),
            $("#Contact .left-box .list4").css({
                height: $("#Contact .left-box .list4").height() + "px"
            }),
            $("#Contact .left-box .bt").css({
                height: $("#Contact .left-box .bt").height() + "px"
            }),
            this._txtEfect.ttl.start(),
            this._txtEfect.list1_dt.start(),
            this._txtEfect.list1_dd.start(),
            this._txtEfect.list2_dt.start(),
            this._txtEfect.list2_dd.start(),
            this._txtEfect.list3_dt.start(),
            this._txtEfect.list3_dd.start(),
            this._txtEfect.list4_dt.start(),
            this._txtEfect.list4_dd.start(),
            this._txtEfect.bt.start(),
            this._brightness = 300,
            TweenMax.set([$("#Contact .right-box")], {
                "-webkit-filter": "brightness(" + t._brightness + "%)",
                filter: "brightness(" + t._brightness + "%)"
            }),
            TweenMax.to(this, 1, {
                _brightness: 100,
                onUpdate: function() {
                    return TweenMax.set([$("#Contact .right-box")], {
                        "-webkit-filter": "brightness(" + t._brightness + "%)",
                        filter: "brightness(" + t._brightness + "%)"
                    })
                },
                ease: Expo.easeOut
            }),
            TweenMax.to(this, 1, {
                onComplete: function() {
                    $("#Contact .left-box .txts").css({
                        height: "auto"
                    }),
                    $("#Contact .left-box .ttl").css({
                        height: "auto"
                    }),
                    $("#Contact .left-box .list1").css({
                        height: "auto"
                    }),
                    $("#Contact .left-box .list2").css({
                        height: "auto"
                    }),
                    $("#Contact .left-box .list3").css({
                        height: "auto"
                    }),
                    $("#Contact .left-box .list4").css({
                        height: "auto"
                    }),
                    $("#Contact .left-box .bt").css({
                        height: "auto"
                    })
                },
                ease: Expo.easeOut
            }),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !1
            }, 600, createjs.Ease.quartOut).call(function() {
                t.toRemoveComplete()
            }),
            TweenMax.to(this._$target, .6, {
                autoAlpha: 0,
                display: "none",
                delay: 0,
                ease: Expo.easeOut
            })
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this.parent && this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.sceneChange = function() {}
        ,
        i.prototype.sceneChangeEnd = function() {
            window._App
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._Contact.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            window._App._util.targetResize(window._App._canvas)
        }
        ,
        i
    }()
}
.call(this),
function() {
    this.ContactNavi = function() {
        function t(t) {
            this._obj = t,
            this._txtEfect = null,
            this.init()
        }
        return t.prototype.init = function() {
            var t;
            t = this,
            this._txtEfect = new ShuffleText(document.querySelector("#Contact .bt a span")),
            this._txtEfect.emptyCharacter = "",
            this._obj.on("mouseenter", function(e) {
                t._onRollOver(e)
            }),
            this._obj.on("mouseleave", function(e) {
                t._onRollOut(e)
            }),
            this._obj.on("click", function(e) {
                t._onCLICK(e)
            })
        }
        ,
        t.prototype._onRollOver = function(t) {
            document.body.style.cursor = "pointer",
            $("#Contact .bt").css({
                height: $("#Contact .bt").height() + "px"
            }),
            this._txtEfect.start(),
            TweenMax.to(this, .6, {
                alpha: 100,
                onComplete: function() {
                    $("#Contact .bt").css({
                        height: "auto"
                    })
                },
                overwrite: 1,
                ease: Expo.easeOut
            })
        }
        ,
        t.prototype._onRollOut = function(t) {
            document.body.style.cursor = ""
        }
        ,
        t.prototype._onCLICK = function(t) {}
        ,
        t
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.Mission1 = function(e) {
        function i() {
            this._assets = null,
            this._$target = null,
            this._txtEfect = [],
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t;
            t = this,
            this._assets = new createjs.MovieClip,
            this.addChild(this._assets),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/common/list_ico.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/mission/catch.png"),
            $("#Container").append(window._PageData._mission1),
            this._$target = $("#Mission1"),
            TweenMax.set(this._$target, {
                autoAlpha: 0,
                display: "none"
            }),
            this._txtEfect.ttl = new ShuffleText(document.querySelector("#Mission1 .ttl")),
            this._txtEfect.txt = new ShuffleText(document.querySelector("#Mission1 .txt")),
            this._txtEfect.list1_dt = new ShuffleText(document.querySelector("#Mission1 .list1 dt")),
            this._txtEfect.list1_dd = new ShuffleText(document.querySelector("#Mission1 .list1 dd")),
            this._txtEfect.list2_dt = new ShuffleText(document.querySelector("#Mission1 .list2 dt")),
            this._txtEfect.list2_dd = new ShuffleText(document.querySelector("#Mission1 .list2 dd")),
            this._txtEfect.list3_dt = new ShuffleText(document.querySelector("#Mission1 .list3 dt")),
            this._txtEfect.list3_dd = new ShuffleText(document.querySelector("#Mission1 .list3 dd")),
            this._txtEfect.list4_dt = new ShuffleText(document.querySelector("#Mission1 .list4 dt")),
            this._txtEfect.list4_dd = new ShuffleText(document.querySelector("#Mission1 .list4 dd")),
            this._txtEfect.list5_dt = new ShuffleText(document.querySelector("#Mission1 .list5 dt")),
            this._txtEfect.list5_dd = new ShuffleText(document.querySelector("#Mission1 .list5 dd")),
            this._txtEfect.ttl.emptyCharacter = "",
            this._txtEfect.txt.emptyCharacter = "",
            this._txtEfect.list1_dt.emptyCharacter = "",
            this._txtEfect.list1_dd.emptyCharacter = "",
            this._txtEfect.list2_dt.emptyCharacter = "",
            this._txtEfect.list2_dd.emptyCharacter = "",
            this._txtEfect.list3_dt.emptyCharacter = "",
            this._txtEfect.list3_dd.emptyCharacter = "",
            this._txtEfect.list4_dt.emptyCharacter = "",
            this._txtEfect.list4_dd.emptyCharacter = "",
            this._txtEfect.list5_dt.emptyCharacter = "",
            this._txtEfect.list5_dd.emptyCharacter = "",
            this.addEventListener("added", function(e) {
                t.addedAC()
            }),
            this.addEventListener("removed", function(e) {
                t.removedAC()
            })
        }
        ,
        i.prototype.addedAC = function() {
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            TweenMax.set(this._$target, {
                display: "block"
            }),
            TweenMax.to(this._$target, 1, {
                autoAlpha: 1,
                delay: 0,
                ease: Expo.easeOut
            }),
            $("#Mission1 .left-box .txts").css({
                height: $("#Mission1 .left-box .txts").height() + "px"
            }),
            $("#Mission1 .left-box .ttl").css({
                height: $("#Mission1 .left-box .ttl").height() + "px"
            }),
            $("#Mission1 .left-box .txt").css({
                height: $("#Mission1 .left-box .txt").height() + "px"
            }),
            $("#Mission1 .left-box .list1").css({
                height: $("#Mission1 .left-box .list1").height() + "px"
            }),
            $("#Mission1 .left-box .list2").css({
                height: $("#Mission1 .left-box .list2").height() + "px"
            }),
            $("#Mission1 .left-box .list3").css({
                height: $("#Mission1 .left-box .list3").height() + "px"
            }),
            $("#Mission1 .left-box .list4").css({
                height: $("#Mission1 .left-box .list4").height() + "px"
            }),
            $("#Mission1 .left-box .list5").css({
                height: $("#Mission1 .left-box .list5").height() + "px"
            }),
            this._txtEfect.ttl.start(),
            this._txtEfect.txt.start(),
            this._txtEfect.list1_dt.start(),
            this._txtEfect.list1_dd.start(),
            this._txtEfect.list2_dt.start(),
            this._txtEfect.list2_dd.start(),
            this._txtEfect.list3_dt.start(),
            this._txtEfect.list3_dd.start(),
            this._txtEfect.list4_dt.start(),
            this._txtEfect.list4_dd.start(),
            this._txtEfect.list5_dt.start(),
            this._txtEfect.list5_dd.start(),
            TweenMax.to(this, 1, {
                onComplete: function() {
                    $("#Mission1 .left-box .txts").css({
                        height: "auto"
                    }),
                    $("#Mission1 .left-box .ttl").css({
                        height: "auto"
                    }),
                    $("#Mission1 .left-box .txt").css({
                        height: "auto"
                    }),
                    $("#Mission1 .left-box .list1").css({
                        height: "auto"
                    }),
                    $("#Mission1 .left-box .list2").css({
                        height: "auto"
                    }),
                    $("#Mission1 .left-box .list3").css({
                        height: "auto"
                    }),
                    $("#Mission1 .left-box .list4").css({
                        height: "auto"
                    }),
                    $("#Mission1 .left-box .list5").css({
                        height: "auto"
                    })
                },
                ease: Expo.easeOut
            }),
            this._scrollTween && this._scrollTween.kill(),
            this._scrollTween = new TimelineMax,
            this._scrollTween.to($("#Mission1 .scroll .line2"), 0, {
                scaleY: 0,
                transformOrigin: "50% 0",
                ease: Expo.easeOut
            }).to($("#Mission1 .scroll .line2"), 1, {
                scaleY: 1,
                ease: Expo.easeOut
            }).to($("#Mission1 .scroll .line2"), 0, {
                scaleY: 1,
                transformOrigin: "50% 100%",
                ease: Expo.easeOut
            }).to($("#Mission1 .scroll .line2"), 1, {
                scaleY: 0,
                ease: Expo.easeOut
            }),
            this._scrollTween.repeat(-1),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !1
            }, 600, createjs.Ease.quartOut).call(function() {
                t.toRemoveComplete()
            }),
            TweenMax.to(this._$target, .6, {
                autoAlpha: 0,
                display: "none",
                delay: 0,
                ease: Expo.easeOut
            })
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this.parent && this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.sceneChange = function() {}
        ,
        i.prototype.sceneChangeEnd = function() {
            window._App
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._Mission1.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            window._App._util.targetResize(window._App._canvas)
        }
        ,
        i
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.Mission2 = function(e) {
        function i() {
            this._assets = null,
            this._$target = null,
            this._txtEfect = [],
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t;
            t = this,
            this._assets = new createjs.MovieClip,
            this.addChild(this._assets),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/mission/ico_mission1.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/mission/ico_mission2.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/mission/ico_mission3.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/mission/ico_mission4.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/mission/ico_mission5.png"),
            $("#Container").append(window._PageData._mission2),
            this._$target = $("#Mission2"),
            TweenMax.set(this._$target, {
                autoAlpha: 0,
                display: "none"
            }),
            this._txtEfect.ttl = new ShuffleText(document.querySelector("#Mission2 .ttl")),
            this._txtEfect.lists1_dd1 = new ShuffleText(document.querySelector("#Mission2 .lists1 .list1 dd")),
            this._txtEfect.lists1_dd2 = new ShuffleText(document.querySelector("#Mission2 .lists1 .list2 dd")),
            this._txtEfect.lists1_dd3 = new ShuffleText(document.querySelector("#Mission2 .lists1 .list3 dd")),
            this._txtEfect.lists2_dd1 = new ShuffleText(document.querySelector("#Mission2 .lists2 .list1 dd")),
            this._txtEfect.lists2_dd2 = new ShuffleText(document.querySelector("#Mission2 .lists2 .list2 dd")),
            this._txtEfect.lists3_list1 = new ShuffleText(document.querySelector("#Mission2 .lists3 .list .line1")),
            this._txtEfect.lists3_list2 = new ShuffleText(document.querySelector("#Mission2 .lists3 .list .line2")),
            this._txtEfect.ttl.emptyCharacter = "",
            this._txtEfect.lists1_dd1.emptyCharacter = "",
            this._txtEfect.lists1_dd2.emptyCharacter = "",
            this._txtEfect.lists1_dd3.emptyCharacter = "",
            this._txtEfect.lists2_dd1.emptyCharacter = "",
            this._txtEfect.lists2_dd2.emptyCharacter = "",
            this._txtEfect.lists3_list1.emptyCharacter = "",
            this._txtEfect.lists3_list2.emptyCharacter = "",
            this.addEventListener("added", function(e) {
                t.addedAC()
            }),
            this.addEventListener("removed", function(e) {
                t.removedAC()
            })
        }
        ,
        i.prototype.addedAC = function() {
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            TweenMax.set(this._$target, {
                display: "block"
            }),
            TweenMax.to(this._$target, 1, {
                autoAlpha: 1,
                delay: 0,
                ease: Expo.easeOut
            }),
            $("#Mission2 .left-box .txts").css({
                height: $("#Mission2 .left-box .txts").height() + "px"
            }),
            $("#Mission2 .left-box .ttl").css({
                height: $("#Mission2 .left-box .ttl").height() + "px"
            }),
            $("#Mission2 .lists1 .list1 dd").css({
                height: $("#Mission2 .lists1 .list1 dd").height() + "px"
            }),
            $("#Mission2 .lists1 .list2 dd").css({
                height: $("#Mission2 .lists2 .list1 dd").height() + "px"
            }),
            $("#Mission2 .lists1 .list3 dd").css({
                height: $("#Mission2 .lists3 .list1 dd").height() + "px"
            }),
            $("#Mission2 .lists2 .list1 dd").css({
                height: $("#Mission2 .lists2 .list1 dd").height() + "px"
            }),
            $("#Mission2 .lists2 .list2 dd").css({
                height: $("#Mission2 .lists2 .list1 dd").height() + "px"
            }),
            $("#Mission2 .lists3 .list").css({
                height: $("#Mission2 .lists3 .list").height() + "px"
            }),
            this._txtEfect.ttl.start(),
            this._txtEfect.lists1_dd1.start(),
            this._txtEfect.lists1_dd2.start(),
            this._txtEfect.lists1_dd3.start(),
            this._txtEfect.lists2_dd1.start(),
            this._txtEfect.lists2_dd2.start(),
            this._txtEfect.lists3_list1.start(),
            this._txtEfect.lists3_list2.start(),
            TweenMax.to(this, 1, {
                onComplete: function() {
                    $("#Mission2 .left-box .txts").css({
                        height: "auto"
                    }),
                    $("#Mission2 .left-box .ttl").css({
                        height: "auto"
                    }),
                    $("#Mission2 .lists1 .list1 dd").css({
                        height: "auto"
                    }),
                    $("#Mission2 .lists1 .list2 dd").css({
                        height: "auto"
                    }),
                    $("#Mission2 .lists1 .list3 dd").css({
                        height: "auto"
                    }),
                    $("#Mission2 .lists2 .list1 dd").css({
                        height: "auto"
                    }),
                    $("#Mission2 .lists2 .list2 dd").css({
                        height: "auto"
                    }),
                    $("#Mission2 .lists3 .list").css({
                        height: "auto"
                    })
                },
                ease: Expo.easeOut
            }),
            this._scrollTween && this._scrollTween.kill(),
            this._scrollTween = new TimelineMax,
            this._scrollTween.to($("#Mission2 .scroll .line2"), 0, {
                scaleY: 0,
                transformOrigin: "50% 0",
                ease: Expo.easeOut
            }).to($("#Mission2 .scroll .line2"), 1, {
                scaleY: 1,
                ease: Expo.easeOut
            }).to($("#Mission2 .scroll .line2"), 0, {
                scaleY: 1,
                transformOrigin: "50% 100%",
                ease: Expo.easeOut
            }).to($("#Mission2 .scroll .line2"), 1, {
                scaleY: 0,
                ease: Expo.easeOut
            }),
            this._scrollTween.repeat(-1),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !1
            }, 600, createjs.Ease.quartOut).call(function() {
                t.toRemoveComplete()
            }),
            TweenMax.to(this._$target, .6, {
                autoAlpha: 0,
                display: "none",
                delay: 0,
                ease: Expo.easeOut
            })
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this.parent && this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.sceneChange = function() {}
        ,
        i.prototype.sceneChangeEnd = function() {
            window._App
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._Mission2.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            window._App._util.targetResize(window._App._canvas)
        }
        ,
        i
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.Profile1 = function(e) {
        function i() {
            this._assets = null,
            this._$target = null,
            this._brightness = 100,
            this._txtEfect = [],
            this._txtTween = null,
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t;
            t = this,
            this._assets = new createjs.MovieClip,
            this.addChild(this._assets),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/profile/catch1.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/profile/pic1.jpg"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/profile/people1.png"),
            $("#Container").append(window._PageData._profile1),
            this._$target = $("#Profile1"),
            TweenMax.set(this._$target, {
                autoAlpha: 0,
                display: "none"
            }),
            this._txtEfect.ttl = new ShuffleText(document.querySelector("#Profile1 .ttl")),
            this._txtEfect.name1 = new ShuffleText(document.querySelector("#Profile1 .name dt")),
            this._txtEfect.name2 = new ShuffleText(document.querySelector("#Profile1 .name dd")),
            this._txtEfect.about = new ShuffleText(document.querySelector("#Profile1 .about")),
            this._txtEfect.career = new ShuffleText(document.querySelector("#Profile1 .career")),
            this._txtEfect.ttl.emptyCharacter = "",
            this._txtEfect.name1.emptyCharacter = "",
            this._txtEfect.name2.emptyCharacter = "",
            this._txtEfect.about.emptyCharacter = "",
            this._txtEfect.career.emptyCharacter = "",
            this._txtEfect.ttl.duration = 600,
            this._txtEfect.name1.duration = 600,
            this._txtEfect.name2.duration = 600,
            this._txtEfect.about.duration = 600,
            this._txtEfect.career.duration = 600,
            TweenMax.set([$("#Profile1 .people"), $("#Profile1 .right-box")], {
                "-webkit-filter": "brightness(" + t._brightness + "%)",
                filter: "brightness(" + t._brightness + "%)"
            }),
            this.addEventListener("added", function(e) {
                t.addedAC()
            }),
            this.addEventListener("removed", function(e) {
                t.removedAC()
            })
        }
        ,
        i.prototype.addedAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 1,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            TweenMax.set(this._$target, {
                display: "block"
            }),
            TweenMax.to(this._$target, 1, {
                autoAlpha: 1,
                delay: 0,
                ease: Expo.easeOut
            }),
            $("#Profile1 .left-box .txts").css({
                height: $("#Profile1 .left-box .txts").height() + "px"
            }),
            $("#Profile1 .left-box .ttl").css({
                height: $("#Profile1 .left-box .ttl").height() + "px"
            }),
            $("#Profile1 .left-box .name1").css({
                height: $("#Profile1 .left-box .name1").height() + "px"
            }),
            $("#Profile1 .left-box .name2").css({
                height: $("#Profile1 .left-box .name2").height() + "px"
            }),
            $("#Profile1 .left-box .about").css({
                height: $("#Profile1 .left-box .about").height() + "px"
            }),
            $("#Profile1 .left-box .career").css({
                height: $("#Profile1 .left-box .career").height() + "px"
            }),
            this._txtEfect.ttl.start(),
            this._txtEfect.name1.start(),
            this._txtEfect.name2.start(),
            this._txtEfect.about.start(),
            this._txtEfect.career.start(),
            "edge" !== window._App._util.targetBrowser() && (this._txtEfect.pic.stop(),
            this._txtEfect.pic.start()),
            this._brightness = 300,
            TweenMax.set([$("#Profile1 .people"), $("#Profile1 .right-box")], {
                "-webkit-filter": "brightness(" + t._brightness + "%)",
                filter: "brightness(" + t._brightness + "%)"
            }),
            TweenMax.to(this, 1, {
                _brightness: 100,
                onUpdate: function() {
                    TweenMax.set([$("#Profile1 .people"), $("#Profile1 .right-box")], {
                        "-webkit-filter": "brightness(" + t._brightness + "%)",
                        filter: "brightness(" + t._brightness + "%)"
                    })
                }
            }),
            TweenMax.to(this, 1, {
                onComplete: function() {
                    $("#Profile1 .left-box .txts").css({
                        height: "auto"
                    }),
                    $("#Profile1 .left-box .ttl").css({
                        height: "auto"
                    }),
                    $("#Profile1 .left-box .name1").css({
                        height: "auto"
                    }),
                    $("#Profile1 .left-box .name2").css({
                        height: "auto"
                    }),
                    $("#Profile1 .left-box .about").css({
                        height: "auto"
                    }),
                    $("#Profile1 .left-box .career").css({
                        height: "auto"
                    })
                },
                ease: Expo.easeOut
            }),
            this._scrollTween && this._scrollTween.kill(),
            this._scrollTween = new TimelineMax,
            this._scrollTween.to($("#Profile1 .scroll .line2"), 0, {
                scaleY: 0,
                transformOrigin: "50% 0",
                ease: Expo.easeOut
            }).to($("#Profile1 .scroll .line2"), 1, {
                scaleY: 1,
                ease: Expo.easeOut
            }).to($("#Profile1 .scroll .line2"), 0, {
                scaleY: 1,
                transformOrigin: "50% 100%",
                ease: Expo.easeOut
            }).to($("#Profile1 .scroll .line2"), 1, {
                scaleY: 0,
                ease: Expo.easeOut
            }),
            this._scrollTween.repeat(-1),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !1
            }, 600, createjs.Ease.quartOut).call(function() {
                t.toRemoveComplete()
            }),
            TweenMax.to(this._$target, .6, {
                autoAlpha: 0,
                display: "none",
                delay: 0,
                ease: Expo.easeOut
            })
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this._txtEfect.pic.stop(),
            this.parent && this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.sceneChange = function() {}
        ,
        i.prototype.sceneChangeEnd = function() {
            window._App
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._Profile1.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            window._App._util.targetResize(window._App._canvas)
        }
        ,
        i
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.Profile2 = function(e) {
        function i() {
            this._assets = null,
            this._$target = null,
            this._brightness = 100,
            this._txtEfect = [],
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t;
            t = this,
            this._assets = new createjs.MovieClip,
            this.addChild(this._assets),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/profile/catch2.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/profile/pic2.jpg"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/profile/people2.png"),
            $("#Container").append(window._PageData._profile2),
            this._$target = $("#Profile2"),
            TweenMax.set(this._$target, {
                autoAlpha: 0,
                display: "none"
            }),
            this._txtEfect.ttl = new ShuffleText(document.querySelector("#Profile2 .ttl")),
            this._txtEfect.name1 = new ShuffleText(document.querySelector("#Profile2 .name dt")),
            this._txtEfect.name2 = new ShuffleText(document.querySelector("#Profile2 .name dd")),
            this._txtEfect.about = new ShuffleText(document.querySelector("#Profile2 .about")),
            this._txtEfect.career = new ShuffleText(document.querySelector("#Profile2 .career")),
            this._txtEfect.ttl.emptyCharacter = "",
            this._txtEfect.name1.emptyCharacter = "",
            this._txtEfect.name2.emptyCharacter = "",
            this._txtEfect.about.emptyCharacter = "",
            this._txtEfect.career.emptyCharacter = "",
            this._txtEfect.ttl.duration = 600,
            this._txtEfect.name1.duration = 600,
            this._txtEfect.name2.duration = 600,
            this._txtEfect.about.duration = 600,
            this._txtEfect.career.duration = 600,
            TweenMax.set([$("#Profile2 .people"), $("#Profile2 .right-box")], {
                "-webkit-filter": "brightness(" + t._brightness + "%)",
                filter: "brightness(" + t._brightness + "%)"
            }),
            this.addEventListener("added", function(e) {
                t.addedAC()
            }),
            this.addEventListener("removed", function(e) {
                t.removedAC()
            })
        }
        ,
        i.prototype.addedAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            TweenMax.set(this._$target, {
                display: "block"
            }),
            TweenMax.to(this._$target, 1, {
                autoAlpha: 1,
                delay: 0,
                ease: Expo.easeOut
            }),
            $("#Profile2 .left-box .txts").css({
                height: $("#Profile2 .left-box .txts").height() + "px"
            }),
            $("#Profile2 .left-box .ttl").css({
                height: $("#Profile2 .left-box .ttl").height() + "px"
            }),
            $("#Profile2 .left-box .name1").css({
                height: $("#Profile2 .left-box .name1").height() + "px"
            }),
            $("#Profile2 .left-box .name2").css({
                height: $("#Profile2 .left-box .name2").height() + "px"
            }),
            $("#Profile2 .left-box .about").css({
                height: $("#Profile2 .left-box .about").height() + "px"
            }),
            $("#Profile2 .left-box .career").css({
                height: $("#Profile2 .left-box .career").height() + "px"
            }),
            this._txtEfect.ttl.start(),
            this._txtEfect.name1.start(),
            this._txtEfect.name2.start(),
            this._txtEfect.about.start(),
            this._txtEfect.career.start(),
            "edge" !== window._App._util.targetBrowser() && (this._txtEfect.pic.stop(),
            this._txtEfect.pic.start()),
            this._brightness = 300,
            TweenMax.set([$("#Profile2 .people"), $("#Profile2 .right-box")], {
                "-webkit-filter": "brightness(" + t._brightness + "%)",
                filter: "brightness(" + t._brightness + "%)"
            }),
            TweenMax.to(this, 1, {
                _brightness: 100,
                onUpdate: function() {
                    TweenMax.set([$("#Profile2 .people"), $("#Profile2 .right-box")], {
                        "-webkit-filter": "brightness(" + t._brightness + "%)",
                        filter: "brightness(" + t._brightness + "%)"
                    })
                }
            }),
            TweenMax.to(this, 1, {
                onComplete: function() {
                    $("#Profile2 .left-box .txts").css({
                        height: "auto"
                    }),
                    $("#Profile2 .left-box .ttl").css({
                        height: "auto"
                    }),
                    $("#Profile2 .left-box .name1").css({
                        height: "auto"
                    }),
                    $("#Profile2 .left-box .name2").css({
                        height: "auto"
                    }),
                    $("#Profile2 .left-box .about").css({
                        height: "auto"
                    }),
                    $("#Profile2 .left-box .career").css({
                        height: "auto"
                    })
                },
                ease: Expo.easeOut
            }),
            this._scrollTween && this._scrollTween.kill(),
            this._scrollTween = new TimelineMax,
            this._scrollTween.to($("#Profile2 .scroll .line2"), 0, {
                scaleY: 0,
                transformOrigin: "50% 0",
                ease: Expo.easeOut
            }).to($("#Profile2 .scroll .line2"), 1, {
                scaleY: 1,
                ease: Expo.easeOut
            }).to($("#Profile2 .scroll .line2"), 0, {
                scaleY: 1,
                transformOrigin: "50% 100%",
                ease: Expo.easeOut
            }).to($("#Profile2 .scroll .line2"), 1, {
                scaleY: 0,
                ease: Expo.easeOut
            }),
            this._scrollTween.repeat(-1),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !1
            }, 600, createjs.Ease.quartOut).call(function() {
                t.toRemoveComplete()
            }),
            TweenMax.to(this._$target, .6, {
                autoAlpha: 0,
                display: "none",
                delay: 0,
                ease: Expo.easeOut
            })
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this.parent && this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.sceneChange = function() {}
        ,
        i.prototype.sceneChangeEnd = function() {
            window._App
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._Profile2.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            window._App._util.targetResize(window._App._canvas)
        }
        ,
        i
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.Profile3 = function(e) {
        function i() {
            this._assets = null,
            this._$target = null,
            this._brightness = 100,
            this._txtEfect = [],
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t;
            t = this,
            this._assets = new createjs.MovieClip,
            this.addChild(this._assets),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/profile/catch3.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/profile/pic3.jpg"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/profile/people3.png"),
            $("#Container").append(window._PageData._profile3),
            this._$target = $("#Profile3"),
            TweenMax.set(this._$target, {
                autoAlpha: 0,
                display: "none"
            }),
            this._txtEfect.ttl = new ShuffleText(document.querySelector("#Profile3 .ttl")),
            this._txtEfect.name1 = new ShuffleText(document.querySelector("#Profile3 .name dt")),
            this._txtEfect.name2 = new ShuffleText(document.querySelector("#Profile3 .name dd")),
            this._txtEfect.about = new ShuffleText(document.querySelector("#Profile3 .about")),
            this._txtEfect.career = new ShuffleText(document.querySelector("#Profile3 .career")),
            this._txtEfect.ttl.emptyCharacter = "",
            this._txtEfect.name1.emptyCharacter = "",
            this._txtEfect.name2.emptyCharacter = "",
            this._txtEfect.about.emptyCharacter = "",
            this._txtEfect.career.emptyCharacter = "",
            this._txtEfect.ttl.duration = 600,
            this._txtEfect.name1.duration = 600,
            this._txtEfect.name2.duration = 600,
            this._txtEfect.about.duration = 600,
            this._txtEfect.career.duration = 600,
            TweenMax.set([$("#Profile3 .people"), $("#Profile3 .right-box")], {
                "-webkit-filter": "brightness(" + t._brightness + "%)",
                filter: "brightness(" + t._brightness + "%)"
            }),
            this.addEventListener("added", function(e) {
                t.addedAC()
            }),
            this.addEventListener("removed", function(e) {
                t.removedAC()
            })
        }
        ,
        i.prototype.addedAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            TweenMax.set(this._$target, {
                display: "block"
            }),
            TweenMax.to(this._$target, 1, {
                autoAlpha: 1,
                delay: 0,
                ease: Expo.easeOut
            }),
            $("#Profile3 .left-box .txts").css({
                height: $("#Profile3 .left-box .txts").height() + "px"
            }),
            $("#Profile3 .left-box .ttl").css({
                height: $("#Profile3 .left-box .ttl").height() + "px"
            }),
            $("#Profile3 .left-box .name1").css({
                height: $("#Profile3 .left-box .name1").height() + "px"
            }),
            $("#Profile3 .left-box .name2").css({
                height: $("#Profile3 .left-box .name2").height() + "px"
            }),
            $("#Profile3 .left-box .about").css({
                height: $("#Profile3 .left-box .about").height() + "px"
            }),
            $("#Profile3 .left-box .career").css({
                height: $("#Profile3 .left-box .career").height() + "px"
            }),
            this._txtEfect.ttl.start(),
            this._txtEfect.name1.start(),
            this._txtEfect.name2.start(),
            this._txtEfect.about.start(),
            this._txtEfect.career.start(),
            "edge" !== window._App._util.targetBrowser() && (this._txtEfect.pic.stop(),
            this._txtEfect.pic.start()),
            this._brightness = 300,
            TweenMax.set([$("#Profile3 .people"), $("#Profile3 .right-box")], {
                "-webkit-filter": "brightness(" + t._brightness + "%)",
                filter: "brightness(" + t._brightness + "%)"
            }),
            TweenMax.to(this, 1, {
                _brightness: 100,
                onUpdate: function() {
                    TweenMax.set([$("#Profile3 .people"), $("#Profile3 .right-box")], {
                        "-webkit-filter": "brightness(" + t._brightness + "%)",
                        filter: "brightness(" + t._brightness + "%)"
                    })
                }
            }),
            TweenMax.to(this, 1, {
                onComplete: function() {
                    $("#Profile3 .left-box .txts").css({
                        height: "auto"
                    }),
                    $("#Profile3 .left-box .ttl").css({
                        height: "auto"
                    }),
                    $("#Profile3 .left-box .name1").css({
                        height: "auto"
                    }),
                    $("#Profile3 .left-box .name2").css({
                        height: "auto"
                    }),
                    $("#Profile3 .left-box .about").css({
                        height: "auto"
                    }),
                    $("#Profile3 .left-box .career").css({
                        height: "auto"
                    })
                },
                ease: Expo.easeOut
            }),
            this._scrollTween && this._scrollTween.kill(),
            this._scrollTween = new TimelineMax,
            this._scrollTween.to($("#Profile3 .scroll .line2"), 0, {
                scaleY: 0,
                transformOrigin: "50% 0",
                ease: Expo.easeOut
            }).to($("#Profile3 .scroll .line2"), 1, {
                scaleY: 1,
                ease: Expo.easeOut
            }).to($("#Profile3 .scroll .line2"), 0, {
                scaleY: 1,
                transformOrigin: "50% 100%",
                ease: Expo.easeOut
            }).to($("#Profile3 .scroll .line2"), 1, {
                scaleY: 0,
                ease: Expo.easeOut
            }),
            this._scrollTween.repeat(-1),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                visible: !1
            }, 600, createjs.Ease.quartOut).call(function() {
                t.toRemoveComplete()
            }),
            TweenMax.to(this._$target, .6, {
                autoAlpha: 0,
                display: "none",
                delay: 0,
                ease: Expo.easeOut
            })
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this.parent && this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.sceneChange = function() {}
        ,
        i.prototype.sceneChangeEnd = function() {
            window._App
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._Profile3.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            window._App._util.targetResize(window._App._canvas)
        }
        ,
        i
    }()
}
.call(this),
function() {
    this.Logo = function() {
        function t() {
            this._assets = null,
            this._logo = [],
            this._logo_material = [],
            this.init()
        }
        return t.prototype.init = function() {
            this._assets = new THREE.Group,
            this._assets.position.y = .5,
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/top/op_txt.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/top/logo_k.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/top/logo_u.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/top/logo_ico.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/top/logo_p.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/top/logo_txt.png"),
            this.createMesh("op_txt", window._App._global._dirRoot + "assets/images/top/op_txt.png"),
            this.createMesh("k", window._App._global._dirRoot + "assets/images/top/logo_k.png"),
            this.createMesh("u", window._App._global._dirRoot + "assets/images/top/logo_u.png"),
            this.createMesh("ico", window._App._global._dirRoot + "assets/images/top/logo_ico.png"),
            this.createMesh("p", window._App._global._dirRoot + "assets/images/top/logo_p.png"),
            this.createMesh("txt", window._App._global._dirRoot + "assets/images/top/logo_txt.png")
        }
        ,
        t.prototype.createMesh = function(t, e) {
            var i;
            i = this,
            (new THREE.TextureLoader).load(e, function(e) {
                var o, s, n;
                e.needsUpdate = !0,
                o = new THREE.PlaneGeometry(1,1),
                i._logo_material[t] = new THREE.MeshBasicMaterial({
                    map: e,
                    transparent: !0,
                    side: THREE.DoubleSide
                }),
                i._logo[t] = new THREE.Mesh(o,i._logo_material[t]),
                n = e.image.width,
                s = e.image.height,
                i._logo[t].scale.set(n / 100, s / 100, 1),
                i._assets.add(i._logo[t])
            })
        }
        ,
        t.prototype.addedAC = function() {
            window._App._Threejs._scene.add(this._assets),
            this._assets.alpha = 0,
            createjs.Tween.get(this._assets).to({
                alpha: 1
            }, 3e3, createjs.Ease.quartOut),
            this.renderStart(),
            this.animetionStart(),
            this._visited = !0,
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        t.prototype.removedAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this._assets).to({
                alpha: 0
            }, 600, createjs.Ease.quartOut).call(function() {
                t.toRemoveComplete()
            })
        }
        ,
        t.prototype.toRemoveComplete = function() {
            window.removeEventListener("resize", this.resizeEv),
            this.renderStop(),
            window._App._Threejs._scene.remove(this._assets)
        }
        ,
        t.prototype.animetionStart = function() {
            this._logo.op_txt.position.x = 0,
            this._logo.op_txt.position.y = -.5,
            this._logo.op_txt.position.z = 381,
            this._logo.k.position.x = -3.04,
            this._logo.k.position.y = -.5,
            this._logo.k.position.z = 381,
            this._logo.u.position.x = -.62,
            this._logo.u.position.y = -1.08,
            this._logo.u.position.z = 381,
            this._logo.ico.position.x = 1.22,
            this._logo.ico.position.y = -.47,
            this._logo.ico.position.z = 381,
            this._logo.p.position.x = 3.3,
            this._logo.p.position.y = -.51,
            this._logo.p.position.z = 381,
            this._logo.txt.position.y = 1.81,
            this._logo.txt.position.z = 381,
            this._logo_material.op_txt.opacity = 0,
            this._logo_material.k.opacity = 0,
            this._logo_material.u.opacity = 0,
            this._logo_material.ico.opacity = 0,
            this._logo_material.p.opacity = 0,
            this._logo_material.txt.opacity = 0,
            window._App._scene._beforeScene ? (this.otherAnimation(),
            window._App._Bg._Main.changeAnimation1()) : (this.openingAnimation(),
            window._App._Bg._Main.changeAnimationFirst())
        }
        ,
        t.prototype.openingAnimation = function() {
            var t;
            this._logo.ico.position.x = 0,
            this._logo.ico.position.y = -1,
            this._logo.ico.position.z = 396,
            this._logo.ico.rotation.x = -70 / 180 * Math.PI,
            (t = {}).seri = function() {
                var t, e, i, o;
                for (e = new TimelineMax,
                t = i = 0,
                o = arguments.length - 1; 0 <= o ? i <= o : i >= o; t = 0 <= o ? ++i : --i)
                    e.add(arguments[t]);
                return e
            }
            ,
            t.para = function() {
                var t;
                return t = Array.prototype.slice.call(arguments, 0),
                (new TimelineMax).add(t)
            }
            ,
            t.para(t.para(TweenMax.set(this._logo.op_txt.position, {
                y: -1,
                immediateRender: !1
            }), TweenMax.to(this._logo.op_txt.position, 1, {
                y: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo_material.op_txt, 2, {
                opacity: 1,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo_material.op_txt, 1, {
                opacity: 0,
                delay: 2,
                overwrite: 1,
                ease: Expo.easeOut
            })), t.para(TweenMax.set(this._logo.ico.position, {
                y: -2.5,
                z: 411,
                immediateRender: !1
            }), TweenMax.to(this._logo_material.ico, 1, {
                opacity: 1,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.ico.position, 2, {
                y: -2.5,
                z: 392.5,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), t.para(TweenMax.to(this._logo.ico.position, 1, {
                x: 1.22,
                y: -.47,
                z: 381,
                delay: 0,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.ico.rotation, 1, {
                x: 0 * Math.PI,
                y: 0 * Math.PI,
                z: 2 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            })).delay(2)), t.para(TweenMax.to(this._logo_material.k, 1, {
                opacity: 1,
                delay: .1,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo_material.u, 1, {
                opacity: 1,
                delay: .2,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo_material.p, 1, {
                opacity: 1,
                delay: .3,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.k.position, 0, {
                y: .5,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.u.position, 0, {
                y: -2.08,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.p.position, 0, {
                y: .49,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.k.position, 1, {
                y: -.5,
                delay: .1,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.u.position, 1, {
                y: -1.08,
                delay: .2,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.p.position, 1, {
                y: -.51,
                delay: .3,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo_material.txt, 1, {
                opacity: 1,
                delay: .6,
                overwrite: 1,
                ease: Expo.easeOut
            })).delay(2.5)).delay(1)
        }
        ,
        t.prototype.otherAnimation = function() {
            var t;
            this.resizeAc(),
            (t = {}).seri = function() {
                var t, e, i, o;
                for (e = new TimelineMax,
                t = i = 0,
                o = arguments.length - 1; 0 <= o ? i <= o : i >= o; t = 0 <= o ? ++i : --i)
                    e.add(arguments[t]);
                return e
            }
            ,
            t.para = function() {
                var t;
                return t = Array.prototype.slice.call(arguments, 0),
                (new TimelineMax).add(t)
            }
            ,
            t.para(t.para(TweenMax.to(this._logo.ico.position, 0, {
                z: 391,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo_material.ico, 1, {
                opacity: 1,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.ico.position, 1, {
                x: 1.22,
                y: -.47,
                z: 381,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.ico.rotation, 1, {
                x: 0 * Math.PI,
                y: 0 * Math.PI,
                z: 2 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            })), t.para(TweenMax.to(this._logo_material.k, 1, {
                opacity: 1,
                delay: .1,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo_material.u, 1, {
                opacity: 1,
                delay: .2,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo_material.p, 1, {
                opacity: 1,
                delay: .3,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.k.position, 0, {
                y: .5,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.u.position, 0, {
                y: -2.08,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.p.position, 0, {
                y: .49,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.k.position, 1, {
                y: -.5,
                delay: .1,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.u.position, 1, {
                y: -1.08,
                delay: .2,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.p.position, 1, {
                y: -.51,
                delay: .3,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo_material.txt, 1, {
                opacity: 1,
                delay: .6,
                overwrite: 1,
                ease: Expo.easeOut
            }))).delay(0)
        }
        ,
        t.prototype.outAnimation = function() {
            var t;
            (t = {}).seri = function() {
                var t, e, i, o;
                for (e = new TimelineMax,
                t = i = 0,
                o = arguments.length - 1; 0 <= o ? i <= o : i >= o; t = 0 <= o ? ++i : --i)
                    e.add(arguments[t]);
                return e
            }
            ,
            t.para = function() {
                var t;
                return t = Array.prototype.slice.call(arguments, 0),
                (new TimelineMax).add(t)
            }
            ,
            t.para(t.para(TweenMax.to(this._logo_material.ico, 1, {
                opacity: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.ico.position, 1, {
                x: 1.22,
                y: .53,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.ico.rotation, 1, {
                x: 2 * Math.PI,
                y: 2 * Math.PI,
                z: 2 * Math.PI,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            })), t.para(TweenMax.to(this._logo_material.k, 1, {
                opacity: 0,
                delay: .1,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo_material.u, 1, {
                opacity: 0,
                delay: .2,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo_material.p, 1, {
                opacity: 0,
                delay: .3,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.k.position, 1, {
                y: .5,
                delay: .1,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.u.position, 1, {
                y: -2.08,
                delay: .2,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo.p.position, 1, {
                y: .49,
                delay: .3,
                overwrite: 1,
                ease: Expo.easeOut
            }), TweenMax.to(this._logo_material.txt, 1, {
                opacity: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            })))
        }
        ,
        t.prototype.renderStart = function() {
            createjs.Ticker.addEventListener("tick", this.rendering)
        }
        ,
        t.prototype.renderStop = function() {
            createjs.Ticker.removeEventListener("tick", this.rendering)
        }
        ,
        t.prototype.rendering = function() {
            window._App._Top._Logo.render()
        }
        ,
        t.prototype.render = function() {}
        ,
        t.prototype.resizeEv = function(t) {
            window._App._Top._Logo.resizeAc()
        }
        ,
        t.prototype.resizeAc = function() {
            var t, e;
            e = (t = window._App._util.targetResize(window._App._canvas)).width,
            t.height,
            e / devicePixelRatio <= window._App._global._mediaQuery_middle ? (this._assets.scale.set(.6, .6, 1),
            this._logo.op_txt.position.z = 385) : e / devicePixelRatio <= window._App._global._mediaQuery_large ? (this._assets.scale.set(.7, .7, 1),
            this._logo.op_txt.position.z = 385) : (this._assets.scale.set(.9, .9, 1),
            this._logo.op_txt.position.z = 381)
        }
        ,
        t
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.Top = function(e) {
        function i() {
            this._visited = !1,
            this._assets = null,
            this._$target = null,
            this._Logo = null,
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t;
            t = this,
            this._assets = new createjs.MovieClip,
            this.addChild(this._assets),
            $("#Container").append(window._PageData._top),
            this._$target = $("#Top"),
            TweenMax.set(this._$target, {
                autoAlpha: 0
            }),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/top/link1.png"),
            window._App._util.partsLoad(window._App._global._dirRoot + "assets/images/top/link2.png"),
            this.addEventListener("added", function(e) {
                t.addedAC()
            }),
            this.addEventListener("removed", function(e) {
                t.removedAC()
            }),
            this._Logo = new Logo
        }
        ,
        i.prototype.addedAC = function() {
            this._visited ? (this._Logo.otherAnimation(),
            TweenMax.to(this._$target, 1, {
                autoAlpha: 1,
                delay: 1,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            this.resizeAc(),
            window._App._Threejs.resizeAc()) : (createjs.Tween.get(this).to({
                alpha: 0,
                visible: !0
            }, 0),
            createjs.Tween.get(this).to({
                alpha: 1
            }, 600, createjs.Ease.quartOut),
            this._Logo.addedAC(),
            TweenMax.to(this._$target, 1, {
                autoAlpha: 1,
                delay: 4,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()),
            this._visited = !0
        }
        ,
        i.prototype.toRemoveAC = function() {
            this._Logo.outAnimation(),
            TweenMax.to(this._$target, 1, {
                autoAlpha: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            })
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this.parent && this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.sceneChange = function() {
            var t;
            t = window._App,
            "top" === window._App._scene._currentScene && t._container.contains(t._GlobalNavi) && t._GlobalNavi.toRemoveAC(),
            t._container.contains(t._ContentsBg) && t._ContentsBg.toRemoveAC(),
            "top" === window._App._scene._currentScene ? (this._visited && window._App._Bg._Main.changeRemoveAnimation(),
            TweenMax.to(this, 1, {
                alpha: 0,
                onComplete: function() {
                    window._App._Bg._Main.changeAnimation1()
                },
                ease: Expo.easeOut
            })) : "about" === window._App._scene._currentScene ? (window._App._Bg._Main.changeRemoveAnimation(),
            TweenMax.to(this, 1, {
                alpha: 0,
                onComplete: function() {
                    window._App._Bg._Main.changeAnimation2()
                },
                ease: Expo.easeOut
            })) : "mission1" === window._App._scene._currentScene ? (window._App._Bg._Main.changeRemoveAnimation(),
            TweenMax.to(this, 1, {
                alpha: 0,
                onComplete: function() {
                    window._App._Bg._Main.changeAnimation3()
                },
                ease: Expo.easeOut
            })) : "mission2" === window._App._scene._currentScene ? (window._App._Bg._Main.changeRemoveAnimation(),
            TweenMax.to(this, 1, {
                alpha: 0,
                onComplete: function() {
                    window._App._Bg._Main.changeAnimation4()
                },
                ease: Expo.easeOut
            })) : (window._App._Bg._Main.changeRemoveAnimation(),
            TweenMax.to(this, 1, {
                alpha: 0,
                onComplete: function() {
                    window._App._Bg._Main.changeAnimation1()
                },
                ease: Expo.easeOut
            }))
        }
        ,
        i.prototype.sceneChangeEnd = function() {
            var t;
            t = window._App,
            "top" !== window._App._scene._currentScene ? (t._container.contains(t._ContentsBg) || t._container.addChild(t._ContentsBg),
            t._container.contains(t._GlobalNavi) ? t._GlobalNavi.addedAC() : t._container.addChild(t._GlobalNavi),
            t._GlobalNavi.changeNavigation(window._App._scene._currentScene),
            TweenMax.to($("#GlobalHeader .logo"), 1, {
                autoAlpha: 1,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            })) : TweenMax.to($("#GlobalHeader .logo"), 1, {
                autoAlpha: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            "top" !== window._App._scene._currentScene && "PC" !== window._App._Bg._Main._layoutType ? (TweenMax.to([window._App._Bg._Main._assets.scale], 1, {
                x: .5,
                y: .5,
                z: .5,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to([window._App._Bg._Main._assets.position], 1, {
                x: -80,
                y: 80,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            })) : (TweenMax.to([window._App._Bg._Main._assets.scale], 1, {
                x: 1,
                y: 1,
                z: 1,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }),
            TweenMax.to([window._App._Bg._Main._assets.position], 1, {
                x: 0,
                y: 0,
                delay: 0,
                overwrite: 1,
                ease: Expo.easeOut
            }))
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._Top.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            var t;
            (t = window._App._util.targetResize(window._App._canvas)).width,
            devicePixelRatio,
            t.height,
            devicePixelRatio
        }
        ,
        i
    }()
}
.call(this),
function() {
    var t = {}.hasOwnProperty;
    this.Loader = function(e) {
        function i() {
            this._lenNum = 0,
            this._compNum = 0,
            this._loadedNum = 0,
            this._loadNum = 0,
            this._bg = null,
            this._arw = null,
            this.initialize(),
            this.init()
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, createjs.Container),
        i.prototype.init = function() {
            var t;
            t = this,
            this.addEventListener("added", function(e) {
                t.addedAC()
            }),
            this.addEventListener("removed", function(e) {
                t.removedAC()
            }),
            this._bg = new createjs.MovieClip,
            this.addChild(this._bg),
            this._arw = new createjs.MovieClip,
            this.addChild(this._arw)
        }
        ,
        i.prototype.partsLoadAdd = function(t, e, i, o) {
            var s;
            (s = new createjs.LoadQueue).addEventListener("fileload", function(e) {
                setTimeout(function() {
                    var s;
                    if (e.item.type === createjs.LoadQueue.IMAGE && (s = new createjs.Bitmap(e.result),
                    t.addChild(s),
                    null !== s.getBounds() && ("left" === i ? (s.x = 0,
                    s.y = 0) : "leftCenter" === i ? (s.x = 0,
                    s.y = -s.getBounds().height / 2) : "leftBottom" === i ? (s.x = 0,
                    s.y = -s.getBounds().height) : "center" === i ? (s.x = -s.getBounds().width / 2,
                    s.y = -s.getBounds().height / 2) : "centerTop" === i ? (s.x = -s.getBounds().width / 2,
                    s.y = 0) : "centerBottom" === i ? (s.x = -s.getBounds().width / 2,
                    s.y = -s.getBounds().height) : "right" === i ? (s.x = -s.getBounds().width,
                    s.y = 0) : "rightCenter" === i ? (s.x = -s.getBounds().width,
                    s.y = -s.getBounds().height / 2) : "rightBottom" === i && (s.x = -s.getBounds().width,
                    s.y = -s.getBounds().height)),
                    void 0 !== o && o()),
                    e.item.type === createjs.LoadQueue.SVG && (s = new createjs.Bitmap(e.item.src),
                    t.addChild(s),
                    null !== s.getBounds() && ("left" === i ? (s.x = 0,
                    s.y = 0) : "leftCenter" === i ? (s.x = 0,
                    s.y = -s.getBounds().height / 2) : "leftBottom" === i ? (s.x = 0,
                    s.y = -s.getBounds().height) : "center" === i ? (s.x = -s.getBounds().width / 2,
                    s.y = -s.getBounds().height / 2) : "centerTop" === i ? (s.x = -s.getBounds().width / 2,
                    s.y = 0) : "centerBottom" === i ? (s.x = -s.getBounds().width / 2,
                    s.y = -s.getBounds().height) : "right" === i ? (s.x = -s.getBounds().width,
                    s.y = 0) : "rightCenter" === i ? (s.x = -s.getBounds().width,
                    s.y = -s.getBounds().height / 2) : "rightBottom" === i && (s.x = -s.getBounds().width,
                    s.y = -s.getBounds().height)),
                    void 0 !== o))
                        return o()
                }, 100)
            }),
            s.addEventListener("progress", function(t) {}),
            s.addEventListener("complete", function(t) {}),
            s.loadManifest([{
                id: "img",
                src: e
            }])
        }
        ,
        i.prototype.addedAC = function() {
            var t, e;
            e = this,
            t = function() {
                e.loadStartAc()
            }
            ,
            this.partsLoadAdd(this._arw, window._App._global._dirRoot + "assets/images/top/logo_ico.png", "center", t),
            window.addEventListener("resize", this.resizeEv),
            this.resizeAc()
        }
        ,
        i.prototype.toRemoveAC = function() {
            var t;
            t = this,
            createjs.Tween.get(this).to({
                alpha: 0,
                delay: 100
            }, 2e3, createjs.Ease.quintInOut).call(function() {
                t.visible = !1,
                t.toRemoveComplete(),
                $("#CanvasContainer").css({
                    "z-index": "auto"
                })
            })
        }
        ,
        i.prototype.toRemoveComplete = function() {
            this.parent.removeChild(this)
        }
        ,
        i.prototype.removedAC = function() {
            window.removeEventListener("resize", this.resizeEv)
        }
        ,
        i.prototype.loadStartAc = function() {
            var t, e;
            e = this,
            this._arw.scaleX = 0,
            this._arw.scaleY = 0,
            (t = {}).seri = function() {
                var t, e, i, o;
                for (e = new TimelineMax,
                t = i = 0,
                o = arguments.length - 1; 0 <= o ? i <= o : i >= o; t = 0 <= o ? ++i : --i)
                    e.add(arguments[t]);
                return e
            }
            ,
            t.para = function() {
                var t;
                return t = Array.prototype.slice.call(arguments, 0),
                (new TimelineMax).add(t)
            }
            ,
            t.para(t.para(TweenMax.to(this._arw, .3, {
                scaleX: 1,
                scaleY: 1,
                delay: .8,
                overwrite: 1,
                onComplete: function() {
                    createjs.Ticker.addEventListener("tick", e.loadProgressEv)
                },
                ease: Back.easeOut.config(1.7)
            }), TweenMax.to(this._arw, 1, {
                rotation: 360,
                delay: 0,
                overwrite: 1,
                yoyo: !0,
                repeat: -1,
                ease: Expo.easeInOut
            }))).delay(0)
        }
        ,
        i.prototype.loadProgressEv = function(t) {
            window._App._Loader.loadProgressAc()
        }
        ,
        i.prototype.loadProgressAc = function() {
            this._loadNum = Math.floor(this._compNum / this._lenNum * 100),
            createjs.Tween.get(this, {
                override: !0
            }).to({
                _loadedNum: this._loadNum
            }, 300, createjs.Ease.quartOut),
            this._loadedNum > 99 ? this._loadedNum = 100 : this._loadedNum = Math.floor(this._loadedNum),
            100 === this._loadedNum && window._App._Loader.loadCompleteAc()
        }
        ,
        i.prototype.loadCompleteAc = function() {
            createjs.Ticker.removeEventListener("tick", this.loadProgressEv),
            console.log("loadComp"),
            this.func = function() {
                window._App.startScene()
            }
            ,
            createjs.Tween.get(this, {
                override: !0
            }).wait(1300).call(this.func),
            TweenMax.to(this._arw, .3, {
                scaleX: 0,
                scaleY: 0,
                autoAlpha: 0,
                delay: 1,
                ease: Back.easeInOut.config(1.7)
            })
        }
        ,
        i.prototype.resizeEv = function(t) {
            window._App._Loader.resizeAc()
        }
        ,
        i.prototype.resizeAc = function() {
            var t, e, i, o, s, n, a;
            for (n = (i = window._App._util.targetResize(window._App._canvas)).width,
            s = i.height,
            e = this._bg.numChildren - 1,
            t = a = 0; 0 <= e ? a <= e : a >= e; t = 0 <= e ? ++a : --a)
                this._bg.removeChildAt(t);
            (o = new createjs.Shape).graphics.beginFill("#F2F2F2").drawRect(0, 0, n, s),
            this._bg.addChild(o),
            this._arw.x = Math.floor(n / 2),
            this._arw.y = Math.floor(s / 2)
        }
        ,
        i
    }()
}
.call(this),
function(t) {
    var e = {};
    function i(o) {
        if (e[o])
            return e[o].exports;
        var s = e[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return t[o].call(s.exports, s, s.exports, i),
        s.loaded = !0,
        s.exports
    }
    i.m = t,
    i.c = e,
    i.p = "",
    i(0)
}([function(t, e, i) {
    this.PageData = function() {
        return function() {
            this._globalnavi = i(1)(),
            this._header = i(4)(),
            this._top = i(5)(),
            this._about = i(6)(),
            this._mission1 = i(7)(),
            this._mission2 = i(8)(),
            this._profile1 = i(9)(),
            this._profile2 = i(10)(),
            this._profile3 = i(11)(),
            this._contact = i(12)()
        }
    }(),
    window._PageData = {},
    window._PageData = new this.PageData
}
, function(t, e, i) {
    i(2);
    t.exports = function(t) {
        var e = [];
        return e.push('<div id="GlobalNavi"><div class="container"></div><ul><li class="list1"><dl><dt>01</dt><dd><span class="line-t"><span class="line-sub"></span></span><span class="txts"><span class="text-combine t1">K</span><span class="text-combine t2">u</span><span class="t3">:</span><span class="text-combine t4">P</span><span class="t5">について</span></span><span class="line-b"><span class="line-sub"></span></span></dd></dl></li><li class="list2"><dl><dt>02</dt><dd><span class="line-t"><span class="line-sub"></span></span><span class="txts">ミッション</span><span class="line-b"><span class="line-sub"></span></span></dd></dl></li><li class="list3"><dl><dt>03</dt><dd><span class="line-t"><span class="line-sub"></span></span><span class="txts">プロフィール</span><span class="line-b"><span class="line-sub"></span></span></dd></dl></li><li class="list4"><dl><dt>04</dt><dd><span class="line-t"><span class="line-sub"></span></span><span class="txts">コンタクト</span><span class="line-b"><span class="line-sub"></span></span></dd></dl></li></ul></div>'),
        e.join("")
    }
}
, function(t, e, i) {
    "use strict";
    function o(t) {
        return null != t && "" !== t
    }
    function s(t) {
        return (Array.isArray(t) ? t.map(s) : t && "object" == typeof t ? Object.keys(t).filter(function(e) {
            return t[e]
        }) : [t]).filter(o).join(" ")
    }
    e.merge = function t(e, i) {
        if (1 === arguments.length) {
            for (var s = e[0], n = 1; n < e.length; n++)
                s = t(s, e[n]);
            return s
        }
        var a = e.class
          , r = i.class;
        for (var l in (a || r) && (a = a || [],
        r = r || [],
        Array.isArray(a) || (a = [a]),
        Array.isArray(r) || (r = [r]),
        e.class = a.concat(r).filter(o)),
        i)
            "class" != l && (e[l] = i[l]);
        return e
    }
    ,
    e.joinClasses = s,
    e.cls = function(t, i) {
        for (var o = [], n = 0; n < t.length; n++)
            i && i[n] ? o.push(e.escape(s([t[n]]))) : o.push(s(t[n]));
        var a = s(o);
        return a.length ? ' class="' + a + '"' : ""
    }
    ,
    e.style = function(t) {
        return t && "object" == typeof t ? Object.keys(t).map(function(e) {
            return e + ":" + t[e]
        }).join(";") : t
    }
    ,
    e.attr = function(t, i, o, s) {
        return "style" === t && (i = e.style(i)),
        "boolean" == typeof i || null == i ? i ? " " + (s ? t : t + '="' + t + '"') : "" : 0 == t.indexOf("data") && "string" != typeof i ? (-1 !== JSON.stringify(i).indexOf("&") && console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),
        i && "function" == typeof i.toISOString && console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0"),
        " " + t + "='" + JSON.stringify(i).replace(/'/g, "&apos;") + "'") : o ? (i && "function" == typeof i.toISOString && console.warn("Jade will stringify dates in ISO form after 2.0.0"),
        " " + t + '="' + e.escape(i) + '"') : (i && "function" == typeof i.toISOString && console.warn("Jade will stringify dates in ISO form after 2.0.0"),
        " " + t + '="' + i + '"')
    }
    ,
    e.attrs = function(t, i) {
        var o = []
          , n = Object.keys(t);
        if (n.length)
            for (var a = 0; a < n.length; ++a) {
                var r = n[a]
                  , l = t[r];
                "class" == r ? (l = s(l)) && o.push(" " + r + '="' + l + '"') : o.push(e.attr(r, l, !1, i))
            }
        return o.join("")
    }
    ;
    var n = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
    }
      , a = /[&<>"]/g;
    function r(t) {
        return n[t] || t
    }
    e.escape = function(t) {
        var e = String(t).replace(a, r);
        return e === "" + t ? t : e
    }
    ,
    e.rethrow = function t(e, o, s, n) {
        if (!(e instanceof Error))
            throw e;
        if (!("undefined" == typeof window && o || n))
            throw e.message += " on line " + s,
            e;
        try {
            n = n || i(3).readFileSync(o, "utf8")
        } catch (i) {
            t(e, null, s)
        }
        var a = 3
          , r = n.split("\n")
          , l = Math.max(s - a, 0)
          , h = Math.min(r.length, s + a);
        a = r.slice(l, h).map(function(t, e) {
            var i = e + l + 1;
            return (i == s ? "  > " : "    ") + i + "| " + t
        }).join("\n");
        throw e.path = o,
        e.message = (o || "Jade") + ":" + s + "\n" + a + "\n\n" + e.message,
        e
    }
    ,
    e.DebugItem = function(t, e) {
        this.lineno = t,
        this.filename = e
    }
}
, function(t, e) {}
, function(t, e, i) {
    i(2);
    t.exports = function(t) {
        var e = [];
        return e.push('<div id="GlobalHeader"><h1 class="logo"><a href="javascript:window._App._router.change(\'/\')"><img src="assets/images/common/header/logo.png"></a></h1><p class="contact"><a href="mailto:&#107;&#117;&#117;&#112;&#45;&#105;&#110;&#102;&#111;&#64;&#99;&#109;&#46;&#107;&#97;&#110;&#115;&#97;&#105;&#45;&#117;&#46;&#97;&#99;&#46;&#106;&#112;">お問い合わせ</a></p></div>'),
        e.join("")
    }
}
, function(t, e, i) {
    i(2);
    t.exports = function(t) {
        var e = [];
        return e.push('<div id="Top"><div class="container"><div class="links"><ul><li><a href="http://www.kansai-u.ac.jp/index.html" target="_blank"><img src="assets/images/top/link1.png"></a></li><li><a href="http://www.kansai-u.ac.jp/renkei/innovation/" target="_blank"><img src="assets/images/top/link2.png"></a></li></ul></div><div class="bt-scroll"><a href="javascript:window._App._router.change(\'/about\')"><span>SCROLL</span></a></div></div></div>'),
        e.join("")
    }
}
, function(t, e, i) {
    i(2);
    t.exports = function(t) {
        var e = [];
        return e.push('<div id="About"><div class="container"><div class="left-box"><div class="left-box-container"><h3 class="ttl">Ku：Pについて</h3><div class="txts"><p class="txt1">たとえ、画期的な技術があったとしても、それを生かすシーンを描くことできなければ、世の中に存在しないのと同じです。 関西大学発の <span class="common-emp2">ベンチャー企業Ku:P </span>。わたしたちは、大学から生まれた企業であることのメリットを最大限に生かし、新技術の市場化、革新的な製品・サービスの市場開発を大学・企業と連携してProduceしていきます。新技術を社会、市場のために、どう生かすことができるのか、知の集積地である大学で培ったProfessorによるマーケティングカとビジネスモデル開発カによるPlanningで、新しい価値を創造します。技術を人の近くへ。暮らしの中へ。</p><p class="txt2">Ku:Pは<span class="common-emp1">Produce</span> ＆ <span class="common-emp1">Planning</span> by <span class="common-emp1">Professor</span>の3つのPで、人と社会をよりよい方向へと導く羅針盤でありたいと考えます。</p></div></div></div><div class="right-box"></div><div class="scroll">SCROLL<span class="line1"></span><span class="line2"></span></div></div></div>'),
        e.join("")
    }
}
, function(t, e, i) {
    i(2);
    t.exports = function(t) {
        var e = [];
        return e.push('<div id="Mission1"><div class="container"><div class="left-box"><div class="left-box-container"><h2 class="ttl">ミッション</h2><div class="txts"><p class="txt">革新的な技術、製品、サービスを、マーケティングを観点に調査・研究を行うことで、<span class="forPC"><br></span>\n今までにない新しい市場を創造し、人と社会によりよい未来を届けます。\n</p><ul class="list"><li class="list1"><dl><dt>01</dt><dd>技術シーズの発掘、社会的実装の実現</dd></dl></li><li class="list2"><dl><dt>02</dt><dd>様々な分野のプロフェッショナルをネットワーキング</dd></dl></li><li class="list3"><dl><dt>03</dt><dd>関西大学をベースにした産学連携・文理融合プログラムの開発</dd></dl></li><li class="list4"><dl><dt>04</dt><dd>国内外との企業・研究機関とのファシリテーター</dd></dl></li><li class="list5"><dl><dt>05</dt><dd>マーケティングを視点とした新たなビジネス・市場の創出</dd></dl></li></ul></div></div></div><div class="right-box"></div><div class="scroll">SCROLL<span class="line1"></span><span class="line2"></span></div></div></div>'),
        e.join("")
    }
}
, function(t, e, i) {
    i(2);
    t.exports = function(t) {
        var e = [];
        return e.push('<div id="Mission2"><div class="container"><div class="left-box"><div class="left-box-container"><h2 class="ttl">ミッション</h2><div class="txts"><div class="lists lists1"><ul class="list"><li class="list1"><dl><dt><img src="assets/images/mission/ico_mission1.png"></dt><dd>企業活動</dd></dl></li><li class="list2"><dl><dt><img src="assets/images/mission/ico_mission2.png"></dt><dd>研究開発活動</dd></dl></li><li class="list3"><dl><dt><img src="assets/images/mission/ico_mission3.png"></dt><dd>シーズ開発</dd></dl></li></ul></div><span class="arw"></span><div class="lists lists2"><ul class="list"><li class="list1"><dl><dt><img src="assets/images/mission/ico_mission4.png"></dt><dd>産学提携プログラム</dd></dl></li><li class="list2"><dl><dt><img src="assets/images/mission/ico_mission5.png"></dt><dd>文理融合プログラム</dd></dl></li></ul></div><span class="arw"></span><div class="lists lists3"><ul class="list"><li class="list1"><span class="line line1">新たな価値を</span><span class="forSP"><br></span><span class="line line2">提供する市場を創造</span></li></ul></div></div></div></div><div class="right-box"></div><div class="scroll">SCROLL<span class="line1"></span><span class="line2"></span></div></div></div>'),
        e.join("")
    }
}
, function(t, e, i) {
    i(2);
    t.exports = function(t) {
        var e = [];
        return e.push('<div id="Profile1"><div class="container"><div class="left-box"><div class="left-box-container"><h2 class="ttl">代表取締役</h2><div class="txts"><dl class="name"><dt>西岡健一</dt><dd>-関西大学商学部教授</dd></dl><p class="about">前職では通信処理方式の検討及び実装・実用化を担当。経営企画に携わった後、アカデミアの世界へ。<br>情報通信技術とサービス、事業創造を研究テーマとしている。教育面では、プロジェクトベースラーニングを実践し様々な産学連携プロジェクトを行う。</p><p class="career">略歴/日本電信電話株式会社ネットワークサービスシステム研究所、西日本電信電話株式会社を経て、2009年より関西大学。<br>主要著書は「サービス・イノベーション　価値創造と新技術導入」（有斐閣）、「製造業のサービス化戦略」（中央経済社）など。</p></div></div></div><div class="right-box"><div class="pic"><p></p></div></div><p class="people"><img src="assets/images/profile/people1.png"></p><div class="scroll">SCROLL<span class="line1"></span><span class="line2"></span></div></div></div>'),
        e.join("")
    }
}
, function(t, e, i) {
    i(2);
    t.exports = function(t) {
        var e = [];
        return e.push('<div id="Profile2"><div class="container"><div class="left-box"><div class="left-box-container"><h2 class="ttl">取締役</h2><div class="txts"><dl class="name"><dt>荒木孝治</dt><dd>-関西大学商学部教授</dd></dl><p class="about">2010年より関西大学商学部内で産学連携プログラムを立ち上げ、様々な企業、特に研究所の持つ技術を生かしたビジネス展開をテーマに教育プログラムを確立。大学の持つリソースを活かした新たな研究教育プログラムの開発を目指す。</p><p class="career">略歴/関西大学教授（商学部）2000年4月<br>関西大学商学部長2008年〜2010年</p></div></div></div><div class="right-box"><div class="pic"><p></p></div></div><p class="people"><img src="assets/images/profile/people2.png"></p><div class="scroll">SCROLL<span class="line1"></span><span class="line2"></span></div></div></div>'),
        e.join("")
    }
}
, function(t, e, i) {
    i(2);
    t.exports = function(t) {
        var e = [];
        return e.push('<div id="Profile3"><div class="container"><div class="left-box"><div class="left-box-container"><h2 class="ttl">アドバイザー</h2><div class="txts"><dl class="name"><dt>南知惠子</dt><dd>-神戸大学大学院<span class="forSP"><br></span>経営学研究科教授</dd></dl><p class="about">神戸大学では、学部、大学院に加え、ビジネススクールでマーケティング科目を講義。学外では、BtoBマーケティングやサービス分野での企業研修を担当。これまでに「日本版顧客満足度指数開発」（サービス産業生産性協議会）のモデル開発等、「サービスイノベーション人材育成推進プログラム」（文部科学省）、SIP（戦略的イノベーション創造プログラム、内閣府）、未来社会創造事業（科学技術振興機構）等の研究プロジェクトに参画。地域ではMラボ、マッチングラボの実行委員長等を務める。</p><p class="career">略歴/横浜市立大学商学部助教授等を経て、現職。神戸大学キャリアセンター長（2018年4月より）。</p></div></div></div><div class="right-box"><div class="pic"><p></p></div></div><p class="people"><img src="assets/images/profile/people3.png"></p><div class="scroll">SCROLL<span class="line1"></span><span class="line2"></span></div></div></div>'),
        e.join("")
    }
}
, function(t, e, i) {
    i(2);
    t.exports = function(t) {
        var e = [];
        return e.push('<div id="Contact"><div class="container"><div class="left-box"><div class="left-box-container"><h2 class="ttl">コンタクト</h2><div class="txts"><dl class="list1"><dt>会社名</dt><dd>株式会社Ku:P (キューブ)</dd></dl><dl class="list2"><dt>住所</dt><dd>〒564-8680 大阪府吹田市山手町3丁目3番35号<br>\n関西大学イノベーション創生センター</dd></dl><dl class="list3"><dt>事業内容</dt><dd>植物由来技術の提供、並びに各種技術を用いたソリューション事業。<br>\nマーケティングコンサルティング事業。<br>\n事業インキュベーションプログラムの開発及び企業等への研修事業。</dd></dl><dl class="list4"><dt>役員</dt><dd>代表取締役　西岡健一<br>\n取締役　　　荒木孝治　小出芳栄　奥田良太</dd></dl><dl class="list5"><dt>設立</dt><dd>2017年2月1日</dd></dl><p class="bt"><a href="mailto:&#107;&#117;&#117;&#112;&#45;&#105;&#110;&#102;&#111;&#64;&#99;&#109;&#46;&#107;&#97;&#110;&#115;&#97;&#105;&#45;&#117;&#46;&#97;&#99;&#46;&#106;&#112;"><span>お問い合わせ</span></a></p></div></div></div><div class="right-box"><div id="Gmap"></div></div></div></div>'),
        e.join("")
    }
}
]),
function() {
    var t = {}.hasOwnProperty;
    this.Router = function(e) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }
        return function(e, i) {
            for (var o in i)
                t.call(i, o) && (e[o] = i[o]);
            function s() {
                this.constructor = e
            }
            s.prototype = i.prototype,
            e.prototype = new s,
            e.__super__ = i.prototype
        }(i, Kazitori),
        i.prototype.root = "/",
        i.prototype.routes = {
            "/": "top",
            "/about": "about",
            "/mission1": "mission1",
            "/mission2": "mission2",
            "/profile1": "profile1",
            "/profile2": "profile2",
            "/profile3": "profile3",
            "/contact": "contact"
        },
        i.prototype.top = function() {
            return window._App._scene.atSceneGoto("top")
        }
        ,
        i.prototype.about = function() {
            return window._App._scene.atSceneGoto("about")
        }
        ,
        i.prototype.mission1 = function() {
            return window._App._scene.atSceneGoto("mission1")
        }
        ,
        i.prototype.mission2 = function() {
            return window._App._scene.atSceneGoto("mission2")
        }
        ,
        i.prototype.profile1 = function() {
            return window._App._scene.atSceneGoto("profile1")
        }
        ,
        i.prototype.profile2 = function() {
            return window._App._scene.atSceneGoto("profile2")
        }
        ,
        i.prototype.profile3 = function() {
            return window._App._scene.atSceneGoto("profile3")
        }
        ,
        i.prototype.contact = function() {
            return window._App._scene.atSceneGoto("contact")
        }
        ,
        i
    }()
}
.call(this),
function() {
    this.SceneManager = function() {
        function t() {
            this._currentScene = null,
            this._beforeScene = null,
            this._movingSceneFlg = !1,
            this._SceneData = {
                top: {
                    page: window._App._Top,
                    title: "Ku:P",
                    removeTime: 2e3
                },
                about: {
                    page: window._App._About,
                    title: "Ku:Pについて | Ku:P",
                    removeTime: 2e3
                },
                mission1: {
                    page: window._App._Mission1,
                    title: "ミッション | Ku:P",
                    removeTime: 2e3
                },
                mission2: {
                    page: window._App._Mission2,
                    title: "ミッション | Ku:P",
                    removeTime: 2e3
                },
                profile1: {
                    page: window._App._Profile1,
                    title: "プロフィール | 西岡健一 | Ku:P",
                    removeTime: 2e3
                },
                profile2: {
                    page: window._App._Profile2,
                    title: "プロフィール | 荒木孝治 | Ku:P",
                    removeTime: 2e3
                },
                profile3: {
                    page: window._App._Profile3,
                    title: "プロフィール | 南知惠子 | Ku:P",
                    removeTime: 2e3
                },
                contact: {
                    page: window._App._Contact,
                    title: "コンタクト | Ku:P",
                    removeTime: 2e3
                }
            },
            this.init()
        }
        return t.prototype.init = function() {}
        ,
        t.prototype.atSceneGoto = function(t) {
            var e, i;
            i = this,
            this._movingSceneFlg = !0,
            this._currentScene = t,
            this._beforeScene ? (e = this._SceneData[this._beforeScene],
            createjs.Tween.get(this).call(function() {
                i.atSceneRemove()
            }),
            createjs.Tween.get(this).wait(e.removeTime).call(function() {
                i.atSceneAdd(),
                i._movingSceneFlg = !1,
                i.atSceneChangeEnd()
            })) : createjs.Tween.get(this).call(function() {
                i.atSceneAdd(),
                i._movingSceneFlg = !1,
                i.atSceneChangeEnd()
            }),
            this.atSceneChange(),
            $("body").css({
                "pointer-events": "none"
            })
        }
        ,
        t.prototype.atSceneAdd = function() {
            var t, e;
            t = window._App,
            e = this._SceneData[this._currentScene],
            null === this._beforeScene && (t._container.addChild(t._Threejs),
            t._container.addChild(t._Bg),
            t._container.addChild(t._Header)),
            t._container.contains(e.page) ? e.page.addedAC() : t._container.addChild(e.page),
            document.title = e.title,
            this._beforeScene = this._currentScene,
            t._container.setChildIndex(t._Threejs, 0),
            t._container.setChildIndex(e.page, t._container.getNumChildren() - 1),
            t._container.contains(t._Loader) && t._container.setChildIndex(t._Loader, t._container.getNumChildren() - 1),
            $("body").css({
                "pointer-events": "auto"
            })
        }
        ,
        t.prototype.atSceneRemove = function() {
            this._SceneData[this._beforeScene].page.toRemoveAC()
        }
        ,
        t.prototype.atSceneChange = function() {
            var t, e;
            for (t in e = this._SceneData)
                e[t],
                this._SceneData[t].page.sceneChange()
        }
        ,
        t.prototype.atSceneChangeEnd = function() {
            var t, e;
            for (t in e = this._SceneData)
                e[t],
                this._SceneData[t].page.sceneChangeEnd()
        }
        ,
        t.prototype.atSceneNextGoto = function() {
            var t, e, i, o, s, n;
            for (o in this,
            t = [],
            i = 0,
            e = 0,
            n = this._SceneData)
                n[o],
                t[i] = o,
                o === this._currentScene && (e = i),
                i++;
            e !== Object.keys(this._SceneData).length - 1 && (s = "top" === t[++e] ? "/" : "/" + t[e],
            window._App._router.change(s))
        }
        ,
        t.prototype.atScenePrevGoto = function() {
            var t, e, i, o, s, n;
            for (o in this,
            t = [],
            i = 0,
            e = 0,
            n = this._SceneData)
                n[o],
                t[i] = o,
                o === this._currentScene && (e = i),
                i++;
            0 !== e && (s = "top" === t[--e] ? "/" : "/" + t[e],
            window._App._router.change(s))
        }
        ,
        t
    }()
}
.call(this);
var Bvh = function() {
    "use strict";
    var t, e, i, o, s, n, a = (t = function() {
        i.apply(this, arguments)
    }
    ,
    i = function(t, e) {
        var i;
        "string" == typeof t ? (i = l(t, e),
        this.bones = i.bones,
        this.rootBone = i.rootBone,
        this.numFrames = i.numFrames,
        this.frameTime = i.frameTime,
        this.frames = i.frames) : (this.bones = [],
        this.rootBone = null,
        this.numFrames = 0,
        this.frameTime = 0,
        this.frames = 0),
        this.isLoop = !1
    }
    ,
    (e = t.prototype).clone = function() {
        var e, i, o, s, n, a, l, h, p, c, d, u;
        for (e = new t,
        i = {},
        o = this.bones,
        a = e.bones,
        p = 0,
        c = o.length; p < c; p++)
            s = o[p],
            (l = new r(s.name)).channels = s.channels,
            l.offsetX = s.offsetX,
            l.offsetY = s.offsetY,
            l.offsetZ = s.offsetZ,
            l.endOffsetX = s.endOffsetX,
            l.endOffsetY = s.endOffsetY,
            l.endOffsetZ = s.endOffsetZ,
            l.Xposition = s.Xposition,
            l.Yposition = s.Yposition,
            l.Zposition = s.Zposition,
            l.Xrotation = s.Xrotation,
            l.Yrotation = s.Yrotation,
            l.Zrotation = s.Zrotation,
            l.numChannels = s.numChannels,
            l.isEnd = s.isEnd,
            a.push(l),
            i[l.name] = l,
            null === s.parent && (e.rootBone = l);
        for (p = 0,
        c = o.length; p < c; p++)
            for (l = i[(s = o[p]).name],
            null !== s.parent && (l.parent = i[s.parent.name]),
            n = s.children,
            h = l.children,
            d = 0,
            u = n.length; d < u; d++)
                h.push(i[n[d].name]);
        return e.numFrames = this.numFrames,
        e.frameTime = this.frameTime,
        e.frames = this.frames,
        e
    }
    ,
    e.gotoFrame = function(t) {
        var e, i, o;
        if (t |= 0,
        e = this.numFrames,
        this.isLoop)
            for (; t >= e; )
                t -= e;
        else
            t >= e && (t = e - 1);
        for (i = 0,
        o = (t = this.frames[t]).length; i < o; i++)
            this.setBoneProp(i, t[i])
    }
    ,
    e.setBoneProp = function(t, e) {
        var i, o, s, n, a, r;
        for (i = 0,
        a = 0,
        r = (o = this.bones).length; a < r; a++)
            if ((i += (s = o[a]).numChannels) > t) {
                n = t - (i - s.numChannels),
                s[s.channels[n]] = e;
                break
            }
    }
    ,
    t), r = (s = (o = function() {
        n.apply(this, arguments)
    }
    ).prototype = {
        get isRoot() {
            return null === this.parent
        }
    },
    n = function(t) {
        this.parent = null,
        this.channels = [],
        this.children = [],
        this.name = t,
        this.offsetX = this.offsetY = this.offsetZ = 0,
        this.endOffsetX = this.endOffsetY = this.endOffsetZ = 0,
        this.Xposition = this.Yposition = this.Zposition = 0,
        this.Xrotation = this.Yrotation = this.Zrotation = 0,
        this.numChannels = 0,
        this.isEnd = !1
    }
    ,
    s.setOffset = function(t) {
        var e;
        3 === (e = t.split(/\s+/)).length && (this.offsetX = +e[0],
        this.offsetY = +e[1],
        this.offsetZ = +e[2])
    }
    ,
    s.setEndOffset = function(t) {
        var e;
        3 === (e = t.split(/\s+/)).length && (this.endOffsetX = +e[0],
        this.endOffsetY = +e[1],
        this.endOffsetZ = +e[2])
    }
    ,
    s.setChannels = function(t) {
        var e, i;
        return 1 <= (i = 0 | (e = t.split(/\s+/))[0]) && i <= 6 && (this.numChannels = i,
        this.channels = e.slice(1)),
        i
    }
    ,
    s.appendChild = function(t) {
        this.children.push(t),
        t.parent = this
    }
    ,
    o), l = function(t, e) {
        var i, o, s, n, a, l;
        if (l = (e = e || {}).thinout || 1,
        "string" == typeof t) {
            for (s = 0,
            n = (i = t.split("\n")).length; s < n && "HIERARCHY" !== (o = i[s].trim()); s++)
                ;
            var h, p, c, d, u, _, f, m, w, g = [], x = [], v = !1;
            for (d = 0,
            s++; s < n; s++)
                if (0 !== (o = i[s].trim()).length) {
                    if ("MOTION" === o)
                        break;
                    null !== (u = /^ROOT\s+(.+)$/.exec(o)) ? (p = h = new r(u[1]),
                    g.push(p),
                    x.push(p)) : null !== (u = /^JOINT\s+(.+)$/.exec(o)) ? (c = new r(u[1]),
                    p.appendChild(c),
                    g.push(p = c),
                    x.push(p)) : null !== (u = /^End\s+(.+)$/.exec(o)) ? p.isEnd = v = !0 : null !== (u = /^OFFSET\s+(.+)$/.exec(o)) ? null !== p && (v ? p.setEndOffset(u[1]) : p.setOffset(u[1])) : null !== (u = /^CHANNELS\s+(.+)$/.exec(o)) ? null !== p && (d += p.setChannels(u[1])) : "}" === o && (v ? v = !1 : (g.pop(),
                    p = g[g.length - 1] || h))
                }
            for (_ = f = 0,
            m = [],
            s++,
            a = 0; s < n; s++,
            a++)
                if (0 !== (o = i[s].trim()).length)
                    if (null !== (u = /^Frames:\s+(\d+)$/.exec(o)))
                        _ = +u[1] / l | 0,
                        isNaN(_) && (_ = 0);
                    else if (null !== (u = /^Frame Time:\s+([0-9.]+)$/.exec(o)))
                        f = +u[1] * l,
                        isNaN(f) && (f = 0);
                    else if (a % l == 0 && ((w = o.split(/\s+/).map(function(t) {
                        return +t
                    })).length === d && m.push(new Float32Array(w)),
                    m.length == _))
                        break;
            return {
                bones: x,
                rootBone: h,
                numFrames: _,
                frameTime: f,
                frames: m
            }
        }
    };
    return a
}()
  , SimplexNoise = function() {
    var t = function(t) {
        null == t && (t = Math),
        this.grad3 = [[1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0], [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1], [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]],
        this.p = [];
        for (var e = 0; e < 256; e++)
            this.p[e] = Math.floor(256 * t.random());
        this.perm = [];
        for (e = 0; e < 512; e++)
            this.perm[e] = this.p[255 & e];
        this.simplex = [[0, 1, 2, 3], [0, 1, 3, 2], [0, 0, 0, 0], [0, 2, 3, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 2, 3, 0], [0, 2, 1, 3], [0, 0, 0, 0], [0, 3, 1, 2], [0, 3, 2, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 3, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 2, 0, 3], [0, 0, 0, 0], [1, 3, 0, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 3, 0, 1], [2, 3, 1, 0], [1, 0, 2, 3], [1, 0, 3, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 3, 1], [0, 0, 0, 0], [2, 1, 3, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 1, 3], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [3, 0, 1, 2], [3, 0, 2, 1], [0, 0, 0, 0], [3, 1, 2, 0], [2, 1, 0, 3], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [3, 1, 0, 2], [0, 0, 0, 0], [3, 2, 0, 1], [3, 2, 1, 0]]
    };
    return t.prototype.dot = function(t, e, i) {
        return t[0] * e + t[1] * i
    }
    ,
    t.prototype.noise = function(t, e) {
        var i, o, s = (t + e) * (.5 * (Math.sqrt(3) - 1)), n = Math.floor(t + s), a = Math.floor(e + s), r = (3 - Math.sqrt(3)) / 6, l = (n + a) * r, h = t - (n - l), p = e - (a - l);
        h > p ? (i = 1,
        o = 0) : (i = 0,
        o = 1);
        var c = h - i + r
          , d = p - o + r
          , u = h - 1 + 2 * r
          , _ = p - 1 + 2 * r
          , f = 255 & n
          , m = 255 & a
          , w = this.perm[f + this.perm[m]] % 12
          , g = this.perm[f + i + this.perm[m + o]] % 12
          , x = this.perm[f + 1 + this.perm[m + 1]] % 12
          , v = .5 - h * h - p * p
          , y = .5 - c * c - d * d
          , T = .5 - u * u - _ * _;
        return 70 * ((v < 0 ? 0 : (v *= v) * v * this.dot(this.grad3[w], h, p)) + (y < 0 ? 0 : (y *= y) * y * this.dot(this.grad3[g], c, d)) + (T < 0 ? 0 : (T *= T) * T * this.dot(this.grad3[x], u, _)))
    }
    ,
    t.prototype.noise3d = function(t, e, i) {
        var o, s, n, a, r, l, h = (t + e + i) * (1 / 3), p = Math.floor(t + h), c = Math.floor(e + h), d = Math.floor(i + h), u = 1 / 6, _ = (p + c + d) * u, f = t - (p - _), m = e - (c - _), w = i - (d - _);
        f >= m ? m >= w ? (o = 1,
        s = 0,
        n = 0,
        a = 1,
        r = 1,
        l = 0) : f >= w ? (o = 1,
        s = 0,
        n = 0,
        a = 1,
        r = 0,
        l = 1) : (o = 0,
        s = 0,
        n = 1,
        a = 1,
        r = 0,
        l = 1) : m < w ? (o = 0,
        s = 0,
        n = 1,
        a = 0,
        r = 1,
        l = 1) : f < w ? (o = 0,
        s = 1,
        n = 0,
        a = 0,
        r = 1,
        l = 1) : (o = 0,
        s = 1,
        n = 0,
        a = 1,
        r = 1,
        l = 0);
        var g = f - o + u
          , x = m - s + u
          , v = w - n + u
          , y = f - a + 2 * u
          , T = m - r + 2 * u
          , M = w - l + 2 * u
          , b = f - 1 + .5
          , E = m - 1 + .5
          , A = w - 1 + .5
          , C = 255 & p
          , $ = 255 & c
          , P = 255 & d
          , O = this.perm[C + this.perm[$ + this.perm[P]]] % 12
          , S = this.perm[C + o + this.perm[$ + s + this.perm[P + n]]] % 12
          , B = this.perm[C + a + this.perm[$ + r + this.perm[P + l]]] % 12
          , L = this.perm[C + 1 + this.perm[$ + 1 + this.perm[P + 1]]] % 12
          , V = .6 - f * f - m * m - w * w
          , z = .6 - g * g - x * x - v * v
          , R = .6 - y * y - T * T - M * M
          , j = .6 - b * b - E * E - A * A;
        return 32 * ((V < 0 ? 0 : (V *= V) * V * this.dot(this.grad3[O], f, m, w)) + (z < 0 ? 0 : (z *= z) * z * this.dot(this.grad3[S], g, x, v)) + (R < 0 ? 0 : (R *= R) * R * this.dot(this.grad3[B], y, T, M)) + (j < 0 ? 0 : (j *= j) * j * this.dot(this.grad3[L], b, E, A)))
    }
    ,
    t
}();
(function() {
    window._Scroller = {},
    $(function() {
        window._Scroller = new Scroller
    }),
    this.Scroller = function() {
        function t() {
            this._targetY = 0,
            this._oldY = 0,
            this._y1 = 0,
            this._y2 = 0,
            this._isDown = !1,
            this._isActive = !1,
            this._targetDevce = null,
            this._wrapper = null,
            this._btn = null,
            this._moveS = 20,
            this._scale = 1,
            this.init()
        }
        return t.prototype.init = function() {}
        ,
        t.prototype.addScroller = function() {
            var t, e;
            this._isActive = !0,
            e = this,
            $("#Container").append('<div id="Scroller"><div id="Scroller_btn"></div></div>'),
            $("html").css({
                "overflow-y": "hidden"
            }),
            $("#Scroller").css({
                position: "absolute",
                width: "20px",
                height: "500px",
                top: "10px",
                right: "0",
                opacity: "1"
            }),
            $("#Scroller_btn").css({
                position: "absolute",
                width: "20px",
                height: "70px",
                top: "0",
                left: "0",
                "background-image": 'url("/assets/images/common/scroller_btn.png")'
            }),
            this._wrapper = document.getElementById("Scroller"),
            this._btn = document.getElementById("Scroller_btn"),
            t = new Util,
            this._targetDevce = t.targetDevce(),
            "PC" === this._targetDevce ? (this._btn.addEventListener("mouseover", function(t) {
                e.scrollerBtAction("over", t)
            }, !1),
            this._btn.addEventListener("mouseout", function(t) {
                e.scrollerBtAction("out", t)
            }, !1),
            this._btn.addEventListener("mousedown", function(t) {
                e.scrollerBtAction("down", t)
            }, !1),
            document.addEventListener("mousemove", function(t) {
                e.scrollerBtAction("move", t)
            }, !1),
            document.addEventListener("mouseup", function(t) {
                e.scrollerBtAction("up", t)
            }, !1),
            $(document).mousewheel(function(t, i, o, s) {
                e.scrollerWheelAction(i)
            })) : "TB" !== this._targetDevce && "SP" !== this._targetDevce || (document.body.addEventListener("touchstart", function(t) {
                e.scrollerTouchAction("start", t)
            }, !1),
            document.body.addEventListener("touchmove", function(t) {
                e.scrollerTouchAction("move", t)
            }, !1),
            document.body.addEventListener("touchend", function(t) {
                e.scrollerTouchAction("end", t)
            }, !1)),
            window.addEventListener("resize", function(t) {
                e.resizeAc()
            }, !1),
            this.resizeAc()
        }
        ,
        t.prototype.scrollerBtAction = function(t, e) {
            var i;
            "over" === t ? document.body.style.cursor = "pointer" : "out" === t ? document.body.style.cursor = "" : "down" === t ? (this._isDown = !0,
            this._y1 = this._y2 = e.clientY,
            console.log(e)) : "move" === t ? (this._isDown && (this._y2 = e.clientY,
            i = this._y2 - this._y1,
            this._targetY = this._oldY + i,
            this._targetY <= 0 ? this._targetY = 0 : this._targetY >= this._wrapper.clientHeight - this._btn.clientHeight && (this._targetY = this._wrapper.clientHeight - this._btn.clientHeight),
            this._btn.style.top = this._targetY + "px"),
            console.log(this._wrapper)) : "up" === t && this._isDown && (this._isDown = !1,
            this._oldY = this._targetY)
        }
        ,
        t.prototype.scrollerWheelAction = function(t) {
            this._isActive && (this._targetY = t < 0 ? this._oldY + this._moveS : this._oldY - this._moveS,
            this._targetY <= 0 ? this._targetY = 0 : this._targetY >= this._wrapper.clientHeight - this._btn.clientHeight && (this._targetY = this._wrapper.clientHeight - this._btn.clientHeight),
            this._btn.style.top = this._targetY + "px",
            this._oldY = this._targetY),
            console.log(t)
        }
        ,
        t.prototype.scrollerTouchAction = function(t, e) {
            var i, o;
            this._isActive && ("start" === t ? (e.preventDefault(),
            o = e.touches,
            this._isDown = !0,
            this._y1 = this._y2 = o[0].pageY) : "move" === t ? this._isDown && (o = e.touches,
            this._y2 = o[0].pageY,
            i = this._y1 - this._y2,
            this._targetY = this._oldY + i,
            this._targetY <= 0 ? this._targetY = 0 : this._targetY >= this._wrapper.clientHeight - this._btn.clientHeight && (this._targetY = this._wrapper.clientHeight - this._btn.clientHeight),
            this._btn.style.top = this._targetY + "px") : "end" === t && this._isDown && (this._isDown = !1,
            this._oldY = this._targetY))
        }
        ,
        t.prototype.removeScroller = function() {}
        ,
        t.prototype.getScrollY = function() {
            var t;
            return t = this._wrapper.clientHeight - this._btn.clientHeight,
            this._targetY / t
        }
        ,
        t.prototype.resizeAc = function() {
            var t;
            t = window.innerHeight - 20,
            this._wrapper.style.height = t + "px",
            this._scale = t / 500,
            this._btn.style.height = 70 * this._scale + "px",
            this._targetY + this._btn.clientHeight > this._wrapper.clientHeight && (this._btn.style.top = this._wrapper.clientHeight - this._btn.clientHeight + "px",
            this._targetY = this._oldY = this._wrapper.clientHeight - this._btn.clientHeight)
        }
        ,
        t
    }()
}
).call(this),
function() {
    this.Util = function() {
        function t() {}
        return t.prototype.targetResize = function(t) {
            return {
                width: $("#CanvasContainer").width() * devicePixelRatio,
                height: $("#CanvasContainer").height() * devicePixelRatio
            }
        }
        ,
        t.prototype.targetDevce = function() {
            var t, e;
            return e = "PC",
            (t = navigator.userAgent).indexOf("Android") > 0 && -1 === t.indexOf("Mobile") || t.indexOf("iPad") > 0 ? e = "TB" : (t.indexOf("iPhone") > 0 && -1 === t.indexOf("iPad") || t.indexOf("iPod") > 0 || t.indexOf("Android") > 0 && t.indexOf("Mobile") > 0) && (e = "SP"),
            e
        }
        ,
        t.prototype.targetBrowser = function() {
            var t, e, i;
            return e = window.navigator.userAgent.toLowerCase(),
            i = window.navigator.appVersion.toLowerCase(),
            t = "unknown",
            -1 !== e.indexOf("edge") ? t = "edge" : -1 !== e.indexOf("msie") ? t = -1 !== i.indexOf("msie 6.") ? "ie6" : -1 !== i.indexOf("msie 7.") ? "ie7" : -1 !== i.indexOf("msie 8.") ? "ie8" : -1 !== i.indexOf("msie 9.") ? "ie9" : -1 !== i.indexOf("msie 10.") ? "ie10" : "ie" : -1 !== e.indexOf("trident/7") ? t = "ie11" : -1 !== e.indexOf("chrome") ? t = "chrome" : -1 !== e.indexOf("safari") ? t = "safari" : -1 !== e.indexOf("opera") ? t = "opera" : -1 !== e.indexOf("firefox") && (t = "firefox"),
            t
        }
        ,
        t.prototype.useWebGL = function() {
            var t, e;
            try {
                return e = (t = document.createElement("canvas")).getContext("webgl") || t.getContext("experimental-webgl"),
                !!(window.WebGLRenderingContext && e && e.getShaderPrecisionFormat)
            } catch (t) {
                return !1
            }
        }
        ,
        t.prototype.partsLoad = function(t, e, i) {
            var o;
            o = new createjs.LoadQueue,
            window._App._Loader._lenNum++,
            o.addEventListener("fileload", function(t) {
                setTimeout(function() {
                    t.item.type === createjs.LoadQueue.IMAGE && (void 0 !== i && i.push(t.result),
                    void 0 !== e && e())
                }, 100)
            }),
            o.addEventListener("progress", function(t) {}),
            o.addEventListener("complete", function(t) {
                setTimeout(function() {
                    return window._App._Loader._compNum++
                }, 100)
            }),
            o.loadManifest([{
                id: "img",
                src: t
            }])
        }
        ,
        t.prototype.partsLoadAdd = function(t, e, i, o) {
            var s;
            s = new createjs.LoadQueue,
            window._App._Loader._lenNum++,
            s.addEventListener("fileload", function(e) {
                setTimeout(function() {
                    var s;
                    if (e.item.type === createjs.LoadQueue.IMAGE && (s = new createjs.Bitmap(e.result),
                    t.addChild(s),
                    null !== s.getBounds() && ("left" === i ? (s.x = 0,
                    s.y = 0) : "leftCenter" === i ? (s.x = 0,
                    s.y = -s.getBounds().height / 2) : "leftBottom" === i ? (s.x = 0,
                    s.y = -s.getBounds().height) : "center" === i ? (s.x = -s.getBounds().width / 2,
                    s.y = -s.getBounds().height / 2) : "centerTop" === i ? (s.x = -s.getBounds().width / 2,
                    s.y = 0) : "centerBottom" === i ? (s.x = -s.getBounds().width / 2,
                    s.y = -s.getBounds().height) : "right" === i ? (s.x = -s.getBounds().width,
                    s.y = 0) : "rightCenter" === i ? (s.x = -s.getBounds().width,
                    s.y = -s.getBounds().height / 2) : "rightBottom" === i && (s.x = -s.getBounds().width,
                    s.y = -s.getBounds().height)),
                    void 0 !== o && o()),
                    e.item.type === createjs.LoadQueue.SVG && (s = new createjs.Bitmap(e.item.src),
                    t.addChild(s),
                    null !== s.getBounds() && ("left" === i ? (s.x = 0,
                    s.y = 0) : "leftCenter" === i ? (s.x = 0,
                    s.y = -s.getBounds().height / 2) : "leftBottom" === i ? (s.x = 0,
                    s.y = -s.getBounds().height) : "center" === i ? (s.x = -s.getBounds().width / 2,
                    s.y = -s.getBounds().height / 2) : "centerTop" === i ? (s.x = -s.getBounds().width / 2,
                    s.y = 0) : "centerBottom" === i ? (s.x = -s.getBounds().width / 2,
                    s.y = -s.getBounds().height) : "right" === i ? (s.x = -s.getBounds().width,
                    s.y = 0) : "rightCenter" === i ? (s.x = -s.getBounds().width,
                    s.y = -s.getBounds().height / 2) : "rightBottom" === i && (s.x = -s.getBounds().width,
                    s.y = -s.getBounds().height)),
                    void 0 !== o))
                        return o()
                }, 100)
            }),
            s.addEventListener("progress", function(t) {}),
            s.addEventListener("complete", function(t) {
                setTimeout(function() {
                    return window._App._Loader._compNum++
                }, 100)
            }),
            s.loadManifest([{
                id: "img",
                src: e
            }])
        }
        ,
        t.prototype.partsDOMLoad = function(t, e, i) {
            var o;
            o = new createjs.LoadQueue,
            window._App._Loader._lenNum++,
            o.addEventListener("fileload", function(e) {
                setTimeout(function() {
                    if (t.prepend(e.result),
                    void 0 !== i)
                        return i()
                }, 100)
            }),
            o.addEventListener("progress", function(t) {}),
            o.addEventListener("complete", function(t) {
                setTimeout(function() {
                    return window._App._Loader._compNum++
                }, 100)
            }),
            o.addEventListener("progress", function(t) {}),
            o.loadFile(e)
        }
        ,
        t.prototype.partsPixiLoad = function(t, e) {
            var i;
            i = new PIXI.loaders.Loader,
            window._App._Loader._lenNum++,
            i.add(t),
            i.on("complete", function() {
                return setTimeout(function() {
                    if (window._App._Loader._compNum++,
                    new PIXI.Texture.fromFrame(t),
                    void 0 !== e)
                        return e()
                }, 100)
            }),
            i.load()
        }
        ,
        t.prototype.getFullBaseName = function(t) {
            var e;
            return e = "",
            t && (e = t.split("/").pop()),
            e
        }
        ,
        t.prototype.getBaseName = function(t) {
            return this.getFullBaseName(t).replace(/[\?#].*$/g, "")
        }
        ,
        t.prototype.getFileName = function(t) {
            return this.getBaseName(t).replace(/\.[^.]+$/, "")
        }
        ,
        t.prototype.getDirName = function(t) {
            var e;
            return (e = t.replace(/\\/g, "/").replace(/\/[^/]*$/, "")).match(/^[^/]*\.[^/\.]*$/) && (e = ""),
            e
        }
        ,
        t.prototype.getRootRelative = function(t) {
            return t.replace(/\\/g, "/").replace(/^[^/]*\/\/[^/]*/, "")
        }
        ,
        t.prototype.getHash = function(t) {
            var e, i;
            return i = "",
            t && (e = t.split("/").pop().match(/#([^#]+)$/)) && e[1] && (i = e[1]),
            i
        }
        ,
        t.prototype.getParams = function(t) {
            var e, i, o, s, n, a, r;
            if (s = {},
            "" !== (o = this.param(t)))
                for (i = [],
                e = a = 0,
                r = (n = o.split("&")).length; 0 <= r ? a <= r : a >= r; e = 0 <= r ? ++a : --a)
                    s[(i = n[e].split("="))[0]] = i[1];
            return s
        }
        ,
        t.prototype.shuffle = function(t) {
            var e, i, o;
            for (e = t.length; e; )
                i = Math.floor(Math.random() * e),
                o = t[--e],
                t[e] = t[i],
                t[i] = o;
            return t
        }
        ,
        t.prototype.changeOverString = function(t, e) {
            return "...",
            t.length < e ? t : t = t.slice(0, e - 1) + "..."
        }
        ,
        t.prototype.setGmap = function(t) {
            var e, i, o, s, n, a, r, l, h, p, c, d, u;
            if (u = {
                lat: "",
                marker: "",
                info: ""
            },
            t)
                for (n in t)
                    d = t[n],
                    u[n] = d;
            e = u.lat.split(","),
            c = [{
                featureType: "all",
                stylers: [{
                    saturation: -100
                }]
            }],
            p = {
                zoom: 17,
                center: a = new google.maps.LatLng(e[0],e[1]),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: !1,
                mapTypeId: "mapID"
            },
            r = new google.maps.Map(document.getElementById("Gmap"),p),
            l = new google.maps.StyledMapType(c),
            r.mapTypes.set("mapID", l),
            "" !== u.marker ? (i = new google.maps.MarkerImage(u.marker,new google.maps.Size(42,50),new google.maps.Point(0,0)),
            h = new google.maps.Marker({
                position: a,
                map: r,
                icon: i
            })) : h = new google.maps.Marker({
                position: a,
                map: r
            }),
            "" !== u.info && (s = {
                position: a,
                content: u.info
            },
            (o = new google.maps.InfoWindow(s)).open(r, h),
            google.maps.event.addListener(h, "click", function() {
                o.open(r, h)
            }))
        }
        ,
        t
    }()
}
.call(this);
