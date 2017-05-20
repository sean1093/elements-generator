/**
 * HTMLElementsGenerator.js
 *
 * @version: v1.0.0
 * @author: Sean Chou
 * @licensed: under MIT (https://github.com/sean1093/elements-generator/blob/master/LICENSE)
 */
(function () {
    "use strict";

    const $g = {
        createElement: (type, id = type+"_"+_innerTool.getRandomId(), classes) => {
            if(!type) return null;
            let e = document.createElement(type);
            e.id = id;
            _innerTool.appendClasses(e, classes);
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
        createSelect: (id, options, classes) => {
            let s = $g.createElement("select", id, classes);
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
        createNavbar : (header) => {
            let outer = $g.createElement("div", "navbar_outer", "navbar-fixed");
            let nav = $g.createElement("nav");
            let inner = $g.createElement("div", "navbar_inner", "nav-wrapper");
            let a = $g.createLink("#", header, "header_link", "brand-logo");
            inner.appendChild(a);
            nav.appendChild(inner);
            outer.appendChild(nav);
            return outer;
        }
    };

    const _innerTool = {
        appendClasses: (e, classes) => {
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
        getRandomId: () => Math.floor(Math.random()*100000)
    };

    window.$g = $g;
    window.$m = $m;
})()