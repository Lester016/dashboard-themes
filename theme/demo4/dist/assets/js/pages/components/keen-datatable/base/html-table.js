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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/keen-datatable/base/html-table.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/keen-datatable/base/html-table.js":
/*!***************************************************************************!*\
  !*** ../src/assets/js/pages/components/keen-datatable/base/html-table.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Class definition\n\nvar KTDatatableHtmlTableDemo = function() {\n    // Private functions\n\n    // demo initializer\n    var demo = function() {\n\n        var datatable = $('.kt-datatable').KTDatatable({\n            data: {\n                saveState: {\n                    cookie: false\n                },\n            },\n            layout: {\n                scroll: true,\n                height: 550,\n                footer: false\n            },\n            search: {\n                input: $('#generalSearch'),\n            },\n            columns: [\n                {\n                    field: 'DepositPaid',\n                    type: 'number',\n                },\n                {\n                    field: 'OrderDate',\n                    type: 'date',\n                    format: 'YYYY-MM-DD',\n                }, {\n                    field: 'Status',\n                    title: 'Status',\n                    autoHide: false,\n                    // callback function support for column rendering\n                    template: function(row) {\n                        var status = {\n                            1: {\n                                'title': 'Pending',\n                                'class': 'kt-badge--brand'\n                            },\n                            2: {\n                                'title': 'Delivered',\n                                'class': ' kt-badge--metal'\n                            },\n                            3: {\n                                'title': 'Canceled',\n                                'class': ' kt-badge--primary'\n                            },\n                            4: {\n                                'title': 'Success',\n                                'class': ' kt-badge--success'\n                            },\n                            5: {\n                                'title': 'Info',\n                                'class': ' kt-badge--info'\n                            },\n                            6: {\n                                'title': 'Danger',\n                                'class': ' kt-badge--danger'\n                            },\n                            7: {\n                                'title': 'Warning',\n                                'class': ' kt-badge--warning'\n                            },\n                        };\n                        return '<span class=\"kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill\">' + status[row.Status].title + '</span>';\n                    },\n                }, {\n                    field: 'Type',\n                    title: 'Type',\n                    autoHide: false,\n                    // callback function support for column rendering\n                    template: function(row) {\n                        var status = {\n                            1: {\n                                'title': 'Online',\n                                'state': 'danger'\n                            },\n                            2: {\n                                'title': 'Retail',\n                                'state': 'primary'\n                            },\n                            3: {\n                                'title': 'Direct',\n                                'state': 'accent'\n                            },\n                        };\n                        return '<span class=\"kt-badge kt-badge--' + status[row.Type].state + ' kt-badge--dot\"></span>&nbsp;<span class=\"kt-font-bold kt-font-' + status[row.Type].state + '\">' + status[row.Type].title + '</span>';\n                    },\n                },\n            ],\n        });\n\n        $('#kt_form_status').on('change', function() {\n            datatable.search($(this).val().toLowerCase(), 'Status');\n        });\n\n        $('#kt_form_type').on('change', function() {\n            datatable.search($(this).val().toLowerCase(), 'Type');\n        });\n\n        $('#kt_form_status,#kt_form_type').selectpicker();\n    };\n\n    return {\n        // Public functions\n        init: function() {\n            // init dmeo\n            demo();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTDatatableHtmlTableDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/keen-datatable/base/html-table.js?");

/***/ })

/******/ });