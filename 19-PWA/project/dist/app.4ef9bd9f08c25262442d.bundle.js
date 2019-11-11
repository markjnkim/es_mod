(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/img/food-table.jpg":
/*!***********************************!*\
  !*** ./assets/img/food-table.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"dist/images/food-table.jpg\";\n\n//# sourceURL=webpack:///./assets/img/food-table.jpg?");

/***/ }),

/***/ "./assets/img/grill.jpg":
/*!******************************!*\
  !*** ./assets/img/grill.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"dist/images/grill.jpg\";\n\n//# sourceURL=webpack:///./assets/img/grill.jpg?");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/carousel */ \"./node_modules/bootstrap/js/dist/carousel.js\");\n/* harmony import */ var bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_food_table_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/food-table.jpg */ \"./assets/img/food-table.jpg\");\n/* harmony import */ var _img_food_table_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_food_table_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_grill_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/grill.jpg */ \"./assets/img/grill.jpg\");\n/* harmony import */ var _img_grill_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_grill_jpg__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n$(document).ready(function() {\n\n  // First image is hard coded in index.html\n  const carouselSlides = [\n    {\n      title: \"We travel all over the US\",\n      subtitle: \"Check out our schedule!\",\n      img: _img_food_table_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,\n      btnText: \"View Schedule\",\n      btnUrl: \"schedule.html\"\n    },\n    {\n      title: \"Our food is seriously the bomb!\",\n      subtitle: \"What are you waiting for?\",\n      img: _img_grill_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,\n      btnText: \"Purchase Tickets\",\n      btnUrl: \"tickets.html\"\n    },\n  ]\n\n  carouselSlides.forEach((slide, i) => {\n    $('.carousel-inner').append(`\n  <div class=\"carousel-item fullscreen-carousel\" style=\"background-image: url('${slide.img}')\">\n    <div class=\"d-flex h-100 align-items-center justify-content-center carousel-caption\">\n        <div class=\"container\">\n          <div class=\"row align-items-center justify-content-center\">\n              <h2 class=\"display-4 mb-2\">${slide.title}</h2>\n          </div>\n          <div class=\"row align-items-center justify-content-center\"> \n            <h3>${slide.subtitle}</h3>\n          </div>\n          <div class=\" mt-4 row align-items-center justify-content-center\"> \n            <a class=\"btn btn-primary\" href=\"${slide.btnUrl}\">\n                ${slide.btnText}\n            </a>\n          </div>\n        </div>\n    </div>\n  </div>`)\n  })\n\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/js/script.js?");

/***/ })

},[["./assets/js/script.js","manifest","vendor"]]]);