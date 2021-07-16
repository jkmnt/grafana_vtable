define(["@grafana/data","@grafana/runtime","@grafana/ui","emotion","moment","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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

  for (var i = 0; i < n; i++) {
    var v = spec[i];
    if (v && v > 0) sizes[i] = v + "px";
  }

  return sizes;
}

function VGrid(groups, opts) {
  var _a, _b;

  if (opts === void 0) {
    opts = {};
  }

  var cells = [];
  var ncols = (_b = (_a = groups.find(function (g) {
    return g.fields.length;
  })) === null || _a === void 0 ? void 0 : _a.fields[0].values.length) !== null && _b !== void 0 ? _b : 0;
  var nrows = 0;
  groups.forEach(function (g) {
    if (g.label) {
      var cell = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
        key: g.label.key,
        style: {
          'grid-column': "1 / -1"
        }
      }, g.label);
      cells.push(cell);
      nrows += 1;
    }

    g.fields.forEach(function (f) {
      return cells.push.apply(cells, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(f.values.map(function (v, i) {
        var _a;

        var attrs = (_a = opts === null || opts === void 0 ? void 0 : opts.colattrs) === null || _a === void 0 ? void 0 : _a[i];
        return attrs ? react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(v, attrs) : v;
      })));
    });
    nrows += g.fields.length;
  }); // TODO: investigate the minmax etc

  var gtcs = calc_sizes(opts.colws, ncols, 'minmax(max-content, 1fr)');
  var gtrs = calc_sizes(opts.rowhs, nrows, 'max-content');
  var style = {
    'display': 'grid',
    'grid-template-columns': gtcs.join(' '),
    'grid-template-rows': gtrs.join(' ')
  };
  return {
    style: style,
    children: cells
  };
}
function HGrid(groups, opts) {
  var _a, _b;

  if (opts === void 0) {
    opts = {};
  }

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
        key: "__spacer." + col1_1,
        style: new_style
      });
      cells.push(cell);
      col1_1 += g.fields.length;
    });
  }

  var ncols = 0; // this is needed for the widths only

  var colidx = 0; // running column index for injecting per-column attributes

  groups.forEach(function (g) {
    g.fields.forEach(function (f) {
      var _a;

      var attrs = (_a = opts === null || opts === void 0 ? void 0 : opts.colattrs) === null || _a === void 0 ? void 0 : _a[colidx++];
      if (attrs) cells.push.apply(cells, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(f.values.map(function (v) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(v, attrs);
      })));else cells.push.apply(cells, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(f.values));
    });
    ncols += g.fields.length;
  }); // minmax(max-content, 1fr)

  var gtcs = calc_sizes(opts.colws, ncols, 'auto');
  var gtrs = calc_sizes(opts.rowhs, nrows, 'max-content');
  var style = {
    'display': 'grid',
    'grid-template-columns': gtcs.join(' '),
    'grid-template-rows': gtrs.join(' '),
    'grid-auto-flow': 'column'
  };
  return {
    style: style,
    children: cells
  };
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vtable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vtable */ "./vtable.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__);






var suggestions = [{
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Field,
  label: 'value'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Property,
  label: 'value.text'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Property,
  label: 'value.style'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Property,
  label: 'value.html'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Constant,
  label: 'value.raw'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Constant,
  label: 'value.name'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Constant,
  label: 'value.i'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Field,
  label: 'field'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Constant,
  label: 'field.name'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Field,
  label: 'lib'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Property,
  label: 'lib.moment'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Field,
  label: 'context'
}, {
  kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Constant,
  label: 'context.df'
}];
var DEF_CODE = "\n/*\n    This code would be called for formatting each value.\n    The object 'value' is in scope for modification.\n\n    Set the text:\n      value.text = 'foo'\n    Set the style:\n      value.style = {'color': 'red', 'border': '1px solid'}\n    Render as html instead of text:\n      value.html = '<a href=\"http://www.grafana.com\">Go to base</a>'\n    Get raw (numeric) value:\n      let a = value.raw\n\n    Extra objects are in scope to help the formatting:\n      field: dataframe field of this value. The field.name is most useful here.\n      context.df: whole dataframe\n      lib.moment: moment.js library, handy for the datetimes.\n*/\n\nvalue.text = field.name + ':' + value.raw\nvalue.style = {'color': 'red'}";

function JsEditor(_a) {
  var value = _a.value,
      onChange = _a.onChange;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditor"], {
    value: value,
    onBlur: onChange,
    onSave: onChange,
    language: 'javascript',
    showMiniMap: false,
    showLineNumbers: true,
    getSuggestions: function getSuggestions() {
      return suggestions;
    },
    height: 400
  });
}

var fetch_groups = function fetch_groups(context) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var options, df, labels_1;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      options = [{
        value: '',
        label: '─'
      }];

      if (context && context.data && context.data.length) {
        df = context.data[0];
        labels_1 = [];
        df.fields.filter(function (f) {
          return f.labels;
        }).forEach(function (f) {
          return Object.entries(f.labels).forEach(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2),
                k = _b[0],
                v = _b[1];

            if (k != undefined && v != undefined && !labels_1.includes(k)) labels_1.push(k);
          });
        });
        labels_1.forEach(function (l) {
          return options.push({
            label: l,
            value: l
          });
        });
      }

      return [2
      /*return*/
      , Promise.resolve(options)];
    });
  });
};

var fetch_fields = function fetch_fields(context) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var options, df_1;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      options = [{
        value: '',
        label: '─'
      }];

      if (context && context.data && context.data.length) {
        df_1 = context.data[0];
        df_1.fields.forEach(function (f) {
          var label = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getFieldDisplayName"])(f, df_1);
          options.push({
            label: label != f.name ? label + " (" + f.name + ")" : f.name,
            value: f.name
          });
        });
      }

      return [2
      /*return*/
      , Promise.resolve(options)];
    });
  });
};

var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__["PanelPlugin"](_vtable__WEBPACK_IMPORTED_MODULE_4__["VTable"]);
plugin.setPanelOptions(function (builder) {
  builder.addSelect({
    path: 'dimension_field',
    name: 'Dimension field name',
    settings: {
      allowCustomValue: true,
      options: [],
      getOptions: fetch_fields
    },
    defaultValue: ''
  }).addBooleanSwitch({
    path: 'is_horizontal',
    name: 'Horizontal layout ',
    defaultValue: false
  }).addBooleanSwitch({
    path: 'show_common_unit',
    name: 'Show common unit',
    defaultValue: true
  }).addSelect({
    path: 'group_by_label',
    name: 'Group by label',
    settings: {
      allowCustomValue: true,
      options: [],
      getOptions: fetch_groups
    },
    defaultValue: ''
  }).addTextInput({
    path: 'custom_columns',
    name: 'Custom column widths and text alignments',
    description: 'Comma-separated format string: r100, c200, l300, etc'
  }).addSelect({
    path: 'sort.field',
    name: 'By field',
    settings: {
      allowCustomValue: true,
      options: [],
      getOptions: fetch_fields
    },
    defaultValue: '',
    category: ['Sort']
  }).addBooleanSwitch({
    path: 'sort.desc',
    name: 'Descending',
    category: ['Sort']
  }).addBooleanSwitch({
    path: 'sort.zeronull',
    name: 'Treat zeros as nulls',
    category: ['Sort']
  }).addBooleanSwitch({
    path: 'sort.nullfirst',
    name: 'Nulls go first',
    category: ['Sort']
  }).addBooleanSwitch({
    path: 'use_formatcode',
    name: 'Use formatting code (DANGER!)',
    description: _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__["config"].disableSanitizeHtml ? "" : "Feature is disabled. Set disable_sanitize_html = false in Grafana config to activate it.",
    category: ['Custom formatting'],
    defaultValue: false
  }).addCustomEditor({
    id: 'formatcode',
    path: 'formatcode',
    name: 'Code',
    showIf: function showIf(options) {
      return options.use_formatcode && _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__["config"].disableSanitizeHtml;
    },
    category: ['Custom formatting'],
    editor: JsEditor,
    defaultValue: DEF_CODE
  });
});
plugin.useFieldConfig({
  useCustomConfig: function useCustomConfig(builder) {
    builder.addRadio({
      path: 'display_mode',
      name: 'Cell display mode',
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
/*! exports provided: STYLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLES", function() { return STYLES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);



var COMMON = {
  cell: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        padding: 9px 16px 9px 16px;\n        white-space: nowrap;"], ["\n        padding: 9px 16px 9px 16px;\n        white-space: nowrap;"]))),
  bborder: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        border-bottom: 1px solid var(--border_bg);"], ["\n        border-bottom: 1px solid var(--border_bg);"]))),
  tborder: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        border-top: 1px solid var(--border_bg);"], ["\n        border-top: 1px solid var(--border_bg);"]))),
  rborder: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        border-right: 1px solid var(--border_bg);"], ["\n        border-right: 1px solid var(--border_bg);"]))),
  lborder: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        border-left: 1px solid var(--border_bg);"], ["\n        border-left: 1px solid var(--border_bg);"]))),
  scrollbars: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        ::-webkit-scrollbar {\n            height: revert;\n        }\n        ::-webkit-scrollbar-corner {\n            background-color: var(--panel_bg);\n        }"], ["\n        ::-webkit-scrollbar {\n            height: revert;\n        }\n        ::-webkit-scrollbar-corner {\n            background-color: var(--panel_bg);\n        }"]))),
  aligns: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        &[data-align='l'] {\n            text-align: left;\n        }\n        &[data-align='c'] {\n            text-align: center;\n        }\n        &[data-align='r'] {\n            text-align: right;\n        }"], ["\n        &[data-align='l'] {\n            text-align: left;\n        }\n        &[data-align='c'] {\n            text-align: center;\n        }\n        &[data-align='r'] {\n            text-align: right;\n        }"])))
};
var VSTYLE = {
  namecell: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(COMMON.cell, COMMON.bborder, COMMON.aligns, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        position: sticky;\n        background-color: var(--panel_bg);\n        left: 0;\n        z-index: 2;\n        color: var(--dim);"], ["\n        position: sticky;\n        background-color: var(--panel_bg);\n        left: 0;\n        z-index: 2;\n        color: var(--dim);"])))),
  valuecell: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(COMMON.cell, COMMON.bborder, COMMON.aligns, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        text-align: right;"], ["\n        text-align: right;"])))),
  dimnamecell: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(COMMON.cell, COMMON.bborder, COMMON.aligns, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        position: sticky;\n        background-color: var(--panel_bg);\n        left: 0;\n        top: 0;\n        z-index: 3;\n        color: var(--dim);\n        padding: 15px 16px 4px 16px;"], ["\n        position: sticky;\n        background-color: var(--panel_bg);\n        left: 0;\n        top: 0;\n        z-index: 3;\n        color: var(--dim);\n        padding: 15px 16px 4px 16px;"])))),
  dimvaluecell: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(COMMON.cell, COMMON.bborder, COMMON.aligns, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        text-align: right;\n        position: sticky;\n        background-color: var(--panel_bg);\n        top: 0;\n        z-index: 1;\n        padding: 15px 16px 4px 16px;\n        color: var(--hl);\n        &::before {\n            content: '\u0427\u0412\u0410\u0427\u0410\u0427\u0410\u0427'\n        }"], ["\n        text-align: right;\n        position: sticky;\n        background-color: var(--panel_bg);\n        top: 0;\n        z-index: 1;\n        padding: 15px 16px 4px 16px;\n        color: var(--hl);\n        &::before {\n            content: '\u0427\u0412\u0410\u0427\u0410\u0427\u0410\u0427'\n        }"])))),
  grouplabel: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        position: sticky;\n        background-color: var(--panel_bg);\n        left: 0;\n        z-index: 2;\n\n        padding: 19px 4px 0px 4px;\n        color: var(--hl);\n        display: inline-block;\n        width: auto;"], ["\n        position: sticky;\n        background-color: var(--panel_bg);\n        left: 0;\n        z-index: 2;\n\n        padding: 19px 4px 0px 4px;\n        color: var(--hl);\n        display: inline-block;\n        width: auto;"])))
};
var HSTYLE = {
  namecell: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(COMMON.cell, COMMON.bborder, COMMON.aligns, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        position: sticky;\n        background-color: var(--panel_bg);\n        top: 0;\n        z-index: 1;\n\n        color: var(--hl);\n\n        padding: 7px 16px 4px 16px;\n\n        text-align: right;\n        white-space: normal;"], ["\n        position: sticky;\n        background-color: var(--panel_bg);\n        top: 0;\n        z-index: 1;\n\n        color: var(--hl);\n\n        padding: 7px 16px 4px 16px;\n\n        text-align: right;\n        white-space: normal;"])))),
  valuecell: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(COMMON.cell, COMMON.bborder, COMMON.aligns, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        text-align: right;"], ["\n        text-align: right;"])))),
  dimnamecell: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(COMMON.cell, COMMON.bborder, COMMON.aligns, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        position: sticky;\n        background-color: var(--panel_bg);\n        top: 0;\n        z-index: 3;\n        left: 0;\n\n        color: var(--hl);\n\n        padding: 7px 16px 4px 16px;\n\n        text-align: right;\n        white-space: normal;"], ["\n        position: sticky;\n        background-color: var(--panel_bg);\n        top: 0;\n        z-index: 3;\n        left: 0;\n\n        color: var(--hl);\n\n        padding: 7px 16px 4px 16px;\n\n        text-align: right;\n        white-space: normal;"])))),
  dimvaluecell: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(COMMON.cell, COMMON.bborder, COMMON.aligns, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_16 || (templateObject_16 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        text-align: right;\n        position: sticky;\n        background-color: var(--panel_bg);\n        left: 0;\n        z-index: 2;\n        color: var(--dim);"], ["\n        text-align: right;\n        position: sticky;\n        background-color: var(--panel_bg);\n        left: 0;\n        z-index: 2;\n        color: var(--dim);"])))),
  grouplabel: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(COMMON.cell, COMMON.lborder, COMMON.rborder, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_17 || (templateObject_17 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        position: sticky;\n        background-color: var(--panel_bg);\n        top: 0;\n        color: var(--hl);\n\n        padding: 8px 4px 0px 4px;\n\n        text-align: center;\n\n        white-space: normal;"], ["\n        position: sticky;\n        background-color: var(--panel_bg);\n        top: 0;\n        color: var(--hl);\n\n        padding: 8px 4px 0px 4px;\n\n        text-align: center;\n\n        white-space: normal;"]))))
};

function build_all() {
  var theme = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["config"].theme;
  var opts = {
    dim: theme.colors.textSemiWeak,
    hl: theme.colors.textBlue,
    panel_bg: theme.colors.panelBg,
    border_bg: theme.colors.border1,
    dash_bg: theme.colors.dashboardBg
  };
  var grid = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(COMMON.scrollbars, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_18 || (templateObject_18 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        overflow: auto;\n        position: relative;\n        padding-bottom: 42px;\n        --panel_bg: ", ";\n        --dim: ", ";\n        --hl: ", ";\n        --border_bg: ", ";\n        &[data-is_transparent] {\n            --panel_bg: ", ";\n        }\n        "], ["\n        overflow: auto;\n        position: relative;\n        padding-bottom: 42px;\n        --panel_bg: ", ";\n        --dim: ", ";\n        --hl: ", ";\n        --border_bg: ", ";\n        &[data-is_transparent] {\n            --panel_bg: ", ";\n        }\n        "])), opts.panel_bg, opts.dim, opts.hl, opts.border_bg, opts.dash_bg));
  return {
    vertical: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, VSTYLE), {
      grid: grid
    }),
    horizontal: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, HSTYLE), {
      grid: grid
    })
  };
}

var STYLES = build_all();
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;

/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/*! exports provided: get_colspecs, parse_colspec, fields_to_groups, discover_unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_colspecs", function() { return get_colspecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_colspec", function() { return parse_colspec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fields_to_groups", function() { return fields_to_groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discover_unit", function() { return discover_unit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);


function get_colspecs(spec, maxcols) {
  if (!(spec && spec.length)) return [];
  return parse_colspec(spec, maxcols);
}
function parse_colspec(str, size) {
  var re = /\s*([r|c|l]?)\s*([0-9]*)\s*/;
  var specs = str.split(',').map(function (f) {
    var m = f.match(re);
    var a = m && m[1] != '' ? m[1] : undefined;
    var w = m && m[2] != '' ? Number.parseInt(m[2]) : 0;
    return {
      a: a,
      w: w
    };
  });
  var len = specs.length;

  if (len && len < size) {
    specs.length = size;
    specs.fill(specs[len - 1], len);
  }

  return specs;
}
function fields_to_groups(fields, dim, label) {
  var _a;

  var groups = [];

  if (dim && dim.length) {
    var dimfield_1 = fields.find(function (f) {
      return f.name == dim;
    });

    if (dimfield_1) {
      groups.push({
        fields: [dimfield_1],
        is_dim: true
      });
      fields = fields.filter(function (f) {
        return f != dimfield_1;
      });
    }
  }

  if (label && label.length) {
    var gm_1 = new Map();
    gm_1.set(undefined, []);
    fields.forEach(function (f) {
      var _a, _b;

      var lab = (_a = f === null || f === void 0 ? void 0 : f.labels) === null || _a === void 0 ? void 0 : _a[label];
      if (!gm_1.has(lab)) gm_1.set(lab, []);
      (_b = gm_1.get(lab)) === null || _b === void 0 ? void 0 : _b.push(f); // '?' just to calm down the linter
    });
    if (!((_a = gm_1.get(undefined)) === null || _a === void 0 ? void 0 : _a.length)) gm_1["delete"](undefined);
    groups.push.apply(groups, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(gm_1).map(function (_a) {
      var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2),
          name = _b[0],
          fields = _b[1];

      return {
        name: name,
        fields: fields
      };
    })));
  } else {
    groups.push({
      fields: fields
    }); // shortcut if no grouping
  }

  return groups;
}
function discover_unit(field) {
  // try to render the field with the sample input == 1 to obtain the unit.
  // probing with 0 may be wrong since it may be special.
  // mappings are detached while probing and reattached later.
  var saved_mappings = field.config.mappings;
  field.config.mappings = undefined;
  var unit = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["getDisplayProcessor"])({
    field: field
  })(1).suffix;
  field.config.mappings = saved_mappings;
  return unit && unit.length ? unit : undefined;
}

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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid */ "./grid.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./styles.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./utils.ts");









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

function create_field(field, options, ctx, is_dimension) {
  var _a, _b, _c, _d;

  var df = ctx.df,
      formatter = ctx.formatter,
      order = ctx.order;
  var field_name = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_3__["getFieldDisplayName"])(field, df);
  var display = (_a = field.display) !== null && _a !== void 0 ? _a : Object(_grafana_data__WEBPACK_IMPORTED_MODULE_3__["getDisplayProcessor"])({
    field: field
  });
  var common_unit = options.show_common_unit && field.type == _grafana_data__WEBPACK_IMPORTED_MODULE_3__["FieldType"].number ? Object(_utils__WEBPACK_IMPORTED_MODULE_8__["discover_unit"])(field) : undefined;
  var namecell = rce('div', {
    key: field.name,
    className: is_dimension ? ctx.style.dimnamecell : ctx.style.namecell
  }, common_unit ? field_name + ", " + common_unit : field_name);
  var cells = [namecell]; // the index loop here instead of map is for the sorting feature

  for (var i = 0; i < field.values.length; i++) {
    var key = field.name + "." + i;
    var v = field.values.get(order ? order[i] : i);
    if (v == null) v = undefined;
    var dv = display(v);
    var spec = {
      raw: v,
      i: i,
      name: field.name,
      text: options.show_common_unit ? dv.text : "" + ((_b = dv.prefix) !== null && _b !== void 0 ? _b : '') + dv.text + ((_c = dv.suffix) !== null && _c !== void 0 ? _c : ''),
      style: colorize_cell((_d = field.config.custom) === null || _d === void 0 ? void 0 : _d.display_mode, dv.color),
      html: undefined
    };

    if (formatter) {
      try {
        formatter(spec, field, {});
      } catch (e) {}
    }

    var cellprops = {
      key: key,
      style: spec.style,
      className: is_dimension ? ctx.style.dimvaluecell : ctx.style.valuecell
    };
    var cell = (spec === null || spec === void 0 ? void 0 : spec.html) ? rce('div', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, cellprops), {
      dangerouslySetInnerHTML: {
        __html: spec.html
      }
    })) : rce('div', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, cellprops), spec.text);
    cells.push(cell);
  }

  return {
    values: cells
  };
}

function create_gridgroups(gss, options, ctx) {
  var gridgroups = gss.map(function (g) {
    var key = "__group." + (g === null || g === void 0 ? void 0 : g.name);
    return {
      label: g.name ? rce('div', {
        key: key,
        className: ctx.style.grouplabel
      }, g.name) : undefined,
      fields: g.fields.map(function (f) {
        return create_field(f, options, ctx, g.is_dim);
      })
    };
  });
  return gridgroups;
}

function num_comparer(a, b, nullfirst, desc) {
  if (a == null && b == null) return 0;
  if (a == null) return nullfirst ? -1 : 1;
  if (b == null) return nullfirst ? 1 : -1;
  return desc ? b - a : a - b;
}

function str_comparer(a, b, nullfirst, desc) {
  if (a == null && b == null) return 0;
  if (a == null) return nullfirst ? -1 : 1;
  if (b == null) return nullfirst ? 1 : -1;

  if (desc) {
    if (a > b) return -1;
    if (a < b) return 1;
  } else {
    if (a < b) return -1;
    if (a > b) return 1;
  }

  return 0;
}

function get_order(fields, options) {
  var sort = options.sort;
  if (!(sort.field && sort.field.length)) return undefined;
  var field = fields.find(function (f) {
    return f.name == sort.field;
  });
  if (!field) return undefined;
  var ordermap = field.values.toArray().map(function (v, i) {
    return {
      v: v == 0 && sort.zeronull ? null : v,
      i: i
    };
  });
  if (field.type == _grafana_data__WEBPACK_IMPORTED_MODULE_3__["FieldType"].number) ordermap.sort(function (a, b) {
    return num_comparer(a.v, b.v, sort.nullfirst, sort.desc);
  });else ordermap.sort(function (a, b) {
    return str_comparer(a.v, b.v, sort.nullfirst, sort.desc);
  });
  return ordermap.map(function (v) {
    return v.i;
  });
} // this returns the maximum of rows or columns regardless of the orientation


function estimate_maxcols(fields) {
  var _a;

  return Math.max(fields.length, (_a = (fields === null || fields === void 0 ? void 0 : fields[0].values.length) + 1) !== null && _a !== void 0 ? _a : 1);
}

function VTable(_a) {
  var _b, _c;

  var data = _a.data,
      options = _a.options,
      height = _a.height,
      width = _a.width,
      transparent = _a.transparent;
  var is_empty = !(data.series && data.series.length && ((_c = (_b = data.series[0]) === null || _b === void 0 ? void 0 : _b.fields) === null || _c === void 0 ? void 0 : _c.length));
  if (is_empty) return rce('div', null, 'No data');
  var df = data.series[0];
  var fields = df.fields;
  var style = options.is_horizontal ? _styles__WEBPACK_IMPORTED_MODULE_7__["STYLES"].horizontal : _styles__WEBPACK_IMPORTED_MODULE_7__["STYLES"].vertical;
  var maxcols = estimate_maxcols(fields);
  var colspecs = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["get_colspecs"])(options.custom_columns, maxcols);
  var formatter;

  if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__["config"].disableSanitizeHtml && options.use_formatcode && options.formatcode) {
    try {
      var f_1 = Function('value', 'field', 'context', 'lib', options.formatcode);

      formatter = function formatter(value, field, context) {
        return f_1(value, field, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
          df: df
        }, context), {
          moment: moment__WEBPACK_IMPORTED_MODULE_2___default.a
        });
      };
    } catch (e) {
      console.log('failed to compile formatter', e);
    }
  }

  console.log('render');
  var ctx = {
    formatter: formatter,
    df: df,
    style: style,
    order: get_order(fields, options)
  };
  var groups = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["fields_to_groups"])(fields, options.dimension_field, options.group_by_label);
  var gridgroups = create_gridgroups(groups, options, ctx);
  var colattrs = colspecs.map(function (c) {
    return c.a ? {
      'data-align': c.a
    } : undefined;
  });
  var grid = (options.is_horizontal ? _grid__WEBPACK_IMPORTED_MODULE_6__["HGrid"] : _grid__WEBPACK_IMPORTED_MODULE_6__["VGrid"])(gridgroups, {
    colws: colspecs.length ? colspecs.map(function (c) {
      return c.w;
    }) : undefined,
    colattrs: colattrs.length ? colattrs : undefined
  });
  var container = rce('div', {
    style: {
      'width': width,
      'height': height,
      'display': 'flex',
      'flex-direction': 'column'
    }
  }, rce('div', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    className: style.grid,
    'data-is_transparent': transparent ? '' : undefined
  }, grid)) // TODO: add series picker after the grid if there are multiple queries
  );
  return container;
}
;

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

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