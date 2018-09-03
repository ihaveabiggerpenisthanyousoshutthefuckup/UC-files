
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);



(slideViewDidLoad = function(_container,_id) {
	if(_id ==1){
		btnXPosArr=[356.7,185.95,428.45];
		btnYPosArr=[101.2,237.45,237.45];
		buttonArr=[];
		buttonClickArr=[];
		buttonOverArr=[];
		bubbleArr=[];
		
		for(var i=0;i<3;i++) {
			var container=new createjs.Container()
			_container.addChild(container);
			container.id=i;

			container.cursor="pointer";


			btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:44,height:54.70,src:"../../../common/images/plus_btn.png",});

			buttonArr.push(btn);
			container.addChild(btn);

			btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:44,height:54.70,src:"../../../common/images/plus_btn_over.png",});

			buttonOverArr.push(btn1);
			container.addChild(btn1);
			btn1.visible=false;

			btn4 = getCJSElement("IMAGE",{x:btnXPosArr[i]+5,y:btnYPosArr[i]+3,width:32,height:32,src:"../../../common/images/plus_btn_over2.png",});

			buttonClickArr.push(btn4);
			container.addChild(btn4);
			btn4.visible=false;

			container.addEventListener("click", handlerMethod);
			container.addEventListener("mouseover", handlerOverMethod);
			container.addEventListener("mouseout", handlerOutMethod);
		}

		var slide_1_popup1_element = document.createElement('div');
		slide_1_popup1_element.id = 'ID_s1_pop01';
		slide_1_popup1_element.style.cssText = "position:absolute;background: #FFF;border-radius: 5px;box-shadow: 1px 1px 1px 1px #888888;padding: 15px 10px;width: 430px;display:none;top:55px;left:110px;";
		slide_1_popup1_element.innerHTML = "<div class='popimg1'><img src='media_1_2_1_4_S1_A.jpg' /></div><div id='ID_s1_pop01'>"+getMediaText('ID_s1_pop01')+"<div id='ID_s1_pop01A'>"+getMediaText('ID_s1_pop01A')+"</div><div id='arrow1'><img src='arrow3.png'/></div>";
		$('#mediaContainer').append(slide_1_popup1_element);
		var slide_1_popup1_domElement = new createjs.DOMElement(slide_1_popup1_element);

		var slide_1_popup2_element = document.createElement('div');
		slide_1_popup2_element.id = 'ID_s1_pop02';
		slide_1_popup2_element.style.cssText = "position:absolute;background: #FFF;border-radius: 5px;box-shadow: 1px 1px 1px 1px #888888;padding: 15px 10px;width: 310px;display:none;top:275px;left:100px;";
		slide_1_popup2_element.innerHTML = "<div class='popimg2'><img src='media_1_2_1_4_S1_B.jpg' /></div><div id='ID_s1_pop02'>"+getMediaText('ID_s1_pop02')+"<div id='ID_s1_pop02A'>"+getMediaText('ID_s1_pop02A')+"</div>"+"<div id='ID_s1_pop02B'>"+getMediaText('ID_s1_pop02B')+"</div></div><div id='arrow2'><img src='arrow2.png'/></div>";
		$('#mediaContainer').append(slide_1_popup2_element);
		var slide_1_popup2_domElement = new createjs.DOMElement(slide_1_popup2_element);

		var slide_1_popup3_element = document.createElement('div');
		slide_1_popup3_element.id = 'ID_s1_pop03';
		slide_1_popup3_element.style.cssText = "position:absolute;background: #FFF;border-radius: 5px;box-shadow: 1px 1px 1px 1px #888888;padding: 15px 10px;width: 413px;top:205px;left:240px;display:none;";
		slide_1_popup3_element.innerHTML = "<div class='popimg1'><img src='media_1_2_1_4_S1_C.jpg' /></div><div id='ID_s1_pop03'>"+getMediaText('ID_s1_pop03')+"<div id='ID_s1_pop03A'>"+getMediaText('ID_s1_pop03A')+"</div><div id='arrow3'><img src='arrow3.png'/></div>";
		$('#mediaContainer').append(slide_1_popup3_element);
		var slide_1_popup3_domElement = new createjs.DOMElement(slide_1_popup3_element);

		function handlerMethod(event) {
   			var _id = event.target.id +1;
   			for(var i = 1; i <= 3; i++){
   				$('#ID_s1_pop0'+i).css('display', 'none');
   			}
   			if(_id == 3)
   				$('#ID_s1_pop0'+_id).css('display', 'block');
   			else 
   				$('#ID_s1_pop0'+_id).css('display', 'flex');

		}
 
		function handlerOverMethod(event) {
			buttonOverArr[event.target.id].visible=true;
		}

		function handlerOutMethod(event) {
			buttonOverArr[event.target.id].visible=false;
		}

	}

if(_id ==2){
btnXPosArr1a=[356.4];
btnYPosArr1a=[202.25];
buttonArr1a=[];
buttonClickArr1a=[];
buttonOverArr1a=[];
bubbleArr1a=[];
sampleArray1a=[];
var lastBtnClick1a;

for(var i=0;i<1;i++) {
			var container=new createjs.Container()
			_container.addChild(container);
			container.id=i;

			container.cursor="pointer";


			btna = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:44,height:54.70,src:"../../../common/images/plus_btn.png",});

			buttonArr.push(btna);
			container.addChild(btna);

			btn1a = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:44,height:54.70,src:"../../../common/images/plus_btn_over.png",});

			buttonOverArr.push(btn1a);
			container.addChild(btn1a);
			btn1a.visible=false;

			btn4a = getCJSElement("IMAGE",{x:btnXPosArr[i]+5,y:btnYPosArr[i]+3,width:32,height:32,src:"../../../common/images/plus_btn_over2.png",});

			buttonClickArr.push(btn4a);
			container.addChild(btn4a);
			btn4a.visible=false;

			container.addEventListener("click", handlerMethod);
			container.addEventListener("mouseover", handlerOverMethod);
			container.addEventListener("mouseout", handlerOutMethod);
		}

		var slide_2_popup1_element = document.createElement('div');
		slide_2_popup1_element.id = 'ID_s2_pop01A';
		slide_2_popup1_element.style.cssText = "position:absolute;background: #FFF;border-radius: 5px;box-shadow: 1px 1px 1px 1px #888888;padding: 15px 10px;width: 400px;height:200px;display:none;top:65px;left:110px;";
		slide_2_popup1_element.innerHTML = "<div class='popimg1'><img src='media_1_2_1_4_S2_A.jpg' /></div><div id='ID_s2_pop01'>"+getMediaText('ID_s2_pop01')+"</div><div id='arrow4'><img src='arrow4.png'/></div>";
		$('#mediaContainer').append(slide_2_popup1_element);
		var slide_2_popup1_domElement = new createjs.DOMElement(slide_2_popup1_element);



		function handlerMethod(event) {
   			var _id = event.target.id +1;
   			for(var i = 1; i <= 3; i++){
   				$('#ID_s2_pop0'+i+'A').css('display', 'none');
   			}
   				$('#ID_s2_pop0'+_id+'A').css('display', 'flex');
		}
 
		function handlerOverMethod(event) {
			buttonOverArr[event.target.id].visible=true;
		}

		function handlerOutMethod(event) {
			buttonOverArr[event.target.id].visible=false;
		}
	}

});

