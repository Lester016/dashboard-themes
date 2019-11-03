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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/keen-datatable/child/data-ajax.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/keen-datatable/child/data-ajax.js":
/*!***************************************************************************!*\
  !*** ../src/assets/js/pages/components/keen-datatable/child/data-ajax.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Class definition\n\nvar KTDatatableChildRemoteDataDemo = function () {\n    // Private functions\n\n    // demo initializer\n    var demo = function () {\n\n        var datatable = $('.kt_datatable').KTDatatable({\n            // datasource definition\n            data: {\n                type: 'remote',\n                source: {\n                    read: {\n                        url: 'https://keenthemes.com/keen/tools/preview/inc/api/datatables/demos/customers.php',\n                    },\n                },\n                pageSize: 10, // display 20 records per page\n                serverPaging: true,\n                serverFiltering: false,\n                serverSorting: true,\n            },\n\n            // layout definition\n            layout: {\n                theme: 'default',\n                scroll: false,\n                height: null,\n                footer: false,\n            },\n\n            // column sorting\n            sortable: true,\n\n            pagination: true,\n\n            detail: {\n                title: 'Load sub table',\n                content: subTableInit,\n            },\n\n            search: {\n                input: $('#generalSearch'),\n            },\n\n            // columns definition\n            columns: [\n                {\n                    field: 'RecordID',\n                    title: '',\n                    sortable: false,\n                    width: 30,\n                    textAlign: 'center',\n                }, {\n                    field: 'checkbox',\n                    title: '',\n                    template: '{{RecordID}}',\n                    sortable: false,\n                    width: 20,\n                    textAlign: 'center',\n                    selector: {class: 'kt-checkbox--solid'},\n                }, {\n                    field: 'FirstName',\n                    title: 'First Name',\n                    sortable: 'asc',\n                }, {\n                    field: 'LastName',\n                    title: 'Last Name',\n                }, {\n                    field: 'Company',\n                    title: 'Company',\n                }, {\n                    field: 'Email',\n                    title: 'Email',\n                }, {\n                    field: 'Phone',\n                    title: 'Phone',\n                }, {\n                    field: 'Status',\n                    title: 'Status',\n                    // callback function support for column rendering\n                    template: function (row) {\n                        var status = {\n                            1: {'title': 'Pending', 'class': 'kt-badge--brand'},\n                            2: {'title': 'Delivered', 'class': ' kt-badge--metal'},\n                            3: {'title': 'Canceled', 'class': ' kt-badge--primary'},\n                            4: {'title': 'Success', 'class': ' kt-badge--success'},\n                            5: {'title': 'Info', 'class': ' kt-badge--info'},\n                            6: {'title': 'Danger', 'class': ' kt-badge--danger'},\n                            7: {'title': 'Warning', 'class': ' kt-badge--warning'},\n                        };\n                        return '<span class=\"kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill\">' + status[row.Status].title + '</span>';\n                    },\n                }, {\n                    field: 'Type',\n                    title: 'Type',\n                    autoHide: false,\n                    // callback function support for column rendering\n                    template: function (row) {\n                        var status = {\n                            1: {'title': 'Online', 'state': 'danger'},\n                            2: {'title': 'Retail', 'state': 'primary'},\n                            3: {'title': 'Direct', 'state': 'accent'},\n                        };\n                        return '<span class=\"kt-badge kt-badge--' + status[row.Type].state + ' kt-badge--dot\"></span>&nbsp;<span class=\"kt-font-bold kt-font-' + status[row.Type].state +\n                            '\">' +\n                            status[row.Type].title + '</span>';\n                    },\n                }, {\n                    field: 'Actions',\n                    width: 110,\n                    title: 'Actions',\n                    sortable: false,\n                    overflow: 'visible',\n                    autoHide: false,\n                    template: function () {\n                        return '\\\n\t\t                  <div class=\"dropdown\">\\\n\t\t                      <a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" data-toggle=\"dropdown\">\\\n\t\t                          <i class=\"la la-ellipsis-h\"></i>\\\n\t\t                      </a>\\\n\t\t                      <div class=\"dropdown-menu dropdown-menu-right\">\\\n\t\t                          <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a>\\\n\t\t                          <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a>\\\n\t\t                          <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-print\"></i> Generate Report</a>\\\n\t\t                      </div>\\\n\t\t                  </div>\\\n\t\t                  <a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" title=\"Edit details\">\\\n\t\t                      <i class=\"la la-edit\"></i>\\\n\t\t                  </a>\\\n\t\t                  <a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" title=\"Delete\">\\\n\t\t                      <i class=\"la la-trash\"></i>\\\n\t\t                  </a>\\\n\t\t              ';\n                    },\n                }],\n        });\n\n        $('#kt_form_status').on('change', function () {\n            datatable.search($(this).val().toLowerCase(), 'status');\n        });\n\n        $('#kt_form_type').on('change', function () {\n            datatable.search($(this).val().toLowerCase(), 'type');\n        });\n\n        $('#kt_form_status,#kt_form_type').selectpicker();\n\n        function subTableInit(e) {\n            $('<div/>').attr('id', 'child_data_ajax_' + e.data.RecordID).appendTo(e.detailCell).KTDatatable({\n                data: {\n                    type: 'remote',\n                    source: {\n                        read: {\n                            url: 'https://keenthemes.com/keen/tools/preview/inc/api/datatables/demos/orders.php',\n                            headers: {'x-my-custom-header': 'some value', 'x-test-header': 'the value'},\n                            params: {\n                                // custom query params\n                                query: {\n                                    generalSearch: '',\n                                    CustomerID: e.data.RecordID,\n                                },\n                            },\n                        },\n                    },\n                    pageSize: 10,\n                    serverPaging: true,\n                    serverFiltering: false,\n                    serverSorting: true,\n                },\n\n                // layout definition\n                layout: {\n                    theme: 'default',\n                    scroll: true,\n                    height: 300,\n                    footer: false,\n\n                    // enable/disable datatable spinner.\n                    spinner: {\n                        type: 1,\n                        theme: 'default',\n                    },\n                },\n\n                sortable: true,\n\n                // columns definition\n                columns: [\n                    {\n                        field: 'RecordID',\n                        title: '#',\n                        sortable: false,\n                        width: 30,\n                    }, {\n                        field: 'OrderID',\n                        title: 'Order ID',\n                        template: function (row) {\n                            return '<span>' + row.OrderID + ' - ' + row.ShipCountry + '</span>';\n                        },\n                    }, {\n                        field: 'ShipCountry',\n                        title: 'Country',\n                        width: 100,\n                    }, {\n                        field: 'ShipAddress',\n                        title: 'Ship Address',\n                    }, {\n                        field: 'ShipName',\n                        title: 'Ship Name',\n                    }, {\n                        field: 'TotalPayment',\n                        title: 'Payment',\n                        type: 'number',\n                    }, {\n                        field: 'Status',\n                        title: 'Status',\n                        // callback function support for column rendering\n                        template: function (row) {\n                            var status = {\n                                1: {'title': 'Pending', 'class': 'kt-badge--brand'},\n                                2: {'title': 'Delivered', 'class': ' kt-badge--metal'},\n                                3: {'title': 'Canceled', 'class': ' kt-badge--primary'},\n                                4: {'title': 'Success', 'class': ' kt-badge--success'},\n                                5: {'title': 'Info', 'class': ' kt-badge--info'},\n                                6: {'title': 'Danger', 'class': ' kt-badge--danger'},\n                                7: {'title': 'Warning', 'class': ' kt-badge--warning'},\n                            };\n                            return '<span class=\"kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill\">' + status[row.Status].title + '</span>';\n                        },\n                    }, {\n                        field: 'Type',\n                        title: 'Type',\n                        autoHide: false,\n                        // callback function support for column rendering\n                        template: function (row) {\n                            var status = {\n                                1: {'title': 'Online', 'state': 'danger'},\n                                2: {'title': 'Retail', 'state': 'primary'},\n                                3: {'title': 'Direct', 'state': 'accent'},\n                            };\n                            return '<span class=\"kt-badge kt-badge--' + status[row.Type].state + ' kt-badge--dot\"></span>&nbsp;<span class=\"kt-font-bold kt-font-' +\n                                status[row.Type].state + '\">' +\n                                status[row.Type].title + '</span>';\n                        },\n                    }\n                ],\n            });\n        }\n    };\n\n    return {\n        // Public functions\n        init: function () {\n            // init dmeo\n            demo();\n        },\n    };\n}();\n\njQuery(document).ready(function () {\n    KTDatatableChildRemoteDataDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/keen-datatable/child/data-ajax.js?");

/***/ })

/******/ });