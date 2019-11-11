(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tickets"],{

/***/ "./assets/js/tickets.js":
/*!******************************!*\
  !*** ./assets/js/tickets.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/modal */ \"./node_modules/bootstrap/js/dist/modal.js\");\n/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\n\n\n\n\n$(document).ready(function() {\n  const purchaseBtn = document.getElementById(\"purchaseBtn\");\n  const purchaseEmail = document.getElementById(\"purchaseEmail\");\n  const modalEl = document.querySelector(\".modal-content\");\n  const modalBodyEl = document.querySelector(\".modal-body\");\n  const modalFooterEl = document.querySelector(\".modal-footer\");\n\n\n  function purchaseTicket () {\n\n    modalEl.removeChild(modalBodyEl)\n    modalEl.removeChild(modalFooterEl)\n\n    modalEl.append(Object(_domMethods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", {class: \"modal-body\"},\n      Object(_domMethods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h5\", {class: \"modal-title\"}, \n      `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`\n      ),\n    ))\n    \n  }\n  purchaseBtn.addEventListener(\"click\", purchaseTicket);\n\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/js/tickets.js?");

/***/ })

},[["./assets/js/tickets.js","manifest","commons~dom~events~schedule~tickets","commons~app~events~schedule~tickets","commons~app~tickets","vendor"]]]);