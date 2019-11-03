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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/charts/chart-js.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/charts/chart-js.js":
/*!************************************************************!*\
  !*** ../src/assets/js/pages/components/charts/chart-js.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Class definition\nvar KTChartJSDemo = function() {\n\n\tvar demo1 = function() {\n\t\tvar barChartData = {\n\t\t\tlabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n\t\t\tdatasets: [{\n\t\t\t\tlabel: 'Dataset 1',\n\t\t\t\tbackgroundColor: '#6e4ff5',\n\t\t\t\tborderColor: '#6e4ff5',\n\t\t\t\tborderWidth: 1,\n\t\t\t\tdata: [\n\t\t\t\t\t54,\n\t\t\t\t\t47,\n\t\t\t\t\t62,\n\t\t\t\t\t84,\n\t\t\t\t\t79,\n\t\t\t\t\t61,\n\t\t\t\t\t24\n\t\t\t\t]\n\t\t\t}, {\n\t\t\t\tlabel: 'Dataset 2',\n\t\t\t\tbackgroundColor: '#f6aa33',\n\t\t\t\tborderColor: '#f6aa33',\n\t\t\t\tborderWidth: 1,\n\t\t\t\tdata: [\n\t\t\t\t\t42,\n\t\t\t\t\t52,\n\t\t\t\t\t84,\n\t\t\t\t\t67,\n\t\t\t\t\t32,\n\t\t\t\t\t69,\n\t\t\t\t\t58\n\t\t\t\t]\n\t\t\t}]\n\n\t\t};\n\n\t\tvar ctx = $('#kt_chartjs_1');\n\t\tvar myBarChart = new Chart(ctx, {\n\t\t\ttype: 'bar',\n\t\t\tdata: barChartData,\n\t\t\toptions: {\n\t\t\t\tresponsive: true,\n\t\t\t\tlegend: {\n\t\t\t\t\tposition: 'top',\n\t\t\t\t},\n\t\t\t\ttitle: {\n\t\t\t\t\tdisplay: true,\n\t\t\t\t\ttext: 'Vertical Bar Chart'\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\tvar demo2 = function() {\n\t\tvar barChartData = {\n\t\t\tlabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n\t\t\tdatasets: [{\n\t\t\t\tlabel: 'Dataset 1',\n\t\t\t\tbackgroundColor: '#6e4ff5',\n\t\t\t\tborderColor: '#6e4ff5',\n\t\t\t\tborderWidth: 1,\n\t\t\t\tdata: [\n\t\t\t\t\t54,\n\t\t\t\t\t47,\n\t\t\t\t\t62,\n\t\t\t\t\t84,\n\t\t\t\t\t79,\n\t\t\t\t\t61,\n\t\t\t\t\t24\n\t\t\t\t]\n\t\t\t}, {\n\t\t\t\tlabel: 'Dataset 2',\n\t\t\t\tbackgroundColor: '#f6aa33',\n\t\t\t\tborderColor: '#f6aa33',\n\t\t\t\tborderWidth: 1,\n\t\t\t\tdata: [\n\t\t\t\t\t42,\n\t\t\t\t\t52,\n\t\t\t\t\t84,\n\t\t\t\t\t67,\n\t\t\t\t\t32,\n\t\t\t\t\t69,\n\t\t\t\t\t58\n\t\t\t\t]\n\t\t\t}]\n\n\t\t};\n\n\t\tvar ctx = $('#kt_chartjs_2');\n\t\tvar myBarChart = new Chart(ctx, {\n\t\t\ttype: 'horizontalBar',\n\t\t\tdata: barChartData,\n\t\t\toptions: {\n\t\t\t\tresponsive: true,\n\t\t\t\tlegend: {\n\t\t\t\t\tposition: 'top',\n\t\t\t\t},\n\t\t\t\ttitle: {\n\t\t\t\t\tdisplay: true,\n\t\t\t\t\ttext: 'Horizontal Bar Chart'\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\tvar demo3 = function() {\n\t\tvar barChartData = {\n\t\t\tlabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n\t\t\tdatasets: [{\n\t\t\t\tlabel: 'Dataset 1',\n\t\t\t\tbackgroundColor: '#6e4ff5',\n\t\t\t\tborderColor: '#6e4ff5',\n\t\t\t\tborderWidth: 1,\n\t\t\t\tdata: [\n\t\t\t\t\t54,\n\t\t\t\t\t-47,\n\t\t\t\t\t62,\n\t\t\t\t\t-84,\n\t\t\t\t\t-79,\n\t\t\t\t\t61,\n\t\t\t\t\t24\n\t\t\t\t]\n\t\t\t}, {\n\t\t\t\tlabel: 'Dataset 2',\n\t\t\t\tbackgroundColor: '#f6aa33',\n\t\t\t\tborderColor: '#f6aa33',\n\t\t\t\tborderWidth: 1,\n\t\t\t\tdata: [\n\t\t\t\t\t42,\n\t\t\t\t\t52,\n\t\t\t\t\t84,\n\t\t\t\t\t-67,\n\t\t\t\t\t32,\n\t\t\t\t\t69,\n\t\t\t\t\t-58\n\t\t\t\t]\n\t\t\t}, {\n\t\t\t\tlabel: 'Dataset 3',\n\t\t\t\tbackgroundColor: '#fe3995',\n\t\t\t\tborderColor: '#fe3995',\n\t\t\t\tborderWidth: 1,\n\t\t\t\tdata: [\n\t\t\t\t\t-21,\n\t\t\t\t\t43,\n\t\t\t\t\t74,\n\t\t\t\t\t35,\n\t\t\t\t\t-65,\n\t\t\t\t\t42,\n\t\t\t\t\t34\n\t\t\t\t]\n\t\t\t}]\n\n\t\t};\n\n\t\tvar ctx = $('#kt_chartjs_3');\n\t\tvar myBarChart = new Chart(ctx, {\n\t\t\ttype: 'bar',\n\t\t\tdata: barChartData,\n\t\t\toptions: {\n\t\t\t\ttitle: {\n\t\t\t\t\tdisplay: true,\n\t\t\t\t\ttext: 'Bar Chart - Stacked'\n\t\t\t\t},\n\t\t\t\ttooltips: {\n\t\t\t\t\tmode: 'index',\n\t\t\t\t\tintersect: false\n\t\t\t\t},\n\t\t\t\tresponsive: true,\n\t\t\t\tscales: {\n\t\t\t\t\txAxes: [{\n\t\t\t\t\t\tstacked: true,\n\t\t\t\t\t}],\n\t\t\t\t\tyAxes: [{\n\t\t\t\t\t\tstacked: true\n\t\t\t\t\t}]\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\tvar demo4 = function() {\n\t\tvar barChartData = {\n\t\t\tlabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n\t\t\tdatasets: [{\n\t\t\t\tlabel: 'Dataset 1',\n\t\t\t\tbackgroundColor: '#6e4ff5',\n\t\t\t\tborderColor: '#6e4ff5',\n\t\t\t\tborderWidth: 3,\n\t\t\t\tfill: false,\n\t\t\t\tdata: [\n\t\t\t\t\t54,\n\t\t\t\t\t47,\n\t\t\t\t\t62,\n\t\t\t\t\t84,\n\t\t\t\t\t79,\n\t\t\t\t\t61,\n\t\t\t\t\t24\n\t\t\t\t]\n\t\t\t}, {\n\t\t\t\tlabel: 'Dataset 2',\n\t\t\t\tbackgroundColor: '#f6aa33',\n\t\t\t\tborderColor: '#f6aa33',\n\t\t\t\tborderWidth: 3,\n\t\t\t\tfill: false,\n\t\t\t\tdata: [\n\t\t\t\t\t42,\n\t\t\t\t\t52,\n\t\t\t\t\t84,\n\t\t\t\t\t67,\n\t\t\t\t\t32,\n\t\t\t\t\t69,\n\t\t\t\t\t58\n\t\t\t\t]\n\t\t\t}]\n\n\t\t};\n\n\t\tvar ctx = $('#kt_chartjs_4');\n\t\tvar myBarChart = new Chart(ctx, {\n\t\t\ttype: 'line',\n\t\t\tdata: barChartData,\n\t\t\toptions: {\n\t\t\t\tresponsive: true,\n\t\t\t\ttitle: {\n\t\t\t\t\tdisplay: true,\n\t\t\t\t\ttext: 'Line Chart'\n\t\t\t\t},\n\t\t\t\ttooltips: {\n\t\t\t\t\tmode: 'index',\n\t\t\t\t\tintersect: false,\n\t\t\t\t},\n\t\t\t\thover: {\n\t\t\t\t\tmode: 'nearest',\n\t\t\t\t\tintersect: true\n\t\t\t\t},\n\t\t\t\tscales: {\n\t\t\t\t\txAxes: [{\n\t\t\t\t\t\tdisplay: true,\n\t\t\t\t\t\tscaleLabel: {\n\t\t\t\t\t\t\tdisplay: true,\n\t\t\t\t\t\t\tlabelString: 'Month'\n\t\t\t\t\t\t}\n\t\t\t\t\t}],\n\t\t\t\t\tyAxes: [{\n\t\t\t\t\t\tdisplay: true,\n\t\t\t\t\t\tscaleLabel: {\n\t\t\t\t\t\t\tdisplay: true,\n\t\t\t\t\t\t\tlabelString: 'Value'\n\t\t\t\t\t\t}\n\t\t\t\t\t}]\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\tvar demo5 = function() {\n\t\tvar barChartData = {\n\t\t\tlabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n\t\t\tdatasets: [{\n\t\t\t\tlabel: 'Dataset 1',\n\t\t\t\tbackgroundColor: '#6e4ff5',\n\t\t\t\tborderColor: '#6e4ff5',\n\t\t\t\tborderWidth: 3,\n\t\t\t\tfill: false,\n\t\t\t\tdata: [\n\t\t\t\t\t54,\n\t\t\t\t\t-47,\n\t\t\t\t\t62,\n\t\t\t\t\t-84,\n\t\t\t\t\t-79,\n\t\t\t\t\t61,\n\t\t\t\t\t24\n\t\t\t\t]\n\t\t\t}, {\n\t\t\t\tlabel: 'Dataset 2',\n\t\t\t\tbackgroundColor: '#f6aa33',\n\t\t\t\tborderColor: '#f6aa33',\n\t\t\t\tborderWidth: 3,\n\t\t\t\tborderDash: [5, 5],\n\t\t\t\tfill: false,\n\t\t\t\tdata: [\n\t\t\t\t\t42,\n\t\t\t\t\t52,\n\t\t\t\t\t84,\n\t\t\t\t\t-67,\n\t\t\t\t\t32,\n\t\t\t\t\t69,\n\t\t\t\t\t-58\n\t\t\t\t]\n\t\t\t}, {\n\t\t\t\tlabel: 'Dataset 3',\n\t\t\t\tbackgroundColor: '#fe3995',\n\t\t\t\tborderColor: '#fe3995',\n\t\t\t\tborderWidth: 3,\n\t\t\t\tfill: true,\n\t\t\t\tdata: [\n\t\t\t\t\t-21,\n\t\t\t\t\t43,\n\t\t\t\t\t74,\n\t\t\t\t\t35,\n\t\t\t\t\t-65,\n\t\t\t\t\t42,\n\t\t\t\t\t34\n\t\t\t\t]\n\t\t\t}]\n\n\t\t};\n\n\t\tvar ctx = $('#kt_chartjs_5');\n\t\tvar myBarChart = new Chart(ctx, {\n\t\t\ttype: 'line',\n\t\t\tdata: barChartData,\n\t\t\toptions: {\n\t\t\t\tresponsive: true,\n\t\t\t\ttitle: {\n\t\t\t\t\tdisplay: true,\n\t\t\t\t\ttext: 'Multi Line Chart'\n\t\t\t\t},\n\t\t\t\ttooltips: {\n\t\t\t\t\tmode: 'index',\n\t\t\t\t\tintersect: false,\n\t\t\t\t},\n\t\t\t\thover: {\n\t\t\t\t\tmode: 'nearest',\n\t\t\t\t\tintersect: true\n\t\t\t\t},\n\t\t\t\tscales: {\n\t\t\t\t\txAxes: [{\n\t\t\t\t\t\tdisplay: true,\n\t\t\t\t\t\tscaleLabel: {\n\t\t\t\t\t\t\tdisplay: true,\n\t\t\t\t\t\t\tlabelString: 'Month'\n\t\t\t\t\t\t}\n\t\t\t\t\t}],\n\t\t\t\t\tyAxes: [{\n\t\t\t\t\t\tdisplay: true,\n\t\t\t\t\t\tscaleLabel: {\n\t\t\t\t\t\t\tdisplay: true,\n\t\t\t\t\t\t\tlabelString: 'Value'\n\t\t\t\t\t\t}\n\t\t\t\t\t}]\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\tvar demo6 = function() {\n\n\t\tvar randomScalingFactor = function() {\n\t\t\treturn Math.round(Math.random() * 100);\n\t\t};\n\n\t\tvar chartData = {\n\t\t\tdatasets: [{\n\t\t\t\tdata: [\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t],\n\t\t\t\tbackgroundColor: [\n\t\t\t\t\t'#fe3995', \n\t\t\t\t\t'#f6aa33', \n\t\t\t\t\t'#6e4ff5', \n\t\t\t\t\t'#2abe81', \n\t\t\t\t\t'#c7d2e7',\n\t\t\t\t],\n\t\t\t\tlabel: 'Dataset 1'\n\t\t\t}],\n\t\t\tlabels: [\n\t\t\t\t'Data 1',\n\t\t\t\t'Data 2',\n\t\t\t\t'Data 3',\n\t\t\t\t'Data 4',\n\t\t\t\t'Data 5'\n\t\t\t]\n\n\t\t};\n\n\t\tvar ctx = $('#kt_chartjs_6');\n\t\tvar myBarChart = new Chart(ctx, {\n\t\t\ttype: 'doughnut',\n\t\t\tdata: chartData,\n\t\t\toptions: {\n\t\t\t\tresponsive: true,\n\t\t\t\tlegend: {\n\t\t\t\t\tposition: 'top',\n\t\t\t\t},\n\t\t\t\ttitle: {\n\t\t\t\t\tdisplay: true,\n\t\t\t\t\ttext: 'Donut Chart'\n\t\t\t\t},\n\t\t\t\tanimation: {\n\t\t\t\t\tanimateScale: true,\n\t\t\t\t\tanimateRotate: true\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\tvar demo7 = function() {\n\n\t\tvar randomScalingFactor = function() {\n\t\t\treturn Math.round(Math.random() * 100);\n\t\t};\n\n\t\tvar chartData = {\n\t\t\tdatasets: [{\n\t\t\t\tdata: [\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t],\n\t\t\t\tbackgroundColor: [\n\t\t\t\t\t'#fe3995', \n\t\t\t\t\t'#f6aa33', \n\t\t\t\t\t'#6e4ff5', \n\t\t\t\t\t'#2abe81', \n\t\t\t\t\t'#c7d2e7',\n\t\t\t\t],\n\t\t\t\tlabel: 'Dataset 1'\n\t\t\t}],\n\t\t\tlabels: [\n\t\t\t\t'Data 1',\n\t\t\t\t'Data 2',\n\t\t\t\t'Data 3',\n\t\t\t\t'Data 4',\n\t\t\t\t'Data 5'\n\t\t\t]\n\n\t\t};\n\n\t\tvar ctx = $('#kt_chartjs_7');\n\t\tvar myBarChart = new Chart(ctx, {\n\t\t\ttype: 'pie',\n\t\t\tdata: chartData,\n\t\t\toptions: {\n\t\t\t\tresponsive: true,\n\t\t\t\tlegend: {\n\t\t\t\t\tposition: 'top',\n\t\t\t\t},\n\t\t\t\ttitle: {\n\t\t\t\t\tdisplay: true,\n\t\t\t\t\ttext: 'Pie Chart'\n\t\t\t\t},\n\t\t\t\tanimation: {\n\t\t\t\t\tanimateScale: true,\n\t\t\t\t\tanimateRotate: true\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\tvar demo8 = function() {\n\n\t\tvar randomScalingFactor = function() {\n\t\t\treturn Math.round(Math.random() * 100);\n\t\t};\n\n\t\tvar chartData = {\n\t\t\tdatasets: [{\n\t\t\t\tdata: [\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t\trandomScalingFactor(),\n\t\t\t\t],\n\t\t\t\tbackgroundColor: [\n\t\t\t\t\t'#fe3995', \n\t\t\t\t\t'#f6aa33', \n\t\t\t\t\t'#6e4ff5', \n\t\t\t\t\t'#2abe81', \n\t\t\t\t\t'#c7d2e7',\n\t\t\t\t],\n\t\t\t\tlabel: 'Dataset 1',\n\t\t\t\tborderWidth: [10,10,10,10,10]\n\t\t\t}],\n\t\t\tlabels: [\n\t\t\t\t'Data 1',\n\t\t\t\t'Data 2',\n\t\t\t\t'Data 3',\n\t\t\t\t'Data 4',\n\t\t\t\t'Data 5'\n\t\t\t]\n\t\t};\n\n\t\tvar ctx = $('#kt_chartjs_8');\n\t\tvar myBarChart = new Chart(ctx, {\n\t\t\ttype: 'doughnut',\n\t\t\tdata: chartData,\n\t\t\toptions: {\n\t\t\t\tresponsive: true,\n\t\t\t\tlegend: {\n\t\t\t\t\tdisplay: false,\n\t\t\t\t\tposition: 'top',\n\t\t\t\t},\n\t\t\t\ttitle: {\n\t\t\t\t\tdisplay: false,\n\t\t\t\t\ttext: 'Donut Chart'\n\t\t\t\t},\n\t\t\t\tanimation: {\n\t\t\t\t\tanimateScale: true,\n\t\t\t\t\tanimateRotate: true\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\treturn {\n\t\t// public functions\n\t\tinit: function() {\n\t\t\t// bar charts\n\t\t\tdemo1();\n\t\t\tdemo2();\n\t\t\tdemo3();\n\n\t\t\t// line charts\n\t\t\tdemo4();\n\t\t\tdemo5();\n\n\t\t\t// donut chart\n\t\t\tdemo6();\n\t\t\t// demo8();\n\n\t\t\t// pie chart\n\t\t\tdemo7();\n\t\t}\n\t};\n}();\n\njQuery(document).ready(function() {\n    KTChartJSDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/charts/chart-js.js?");

/***/ })

/******/ });