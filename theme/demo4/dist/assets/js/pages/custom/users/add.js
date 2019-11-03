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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/users/add.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/users/add.js":
/*!**************************************************!*\
  !*** ../src/assets/js/pages/custom/users/add.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\nvar KTUsersAdd = function () {\n    // Base elements\n    var wizardEl;\n    var formEl;\n    var validator;\n    var wizard;\n    var avatar;\n    \n    // Private functions\n    var initWizard = function () {\n        var avatar = new KTAvatar('kt_user_avatar');\n\n        // Initialize form wizard\n        wizard = new KTWizard('kt_wizard_v3', {\n            startStep: 1,\n        });\n\n        // Validation before going to next page\n        wizard.on('beforeNext', function(wizardObj) {\n            if (validator.form() !== true) {\n                wizardObj.stop();  // don't go to the next step\n            }\n        });\n\n        wizard.on('beforePrev', function(wizardObj) {\n\t\t\tif (validator.form() !== true) {\n\t\t\t\twizardObj.stop();  // don't go to the next step\n\t\t\t}\n\t\t});\n\n        // Change event\n        wizard.on('change', function(wizard) {\n            KTUtil.scrollTop();    \n        });\n    }\n\n    var initValidation = function() {\n        validator = formEl.validate({\n            // Validate only visible fields\n            ignore: \":hidden\",\n\n            // Validation rules\n            rules: {\n                //= Client Information(step 1)\n                username: {\n                    required: true \n                },\n                email: {\n                    required: true,\n                    email: true \n                },       \n                password: {\n                    required: true,\n                },     \n\n                //= Client Information(step 2)\n                // Profile Details\n                address1: {\n                    required: true,\n                },\n                address2: {\n                    required: true,\n                }, \n                // Mailing Address\n                city: {\n                    required: true,\n                }, \n                zip: {\n                    required: true,\n                }, \n                state: {\n                    required: true,\n                }, \n                country: {\n                    required: true,\n                }, \n\n                //= Client Information(step 3)\n                // Company Details\n                company_name: {\n                    required: true,\n                }, \n                company_id: {\n                    required: true,\n                }, \n                company_email: {\n                    required: true,\n                }, \n                company_tel: {\n                    required: true,\n                },               \n                'account_communication[]': {\n                    required: true\n                },\n\n                //= Client Information(step 4)\n                // Billing Information\n                billing_card_name: {\n                    required: true\n                },\n                billing_card_number: {\n                    required: true,\n                    creditcard: true\n                },\n                billing_card_exp_month: {\n                    required: true\n                },\n                billing_card_exp_year: {\n                    required: true\n                },\n                billing_card_cvv: {\n                    required: true,\n                    minlength: 2,\n                    maxlength: 3\n                },\n\n                //= Confirmation(step 5)\n                accept: {\n                    required: true\n                }\n            },\n\n            // Validation messages\n            messages: {\n                'account_communication[]': {\n                    required: 'You must select at least one communication option'\n                },\n                accept: {\n                    required: \"You must accept the Terms and Conditions agreement!\"\n                } \n            },\n            \n            // Display error  \n            invalidHandler: function(event, validator) {     \n                KTUtil.scrollTop();\n\n                swal.fire({\n                    \"title\": \"\", \n                    \"text\": \"There are some errors in your submission. Please correct them.\", \n                    \"type\": \"error\",\n                    \"confirmButtonClass\": \"btn btn-secondary m-btn m-btn--wide\"\n                });\n            },\n\n            // Submit valid form\n            submitHandler: function (form) {\n                \n            }\n        });   \n    }\n\n    var initSubmit = function() {\n        var btn = formEl.find('[data-ktwizard-action=\"action-submit\"]');\n\n        btn.on('click', function(e) {\n            e.preventDefault();\n\n            if (validator.form()) {\n                // See: src\\js\\framework\\base\\app.js\n                KTApp.progress(btn);\n                //KTApp.block(formEl);\n\n                // See: http://malsup.com/jquery/form/#ajaxSubmit\n                formEl.ajaxSubmit({\n                    success: function() {\n                        KTApp.unprogress(btn);\n                        //KTApp.unblock(formEl);\n\n                        swal.fire({\n                            \"title\": \"\", \n                            \"text\": \"The application has been successfully submitted!\", \n                            \"type\": \"success\",\n                            \"confirmButtonClass\": \"btn btn-secondary\"\n                        });\n                    }\n                });\n            }\n        });\n    }\n\n    return {\n        // public functions\n        init: function() {\n            wizardEl = KTUtil.get('kt_wizard_v3');\n            formEl = $('#kt_form');\n\n            initWizard(); \n            initValidation();\n            initSubmit();\n        }\n    };\n}();\n\njQuery(document).ready(function() {    \n    KTUsersAdd.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/users/add.js?");

/***/ })

/******/ });