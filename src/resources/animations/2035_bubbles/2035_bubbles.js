(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bubble = function() {
	this.initialize(img.bubble);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,800);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bubble();
	this.instance.parent = this;
	this.instance.setTransform(-162,-162,0.405,0.405);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,-162,324.1,324.1);


(lib.bubble_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(162,162);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.94},11).to({scaleY:1,rotation:-6.5},13).to({scaleY:0.94,rotation:0},13).to({scaleY:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324.1,324.1);


// stage content:
(lib._2035_bubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.bubble_mc();
	this.instance.parent = this;
	this.instance.setTransform(823.1,1094.1,0.9,0.9,0,0,0,162.1,162.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:162,y:-198.3},299).wait(1));

	// Layer_5
	this.instance_1 = new lib.bubble_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.5,189.4,0.283,0.283,0,0,0,162.1,162.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-90.6},66).to({_off:true},1).wait(1).to({_off:false,y:989.4},0).to({y:189.4},231).wait(1));

	// Layer_4
	this.instance_2 = new lib.bubble_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(369,510.9,0.623,0.623,0,0,0,162.1,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-129.1},149).to({_off:true},1).wait(58).to({_off:false,y:1030.9},0).to({y:510.9},91).wait(1));

	// Layer_3
	this.instance_3 = new lib.bubble_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(762.5,483.9,0.468,0.468,0,0,0,162.1,162.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-116.1},149).to({y:1003.9},1).to({y:483.9},149).wait(1));

	// Layer_2
	this.instance_4 = new lib.bubble_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(554.9,232.4,1,1,0,0,0,162,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-207.6},80).to({_off:true},1).wait(1).to({_off:false,y:1072.4},0).to({y:232.4},217).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(525.7,520.4,943.1,1169.4);
// library properties:
lib.properties = {
	id: 'DE423E0848DC431D84257872C8FAEC85',
	width: 1000,
	height: 900,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"bubble.png", id:"bubble"}
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
an.compositions['DE423E0848DC431D84257872C8FAEC85'] = {
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