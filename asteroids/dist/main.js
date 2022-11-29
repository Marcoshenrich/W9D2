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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nclass Asteroid extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(moHash) {\n        super(moHash)\n        //pass in rand vel\n        // pass ranom pos\n\n        this.color = \"blue\"\n        this.radius = 10\n\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asteroid);\n\n\n\n// let pos = [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)]\n// let vel = [Math.floor((Math.random() * 60) - 30), Math.floor((Math.random() * 60) - 30)]\n// moHash[\"vel\"] = vel\n// moHash[\"pos\"] = pos\n\n//# sourceURL=webpack://asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\r\n\r\nclass Game {\r\n    constructor(canvas) {\r\n        this.ctx = canvas.getContext(\"2d\");\r\n        this.canvas = canvas\r\n        this.dimensions = { width: canvas.width, height: canvas.height };\r\n        // this.registerEvents();\r\n        // this.restart();\r\n        this.asteroids = this.asteroidPrinter()\r\n    }\r\n\r\n    play(){\r\n        for (let i = 0; i < this.asteroids.length; i++) {\t\r\n            let asteroid = this.asteroids[i]\r\n            asteroid.draw(this.ctx)\r\n            asteroid.move(this.ctx)\r\n        }\r\n    }\r\n\r\n    asteroidPrinter() {\r\n        let astArr = []\r\n        \r\n        \r\n        for (let i = 0; i < 5; i++) {\r\n            let moHash = {}\r\n            let pos = [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)]\r\n            let vel = [Math.floor((Math.random() * 60) - 30), Math.floor((Math.random() * 60) - 30)]\r\n            moHash[\"vel\"] = vel\r\n            moHash[\"pos\"] = pos\r\n            astArr.push(new _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](moHash))\r\n        }\r\n        return astArr\r\n    }\r\n\r\n    animate(){\r\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)\r\n        this.play()\r\n        requestAnimationFrame(this.animate.bind(this))\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\r\n\n\n//# sourceURL=webpack://asteroids/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n\r\nlet canvas = document.getElementById(\"game-canvas\")\r\n\r\n// Util.inherits(Asteroid, MovingObject)\r\nconst g = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\r\ng.animate();\r\n\r\n\r\n\r\n\r\n\r\n// const ctx = can.getContext(\"2d\")\r\n\r\n// const mo = new MovingObject({\r\n//     pos: [60, 60],\r\n//     vel: [10, 10],\r\n//     radius: 5,\r\n//     color: \"#00FF00\"\r\n// })\r\n\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nclass MovingObject {\r\n    constructor(moHash) {\r\n    this.pos = moHash.pos\r\n    this.vel = moHash.vel\r\n    this.radius = moHash.radius\r\n    this.color = moHash.color\r\n    }\r\n}\r\n\r\nMovingObject.prototype.move = function(ctx){\r\n    this.pos[0] += this.vel[0]\r\n    this.pos[1] += this.vel[1]\r\n}\r\n\r\nMovingObject.prototype.draw = function(ctx) {\r\n    ctx.fillStyle = this.color;\r\n    ctx.beginPath();\r\n\r\n    ctx.arc(\r\n        this.pos[0],\r\n        this.pos[1],\r\n        this.radius,\r\n        0,\r\n        2 * Math.PI,\r\n        false\r\n    );\r\n\r\n    ctx.fill();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovingObject);\r\n\n\n//# sourceURL=webpack://asteroids/./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Util {\n    inherits(childClass, parentClass) {\n        function Sur(){}\n        Sur.prototype = parentClass.prototype\n        childClass.prototype = new Sur()\n        childClass.prototype.constructor = childClass\n    }\n\n \n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    }\n        \n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Util);\n\n//# sourceURL=webpack://asteroids/./src/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;