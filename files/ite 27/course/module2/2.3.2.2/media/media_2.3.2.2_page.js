function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
var clickBool=false;
btnXPos=66.5;
btnYPos=60;
var textContainer;




  var hit = new createjs.Shape();
		hit.graphics.beginFill("#000000").drawRect(0,0,680,490);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

var container=new createjs.Container()
_container.addChild(container);
container.cursor="pointer";


  

btn = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:43,height:43,src:"trans_btn.png",});
container.addChild(btn);


btn1 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:43,height:43,src:"trans_btn_over.png",});
container.addChild(btn1);
btn1.visible=false;


btn2 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:43,height:43,src:"cross.png",});
container.addChild(btn2);
btn2.visible=false;



		ID_txt01 = getCJSElement("TEXT",{x:117.25,y:96.85,compId:"ID_trans01",width:100,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt01);
		ID_txt01.visible=false;

		ID_txt02 = getCJSElement("TEXT",{x:391.2,y:92.45,compId:"ID_trans02",width:100,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt02);
		ID_txt02.visible=false;

		ID_txt03 = getCJSElement("TEXT",{x:357.95,y:139.75,compId:"ID_trans03",width:113,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt03);
		ID_txt03.visible=false;

		ID_txt04= getCJSElement("TEXT",{x:308.05,y:165.55,compId:"ID_trans04",width:131,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt04);
		ID_txt04.visible=false;

		ID_txt05 = getCJSElement("TEXT",{x:315.15,y:189.5,compId:"ID_trans05",width:131,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt05);
		ID_txt05.visible=false;

		ID_txt06 = getCJSElement("TEXT",{x:439.6,y:251.3,compId:"ID_trans06",width:131,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt06);
		ID_txt06.visible=false;

		ID_txt07 = getCJSElement("TEXT",{x:444.75,y:291.95,compId:"ID_trans07",width:131,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt07);
		ID_txt07.visible=false;

		ID_txt08 = getCJSElement("TEXT",{x:515.95,y:351,compId:"ID_trans08",width:60,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up+down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt08);
		ID_txt08.visible=false;

		ID_txt09 = getCJSElement("TEXT",{x:456.35,y:350.55,compId:"ID_trans09",width:60,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt09);
		ID_txt09.visible=false;

		ID_txt10 = getCJSElement("TEXT",{x:377.3,y:335.1,compId:"ID_trans10",width:70,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt10);
		ID_txt10.visible=false;

		ID_txt11 = getCJSElement("TEXT",{x:373.3,y:372.65,compId:"ID_trans11",width:65,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt11);
		ID_txt11.visible=false;

		ID_txt12 = getCJSElement("TEXT",{x:312.6,y:365,compId:"ID_trans12",width:60,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt12);
		ID_txt12.visible=false;

		ID_txt13 = getCJSElement("TEXT",{x:365.8,y:306.55,compId:"ID_trans13",width:60,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt13);
		ID_txt13.visible=false;

		ID_txt14 = getCJSElement("TEXT",{x:238.75,y:347.5,compId:"ID_trans14",width:70,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt14);
		ID_txt14.visible=false;

		ID_txt15 = getCJSElement("TEXT",{x:238.75,y:294.3,compId:"ID_trans15",width:70,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt15);
		ID_txt15.visible=false;

		ID_txt16 = getCJSElement("TEXT",{x:161.65,y:324.15,compId:"ID_trans16",width:70,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt16);
		ID_txt16.visible=false;

		ID_txt17 = getCJSElement("TEXT",{x:161.05,y:262.65,compId:"ID_trans17",width:70,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt17);
		ID_txt17.visible=false;

		ID_txt18 = getCJSElement("TEXT",{x:218.8,y:238.85,compId:"ID_trans18",width:70,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt18);
		ID_txt18.visible=false;

		ID_txt19 = getCJSElement("TEXT",{x:86.4,y:278.65,compId:"ID_trans19",width:70,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt19);
		ID_txt19.visible=false;

		ID_txt20 = getCJSElement("TEXT",{x:86,y:247.45,compId:"ID_trans20",width:75,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt20);
		ID_txt20.visible=false;

		ID_txt21 = getCJSElement("TEXT",{x:93.2,y:217.75,compId:"ID_trans21",width:70,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt21);
		ID_txt21.visible=false;

		ID_txt22 = getCJSElement("TEXT",{x:165,y:159.75,compId:"ID_trans22",width:90,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt22);
		ID_txt22.visible=false;

		ID_txt23 = getCJSElement("TEXT",{x:87.4,y:381.6,compId:"ID_trans23",width:65,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt23);
		ID_txt23.visible=false;

		ID_txt24 = getCJSElement("TEXT",{x:254.2,y:402.35,compId:"ID_trans24",width:65,height:17,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt24);
		ID_txt24.visible=false;

		
		
     


container.addEventListener("click", handlerMethod);
container.addEventListener("mouseover", handlerOverMethod);
container.addEventListener("mouseout", handlerOutMethod);
//var btn2 = getCJSElement("TEXTBOX",{x:405.95,y:96,width:234.75,height:287,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
//_container.addChild(btn2);






	 function handlerMethod(event) {
		
		if(clickBool==false)
		{
	
			ID_txt01.visible=true;
			ID_txt02.visible=true;
			ID_txt03.visible=true;
			ID_txt04.visible=true;
			ID_txt05.visible=true;
			ID_txt06.visible=true;
			ID_txt07.visible=true;
			ID_txt08.visible=true;
			ID_txt09.visible=true;
			ID_txt10.visible=true;
			ID_txt11.visible=true;
			ID_txt12.visible=true;
			ID_txt13.visible=true;
			ID_txt14.visible=true;
			ID_txt15.visible=true;
			ID_txt16.visible=true;
			ID_txt17.visible=true;
			ID_txt18.visible=true;
			ID_txt19.visible=true;
			ID_txt20.visible=true;
			ID_txt21.visible=true;
			ID_txt22.visible=true;
			ID_txt23.visible=true;
			ID_txt24.visible=true;

		
	
		btn2.visible=true;
		
		hit.visible=true;
		$("#ID_title").css("opacity","0.4");
		clickBool=true;
		}
		else 
		{
			
		
		ID_txt01.visible=false;
		ID_txt02.visible=false;
		ID_txt03.visible=false;
		ID_txt04.visible=false;
		ID_txt05.visible=false;
		ID_txt06.visible=false;
		ID_txt07.visible=false;
		ID_txt08.visible=false;
		ID_txt09.visible=false;
		ID_txt10.visible=false;
		ID_txt11.visible=false;
		ID_txt12.visible=false;
		ID_txt13.visible=false;
		ID_txt14.visible=false;
		ID_txt15.visible=false;
		ID_txt16.visible=false;
		ID_txt17.visible=false;
		ID_txt18.visible=false;
		ID_txt19.visible=false;
		ID_txt20.visible=false;
		ID_txt21.visible=false;
		ID_txt22.visible=false;
		ID_txt23.visible=false;
		ID_txt24.visible=false;

		
		
			clickBool=false;
			
			btn2.visible=false;
			hit.visible=false;
			$("#ID_title").css("opacity","1");
		}
	
	   
 }
 
 function handlerOverMethod(event)
 {

	btn1.visible=true;
	

 }
  function handlerOutMethod(event)
 {
	btn1.visible=false;
	}

	
});