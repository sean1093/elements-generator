/**
 * HTMLElementsGenerator.js
 *
 * @version: v1.0.1
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
            var f = document.createDocumentFragment();
            var optsDisabled = $g.createElement("option");
            optsDisabled.disabled = "disabled";
            optsDisabled.selected = "selected";
            optsDisabled.innerText = initText || "Choose your option";
            f.appendChild(optsDisabled);
            if(_innerTool.isNull(options)) {
                for(var o in options) {
                    var opts = $g.createElement("option", options[o].value);
                    opts.value = options[o].value;
                    opts.innerText = options[o].text;
                    f.appendChild(opts);
                } 
            }
            s.appendChild(f);
        },
        getRandomId: function(type) {
            return type + "_" + Math.floor(Math.random()*100000);
        },
        isNull: function(t) {
            return (t !== undefined && t !== null);
        }        
    };

    var $g = {
        SINGLE: "single",
        MUTIPLE: "mutiple",
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
        createRadio: function(id, config, classes) {
            var f = document.createDocumentFragment();
            var d = document.createElement("div", id);
            if(!_innerTool.isNull(config)) return d;
            var value = config.value;
            var name = _innerTool.getRandomId("radioName");
            for(var i = 0; i < value.length; i++) {
                var innerName = name;
                //The radio buttons must have a same name, if you want only one of them to be avaliable
                if(config.radioType == $g.MUTIPLE) {
                    innerName += i; 
                }
                var subId = value[i].id || _innerTool.getRandomId("radio");
                var r = $g.createInput("radio", null, subId, classes);
                r.name = innerName;
                r.value = value[i].value;
                var l = $g.createElement("label");
                l.setAttribute("for", subId);
                l.innerText = value[i].text;
                f.appendChild(r);
                f.appendChild(l);
            }
            d.appendChild(f);
            return d;
        },
        createLink: function(href, text, id, classes) {
            var a = $g.createElement("a", id, classes);
            a.href = href;
            a.innerText = text;
            return a;
        },
        createSelect: function(id, options, classes, initText) {
            var s = $g.createElement("select", id, classes);
            if(Array.isArray(options)) {
                _innerTool.appendOptions(s, options, initText);
            }          
            return s;
        },
        createDropdown: function(id, options, classes, initText) {

        },
        updateSelectOptions: function(id, options, initText) {
            var s = document.getElementById(id);
            s.innerHTML = null;
            if(Array.isArray(options)) {
                _innerTool.appendOptions(s, options, initText);
            }
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
            var f = document.createDocumentFragment();
            classes = _innerTool.appendClassesToExistClass(classes, mClasses);
            var outer = $g.createElement("div", id, "navbar-fixed");
            var nav = $g.createElement("nav", undefined, classes);
            var inner = $g.createElement("div", "navbar_inner", "nav-wrapper");
            var a = $g.createLink("#", header, "header_link", "brand-logo");
            inner.appendChild(a);
            nav.appendChild(inner);
            f.appendChild(nav);
            outer.appendChild(f);
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
        },
        createTabs: function(id, config) { // config {"title", "herf", "class"}
            var outer = $g.createElement("div", null, "col s12");
            var ul = $g.createElement("ul", id, "tabs"); 
            if(_innerTool.isNull(config)) { 
                console.log(config.length);
                var unit = Math.floor(12/config.length);
                console.log(unit);
                var flag = true;
                for(var o in config) {
                    var a = $g.createElement("a", null);
                    a.innerText = config[o].title;
                    a.href = config[o].href;
                    if(flag) {
                       a.className += "active";
                       flag = false;  
                    }                   
                    var li = $g.createElement("li");
                    li.className = "tab col s"+unit;
                    li.appendChild(a);
                    ul.appendChild(li);
                } 
            }
            outer.appendChild(ul);
            return outer;
        },
        createSelect: function(id, options, classes, initText) {
            $m.enable();
            return $g.createSelect(id, options, classes, initText);
        },
        createInput: function(defaultText, id, classes) {
            $m.enable();
            id = id || _innerTool.getRandomId("input");
            var mClasses = "validate";
            classes = _innerTool.appendClassesToExistClass(classes, mClasses);
            var f = document.createDocumentFragment();
            var outer = $g.createElement("div", _innerTool.getRandomId("div"), "input-field");
            var i = $g.createInput("text", defaultText, id, classes);
            var l = $g.createElement("label");
                l.setAttribute("for", id);
            f.appendChild(i);
            f.appendChild(l);
            outer.appendChild(f);
            return outer;
        }
    };

    $(document).ready(function() {
        if(_materialEnable) {
            $('select').material_select();
            $('.open-side').sideNav();
            // Materialize.updateTextFields();
        }
    });

    window.$g = $g;
    window.$m = $m;
})();