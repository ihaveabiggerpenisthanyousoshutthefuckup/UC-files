function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
	
    if(_id == 1){
            btnXPosArr = [173,25,23];
    btnYPosArr = [68, 114.95, 272.7];
    highlightedBtnSrc = ['set-1.png', 'set-2.png', 'set-3.png'];
    highlightedBtnAlt = ['File client and server', 'Web client and server', 'Email client and server']
    buttonArr = [];
    sampleArray = [];
    bubbleArr = [];
    var lastBtnClick;
    bubbleTitleArr = ["ID_set01_header", "ID_set02_header", "ID_set03_header"];
    bubbleTextArr = ["ID_set01_body", "ID_set02_body", "ID_set03_body"];
    defaultClickedBtn = 0;

    function clickFunction(e) {
        if (defaultClickedBtn == e.target.id) {
            return;
        }
        $("#imgHighlighted").attr("src", highlightedBtnSrc[e.target.id]);
        $("#imgHighlighted").attr("alt", highlightedBtnAlt[e.target.id]);
        if (lastBtnClick != null) {
            $("#" + lastBtnClick).attr("src", "../../../common/images/plus_btn.png");
            $("#" + lastBtnClick).css({
                "width": "45px",
                "height": "45px"
            });
            $("#" + lastBtnClick).on("mouseover", mouseOverFunc);
            $("#" + lastBtnClick).on("mouseout", mouseOutFunc);
            bubbleArr[lastBtnClick].visible = false;
        } else {
            $("#" + 0).attr("src", "../../../common/images/plus_btn.png");
            $("#" + lastBtnClick).css({
                "width": "45px",
                "height": "45px"
            });
            $("#" + 0).on("mouseover", mouseOverFunc);
            $("#" + 0).on("mouseout", mouseOutFunc);
            bubbleArr[0].visible = false;
        }
        lastBtnClick = e.target.id
        $("#" + e.target.id).attr("src", "../../../common/images/plus_btn_over2.png");
        $("#" + e.target.id).css({
            "width": "35px",
            "height": "35px",
            "top": btnYPosArr[lastBtnClick] + 3 + "px",
            "left": btnXPosArr[lastBtnClick] + 5 + "px"
        });
        $("#" + e.target.id).off("mouseover", mouseOverFunc);
        $("#" + e.target.id).off("mouseout", mouseOutFunc);
        bubbleArr[e.target.id].visible = true;

        defaultClickedBtn = e.target.id;
    }
    function mouseOverFuncFoc(e) {
        $("#" + e.target.id.split('btn')[1]).attr("src", "../../../common/images/plus_btn_over.png");
        $("#" + e.target.id.split('btn')[1]).css({
            "width": "45px",
            "height": "45px"
        });
        if (lastBtnClick == e.target.id.split('btn')[1]) {
            $("#" + e.target.id.split('btn')[1]).attr("src", "../../../common/images/plus_btn_over2.png");
            $("#" + e.target.id.split('btn')[1]).css({
                "width": "35px",
                "height": "35px"
            });

        }
    }
    function mouseOutFuncFoc(e) {
        $("#" + e.target.id.split('btn')[1]).attr("src", "../../../common/images/plus_btn.png");
        $("#" + e.target.id.split('btn')[1]).css({
            "width": "45px",
            "height": "45px"
        });
        if (lastBtnClick == e.target.id.split('btn')[1]) {
            $("#" + e.target.id.split('btn')[1]).attr("src", "../../../common/images/plus_btn_over2.png");
            $("#" + e.target.id.split('btn')[1]).css({
                "width": "35px",
                "height": "35px"
            });
        }
    }
    function clickFunctionFoc(e) {
        if (lastBtnClick != null) {
            $("#" + lastBtnClick).attr("src", "../../../common/images/plus_btn.png");
            $("#" + lastBtnClick).css({
                "width": "45px",
                "height": "45px"
            });
            $("#" + lastBtnClick).on("mouseover", mouseOverFunc);
            $("#" + lastBtnClick).on("mouseout", mouseOutFunc);
            bubbleArr[lastBtnClick].visible = false;
        }
        lastBtnClick = e.target.id.split('btn')[1];
        $("#" + e.target.id.split('btn')[1]).attr("src", "../../../common/images/plus_btn_over2.png");
        $("#" + e.target.id.split('btn')[1]).css({
            "width": "35px",
            "height": "35px"
        });
        bubbleArr[e.target.id.split('btn')[1]].visible = true;
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
    imgElement.innerHTML = "<img id='imgHighlighted' alt=" + highlightedBtnAlt[0] + " height='490' width='640' src=" + highlightedBtnSrc[0] + "></img>";
    console.log("created");
    $("#slide_1").append(imgElement);
    $("#imgHighlighted").css("top", "0px");
    $("#imgHighlighted").css("left", "0px");
    var imhDomElement = new createjs.DOMElement(imgElement);
    for (var i = 0; i < 3; i++) {
        var btn2 = getCJSElement("TEXTBOX", {
            x: 400,
            y: 80.9,
            width: 260,
            height: 280,
            size: 11,
            titleId: bubbleTitleArr[i],
            bodyId: bubbleTextArr[i]
        });
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
            htmlElement.innerHTML = "<img id=" + i + " 'height='40' width='40' src='../../../common/images/plus_btn_over2.png'></img>";

            $("#" + i).css({
                "top": btnYPosArr[i] + 3 + "px",
                "left": btnXPosArr[i] + 5 + "px"
            });
        } else {
            htmlElement.innerHTML = "<img id=" + i + " 'height='40' width='40' src='../../../common/images/plus_btn.png'></img>";
        }
        $("#" + i).on("mouseover", mouseOverFunc);
        $("#" + i).on("mouseout", mouseOutFunc);
        $("#" + i).on("click", clickFunction);
        $("#domElement_" + i).css("top", btnYPosArr[i] + "px")
        $("#domElement_" + i).css("left", btnXPosArr[i] + "px")
        $("#domElement_" + i).css("cursor", "pointer")
        j = i + 1;
        var label = document.createElement("button");
        label.style.cssText = "border: 1px solid rgba(0,0,0,0);padding: 0;background-color:transparent;top:2px;left:2px;cursor:pointer;pointer-events:none;";
        label.innerHTML = "";
        label.id = "btn" + i;
        label.name="MoreInfo";
        label.tabIndex = 0;
        
        $("#slide_1").append($('#textBoxDiv_' + j));
        $(label).insertBefore($('#textBoxDiv_' + j));
        $("#btn" + i).on("focus", mouseOverFuncFoc);
        $("#btn" + i).on("focusout", mouseOutFuncFoc);
        $("#btn" + i).on("click", clickFunctionFoc);
        $("#btn" + i).css({
            "position": "absolute",
            "margin-top": btnYPosArr[i],
            "margin-left": btnXPosArr[i],
            "width": 35 + "px",
            "height": 35 + "px"
        });
        $("#btn" + i).attr("aria-label", "More information button")

    }
    //var domElement = new createjs.DOMElement(htmlElement);

    }
    
});
