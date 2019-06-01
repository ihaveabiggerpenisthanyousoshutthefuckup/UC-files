function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id){
	 var ID_txt03 = getMediaText("ID_txt03").trim();
	 $("#ID_txt03").append(ID_txt03);	
	
})

