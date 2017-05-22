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
    var select = $g.createSelect("select", [
        {"value": "select1", "text": "this is 1"},
        {"value": "select2", "text": "this is 2"},
        {"value": "select3", "text": "this is 3"}
        ], null, "please select");


    var app = document.getElementById("app");
    app.appendChild(nav);
    app.appendChild(side);
    app.appendChild(openSide);

    app.appendChild(div);
         app.appendChild(div2);
         app.appendChild(btn);
         app.appendChild(Mbtn);
         app.appendChild(input);
 app.appendChild(select);
})();