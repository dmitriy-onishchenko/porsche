(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.disk = function() {
	this.initialize(img.disk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,613,613);


(lib.disk_light = function() {
	this.initialize(img.disk_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,613,613);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.disk_light();
	this.instance.parent = this;
	this.instance.setTransform(-145,-145,0.473,0.473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-145,290,290);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.disk();
	this.instance.parent = this;
	this.instance.setTransform(-145,-145,0.473,0.473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-145,290,290);


// stage content:
(lib._2000_disk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,150);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({_off:false},0).to({rotation:-90,alpha:0.699},19).to({rotation:0,alpha:0},31).to({startPosition:0},198).to({rotation:-90,alpha:0.699},19).to({rotation:0,alpha:0},34).wait(90));

	// Layer_1
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-45},19).to({scaleX:1,scaleY:1,rotation:-20.3,y:150.1},25,cjs.Ease.quintOut).to({scaleX:1,scaleY:1,rotation:-45,y:150},13).to({rotation:0},23,cjs.Ease.quintOut).to({rotation:90},39).to({rotation:180},40).to({rotation:270},43).to({rotation:360},43,cjs.Ease.quintIn).to({rotation:315},83).to({startPosition:0},19).to({rotation:360},25).to({rotation:315},63).to({rotation:360},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(155,155,290,290);
// library properties:
lib.properties = {
	id: '85C7BBAF21504EC6B365185D634D8CB1',
	width: 300,
	height: 300,
	fps: 17,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"disk.png", id:"disk"},
		{src:"disk_light.png", id:"disk_light"}
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
an.compositions['85C7BBAF21504EC6B365185D634D8CB1'] = {
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