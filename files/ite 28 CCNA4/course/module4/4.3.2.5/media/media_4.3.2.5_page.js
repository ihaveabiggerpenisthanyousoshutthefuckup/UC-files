function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
(slideViewDidLoad = function(_container,_id){
 	if(_id==1){
	 var ID_s1_txt01 = getMediaText("ID_s1_txt01").trim();
	 $("#ID_s1_txt01").append(ID_s1_txt01);	
	}
	if(_id==3){
	 var ID_s3_txt01 = getMediaText("ID_s3_txt01").trim();
	 $("#ID_s3_txt01").append(ID_s3_txt01);	
	}
	
});