(function (lib, img, cjs) {

var p; // shortcut to reference prototypes




// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,39);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,412,209);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt011",width:"60",expand:"up+down",align:"center",class:"glow"});
	//this.text = new cjs.Text("ID_txt01,W:60,A:c,e:u+d", "bold 11px 'CiscoSans'", "#393536");
	this.text.lineHeight = 13;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,132.3,36);


(lib.EnvelopeStatic3 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(30.1,18.3,1,1,0,0,0,30.1,8.5);

	// Layer 1
	this.instance_1 = new lib.Bitmap1();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,132.3,45.8);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_94 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(94).call(this.frame_94).wait(1));

	// envelope3
	this.instance = new lib.EnvelopeStatic3();
	this.instance.setTransform(207.1,299.5,1,1,0,0,0,30.8,19.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).to({x:273,y:265.9},20).to({x:341.9,y:237.4},20).to({x:476.6,y:299.5},39).wait(1));

	// envelope2
	this.instance_1 = new lib.EnvelopeStatic3();
	this.instance_1.setTransform(207.3,299.4,1,1,0,0,0,31,19.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:30.8,regY:19.6,x:207.1,y:299.5,alpha:1},14).to({x:341.9},40).to({regY:19.7,y:376.2},39).wait(1));

	// envelope4
	this.instance_2 = new lib.EnvelopeStatic3();
	this.instance_2.setTransform(341.9,376.1,1,1,0,0,0,30.8,19.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({_off:false},0).to({y:299.5},39).wait(1));

	// envelope1
	this.instance_3 = new lib.EnvelopeStatic3();
	this.instance_3.setTransform(207.1,299.5,1,1,0,0,0,30.8,19.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({alpha:1},13).to({x:341.9,y:376.1},40).to({x:476.6,y:299.5},39).wait(1));

	// Static texts
	this.text = new cjs.Text("R1", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text.lineHeight = 13;
	this.text.setTransform(198.5,307.4);

	this.text_1 = new cjs.Text("R3", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(330.5,307.4);

	this.text_2 = new cjs.Text("R5", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(463.4,307.4);

	this.text_3 = new cjs.Text("R4", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(330.5,382.3);

	this.text_4 = new cjs.Text("R2", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_4.lineHeight = 13;
	this.text_4.setTransform(330.5,242.8);

	this.text_5 = new cjs.Text(".1", "11px 'CiscoSans'", "#393536");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 13;
	this.text_5.setTransform(172.4,285.8);

	this.text_6 = new cjs.Text("10.8.0.0/16", "11px 'CiscoSans'", "#393536");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 13;
	this.text_6.setTransform(340,414);

	this.text_7 = new cjs.Text("10.10.0.0/16", "11px 'CiscoSans'", "#393536");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 13;
	this.text_7.setTransform(426.7,356.2);

	this.text_8 = new cjs.Text("10.7.0.0/16", "11px 'CiscoSans'", "#393536");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 13;
	this.text_8.setTransform(371.6,331.7);

	this.text_9 = new cjs.Text("2", "bold 11px 'CiscoSans'", "#652C8A");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 13;
	this.text_9.setTransform(370.6,286.9);

	this.text_10 = new cjs.Text("10.6.0.0/16", "11px 'CiscoSans'", "#393536");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 13;
	this.text_10.setTransform(412.6,299.1);

	this.text_11 = new cjs.Text("10", "11px 'CiscoSans'", "#393536");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 13;
	this.text_11.setTransform(328.6,331.9);

	this.text_12 = new cjs.Text("10", "bold 11px 'CiscoSans'", "#652C8A");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 13;
	this.text_12.setTransform(412.1,323.4);

	this.text_13 = new cjs.Text("2", "bold 11px 'CiscoSans'", "#652C8A");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 13;
	this.text_13.setTransform(526.1,284.9);

	this.text_14 = new cjs.Text("10.11.0.0/16", "11px 'CiscoSans'", "#393536");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 13;
	this.text_14.setTransform(518.1,261.1);

	this.text_15 = new cjs.Text("10", "bold 11px 'CiscoSans'", "#652C8A");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 13;
	this.text_15.setTransform(412,277.6);

	this.text_16 = new cjs.Text("10.9.0.0/16", "11px 'CiscoSans'", "#393536");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 13;
	this.text_16.setTransform(416.1,243.6);

	this.text_17 = new cjs.Text("2", "bold 11px 'CiscoSans'", "#652C8A");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 13;
	this.text_17.setTransform(330.5,206.1);

	this.text_18 = new cjs.Text("10.5.0.0/16", "11px 'CiscoSans'", "#393536");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 13;
	this.text_18.setTransform(340.6,188.6);

	this.text_19 = new cjs.Text("10.4.0.0/16", "11px 'CiscoSans'", "#393536");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 13;
	this.text_19.setTransform(250.1,352.6);

	this.text_20 = new cjs.Text("10.3.0.0/16", "11px 'CiscoSans'", "#393536");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 13;
	this.text_20.setTransform(275.6,302.6);

	this.text_21 = new cjs.Text("Fa0/0", "11px 'CiscoSans'", "#393536");
	this.text_21.lineHeight = 13;
	this.text_21.setTransform(130.5,285.7);

	this.text_22 = new cjs.Text("2", "bold 11px 'CiscoSans'", "#652C8A");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 13;
	this.text_22.setTransform(133.6,301.8);

	this.text_23 = new cjs.Text("10.1.0.0/16", "11px 'CiscoSans'", "#393536");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 13;
	this.text_23.setTransform(135.1,261.1);

	this.text_24 = new cjs.Text("5", "bold 11px 'CiscoSans'", "#652C8A");
	this.text_24.textAlign = "center";
	this.text_24.lineHeight = 13;
	this.text_24.setTransform(285.1,286.3);

	this.text_25 = new cjs.Text("20", "bold 11px 'CiscoSans'", "#652C8A");
	this.text_25.textAlign = "center";
	this.text_25.lineHeight = 13;
	this.text_25.setTransform(294,340.4);

	this.text_26 = new cjs.Text("20", "bold 11px 'CiscoSans'", "#652C8A");
	this.text_26.textAlign = "center";
	this.text_26.lineHeight = 13;
	this.text_26.setTransform(294,261);

	this.text_27 = new cjs.Text("10.2.0.0/16", "11px 'CiscoSans'", "#393536");
	this.text_27.textAlign = "center";
	this.text_27.lineHeight = 13;
	this.text_27.setTransform(257.6,245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(95));

	// icons
	this.instance_4 = new lib.Bitmap2();
	this.instance_4.setTransform(126,201.8);

	this.text_28 = new cjs.Text("2", "bold 11px 'CiscoSans'", "#652C8A");
	this.text_28.textAlign = "center";
	this.text_28.lineHeight = 13;
	this.text_28.setTransform(330.6,396.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_28},{t:this.instance_4}]}).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104.7,184.6,451,244.4);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(104.7,184.6,451,244.4);


// stage content:
(lib.media_5325 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(444.7,429.6,451,244.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;