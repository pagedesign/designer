/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/Demo.js":
/*!**************************!*\
  !*** ./examples/Demo.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DemoList = _interopRequireDefault(__webpack_require__(/*! ./DemoList */ "./examples/DemoList.js"));

var Demo =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Demo, _Component);

  function Demo() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      current: _DemoList.default[0]
    });
    return _this;
  }

  (0, _createClass2.default)(Demo, [{
    key: "onDemoChange",
    value: function onDemoChange(item, e) {
      this.setState({
        current: item
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var current = this.state.current;
      return _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement("div", {
        className: "slider"
      }, _DemoList.default.map(function (item, i) {
        return _react.default.createElement("div", {
          className: current === item ? 'active' : '',
          onClick: _this2.onDemoChange.bind(_this2, item)
        }, item.label);
      })), _react.default.createElement("div", {
        className: "content"
      }, current ? _react.default.createElement(current.component, null) : null));
    }
  }]);
  return Demo;
}(_react.Component);

exports.default = Demo;

/***/ }),

/***/ "./examples/DemoList.js":
/*!******************************!*\
  !*** ./examples/DemoList.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _demo = _interopRequireDefault(__webpack_require__(/*! ./demos/demo1 */ "./examples/demos/demo1.js"));

var _Demo = _interopRequireDefault(__webpack_require__(/*! ./demos/Demo2 */ "./examples/demos/Demo2.js"));

var _Demo2 = _interopRequireDefault(__webpack_require__(/*! ./demos/Demo3 */ "./examples/demos/Demo3.js"));

// import Demo4 from './demos/Demo4';
var _default = [// {
//     label: '基本功能',
//     component: Demo1
// },
{
  label: '基本功能',
  component: _Demo.default
}, {
  label: '布局',
  component: _Demo2.default
}];
exports.default = _default;

/***/ }),

/***/ "./examples/demos/Demo2.js":
/*!*********************************!*\
  !*** ./examples/demos/Demo2.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _now = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _DragWidgetsPanel = _interopRequireDefault(__webpack_require__(/*! ../../src/components/DragWidgetsPanel */ "./src/components/DragWidgetsPanel/index.js"));

var _chart = _interopRequireDefault(__webpack_require__(/*! ../style/images/chart.png */ "./examples/style/images/chart.png"));

var _DndContext = _interopRequireWildcard(__webpack_require__(/*! ../../src/components/Dnd/DndContext */ "./src/components/Dnd/DndContext.js"));

var _LayoutContext = _interopRequireWildcard(__webpack_require__(/*! ../../src/components/LayoutContext */ "./src/components/LayoutContext/index.js"));

var _DropRowContainer = _interopRequireDefault(__webpack_require__(/*! ../../src/components/Dnd/DropRowContainer */ "./src/components/Dnd/DropRowContainer.js"));

var List = [{
  icon: _chart.default,
  iconCls: "a",
  dndScope: 'widgets',
  label: "折线图"
}, {
  icon: _chart.default,
  dndScope: 'widgets',
  label: "柱状图"
}, {
  icon: _chart.default,
  dndScope: 'widgets',
  label: "饼图"
}, {
  icon: _chart.default,
  dndScope: 'widgets',
  label: "树图"
}, {
  icon: _chart.default,
  dndScope: 'widgets2',
  label: "雷达图"
}, {
  icon: _chart.default,
  dndScope: 'widgets2',
  label: "仪表盘"
}];

var DEMO =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DEMO, _Component);

  function DEMO() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DEMO);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DEMO)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      items: [],
      layoutState: (0, _LayoutContext.initState)()
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "dnd", (0, _DndContext.getDefaultContext)());
    return _this;
  }

  (0, _createClass2.default)(DEMO, [{
    key: "addItem",
    value: function addItem(text) {
      var items = this.state.items;
      items.push({
        id: (0, _now.default)().toString(16),
        label: text
      });
      this.setState({
        items: items
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(id) {
      var items = this.state.items;
      var idx = items.map(function (item) {
        return item.id;
      }).indexOf(id);
      items.splice(idx, 1);
      this.setState({
        items: items
      });
    } // componentDidMount() {
    //     const self = this;
    //     const dom = ReactDOM.findDOMNode(this);
    //     $(".widgets-drop-container", dom).droppable({
    //         accept: '.widgets-item',
    //         scope: "widgets",
    //         greedy: true, 
    //         activate(event, ui) {
    //             console.log('activate')
    //             $(".widgets-drop-container", dom).css({
    //                 border: "1px dashed #ccc",
    //                 background: "#f2f2f2"
    //             });
    //         },
    //         create() {
    //             console.log(1234)
    //         },
    //         drop(event, ui) {
    //             console.log(event.pageX, event.pageY, ui)
    //             $(".widgets-drop-container", dom).css({
    //                 background: "#f2f2f2",
    //                 border: "1px dashed transparent",
    //             });
    //             self.addItem(ui.draggable.text());
    //         },
    //         over() {
    //             $(".widgets-drop-container", dom).css({
    //                 background: "red",
    //             });
    //         },
    //         out() {
    //             $(".widgets-drop-container", dom).css({
    //                 background: "#f2f2f2",
    //             });
    //         }
    //     });
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.state.items;
      return _react.default.createElement(_LayoutContext.default.Provider, {
        value: this.state.layoutState
      }, _react.default.createElement(_DndContext.default.Provider, {
        value: this.dnd
      }, _react.default.createElement("div", null, _react.default.createElement(_DndContext.default.Consumer, null, function (dnd) {
        return _react.default.createElement(_DragWidgetsPanel.default, {
          dnd: dnd,
          items: List
        });
      }), _react.default.createElement("div", null, _react.default.createElement("br", null), _react.default.createElement(_DndContext.default.Consumer, null, function (dnd) {
        return _react.default.createElement(_DropRowContainer.default, {
          accept: "widgets",
          dnd: dnd,
          style: {
            minHeight: 100
          }
        }, items.map(function (item, i) {
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
            id: item.id,
            className: "widgets-item-preview",
            onDoubleClick: function onDoubleClick() {
              return _this2.removeItem(item.id);
            }
          }, item.label), items.length - 1 !== i ? _react.default.createElement("div", {
            className: "split-line"
          }) : null);
        }));
      }), _react.default.createElement("br", null), _react.default.createElement(_DndContext.default.Consumer, null, function (dnd) {
        return _react.default.createElement(_DropRowContainer.default, {
          accept: "widgets2",
          dnd: dnd,
          style: {
            minHeight: 100
          }
        }, items.map(function (item, i) {
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
            id: item.id,
            className: "widgets-item-preview",
            onDoubleClick: function onDoubleClick() {
              return _this2.removeItem(item.id);
            }
          }, item.label), items.length - 1 !== i ? _react.default.createElement("div", {
            className: "split-line"
          }) : null);
        }));
      })))));
    }
  }]);
  return DEMO;
}(_react.Component);

exports.default = DEMO;

/***/ }),

/***/ "./examples/demos/Demo3.js":
/*!*********************************!*\
  !*** ./examples/demos/Demo3.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _src = _interopRequireDefault(__webpack_require__(/*! ../../src */ "./src/index.js"));

var DEMO =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DEMO, _Component);

  function DEMO() {
    (0, _classCallCheck2.default)(this, DEMO);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DEMO).apply(this, arguments));
  }

  (0, _createClass2.default)(DEMO, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_src.default, null);
    }
  }]);
  return DEMO;
}(_react.Component);

exports.default = DEMO;

/***/ }),

/***/ "./examples/demos/demo1.js":
/*!*********************************!*\
  !*** ./examples/demos/demo1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _now = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _DragWidgetsPanel = _interopRequireDefault(__webpack_require__(/*! ../../src/components/DragWidgetsPanel */ "./src/components/DragWidgetsPanel/index.js"));

var _chart = _interopRequireDefault(__webpack_require__(/*! ../style/images/chart.png */ "./examples/style/images/chart.png"));

var List = [{
  icon: _chart.default,
  iconCls: "a",
  label: "折线图"
}, {
  icon: _chart.default,
  label: "柱状图"
}, {
  icon: _chart.default,
  label: "饼图"
}, {
  icon: _chart.default,
  label: "树图"
}, {
  icon: _chart.default,
  label: "雷达图"
}, {
  icon: _chart.default,
  label: "仪表盘"
}];

var DEMO =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DEMO, _Component);

  function DEMO() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DEMO);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DEMO)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      items: []
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "_idx", 1);
    return _this;
  }

  (0, _createClass2.default)(DEMO, [{
    key: "addItem",
    value: function addItem(text) {
      var items = this.state.items;
      items.push({
        id: (0, _now.default)().toString(16),
        label: text
      });
      this.setState({
        items: items
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(id) {
      var items = this.state.items;
      var idx = items.map(function (item) {
        return item.id;
      }).indexOf(id);
      items.splice(idx, 1);
      this.setState({
        items: items
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var self = this;

      var dom = _reactDom.default.findDOMNode(this);

      setInterval(function () {
        return _this2.forceUpdate();
      }, 1000);
      $(".widgets-drop-container", dom).droppable({
        accept: '.widgets-item',
        scope: "widgets",
        greedy: true,
        //父元素不接收drop
        activate: function activate(event, ui) {
          console.log('activate');
          $(".widgets-drop-container", dom).css({
            border: "1px dashed #ccc",
            background: "#f2f2f2"
          });
        },
        create: function create() {
          console.log(1234);
        },
        drop: function drop(event, ui) {
          console.log(event.pageX, event.pageY, ui);
          $(".widgets-drop-container", dom).css({
            background: "#f2f2f2",
            border: "1px dashed transparent"
          });
          self.addItem(ui.draggable.text());
        },
        over: function over() {
          $(".widgets-drop-container", dom).css({
            background: "red"
          });
        },
        out: function out() {
          $(".widgets-drop-container", dom).css({
            background: "#f2f2f2"
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var items = this.state.items;
      return _react.default.createElement("div", null, _react.default.createElement(_DragWidgetsPanel.default, {
        items: List
      }), _react.default.createElement("div", null, "drop", this._idx++, _react.default.createElement("div", {
        className: "widgets-drop-container",
        style: {
          minHeight: 200
        }
      }, items.map(function (item, i) {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          id: item.id,
          className: "widgets-item-preview",
          onDoubleClick: function onDoubleClick() {
            return _this3.removeItem(item.id);
          }
        }, item.label), items.length - 1 !== i ? _react.default.createElement("div", {
          className: "split-line"
        }) : null);
      }))));
    }
  }]);
  return DEMO;
}(_react.Component);

exports.default = DEMO;

/***/ }),

/***/ "./examples/index.js":
/*!***************************!*\
  !*** ./examples/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

__webpack_require__(/*! ./style/index.scss */ "./examples/style/index.scss");

__webpack_require__(/*! ../src/style/index.scss */ "./src/style/index.scss");

var _Demo = _interopRequireDefault(__webpack_require__(/*! ./Demo */ "./examples/Demo.js"));

_reactDom.default.render(_react.default.createElement(_Demo.default, null), demo);

/***/ }),

/***/ "./examples/style/images/chart.png":
/*!*****************************************!*\
  !*** ./examples/style/images/chart.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABi0lEQVRYR+2Wz0rDQBDGv4mmJUWUgJCH8CKCFy/Fgye9FkHwWmihbEJfYH0Buwu9CR4EL4ooiIggRXwC8SG8th4LtiOBRmJbS9qkf8DkmMzO95tvNrtDmPNDc9ZHCrB4DgghukREzJzXWr9Oe48MOOC6LvdEd5VSLylAXAcKhcKS4zhOvV7/GJZrqi2QUi43m80rInpXSsmZAvjirVbrDsA+gJNEATzPswAc12q1MwDBpv0psE/cf58cQLlcXjFN84mIdgBcKqWOwxDFYtHM5XK3vcoDqGQAeuINItoOMjPztW3bR1LKL1/csqwHItrr63d8gEqlsmoYxnNYPCTymMlkDtvt9s0Q8fgtKJVKdjabbQDYHPFbfgJY++P75A5Uq9X1Tqfjn4gbMc6EyQGEEPdEdBBDPF4LXNf1q8+nAP/XASHEKRFtxXGAmc+11hczvYyiAo+6jj0Ab1ETRYlj5m7/mDcKIErOsWOUUr80BwCCoXTszBEWMDNrrY1w6OKN5REKSTQkdWDuDnwDRmvrITD3Zz4AAAAASUVORK5CYII="

/***/ }),

/***/ "./examples/style/index.scss":
/*!***********************************!*\
  !*** ./examples/style/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Dnd/DndContext.js":
/*!******************************************!*\
  !*** ./src/components/Dnd/DndContext.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getDefaultContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

/**
 * 页面布局设计器-拖放控件上下文
 * author: nobo.zhou
 * date: 2018.12.17
 */
function random() {
  return 'dnd_' + Math.random().toString(16).slice(3, 8);
}

var getDefaultContext = function getDefaultContext() {
  return {
    helperAppendTo: document.body,
    dndClassName: random(),
    currentDndScope: null,
    helper: null,
    dragItem: null,
    //当前拖拽对象
    dropData: null,
    // drop项的元素
    dropItems: [],
    // dropContainers: [],
    addDropItem: function addDropItem(dom) {
      this.dropItems.push(dom);
    },
    removeDropItem: function removeDropItem(dom) {
      var idx = this.dropItems.map(function (item) {
        return item.id;
      }).indexOf(dom);

      if (idx > -1) {
        this.dropItems.splice(idx, 1);
      }
    },
    getDropItems: function getDropItems() {
      return this.dropItems;
    }
  };
};

exports.getDefaultContext = getDefaultContext;

var _default = _react.default.createContext(getDefaultContext());

exports.default = _default;

/***/ }),

/***/ "./src/components/Dnd/Drag.js":
/*!************************************!*\
  !*** ./src/components/Dnd/Drag.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

/**
 * 页面布局设计器-拖拽组件
 * author: nobo.zhou
 * date: 2018.12.09
 */
var noop = function noop() {};

var Drag =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Drag, _React$Component);

  function Drag() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Drag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Drag)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDragStart", function (event, ui) {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDrag", function (event, ui) {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDragStop", function (event, ui) {});
    return _this;
  }

  (0, _createClass2.default)(Drag, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          onDragStart = _this$props.onDragStart,
          onDrag = _this$props.onDrag,
          onDragStop = _this$props.onDragStop;

      var dom = _reactDom.default.findDOMNode(this);

      $(dom).draggable({
        helper: "clone",
        addClasses: false,
        start: this.onDragStart,
        drag: this.onDrag,
        stop: this.onDragStop
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var dom = _reactDom.default.findDOMNode(this);

      $(dom).draggable("destroy");
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.Children.only(this.props.children);
    }
  }]);
  return Drag;
}(_react.default.Component);

exports.default = Drag;
(0, _defineProperty2.default)(Drag, "defaultProps", {
  onDragStart: noop,
  onDrag: noop,
  onDragStop: noop
});

/***/ }),

/***/ "./src/components/Dnd/DragItem.js":
/*!****************************************!*\
  !*** ./src/components/Dnd/DragItem.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

/**
 * 页面布局设计器-拖拽组件
 * author: nobo.zhou
 * date: 2018.12.09
 */
var noop = function noop() {};

var coords = [];
var dropPointer = null;

var Drag =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Drag, _React$Component);

  function Drag() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Drag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Drag)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDragStart", function (event, ui) {
      var _this$props = _this.props,
          dnd = _this$props.dnd,
          item = _this$props.item;
      dnd.dragItem = item;
      dnd.currentDndScope = item.dndScope;
      var dropItems = dnd.getDropItems();

      if (dropItems.length) {
        dropItems.forEach(function (item) {
          var dom = document.getElementById(item.id);
          var pos = $(dom).offset();
          coords.push({
            x: pos.left,
            y: pos.top,
            width: dom.offsetWidth,
            height: dom.offsetHeight,
            item: item
          });
          dropPointer = $('<div class="dorp-pointer" />');
          dropPointer.hide();
          $(dnd.helperAppendTo).append(dropPointer);
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDrag", function (event, ui) {
      var _this$props2 = _this.props,
          dnd = _this$props2.dnd,
          item = _this$props2.item;
      var pageX = event.pageX;
      var pageY = event.pageY; //在区域内

      var curr = null;
      coords.forEach(function (coord) {
        if (curr) return;

        if (pageX >= coord.x && pageX <= coord.x + coord.width && pageY >= coord.y && pageY <= coord.y + coord.height) {
          curr = (0, _objectSpread2.default)({}, coord, {
            dir: pageX >= coord.x + coord.width / 2 ? 'after' : 'before'
          });
        }
      });

      if (curr) {
        dropPointer.show().css({
          height: curr.height,
          left: curr.dir == 'before' ? curr.x : curr.x + curr.width,
          top: curr.y
        });
      }

      dnd.dropData = curr;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDragStop", function (event, ui) {
      var dnd = _this.props.dnd;
      dnd.dragItem = null;
      dnd.currentDndScope = null;
      coords = [];
      if (dropPointer) dropPointer.remove();
    });
    return _this;
  }

  (0, _createClass2.default)(Drag, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          onDragStart = _this$props3.onDragStart,
          onDrag = _this$props3.onDrag,
          onDragStop = _this$props3.onDragStop;

      var dom = _reactDom.default.findDOMNode(this);

      $(dom).draggable({
        helper: "clone",
        addClasses: false,
        start: this.onDragStart,
        drag: this.onDrag,
        stop: this.onDragStop
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var dom = _reactDom.default.findDOMNode(this);

      $(dom).draggable("destroy");
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.Children.only(this.props.children);
    }
  }]);
  return Drag;
}(_react.default.Component);

exports.default = Drag;
(0, _defineProperty2.default)(Drag, "propTypes", {
  item: _propTypes.default.object.isRequired
});
(0, _defineProperty2.default)(Drag, "defaultProps", {
  item: null,
  onDragStart: noop,
  onDrag: noop,
  onDragStop: noop
});

/***/ }),

/***/ "./src/components/Dnd/DropContainer.js":
/*!*********************************************!*\
  !*** ./src/components/Dnd/DropContainer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

/**
 * 页面布局设计器-拖放组件容器
 * author: nobo.zhou
 * date: 2018.12.09
 */
var noop = function noop() {};

var DropContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DropContainer, _React$Component);

  function DropContainer() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DropContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DropContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "isAccept", function () {
      var _this$props = _this.props,
          accept = _this$props.accept,
          dnd = _this$props.dnd;
      if (accept === '*') return true;
      var accepts = accept.split(',');

      if (accepts.indexOf(dnd.currentDndScope) > -1) {
        return true;
      }

      return false;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDropActivate", function (event, ui) {
      var onDropActivate = _this.props.onDropActivate;

      var dom = _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

      if (_this.isAccept()) {
        $(dom).addClass("active");
      }

      if (onDropActivate) {
        onDropActivate(event, ui);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDrop", function (event, ui) {
      var onDrop = _this.props.onDrop;

      if (onDrop) {
        onDrop(event, ui);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDropOver", function (event, ui) {
      var onDropOver = _this.props.onDropOver;

      var dom = _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

      if (_this.isAccept()) {
        $(dom).addClass("enter");
      }

      if (onDropOver) {
        onDropOver(event, ui);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDropOut", function (event, ui) {
      var onDropOut = _this.props.onDropOut;

      var dom = _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

      if (_this.isAccept()) {
        $(dom).removeClass("enter");
      }

      if (onDropOut) {
        onDropOut(event, ui);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDropDeactivate", function (event, ui) {
      var onDropDeactivate = _this.props.onDropDeactivate;

      var dom = _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

      if (_this.isAccept()) {
        $(dom).removeClass("active");
      }

      if (onDropDeactivate) {
        onDropDeactivate(event, ui);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(DropContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dnd = this.props.dnd;

      var dom = _reactDom.default.findDOMNode(this); //dnd.addDropContainer(dom);


      $(dom).droppable({
        //scope,
        // accept: '.' + dnd.dndClassName,
        accept: this.isAccept,
        activeClass: false,
        addClasses: false,
        activate: this.onDropActivate,
        drop: this.onDrop,
        over: this.onDropOver,
        out: this.onDropOut,
        deactivate: this.onDropDeactivate
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var dnd = this.props.dnd;

      var dom = _reactDom.default.findDOMNode(this);

      $(dom).droppable("destroy"); //dnd.removeDropContainer(dom);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          accept = _this$props2.accept,
          dnd = _this$props2.dnd,
          onDropActivate = _this$props2.onDropActivate,
          onDrop = _this$props2.onDrop,
          onDropOver = _this$props2.onDropOver,
          onDropOut = _this$props2.onDropOut,
          onDropDeactivate = _this$props2.onDropDeactivate,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["className", "accept", "dnd", "onDropActivate", "onDrop", "onDropOver", "onDropOut", "onDropDeactivate"]);
      var classString = (0, _classnames.default)("widgets-drop-container", className);
      return _react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: classString
      }));
    }
  }]);
  return DropContainer;
}(_react.default.Component);

exports.default = DropContainer;
(0, _defineProperty2.default)(DropContainer, "defaultProps", {
  accept: '*',
  dnd: {},
  onDropActivate: noop,
  onDrop: noop,
  onDropOver: noop,
  onDropOut: noop,
  onDropDeactivate: noop
});

/***/ }),

/***/ "./src/components/Dnd/DropItem.js":
/*!****************************************!*\
  !*** ./src/components/Dnd/DropItem.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _now = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames2 = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

/**
 * 页面布局设计器-拖放组件
 * author: nobo.zhou
 * date: 2018.12.09
 */
var noop = function noop() {};

var Drop =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Drop, _React$Component);

  function Drop() {
    (0, _classCallCheck2.default)(this, Drop);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Drop).apply(this, arguments));
  }

  (0, _createClass2.default)(Drop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          dnd = _this$props.dnd,
          layout = _this$props.layout,
          id = _this$props.id;
      dnd.addDropItem({
        layout: layout,
        id: id
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var dnd = this.props.dnd;

      var dom = _reactDom.default.findDOMNode(this);

      dnd.removeDropItem(this.props.id); //  $(dom).droppable("destroy");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          dnd = _this$props2.dnd,
          layout = _this$props2.layout,
          className = _this$props2.className,
          children = _this$props2.children,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["dnd", "layout", "className", "children"]);
      var classString = (0, _classnames2.default)((0, _defineProperty2.default)({
        'widgets-drop-item': true
      }, className, className));
      return _react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: classString
      }), children);
    }
  }]);
  return Drop;
}(_react.default.Component);

exports.default = Drop;
(0, _defineProperty2.default)(Drop, "defaultProps", {
  id: 'drop_item_' + (0, _now.default)(),
  dnd: {},
  layout: 'row'
});

/***/ }),

/***/ "./src/components/Dnd/DropRowContainer.js":
/*!************************************************!*\
  !*** ./src/components/Dnd/DropRowContainer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _now = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DropContainer = _interopRequireDefault(__webpack_require__(/*! ./DropContainer */ "./src/components/Dnd/DropContainer.js"));

var _DropItem = _interopRequireDefault(__webpack_require__(/*! ./DropItem */ "./src/components/Dnd/DropItem.js"));

var _Drag = _interopRequireDefault(__webpack_require__(/*! ./Drag */ "./src/components/Dnd/Drag.js"));

var _LayoutContext = _interopRequireDefault(__webpack_require__(/*! ../LayoutContext */ "./src/components/LayoutContext/index.js"));

/**
 * 页面布局设计器-拖放组件容器
 * author: nobo.zhou
 * date: 2018.12.09
 */
var DropRowContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DropRowContainer, _React$Component);

  function DropRowContainer() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DropRowContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DropRowContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      dropItems: []
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDropActivate", function (event, ui) {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDrop", function (event, ui) {
      var dnd = _this.props.dnd;
      var current = dnd.dragItem;

      _this.setState({
        dropItems: [].concat((0, _toConsumableArray2.default)(_this.state.dropItems), [{
          id: 'drop_item_' + (0, _now.default)().toString(16),
          label: current.label
        }])
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDropOver", function (event, ui) {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDropOut", function (event, ui) {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDropDeactivate", function (event, ui) {});
    return _this;
  }

  (0, _createClass2.default)(DropRowContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          dnd = _this$props.dnd,
          accept = _this$props.accept,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["dnd", "accept"]);
      var dropItems = this.state.dropItems;
      return _react.default.createElement(_LayoutContext.default.Consumer, null, function (store) {
        return _react.default.createElement(_DropContainer.default, (0, _extends2.default)({}, props, {
          accept: accept,
          dnd: dnd,
          onDropActivate: _this2.onDropActivate,
          onDrop: _this2.onDrop,
          onDropOver: _this2.onDropOver,
          onDropOut: _this2.onDropOut,
          onDropDeactivate: _this2.onDropDeactivate
        }), dropItems.map(function (item) {
          return _react.default.createElement(_Drag.default, {
            key: item.id
          }, _react.default.createElement(_DropItem.default, {
            id: item.id,
            dnd: dnd,
            layout: "row"
          }, item.label));
        }));
      });
    }
  }]);
  return DropRowContainer;
}(_react.default.Component);

exports.default = DropRowContainer;
(0, _defineProperty2.default)(DropRowContainer, "defaultProps", {
  dnd: {},
  accept: '*'
});

/***/ }),

/***/ "./src/components/DragWidgetsPanel/WidgetsContainer.js":
/*!*************************************************************!*\
  !*** ./src/components/DragWidgetsPanel/WidgetsContainer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var WidgetsContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(WidgetsContainer, _React$Component);

  function WidgetsContainer() {
    (0, _classCallCheck2.default)(this, WidgetsContainer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WidgetsContainer).apply(this, arguments));
  }

  (0, _createClass2.default)(WidgetsContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className"]);
      var classString = (0, _classnames.default)("widgets-list-wrapper", className);
      return _react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: classString
      }), this.props.children);
    }
  }]);
  return WidgetsContainer;
}(_react.default.Component);

exports.default = WidgetsContainer;

/***/ }),

/***/ "./src/components/DragWidgetsPanel/WidgetsItem.js":
/*!********************************************************!*\
  !*** ./src/components/DragWidgetsPanel/WidgetsItem.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames2 = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var WidgetsItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(WidgetsItem, _React$Component);

  function WidgetsItem() {
    (0, _classCallCheck2.default)(this, WidgetsItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WidgetsItem).apply(this, arguments));
  }

  (0, _createClass2.default)(WidgetsItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          className = _this$props.className,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["item", "className"]);
      var iconClassName = (0, _classnames2.default)((0, _defineProperty2.default)({
        "widgets-item-icon": true
      }, "".concat(item.iconCls), item.iconCls));
      var style = {
        backgroundImage: "url(".concat(item.icon, ")")
      };
      return _react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: (0, _classnames2.default)("widgets-item", className)
      }), _react.default.createElement("span", {
        className: iconClassName,
        style: style
      }), _react.default.createElement("span", {
        className: "widgets-item-label"
      }, item.label));
    }
  }]);
  return WidgetsItem;
}(_react.default.Component);

exports.default = WidgetsItem;
(0, _defineProperty2.default)(WidgetsItem, "propTypes", {
  item: _propTypes.default.object
});

/***/ }),

/***/ "./src/components/DragWidgetsPanel/index.js":
/*!**************************************************!*\
  !*** ./src/components/DragWidgetsPanel/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _WidgetsContainer = _interopRequireDefault(__webpack_require__(/*! ./WidgetsContainer */ "./src/components/DragWidgetsPanel/WidgetsContainer.js"));

var _WidgetsItem = _interopRequireDefault(__webpack_require__(/*! ./WidgetsItem */ "./src/components/DragWidgetsPanel/WidgetsItem.js"));

var _DragItem = _interopRequireDefault(__webpack_require__(/*! ../Dnd/DragItem */ "./src/components/Dnd/DragItem.js"));

// let coords = [];
// let dropPointer = null;
var DragWidgetsList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DragWidgetsList, _React$Component);

  function DragWidgetsList() {
    (0, _classCallCheck2.default)(this, DragWidgetsList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DragWidgetsList).apply(this, arguments));
  }

  (0, _createClass2.default)(DragWidgetsList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          dnd = _this$props.dnd;
      return _react.default.createElement(_WidgetsContainer.default, null, items.map(function (item, i) {
        return _react.default.createElement(_DragItem.default, {
          key: i,
          item: item,
          dnd: dnd
        }, _react.default.createElement(_WidgetsItem.default, {
          item: item
        }));
      }));
    }
  }]);
  return DragWidgetsList;
}(_react.default.Component);

exports.default = DragWidgetsList;
(0, _defineProperty2.default)(DragWidgetsList, "propTypes", {
  items: _propTypes.default.array,
  dnd: _propTypes.default.object
});
(0, _defineProperty2.default)(DragWidgetsList, "defaultProps", {
  dnd: {},
  items: [] // onWidgetsDragStart(item, event, ui) {
  //     const { dnd } = this.props;
  //     dnd.dragItem = item;
  //     dnd.currentDragScope = item.scope;
  //     const dropItems = dnd.getDropItems();
  //     if (dropItems.length) {
  //         dropItems.forEach(item => {
  //             const dom = document.getElementById(item.id);
  //             const pos = $(dom).offset();
  //             coords.push({
  //                 x: pos.left,
  //                 y: pos.top,
  //                 width: dom.offsetWidth,
  //                 height: dom.offsetHeight,
  //                 item
  //             });
  //             dropPointer = $('<div class="dorp-pointer" />');
  //             dropPointer.hide();
  //             $(dnd.helperAppendTo).append(dropPointer);
  //         });
  //     }
  // }
  // onWidgetsDrag(item, event, ui) {
  //     const { dnd } = this.props;
  //     const pageX = event.pageX;
  //     const pageY = event.pageY;
  //     //在区域内
  //     let curr = null;
  //     coords.forEach(coord => {
  //         if (curr) return;
  //         if (
  //             (pageX >= coord.x && pageX <= (coord.x + coord.width)) &&
  //             (pageY >= coord.y && pageY <= (coord.y + coord.height))
  //         ) {
  //             curr = {
  //                 ...coord,
  //                 dir: (pageX >= (coord.x + coord.width / 2)) ? 'after' : 'before'
  //             }
  //         }
  //     });
  //     if (curr) {
  //         dropPointer.show().css({
  //             height: curr.height,
  //             left: curr.dir == 'before' ? curr.x : curr.x + curr.width,
  //             top: curr.y
  //         })
  //     }
  //     dnd.dropData = curr;
  // }
  // onWidgetsDragStop(item, event, ui) {
  //     const { dnd } = this.props;
  //     dnd.dragItem = null;
  //     dnd.currentDragScope = null;
  //     coords = [];
  //     if (dropPointer) dropPointer.remove();
  // }

});

/***/ }),

/***/ "./src/components/LayoutContext/index.js":
/*!***********************************************!*\
  !*** ./src/components/LayoutContext/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initState = initState;
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

/**
 * author: nobo.zhou
 * date: 2018.12.23
 */
function initState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _objectSpread2.default)({
    layout: {
      components: {},
      datasoure: {},
      items: []
    }
  }, state);
}

var _default = _react.default.createContext(initState());

exports.default = _default;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! react-widget-layout/lib/style/index.css */ "./node_modules/react-widget-layout/lib/style/index.css");

__webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss");

var _layout = _interopRequireDefault(__webpack_require__(/*! ./layout */ "./src/layout/index.js"));

var _default = _layout.default;
exports.default = _default;

/***/ }),

/***/ "./src/layout/index.js":
/*!*****************************!*\
  !*** ./src/layout/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _reactWidgetLayout = _interopRequireDefault(__webpack_require__(/*! react-widget-layout */ "./node_modules/react-widget-layout/index.js"));

var _DragWidgetsPanel = _interopRequireDefault(__webpack_require__(/*! ../components/DragWidgetsPanel */ "./src/components/DragWidgetsPanel/index.js"));

var _chart = _interopRequireDefault(__webpack_require__(/*! ../../examples/style/images/chart.png */ "./examples/style/images/chart.png"));

var _DndContext = _interopRequireWildcard(__webpack_require__(/*! ../components/Dnd/DndContext */ "./src/components/Dnd/DndContext.js"));

var _DropRowContainer = _interopRequireDefault(__webpack_require__(/*! ../components/Dnd/DropRowContainer */ "./src/components/Dnd/DropRowContainer.js"));

var demos = [{
  icon: _chart.default,
  iconCls: "a",
  label: "折线图"
}, {
  icon: _chart.default,
  label: "柱状图"
}, {
  icon: _chart.default,
  label: "饼图"
}, {
  icon: _chart.default,
  label: "树图"
}, {
  icon: _chart.default,
  label: "雷达图"
}, {
  icon: _chart.default,
  label: "仪表盘"
}];

var DesignerLayout =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DesignerLayout, _React$Component);

  function DesignerLayout() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DesignerLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DesignerLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "dnd", (0, _DndContext.getDefaultContext)());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      layout: {
        components: {},
        datasoure: {},
        items: []
      }
    });
    return _this;
  }

  (0, _createClass2.default)(DesignerLayout, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = [];
      return _react.default.createElement(_DndContext.default.Provider, {
        value: this.dnd
      }, _react.default.createElement(_reactWidgetLayout.default, null, _react.default.createElement(_reactWidgetLayout.default.Header, null, "Tools"), _react.default.createElement(_reactWidgetLayout.default, null, _react.default.createElement(_reactWidgetLayout.default.Sider, {
        style: {
          borderRight: "1px solid #ccc",
          width: 100
        }
      }, _react.default.createElement(_DndContext.default.Consumer, null, function (dnd) {
        return _react.default.createElement(_DragWidgetsPanel.default, {
          dnd: dnd,
          items: demos
        });
      })), _react.default.createElement(_reactWidgetLayout.default, null, _react.default.createElement(_reactWidgetLayout.default.Header, null, _react.default.createElement(_DndContext.default.Consumer, null, function (dnd) {
        return _react.default.createElement(_DropRowContainer.default, {
          accept: "widgets2",
          dnd: dnd,
          style: {
            minHeight: 100
          }
        }, items.map(function (item, i) {
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
            id: item.id,
            className: "widgets-item-preview",
            onDoubleClick: function onDoubleClick() {
              return _this2.removeItem(item.id);
            }
          }, item.label), items.length - 1 !== i ? _react.default.createElement("div", {
            className: "split-line"
          }) : null);
        }));
      })), _react.default.createElement(_reactWidgetLayout.default.Content, null, "Rows")), _react.default.createElement(_reactWidgetLayout.default.Sider, {
        style: {
          width: 100,
          borderLeft: "1px solid #ccc"
        }
      }, _react.default.createElement("div", null, _react.default.createElement("input", {
        size: 10
      }))))));
    }
  }]);
  return DesignerLayout;
}(_react.default.Component);

exports.default = DesignerLayout;

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************************************************!*\
  !*** multi ./node_modules/packez/lib/fetchPolyfills.js ./node_modules/packez/lib/polyfills.js ./examples/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\wamp\www\github-projects\pagedesign\designer\node_modules\packez\lib\fetchPolyfills.js */"./node_modules/packez/lib/fetchPolyfills.js");
__webpack_require__(/*! D:\wamp\www\github-projects\pagedesign\designer\node_modules\packez\lib\polyfills.js */"./node_modules/packez/lib/polyfills.js");
module.exports = __webpack_require__(/*! D:\wamp\www\github-projects\pagedesign\designer\examples\index.js */"./examples/index.js");


/***/ })

/******/ });
//# sourceMappingURL=index.286e1f38.js.map