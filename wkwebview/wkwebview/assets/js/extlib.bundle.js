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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content/libindex.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content/css/adarender.css":
/*!***************************************!*\
  !*** ./src/content/css/adarender.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/content/css/adarender.css?");

/***/ }),

/***/ "./src/content/css/imgwrap.css":
/*!*************************************!*\
  !*** ./src/content/css/imgwrap.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/content/css/imgwrap.css?");

/***/ }),

/***/ "./src/content/css/tags.css":
/*!**********************************!*\
  !*** ./src/content/css/tags.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/content/css/tags.css?");

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

/***/ "./src/content/libindex.js":
/*!*********************************!*\
  !*** ./src/content/libindex.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/content/main.js\");\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ \"./src/content/log.js\");\n/* harmony import */ var _css_adarender_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/adarender.css */ \"./src/content/css/adarender.css\");\n/* harmony import */ var _css_adarender_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_adarender_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_imgwrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/imgwrap.css */ \"./src/content/css/imgwrap.css\");\n/* harmony import */ var _css_imgwrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_imgwrap_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_tags_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/tags.css */ \"./src/content/css/tags.css\");\n/* harmony import */ var _css_tags_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_tags_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nwindow.drakecore = {\n  plugins: _main__WEBPACK_IMPORTED_MODULE_0__[\"plugins\"],\n  getLogBuf: _log__WEBPACK_IMPORTED_MODULE_1__[\"getLogBuf\"],\n  loginfo: _log__WEBPACK_IMPORTED_MODULE_1__[\"loginfo\"],\n  logdebug: _log__WEBPACK_IMPORTED_MODULE_1__[\"logdebug\"]\n};\nObject(_log__WEBPACK_IMPORTED_MODULE_1__[\"setLogLevel\"])(_log__WEBPACK_IMPORTED_MODULE_1__[\"LOG_LEVEL_DEBUG\"]);\nObject(_log__WEBPACK_IMPORTED_MODULE_1__[\"setCacheLog\"])(true);\n_main__WEBPACK_IMPORTED_MODULE_0__[\"plugins\"].p6vdy.onStartPage();\nObject(_log__WEBPACK_IMPORTED_MODULE_1__[\"logdebug\"])('run ok!');\n\n//# sourceURL=webpack:///./src/content/libindex.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"plugins\", function() { return plugins; });\n/* harmony import */ var _plugins_6vdy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/6vdy */ \"./src/content/plugins/6vdy.js\");\n/* harmony import */ var _plugins_manhuagui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/manhuagui */ \"./src/content/plugins/manhuagui.js\");\n/* harmony import */ var _plugins_yxdm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/yxdm */ \"./src/content/plugins/yxdm.js\");\n/* harmony import */ var _plugins_8080s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/8080s */ \"./src/content/plugins/8080s.js\");\n/* harmony import */ var _plugins_88ys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/88ys */ \"./src/content/plugins/88ys.js\");\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log */ \"./src/content/log.js\");\n\n\n\n\n\n\nvar lstPlugins = [_plugins_6vdy__WEBPACK_IMPORTED_MODULE_0__, _plugins_manhuagui__WEBPACK_IMPORTED_MODULE_1__, _plugins_yxdm__WEBPACK_IMPORTED_MODULE_2__, _plugins_8080s__WEBPACK_IMPORTED_MODULE_3__, _plugins_88ys__WEBPACK_IMPORTED_MODULE_4__];\nvar plugins = {\n  p6vdy: _plugins_6vdy__WEBPACK_IMPORTED_MODULE_0__\n};\n/**\n * start - 页面启动时执行\n */\n\nfunction start() {\n  Object(_log__WEBPACK_IMPORTED_MODULE_5__[\"loginfo\"])(\"0.2.32\" + ' starting...');\n\n  for (var i = 0; i < lstPlugins.length; ++i) {\n    if (lstPlugins[i].checkURL(window.origin)) {\n      lstPlugins[i].onStartPage();\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/content/main.js?");

/***/ }),

/***/ "./src/content/plugins/6vdy.js":
/*!*************************************!*\
  !*** ./src/content/plugins/6vdy.js ***!
  \*************************************/
/*! exports provided: checkURL, onStartPage, onEleChg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkURL\", function() { return checkURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onStartPage\", function() { return onStartPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onEleChg\", function() { return onEleChg; });\n/* harmony import */ var _6vdy_main_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./6vdy/main.ejs */ \"./src/content/plugins/6vdy/main.ejs\");\n/* harmony import */ var _6vdy_tags_ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./6vdy/tags.ejs */ \"./src/content/plugins/6vdy/tags.ejs\");\n/* harmony import */ var _ele_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ele.utils.js */ \"./src/content/ele.utils.js\");\n/* harmony import */ var _task_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task.utils.js */ \"./src/content/task.utils.js\");\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../log */ \"./src/content/log.js\");\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\nvar ceMain = new _ele_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"ChangeEle\"](_6vdy_main_ejs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nvar ceTags = new _ele_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"ChangeEle\"](_6vdy_tags_ejs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/**\n * checkURL\n * @param {string} strurl - url\n * @return {boolean} isMine - 是否需要我处理\n */\n\nfunction checkURL(strurl) {\n  if (strurl.indexOf('6vdy.org') >= 0 || strurl.indexOf('hao6v.com') >= 0 || strurl.indexOf('hao6v.net') >= 0 || strurl.indexOf('66s.cc') >= 0) {\n    return true;\n  }\n\n  return false;\n}\n/**\n * refactorPage - 页面加载完成后调用，改变页面布局\n */\n\n\nfunction refactorPage() {\n  {\n    var mm = document.getElementsByClassName('mainmenus container');\n    var lsta = undefined;\n\n    if (mm.length > 0) {\n      lsta = mm[0].getElementsByTagName('a');\n    }\n\n    ceTags.check(undefined, function () {\n      return mm && lsta && lsta.length > 0;\n    }, function () {\n      var curtag = '首页';\n      var bf = document.getElementsByClassName('bulletin fourfifth');\n\n      if (bf.length > 0) {\n        var lsta2 = bf[0].getElementsByTagName('a');\n\n        if (lsta2.length > 0) {\n          curtag = lsta2[lsta2.length - 1].text;\n        }\n      }\n\n      var obj = {\n        tags: []\n      };\n\n      for (var i = 0; i < lsta.length; ++i) {\n        if (lsta[i].text == '最新50部' || lsta[i].text == '旧版6v') {\n          continue;\n        }\n\n        var ci = {\n          title: lsta[i].text,\n          url: lsta[i].href,\n          activate: lsta[i].text == curtag\n        };\n        obj.tags.push(ci);\n      }\n\n      return obj;\n    }, function (ret) {\n      mm[0].style.position = 'static';\n      mm[0].innerHTML = ret;\n      mm[0].style.background = 'none'; // mm[0].classList.remove('mainmenus');\n    });\n  }\n  {\n    var mc = document.getElementById('post_container');\n    var cc = undefined;\n    var lstc = document.getElementsByClassName('container');\n\n    for (var i = 0; i < lstc.length; ++i) {\n      if (lstc[i].className == 'container') {\n        cc = lstc[i];\n      }\n    }\n\n    ceMain.check(undefined, function () {\n      return mc && cc;\n    }, function () {\n      var lstph = mc.getElementsByClassName('post_hover');\n      var obj = {\n        items: []\n      };\n\n      for (var _i = 0; _i < lstph.length; ++_i) {\n        var _lsta = lstph[_i].getElementsByTagName('a');\n\n        var lst = lstph[_i].getElementsByTagName('img');\n\n        var ci = {\n          title: lst[0].alt,\n          img: lst[0].src,\n          isnew: false,\n          score: '',\n          url: _lsta[0].href\n        };\n        obj.items.push(ci);\n      }\n\n      return obj;\n    }, function (ret) {\n      cc.innerHTML = ret;\n    });\n  }\n  {\n    var lsteles = document.getElementsByClassName('pagination');\n\n    if (lsteles.length > 0) {\n      lsteles[0].style['text-align'] = 'center';\n    }\n  }\n  Object(_ele_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"showLoading\"])(false);\n}\n/**\n * onEleChg - element增减的时候触发\n */\n\n\nfunction onEleChg() {\n  var lstdiv = document.getElementsByTagName('div');\n\n  for (var i = 0; i < lstdiv.length; ++i) {\n    if (lstdiv[i].style.position == 'fixed') {\n      Object(_ele_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"hideElement\"])(lstdiv[i]);\n    } else if (lstdiv[i].id == lstdiv[i].className && lstdiv[i].id.indexOf('l') == 0) {\n      Object(_ele_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"hideElement\"])(lstdiv[i]);\n    } else if (lstdiv[i].id == 'a960') {\n      Object(_ele_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"hideElement\"])(lstdiv[i]);\n    }\n  }\n}\n/**\n * onBody - body初始化好了调用，只会调用一次\n */\n\n\nfunction onBody() {\n  Object(_log__WEBPACK_IMPORTED_MODULE_4__[\"logdebug\"])('onBody');\n  Object(_ele_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"showLoading\"])(true);\n  Object(_log__WEBPACK_IMPORTED_MODULE_4__[\"logdebug\"])('showLoading');\n  var lstbody = document.getElementsByTagName('body');\n  var observer = new MutationObserver(function (mutationsList, observer) {\n    Object(_log__WEBPACK_IMPORTED_MODULE_4__[\"logdebug\"])('MutationObserver.callback ' + mutationsList.length); // 这里没必要每个改变都遍历节点，只要判断出有变化，最后遍历一次即可\n\n    var islistchged = false;\n\n    var _iterator = _createForOfIteratorHelper(mutationsList),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var mutation = _step.value;\n\n        if (mutation.type === 'childList') {\n          islistchged = true;\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    if (islistchged) {\n      Object(_log__WEBPACK_IMPORTED_MODULE_4__[\"logdebug\"])('islistchged ' + mutationsList.length);\n      onEleChg();\n    }\n  });\n  Object(_log__WEBPACK_IMPORTED_MODULE_4__[\"logdebug\"])('new MutationObserver');\n  observer.observe(lstbody[0], {\n    childList: true,\n    subtree: true\n  });\n  Object(_log__WEBPACK_IMPORTED_MODULE_4__[\"logdebug\"])('onBody ok.');\n}\n/**\n * onStartPage\n */\n\n\nfunction onStartPage() {\n  // showLoading(true);\n  Object(_log__WEBPACK_IMPORTED_MODULE_4__[\"loginfo\"])('--> 6vdy.'); // logex(document.getElementsByTagName('body').length);\n\n  Object(_task_utils_js__WEBPACK_IMPORTED_MODULE_3__[\"setTaskOnBody\"])(100, onBody); // document.addEventListener('DOMNodeInserted', () => {\n  //   console.log(PROJNAME + ' on DOMNodeInserted');\n  //   const lstdiv = document.getElementsByTagName('div');\n  //   for (let i = 0; i < lstdiv.length; ++i) {\n  //     if (lstdiv[i].style.position == 'fixed') {\n  //       if (lstdiv[i].style.display != 'none') {\n  //         console.log(PROJNAME + ' hide ' + lstdiv[i].id);\n  //         lstdiv[i].style.display = 'none';\n  //       }\n  //     } else if (\n  //       lstdiv[i].id == lstdiv[i].className &&\n  //       lstdiv[i].id.indexOf('l') == 0\n  //     ) {\n  //       if (lstdiv[i].style.display != 'none') {\n  //         console.log(PROJNAME + ' hide ' + lstdiv[i].id);\n  //         lstdiv[i].style.display = 'none';\n  //       }\n  //     } else if (lstdiv[i].id == 'a960') {\n  //       if (lstdiv[i].style.display != 'none') {\n  //         console.log(PROJNAME + ' hide ' + lstdiv[i].id);\n  //         lstdiv[i].style.display = 'none';\n  //       }\n  //     }\n  //   }\n  // });\n\n  document.addEventListener('DOMContentLoaded', function () {\n    Object(_log__WEBPACK_IMPORTED_MODULE_4__[\"loginfo\"])('on DOMContentLoaded');\n    refactorPage();\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/content/plugins/6vdy.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startTask\", function() { return startTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTaskOnBody\", function() { return setTaskOnBody; });\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ \"./src/content/log.js\");\n\n/**\n * startTask - 启动一个任务，在任务完成前，会间隔时间调用，任务完成后终止timer\n * @param {int} timer - ms\n * @param {function} onTask - bool onTask()\n */\n\nfunction startTask(timer, onTask) {\n  var timerid = setInterval(function () {\n    Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"logdebug\"])('startTask ' + timer);\n\n    if (onTask()) {\n      Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"logdebug\"])('startTask end ' + timer + ' ' + timerid);\n      clearInterval(timerid);\n    }\n  }, timer);\n}\n/**\n * setTaskOnBody - 设置一个body初始化好了立即调用，且只调用一次的task\n * @param {int} timer - ms\n * @param {function} onBody - void onBody()\n */\n\n\nfunction setTaskOnBody(timer, onBody) {\n  Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"logdebug\"])('setTaskOnBody ' + timer);\n  startTask(timer, function () {\n    Object(_log__WEBPACK_IMPORTED_MODULE_0__[\"logdebug\"])('setTaskOnBody wait body ' + document.getElementsByTagName('body').length);\n\n    if (document.getElementsByTagName('body').length > 0) {\n      onBody();\n      return true;\n    }\n\n    return false;\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/content/task.utils.js?");

/***/ })

/******/ });