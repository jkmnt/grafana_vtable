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

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vtable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vtable */ "./vtable.ts");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_vtable__WEBPACK_IMPORTED_MODULE_1__["VTable"]).setPanelOptions(function (builder) {
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







var rce = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement; //const HEADER_BG = 'rgb(32, 34, 38)';

var HEADER_BG = '#141619';
var BORDER_BG = "rgb(44, 50, 53)";

function colorize_cell(mode, color) {
  if (!color) return '';
  if (mode == 'fg') return Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["color: ", ";"], ["color: ", ";"])), color);
  if (mode == 'bg') return Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["background: ", "; color: ", ";"], ["background: ", "; color: ", ";"])), color, Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["getTextColorForBackground"])(color));
  return '';
} // temporary hacks here just for test


function hack_presentation(field, v, text) {
  if (!field.config.pr || field.config.pr == 'number') return text;
  if (v == null) return text; // this ugly line handles the case of text being mapped to some value

  if (text != v.toString()) return text;
  var pr = field.config.pr;

  if (pr == 'ts_m') {
    var m = moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(v * 60);
    text = m.format('YY-MM-DD HH:mm');
  }

  if (pr == 'time_hm') {
    var m = moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(v * 60);
    text = m.utc().format('HH:mm');
  }

  if (pr == 'time_hms') {
    var m = moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(v);
    text = m.format('HH:mm:ss');
  }

  if (pr == 'date_dmy') {
    var m = moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(v * 1440 * 60);
    text = m.format('YY-MM-DD HH:mm');
  }

  return text;
}

function Grid(_a) {
  var widths = _a.widths,
      height = _a.height,
      width = _a.width,
      horizontal = _a.horizontal,
      rowmaker = _a.rowmaker,
      fields = _a.fields,
      attributes = _a.attributes;
  var cells = [];
  var nvalues = 0;
  var nrows = 0;

  if (attributes) {
    var field = fields[0];
    cells.push(rce('div', {
      key: field.key,
      className: STYLES.corner
    }, field.text));
    cells.push(attributes.map(function (a) {
      return rce('div', {
        key: a.key,
        className: STYLES.headercell
      }, a.text);
    }));
    fields = fields.slice(1);
    nrows += 1;
  } // ok, should we groupby here ?


  fields.forEach(function (ff) {
    var fieldarray; // ok, it's a group

    if (ff.fields) {
      var groupcell = rce('div', {
        key: "__group_" + ff.key,
        className: STYLES.groupcell
      }, ff.text);
      cells.push(groupcell);
      nrows += 1;
      fieldarray = ff.fields;
    } else {
      fieldarray = [ff];
    }

    fieldarray.forEach(function (f) {
      var row = rowmaker(f.field);
      var namefield = rce('div', {
        key: f.key,
        className: STYLES.namecell
      }, f.text);
      cells.push(namefield); // cells.push(row.ncell);

      cells.push(row); // if (i == 0)

      nvalues = row.length;
      nrows += 1;
    });
  }); // compose heights
  // XXX: custom widths are disabled now
  // const gtc = widths.map(e => { return e ?? 'minmax(max-content, 1fr)' }).join(' ');

  var style = !horizontal ? Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n      display: grid;\n      grid-template-columns: minmax(max-content, 1fr) repeat(", ", minmax(max-content, 1fr));\n      grid-template-rows: repeat(", ", minmax(max-content, 40px));\n      height: ", ";\n      width: ", ";\n      overflow: auto;\n    }"], ["\n    {\n      display: grid;\n      grid-template-columns: minmax(max-content, 1fr) repeat(", ", minmax(max-content, 1fr));\n      grid-template-rows: repeat(", ", minmax(max-content, 40px));\n      height: ", ";\n      width: ", ";\n      overflow: auto;\n    }"])), nvalues, nrows, height ? height + 'px' : '100%', width ? width + 'px' : '100%') : Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n      display: grid;\n      grid-template-rows: 32px max-content repeat(", ", 1fr);\n      /* grid-auto-columns: minmax(max-content, 1fr); */\n      grid-auto-flow: column;\n      height: ", ";\n      width: ", ";\n      overflow: auto;\n    }"], ["\n    {\n      display: grid;\n      grid-template-rows: 32px max-content repeat(", ", 1fr);\n      /* grid-auto-columns: minmax(max-content, 1fr); */\n      grid-auto-flow: column;\n      height: ", ";\n      width: ", ";\n      overflow: auto;\n    }"])), nrows, height ? height + 'px' : '100%', width ? width + 'px' : '100%');
  var groupcorn = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n      position: sticky;\n      top: 0;\n      left: 0;\n      grid-row: 1 / 2;\n      grid-column: 1 / 2;\n      text-align: center;\n      border-right: 1px solid ", ";\n      background-color: ", ";\n      padding: 8px;\n      z-index: 4;\n    }\n    "], ["\n    {\n      position: sticky;\n      top: 0;\n      left: 0;\n      grid-row: 1 / 2;\n      grid-column: 1 / 2;\n      text-align: center;\n      border-right: 1px solid ", ";\n      background-color: ", ";\n      padding: 8px;\n      z-index: 4;\n    }\n    "])), BORDER_BG, HEADER_BG);
  var group0 = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n  {\n    position: sticky;\n    top: 0;\n    grid-row: 1 / 2;\n    grid-column: 2 / 4;\n    text-align: center;\n    border-right: 1px solid ", ";\n    background-color: ", ";\n    padding: 8px;\n  }\n  "], ["\n  {\n    position: sticky;\n    top: 0;\n    grid-row: 1 / 2;\n    grid-column: 2 / 4;\n    text-align: center;\n    border-right: 1px solid ", ";\n    background-color: ", ";\n    padding: 8px;\n  }\n  "])), BORDER_BG, HEADER_BG);
  var group1 = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n  {\n    position: sticky;\n    top: 0;\n    grid-row: 1 / 2;\n    grid-column: 4 / 7;\n    text-align: center;\n    border-right: 1px solid ", ";\n    background-color: ", ";\n    padding: 8px;\n  }\n  "], ["\n  {\n    position: sticky;\n    top: 0;\n    grid-row: 1 / 2;\n    grid-column: 4 / 7;\n    text-align: center;\n    border-right: 1px solid ", ";\n    background-color: ", ";\n    padding: 8px;\n  }\n  "])), BORDER_BG, HEADER_BG);
  return rce('div', {
    className: style
  }, cells);
}

function create_field(field, df, options) {
  var _a;

  var field_name = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getFieldDisplayName"])(field, df);
  var common_unit = options.show_common_unit && ((_a = field.config) === null || _a === void 0 ? void 0 : _a.unit);
  if (common_unit == 'none') common_unit = undefined;
  return {
    key: field.name,
    text: common_unit ? field_name + ", " + common_unit : field_name,
    field: field
  };
}

function create_row(_a) {
  var _b;

  var field = _a.field,
      df = _a.df,
      options = _a.options,
      plaintext = _a.plaintext;
  var vcells = [];
  if (!field.display) field.display = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getDisplayProcessor"])({
    field: field
  });

  for (var i = 0; i < field.values.length; i++) {
    var key = field.name + '.' + i;
    var v = field.values.get(i);
    if (v == null) v = undefined;
    var dv = field.display(v);
    var text = options.show_common_unit ? dv.text : Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["formattedValueToString"])(dv);
    var color = colorize_cell((_b = field.config.custom) === null || _b === void 0 ? void 0 : _b.display_mode, dv.color);
    text = hack_presentation(field, v, text);
    var cell;
    if (!plaintext) cell = rce('div', {
      key: field.name + '.' + i,
      className: color + " } " + STYLES.valcell
    }, text);else cell = {
      key: field.name + '.' + i,
      text: text
    };
    vcells.push(cell);
  } // values are just elements or react elements ?


  return vcells;
} // ugly, but at least extracted here from the main flow


function create_groups(df, options, label) {
  var res = [];
  var fields = df.fields;
  var groups = [];
  var ungrouped = fields.filter(function (f) {
    var _a;

    return ((_a = f === null || f === void 0 ? void 0 : f.labels) === null || _a === void 0 ? void 0 : _a[label]) == undefined;
  });
  fields.forEach(function (f) {
    var _a;

    var l = (_a = f === null || f === void 0 ? void 0 : f.labels) === null || _a === void 0 ? void 0 : _a[label];
    if (l != undefined && !groups.includes(l)) groups.push(l);
  });
  ungrouped.forEach(function (f) {
    res.push(create_field(f, df, options));
  });
  groups.forEach(function (g) {
    res.push({
      key: g,
      text: g,
      fields: fields.filter(function (f) {
        var _a;

        return ((_a = f === null || f === void 0 ? void 0 : f.labels) === null || _a === void 0 ? void 0 : _a[label]) == g;
      }).map(function (f) {
        return create_field(f, df, options);
      })
    });
  });
  return res;
}

function VTable(_a) {
  var _b, _c, _d;

  var data = _a.data,
      opts = _a.options,
      height = _a.height,
      width = _a.width;
  var count = (_b = data.series) === null || _b === void 0 ? void 0 : _b.length;
  var df = data.series[0];
  var has_fields = df === null || df === void 0 ? void 0 : df.fields.length;
  if (!count || !has_fields) return rce('div', null, 'No data');
  var is_hor = opts.is_horizontal;

  var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opts), {
    style: is_hor ? get_hstyles() : get_vstyles()
  });

  var widths;
  widths = Array(df.fields[0].values.length + 1);
  widths.fill(undefined);
  var custom_widths = (_d = (_c = options.custom_widths) === null || _c === void 0 ? void 0 : _c.split(';').map(function (f) {
    return f.trim();
  })) !== null && _d !== void 0 ? _d : [];

  if (custom_widths.length) {
    var cwl_1 = custom_widths.length;
    widths = widths.map(function (_, i) {
      var cw = Number.parseInt(custom_widths[i < cwl_1 ? i : cwl_1 - 1]);
      return Number.isFinite(cw) && cw ? cw + 'px' : undefined;
    });
  }

  console.log('here'); // ok, grouping here

  var label = options.group_by_label;
  var attributes = options.first_value_is_category ? create_row({
    field: df.fields[0],
    df: df,
    options: options,
    plaintext: true
  }) : undefined;
  return rce(Grid, {
    height: height,
    width: width,
    widths: widths,
    horizontal: is_hor,
    fields: label ? create_groups(df, options, label) : df.fields.map(function (f) {
      return create_field(f, df, options);
    }),
    attributes: attributes,
    rowmaker: function rowmaker(field) {
      return create_row({
        field: field,
        df: df,
        options: options,
        plaintext: false
      });
    }
  });
}
;

function get_vstyles() {
  return {
    corner: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n        position: sticky;\n        left: 0;\n        top: 0;\n        z-index: 2;\n        background-color: ", ";\n        border-bottom: 1px solid ", ";\n    }"], ["\n    {\n        position: sticky;\n        left: 0;\n        top: 0;\n        z-index: 2;\n        background-color: ", ";\n        border-bottom: 1px solid ", ";\n    }"])), HEADER_BG, BORDER_BG),
    namecell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n      position: sticky;\n      left: 0;\n      border-bottom: 1px solid ", ";\n      background-color: ", ";\n    }"], ["\n    {\n      position: sticky;\n      left: 0;\n      border-bottom: 1px solid ", ";\n      background-color: ", ";\n    }"])), BORDER_BG, HEADER_BG),
    groupcell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n      position: sticky;\n      left: 0;\n      /* border-bottom: 1px solid ", "; */\n      background-color: ", ";\n      color: #33a2e5;\n      padding: 8px;\n      padding-left: 4px;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      grid-column: 1 / -1;\n      justify-self: start;  /* this is a must for full row to be sticky */\n      /* align-self: end; */\n    }"], ["\n    {\n      position: sticky;\n      left: 0;\n      /* border-bottom: 1px solid ", "; */\n      background-color: ", ";\n      color: #33a2e5;\n      padding: 8px;\n      padding-left: 4px;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      grid-column: 1 / -1;\n      justify-self: start;  /* this is a must for full row to be sticky */\n      /* align-self: end; */\n    }"])), BORDER_BG, HEADER_BG),
    headercell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n      position: sticky;\n      top: 0;\n      border-bottom: 1px solid ", ";\n      background-color: ", ";\n      z-index: 1;\n    }\n    "], ["\n    {\n      position: sticky;\n      top: 0;\n      border-bottom: 1px solid ", ";\n      background-color: ", ";\n      z-index: 1;\n    }\n    "])), BORDER_BG, HEADER_BG),
    valcell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n      border-bottom: 1px solid ", ";\n    }\n    "], ["\n    {\n      border-bottom: 1px solid ", ";\n    }\n    "])), BORDER_BG)
  };
}

function get_hstyles() {
  return {
    corner: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n        position: sticky;\n        left: 0;\n        top: 32px;\n        z-index: 2;\n        background-color: ", ";\n        border-bottom: 1px solid ", ";\n        /* border-right: 1px solid ", "; */\n        color: #33a2e5;\n        padding: 8px;\n        /* align-self: end; */\n        text-overflow: ellipsis;\n        text-align: right;\n        white-space: nowrap;\n    }"], ["\n    {\n        position: sticky;\n        left: 0;\n        top: 32px;\n        z-index: 2;\n        background-color: ", ";\n        border-bottom: 1px solid ", ";\n        /* border-right: 1px solid ", "; */\n        color: #33a2e5;\n        padding: 8px;\n        /* align-self: end; */\n        text-overflow: ellipsis;\n        text-align: right;\n        white-space: nowrap;\n    }"])), HEADER_BG, BORDER_BG, BORDER_BG),
    namecell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n      position: sticky;\n      top: 32px;\n      /* border-right: 1px solid ", "; */\n      border-bottom: 1px solid ", ";\n      background-color: ", ";\n      /* color: #33a2e5; */\n      color: #33a2e5;\n      padding: 8px;\n      padding-left: 8px;\n      text-align: right;\n    }"], ["\n    {\n      position: sticky;\n      top: 32px;\n      /* border-right: 1px solid ", "; */\n      border-bottom: 1px solid ", ";\n      background-color: ", ";\n      /* color: #33a2e5; */\n      color: #33a2e5;\n      padding: 8px;\n      padding-left: 8px;\n      text-align: right;\n    }"])), BORDER_BG, BORDER_BG, HEADER_BG),
    groupcell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n      position: sticky;\n      left: 0;\n      /* border-bottom: 1px solid ", "; */\n      background-color: ", ";\n      color: #9fa7b3;\n      padding: 8px;\n      padding-left: 4px;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      grid-column: 1 / -1;\n      justify-self: start;  /* this is a must for full row to be sticky */\n      /* align-self: end; */\n    }"], ["\n    {\n      position: sticky;\n      left: 0;\n      /* border-bottom: 1px solid ", "; */\n      background-color: ", ";\n      color: #9fa7b3;\n      padding: 8px;\n      padding-left: 4px;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      grid-column: 1 / -1;\n      justify-self: start;  /* this is a must for full row to be sticky */\n      /* align-self: end; */\n    }"])), BORDER_BG, HEADER_BG),
    headercell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_16 || (templateObject_16 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n      position: sticky;\n      left: 0;\n      border-bottom: 1px solid ", ";\n      background-color: ", ";\n      color: #9fa7b3;\n      text-align: right;\n      padding: 8px;\n      z-index: 1;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n    "], ["\n    {\n      position: sticky;\n      left: 0;\n      border-bottom: 1px solid ", ";\n      background-color: ", ";\n      color: #9fa7b3;\n      text-align: right;\n      padding: 8px;\n      z-index: 1;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n    "])), BORDER_BG, HEADER_BG),
    valcell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_17 || (templateObject_17 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    {\n      text-align: right;\n      padding: 8px;\n      border-bottom: 1px solid ", ";\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n    "], ["\n    {\n      text-align: right;\n      padding: 8px;\n      border-bottom: 1px solid ", ";\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n    "])), BORDER_BG)
  };
}

var STYLES = {
  valcell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_18 || (templateObject_18 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    text-align: right;\n    padding: 8px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }"], ["\n    text-align: right;\n    padding: 8px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }"]))),
  namecell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_19 || (templateObject_19 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    position: sticky;\n    left: 0;\n    border-bottom: 1px solid ", ";\n    background-color: ", ";\n    text-align: left;\n    padding: 8px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    color: #9fa7b3;\n  "], ["\n    position: sticky;\n    left: 0;\n    border-bottom: 1px solid ", ";\n    background-color: ", ";\n    text-align: left;\n    padding: 8px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    color: #9fa7b3;\n  "])), BORDER_BG, HEADER_BG),
  corner: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_20 || (templateObject_20 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n  {\n      position: sticky;\n      left: 0;\n      top: 0;\n      z-index: 2;\n      background-color: ", ";\n      color: #33a2e5;\n      border-bottom: 1px solid ", ";\n      padding: 8px;\n  }"], ["\n  {\n      position: sticky;\n      left: 0;\n      top: 0;\n      z-index: 2;\n      background-color: ", ";\n      color: #33a2e5;\n      border-bottom: 1px solid ", ";\n      padding: 8px;\n  }"])), HEADER_BG, BORDER_BG),
  groupcell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_21 || (templateObject_21 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n  {\n    position: sticky;\n    left: 0;\n    /* border-bottom: 1px solid ", "; */\n    background-color: ", ";\n    color: #33a2e5;\n    padding: 8px;\n    padding-left: 4px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    grid-column: 1 / -1;\n    justify-self: start;  /* this is a must for full row to be sticky */\n    /* align-self: end; */\n  }"], ["\n  {\n    position: sticky;\n    left: 0;\n    /* border-bottom: 1px solid ", "; */\n    background-color: ", ";\n    color: #33a2e5;\n    padding: 8px;\n    padding-left: 4px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    grid-column: 1 / -1;\n    justify-self: start;  /* this is a must for full row to be sticky */\n    /* align-self: end; */\n  }"])), BORDER_BG, HEADER_BG),
  headercell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_22 || (templateObject_22 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n  {\n    position: sticky;\n    top: 0;\n    border-bottom: 1px solid ", ";\n    color: #33a2e5;\n    background-color: ", ";\n    z-index: 1;\n    text-align: right;\n    padding: 8px;\n  }\n  "], ["\n  {\n    position: sticky;\n    top: 0;\n    border-bottom: 1px solid ", ";\n    color: #33a2e5;\n    background-color: ", ";\n    z-index: 1;\n    text-align: right;\n    padding: 8px;\n  }\n  "])), BORDER_BG, HEADER_BG)
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22;

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