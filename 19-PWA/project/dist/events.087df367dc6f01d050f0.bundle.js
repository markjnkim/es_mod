(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events"],{

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (createEl = function(htmlString, attrs, ...children) {\n\tif (typeof htmlString !== \"string\") {\n\t\tthrow Error(\"Argument 'htmlString' is required and must be a string\");\n\t}\n\n\tconst el = document.createElement(htmlString);\n\n\tif (typeof attrs === \"object\") {\n\t\tfor (let key in attrs) {\n\t\t\tif (key.substring(0, 2) === \"on\") {\n\t\t\t\tel.addEventListener(key.substring(2).toLowerCase(), attrs[key]);\n\t\t\t} else if (key === \"style\") {\n\t\t\t\tfor (let rule in attrs[key]) {\n\t\t\t\t\tel.style[rule] = attrs[key][rule];\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tel.setAttribute(key, attrs[key]);\n\t\t\t}\n\t\t}\n\t}\n\n\tchildren.forEach(function(child) {\n\t\tlet node;\n\n\t\tif (child.constructor.name.includes(\"Element\")) {\n\t\t\tnode = child;\n\t\t} else {\n\t\t\tnode = document.createTextNode(child);\n\t\t}\n\n\t\tel.appendChild(node);\n\t});\n\n\treturn el;\n});\n\n// module.exports = createEl;\n\n//# sourceURL=webpack:///./assets/js/domMethods.js?");

/***/ }),

/***/ "./assets/js/events.js":
/*!*****************************!*\
  !*** ./assets/js/events.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./assets/js/helpers.js\");\n\n\n\n\n$(document).ready(function() {\n\n  if (window.location.href.indexOf(\"event\") > -1) {\n    const currentEvent = JSON.parse(localStorage.getItem(\"currentEvent\")) || {\n        title: \"Title Placeholder\",\n        subtitle: \"\",\n        description: \"\"\n    };\n\n    const pageEl = document.querySelector(\"#page\");\n    \n    const containerEl = Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {class: \"container\"},\n      Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {class: \"card mb-3\"}, \n        Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", {class: \"card-img-top\", style: \"width: 5px\", src: currentEvent.image || \"https://via.placeholder.com/350x150\"}),\n        Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {class: \"card-body\"}, \n          Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\", {class: \"card-title\"}, currentEvent.title || \"\"),\n          Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", {class: \"text-muted\"}, currentEvent.subtitle || \"\"),\n          Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {class: \"card-text mt-3\"}, currentEvent.description || Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"createLoremIpsum\"])(100)),\n          Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\", {class: \"btn btn-primary\", href: \"tickets.html\"}, \"Buy Tickets\")\n        )\n      ),\n      \n    )\n    pageEl.appendChild(containerEl)\n    }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/js/events.js?");

/***/ }),

/***/ "./assets/js/helpers.js":
/*!******************************!*\
  !*** ./assets/js/helpers.js ***!
  \******************************/
/*! exports provided: dateConverter, createLoremIpsum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateConverter\", function() { return dateConverter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLoremIpsum\", function() { return createLoremIpsum; });\nconst dateConverter = function(UNIX_timestamp) {\n  const a = new Date(UNIX_timestamp);\n  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];\n  const year = a.getFullYear();\n  const month = months[a.getMonth()];\n  const date = a.getDate();\n  const result =  month + ' ' + date + ', ' + year \n  return result;\n}\n\nconst createLoremIpsum = function(numWords = 50) {\n  const loremIpsum = \"Lorem ipsum dolor amet tousled brooklyn meditation, polaroid offal kale chips raw denim tumblr succulents jianbing listicle. Man braid godard VHS freegan bespoke fixie XOXO ramps lo-fi edison bulb prism gochujang photo booth. Messenger bag bicycle rights trust fund franzen street art mixtape helvetica, sriracha dreamcatcher live-edge microdosing. Whatever cliche neutra iceland chambray, beard narwhal pop-up health goth readymade palo santo forage live-edge 3 wolf moon echo park edison bulb, viral iceland bicycle rights post-ironic celiac typewriter kinfolk mumblecore tilde palo santo. Dreamcatcher cred cliche, keffiyeh intelligentsia forage vice locavore aesthetic yr. Vexillologist shabby chic fixie, air plant helvetica health goth kickstarter four loko jean shorts tote bag green juice street art beard farm-to-table. Enamel pin jianbing photo booth, YOLO pour-over bushwick next level fingerstache vice retro disrupt cloud bread. Gastropub umami distillery chia food truck adaptogen. Forage hexagon helvetica kogi squid. Crucifix health goth bespoke typewriter fam hexagon helvetica, vice dreamcatcher chillwave tumeric. Keffiyeh aesthetic XOXO venmo live-edge kale chips mlkshk wolf williamsburg hella yr locavore. Tumblr unicorn chillwave, edison bulb occupy offal sartorial gastropub kickstarter. Bitters swag chartreuse single-origin coffee PBR&B post-ironic migas activated charcoal before they sold out iPhone seitan lumbersexual tofu tumeric selvage. Shoreditch hashtag literally, af intelligentsia crucifix sustainable +1 chambray adaptogen. Crucifix retro fixie knausgaard. Photo booth asymmetrical seitan, pug marfa tattooed roof party tacos gochujang woke kale chips vice organic. Street art mumblecore trust fund, normcore single-origin coffee meggings neutra tacos fam. Woke chia asymmetrical try-hard cloud bread hexagon leggings kogi taiyaki. Seitan humblebrag tote bag keytar YOLO art party. Semiotics cliche schlitz shaman, waistcoat chartreuse activated charcoal XOXO post-ironic helvetica messenger bag air plant vape sartorial. Typewriter thundercats direct trade edison bulb lomo la croix trust fund. Tote bag tofu lo-fi blue bottle. Drinking vinegar lyft messenger bag, leggings tofu 90's bitters four loko mustache sriracha pabst shabby chic humblebrag glossier. Meh skateboard yuccie tattooed adaptogen gastropub post-ironic put a bird on it green juice la croix hot chicken ennui cray dreamcatcher neutra. Chia semiotics art party fixie shaman echo park palo santo flexitarian. Letterpress retro chillwave, williamsburg palo santo fashion axe raclette lumbersexual keytar yr plaid ugh. Godard everyday carry twee, roof party affogato williamsburg photo booth. Irony lumbersexual letterpress, trust fund raclette wayfarers art party. Flannel bushwick yr tattooed.\"\n  \n  const result = loremIpsum.split(/\\s+/).slice(0,numWords).join(\" \");\n  return result;\n\n}\n\n\n// module.exports = {\n//   dateConverter,\n//   createLoremIpsum\n// }\n\n//# sourceURL=webpack:///./assets/js/helpers.js?");

/***/ })

},[["./assets/js/events.js","manifest","vendor"]]]);