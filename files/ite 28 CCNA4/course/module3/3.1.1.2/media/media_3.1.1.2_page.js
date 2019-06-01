function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {

    var totalButton = 6;
    btnXPosArr = [156.35, 259.1, 344.35, 506.65, 346.95, 545.1];
    btnYPosArr = [199.75, 117.75, 117.75, 53.7, 266.45, 180.7];
    var buttonArr = [];
    var buttonClickArr = [];
    var buttonOverArr = [];
    var bubbleArr = [];
    var sampleArray = [];
    var lastBtnClick;
    bubbleTitleArr = ["ID_btn01_header", "ID_btn02_header", "ID_btn03_header", "ID_btn04_header", "ID_btn05_header", "ID_btn06_header"]
    bubbleTextArr = ["ID_btn01_body", "ID_btn02_body", "ID_btn03_body", "ID_btn04_body", "ID_btn05_body", "ID_btn06_body"]
    for (var i = 0; i < totalButton; i++) {
        var container = new createjs.Container()
        _container.addChild(container);
        container.id = i;

        container.cursor = "pointer";


        btn = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "../../../common/images/plus_btn.png", });

        buttonArr.push(btn);
        container.addChild(btn);

        btn1 = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "../../../common/images/plus_btn_over.png", });

        buttonOverArr.push(btn1);
        container.addChild(btn1);
        btn1.visible = false;

        btn4 = getCJSElement("IMAGE", { x: btnXPosArr[i] + 5, y: btnYPosArr[i] + 3, width: 35, height: 35, src: "../../../common/images/plus_btn_over2.png", });

        buttonClickArr.push(btn4);
        container.addChild(btn4);
        btn4.visible = false;

        container.addEventListener("click", handlerMethod);
        container.addEventListener("mouseover", handlerOverMethod);
        container.addEventListener("mouseout", handlerOutMethod);
        var btn2 = getCJSElement("TEXTBOX", { x: 75, y: 330, width: 520, height: 135, size: 11, titleId: bubbleTitleArr[i], bodyId: bubbleTextArr[i], });

        _container.addChild(btn2);


        bubbleArr[i] = btn2;
        bubbleArr[i].visible = false;


        bubbleArr[0].visible = true;
        buttonClickArr[0].visible = true;




        //accessibility fix -------------------------------------
        j = i + 1;
        var label = document.createElement("button");
        label.style.cssText = "border: 1px solid rgba(0,0,0,0);padding: 0;background-color:transparent;top:2px;left:2px;cursor:pointer;pointer-events:none;";
        label.innerHTML = "";
        label.id = "btn" + j;
        label.name = "MoreInfo";
        label.tabIndex = 0;
        $(label).insertBefore($('#textBoxDiv_' + j));

        $("#btn" + j).on("focus", mouseOverFunc);
        $("#btn" + j).on("focusout", mouseOutFunc);
        $("#btn" + j).on("click", clickFunction);
        $("#btn" + j).css({ "position": "absolute", "margin-top": btnYPosArr[i], "margin-left": btnXPosArr[i], "width": 35 + "px", "height": 35 + "px" });
        $("#btn" + j).attr("aria-label", "More information button")

        
        function mouseOverFunc(event) {
            var id = (event.target.id.split('btn')[1]) - 1;
            buttonOverArr[id].visible = true;
        }

        function mouseOutFunc() {
            var id = (event.target.id.split('btn')[1]) - 1;
            buttonOverArr[id].visible = false;
        }

        function clickFunction(event) {
            var id = (event.target.id.split('btn')[1]) - 1;
            //console.log(event.target.id.split('btn')[1])
            for (i = 0; i < 6; i++) {
                bubbleArr[i].visible = false;
                buttonClickArr[i].visible = false;

            }

            bubbleArr[id].visible = true;
            buttonClickArr[id].visible = true;

        }
        //accessibility fix end-------------

    }

    function handlerMethod(event) {
        console.log("handlerMethod");
        for (var i = 0; i < totalButton; i++) {

            bubbleArr[i].visible = false;
            buttonClickArr[i].visible = false;

        }
        if (lastBtnClick) {
            buttonOverArr[lastBtnClick.id].visible = false;
            lastBtnClick.addEventListener("mouseover", handlerOverMethod);
            lastBtnClick.addEventListener("mouseout", handlerOutMethod);
        }
        bubbleArr[event.target.id].visible = true;
        buttonClickArr[event.target.id].visible = true;

        event.target.removeEventListener("mouseover", handlerOverMethod);
        event.target.removeEventListener("mouseout", handlerOutMethod);
        lastBtnClick = event.target;

    }

    function handlerOverMethod(event) {
        console.log("handlerOverMethod");

        buttonOverArr[event.target.id].visible = true;


    }

    function handlerOutMethod(event) {
        console.log("handlerOutMethod");
        buttonOverArr[event.target.id].visible = false;
    }


});
