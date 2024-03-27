/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/header.component.js":
/*!***********************************************!*\
  !*** ./src/js/components/header.component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/js/modules/Component.js\");\n\r\n\r\nclass HeaderComponent extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__.Component {\r\n    constructor(id) {\r\n        super(id);\r\n    }\r\n\r\n    init() {\r\n        if (localStorage.getItem('visited')) {\r\n            this.hide();\r\n            return;\r\n        }\r\n        const btn = this.el.querySelector('.js-header-start');\r\n        btn.addEventListener('click', buttonHandler.bind(this));\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction buttonHandler() {\r\n    localStorage.setItem('visited', true);\r\n    this.hide();\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/components/header.component.js?");

/***/ }),

/***/ "./src/js/modules/Component.js":
/*!*************************************!*\
  !*** ./src/js/modules/Component.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Component: () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n    constructor(id) {\r\n        this.el = document.getElementById(id);\r\n        this.init();\r\n    }\r\n\r\n    init() {};\r\n\r\n    hide() {\r\n        this.el.classList.add('hide');\r\n    };\r\n\r\n    show() {\r\n        this.el.classList.remove('hide');\r\n    };\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/modules/Component.js?");

/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header.component */ \"./src/js/components/header.component.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const header = new _components_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent('header');\r\n});\n\n//# sourceURL=webpack://gulp-builder/./src/js/pages/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/home.js");
/******/ 	
/******/ })()
;