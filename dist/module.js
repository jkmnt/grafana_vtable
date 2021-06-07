define(["@grafana/data","@grafana/ui","emotion","moment","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./grid.ts":
/*!*****************!*\
  !*** ./grid.ts ***!
  \*****************/
/*! exports provided: VGrid, HGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VGrid", function() { return VGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HGrid", function() { return HGrid; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function calc_sizes(spec, n, defsize) {
  var sizes = Array(n).fill(defsize);
  if (!(spec && spec.length)) return sizes;
  var sl = spec.length;

  for (var i = 0; i < n; i++) {
    var v = spec[i < sl ? i : sl - 1];
    if (v && v > 0) sizes[i] = v + "px";
  }

  return sizes;
}

function VGrid(props) {
  var _a, _b;

  var groups = props.groups;
  var cells = [];
  var ncols = (_b = (_a = groups.find(function (g) {
    return g.fields.length;
  })) === null || _a === void 0 ? void 0 : _a.fields[0].values.length) !== null && _b !== void 0 ? _b : 0;
  var nrows = 0;
  groups.forEach(function (g) {
    var _a; // NOTE: justify-self is for the [likely to be used] sticky to work


    if (g.label) {
      var new_style = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (_a = g.label.props) === null || _a === void 0 ? void 0 : _a.style), {
        'grid-column': "1 / span " + ncols,
        'justify-self': 'start'
      });

      cells.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(g.label, {
        style: new_style
      }));
    }

    g.fields.forEach(function (f) {
      return cells.push.apply(cells, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(f.values));
    });
    nrows += g.fields.length;
  }); // TODO: investigate the minmax etc

  var gtcs = calc_sizes(props.colws, ncols, 'minmax(max-content, 1fr)');
  var gtrs = calc_sizes(props.rowhs, nrows, 'max-content');
  var style = {
    'display': 'grid',
    'grid-template-columns': gtcs.join(' '),
    'grid-template-rows': gtrs.join(' ')
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    style: style,
    className: props.className
  }, cells);
}
function HGrid(props) {
  var _a, _b;

  var groups = props.groups;
  var cells = [];
  var any_labels = groups.find(function (g) {
    return g.label;
  });
  var nrows = (_b = (_a = groups.find(function (g) {
    return g.fields.length;
  })) === null || _a === void 0 ? void 0 : _a.fields[0].values.length) !== null && _b !== void 0 ? _b : 0; // fixed layout all the groups label first, then let the    grid autolayout fields

  if (any_labels) {
    nrows += 1;
    var col1_1 = 1;
    groups.forEach(function (g) {
      var _a;

      var new_style = {
        'grid-row': '1 / 2',
        'grid-column': col1_1 + " / span " + g.fields.length
      };
      var cell = g.label ? react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(g.label, {
        style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (_a = g.label.props) === null || _a === void 0 ? void 0 : _a.style), new_style)
      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
        style: new_style
      });
      cells.push(cell);
      col1_1 += g.fields.length;
    });
  } // TODO: some flatmap should be faster


  var ncols = 0; // this is needed for the widths only

  groups.forEach(function (g) {
    g.fields.forEach(function (f) {
      cells.push.apply(cells, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(f.values));
    });
    ncols += g.fields.length;
  }); // minmax(max-content, 1fr)

  var gtcs = calc_sizes(props.colws, ncols, 'auto');
  var gtrs = calc_sizes(props.rowhs, nrows, 'max-content');
  var style = {
    'display': 'grid',
    'grid-template-columns': gtcs.join(' '),
    'grid-template-rows': gtrs.join(' '),
    'grid-auto-flow': 'column'
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    style: style,
    className: props.className
  }, cells);
}

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vtable */ "./vtable.ts");




var suggestions = [{
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditorSuggestionItemKind"].Field,
  label: 'value'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditorSuggestionItemKind"].Property,
  label: 'value.raw'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditorSuggestionItemKind"].Property,
  label: 'value.text'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditorSuggestionItemKind"].Property,
  label: 'value.style'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditorSuggestionItemKind"].Property,
  label: 'value.html'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditorSuggestionItemKind"].Field,
  label: 'field'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditorSuggestionItemKind"].Property,
  label: 'field.name'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditorSuggestionItemKind"].Field,
  label: 'lib'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditorSuggestionItemKind"].Property,
  label: 'lib.moment'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditorSuggestionItemKind"].Field,
  label: 'context'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditorSuggestionItemKind"].Property,
  label: 'context.df'
}];

function JsEditor(_a) {
  var value = _a.value,
      onChange = _a.onChange;

  var on_change = function on_change(s) {
    return onChange(s.trim().length ? s : undefined);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditor"], {
    value: value,
    onBlur: on_change,
    onSave: on_change,
    language: 'javascript',
    showMiniMap: false,
    showLineNumbers: true,
    getSuggestions: function getSuggestions() {
      return suggestions;
    },
    height: 400
  });
}

var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__["PanelPlugin"](_vtable__WEBPACK_IMPORTED_MODULE_3__["VTable"]).setPanelOptions(function (builder) {
  builder.addTextInput({
    path: 'custom_widths',
    name: 'Column widths',
    description: 'Comma-separated columns widths in px'
  }).addBooleanSwitch({
    path: 'first_value_is_category',
    name: 'First value is category',
    defaultValue: true
  }).addBooleanSwitch({
    path: 'is_horizontal',
    name: 'Layout horizontally',
    defaultValue: false
  }).addBooleanSwitch({
    path: 'show_common_unit',
    name: 'Show common unit',
    defaultValue: true
  }).addTextInput({
    path: 'group_by_label',
    name: 'Group by label'
  }).addCustomEditor({
    id: 'formatcode',
    path: 'formatcode',
    name: 'Custom formatting code (unsafe!)',
    editor: JsEditor
  });
}).useFieldConfig({
  useCustomConfig: function useCustomConfig(builder) {
    builder.addSelect({
      path: 'display_mode',
      name: 'Cell display mode',
      description: 'Color text, background, gauge',
      settings: {
        options: [{
          value: 'auto',
          label: 'Auto'
        }, {
          value: 'fg',
          label: 'Color text'
        }, {
          value: 'bg',
          label: 'Color background'
        }]
      },
      defaultValue: 'auto'
    });
  }
});

/***/ }),

/***/ "./styles.ts":
/*!*******************!*\
  !*** ./styles.ts ***!
  \*******************/
/*! exports provided: useGridStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGridStyle", function() { return useGridStyle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);


 //const HEADER_BG = 'rgb(32, 34, 38)';

var STICKY_BG = '#141619'; //const BORDER_BG = 'rgb(44, 50, 53)'

var BORDER_BG = '#202020';
var HL = 'rgb(51, 162, 229)';
var DIM = 'rgb(123, 128, 135)';
function useGridStyle(is_horizontal) {
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return is_horizontal ? get_hstyle(theme) : get_vstyle(theme);
}

function get_vstyle(theme) {
  var dim = theme.colors.textWeak;
  var hl = theme.colors.textBlue;
  var sticky_bg = theme.colors.panelBg;
  var border_bg = theme.colors.border1;
  return {
    field: {
      name: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        {\n            position: sticky;\n            left: 0;\n            z-index: 2;\n\n            padding: 8px;\n            background-color: ", ";\n            color: ", ";\n\n            border-bottom: 1px solid ", ";\n\n            white-space: nowrap;\n        }"], ["\n        {\n            position: sticky;\n            left: 0;\n            z-index: 2;\n\n            padding: 8px;\n            background-color: ", ";\n            color: ", ";\n\n            border-bottom: 1px solid ", ";\n\n            white-space: nowrap;\n        }"])), sticky_bg, dim, border_bg),
      value: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        {\n            padding: 8px;\n\n            text-align: right;\n\n            border-bottom: 1px solid ", ";\n\n            white-space: nowrap;\n        }"], ["\n        {\n            padding: 8px;\n\n            text-align: right;\n\n            border-bottom: 1px solid ", ";\n\n            white-space: nowrap;\n        }"])), border_bg)
    },
    catfield: {
      name: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        {\n            position: sticky;\n            top: 0;\n            z-index: 3;\n\n            left: 0;\n            padding: 8px;\n            background-color: ", ";\n            color: ", ";\n        }"], ["\n        {\n            position: sticky;\n            top: 0;\n            z-index: 3;\n\n            left: 0;\n            padding: 8px;\n            background-color: ", ";\n            color: ", ";\n        }"])), sticky_bg, dim),
      value: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        {\n            position: sticky;\n            top: 0;\n            z-index: 1;\n\n            padding: 8px;\n            background-color: ", ";\n            color: ", ";\n\n            text-align: right;\n        }"], ["\n        {\n            position: sticky;\n            top: 0;\n            z-index: 1;\n\n            padding: 8px;\n            background-color: ", ";\n            color: ", ";\n\n            text-align: right;\n        }"])), sticky_bg, hl)
    },
    grouplabel: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n        position: sticky;\n        left: 0;\n        z-index: 2;\n\n        padding: 16px 8px 0 4px;\n        background-color: ", ";\n        color: ", ";\n\n        white-space: nowrap;\n    }"], ["\n    {\n        position: sticky;\n        left: 0;\n        z-index: 2;\n\n        padding: 16px 8px 0 4px;\n        background-color: ", ";\n        color: ", ";\n\n        white-space: nowrap;\n    }"])), sticky_bg, hl)
  };
}

function get_hstyle(theme) {
  var dim = theme.colors.textWeak;
  var hl = theme.colors.textBlue;
  var sticky_bg = theme.colors.panelBg;
  var border_bg = theme.colors.border1;
  return {
    field: {
      name: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        {\n            position: sticky;\n            top: 0;\n            z-index: 1;\n\n            padding: 8px;\n\n            color: ", ";\n\n            border-right: 1px solid ", ";\n            background-color: ", ";\n\n            text-align: right;\n        }"], ["\n        {\n            position: sticky;\n            top: 0;\n            z-index: 1;\n\n            padding: 8px;\n\n            color: ", ";\n\n            border-right: 1px solid ", ";\n            background-color: ", ";\n\n            text-align: right;\n        }"])), hl, border_bg, sticky_bg),
      value: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        {\n            padding: 8px;\n\n            text-align: right;\n\n            border-bottom: 1px solid ", ";\n            white-space: nowrap;\n        }"], ["\n        {\n            padding: 8px;\n\n            text-align: right;\n\n            border-bottom: 1px solid ", ";\n            white-space: nowrap;\n        }"])), border_bg)
    },
    catfield: {
      name: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        {\n            position: sticky;\n            top: 0;\n            left: 0;\n            z-index: 3;\n\n            padding: 8px;\n\n            color: ", ";\n            background-color: ", ";\n\n            text-align: right;\n        }"], ["\n        {\n            position: sticky;\n            top: 0;\n            left: 0;\n            z-index: 3;\n\n            padding: 8px;\n\n            color: ", ";\n            background-color: ", ";\n\n            text-align: right;\n        }"])), hl, sticky_bg),
      value: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        {\n            position: sticky;\n            left: 0;\n            z-index: 2;\n\n            padding: 8px;\n\n            color: ", ";\n            background-color: ", ";\n\n            border-bottom: 1px solid ", ";\n\n            text-align: right;\n        }"], ["\n        {\n            position: sticky;\n            left: 0;\n            z-index: 2;\n\n            padding: 8px;\n\n            color: ", ";\n            background-color: ", ";\n\n            border-bottom: 1px solid ", ";\n\n            text-align: right;\n        }"])), dim, sticky_bg, border_bg)
    },
    grouplabel: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n        position: sticky;\n        top: 0;\n        padding: 8px;\n\n        color: ", ";\n        border-right: 1px solid ", ";\n        background-color: ", ";\n\n        text-align: center;\n    }"], ["\n    {\n        position: sticky;\n        top: 0;\n        padding: 8px;\n\n        color: ", ";\n        border-right: 1px solid ", ";\n        background-color: ", ";\n\n        text-align: center;\n    }"])), hl, border_bg, sticky_bg)
  };
}

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;

/***/ }),

/***/ "./vtable.ts":
/*!*******************!*\
  !*** ./vtable.ts ***!
  \*******************/
/*! exports provided: VTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTable", function() { return VTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid */ "./grid.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./styles.ts");









var rce = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function colorize_cell(mode, color) {
  if (!color) return {};
  if (mode == 'fg') return {
    'color': color
  };
  if (mode == 'bg') return {
    'background': color,
    'color': Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["getTextColorForBackground"])(color)
  };
  return {};
}

function create_field(field, formatters, options, style) {
  var _a, _b;

  var field_name = formatters.name(field);
  var common_unit = options.show_common_unit && ((_a = field.config) === null || _a === void 0 ? void 0 : _a.unit);
  if (common_unit == 'none') common_unit = undefined;
  var namecell = rce('div', {
    key: field.name,
    className: style.name
  }, common_unit ? field_name + ", " + common_unit : field_name);
  var cells = [namecell];
  if (!field.display) field.display = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getDisplayProcessor"])({
    field: field
  });

  for (var i = 0; i < field.values.length; i++) {
    var key = field.name + '.' + i;
    var v = field.values.get(i);
    if (v == null) v = undefined;
    var dv = field.display(v);
    var spec = {
      raw: v,
      text: options.show_common_unit ? dv.text : Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["formattedValueToString"])(dv),
      style: colorize_cell((_b = field.config.custom) === null || _b === void 0 ? void 0 : _b.display_mode, dv.color),
      html: undefined
    };

    if (formatters.val) {
      try {
        formatters.val(spec, field, {});
      } catch (e) {}
    }

    var cell = void 0;

    if (spec === null || spec === void 0 ? void 0 : spec.html) {
      cell = rce('div', {
        key: key,
        style: spec.style,
        className: style.value,
        dangerouslySetInnerHTML: {
          __html: _grafana_data__WEBPACK_IMPORTED_MODULE_2__["textUtil"].sanitize(spec.html)
        }
      });
    } else {
      cell = rce('div', {
        key: key,
        style: spec.style,
        className: style.value
      }, spec.text);
    }

    cells.push(cell);
  }

  return {
    values: cells
  };
}

function extract_groups(fields, formatters, label, options, style) {
  var ungrouped = fields.filter(function (f) {
    var _a;

    return ((_a = f === null || f === void 0 ? void 0 : f.labels) === null || _a === void 0 ? void 0 : _a[label]) == undefined;
  });
  var groups = [];
  fields.forEach(function (f) {
    var _a;

    var lab = (_a = f === null || f === void 0 ? void 0 : f.labels) === null || _a === void 0 ? void 0 : _a[label];
    if (lab != undefined && !groups.includes(lab)) groups.push(lab);
  });
  var grouped = groups.map(function (g) {
    return {
      label: rce('div', {
        key: "__group" + g,
        className: style.grouplabel
      }, g),
      fields: fields.filter(function (f) {
        var _a;

        return ((_a = f === null || f === void 0 ? void 0 : f.labels) === null || _a === void 0 ? void 0 : _a[label]) == g;
      }).map(function (f) {
        return create_field(f, formatters, options, style.field);
      })
    };
  });
  if (!ungrouped.length) return grouped; // ugly

  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([{
    label: undefined,
    fields: ungrouped.map(function (f) {
      return create_field(f, formatters, options, style.field);
    })
  }], grouped);
}

function parse_sizes(str) {
  return str.split(';').map(function (f) {
    return Number.parseInt(f) || 0;
  });
}

function VTable(_a) {
  var data = _a.data,
      options = _a.options,
      height = _a.height,
      width = _a.width;
  var is_empty = !(data.series && data.series.length && data.series[0].length);
  if (is_empty) return rce('div', null, 'No data');
  var df = data.series[0];
  var style = Object(_styles__WEBPACK_IMPORTED_MODULE_7__["useGridStyle"])(options.is_horizontal);
  var colws = options.custom_widths ? parse_sizes(options.custom_widths) : undefined;
  console.log('here');

  var name_formatter = function name_formatter(field) {
    return Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getFieldDisplayName"])(field, df);
  };

  var val_formatter;

  if (options.formatcode) {
    try {
      var f_1 = Function('value', 'field', 'context', 'lib', options.formatcode);

      val_formatter = function val_formatter(value, field, context) {
        return f_1(value, field, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
          df: df
        }, context), {
          moment: moment__WEBPACK_IMPORTED_MODULE_5___default.a
        });
      };
    } catch (e) {
      console.log('failed to compile formatter', e);
    }
  }

  var formatters = {
    name: name_formatter,
    val: val_formatter
  };
  var fields = df.fields;
  var groups = [];

  if (options.first_value_is_category) {
    groups.push({
      fields: [create_field(fields[0], formatters, options, style.catfield)]
    });
    fields = fields.slice(1);
  }

  var label = options.group_by_label;

  if (label) {
    groups.push.apply(groups, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(extract_groups(fields, formatters, label, options, style)));
  } else groups.push({
    fields: fields.map(function (f) {
      return create_field(f, formatters, options, style.field);
    })
  });

  return rce(options.is_horizontal ? _grid__WEBPACK_IMPORTED_MODULE_6__["HGrid"] : _grid__WEBPACK_IMPORTED_MODULE_6__["VGrid"], {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["{width: ", "px; height: ", "px; overflow: auto;}"], ["{width: ", "px; height: ", "px; overflow: auto;}"])), width, height),
    groups: groups,
    colws: colws
  });
}
;
var templateObject_1;

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map