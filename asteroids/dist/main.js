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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nclass Asteroid extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(moHash) {\n        super(moHash)\n        //pass in rand vel\n        // pass ranom pos\n\n        \n        this.radius = 10\n\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asteroid);\n\n\n\n// let pos = [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)]\n// let vel = [Math.floor((Math.random() * 60) - 30), Math.floor((Math.random() * 60) - 30)]\n// moHash[\"vel\"] = vel\n// moHash[\"pos\"] = pos\n\n\n//# sourceURL=webpack://asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\n\nclass Game {\n    constructor(canvas) {\n        this.ctx = canvas.getContext(\"2d\");\n        this.canvas = canvas\n        this.dimensions = { width: canvas.width, height: canvas.height };\n        // this.registerEvents();\n        // this.restart();\n        this.asteroids = this.asteroidPrinter()\n    }\n\n    play(){\n        for (let i = 0; i < this.asteroids.length; i++) {\n            let asteroid = this.asteroids[i]\n            if (asteroid.pos[0] > this.canvas.width){\n                asteroid.pos[0] = 0\n            }\n            if (asteroid.pos[1] > this.canvas.height){\n                asteroid.pos[1] = 0\n            }\n            asteroid.draw(this.ctx)\n            asteroid.move(this.ctx)\n        }\n    }\n\n    asteroidPrinter() {\n        let astArr = []\n        let colorarr = [\"lightsalmon\", \"magenta\", \"cyan\", \"chrimson\", \"papayawhip\", \"lightgreen\", \"hotpink\", \"aqua\"]\n\n\n        for (let i = 0; i < 10000; i++) {\n            let color = colorarr[Math.floor(Math.random() * 7)]\n            let moHash = {}\n            let pos = [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)]\n            let vel = [Math.floor((Math.random() * 20) - 10), Math.floor((Math.random() * 20) - 10)]\n            moHash[\"vel\"] = vel\n            moHash[\"pos\"] = pos\n            moHash[\"color\"] = color\n            astArr.push(new _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](moHash))\n        }\n        return astArr\n    }\n\n    animate(){\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)\n        this.play()\n        requestAnimationFrame(this.animate.bind(this))\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://asteroids/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\nlet canvas = document.getElementById(\"game-canvas\")\n\n// Util.inherits(Asteroid, MovingObject)\nconst g = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ng.animate();\n\n\n\n\n\n// const ctx = can.getContext(\"2d\")\n\n// const mo = new MovingObject({\n//     pos: [60, 60],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// })\n\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nclass MovingObject {\n    constructor(moHash) {\n    this.pos = moHash.pos\n    this.vel = moHash.vel\n    this.radius = moHash.radius\n    this.color = moHash.color\n    }\n}\n\nMovingObject.prototype.move = function(ctx){\n    this.pos[0] += this.vel[0]\n    this.pos[1] += this.vel[1]\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n\n    ctx.fill();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovingObject);\n\n\n//# sourceURL=webpack://asteroids/./src/moving_object.js?");

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