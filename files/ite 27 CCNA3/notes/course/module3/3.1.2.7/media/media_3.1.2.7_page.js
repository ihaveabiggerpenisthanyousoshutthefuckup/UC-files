function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id){
    if(_id == 1)
    {
    btnXPosArr=[577,607,577,607,577,607,577,607,577,607,577,607];
    btnYPosArr=[73,92,111,130,149,168,187,206,225,244,263,282];
    buttonArr = [];
    sampleArray = [];
    bubbleArr = [];
    var lastBtnClick;
    bubbleTitleArr = ["ID_btn01_title", "ID_btn02_title", "ID_btn03_title","ID_btn04_title", "ID_btn05_title", "ID_btn06_title","ID_btn07_title", "ID_btn08_title", "ID_btn09_title","ID_btn10_title", "ID_btn11_title", "ID_btn12_title" ];
    bubbleTextArr  = ["ID_btn01_body", "ID_btn02_body", "ID_btn03_body","ID_btn04_body", "ID_btn05_body", "ID_btn06_body","ID_btn07_body", "ID_btn08_body", "ID_btn09_body","ID_btn10_body", "ID_btn11_body", "ID_btn12_body" ];

    defaultClickedBtn = 0;

    function clickFunction(e) {

        if (defaultClickedBtn == e.target.id) {
            return;
        }
        //$("#imgHighlighted").attr("src", highlightedBtnSrc[e.target.id]);
        if (lastBtnClick != null) {

            $("#" + lastBtnClick).attr("src", "../../../common/images/plus_btn.png");
            $("#" + lastBtnClick).css({ "width": "30px", "height": "30px" });
            $("#" + lastBtnClick).on("mouseover", mouseOverFunc);
            $("#" + lastBtnClick).on("mouseout", mouseOutFunc);
            bubbleArr[lastBtnClick].visible = false;

        } else {
            $("#" + 0).attr("src", "../../../common/images/plus_btn.png");
            $("#" + 0).css({ "width": "30px", "height": "30px" });
            $("#" + 0).on("mouseover", mouseOverFunc);
            $("#" + 0).on("mouseout", mouseOutFunc);
            bubbleArr[0].visible = false;
        }
        lastBtnClick = e.target.id
        $("#" + e.target.id).attr("src", "../../../common/images/plus_btn_over2.png");
        $("#" + e.target.id).css({ "width": "24px", "height": "24px", "top": btnYPosArr[lastBtnClick] + 3 + "px", "left": btnXPosArr[lastBtnClick] + 5 + "px" });
        $("#" + e.target.id).off("mouseover", mouseOverFunc);
        $("#" + e.target.id).off("mouseout", mouseOutFunc);
        bubbleArr[e.target.id].visible = true;

        defaultClickedBtn = e.target.id;
    }


    function mouseOverFunc(e) {
        if (defaultClickedBtn == e.target.id) {
            return;
        }
        $("#" + e.target.id).attr("src", "../../../common/images/plus_btn_over.png");

    }


    function mouseOutFunc(e) {
        if (defaultClickedBtn == e.target.id) {
            return;
        }
        $("#" + e.target.id).attr("src", "../../../common/images/plus_btn.png");
    }

    var imgElement = document.createElement("div");
    imgElement.style.cssText = "position:absolute;";
    imgElement.id = "domElement_img";
    //imgElement.innerHTML = "<img id='imgHighlighted' height='477' width='640' src="+highlightedBtnSrc[0]+"></img>";
    console.log("created");

    $("#slide_1").append(imgElement);
    $("#imgHighlighted").css("top", "0px");
    $("#imgHighlighted").css("left", "0px");

    var imhDomElement = new createjs.DOMElement(imgElement);

    for (var i = 0; i < 12; i++) {
        var btn2 = getCJSElement("TEXTBOX", { x: 35, y: 325, width: 600, height: 120, size: 11, titleId: bubbleTitleArr[i], bodyId: bubbleTextArr[i] });
        _container.addChild(btn2);
        bubbleArr[i] = btn2;
        if (i == 0) {
            bubbleArr[0].visible = true;
        } else {
            bubbleArr[i].visible = false;
        }


        var htmlElement = document.createElement("div");
        htmlElement.style.cssText = "position:absolute;";
        htmlElement.id = "domElement_" + i;

        $("#slide_1").append(htmlElement);



        if (i == 0) {
            htmlElement.innerHTML = "<img id=" + i + " 'height='24' width='24' src='../../../common/images/plus_btn_over2.png'></img>";
            //$("#" + i).off("click", clickFunction);
            $("#" + i).css({ "top": btnYPosArr[i] + 3 + "px", "left": btnXPosArr[i] + 5 + "px" });
        } else {
            htmlElement.innerHTML = "<img id=" + i + " 'height='30' width='30' src='../../../common/images/plus_btn.png'></img>";
        }

        $("#" + i).on("mouseover", mouseOverFunc);
        $("#" + i).on("mouseout", mouseOutFunc);
        $("#" + i).on("click", clickFunction);

        $("#domElement_" + i).css("top", btnYPosArr[i] + "px");
        $("#domElement_" + i).css("left", btnXPosArr[i] + "px");
        $("#domElement_" + i).css("cursor", "pointer");
    }
}
    var domElement = new createjs.DOMElement(htmlElement);

});
