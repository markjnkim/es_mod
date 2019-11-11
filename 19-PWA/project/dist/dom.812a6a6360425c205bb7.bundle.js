(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dom"],{

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (createEl = function(htmlString, attrs, ...children) {\n\tif (typeof htmlString !== \"string\") {\n\t\tthrow Error(\"Argument 'htmlString' is required and must be a string\");\n\t}\n\n\tconst el = document.createElement(htmlString);\n\n\tif (typeof attrs === \"object\") {\n\t\tfor (let key in attrs) {\n\t\t\tif (key.substring(0, 2) === \"on\") {\n\t\t\t\tel.addEventListener(key.substring(2).toLowerCase(), attrs[key]);\n\t\t\t} else if (key === \"style\") {\n\t\t\t\tfor (let rule in attrs[key]) {\n\t\t\t\t\tel.style[rule] = attrs[key][rule];\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tel.setAttribute(key, attrs[key]);\n\t\t\t}\n\t\t}\n\t}\n\n\tchildren.forEach(function(child) {\n\t\tlet node;\n\n\t\tif (child.constructor.name.includes(\"Element\")) {\n\t\t\tnode = child;\n\t\t} else {\n\t\t\tnode = document.createTextNode(child);\n\t\t}\n\n\t\tel.appendChild(node);\n\t});\n\n\treturn el;\n});\n\n// module.exports = createEl;\n\n//# sourceURL=webpack:///./assets/js/domMethods.js?");

/***/ })

},[["./assets/js/domMethods.js","manifest"]]]);