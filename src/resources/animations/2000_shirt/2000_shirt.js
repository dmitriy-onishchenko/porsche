(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.eye = function() {
	this.initialize(img.eye);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,57);


(lib.tshirt = function() {
	this.initialize(img.tshirt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,448,629);


(lib.eye_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhGHdQhKghABinQABioAehWQAdhWATA4QASA3AtASQArATAyg0QAzg0ABBgQABBghHCoQg7CNg9AAQgMAAgMgFg");
	var mask_graphics_1 = new cjs.Graphics().p("Ag6GuQhXghgKjJQgLjIAchrQAchrAZBCQAYBCA1ASQAzASA2hDQA2hDAHB0QAIByhFDRQg8C0hIAAQgLAAgMgFg");
	var mask_graphics_2 = new cjs.Graphics().p("AgjGAQhkgggajqQgbjpAYh/QAYh/AgBKQAhBLA8ARQA7ARA4hSQA3hUARCIQASCGg/D4Qg4DehVAAQgKAAgLgEg");
	var mask_graphics_3 = new cjs.Graphics().p("AgBGQQhxgdgukKQgvkJARiTQARiTAqBTQApBTBEAPQBDAPA4hjQA3hkAdCaQAdCYgzEhQgvEIhiAAQgKAAgJgCg");
	var mask_graphics_4 = new cjs.Graphics().p("AgTF4Qhrgegkj6Qgkj6AViJQAViJAlBPQAlBPBAAQQA/AQA3hbQA4hbAXCQQAXCQg6ENQg0DyhcAAQgJAAgKgDg");
	var mask_graphics_5 = new cjs.Graphics().p("AgjGBQhkgggajqQgbjpAYh/QAYh/AgBKQAhBLA8ARQA7ARA4hSQA3hUARCIQASCGg/D4Qg4DdhVAAQgKAAgLgDg");
	var mask_graphics_6 = new cjs.Graphics().p("AgwGYQhegggRjaQgSjZAah1QAah1AdBGQAcBHA4ARQA4ASA3hLQA2hLANB+QAMB9hDDkQg7DIhOAAQgLAAgLgEg");
	var mask_graphics_7 = new cjs.Graphics().p("Ag6GvQhXghgKjJQgLjIAchrQAchrAZBCQAYBCA1ASQAzASA2hDQA2hEAHB1QAIByhFDRQg8C0hIAAQgLAAgMgFg");
	var mask_graphics_8 = new cjs.Graphics().p("AhBHGQhRghgEi4QgEi4AdhgQAdhhAVA9QAWA9AwASQAwASA0g7QA0g7AEBpQAEBqhGC8Qg9CghCAAQgLAAgMgFg");
	var mask_graphics_9 = new cjs.Graphics().p("AhGHdQhKghABinQABioAehWQAdhWATA4QASA3AtASQArATAyg0QAzg0ABBgQABBghHCoQg7CNg9AAQgMAAgMgFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:6.6,y:48.2}).wait(1).to({graphics:mask_graphics_1,x:9.8,y:43.5}).wait(1).to({graphics:mask_graphics_2,x:12.6,y:38.8}).wait(1).to({graphics:mask_graphics_3,x:15.1,y:27.9}).wait(1).to({graphics:mask_graphics_4,x:14,y:35}).wait(1).to({graphics:mask_graphics_5,x:12.8,y:38.8}).wait(1).to({graphics:mask_graphics_6,x:11.5,y:41.2}).wait(1).to({graphics:mask_graphics_7,x:10,y:43.6}).wait(1).to({graphics:mask_graphics_8,x:8.5,y:45.9}).wait(1).to({graphics:mask_graphics_9,x:6.6,y:48.2}).wait(198));

	// Layer_1
	this.instance = new lib.eye();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(207));

	// Layer_3
	this.instance_1 = new lib.eye();
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(207));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,44.7,22.9,12.3);


// stage content:
(lib._2000_shirt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.eye_mc();
	this.instance.parent = this;
	this.instance.setTransform(376,152.6,0.984,1.081,0,-13.3,166.7,13.7,29.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171).to({_off:false},0).wait(198));

	// Layer_4
	this.instance_1 = new lib.eye_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.2,105.2,1.08,1,25.7,0,0,14.2,28.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(123).to({_off:false},0).wait(246));

	// Layer_3
	this.instance_2 = new lib.eye_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(227.2,455.2,1.298,1.298,0,19.5,-160.5,13.9,28.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81).to({_off:false},0).wait(288));

	// Layer_2
	this.instance_3 = new lib.eye_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(215,147.5,1,1,0,0,0,14,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(369));

	// Layer_1
	this.instance_4 = new lib.tshirt();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(369));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(224,314.5,448,629);
// library properties:
lib.properties = {
	id: '2A80D3D25CFC4A83A0990B8B3E08CF96',
	width: 448,
	height: 629,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"eye.png", id:"eye"},
		{src:"tshirt.png", id:"tshirt"}
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
an.compositions['2A80D3D25CFC4A83A0990B8B3E08CF96'] = {
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