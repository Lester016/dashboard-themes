/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/base/toasts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/base/toasts.js":
/*!********************************************************!*\
  !*** ../src/assets/js/pages/components/base/toasts.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n//\n// Bootstrap Toasts Demos\n//\n\n\n\n\nvar KTBootstrapToastsDemo = function () {    \n    //Private functions\n\n    // Demo 1\n    var demo1 = function () {\n        // Move element and append to body\n        $('#kt_toast_1').appendTo($('body'));\n\n        // Init toast\n        $('#kt_toast_1').toast({\n            delay: 4000\n        });\n\n        // Handle toggle\n\t\t$('#kt_toast_toggle_1').click(function() {\n            $('#kt_toast_1').toast('show');\n        });\n    }\n\n    // Demo 2\n    var demo2 = function () {\n\t\t// Move element and append to body\n        $('#kt_toast_2').appendTo($('body'));\n\n        // Init toast\n        $('#kt_toast_2').toast({\n            delay: 4000\n        });\n\n        // Handle toggle\n\t\t$('#kt_toast_toggle_2').click(function() {\n            $('#kt_toast_2').toast('show');\n        });\n    }\n\n    // Demo 3\n    var demo3 = function () {\n\t\t// Move element and append to body\n        $('#kt_toast_3').appendTo($('body'));\n\n        // Init toast\n        $('#kt_toast_3').toast({\n            delay: 14000\n        });\n\n        // Handle toggle\n\t\t$('#kt_toast_toggle_3').click(function() {\n            $('#kt_toast_3').toast('show');\n        });\n    }\n\n    // Demo 4\n    var demo4 = function () {\n\t\t// Move element and append to body\n        $('#kt_toast_4').appendTo($('body'));\n\n        // Init toast\n        $('#kt_toast_4').toast({\n            delay: 4000\n        });\n\n        // Handle toggle\n\t\t$('#kt_toast_toggle_4').click(function() {\n            $('#kt_toast_4').toast('show');\n        });\n    }\n\n    // Demo 5\n    var demo5 = function () {\n\t\t// Move element and append to body\n        $('#kt_toast_5').appendTo($('body'));\n\n        // Init toast\n        $('#kt_toast_5').toast({\n            delay: 4000\n        });\n\n        // Handle toggle\n\t\t$('#kt_toast_toggle_5').click(function() {\n            $('#kt_toast_5').toast('show');\n        });\n    }\n\n    // Demo 6\n    var demo6 = function () {\n\t\t// Move element and append to body\n        $('#kt_toast_6').appendTo($('body'));\n\n        // Init toast\n        $('#kt_toast_6').toast({\n            delay: 4000\n        });\n\n        // Handle toggle\n\t\t$('#kt_toast_toggle_6').click(function() {\n            $('#kt_toast_6').toast('show');\n        });\n    }\n\n    return {\n        // Public functions\n        init: function() {\n            demo1();\n            demo2();\n            demo3();\n            demo4();\n            demo5();\n            demo6();\n        }\n    };\n}();\n\njQuery(document).ready(function() {    \n    KTBootstrapToastsDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/base/toasts.js?");

/***/ })

/******/ });