function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
    feedbacktleArr = ["","ID_s1_blankTitle", "ID_s2_blankTitle", "ID_s3_blankTitle", "ID_s4_blankTitle", "ID_s5_blankTitle", "ID_s6_blankTitle"];
    feedbackbdyArr = ["","ID_s1_blankBody", "ID_s2_blankBody", "ID_s3_blankBody", "ID_s4_blankBody", "ID_s5_blankBody", "ID_s6_blankBody"];
    var correctAns = [0, 0, 2, 3, 3, 3, 1];

    var optionXPosArray = 33;
    var optionYPosArray = [133, 133, 133, 133];
    var optionWidth = 614;

    if (_id > 1) {
        $("#slide_" + _id).append('<div id="radioHolder' + _id + '"></div>');
        var rh = new createjs.DOMElement(document.getElementById("radioHolder" + _id));
        rh.x = 320;
        rh.y = 178;
        var bb_chk = getCJSElement("BLUE_BUTTON", { x: 50, y: 440.8, width: 100, height: 21, size: 12, id: ("bb_chk" + parseInt(_id)), compId: "ID_s" + parseInt(_id) + "_check", callback: checkAns });
        var bb_rst = getCJSElement("BLUE_BUTTON", { x: 165, y: 440.8, width: 100, height: 21, id: "bb_rst" + parseInt(_id), compId: "ID_s" + parseInt(_id) + "_reset", callback: reset });

        _container.addChild(bb_chk);
        _container.addChild(bb_rst);
        _container.addChild(rh);

        for (var k = 1; k < 5; k++) {

            var divElement = document.createElement("button");
            divElement.tabIndex = 0;
            divElement.id = "btn_s" + _id + "_" + k;
            divElement.name = "Radio";
            $(divElement).attr("aria-label","Check radio button")
            divElement.onclick = function(e) {
                feedback.visible = false;
                correct_img.visible = false;
                wrong_img.visible = false;
                var id = e.target.id.split("s" + _id + "_")[1];
                $("#ch" + id + "_" + parseInt(_id)).attr('checked', true);
            }
            divElement.style.cssText = "position:absolute;padding: 0;border: none;background-color: transparent;width:20px;height:20px;pointer-events:none;";
            $(divElement).css({ "margin-top": optionYPosArray[k - 1] - 180 + "px" })
            $("#radioHolder" + _id).append('<div  style="position:relative;margin-bottom:20.5px;width:100%;"><input  type="radio" id="ch' + k + '_' + parseInt(_id) + '" value=' + k + ' name="grp' + _id + '" onkeypress="selectThis()"/><label id="btn' +_id + + k + '" name="button_s' + _id + '_' + k + '"  for="ch' + k + '_' + parseInt(_id) + '"></label><div tabindex=0 id="textCont_s' + _id + '_' + k + '" style="width:' + optionWidth + 'px;position:absolute;left:32px;top:-10px;">' + getMediaText("ID_s" + _id + "_txt0" + (k + 1)) + '</div></div>');
            $('#radioHolder' + _id).append(divElement);
        }

        var radioBtns = document.getElementsByTagName('input');
        for (var i = 1; i < radioBtns.length; i++) {

        }
        for (var a = 0; a < radioBtns.length; a++) {
            // console.log(typeof radioBtns[a]);
            radioBtns[a].addEventListener('onkeyup', function() { console.log('ttt45555'); })
        }

        function selectThis(e) {
            console.log('e: ', e);
        }
        console.log(_id);
        var divId = "slide_" + parseInt(_id);
        var feedback = getCJSElement("TEXTBOX", { subType: "CLOSABLE", x: "300", y: "158", width: "350", height: "167", titleId: feedbacktleArr[_id], bodyId: feedbackbdyArr[_id], visible: "0" });
        var correct_img = getCJSElement("IMAGE", { src: "correct.png", x: "307", y: "135", width: "12", height: "12" });
        var wrong_img = getCJSElement("IMAGE", { src: "wrong.png", x: "307", y: "135", width: "12", height: "12" });

        correct_img.visible = false;
        wrong_img.visible = false;
        _container.addChild(correct_img);
        _container.addChild(wrong_img);
        _container.addChild(feedback);


        $('#radioHolder' + _id + ' input:radio').change(function() {
            feedback.visible = false;
            correct_img.visible = false;
            wrong_img.visible = false;
        });
    }

    function reset() {
        feedback.visible = false;
        correct_img.visible = false;
        wrong_img.visible = false;

        for (var k = 1; k < 5; k++) {
            $("#ch" + k + "_" + parseInt(_id)).attr('checked', false);
        }
    }

    function checkAns() {

        if ($('input[name=grp' + _id + ']').is(':checked')) {
            if ($('input[name=grp' + _id + ']:checked').val() == correctAns[_id]) {

                feedback.visible = true;
                correct_img.visible = true;
                wrong_img.visible = false;
                correct_img.y = 135 + ($('input[name=grp' + _id + ']:checked').val() * 36);

                feedback.setTitleId("ID_s" + _id + "_correctTitle");
                feedback.setBodyId("ID_s" + _id + "_correctBody");
            } else {
                feedback.visible = true;
                correct_img.visible = false;
                wrong_img.visible = true;
                wrong_img.y = 135 + ($('input[name=grp' + _id + ']:checked').val() * 36);
                feedback.setTitleId("ID_s" + _id + "_incorrectTitle");
                feedback.setBodyId("ID_s" + _id + "_incorrectBody");
            }
        } else {
            feedback.visible = true;
            feedback.setTitleId(feedbacktleArr[_id]);
            feedback.setBodyId(feedbackbdyArr[_id]);
        }

    }

});