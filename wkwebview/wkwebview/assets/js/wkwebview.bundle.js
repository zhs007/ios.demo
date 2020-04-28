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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content/wkwebview.index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/content/css/adarender.css":
/*!***************************************!*\
  !*** ./src/content/css/adarender.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".adarender {\\n  margin: 0 auto;\\n}\\n.adarender-loading {\\n  background: black;\\n  /* position: fixed; */\\n  left: 0px;\\n  top: 0px;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 999;\\n  opacity: 0.97 !important;\\n  position: fixed;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/content/css/adarender.css?");

/***/ }),

/***/ "./src/content/css/imgwrap.css":
/*!*************************************!*\
  !*** ./src/content/css/imgwrap.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".adarender .img-wrap-bd {\\n  width: 100%;\\n  text-align: center;\\n}\\n.adarender .img-wrap {\\n  margin-right: -10px;\\n}\\n.adarender .img-wrap .img-item {\\n  display: block;\\n  float: left;\\n  font-size: 13px;\\n  text-align: center;\\n  margin: 0 25px 10px 0;\\n  width: 115px;\\n}\\n.adarender .img-wrap .img-item:link,\\n.adarender .img-wrap .img-item:visited,\\n.adarender .img-wrap .img-item:hover,\\n.adarender .img-wrap .img-item:active {\\n  text-decoration: none;\\n  background: none;\\n  color: #37a;\\n}\\n.adarender .img-wrap .img-item .cover-wp {\\n  background-size: 100%;\\n  height: 161px;\\n  overflow: hidden;\\n}\\n.adarender .img-wrap .img-item .cover-wp img {\\n  object-fit: cover;\\n  width: 100%;\\n  height: 100%;  \\n  /* max-width: max-content; */\\n  /* max-height: 100%; */\\n}\\n.adarender .img-wrap .img-item p {\\n  margin: 5px 0 0;\\n  height: 44px;\\n  overflow: hidden;\\n  font-size: 13px;\\n  display: block;\\n  margin-block-start: 1em;\\n  margin-block-end: 1em;\\n  margin-inline-start: 0px;\\n  margin-inline-end: 0px;\\n  text-align: center;\\n}\\n.adarender .img-wrap .img-item .new {\\n  display: inline-block;\\n  opacity: 1;\\n  position: relative;\\n  top: -2px;\\n  border-width: 0;\\n  vertical-align: middle;\\n  width: 16px;\\n}\\n.adarender .img-wrap .img-item .green {\\n  color: #58a05a;\\n}\\n.adarender .img-wrap .img-item strong {\\n  color: #e09015;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/content/css/imgwrap.css?");

/***/ }),

/***/ "./src/content/css/tags.css":
/*!**********************************!*\
  !*** ./src/content/css/tags.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".adarender .tags {\\n  display: block;\\n  margin: 0;\\n  padding: 0;\\n  overflow: hidden;\\n  zoom: 1;\\n}\\n.adarender .tag-list {\\n  margin: 0;\\n  padding: 0;\\n  /* width: auto; */\\n  display: inline;\\n  padding-right: 5px;\\n}\\n.adarender .tag-list .tag {\\n  display: inline-block;\\n  zoom: 1;\\n  cursor: pointer;\\n  padding: 1px 10px;\\n  margin: 0 3px 5px 0;\\n  color: #666;\\n  font-size: 14px;\\n  border-radius: 2px;\\n  background: none;\\n  vertical-align: middle;\\n}\\n.adarender .tag-list .activate {\\n  background: #4b8ccb;\\n  color: #fff;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/content/css/tags.css?");

/***/ }),

/***/ "./src/content/ele.utils.js":
/*!**********************************!*\
  !*** ./src/content/ele.utils.js ***!
  \**********************************/
/*! exports provided: checkElementStyle, showLoading, ChangeEle, hideElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkElementStyle\", function() { return checkElementStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showLoading\", function() { return showLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChangeEle\", function() { return ChangeEle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideElement\", function() { return hideElement; });\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ \"./src/content/log.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n/**\n * checkElementStyle\n * @param {Element} ele - element\n * @param {function} onCheck - bool onCheck(style)\n * @return {boolean} ret - return onCheck\n */\n\nfunction checkElementStyle(ele, onCheck) {\n  var rs = window.getComputedStyle(ele);\n  return onCheck(rs);\n}\n/**\n * hideElement - hide element\n * @param {Element} ele - element\n */\n\n\nfunction hideElement(ele) {\n  if (ele.id != 'adarender_loading') {\n    if (ele.style.display != 'none') {\n      Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"loginfo\"])('hide id:' + ele.id + ' class:' + ele.className);\n      ele.style.display = 'none';\n    }\n  }\n}\n/**\n * showLoading\n * @param {boolean} bShow - is show\n */\n\n\nfunction showLoading(bShow) {\n  if (bShow) {\n    var lsteles = document.getElementsByClassName('adarender-loading');\n\n    if (lsteles.length > 0) {\n      return;\n    }\n\n    lsteles = document.getElementsByTagName('body');\n\n    if (lsteles.length > 0) {\n      var div = document.createElement('div');\n      div.classList.add('adarender-loading');\n      div.innerHTML = '处理中...';\n      div.id = 'adarender_loading';\n      lsteles[0].appendChild(div);\n    }\n  } else {\n    var _lsteles = document.getElementsByClassName('adarender-loading');\n\n    if (_lsteles.length > 0) {\n      _lsteles[0].style.display = 'none';\n    }\n  }\n}\n/**\n * ChangeEle - 改变element，只改变一次\n */\n\n\nvar ChangeEle = /*#__PURE__*/function () {\n  /**\n   * constructor\n   * @param {string} strTemp - template\n   */\n  function ChangeEle(strTemp) {\n    _classCallCheck(this, ChangeEle);\n\n    this.strTemp = strTemp;\n    this.isChged = false;\n  }\n  /**\n   * check\n   * @param {object} obj - render params for ejs\n   * @param {function} onCanChg - bool canChg()\n   * @param {function} onMakeParams - object makeParams()\n   * @param {function} onRender - void render(str)\n   */\n\n\n  _createClass(ChangeEle, [{\n    key: \"check\",\n    value: function check(obj, onCanChg, onMakeParams, onRender) {\n      if (this.isChged) {\n        return;\n      }\n\n      if (onCanChg()) {\n        if (onMakeParams) {\n          obj = onMakeParams();\n        }\n\n        var ret = ejs.render(this.strTemp, obj);\n        this.isChged = true;\n        onRender(ret);\n      }\n\n      return;\n    }\n  }]);\n\n  return ChangeEle;\n}();\n\n\n\n//# sourceURL=webpack:///./src/content/ele.utils.js?");

/***/ }),

/***/ "./src/content/log.js":
/*!****************************!*\
  !*** ./src/content/log.js ***!
  \****************************/
/*! exports provided: setLogLevel, setCacheLog, loginfo, logdebug, getLogBuf, LOG_LEVEL_DEBUG, LOG_LEVEL_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLogLevel\", function() { return setLogLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCacheLog\", function() { return setCacheLog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginfo\", function() { return loginfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logdebug\", function() { return logdebug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLogBuf\", function() { return getLogBuf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_LEVEL_DEBUG\", function() { return LOG_LEVEL_DEBUG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_LEVEL_INFO\", function() { return LOG_LEVEL_INFO; });\nvar LOG_LEVEL_DEBUG = 0;\nvar LOG_LEVEL_INFO = 1;\nvar isCacheLog = false;\nvar logbuf = '';\nvar loglevel = LOG_LEVEL_INFO;\n/**\n * setLogLevel - 日志级别\n * @param {boolean} l - loglevel\n */\n\nfunction setLogLevel(l) {\n  loglevel = l;\n}\n/**\n * setCacheLog - 是否缓存日志，主要用于特殊设备调试方便\n * @param {boolean} iscache - iscache\n */\n\n\nfunction setCacheLog(iscache) {\n  isCacheLog = iscache;\n}\n/**\n * loginfo -\n * @param {string} str - string\n */\n\n\nfunction loginfo(str) {\n  if (isCacheLog && loglevel >= LOG_LEVEL_INFO) {\n    logbuf += str;\n    logbuf += '\\n';\n  }\n\n  console.info(\"drakestreasure\" + ' ' + str);\n}\n/**\n * logdebug -\n * @param {string} str - string\n */\n\n\nfunction logdebug(str) {\n  if (isCacheLog && loglevel >= LOG_LEVEL_DEBUG) {\n    logbuf += str;\n    logbuf += '\\n';\n  }\n\n  console.debug(\"drakestreasure\" + ' ' + str);\n}\n/**\n * getLogBuf -\n * @return {string} str - string\n */\n\n\nfunction getLogBuf() {\n  return logbuf;\n}\n\n\n\n//# sourceURL=webpack:///./src/content/log.js?");

/***/ }),

/***/ "./src/content/main.js":
/*!*****************************!*\
  !*** ./src/content/main.js ***!
  \*****************************/
/*! exports provided: start, plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"plugins\", function() { return plugins; });\n/* harmony import */ var _plugins_6vdy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/6vdy */ \"./src/content/plugins/6vdy.js\");\n/* harmony import */ var _plugins_manhuagui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/manhuagui */ \"./src/content/plugins/manhuagui.js\");\n/* harmony import */ var _plugins_yxdm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/yxdm */ \"./src/content/plugins/yxdm.js\");\n/* harmony import */ var _plugins_8080s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/8080s */ \"./src/content/plugins/8080s.js\");\n/* harmony import */ var _plugins_88ys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/88ys */ \"./src/content/plugins/88ys.js\");\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log */ \"./src/content/log.js\");\n\n\n\n\n\n\nvar lstPlugins = [_plugins_6vdy__WEBPACK_IMPORTED_MODULE_0__, _plugins_manhuagui__WEBPACK_IMPORTED_MODULE_1__, _plugins_yxdm__WEBPACK_IMPORTED_MODULE_2__, _plugins_8080s__WEBPACK_IMPORTED_MODULE_3__, _plugins_88ys__WEBPACK_IMPORTED_MODULE_4__];\nvar plugins = {\n  p6vdy: _plugins_6vdy__WEBPACK_IMPORTED_MODULE_0__\n};\n/**\n * start - 页面启动时执行\n */\n\nfunction start() {\n  Object(_log__WEBPACK_IMPORTED_MODULE_5__[\"loginfo\"])(\"0.2.37\" + ' starting...');\n\n  for (var i = 0; i < lstPlugins.length; ++i) {\n    if (lstPlugins[i].checkURL(window.origin)) {\n      lstPlugins[i].onStartPage();\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/content/main.js?");

/***/ }),

/***/ "./src/content/plugin.utils.js":
/*!*************************************!*\
  !*** ./src/content/plugin.utils.js ***!
  \*************************************/
/*! exports provided: PLUGIN_MODE_TIMER, PLUGIN_MODE_MO, startPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLUGIN_MODE_TIMER\", function() { return PLUGIN_MODE_TIMER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLUGIN_MODE_MO\", function() { return PLUGIN_MODE_MO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startPlugin\", function() { return startPlugin; });\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ \"./src/content/log.js\");\n/* harmony import */ var _task_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.utils */ \"./src/content/task.utils.js\");\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n // timer模式，隔一段时间触发 onTimer\n\nvar PLUGIN_MODE_TIMER = 'timer'; // MutationObserver 模式，一般来说，侦听body子节点变化，效率会比timer高，但在移动设备上可能无效\n\nvar PLUGIN_MODE_MO = 'mo';\n/**\n * startPlugin\n * @param {object} params - 参数object\n *      pluginName: 插件名\n *      mode: 插件模式，PLUGIN_MODE_TIMER | PLUGIN_MODE_MO\n *      timer: 不管是什么模式，这个timer都应该有，默认是 100\n *      onBody: void onBody()，只会执行一次，在 body 有效后调用。\n *      onDOMContentLoaded: void onDOMContentLoaded()，DOMContentLoaded 以后调用\n *      onTimer: bool onTimer()，如果返回 true，将停止 timer，任何模式都可以配置 onTimer\n *      onBodyChildrenNodeChged: bool onBodyChildrenNodeChged()，侦听全部节点变化，如果返回true，则终止侦听。\n * 如果是 PLUGIN_MODE_TIMER 模式，每次timer触发都会调用，PLUGIN_MODE_MO 模式正常。\n */\n\nfunction startPlugin(params) {\n  if (!params) {\n    params = {};\n  }\n\n  if (!params.mode) {\n    params.mode = PLUGIN_MODE_TIMER;\n  }\n\n  if (!params.timer) {\n    params.timer = 100;\n  }\n\n  Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"loginfo\"])('--> ' + params.pluginName + ' ' + params.mode);\n\n  if (params.onBody) {\n    Object(_task_utils__WEBPACK_IMPORTED_MODULE_1__[\"setTaskOnBody\"])(params.timer, params.onBody);\n  }\n\n  if (params.onDOMContentLoaded) {\n    document.addEventListener('DOMContentLoaded', function () {\n      params.onDOMContentLoaded();\n    });\n  }\n\n  if (params.onTimer) {\n    Object(_task_utils__WEBPACK_IMPORTED_MODULE_1__[\"startTask\"])(params.timer, params.onTimer);\n  }\n\n  if (params.onBodyChildrenNodeChged) {\n    if (params.mode == PLUGIN_MODE_MO) {\n      Object(_task_utils__WEBPACK_IMPORTED_MODULE_1__[\"setTaskOnBody\"])(params.timer, function () {\n        Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"logdebug\"])('startPlugin PLUGIN_MODE_MO onBody start...');\n        var lstbody = document.getElementsByTagName('body');\n        var observer = new MutationObserver(function (mutationsList, observer) {\n          Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"logdebug\"])('MutationObserver.callback ' + mutationsList.length); // 这里没必要每个改变都遍历节点，只要判断出有变化，最后遍历一次即可\n\n          var islistchged = false;\n\n          var _iterator = _createForOfIteratorHelper(mutationsList),\n              _step;\n\n          try {\n            for (_iterator.s(); !(_step = _iterator.n()).done;) {\n              var mutation = _step.value;\n\n              if (mutation.type === 'childList') {\n                islistchged = true;\n              }\n            }\n          } catch (err) {\n            _iterator.e(err);\n          } finally {\n            _iterator.f();\n          }\n\n          if (islistchged) {\n            Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"logdebug\"])('islistchged ' + mutationsList.length);\n\n            if (params.onBodyChildrenNodeChged()) {\n              observer.disconnect();\n            }\n          }\n        });\n        observer.observe(lstbody[0], {\n          childList: true,\n          subtree: true\n        });\n        Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"logdebug\"])('startPlugin PLUGIN_MODE_MO onBody ok.');\n      });\n    } else if (params.mode == PLUGIN_MODE_TIMER) {\n      Object(_task_utils__WEBPACK_IMPORTED_MODULE_1__[\"startTask\"])(params.timer, params.onBodyChildrenNodeChged);\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/content/plugin.utils.js?");

/***/ }),

/***/ "./src/content/plugins/6vdy.js":
/*!*************************************!*\
  !*** ./src/content/plugins/6vdy.js ***!
  \*************************************/
/*! exports provided: checkURL, onStartPage, onBody, onBodyChildrenNodeChged, onDOMContentLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkURL\", function() { return checkURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onStartPage\", function() { return onStartPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onBody\", function() { return onBody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onBodyChildrenNodeChged\", function() { return onBodyChildrenNodeChged; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDOMContentLoaded\", function() { return onDOMContentLoaded; });\n/* harmony import */ var _6vdy_main_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./6vdy/main.ejs */ \"./src/content/plugins/6vdy/main.ejs\");\n/* harmony import */ var _6vdy_tags_ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./6vdy/tags.ejs */ \"./src/content/plugins/6vdy/tags.ejs\");\n/* harmony import */ var _ele_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ele.utils */ \"./src/content/ele.utils.js\");\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../log */ \"./src/content/log.js\");\n/* harmony import */ var _plugin_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugin.utils */ \"./src/content/plugin.utils.js\");\n\n\n // import {setTaskOnBody} from '../task.utils';\n\n\n\nvar ceMain = new _ele_utils__WEBPACK_IMPORTED_MODULE_2__[\"ChangeEle\"](_6vdy_main_ejs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nvar ceTags = new _ele_utils__WEBPACK_IMPORTED_MODULE_2__[\"ChangeEle\"](_6vdy_tags_ejs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); // 插件名\n\nvar pluginName = '6vdy';\n/**\n * checkURL\n * @param {string} strurl - url\n * @return {boolean} isMine - 是否需要我处理\n */\n\nfunction checkURL(strurl) {\n  if (strurl.indexOf('6vdy.org') >= 0 || strurl.indexOf('hao6v.com') >= 0 || strurl.indexOf('hao6v.net') >= 0 || strurl.indexOf('66s.cc') >= 0) {\n    return true;\n  }\n\n  return false;\n}\n/**\n * onDOMContentLoaded - 页面加载完成后调用，改变页面布局\n */\n\n\nfunction onDOMContentLoaded() {\n  {\n    var mm = document.getElementsByClassName('mainmenus container');\n    var lsta = undefined;\n\n    if (mm.length > 0) {\n      lsta = mm[0].getElementsByTagName('a');\n    }\n\n    ceTags.check(undefined, function () {\n      return mm && lsta && lsta.length > 0;\n    }, function () {\n      var curtag = '首页';\n      var bf = document.getElementsByClassName('bulletin fourfifth');\n\n      if (bf.length > 0) {\n        var lsta2 = bf[0].getElementsByTagName('a');\n\n        if (lsta2.length > 0) {\n          curtag = lsta2[lsta2.length - 1].text;\n        }\n      }\n\n      var obj = {\n        tags: []\n      };\n\n      for (var i = 0; i < lsta.length; ++i) {\n        if (lsta[i].text == '最新50部' || lsta[i].text == '旧版6v') {\n          continue;\n        }\n\n        var ci = {\n          title: lsta[i].text,\n          url: lsta[i].href,\n          activate: lsta[i].text == curtag\n        };\n        obj.tags.push(ci);\n      }\n\n      return obj;\n    }, function (ret) {\n      mm[0].style.position = 'static';\n      mm[0].innerHTML = ret;\n      mm[0].style.background = 'none'; // mm[0].classList.remove('mainmenus');\n    });\n  }\n  {\n    var mc = document.getElementById('post_container');\n    var cc = undefined;\n    var lstc = document.getElementsByClassName('container');\n\n    for (var i = 0; i < lstc.length; ++i) {\n      if (lstc[i].className == 'container') {\n        cc = lstc[i];\n      }\n    }\n\n    ceMain.check(undefined, function () {\n      return mc && cc;\n    }, function () {\n      var lstph = mc.getElementsByClassName('post_hover');\n      var obj = {\n        items: []\n      };\n\n      for (var _i = 0; _i < lstph.length; ++_i) {\n        var _lsta = lstph[_i].getElementsByTagName('a');\n\n        var lst = lstph[_i].getElementsByTagName('img');\n\n        var ci = {\n          title: lst[0].alt,\n          img: lst[0].src,\n          isnew: false,\n          score: '',\n          url: _lsta[0].href\n        };\n        obj.items.push(ci);\n      }\n\n      return obj;\n    }, function (ret) {\n      cc.innerHTML = ret;\n    });\n  }\n  {\n    var lsteles = document.getElementsByClassName('pagination');\n\n    if (lsteles.length > 0) {\n      lsteles[0].style['text-align'] = 'center';\n    }\n  }\n  Object(_ele_utils__WEBPACK_IMPORTED_MODULE_2__[\"showLoading\"])(false);\n}\n/**\n * onBodyChildrenNodeChged - element增减的时候触发\n * @return {boolean} isend - 返回 true，表示终止\n */\n\n\nfunction onBodyChildrenNodeChged() {\n  var lstdiv = document.getElementsByTagName('div');\n\n  for (var i = 0; i < lstdiv.length; ++i) {\n    if (lstdiv[i].style.position == 'fixed') {\n      Object(_ele_utils__WEBPACK_IMPORTED_MODULE_2__[\"hideElement\"])(lstdiv[i]);\n    } else if (lstdiv[i].id == lstdiv[i].className && lstdiv[i].id.indexOf('l') == 0) {\n      Object(_ele_utils__WEBPACK_IMPORTED_MODULE_2__[\"hideElement\"])(lstdiv[i]);\n    } else if (lstdiv[i].id == 'a960') {\n      Object(_ele_utils__WEBPACK_IMPORTED_MODULE_2__[\"hideElement\"])(lstdiv[i]);\n    }\n  }\n\n  return false;\n}\n/**\n * onBody - body初始化好了调用，只会调用一次\n */\n\n\nfunction onBody() {\n  Object(_log__WEBPACK_IMPORTED_MODULE_3__[\"logdebug\"])('onBody');\n  Object(_ele_utils__WEBPACK_IMPORTED_MODULE_2__[\"showLoading\"])(true);\n}\n/**\n * onStartPage\n * @param {object} inParams - object\n *      mode: PLUGIN_MODE_TIMER | PLUGIN_MODE_MO，默认为 PLUGIN_MODE_MO\n *      isChgPage: 是否改变页面，默认为true\n */\n\n\nfunction onStartPage(inParams) {\n  if (!inParams) {\n    inParams = {};\n  }\n\n  if (!inParams.mode) {\n    inParams.mode = _plugin_utils__WEBPACK_IMPORTED_MODULE_4__[\"PLUGIN_MODE_MO\"];\n  }\n\n  if (typeof inParams.isChgPage != 'boolean') {\n    inParams.isChgPage = true;\n  }\n\n  var params = {\n    pluginName: pluginName,\n    mode: inParams.mode,\n    // mode: PLUGIN_MODE_MO,\n    timer: 100,\n    onBody: onBody,\n    // onDOMContentLoaded: onDOMContentLoaded,\n    // onTimer: onTimer,\n    onBodyChildrenNodeChged: onBodyChildrenNodeChged\n  };\n\n  if (inParams.isChgPage) {\n    params.onDOMContentLoaded = onDOMContentLoaded;\n  }\n\n  Object(_plugin_utils__WEBPACK_IMPORTED_MODULE_4__[\"startPlugin\"])(params);\n}\n\n\n\n//# sourceURL=webpack:///./src/content/plugins/6vdy.js?");

/***/ }),

/***/ "./src/content/plugins/6vdy/main.ejs":
/*!*******************************************!*\
  !*** ./src/content/plugins/6vdy/main.ejs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<div class=\\\"adarender\\\">\\n  <div class=\\\"img-wrap-bd\\\">\\n    <div class=\\\"img-wrap\\\">\\n      <% for(var i = 0; i < items.length; ++i) { %>\\n      <a class=\\\"img-item\\\" target=\\\"_blank\\\" href=\\\"<%= items[i].url %>\\\">\\n        <div class=\\\"cover-wp\\\">\\n          <img src=\\\"<%- items[i].img %>\\\" alt=\\\"<%= items[i].title %>\\\" />\\n        </div>\\n        <p>\\n          <% if (items[i].isnew) {%>\\n          <span class=\\\"green\\\">\\n            <img\\n              src=\\\"https://cdn.jsdelivr.net/npm/adarender@0.6.63/dist/iw_new.png\\\"\\n              width=\\\"16\\\"\\n              class=\\\"new\\\"\\n            />\\n          </span>\\n          <% } %> <%= items[i].title %>\\n          <strong><%= items[i].score %></strong>\\n        </p>\\n      </a>\\n      <% } %>\\n    </div>\\n  </div>\\n</div>\\n\");\n\n//# sourceURL=webpack:///./src/content/plugins/6vdy/main.ejs?");

/***/ }),

/***/ "./src/content/plugins/6vdy/tags.ejs":
/*!*******************************************!*\
  !*** ./src/content/plugins/6vdy/tags.ejs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<div class=\\\"adarender\\\">\\n  <div class=\\\"tags\\\">\\n    <div class=\\\"tag-list\\\">\\n      <% for(var i = 0; i < tags.length; ++i) { %>\\n      <a href=\\\"<%= tags[i].url %>\\\">\\n        <% if(tags[i].activate) { %>\\n        <div class=\\\"tag activate\\\"><%= tags[i].title %></div>\\n        <% } else { %>\\n        <div class=\\\"tag\\\"><%= tags[i].title %></div>\\n        <% } %>\\n      </a>\\n      <% } %>\\n    </div>\\n  </div>\\n</div>\\n\");\n\n//# sourceURL=webpack:///./src/content/plugins/6vdy/tags.ejs?");

/***/ }),

/***/ "./src/content/plugins/8080s.js":
/*!**************************************!*\
  !*** ./src/content/plugins/8080s.js ***!
  \**************************************/
/*! exports provided: checkURL, onStartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkURL\", function() { return checkURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onStartPage\", function() { return onStartPage; });\n/* harmony import */ var _ele_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ele.utils */ \"./src/content/ele.utils.js\");\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../log */ \"./src/content/log.js\");\n\n\n/**\n * checkURL\n * @param {string} strurl - url\n * @return {boolean} isMine - 是否需要我处理\n */\n\nfunction checkURL(strurl) {\n  if (strurl.indexOf('8080s.net') >= 0) {\n    return true;\n  }\n\n  return false;\n}\n/**\n * onStartPage\n */\n\n\nfunction onStartPage() {\n  Object(_log__WEBPACK_IMPORTED_MODULE_1__[\"loginfo\"])('--> 8080s.');\n  document.addEventListener('DOMNodeInserted', function () {\n    var lstdiv = document.getElementsByTagName('div');\n\n    for (var i = 0; i < lstdiv.length; ++i) {\n      if (Object(_ele_utils__WEBPACK_IMPORTED_MODULE_0__[\"checkElementStyle\"])(lstdiv[i], function (style) {\n        return style.position == 'fixed';\n      })) {\n        if (lstdiv[i].style.display != 'none') {\n          Object(_log__WEBPACK_IMPORTED_MODULE_1__[\"loginfo\"])('hide id: ' + lstdiv[i].id + ' class: ' + lstdiv[i].className);\n          lstdiv[i].style.display = 'none';\n        }\n      }\n    }\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/content/plugins/8080s.js?");

/***/ }),

/***/ "./src/content/plugins/88ys.js":
/*!*************************************!*\
  !*** ./src/content/plugins/88ys.js ***!
  \*************************************/
/*! exports provided: checkURL, onStartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkURL\", function() { return checkURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onStartPage\", function() { return onStartPage; });\n/* harmony import */ var _ele_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ele.utils */ \"./src/content/ele.utils.js\");\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../log */ \"./src/content/log.js\");\n\n\n/**\n * checkURL\n * @param {string} strurl - url\n * @return {boolean} isMine - 是否需要我处理\n */\n\nfunction checkURL(strurl) {\n  if (strurl.indexOf('88ys.com') >= 0) {\n    return true;\n  }\n\n  return false;\n}\n/**\n * onStartPage\n */\n\n\nfunction onStartPage() {\n  Object(_log__WEBPACK_IMPORTED_MODULE_1__[\"loginfo\"])('--> 88ys.');\n  document.addEventListener('DOMNodeInserted', function () {\n    var lstdiv = document.getElementsByTagName('div');\n\n    for (var i = 0; i < lstdiv.length; ++i) {\n      if (Object(_ele_utils__WEBPACK_IMPORTED_MODULE_0__[\"checkElementStyle\"])(lstdiv[i], function (style) {\n        return style.position == 'fixed';\n      })) {\n        if (lstdiv[i].style.display != 'none') {\n          Object(_log__WEBPACK_IMPORTED_MODULE_1__[\"loginfo\"])('hide id: ' + lstdiv[i].id + ' class: ' + lstdiv[i].className);\n          lstdiv[i].style.display = 'none';\n        }\n      }\n    }\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/content/plugins/88ys.js?");

/***/ }),

/***/ "./src/content/plugins/manhuagui.js":
/*!******************************************!*\
  !*** ./src/content/plugins/manhuagui.js ***!
  \******************************************/
/*! exports provided: checkURL, onStartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkURL\", function() { return checkURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onStartPage\", function() { return onStartPage; });\n/* harmony import */ var _ele_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ele.utils.js */ \"./src/content/ele.utils.js\");\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../log */ \"./src/content/log.js\");\n\n\n/**\n * checkURL\n * @param {string} strurl - url\n * @return {boolean} isMine - 是否需要我处理\n */\n\nfunction checkURL(strurl) {\n  if (strurl.indexOf('manhuagui.com') >= 0) {\n    return true;\n  }\n\n  return false;\n}\n/**\n * onStartPage\n */\n\n\nfunction onStartPage() {\n  Object(_log__WEBPACK_IMPORTED_MODULE_1__[\"loginfo\"])('> manhuagui.');\n  document.addEventListener('DOMNodeInserted', function () {\n    var lstdiv = document.getElementsByTagName('div');\n\n    for (var i = 0; i < lstdiv.length; ++i) {\n      if (lstdiv[i].id.indexOf('_') == 0 || lstdiv[i].id.indexOf('_ad_') >= 0) {\n        Object(_ele_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"hideElement\"])(lstdiv[i]);\n      } else if (lstdiv[i].className == 'intro_r') {\n        Object(_ele_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"hideElement\"])(lstdiv[i]);\n      }\n    }\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/content/plugins/manhuagui.js?");

/***/ }),

/***/ "./src/content/plugins/yxdm.js":
/*!*************************************!*\
  !*** ./src/content/plugins/yxdm.js ***!
  \*************************************/
/*! exports provided: checkURL, onStartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkURL\", function() { return checkURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onStartPage\", function() { return onStartPage; });\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../log */ \"./src/content/log.js\");\n\n/**\n * checkURL\n * @param {string} strurl - url\n * @return {boolean} isMine - 是否需要我处理\n */\n\nfunction checkURL(strurl) {\n  if (strurl.indexOf('yxdm.tv') >= 0) {\n    return true;\n  }\n\n  return false;\n}\n/**\n * onStartPage\n */\n\n\nfunction onStartPage() {\n  Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"loginfo\"])('> yxdm.');\n  document.addEventListener('DOMNodeInserted', function () {\n    var lstdiv = document.getElementsByTagName('div');\n\n    for (var i = 0; i < lstdiv.length; ++i) {\n      if (lstdiv[i].style.position == 'fixed') {\n        if (lstdiv[i].style.display != 'none') {\n          Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"loginfo\"])('hide ' + lstdiv[i].id);\n          lstdiv[i].style.display = 'none';\n        }\n      } else if (lstdiv[i].id == 'game10' || lstdiv[i].id == 'game9' || lstdiv[i].className.indexOf('adv') >= 0) {\n        if (lstdiv[i].style.display != 'none') {\n          Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"loginfo\"])('hide ' + lstdiv[i].id);\n          lstdiv[i].style.display = 'none';\n        }\n      }\n    }\n  });\n  document.addEventListener('DOMAttrModified', function () {\n    var lstdiv = document.getElementsByTagName('div');\n\n    for (var i = 0; i < lstdiv.length; ++i) {\n      if (lstdiv[i].style.position == 'fixed') {\n        if (lstdiv[i].style.display != 'none') {\n          Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"loginfo\"])('hide ' + lstdiv[i].id);\n          lstdiv[i].style.display = 'none';\n        }\n      } else if (lstdiv[i].id == 'game10' || lstdiv[i].id == 'game9' || lstdiv[i].className.indexOf('adv') >= 0) {\n        if (lstdiv[i].style.display != 'none') {\n          Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"loginfo\"])('hide ' + lstdiv[i].id);\n          lstdiv[i].style.display = 'none';\n        }\n      }\n    }\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/content/plugins/yxdm.js?");

/***/ }),

/***/ "./src/content/task.utils.js":
/*!***********************************!*\
  !*** ./src/content/task.utils.js ***!
  \***********************************/
/*! exports provided: startTask, setTaskOnBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startTask\", function() { return startTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTaskOnBody\", function() { return setTaskOnBody; });\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ \"./src/content/log.js\");\n\n/**\n * startTask - 启动一个任务，在任务完成前，会间隔时间调用，任务完成后终止timer\n * @param {int} timer - ms\n * @param {function} onTask - bool onTask()\n */\n\nfunction startTask(timer, onTask) {\n  var curindex = 0;\n  var timerid = setInterval(function () {\n    ++curindex;\n    Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"logdebug\"])('startTask ' + timer + ' ' + curindex);\n\n    if (onTask()) {\n      Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"logdebug\"])('startTask end ' + timer + ' ' + timerid);\n      clearInterval(timerid);\n    }\n  }, timer);\n}\n/**\n * setTaskOnBody - 设置一个body初始化好了立即调用，且只调用一次的task\n * @param {int} timer - ms\n * @param {function} onBody - void onBody()\n */\n\n\nfunction setTaskOnBody(timer, onBody) {\n  Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"logdebug\"])('setTaskOnBody ' + timer);\n  startTask(timer, function () {\n    Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"logdebug\"])('setTaskOnBody wait body ' + document.getElementsByTagName('body').length);\n\n    if (document.getElementsByTagName('body').length > 0) {\n      onBody();\n      return true;\n    }\n\n    return false;\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/content/task.utils.js?");

/***/ }),

/***/ "./src/content/wkwebview.index.js":
/*!****************************************!*\
  !*** ./src/content/wkwebview.index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/content/main.js\");\n/* harmony import */ var _plugin_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin.utils */ \"./src/content/plugin.utils.js\");\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ \"./src/content/log.js\");\n/* harmony import */ var _css_adarender_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/adarender.css */ \"./src/content/css/adarender.css\");\n/* harmony import */ var _css_adarender_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_adarender_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_imgwrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/imgwrap.css */ \"./src/content/css/imgwrap.css\");\n/* harmony import */ var _css_imgwrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_imgwrap_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_tags_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/tags.css */ \"./src/content/css/tags.css\");\n/* harmony import */ var _css_tags_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_tags_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nwindow.drakecore = {\n  plugins: _main__WEBPACK_IMPORTED_MODULE_0__[\"plugins\"],\n  getLogBuf: _log__WEBPACK_IMPORTED_MODULE_2__[\"getLogBuf\"],\n  loginfo: _log__WEBPACK_IMPORTED_MODULE_2__[\"loginfo\"],\n  logdebug: _log__WEBPACK_IMPORTED_MODULE_2__[\"logdebug\"],\n  VERSION: \"0.2.37\"\n};\nObject(_log__WEBPACK_IMPORTED_MODULE_2__[\"setLogLevel\"])(_log__WEBPACK_IMPORTED_MODULE_2__[\"LOG_LEVEL_DEBUG\"]);\nObject(_log__WEBPACK_IMPORTED_MODULE_2__[\"setCacheLog\"])(true);\n_main__WEBPACK_IMPORTED_MODULE_0__[\"plugins\"].p6vdy.onStartPage({\n  mode: _plugin_utils__WEBPACK_IMPORTED_MODULE_1__[\"PLUGIN_MODE_MO\"],\n  isChgPage: false\n});\nObject(_log__WEBPACK_IMPORTED_MODULE_2__[\"logdebug\"])('run ok!');\n\n//# sourceURL=webpack:///./src/content/wkwebview.index.js?");

/***/ })

/******/ });