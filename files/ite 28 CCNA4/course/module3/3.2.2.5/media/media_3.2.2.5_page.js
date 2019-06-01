function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id){
 	if(_id==2){
	 var ID_s2_txt01a = getMediaText("ID_s2_txt01a").trim();
	 $("#ID_s2_txt01a").append(ID_s2_txt01a);
	 var ID_s2_txt02a = getMediaText("ID_s2_txt02a").trim();
	 $("#ID_s2_txt02a").append(ID_s2_txt02a);	
}
});