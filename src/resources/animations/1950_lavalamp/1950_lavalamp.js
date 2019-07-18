(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.lavalamp = function() {
	this.initialize(img.lavalamp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,1256);


(lib.lavalamp_light = function() {
	this.initialize(img.lavalamp_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,1256);


(lib.polaroid_1 = function() {
	this.initialize(img.polaroid_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,200);


(lib.polaroid_2 = function() {
	this.initialize(img.polaroid_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,200);


(lib.polaroid_3 = function() {
	this.initialize(img.polaroid_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,200);


(lib.polaroid_4 = function() {
	this.initialize(img.polaroid_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,200);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lavalamp_light();
	this.instance.parent = this;
	this.instance.setTransform(-159,-628);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-628,318,1256);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.polaroid_1();
	this.instance.parent = this;
	this.instance.setTransform(-60,-72.7,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-72.7,120,145.5);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.polaroid_2();
	this.instance.parent = this;
	this.instance.setTransform(-60,-72.7,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-72.7,120,145.5);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.polaroid_3();
	this.instance.parent = this;
	this.instance.setTransform(-60,-72.7,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-72.7,120,145.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.polaroid_4();
	this.instance.parent = this;
	this.instance.setTransform(-60,-72.7,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-72.7,120,145.5);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F4193").s().p("EgX6AqIIghkLMANKhQEIXJAAMAMgBN+IAEGRg");
	this.shape.setTransform(-0.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.3,-269.5,312.9,539.2);


// stage content:
(lib._1950_lavalamp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(159,628);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).to({alpha:0},19).to({startPosition:0},27).to({alpha:1},10).to({alpha:0},19).to({startPosition:0},49).to({alpha:1},10).to({alpha:0},19).wait(6));

	// Layer_1
	this.instance_1 = new lib.lavalamp();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169));

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgX5AqIIgjkLMANMhQEIXIAAMAMfBN+IAGGRg");
	mask.setTransform(157.4,454.7);

	// Layer_6
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.9,648.7,1,1,19.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:4.5,x:77.9,y:608.7},10).to({rotation:-3.4,y:598.7},10).to({regY:0.1,rotation:-13.9,x:81.9,y:572.8},9).to({regX:0.1,rotation:-7.9,x:82,y:542.8},23).to({rotation:-29.4,x:122,y:522.8},14).to({regY:0.2,rotation:-22.9,x:122.1,y:498.8},10).to({rotation:-6,x:138.1,y:536.9},18).to({regY:0.3,rotation:3.5,x:138,y:555},10).to({regX:0,regY:0,rotation:19.2,x:63.9,y:648.7},64).wait(1));

	// Layer_5
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(238.1,562.6,1,1,-34);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:0.1,rotation:-27,x:240.1,y:596.8},10).to({rotation:-17.3,x:240.2,y:604.8},10).to({regX:0.1,rotation:-6.5,x:240.3,y:618.8},9).to({rotation:-1.8,x:224.3,y:636.8},23).to({regY:0.2,rotation:16.9,x:202.3,y:676.9},14).to({rotation:8.7,y:656.9},10).to({regX:0.2,rotation:-3.6,x:240.4,y:628.9},18).to({rotation:-15,x:242.5,y:592.9},10).to({regX:0,regY:0,rotation:-34,x:238.1,y:562.6},64).wait(1));

	// Layer_4
	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(187.1,304.7,1,1,-28.3);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-21.8,y:274.7},10).to({rotation:-18.9,x:191.1,y:264.7},10).to({y:274.7},9).to({x:195.1,y:264.7},23).to({rotation:-11.7,x:203.1,y:306.7},14).to({regX:0.1,regY:0.1,rotation:-6.2,x:213.2,y:346.9},10).to({x:225.2,y:308.8},18).to({x:217.2,y:282.8},10).to({regX:0,regY:0,rotation:-28.3,x:187.1,y:304.7},64).wait(1));

	// Layer_3
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(156.1,444.7,1,1,12,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:152.1,y:420.7},10).to({rotation:4.8,y:410.7},10).to({regX:0.2,rotation:-4.7,y:400.7},9).to({regX:0.1,rotation:8.8,x:140.1,y:384.7},23).to({rotation:27.2,x:120,y:344.7},14).to({x:132.1,y:310.6},10).to({x:148.1,y:342.7},18).to({x:176.2,y:360.7},10).to({rotation:12,x:156.1,y:444.7},64).wait(1));

	// Layer_2
	this.instance_6 = new lib.Tween1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(159,449.6);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.5},10).to({alpha:0},42).to({startPosition:0},76).to({alpha:0.5},16).to({alpha:0},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159,628,318,1256);
// library properties:
lib.properties = {
	id: '43DF90A84A8F436B88DA6861FAB93755',
	width: 318,
	height: 1256,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"lavalamp.png", id:"lavalamp"},
		{src:"lavalamp_light.png", id:"lavalamp_light"},
		{src:"polaroid_1.jpg", id:"polaroid_1"},
		{src:"polaroid_2.jpg", id:"polaroid_2"},
		{src:"polaroid_3.jpg", id:"polaroid_3"},
		{src:"polaroid_4.jpg", id:"polaroid_4"}
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
an.compositions['43DF90A84A8F436B88DA6861FAB93755'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;