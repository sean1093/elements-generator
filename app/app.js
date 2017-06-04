/**
 * app.js
 *
 * @version: v1.0.0
 * @author: Sean Chou
 * @licensed: under MIT (https://github.com/sean1093/elements-generator/blob/master/LICENSE)
 */
(function () {
    "use strict";

    var nav = $m.createNavbar("LOGO", "nav", "blue");
    var side = $m.createSideNav("side");
    var openSide = $m.openSideNavBtn("Open Side", "side", "openSide");
    

    var div = $g.createElement("div");
    var div2 = $g.createElement("div", "id", ["a", "tag"]);

    var btn = $g.createBtn("this is btn");
    var Mbtn = $m.createBtn("this is btn", "M_btn", "blue");


    var input = $g.createInput("input", "please input text");

    var radio_config = {
        "radioType": $g.MUTIPLE, // sinle, mutiple
        "value": [
            {"id": "r1", "value":30, "text": "radio1"},
            {"id": "r2", "value":40, "text": "radio2"},
            {"id": "r3", "value":50, "text": "radio3"},
            {"id": "r4", "value":60, "text": "radio4"}
        ]
    };
    var radio = $g.createRadio("radio", radio_config);


    var select = $g.createSelect("selectID", [
        {"value": "select1", "text": "this is 1", "type": "checkbox"},
        {"value": "select2", "text": "this is 2", "type": "radio"},
        {"value": "select3", "text": "this is 3"}
        ], null, "please select");
        select.onchange = function(e) {
            console.log(e.target.value);

            $g.updateSelectOptions("selectID2",[
                {"value": "select1", "text": "this is 1"},
                {"value": "select2", "text": "this is 2"},
                {"value": "select3", "text": "this is 3"}
            ]);

        };

    var select2 = $g.createSelect("selectID2", [{"value": "select1111", "text": "s 1"}], null, "please select 2");

    var select_config = {
        "type": "radio",
        "radioType": $g.MUTIPLE, // sinle, mutiple
        "value": [
            {"id": "r1", "value":30, "text": "radio1"},
            {"id": "r2", "value":40, "text": "radio2"},
            {"id": "r3", "value":50, "text": "radio3"},
            {"id": "r4", "value":60, "text": "radio4"}
        ]
    };
    var select3 = $g.createSelect("selectID3", select_config, null, "please select 3");



    var app = document.getElementById("app");
    app.appendChild(nav);
    app.appendChild(side);
    app.appendChild(openSide);

    app.appendChild(div);
    app.appendChild(div2);
    app.appendChild(btn);
    app.appendChild(Mbtn);
    app.appendChild(input);
    app.appendChild(radio);

    app.appendChild(select);
    app.appendChild(select2);
    app.appendChild(select3);



})();