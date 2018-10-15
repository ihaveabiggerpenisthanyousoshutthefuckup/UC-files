(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,448,278);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,45);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,44);


(lib.EnvelopeStatic = function() {
	this.initialize();

	// label
	this.text = getCJSElement("TEXT",{compId:"ID_txt05",width:"72",expand:"up+down",align:"center",class:"glow"});
	//this.text = new cjs.Text("ID_txt05,a:c,e:u+d,w:72", "11px 'CiscoSans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 144;
	this.text.setTransform(-2,8);

	// envelope
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-4.4,0.1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,0,152.5,44.1);


(lib.RedX = function() {
	this.initialize();

	// shape
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-18.4,-22.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.4,-22.3,37,45);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_177 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(177).call(this.frame_177).wait(1));

	// envelope2
	this.instance = new lib.EnvelopeStatic();
	this.instance.setTransform(338.5,206.3,0.99,0.99,0,0,0,30.8,19.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106).to({alpha:1},0).to({regX:31,regY:19.5,x:338.3,y:87.2},39).wait(1).to({alpha:0},0).wait(32));

	// envelope1
	this.instance_1 = new lib.EnvelopeStatic();
	this.instance_1.setTransform(207.3,318.2,0.99,0.99,0,0,0,30.8,19.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({alpha:1},10).wait(24).to({x:338.5,y:206.3},45).to({x:479.4,y:318.2},39).wait(1).to({regX:30.9,x:554.5},31).wait(1));

	// text
	this.text = new cjs.Text("R3", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 27;
	this.text.setTransform(484.2,326.2);

	this.text_1 = new cjs.Text("R1", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 27;
	this.text_1.setTransform(209,326.2);

	this.text_2 = new cjs.Text("R2", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.lineWidth = 27;
	this.text_2.setTransform(341,215.3);

	this.text_3 = new cjs.Text("R4", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 13;
	this.text_3.lineWidth = 24;
	this.text_3.setTransform(341,95.9);

	this.text_4 = new cjs.Text("172.16.3.0/24", "11px 'CiscoSans'", "#393536");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 13;
	this.text_4.setTransform(186.1,284.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(178));

	// cross mark
	this.instance_2 = new lib.RedX();
	this.instance_2.setTransform(141.6,322.7,0.64,0.64,0,0,0,0,0.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({alpha:1},9).wait(164));

	// router3
	this.instance_3 = new lib.Bitmap1();
	this.instance_3.setTransform(123,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(178));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123,69.7,448,278);



(lib.Main = function() {
	this.initialize();

	// slide1
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(123,69.7,448,278);


// stage content:
(lib.media_5114A = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(463,314.7,448,278);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;