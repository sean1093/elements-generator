# elements-generator
A small tool for creating HTML elements by JavaScript. Also support create materialize style elements.

* materialize
http://materializecss.com/


## Getting Started

When you want to use element generator extension, you need to include following JavaScript file. Besides, using materialize style element generator extension need to include relative files.

```html

<!-- for element generator extension -->
<script src="http://sean1093.github.io/lib/js/HTMLElementsGenerator/1.0.0/HTMLElementsGenerator.min.js"></script>

<!-- if you want to use materialize component -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css"> 
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.2/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
 
```



## Create general HTML DOM elements

* createElement

```js
/**
 * createElement
 *
 * @param {string} type, html tag type, ex: div, img, span ...
 * @param {string} id, your id
 * @param {array/string} classes, element's class, can be array of string or string
 * @return HTML dom element
 */
var element = $g.createElement(type, id, classes);

//ex:
var div = $g.createElement("div");
var div2 = $g.createElement("div", "id", ["a", "tag"]);

```


* createBtn

```js
/**
 * createBtn
 *
 * @param {string} text, button text
 * @param {string} id, your id
 * @param {array/string} classes, element's class, can be array of string or string
 * @return HTML dom button
 */
var btn = $g.createBtn(text, id, classes);

//ex:
var btn = $g.createBtn("Click me!");

```


* createInput

```js
/**
 * createInput
 *
 * @param {string} type, input type, ex: input, email ...
 * @param {string} defaultText, default input placeholder
 * @param {string} id, your id
 * @param {array/string} classes, element's class, can be array of string or string
 * @return HTML dom input
 */
var input = $g.createInput(type, defaultText, id, classes);

//ex:
var input = $g.createInput("input", "please input text");

```


* createLink

```js
/**
 * createLink
 *
 * @param {string} href, location
 * @param {string} text, text to show
 * @param {string} id, your id
 * @param {array/string} classes, element's class, can be array of string or string
 * @return HTML dom a
 */
var a = $g.createLink(href, text, id, classes);

//ex:
var a = $g.createLink("#", "header", "header_link", "brand-logo");

```


* createSelect

```js
/**
 * createSelect
 *
 * @param {string} id, your id
 * @param {[{value, text},...]} options, array of object 
 * @param {array/string} classes, element's class, can be array of string or string
 * @param {string} initText, init text
 * @return HTML dom select
 */
var select = $g.createSelect(id, options, classes, initText);

//ex:
var select = $g.createSelect("select", 
        [
            {"value": "select1", "text": "this is 1"},
            {"value": "select2", "text": "this is 2"},
            {"value": "select3", "text": "this is 3"}
        ], 
        "id", "please select");

```



## Create materialize HTML DOM elements

* createNavbar

```js
/**
 * createNavbar
 *
 * @param {string} header, text to show
 * @param {string} id, your id
 * @param {array/string} classes, element's class, can be array of string or string
 * @return HTML dom element
 */
var nav = $m.createNavbar(header, id, classes);

//ex:
var nav = $m.createNavbar("LOGO", "nav", "blue");

```


* createBtn

```js
/**
 * createBtn
 *
 * @param {string} text, button text
 * @param {string} id, your id
 * @param {array/string} classes, element's class, can be array of string or string
 * @return HTML dom button
 */
var btn = $m.createBtn(text, id, classes);

//ex:
var btn = $m.createBtn("Click me!");

```


* createSideNav

```js
/**
 * createSideNav
 *
 * @param {string} id, your id
 * @param {array/string} classes, element's class, can be array of string or string
 * @param {array} objects, array of HTML dom element
 * @return HTML dom element
 */
var side = $m.createSideNav(id, classes, objects);

//ex:
var side = $m.createSideNav("side");

```


* openSideNavBtn

```js
/**
 * openSideNavBtn
 *
 * @param {string} text, button text
 * @param {string} sideNavId, your sideNav's id
 * @param {string} id, your id
 * @param {array/string} classes, element's class, can be array of string or string
 * @return HTML dom element
 */
var openSide = $m.openSideNavBtn(text, sideNavId, id, classes);

//ex:
var openSide = $m.openSideNavBtn("Open Side", "side");

```



#### 1.0.0
* Create


