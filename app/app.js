/**
 * app.js
 *
 * @version: v1.0.0
 * @author: Sean Chou
 * @licensed: under MIT (https://github.com/sean1093/elements-generator/blob/master/LICENSE)
 */
(function () {
    "use strict";

    var nav = $m.createNavbar("LOGO");

    var div = $g.createElement("div");
    var div2 = $g.createElement("div", "id", ["a", "tag"]);

    var btn = $g.createBtn("this is btn");


    var input = $g.createInput("input", "please input text");
    var select = $g.createSelect("select", [
        {"value": "select1", "text": "this is 1"},
        {"value": "select2", "text": "this is 2"},
        {"value": "select3", "text": "this is 3"}
        ]);


    var app = document.getElementById("app");
    app.appendChild(nav);
    app.appendChild(div);
         app.appendChild(div2);
         app.appendChild(btn);
         app.appendChild(input);
 app.appendChild(select);
})();