function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id){
 	if(_id==3){
	 var ID_s3_txt03 = getMediaText("ID_s3_txt03").trim();
	 $("#ID_s3_txt03").append(ID_s3_txt03);	
	}
	
});