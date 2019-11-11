(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tickets"],{

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (createEl = function(htmlString, attrs, ...children) {\n\tif (typeof htmlString !== \"string\") {\n\t\tthrow Error(\"Argument 'htmlString' is required and must be a string\");\n\t}\n\n\tconst el = document.createElement(htmlString);\n\n\tif (typeof attrs === \"object\") {\n\t\tfor (let key in attrs) {\n\t\t\tif (key.substring(0, 2) === \"on\") {\n\t\t\t\tel.addEventListener(key.substring(2).toLowerCase(), attrs[key]);\n\t\t\t} else if (key === \"style\") {\n\t\t\t\tfor (let rule in attrs[key]) {\n\t\t\t\t\tel.style[rule] = attrs[key][rule];\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tel.setAttribute(key, attrs[key]);\n\t\t\t}\n\t\t}\n\t}\n\n\tchildren.forEach(function(child) {\n\t\tlet node;\n\n\t\tif (child.constructor.name.includes(\"Element\")) {\n\t\t\tnode = child;\n\t\t} else {\n\t\t\tnode = document.createTextNode(child);\n\t\t}\n\n\t\tel.appendChild(node);\n\t});\n\n\treturn el;\n});\n\n// module.exports = createEl;\n\n//# sourceURL=webpack:///./assets/js/domMethods.js?");

/***/ }),

/***/ "./assets/js/tickets.js":
/*!******************************!*\
  !*** ./assets/js/tickets.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/modal */ \"./node_modules/bootstrap/js/dist/modal.js\");\n/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\n\n\n\n\n$(document).ready(function() {\n  const purchaseBtn = document.getElementById(\"purchaseBtn\");\n  const purchaseEmail = document.getElementById(\"purchaseEmail\");\n  const modalEl = document.querySelector(\".modal-content\");\n  const modalBodyEl = document.querySelector(\".modal-body\");\n  const modalFooterEl = document.querySelector(\".modal-footer\");\n\n\n  function purchaseTicket () {\n\n    modalEl.removeChild(modalBodyEl)\n    modalEl.removeChild(modalFooterEl)\n\n    modalEl.append(Object(_domMethods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", {class: \"modal-body\"},\n      Object(_domMethods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h5\", {class: \"modal-title\"}, \n      `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`\n      ),\n    ))\n    \n  }\n  purchaseBtn.addEventListener(\"click\", purchaseTicket);\n\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/js/tickets.js?");

/***/ })

},[["./assets/js/tickets.js","manifest","vendor"]]]);