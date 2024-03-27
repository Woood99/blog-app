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

/***/ "./src/js/components/create.component.js":
/*!***********************************************!*\
  !*** ./src/js/components/create.component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/js/modules/Component.js\");\n\r\n\r\n\r\nclass CreateComponent extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(id) {\r\n        super(id);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://gulp-builder/./src/js/components/create.component.js?");

/***/ }),

/***/ "./src/js/components/favorite.component.js":
/*!*************************************************!*\
  !*** ./src/js/components/favorite.component.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FavoriteComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/js/modules/Component.js\");\n\r\n\r\n\r\nclass FavoriteComponent extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(id) {\r\n        super(id);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://gulp-builder/./src/js/components/favorite.component.js?");

/***/ }),

/***/ "./src/js/components/header.component.js":
/*!***********************************************!*\
  !*** ./src/js/components/header.component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HeaderComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/js/modules/Component.js\");\n\r\n\r\nclass HeaderComponent extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(id) {\r\n        super(id);\r\n    }\r\n\r\n    init() {\r\n        if (localStorage.getItem('visited')) {\r\n            this.hide();\r\n            return;\r\n        }\r\n        const btn = this.el.querySelector('.js-header-start');\r\n        btn.addEventListener('click', buttonHandler.bind(this));\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction buttonHandler() {\r\n    localStorage.setItem('visited', true);\r\n    this.hide();\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/components/header.component.js?");

/***/ }),

/***/ "./src/js/components/navigation.component.js":
/*!***************************************************!*\
  !*** ./src/js/components/navigation.component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavigationComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/js/modules/Component.js\");\n\r\n\r\n\r\nclass NavigationComponent extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(id) {\r\n        super(id);\r\n\r\n        this.tabs = [];\r\n    }\r\n    init() {\r\n        this.el.addEventListener('click', tabHandler.bind(this));\r\n    }\r\n\r\n    registerTabs(tabs) {\r\n        this.tabs = tabs;\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction tabHandler(e) {\r\n    e.preventDefault();\r\n    const tab = e.target.closest('.tab');\r\n    if (tab) {\r\n        const tabs = Array.from(this.el.querySelectorAll('.tab'));\r\n        tabs.forEach(tab => tab.classList.remove('active'));\r\n        tab.classList.add('active');\r\n\r\n        const activeTab = this.tabs.find(currentTab => currentTab.name === tab.dataset.name);\r\n        this.tabs.forEach(tab => tab.component.hide());\r\n        activeTab.component.show();\r\n    }\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/components/navigation.component.js?");

/***/ }),

/***/ "./src/js/components/posts.component.js":
/*!**********************************************!*\
  !*** ./src/js/components/posts.component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostsComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/js/modules/Component.js\");\n\r\n\r\n\r\nclass PostsComponent extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(id) {\r\n        super(id);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://gulp-builder/./src/js/components/posts.component.js?");

/***/ }),

/***/ "./src/js/modules/Component.js":
/*!*************************************!*\
  !*** ./src/js/modules/Component.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n    constructor(id) {\r\n        this.el = document.getElementById(id);\r\n        this.init();\r\n    }\r\n\r\n    init() {};\r\n\r\n    hide() {\r\n        this.el.classList.add('hide');\r\n    };\r\n\r\n    show() {\r\n        this.el.classList.remove('hide');\r\n    };\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/modules/Component.js?");

/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header.component */ \"./src/js/components/header.component.js\");\n/* harmony import */ var _components_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigation.component */ \"./src/js/components/navigation.component.js\");\n/* harmony import */ var _components_favorite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/favorite.component */ \"./src/js/components/favorite.component.js\");\n/* harmony import */ var _components_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/create.component */ \"./src/js/components/create.component.js\");\n/* harmony import */ var _components_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/posts.component */ \"./src/js/components/posts.component.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    new _components_header_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('header');\r\n    const navigation = new _components_navigation_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('navigation');\r\n    const posts = new _components_posts_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('posts');\r\n    const create = new _components_create_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('create');\r\n    const favorite = new _components_favorite_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('favorite');\r\n\r\n    navigation.registerTabs([{\r\n            name: 'create',\r\n            component: create\r\n        },\r\n        {\r\n            name: 'posts',\r\n            component: posts\r\n        },\r\n        {\r\n            name: 'favorite',\r\n            component: favorite\r\n        }\r\n    ])\r\n});\n\n//# sourceURL=webpack://gulp-builder/./src/js/pages/home.js?");

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