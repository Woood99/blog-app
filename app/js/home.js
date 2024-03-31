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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/js/modules/Component.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/form */ \"./src/js/modules/form.js\");\n/* harmony import */ var _modules_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/validators */ \"./src/js/modules/validators.js\");\n/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ \"./src/js/services/api.service.js\");\n\r\n\r\n\r\n\r\nclass CreateComponent extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(id) {\r\n        super(id);\r\n    }\r\n\r\n    init() {\r\n        this.el.addEventListener('submit', submitHandler.bind(this));\r\n\r\n\r\n        this.form = new _modules_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.el, {\r\n            title: [_modules_validators__WEBPACK_IMPORTED_MODULE_2__[\"default\"].required],\r\n            fulltext: [_modules_validators__WEBPACK_IMPORTED_MODULE_2__[\"default\"].required, _modules_validators__WEBPACK_IMPORTED_MODULE_2__[\"default\"].minLength(10)]\r\n        });\r\n    }\r\n}\r\n\r\nasync function submitHandler(e) {\r\n    e.preventDefault();\r\n\r\n    if (this.form.isValid()) {\r\n        const formData = {\r\n            ...this.form.value(),\r\n            date: new Date().toLocaleDateString(),\r\n            type: this.el.type.value\r\n        }\r\n\r\n        await _services_api_service__WEBPACK_IMPORTED_MODULE_3__.apiService.createPost(formData);\r\n\r\n        this.form.clear();\r\n\r\n        console.log('Запись создана в базе данных');\r\n    }\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/components/create.component.js?");

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

/***/ "./src/js/components/loader.component.js":
/*!***********************************************!*\
  !*** ./src/js/components/loader.component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoaderComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/js/modules/Component.js\");\n\r\n\r\nclass LoaderComponent extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(id) {\r\n        super(id);\r\n    }\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/components/loader.component.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostsComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/js/modules/Component.js\");\n/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ \"./src/js/services/api.service.js\");\n/* harmony import */ var _services_transform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/transform.service */ \"./src/js/services/transform.service.js\");\n\r\n\r\n\r\n\r\nclass PostsComponent extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(id,{loader}) {\r\n        super(id);\r\n        this.loader = loader;\r\n    }\r\n\r\n    async onShow() {\r\n        this.loader.show();\r\n        const data = await _services_api_service__WEBPACK_IMPORTED_MODULE_1__.apiService.fetchPosts();\r\n        const posts = _services_transform_service__WEBPACK_IMPORTED_MODULE_2__.TransformService.dataObjectToArray(data);\r\n        const html = posts.map(post => renderPost(post));\r\n        this.loader.hide();\r\n        this.el.insertAdjacentHTML('afterbegin', html.join(' '));\r\n    }\r\n\r\n    onHide() {\r\n        this.el.innerHTML = '';\r\n    }\r\n}\r\n\r\nfunction renderPost(post) {\r\n    const tag = post.type === 'news' ?\r\n        `<li class=\"tag tag-blue tag-rounded\">Новость</li>` :\r\n        `<li class=\"tag tag-rounded\">Заметка</li>`;\r\n\r\n    const button = `\r\n        <button type=\"button\" class=\"button-round button-small button-primary\">\r\n            Сохранить\r\n        </button>\r\n    `;\r\n    return `\r\n        <div class=\"panel\">\r\n            <div class=\"panel-head\">\r\n              <p class=\"panel-title\">${post.title}</p>\r\n              <ul class=\"tags\">\r\n                ${tag}\r\n              </ul>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <p class=\"multi-line\">${post.fulltext}</p>\r\n            </div>\r\n            <div class=\"panel-footer w-panel-footer\">\r\n              <small>${post.date}</small>\r\n              ${button}\r\n            </div>\r\n        </div>\r\n    `;\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/components/posts.component.js?");

/***/ }),

/***/ "./src/js/modules/Component.js":
/*!*************************************!*\
  !*** ./src/js/modules/Component.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n    constructor(id) {\r\n        this.el = document.getElementById(id);\r\n        this.init();\r\n    }\r\n\r\n    init() {};\r\n\r\n    onShow() {};\r\n\r\n    onHide() {}\r\n\r\n    hide() {\r\n        this.el.classList.add('hide');\r\n        this.onHide();\r\n    };\r\n\r\n    show() {\r\n        this.el.classList.remove('hide');\r\n        this.onShow();\r\n    };\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/modules/Component.js?");

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\nclass Form {\r\n    constructor(form, controls) {\r\n        this.form = form;\r\n        this.controls = controls;\r\n    }\r\n\r\n    value() {\r\n        const value = {};\r\n\r\n        Object.keys(this.controls).forEach(control => {\r\n            value[control] = this.form[control].value;\r\n        })\r\n\r\n        return value;\r\n    }\r\n    isValid() {\r\n        let isFormValid = true;\r\n\r\n        Object.keys(this.controls).forEach(control => {\r\n            const validators = this.controls[control];\r\n\r\n            let isValid = true;\r\n            validators.forEach(validator => {\r\n                isValid = validator(this.form[control].value) && isValid;\r\n            })\r\n\r\n            isValid ? clearError(this.form[control]) : setError(this.form[control]);\r\n\r\n            isFormValid = isFormValid && isValid;\r\n        })\r\n\r\n        return isFormValid;\r\n    }\r\n    clear() {\r\n        Object.keys(this.controls).forEach(control => {\r\n            this.form[control].value = '';\r\n        })\r\n    }\r\n}\r\n\r\n\r\nfunction setError(control) {\r\n    clearError(control);\r\n    const error = `\r\n        <p class=\"validation-error\">Введите корректное значение</p>\r\n    `;\r\n    control.classList.add('invalid');\r\n    control.insertAdjacentHTML('afterend', error);\r\n}\r\n\r\nfunction clearError(control) {\r\n    control.classList.remove('invalid');\r\n    const error = control.nextElementSibling;\r\n    if (error) error.remove();\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/modules/form.js?");

/***/ }),

/***/ "./src/js/modules/validators.js":
/*!**************************************!*\
  !*** ./src/js/modules/validators.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Validators)\n/* harmony export */ });\nclass Validators {\r\n    static required(value = '') {\r\n        return value && value.trim();\r\n    }\r\n\r\n    static minLength(length) {\r\n        return value => {\r\n            return value.length >= length;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/modules/validators.js?");

/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header.component */ \"./src/js/components/header.component.js\");\n/* harmony import */ var _components_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigation.component */ \"./src/js/components/navigation.component.js\");\n/* harmony import */ var _components_favorite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/favorite.component */ \"./src/js/components/favorite.component.js\");\n/* harmony import */ var _components_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/create.component */ \"./src/js/components/create.component.js\");\n/* harmony import */ var _components_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/posts.component */ \"./src/js/components/posts.component.js\");\n/* harmony import */ var _components_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loader.component */ \"./src/js/components/loader.component.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    new _components_header_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('header');\r\n    const navigation = new _components_navigation_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('navigation');\r\n    const loader = new _components_loader_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('loader');\r\n\r\n    const posts = new _components_posts_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('posts', {\r\n        loader\r\n    });\r\n    const create = new _components_create_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('create');\r\n    const favorite = new _components_favorite_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('favorite');\r\n\r\n    navigation.registerTabs([{\r\n            name: 'create',\r\n            component: create\r\n        },\r\n        {\r\n            name: 'posts',\r\n            component: posts\r\n        },\r\n        {\r\n            name: 'favorite',\r\n            component: favorite\r\n        }\r\n    ])\r\n});\n\n//# sourceURL=webpack://gulp-builder/./src/js/pages/home.js?");

/***/ }),

/***/ "./src/js/services/api.service.js":
/*!****************************************!*\
  !*** ./src/js/services/api.service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiService: () => (/* binding */ apiService)\n/* harmony export */ });\nclass ApiService {\r\n    constructor(baseUrl) {\r\n        this.url = baseUrl;\r\n    }\r\n\r\n    async createPost(post) {\r\n        try {\r\n            const request = new Request(`${this.url}/posts.json`, {\r\n                method: 'post',\r\n                body: JSON.stringify(post)\r\n            });\r\n            return useRequest(request);\r\n        } catch (error) {\r\n            console.log(error);\r\n        }\r\n    }\r\n\r\n    async fetchPosts() {\r\n        try {\r\n            const request = new Request(`${this.url}/posts.json`, {\r\n                method: 'get'\r\n            });\r\n            return useRequest(request);\r\n        } catch (error) {\r\n            console.log(error);\r\n        }\r\n    }\r\n}\r\n\r\nasync function useRequest(request) {\r\n    const response = await fetch(request)\r\n    return await response.json();\r\n}\r\n\r\nconst apiService = new ApiService('https://blog-app-a1403-default-rtdb.firebaseio.com');\n\n//# sourceURL=webpack://gulp-builder/./src/js/services/api.service.js?");

/***/ }),

/***/ "./src/js/services/transform.service.js":
/*!**********************************************!*\
  !*** ./src/js/services/transform.service.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TransformService: () => (/* binding */ TransformService)\n/* harmony export */ });\nclass TransformService {\r\n    static dataObjectToArray(data) {\r\n        return Object.keys(data).map(key => {\r\n            const item = data[key];\r\n            item.id = key;\r\n            return item;\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/services/transform.service.js?");

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