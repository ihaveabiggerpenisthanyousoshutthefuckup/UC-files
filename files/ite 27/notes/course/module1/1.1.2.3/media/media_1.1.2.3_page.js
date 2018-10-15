loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(_container, _id) {
    btnXPosArr = [206.45, 304.45, 307.45, 409.45, 414.45];
    btnYPosArr = [217.7, 103.7, 349.7, 107.7, 301.7];
    buttonArr = [];
    buttonClickArr = [];
    buttonOverArr = [];
    bubbleArr = [];
    sampleArray = [];
    var lastBtnClick;
    imageHighlight = ["res_1A.png", "res_2A.png", "res_3A.png", "res_5A.png", "res_4A.png"];

    function createImages() {
        for (var i = 0; i < 5; i++) {
            var imgElement = document.createElement("div");
            imgElement.style.cssText = "position:absolute;display:none;";
            imgElement.id = "domElement_img" + i;
            imgElement.innerHTML = "<img id='imgHighlighted' height='490' width='680' src=" + imageHighlight[i] + "></img>";
            $("#mediaContainer").append(imgElement);
            var imgDomElement = new createjs.DOMElement(imgElement);
        }

        var rootImage = document.createElement('div');
        rootImage.style.cssText = "position:absolute;";
        rootImage.id = "root_img";
        rootImage.innerHTML = "<img id='rootImage' height='490' width='680' src='res_0.png'></img>";
        $("#mediaContainer").append(rootImage);
        var imgDomElement = new createjs.DOMElement(rootImage);



    }



    function createButtons() {
        for (var j = 0; j < 5; j++) {
            var btnImage = document.createElement('div');
            btnImage.style.cssText = "position:absolute;top:" + btnYPosArr[j] + "px;left:" + btnXPosArr[j] + "px;cursor:pointer;";
            btnImage.id = "btn_img" + j;
            btnImage.innerHTML = "<img id='" + j + "' height='40' width='40' src='../../../common/images/plus_btn.png'></img>";
            $("#mediaContainer").append(btnImage);
            btnImage.addEventListener('click', onClickHandler);
            btnImage.addEventListener("mouseover", handlerOverMethod);
            btnImage.addEventListener("mouseout", handlerOutMethod);
            var btnDomElement = new createjs.DOMElement(btnImage);
        }

    }

    createImages();
    createButtons();

    function handlerOverMethod(evt) {
        var _id = evt.target.id;
        if (lastBtnClick !== _id)
            $('#btn_img' + _id).find('img').attr('src', '../../../common/images/plus_btn_over.png');
    }

    function handlerOutMethod(evt) {
        var _id = evt.target.id;
        if (lastBtnClick !== _id)
            $('#btn_img' + _id).find('img').attr('src', '../../../common/images/plus_btn.png');
    }

    function onClickHandler(evt) {
        var _id = evt.target.id;
        lastBtnClick = _id;
        for (var i = 0; i < 5; i++) {
            $('#domElement_img' + i).css('display', 'none');
            $('#btn_img' + i).find('img').attr('src', '../../../common/images/plus_btn.png');
            $('#btn_img' + i).find('img').attr('height', '40');
            $('#btn_img' + i).find('img').attr('width', '40');
        }

        $('#domElement_img' + _id).css('display', 'block');
        $('#btn_img' + _id).find('img').attr('src', '../../../common/images/plus_btn_over2.png');
        $('#btn_img' + _id).find('img').attr('height', '30');
        $('#btn_img' + _id).find('img').attr('width', '30');


    }



});
