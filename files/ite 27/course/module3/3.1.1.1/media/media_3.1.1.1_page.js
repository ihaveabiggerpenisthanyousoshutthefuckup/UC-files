
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){

var manifest = [
		{src:"images/bg_blue_gradientJPG.JPG", id:"bg_blue_gradientJPG"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"}
	];
return manifest;
});
(slideViewDidLoad = function(slideContainer,id){
var c=document.getElementById("canvas");
c.height=490;
});