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

// import Demo3 from './demos/Demo3';
// import Demo4 from './demos/Demo4';
var _default = [// {
//     label: '基本功能',
//     component: Demo1
// },
{
  label: '基本功能',
  component: _Demo.default
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

var _DragWidgetsList = _interopRequireDefault(__webpack_require__(/*! ../../src/components/WidgetsPanel/DragWidgetsList */ "./src/components/WidgetsPanel/DragWidgetsList.js"));

var _chart = _interopRequireDefault(__webpack_require__(/*! ../style/images/chart.png */ "./examples/style/images/chart.png"));

var _DndContext = _interopRequireWildcard(__webpack_require__(/*! ../../src/components/Dnd/DndContext */ "./src/components/Dnd/DndContext.js"));

var _DropRowContainer = _interopRequireDefault(__webpack_require__(/*! ../../src/components/Dnd/DropRowContainer */ "./src/components/Dnd/DropRowContainer.js"));

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
      return _react.default.createElement(_DndContext.default.Provider, {
        value: this.dnd
      }, _react.default.createElement("div", null, _react.default.createElement(_DndContext.default.Consumer, null, function (dnd) {
        return _react.default.createElement(_DragWidgetsList.default, {
          dnd: dnd,
          items: List
        });
      }), _react.default.createElement("div", null, _react.default.createElement("br", null), _react.default.createElement(_DndContext.default.Consumer, null, function (dnd) {
        return _react.default.createElement(_DropRowContainer.default, {
          dnd: dnd,
          style: {
            minHeight: 200
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
      }))));
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

var _DragWidgetsList = _interopRequireDefault(__webpack_require__(/*! ../../src/components/WidgetsPanel/DragWidgetsList */ "./src/components/WidgetsPanel/DragWidgetsList.js"));

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
      return _react.default.createElement("div", null, _react.default.createElement(_DragWidgetsList.default, {
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
var getDefaultContext = function getDefaultContext() {
  return {
    scope: "widgets",
    helper: null,
    dragItem: null,
    //当前拖拽对象
    // drop项的元素
    dropItems: [],
    dropContainers: {},
    addDropItem: function addDropItem(dom) {
      this.dropItems.push(dom);
    },
    removeDropItem: function removeDropItem(dom) {
      var idx = this.dropItems.indexOf(dom);

      if (idx > -1) {
        this.dropItems.splice(idx, 1);
      }
    },
    getDropItems: function getDropItems() {
      return this.dropItems;
    },
    addDropContainer: function addDropContainer(scope, dom) {
      this.dropContainers[scope] = this.dropContainers[scope] || [];
      this.dropContainers[scope].push(dom);
    },
    removeDropContainer: function removeDropContainer(scope, dom) {
      var cts = this.dropContainers[scope] || [];
      var idx = cts.indexOf(dom);

      if (idx > -1) {
        cts.splice(idx, 1);
      }
    },
    getDropContainers: function getDropContainers() {
      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.scope;
      return this.dropContainers[scope] || [];
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

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

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
    (0, _classCallCheck2.default)(this, Drag);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Drag).apply(this, arguments));
  }

  (0, _createClass2.default)(Drag, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          scope = _this$props.scope,
          onDragStart = _this$props.onDragStart,
          onDrag = _this$props.onDrag,
          onDragStop = _this$props.onDragStop;

      var dom = _reactDom.default.findDOMNode(this);

      $(dom).draggable({
        scope: scope,
        helper: "clone",
        start: function start(event, ui) {
          onDragStart(event, ui);
        },
        drag: function drag(event, ui) {
          onDrag(event, ui);
        },
        stop: function stop(event, ui) {
          onDragStop(event, ui);
        }
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
  scope: "default",
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      dropItems: []
    });
    return _this;
  }

  (0, _createClass2.default)(DropContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          scope = _this$props.scope,
          dnd = _this$props.dnd,
          onDropActivate = _this$props.onDropActivate,
          onDrop = _this$props.onDrop,
          onDropOver = _this$props.onDropOver,
          onDropOut = _this$props.onDropOut,
          onDropDeactivate = _this$props.onDropDeactivate;

      var dom = _reactDom.default.findDOMNode(this);

      dnd.addDropContainer(scope || dnd.scope, dom);
      $(dom).droppable({
        scope: scope || dnd.scope,
        activate: function activate(event, ui) {
          onDropActivate(event, ui);
        },
        drop: function drop(event, ui) {
          onDrop(event, ui);
        },
        over: function over(event, ui) {
          onDropOver(event, ui);
        },
        out: function out(event, ui) {
          onDropOut(event, ui);
        },
        deactivate: function deactivate(event, ui) {
          onDropDeactivate(event, ui);
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props2 = this.props,
          scope = _this$props2.scope,
          dnd = _this$props2.dnd;

      var dom = _reactDom.default.findDOMNode(this);

      $(dom).droppable("destroy");
      dnd.removeDropContainer(scope || dnd.scope, dom);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          scope = _this$props3.scope,
          dnd = _this$props3.dnd,
          onDropActivate = _this$props3.onDropActivate,
          onDrop = _this$props3.onDrop,
          onDropOver = _this$props3.onDropOver,
          onDropOut = _this$props3.onDropOut,
          onDropDeactivate = _this$props3.onDropDeactivate,
          props = (0, _objectWithoutProperties2.default)(_this$props3, ["className", "scope", "dnd", "onDropActivate", "onDrop", "onDropOver", "onDropOut", "onDropDeactivate"]);
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
  scope: null,
  dnd: {},
  onDropActivate: noop,
  onDrop: noop,
  onDropOver: noop,
  onDropOut: noop,
  onDropDeactivate: noop
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

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DropContainer = _interopRequireDefault(__webpack_require__(/*! ./DropContainer */ "./src/components/Dnd/DropContainer.js"));

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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDropActivate", function (event, ui) {
      var dnd = _this.props.dnd;
      var cts = dnd.getDropContainers(dnd.scope);
      cts.forEach(function (dom) {
        $(dom).addClass("active");
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDrop", function (event, ui) {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDropOver", function (event, ui) {
      var dnd = _this.props.dnd;
      var cts = dnd.getDropContainers(dnd.scope);
      cts.forEach(function (dom) {
        $(dom).addClass("enter");
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDropOut", function (event, ui) {
      var dnd = _this.props.dnd;
      var cts = dnd.getDropContainers(dnd.scope);
      cts.forEach(function (dom) {
        $(dom).removeClass("enter");
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onDropDeactivate", function (event, ui) {
      var dnd = _this.props.dnd;
      var cts = dnd.getDropContainers(dnd.scope);
      cts.forEach(function (dom) {
        $(dom).removeClass("active");
      });
    });
    return _this;
  }

  (0, _createClass2.default)(DropRowContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dnd = _this$props.dnd,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["dnd"]);
      return _react.default.createElement(_DropContainer.default, (0, _extends2.default)({}, props, {
        dnd: dnd,
        onDropActivate: this.onDropActivate,
        onDrop: this.onDrop,
        onDropOver: this.onDropOver,
        onDropOut: this.onDropOut,
        onDropDeactivate: this.onDropDeactivate
      }));
    }
  }]);
  return DropRowContainer;
}(_react.default.Component);

exports.default = DropRowContainer;
(0, _defineProperty2.default)(DropRowContainer, "defaultProps", {
  dnd: {}
});

/***/ }),

/***/ "./src/components/WidgetsPanel/DragWidgetsList.js":
/*!********************************************************!*\
  !*** ./src/components/WidgetsPanel/DragWidgetsList.js ***!
  \********************************************************/
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

var _WidgetsContainer = _interopRequireDefault(__webpack_require__(/*! ./WidgetsContainer */ "./src/components/WidgetsPanel/WidgetsContainer.js"));

var _WidgetsItem = _interopRequireDefault(__webpack_require__(/*! ./WidgetsItem */ "./src/components/WidgetsPanel/WidgetsItem.js"));

var _Drag = _interopRequireDefault(__webpack_require__(/*! ../Dnd/Drag */ "./src/components/Dnd/Drag.js"));

var DragWidgetsList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DragWidgetsList, _React$Component);

  function DragWidgetsList() {
    (0, _classCallCheck2.default)(this, DragWidgetsList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DragWidgetsList).apply(this, arguments));
  }

  (0, _createClass2.default)(DragWidgetsList, [{
    key: "onWidgetsDragStart",
    value: function onWidgetsDragStart(item, event, ui) {
      console.log(1);
    }
  }, {
    key: "onWidgetsDrag",
    value: function onWidgetsDrag(item, event, ui) {
      var dnd = this.props.dnd; // console.log(dnd)
    }
  }, {
    key: "onWidgetsDragStop",
    value: function onWidgetsDragStop(item, event, ui) {
      console.log(3);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          items = _this$props.items,
          dnd = _this$props.dnd;
      return _react.default.createElement(_WidgetsContainer.default, null, items.map(function (item, i) {
        return _react.default.createElement(_Drag.default, {
          key: i,
          scope: dnd.scope,
          onDragStart: _this.onWidgetsDragStart.bind(_this, item),
          onDrag: _this.onWidgetsDrag.bind(_this, item),
          onDragStop: _this.onWidgetsDragStop.bind(_this, item)
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
  items: []
});

/***/ }),

/***/ "./src/components/WidgetsPanel/WidgetsContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/WidgetsPanel/WidgetsContainer.js ***!
  \*********************************************************/
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

/***/ "./src/components/WidgetsPanel/WidgetsItem.js":
/*!****************************************************!*\
  !*** ./src/components/WidgetsPanel/WidgetsItem.js ***!
  \****************************************************/
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
//# sourceMappingURL=index.84a29ed4.js.map