function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
    if (_id == 1) {
        var ID_s1_txt01 = getMediaText("ID_s1_txt01").trim();
        var ID_s1_txt02 = getMediaText("ID_s1_txt02").trim();
        var ID_s1_txt03 = getMediaText("ID_s1_txt03").trim();
        var ID_s1_txt04 = getMediaText("ID_s1_txt04").trim();

        $("#ID_s1_txt01").append(ID_s1_txt01);
        $("#ID_s1_txt02").append(ID_s1_txt02);
        $("#ID_s1_txt03").append(ID_s1_txt03);
        $("#ID_s1_txt04").append(ID_s1_txt04);

    }

});
