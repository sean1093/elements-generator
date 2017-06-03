/**
 * HTMLElementsGenerator.js
 *
 * @version: v1.0.0
 * @author: Sean Chou
 * @licensed: under MIT (https://github.com/sean1093/elements-generator/blob/master/LICENSE)
 */
(function () {
    "use strict";

    var _materialEnable = false;
    var _innerTool = {
        appendClassesToElement: function(e, classes) {
            if(_innerTool.isNull(classes)) {
                if(Array.isArray(classes)) {
                    for(var c in classes) {
                        e.className += " " + classes[c];
                    }               
                }
                else {
                    e.className += " " + classes;
                }               
            }
        },
        appendClassesToExistClass: function(eClasses, nClasses) {
            if(_innerTool.isNull(eClasses)) {
                if(Array.isArray(eClasses)) {
                    eClasses.push(nClasses);
                }
                else {
                    eClasses += " " + nClasses;
                }               
            }
            else {
                eClasses = nClasses;
            }
            return eClasses;
        },
        appendOptions: function(s, options, initText) {
            var optsDisabled = $g.createElement("option");
            optsDisabled.disabled = "disabled";
            optsDisabled.selected = "selected";
            optsDisabled.innerText = initText || "Choose your option";
            s.appendChild(optsDisabled);
            if(_innerTool.isNull(options)) {
                for(var o in options) {
                    var opts = $g.createElement("option", options[o].value);
                    opts.value = options[o].value;
                    opts.innerText = options[o].text;
                    s.appendChild(opts);
                } 
            }
        },
        getRandomId: function(type) {
            return type + "_" + Math.floor(Math.random()*100000);
        },
        isNull: function(t) {
            return (t !== undefined && t !== null);
        }        
    };

    var $g = {
        createElement: function(type, id, classes) {
            if(!type) return null;
            id = id || _innerTool.getRandomId(type);           
            var e = document.createElement(type);
            e.id = id;
            _innerTool.appendClassesToElement(e, classes);
            return e;
        },
        createBtn: function(text, id, classes) {
            var b = $g.createElement("button", id, classes);
            b.innerText = text;
            return b;
        },
        createInput: function(type, defaultText, id, classes) {
            var i = $g.createElement("input", id, classes);
            i.type = type;
            if(defaultText) {
                i.placeholder = defaultText;
            }           
            return i;
        },
        createLink: function(href, text, id, classes) {
            var a = $g.createElement("a", id, classes);
            a.href = href;
            a.innerText = text;
            return a;
        },
        createSelect: function(id, options, classes, initText) {
            var s = $g.createElement("select", id, classes);
            _innerTool.appendOptions(s, options, initText);
            return s;
        },
        updateSelectOptions: function(id, options, initText) {
            var s = document.getElementById(id);
            s.innerHTML = null;
            _innerTool.appendOptions(s, options, initText);
            if(_materialEnable) {
                $('select').material_select();
            }
        }
    };
                
    var $m = {
        enable: function() { _materialEnable = true; },
        createNavbar : function(header, id, classes) {
            $m.enable();
            var mClasses = "navbar-fixed";
            classes = _innerTool.appendClassesToExistClass(classes, mClasses);
            var outer = $g.createElement("div", id, "navbar-fixed");
            var nav = $g.createElement("nav", undefined, classes);
            var inner = $g.createElement("div", "navbar_inner", "nav-wrapper");
            var a = $g.createLink("#", header, "header_link", "brand-logo");
            inner.appendChild(a);
            nav.appendChild(inner);
            outer.appendChild(nav);
            return outer;
        },
        createBtn: function(text, id, classes) {
            $m.enable();
            var mClasses = "btn waves-effect waves-light";
            classes = _innerTool.appendClassesToExistClass(classes, mClasses);
            var b = $g.createBtn(text, id, classes);
            b.type = "submit";
            return b;
        },
        createSideNav: function(id, classes, objects) {
            $m.enable();
            var mClasses = "side-nav";
            classes = _innerTool.appendClassesToExistClass(classes, mClasses);
            var outer = $g.createElement("div");
            var s = $g.createElement("ul", id, classes);  
            if(_innerTool.isNull(objects)) {         
                for(var o in objects) {
                    var li = $g.createElement("li");
                    li.appendChild(objects[o]);
                    s.appendChild(li);
                } 
            }
            outer.appendChild(s);
            return outer;
        },
        openSideNavBtn: function(text, sideNavId, id, classes) {
            var mClasses = "open-side";
            classes = _innerTool.appendClassesToExistClass(classes, mClasses);
            var b = $m.createBtn(text, id, classes);
            b.setAttribute("data-activates", sideNavId);
            return b;
        }
    };

    $(document).ready(function() {
        if(_materialEnable) {
            $('select').material_select();
            $('.open-side').sideNav();
        }
    });

    window.$g = $g;
    window.$m = $m;
})();