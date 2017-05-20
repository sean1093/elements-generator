/**
 * HTMLElementsGenerator.js
 *
 * @version: v1.0.0
 * @author: Sean Chou
 * @licensed: under MIT (https://github.com/sean1093/elements-generator/blob/master/LICENSE)
 */
(function () {
    "use strict";

    let materialEnable = false;

    const $g = {
        createElement: (type, id = _innerTool.getRandomId(type), classes) => {
            if(!type) return null;
            let e = document.createElement(type);
            e.id = id;
            _innerTool.appendClassesToElement(e, classes);
            return e;
        },
        createBtn: (text, id, classes) => {
            let b = $g.createElement("button", id, classes);
            b.innerText = text;
            return b;
        },
        createInput: (type, defaultText, id, classes) => {
            let i = $g.createElement("input", id, classes);
            i.type = type;
            i.placeholder = defaultText;
            return i;
        },
        createLink: (href, text, id, classes) => {
            let a = $g.createElement("a", id, classes);
            a.href = href;
            a.innerText = text;
            return a;
        },
        /**
        * createSelect
        * 
        * @param id string
        * @param options array of object: [{value, text}]
        * @param classes array / string
        * @return
        */
        createSelect: (id, options, classes, initText) => {
            let s = $g.createElement("select", id, classes);
            let optsDisabled = $g.createElement("option");
            optsDisabled.disabled = "disabled";
            optsDisabled.selected = "selected";
            optsDisabled.innerText = initText || "Choose your option";
            s.appendChild(optsDisabled);
            for(let o of options) {
                let opts = $g.createElement("option", o.value);
                opts.value = o.value;
                opts.innerText = o.text;
                s.appendChild(opts);
            } 
            return s;
        }
    };
                
    const $m = {
        enable: () => materialEnable = true,
        createNavbar : (header, id, classes) => {
            $m.enable();
            const mClasses = "navbar-fixed";
            classes = _innerTool.appendClassesToExistClass(classes, mClasses);
            let outer = $g.createElement("div", id, "navbar-fixed");
            let nav = $g.createElement("nav", undefined, classes);
            let inner = $g.createElement("div", "navbar_inner", "nav-wrapper");
            let a = $g.createLink("#", header, "header_link", "brand-logo");
            inner.appendChild(a);
            nav.appendChild(inner);
            outer.appendChild(nav);
            return outer;
        },
        createBtn: (text, id, classes) => {
            $m.enable();
            const mClasses = "btn waves-effect waves-light";
            classes = _innerTool.appendClassesToExistClass(classes, mClasses);
            let b = $g.createBtn(text, id, classes);
            b.type = "submit";
            return b;
        }
    };

    const _innerTool = {
        appendClassesToElement: (e, classes) => {
            if(classes !== undefined) {
                if(Array.isArray(classes)) {
                    for(let c of classes) {
                        e.className += " " + c;
                    }               
                }
                else {
                    e.className += " " + classes;
                }               
            }
        },
        appendClassesToExistClass: (eClasses, nClasses) => {
            if(eClasses !== undefined) {
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
        getRandomId: (type) => type + "_" + Math.floor(Math.random()*100000)
    };

    $(document).ready(function() {
        if(materialEnable) {
            $('select').material_select();
        }
    });

    window.$g = $g;
    window.$m = $m;
})()