(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.glass = function() {
	this.initialize(img.glass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,749);


(lib.glass_light = function() {
	this.initialize(img.glass_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,749);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)","rgba(255,255,255,0)"],[0,0.51,1],-108.4,-82.8,122.9,69).s().p("Egv1AhbMA6JhYiMAliAVtMg6JBYig");
	this.shape.setTransform(-108.1,-90.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.3,-442.9,612.4,705.7);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.glass_light();
	this.instance.parent = this;
	this.instance.setTransform(-175,-187.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-187.2,350,374.5);


(lib.glass_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AokVAQkah0h/hpQh/hpgcgbQgbgaAMgLIAeAJIACAAIACACQAGAEAKADQAUAHATAAQARAAAIgGQAGgFABgGQACgIgDgFQgGgHgNAAIgKAAQgHABgEgBQgIgCgLgKIhMg9QgPgMgLgDIgTgDIgIgCQkLlwAAnfQAAjqBBjRIABgBQANgPABgYIABgHQBpktDzj0QB4h3CFhWQALgCANgGQAWgKAMgSQB5hGCFgtQAIACAKAAIAXABQAMgBAJgHIAHgHIADgBQAOAJATADQAvAIAzgKQAygJArgXQAKgFAUgXIAAACQAAABABABQAAAAAAAAQAAABAAAAQAAAAAAgBQAAgMBZABQBjABCmASQC4AUC9BcQDNBjDICzQDLC2B4DcQBzDVAhDzIgeADQg6gMghABQgNABgGAEQgLAFACALQgGACgKgBIgPgCQgHAAgHAFQgHAEAAAHQAAAJAIAFQAFACALACQAEAGgIALQgJALABAGQABAHALAGQAhATAQAIQANAGADAGQABAEABAJQACAMAQAJQATAMAYAJQAWAGAIAHQAHAGAJARIABAAQgbH7kfFcQk5F8kGBgQkGBhkfABIgEAAQkdAAkZh0gAxdOVIAAgBIABABgAUXhxIABAAIAAAAg");
	mask.setTransform(181.2,218);

	// Layer_4
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(38.5,64);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},38).to({x:529.6,y:491.1},28).wait(334));

	// Layer_2
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(175,187.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(310).to({_off:false},0).to({alpha:1},5).to({alpha:0},17).wait(68));

	// Layer_1
	this.instance_2 = new lib.glass();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(400));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,374.5);


// stage content:
(lib._1898_glass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.glass_mc();
	this.instance.parent = this;
	this.instance.setTransform(201,108.2,1,1,0,0,0,176,95.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({regX:176.1,regY:95.4,rotation:-4,x:201.1,y:108.4},26).to({regX:176,regY:95.2,rotation:0,x:201,y:108.2},25).to({regX:176.1,rotation:3.7,x:201.1,y:108.3},25).to({regX:176,rotation:0,x:201,y:108.2},25).to({regX:176.1,regY:95.3,rotation:-2,x:201.1,y:108.3},24).to({regX:176,regY:95.2,rotation:0,x:201,y:108.2},26).wait(175));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.9,-165.9,725.9,753.4);
// library properties:
lib.properties = {
	id: '9D7A3ECF2C6640089690C39472911E15',
	width: 400,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"glass.png", id:"glass"},
		{src:"glass_light.png", id:"glass_light"}
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
an.compositions['9D7A3ECF2C6640089690C39472911E15'] = {
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