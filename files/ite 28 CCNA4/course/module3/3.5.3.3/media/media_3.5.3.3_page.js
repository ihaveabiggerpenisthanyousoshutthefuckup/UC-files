
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id){
 	if(_id==2){
	 var ID_s2_txt05 = getMediaText("ID_s2_txt05").trim();
	 $("#ID_s2_txt05").append(ID_s2_txt05);	
	}
	
});