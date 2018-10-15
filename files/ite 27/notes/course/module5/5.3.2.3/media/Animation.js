(function(lib, img, cjs) {

    var p; // shortcut to reference prototypes




    // symbols:



    (lib.Bitmap1 = function() {
        this.initialize(img.Bitmap1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 359, 307);


    (lib.Bitmap2 = function() {
        this.initialize(img.Bitmap2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 82, 52);


    (lib.Symbol4 = function() {
        this.initialize();

        // Layer 1
        this.text = getCJSElement("BUBBLE", { width: "120", height: "80", compId: "ID_txt04", align: "left", tailPosition: "9", tailFlip: "1" });
        //this.text = new cjs.Text("ID_txt04,W:120,h:80,tp:9", "11px 'CiscoSans'");
        this.text.textAlign = "center";
        this.text.lineHeight = 13;
        this.text.lineWidth = 144;
        this.text.setTransform(20, -10);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 148, 19);


    (lib.Symbol3 = function() {
        this.initialize();

        // Layer 1
        this.text = getCJSElement("BUBBLE", { width: "120", height: "80", compId: "ID_txt03", align: "left", tailPosition: "9", tailFlip: "1" });
        //this.text = new cjs.Text("ID_txt03,W:120,h:80,tp:9", "11px 'CiscoSans'");
        this.text.textAlign = "center";
        this.text.lineHeight = 13;
        this.text.lineWidth = 144;
        this.text.setTransform(20, 20);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 148, 19);


    (lib.Symbol2 = function() {
        this.initialize();

        // Layer 1
        this.text = getCJSElement("BUBBLE", { width: "120", height: "80", compId: "ID_txt02", align: "left", tailPosition: "9", tailFlip: "1" });
        //this.text = new cjs.Text("ID_txt02,W:120,h:80,tp:9", "11px 'CiscoSans'");
        this.text.textAlign = "center";
        this.text.lineHeight = 13;
        this.text.lineWidth = 144;
        this.text.setTransform(20, 20);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 148, 19);


    (lib.Symbol1 = function() {
        this.initialize();

        // Layer 1
        this.text = getCJSElement("BUBBLE", { width: "120", height: "80", compId: "ID_txt01", align: "left", tailPosition: "5", tailFlip: "0" });
        //this.text = new cjs.Text("ID_txt01,W:120,h:80,tp:5", "11px 'CiscoSans'");
        this.text.textAlign = "center";
        this.text.lineHeight = 13;
        this.text.lineWidth = 144;
        this.text.setTransform(0, 35);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 148, 19);


    (lib.envelopeclosedstatic = function() {
        this.initialize();

        // outer lines
        this.instance = new lib.Bitmap2();
        this.instance.setTransform(-39.6, -26.1);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-39.6, -26.1, 82, 52);


    (lib.animation01 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop();*/
        }
        this.frame_242 = function() {
            /* stop();*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(242).call(this.frame_242).wait(1));

        // packet_01 
        this.instance = new lib.envelopeclosedstatic();
        this.instance.setTransform(214, 248.4, 0.5, 0.5, 0, 0, 0, 44.6, 31.5);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({ _off: false }, 0).to({ alpha: 1 }, 15).to({ x: 455.6, y: 109.9 }, 58).wait(12).to({ alpha: 0 }, 15).wait(23).to({ alpha: 1 }, 7).wait(13).to({ x: 214, y: 248.4 }, 57).wait(7).to({ alpha: 0 }, 15).to({ _off: true }, 1).wait(10));

        // packet_02
        this.instance_1 = new lib.envelopeclosedstatic();
        this.instance_1.setTransform(214, 248.4, 0.5, 0.5, 0, 0, 0, 44.6, 31.5);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({ _off: false }, 0).to({ alpha: 1 }, 15).to({ x: 455.6, y: 243.4 }, 58).wait(12).to({ alpha: 0 }, 15).wait(23).to({ alpha: 1 }, 7).wait(13).to({ x: 214, y: 248.4 }, 57).to({ _off: true }, 7).wait(26));

        // packet_03
        this.instance_2 = new lib.envelopeclosedstatic();
        this.instance_2.setTransform(214, 248.4, 0.5, 0.5, 0, 0, 0, 44.6, 31.5);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({ _off: false }, 0).to({ alpha: 1 }, 15).to({ x: 455.6, y: 376.8 }, 58).wait(12).to({ alpha: 0 }, 15).wait(23).to({ alpha: 1 }, 7).wait(13).to({ x: 214, y: 248.4 }, 57).to({ _off: true }, 7).wait(26));

        // packet_04
        this.instance_3 = new lib.envelopeclosedstatic();
        this.instance_3.setTransform(214, 248.4, 0.5, 0.5, 0, 0, 0, 44.6, 31.5);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({ _off: false }, 0).to({ alpha: 1 }, 15).to({ x: 124.3 }, 58).wait(12).to({ alpha: 0 }, 15).wait(133));

        // bubble_01
        this.instance_4 = new lib.Symbol1();
        this.instance_4.setTransform(136, 169.9, 1, 1, 0, 0, 0, 60, 40);
        this.instance_4.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({ alpha: 1 }, 0).wait(74).to({ alpha: 0 }, 0).wait(159));

        // bubble_02
        this.instance_5 = new lib.Symbol2();
        this.instance_5.setTransform(518, 104.9, 1, 1, 0, 0, 0, 60, 40);
        this.instance_5.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(133).to({ alpha: 1 }, 0).wait(110));

        // bubble_03
        this.instance_6 = new lib.Symbol3();
        this.instance_6.setTransform(519, 238.9, 1, 1, 0, 0, 0, 60, 40);
        this.instance_6.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(133).to({ alpha: 1 }, 0).wait(110));

        // bubble_04
        this.instance_7 = new lib.Symbol4();
        this.instance_7.setTransform(519, 372.8, 1, 1, 0, 0, 0, 60, 13);
        this.instance_7.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(133).to({ alpha: 1 }, 0).wait(110));

        // txt
        this.text = new cjs.Text("S0/0/1\n.1", "11px 'CiscoSans'", "#393536");
        this.text.lineHeight = 13;
        this.text.lineWidth = 55;
        this.text.setTransform(229.1, 220);

        this.text_1 = new cjs.Text(".1\nS0/1/0", "11px 'CiscoSans'", "#393536");
        this.text_1.lineHeight = 11;
        this.text_1.lineWidth = 48;
        this.text_1.setTransform(210.1, 254);

        this.text_2 = new cjs.Text("Fa0/0", "11px 'CiscoSans'", "#393536");
        this.text_2.textAlign = "right";
        this.text_2.lineHeight = 13;
        this.text_2.lineWidth = 51;
        this.text_2.setTransform(162, 217.8);

        this.text_3 = new cjs.Text("S0/0/0\n.1", "11px 'CiscoSans'", "#393536");
        this.text_3.lineHeight = 11;
        this.text_3.lineWidth = 55;
        this.text_3.setTransform(210.1, 185.1);

        this.text_4 = new cjs.Text("10.2.0.0/16", "bold 11px 'CiscoSans'", "#393536");
        this.text_4.textAlign = "center";
        this.text_4.lineHeight = 13;
        this.text_4.lineWidth = 70;
        this.text_4.setTransform(298.6, 140.2);

        this.text_5 = new cjs.Text("10.3.0.0/16", "bold 11px 'CiscoSans'", "#393536");
        this.text_5.textAlign = "center";
        this.text_5.lineHeight = 13;
        this.text_5.lineWidth = 70;
        this.text_5.setTransform(327.4, 236.6);

        this.text_6 = new cjs.Text("10.4.0.0/16", "bold 11px 'CiscoSans'", "#393536");
        this.text_6.textAlign = "center";
        this.text_6.lineHeight = 13;
        this.text_6.lineWidth = 71;
        this.text_6.setTransform(298.6, 310.8);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.text_6 }, { t: this.text_5 }, { t: this.text_4 }, { t: this.text_3 }, { t: this.text_2 }, { t: this.text_1 }, { t: this.text }] }).wait(243));

        // topology
        this.text_7 = new cjs.Text("R4", "bold 11px 'CiscoSans'", "#FFFFFF");
        this.text_7.textAlign = "center";
        this.text_7.lineHeight = 13;
        this.text_7.setTransform(434.6, 365.9);

        this.text_8 = new cjs.Text("R3", "bold 11px 'CiscoSans'", "#FFFFFF");
        this.text_8.textAlign = "center";
        this.text_8.lineHeight = 13;
        this.text_8.setTransform(434.6, 233.9);

        this.text_9 = new cjs.Text("R2", "bold 11px 'CiscoSans'", "#FFFFFF");
        this.text_9.textAlign = "center";
        this.text_9.lineHeight = 13;
        this.text_9.setTransform(434.6, 99);

        this.text_10 = new cjs.Text("R1", "bold 11px 'CiscoSans'", "#FFFFFF");
        this.text_10.textAlign = "center";
        this.text_10.lineHeight = 13;
        this.text_10.setTransform(190.7, 239.3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.text_10 }, { t: this.text_9 }, { t: this.text_8 }, { t: this.text_7 }] }).wait(243));

        // Layer 2
        this.instance_8 = new lib.Bitmap1();
        this.instance_8.setTransform(103.2, 74.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(243));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(76, 64.9, 531, 316.5);


    (lib.Main = function() {
        this.initialize();

        // animation
        this.anim01 = new lib.animation01();

        this.addChild(this.anim01);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(76, 64.9, 531, 316.5);


    // stage content:
    (lib.media_5323A = function() {
        this.initialize();

        // main
        this.instance = new lib.Main();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(416, 309.9, 531, 316.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
