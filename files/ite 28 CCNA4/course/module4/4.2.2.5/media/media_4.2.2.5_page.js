function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
(slideViewDidLoad = function(_container, _id) {
    var ID_txt01 = getMediaText("ID_txt01").trim();
    var ID_txt02 = getMediaText("ID_txt02").trim();
    $("#ID_txt01").append(ID_txt01);
    $("#ID_txt02").append(ID_txt02);
});
