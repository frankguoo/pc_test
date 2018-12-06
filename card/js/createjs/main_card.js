(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,492,335);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.card_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.card();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_1, new cjs.Rectangle(0,0,492,335), null);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.card_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,246,167.5);
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, 255, 0, 0, 0)];
	this.instance.cache(-2,-2,496,339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.07,x:-4.5},0).wait(1).to({scaleX:1,x:0},0).wait(2).to({x:-3.1},0).wait(2).to({x:0,y:4.7},0).wait(3).to({scaleY:0.95,x:1.6,y:1.6},0).wait(2).to({scaleY:1,x:3.1,y:0},0).wait(2).to({x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246,-167.5,492,335);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.card_1();
	this.instance.parent = this;
	this.instance.setTransform(-246,-167.5);
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, -255, 43, -255, 0)];
	this.instance.cache(-2,-2,496,339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-247.5,y:-170.6},0).wait(1).to({x:-235.1,y:-167.5},0).wait(2).to({x:-249.1,y:-164.4},0).wait(2).to({x:-246,y:-170.6},0).wait(1).to({x:-236.7,y:-167.5},0).wait(1).to({x:-246},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246,-167.5,492,335);


(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.card_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.5,1,1,0,0,0,246,167.5);
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 255, 0)];
	this.instance.cache(-2,-2,496,339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:0},0).wait(3).to({scaleY:0.94,y:4.7},0).wait(2).to({scaleY:1,y:0},0).wait(1).to({x:12.4},0).wait(1).to({x:0},0).wait(1).to({regX:245.9,scaleX:1.02,x:9.3,y:-3.1},0).wait(1).to({regX:246,scaleX:1,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246,-169,492,335);


// stage content:
(lib.main_card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		停止影片片段/影片
		停止特定影片片段或影片。
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47));

	// green
	this.instance = new lib.green();
	this.instance.parent = this;
	this.instance.setTransform(500,500);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:3.9,x:504.2,y:499.8,alpha:0.005},0).wait(1).to({x:504.6,y:499.5,alpha:0.012},0).wait(1).to({x:505.1,y:499.2,alpha:0.021},0).wait(1).to({x:505.9,y:498.7,alpha:0.034},0).wait(1).to({x:507,y:498,alpha:0.052},0).wait(1).to({x:508.6,y:496.9,alpha:0.08},0).wait(1).to({x:511.7,y:494.9,alpha:0.131},0).wait(1).to({x:524.3,y:486.7,alpha:0.343},0).wait(1).to({x:527.8,y:484.4,alpha:0.403},0).wait(1).to({x:529.2,y:483.5,alpha:0.426},0).wait(1).to({x:529.9,y:483,alpha:0.438},0).wait(1).to({x:530.3,y:482.8,alpha:0.445},0).wait(1).to({x:530.5,y:482.6,alpha:0.448},0).wait(1).to({regX:0,x:526.7,alpha:0.449},0).wait(1).to({regX:3.9,x:530.6},0).wait(2).to({x:530.7,y:482.5,alpha:0.45},0).wait(1).to({rotation:-0.1,x:530.8,y:482.4},0).wait(1).to({x:530.9,y:482.3},0).wait(1).to({rotation:-0.2,x:531.1,y:482.2,alpha:0.451},0).wait(1).to({rotation:-0.3,x:531.3,y:482,alpha:0.452},0).wait(1).to({x:531.6,y:481.9},0).wait(1).to({rotation:-0.4,x:531.9,y:481.6,alpha:0.453},0).wait(1).to({rotation:-0.5,x:532.2,y:481.4,alpha:0.454},0).wait(1).to({rotation:-0.6,x:532.5,y:481.2,alpha:0.455},0).wait(1).to({rotation:-0.8,x:532.9,y:480.9,alpha:0.457},0).wait(1).to({rotation:-0.9,x:533.3,y:480.6,alpha:0.458},0).wait(1).to({rotation:-1.1,x:533.8,y:480.3,alpha:0.459},0).wait(1).to({regX:0,rotation:-1.2,x:530.4,y:479.9,alpha:0.461},0).wait(1).to({regX:3.9,rotation:-1.1,x:536.2,y:478.4,alpha:0.456},0).wait(1).to({rotation:-1,x:538.5,y:476.7,alpha:0.45},0).wait(1).to({rotation:-0.9,x:541.4,y:474.7,alpha:0.442},0).wait(1).to({rotation:-0.7,x:544.8,y:472.2,alpha:0.434},0).wait(1).to({rotation:-0.5,x:548.7,y:469.4,alpha:0.424},0).wait(1).to({rotation:-0.3,x:553.2,y:466.2,alpha:0.412},0).wait(1).to({regX:0,rotation:0,x:554.6,y:462.5,alpha:0.398},0).wait(1).to({regX:3.9,x:558.1,y:462.7,alpha:0.396},0).wait(1).to({x:557.2,y:463.3,alpha:0.389},0).wait(1).to({x:555.8,y:464.3,alpha:0.379},0).wait(1).to({x:553.7,y:465.7,alpha:0.363},0).wait(1).to({x:550.8,y:467.7,alpha:0.343},0).wait(1).to({x:547,y:470.3,alpha:0.315},0).wait(1).to({x:542,y:473.8,alpha:0.278},0).wait(1).to({x:535.2,y:478.4,alpha:0.229},0).wait(1).to({x:525.7,y:485,alpha:0.159},0).wait(1).to({regX:0,x:500,y:500,alpha:0},0).wait(1));

	// red
	this.instance_1 = new lib.red();
	this.instance_1.parent = this;
	this.instance_1.setTransform(500,500);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-4.6,regY:2.3,x:495.5,y:502.4,alpha:0.004},0).wait(1).to({y:502.5,alpha:0.01},0).wait(1).to({x:495.6,y:502.6,alpha:0.019},0).wait(1).to({x:495.8,y:502.8,alpha:0.03},0).wait(1).to({x:495.9,y:503,alpha:0.046},0).wait(1).to({x:496.2,y:503.4,alpha:0.071},0).wait(1).to({x:496.8,y:504.1,alpha:0.117},0).wait(1).to({x:499,y:507,alpha:0.304},0).wait(1).to({x:499.6,y:507.9,alpha:0.357},0).wait(1).to({x:499.8,y:508.2,alpha:0.378},0).wait(1).to({x:499.9,y:508.3,alpha:0.389},0).wait(1).to({x:500,y:508.4,alpha:0.395},0).wait(1).to({y:508.5,alpha:0.398},0).wait(1).to({regX:0,regY:0,x:504.7,y:506.2},0).wait(1).to({regX:-4.6,regY:2.3,x:500.1,y:508.5},0).wait(2).to({rotation:-0.1},0).wait(2).to({rotation:-0.2,y:508.6},0).wait(2).to({rotation:-0.3,y:508.7},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.7,y:508.8},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-0.9,y:508.9},0).wait(1).to({rotation:-1.1,y:509},0).wait(1).to({rotation:-1.3},0).wait(1).to({regX:0,regY:0,rotation:-1.5,x:504.7,y:506.7},0).wait(1).to({regX:-4.6,regY:2.3,rotation:-1.4,x:500.1,y:509.3},0).wait(1).to({rotation:-1.2,y:509.5},0).wait(1).to({rotation:-1,y:509.9},0).wait(1).to({rotation:-0.8,y:510.2},0).wait(1).to({rotation:-0.6,x:500,y:510.6},0).wait(1).to({rotation:-0.3,y:511},0).wait(1).to({regX:0,regY:0,rotation:0,x:504.7,y:509.3},0).wait(1).to({regX:-4.6,regY:2.3,x:500,y:511.5,alpha:0.396},0).wait(1).to({x:499.9,y:511.4,alpha:0.389},0).wait(1).to({x:499.8,y:511.1,alpha:0.379},0).wait(1).to({x:499.6,y:510.8,alpha:0.363},0).wait(1).to({x:499.4,y:510.3,alpha:0.343},0).wait(1).to({x:499.1,y:509.6,alpha:0.315},0).wait(1).to({x:498.6,y:508.8,alpha:0.278},0).wait(1).to({x:498.1,y:507.6,alpha:0.229},0).wait(1).to({x:497.3,y:506,alpha:0.159},0).wait(1).to({regX:0,regY:0,x:500,y:500,alpha:0},0).wait(1));

	// blue
	this.instance_2 = new lib.blue();
	this.instance_2.parent = this;
	this.instance_2.setTransform(500,500);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:7.8,regY:-1.6,x:507.6,y:498.3,alpha:0.004},0).wait(1).to({x:507.4,y:498.2,alpha:0.01},0).wait(1).to({x:507.1,y:498,alpha:0.019},0).wait(1).to({x:506.6,y:497.7,alpha:0.03},0).wait(1).to({x:506,y:497.3,alpha:0.046},0).wait(1).to({x:505,y:496.7,alpha:0.071},0).wait(1).to({x:503.3,y:495.7,alpha:0.117},0).wait(1).to({x:496,y:491.3,alpha:0.304},0).wait(1).to({x:493.9,y:490.1,alpha:0.357},0).wait(1).to({x:493.1,y:489.6,alpha:0.378},0).wait(1).to({x:492.7,y:489.3,alpha:0.389},0).wait(1).to({x:492.4,y:489.2,alpha:0.395},0).wait(1).to({x:492.3,y:489.1,alpha:0.398},0).wait(1).to({regX:0,regY:0,x:484.5,y:490.7},0).wait(1).to({regX:7.8,regY:-1.6,x:492.3,y:489.1},0).wait(1).to({x:492.2},0).wait(1).to({x:492},0).wait(1).to({x:491.7,y:489},0).wait(1).to({x:491.4},0).wait(1).to({x:491,y:488.9},0).wait(1).to({x:490.5},0).wait(1).to({x:490,y:488.8},0).wait(1).to({x:489.3,y:488.7},0).wait(1).to({x:488.6,y:488.6},0).wait(1).to({x:487.8,y:488.5},0).wait(1).to({x:486.9,y:488.4},0).wait(1).to({x:485.9,y:488.2},0).wait(1).to({x:484.8,y:488.1},0).wait(1).to({regX:0,regY:0,x:475.8,y:489.6},0).wait(1).to({regX:7.8,regY:-1.6,x:483.7,y:488.3},0).wait(1).to({x:483.8,y:488.7},0).wait(1).to({x:483.9,y:489.2},0).wait(1).to({x:484,y:489.7},0).wait(1).to({x:484.2,y:490.4},0).wait(1).to({x:484.3,y:491.3},0).wait(1).to({regX:0,regY:0,x:476.8,y:493.8},0).wait(1).to({regX:7.8,regY:-1.6,x:484.7,y:492.3,alpha:0.396},0).wait(1).to({x:485.1,y:492.4,alpha:0.389},0).wait(1).to({x:485.7,y:492.6,alpha:0.379},0).wait(1).to({x:486.6,y:492.9,alpha:0.363},0).wait(1).to({x:487.8,y:493.3,alpha:0.343},0).wait(1).to({x:489.4,y:493.8,alpha:0.315},0).wait(1).to({x:491.6,y:494.5,alpha:0.278},0).wait(1).to({x:494.4,y:495.5,alpha:0.229},0).wait(1).to({x:498.5,y:496.9,alpha:0.159},0).wait(1).to({regX:0,regY:0,x:500,y:501.6,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(754,831,492,336.6);
// library properties:
lib.properties = {
	id: '4018335EB3199D4895702D1CFEF4620C',
	width: 1000,
	height: 1000,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/card.png?1534936943797", id:"card"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4018335EB3199D4895702D1CFEF4620C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, main_card = main_card||{});
var createjs, main_card;