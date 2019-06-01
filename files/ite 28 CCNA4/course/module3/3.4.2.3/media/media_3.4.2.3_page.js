function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id){
 	if(_id==1){
	 var ID_output = getMediaText("ID_output").trim();
	 var ID_output1 = getMediaText("ID_output1").trim();
	 $("#ID_output").append(ID_output);	
	 $("#ID_output1").append(ID_output1);	
	}
	
});