(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// symbols:



(lib.Bitmap1 = function() {
    this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,409,193);


(lib.Symbol3 = function() {
    this.initialize();

    // Layer 1
    this.text = getCJSElement("TEXT",{compId:"ID_txt03",width:"38.75",expand:"up+down",align:"center",class:"glow"});
    //this.text = new cjs.Text("Type:lazyText,ID:ID_txt03,W:38.75a:c,e:u+d", "11px 'CiscoSans'");
    this.text.textAlign = "center";
    this.text.lineHeight = 13;
    this.text.lineWidth = 236;
    this.text.setTransform(0,0);

    this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240.1,19);


(lib.Symbol2 = function() {
    this.initialize();

    // Layer 1
    this.text = getCJSElement("TEXT",{compId:"ID_txt02",width:"38.75",expand:"up+down",align:"center",class:"glow"});
    //this.text = new cjs.Text("Type:lazyText,ID:ID_txt02,W:38.75a:c,e:u+d", "11px 'CiscoSans'");
    this.text.textAlign = "center";
    this.text.lineHeight = 13;
    this.text.lineWidth = 236;
    this.text.setTransform(0,0);

    this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240.1,19);


(lib.Symbol1 = function() {
    this.initialize();

    // Layer 1
    this.text = getCJSElement("TEXT",{compId:"ID_txt01",width:"500",expand:"up+down",align:"left"});
    //this.text = new cjs.Text("Type:lazyText,ID:ID_txt01,W:500,a:left,e:u+d", "11px 'CiscoSans'");
    this.text.textAlign = "center";
    this.text.lineHeight = 13;
    this.text.lineWidth = 236;
    this.text.setTransform(0,0);

    this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240.1,19);


(lib.envelopeclosedstatic = function() {
    this.initialize();

    // inner lines
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#C9A003").s().p("AGLD8QgJgcgSgZIAAAAIiTj0IgDACQgjAZghASIgBAAQhRAqhCABIgCAAQhDgBhSgrIAAAAQghgSgkgZIgCgCIiUD1IAAAAQgTAagIAbIgEAAIAAgaIAAAHQAIgUAPgUICUj0Qg+guhGhDIAAABQgZgYgKg/IAKAAQAKA6AWAVIAAAAQBHBFBAAtIAGAFQAjAZAhASIAAgBQBPAqBBABIACAAQBAgBBPgpIAAAAQAhgRAigZIAHgFQBAgtBIhGIAAAAQAWgVAJg6IALAAQgKA/gZAYIAAgBQhGBEg/AuICTDzQARAXAHAUIAAAQg");
    this.shape.setTransform(1.4,0.1);

    // outer lines
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#999999").s().p("AGLD8QgJgcgSgZIAAAAIiTj0IgDACQgjAZghASIgBAAQhRAqhCABIgCAAQhDgBhSgrIAAAAQghgSgkgZIgCgCIiUD1IAAAAQgTAagIAbIgEAAIAAgaIAAAHQAIgUAPgUICUj0Qg+guhGhDIAAABQgZgYgKg/IAKAAQAKA6AWAVIAAAAQBHBFBAAtIAGAFQAjAZAhASIAAgBQBPAqBBABIACAAQBAgBBPgpIAAAAQAhgRAigZIAHgFQBAgtBIhGIAAAAQAWgVAJg6IALAAQgKA/gZAYIAAgBQhGBEg/AuICTDzQARAXAHAUIAAAQg");
    this.shape_1.setTransform(1.4,0.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000002").s().p("AmUEGQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAoAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAIANAAIABAAIMOAAIABAAIAMAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAIAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAgAmPD8IAEAAIMWAAIAFAAIAAgQIAAnmIgEAAIgKAAIsDAAIgKAAIgEAAg");
    this.shape_2.setTransform(1.5,0);

    // color
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.lf(["#FFF4CC","#FFD200"],[0,1],29.2,-23.1,0.4,5.6).s().p("AmUEAIAAn/IMpAAIAAH/g");
    this.shape_3.setTransform(1.5,0.1);

    this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82.1,52.4);


(lib.RIP1 = function() {
    this.initialize();

    // Layer 1
    this.instance = new lib.Symbol2();
    this.instance.setTransform(0.3,0.1,1,1,0,0,0,19.4,8.5);

    this.instance_1 = new lib.envelopeclosedstatic();
    this.instance_1.setTransform(-1,-2,0.5,0.5,0,0,0,1.5,0.1);

    this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.5,-13,241.4,26.2);


(lib.OSPF1 = function() {
    this.initialize();

    // Layer 1
    this.instance = new lib.Symbol3();
    this.instance.setTransform(0.3,0.1,1,1,0,0,0,19.4,8.5);

    this.instance_1 = new lib.envelopeclosedstatic();
    this.instance_1.setTransform(-1,-2,0.5,0.5,0,0,0,1.4,0);

    this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.2,-13,241.2,26.2);


(lib.animation01 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // timeline functions:
    this.frame_0 = function() {
        /* stop();*/
    }
    this.frame_348 = function() {
        /* stop();*/
    }

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(348).call(this.frame_348).wait(1));

    // envolope2
    this.instance = new lib.OSPF1();
    this.instance.setTransform(100,280);
    this.instance.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({alpha:1},9).wait(19).to({x:465.7},57).to({x:340.7,y:126.9},40).to({x:229.1,y:127.4},22).to({alpha:0},10).wait(8));

    // envolope1
    this.instance_1 = new lib.RIP1();
    this.instance_1.setTransform(100,280);
    this.instance_1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({alpha:1},0).wait(30).to({x:211.9,y:281},25).to({x:340.7,y:125.9},50).to({x:229.3,y:127.4},20).wait(10).to({alpha:0},11).wait(184));

    // text
    this.instance_2 = new lib.Symbol1();
    this.instance_2.setTransform(340,385.5,1,1,0,0,0,250,8.5);

    this.text = new cjs.Text("T1", "11px 'CiscoSans'", "#393536");
    this.text.textAlign = "center";
    this.text.lineHeight = 13;
    this.text.setTransform(336.4,292.7);

    this.text_1 = new cjs.Text("T1", "11px 'CiscoSans'", "#393536");
    this.text_1.textAlign = "center";
    this.text_1.lineHeight = 13;
    this.text_1.setTransform(433,200.7);

    this.text_2 = new cjs.Text("172.16.1.0/24", "11px 'CiscoSans'", "#393536");
    this.text_2.textAlign = "center";
    this.text_2.lineHeight = 13;
    this.text_2.setTransform(226.5,88);

    this.text_3 = new cjs.Text("56kbps", "11px 'CiscoSans'", "#393536");
    this.text_3.textAlign = "center";
    this.text_3.lineHeight = 13;
    this.text_3.setTransform(222.9,200.7);

    this.text_4 = new cjs.Text("172.16.3.0/24", "11px 'CiscoSans'", "#393536");
    this.text_4.textAlign = "center";
    this.text_4.lineHeight = 13;
    this.text_4.setTransform(102.4,242.7);

    this.text_5 = new cjs.Text("R3", "11px 'CiscoSans'", "#FFFFFF");
    this.text_5.textAlign = "center";
    this.text_5.lineHeight = 13;
    this.text_5.setTransform(463.5,282.2);

    this.text_6 = new cjs.Text("R2", "11px 'CiscoSans'", "#FFFFFF");
    this.text_6.textAlign = "center";
    this.text_6.lineHeight = 13;
    this.text_6.setTransform(338.5,126.1);

    this.text_7 = new cjs.Text("R1", "11px 'CiscoSans'", "#FFFFFF");
    this.text_7.textAlign = "center";
    this.text_7.lineHeight = 13;
    this.text_7.setTransform(209.1,282.2);

    this.text_8 = new cjs.Text("PC2", "11px 'CiscoSans'", "#FFFFFF");
    this.text_8.textAlign = "center";
    this.text_8.lineHeight = 13;
    this.text_8.setTransform(225.1,111.7);

    this.text_9 = new cjs.Text("PC1", "11px 'CiscoSans'", "#FFFFFF");
    this.text_9.textAlign = "center";
    this.text_9.lineHeight = 13;
    this.text_9.setTransform(99.1,265.6);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_2}]}).wait(349));

    // Router
    this.instance_3 = new lib.Bitmap1();
    this.instance_3.setTransform(77,104);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(349));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(66,88,423.8,308);


(lib.Main = function() {
    this.initialize();

    // animation 1
    this.anim01 = new lib.animation01();

    this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(66,88,423.8,308);


// stage content:
(lib.media_5118A = function() {
    this.initialize();

    // main
    this.instance = new lib.Main();

    this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(406,333,423.8,308);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;