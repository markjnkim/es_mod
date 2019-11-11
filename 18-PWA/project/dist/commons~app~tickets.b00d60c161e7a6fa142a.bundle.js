(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commons~app~tickets"],{

/***/ "./node_modules/bootstrap/js/dist/util.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*!\n  * Bootstrap util.js v4.3.1 (https://getbootstrap.com/)\n  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)\n  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n  */\n(function (global, factory) {\n   true ? module.exports = factory(__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")) :\n  undefined;\n}(this, function ($) { 'use strict';\n\n  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v4.3.1): util.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * ------------------------------------------------------------------------\n   * Private TransitionEnd Helpers\n   * ------------------------------------------------------------------------\n   */\n\n  var TRANSITION_END = 'transitionend';\n  var MAX_UID = 1000000;\n  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)\n\n  function toType(obj) {\n    return {}.toString.call(obj).match(/\\s([a-z]+)/i)[1].toLowerCase();\n  }\n\n  function getSpecialTransitionEndEvent() {\n    return {\n      bindType: TRANSITION_END,\n      delegateType: TRANSITION_END,\n      handle: function handle(event) {\n        if ($(event.target).is(this)) {\n          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params\n        }\n\n        return undefined; // eslint-disable-line no-undefined\n      }\n    };\n  }\n\n  function transitionEndEmulator(duration) {\n    var _this = this;\n\n    var called = false;\n    $(this).one(Util.TRANSITION_END, function () {\n      called = true;\n    });\n    setTimeout(function () {\n      if (!called) {\n        Util.triggerTransitionEnd(_this);\n      }\n    }, duration);\n    return this;\n  }\n\n  function setTransitionEndSupport() {\n    $.fn.emulateTransitionEnd = transitionEndEmulator;\n    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();\n  }\n  /**\n   * --------------------------------------------------------------------------\n   * Public Util Api\n   * --------------------------------------------------------------------------\n   */\n\n\n  var Util = {\n    TRANSITION_END: 'bsTransitionEnd',\n    getUID: function getUID(prefix) {\n      do {\n        // eslint-disable-next-line no-bitwise\n        prefix += ~~(Math.random() * MAX_UID); // \"~~\" acts like a faster Math.floor() here\n      } while (document.getElementById(prefix));\n\n      return prefix;\n    },\n    getSelectorFromElement: function getSelectorFromElement(element) {\n      var selector = element.getAttribute('data-target');\n\n      if (!selector || selector === '#') {\n        var hrefAttr = element.getAttribute('href');\n        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';\n      }\n\n      try {\n        return document.querySelector(selector) ? selector : null;\n      } catch (err) {\n        return null;\n      }\n    },\n    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {\n      if (!element) {\n        return 0;\n      } // Get transition-duration of the element\n\n\n      var transitionDuration = $(element).css('transition-duration');\n      var transitionDelay = $(element).css('transition-delay');\n      var floatTransitionDuration = parseFloat(transitionDuration);\n      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found\n\n      if (!floatTransitionDuration && !floatTransitionDelay) {\n        return 0;\n      } // If multiple durations are defined, take the first\n\n\n      transitionDuration = transitionDuration.split(',')[0];\n      transitionDelay = transitionDelay.split(',')[0];\n      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;\n    },\n    reflow: function reflow(element) {\n      return element.offsetHeight;\n    },\n    triggerTransitionEnd: function triggerTransitionEnd(element) {\n      $(element).trigger(TRANSITION_END);\n    },\n    // TODO: Remove in v5\n    supportsTransitionEnd: function supportsTransitionEnd() {\n      return Boolean(TRANSITION_END);\n    },\n    isElement: function isElement(obj) {\n      return (obj[0] || obj).nodeType;\n    },\n    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {\n      for (var property in configTypes) {\n        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {\n          var expectedTypes = configTypes[property];\n          var value = config[property];\n          var valueType = value && Util.isElement(value) ? 'element' : toType(value);\n\n          if (!new RegExp(expectedTypes).test(valueType)) {\n            throw new Error(componentName.toUpperCase() + \": \" + (\"Option \\\"\" + property + \"\\\" provided type \\\"\" + valueType + \"\\\" \") + (\"but expected type \\\"\" + expectedTypes + \"\\\".\"));\n          }\n        }\n      }\n    },\n    findShadowRoot: function findShadowRoot(element) {\n      if (!document.documentElement.attachShadow) {\n        return null;\n      } // Can find the shadow root otherwise it'll return the document\n\n\n      if (typeof element.getRootNode === 'function') {\n        var root = element.getRootNode();\n        return root instanceof ShadowRoot ? root : null;\n      }\n\n      if (element instanceof ShadowRoot) {\n        return element;\n      } // when we don't find a shadow root\n\n\n      if (!element.parentNode) {\n        return null;\n      }\n\n      return Util.findShadowRoot(element.parentNode);\n    }\n  };\n  setTransitionEndSupport();\n\n  return Util;\n\n}));\n//# sourceMappingURL=util.js.map\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap/js/dist/util.js?");

/***/ })

}]);