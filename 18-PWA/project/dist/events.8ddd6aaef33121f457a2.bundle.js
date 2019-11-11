(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events"],{

/***/ "./assets/js/events.js":
/*!*****************************!*\
  !*** ./assets/js/events.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./assets/js/helpers.js\");\n\n\n\n\n$(document).ready(function() {\n\n  if (window.location.href.indexOf(\"event\") > -1) {\n    const currentEvent = JSON.parse(localStorage.getItem(\"currentEvent\")) || {\n        title: \"Title Placeholder\",\n        subtitle: \"\",\n        description: \"\"\n    };\n\n    const pageEl = document.querySelector(\"#page\");\n    \n    const containerEl = Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {class: \"container\"},\n      Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {class: \"card mb-3\"}, \n        Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", {class: \"card-img-top\", style: \"width: 5px\", src: currentEvent.image || \"https://via.placeholder.com/350x150\"}),\n        Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {class: \"card-body\"}, \n          Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\", {class: \"card-title\"}, currentEvent.title || \"\"),\n          Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", {class: \"text-muted\"}, currentEvent.subtitle || \"\"),\n          Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {class: \"card-text mt-3\"}, currentEvent.description || Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"createLoremIpsum\"])(100)),\n          Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\", {class: \"btn btn-primary\", href: \"tickets.html\"}, \"Buy Tickets\")\n        )\n      ),\n      \n    )\n    pageEl.appendChild(containerEl)\n    }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/js/events.js?");

/***/ })

},[["./assets/js/events.js","manifest","commons~dom~events~schedule~tickets","commons~app~events~schedule~tickets","commons~events~schedule"]]]);