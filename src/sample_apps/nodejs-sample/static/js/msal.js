/*! msal v1.2.2 2020-03-25 */
'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Msal", [], factory);
	else if(typeof exports === 'object')
		exports["Msal"] = factory();
	else
		root["Msal"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
Object.defineProperty(exports, "__esModule", { value: true });
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
exports.__extends = __extends;
exports.__assign = function () {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
exports.__rest = __rest;
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
exports.__decorate = __decorate;
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
exports.__param = __param;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
exports.__metadata = __metadata;
function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
exports.__awaiter = __awaiter;
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
exports.__generator = __generator;
function __exportStar(m, exports) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
exports.__exportStar = __exportStar;
function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m)
        return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length)
                o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}
exports.__values = __values;
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
exports.__read = __read;
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
exports.__spread = __spread;
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
exports.__spreadArrays = __spreadArrays;
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
exports.__await = __await;
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
exports.__asyncGenerator = __asyncGenerator;
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
exports.__asyncDelegator = __asyncDelegator;
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
exports.__asyncValues = __asyncValues;
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
exports.__makeTemplateObject = __makeTemplateObject;
;
function __importStar(mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result.default = mod;
    return result;
}
exports.__importStar = __importStar;
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}
exports.__importDefault = __importDefault;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var CryptoUtils = /** @class */ (function () {
    function CryptoUtils() {
    }
    /**
     * Creates a new random GUID
     * @returns string (GUID)
     */
    CryptoUtils.createNewGuid = function () {
        /*
         * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
         * pseudo-random numbers.
         * The algorithm is as follows:
         *     Set the two most significant bits (bits 6 and 7) of the
         *        clock_seq_hi_and_reserved to zero and one, respectively.
         *     Set the four most significant bits (bits 12 through 15) of the
         *        time_hi_and_version field to the 4-bit version number from
         *        Section 4.1.3. Version4
         *     Set all the other bits to randomly (or pseudo-randomly) chosen
         *     values.
         * UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
         * time-low               = 4hexOctet
         * time-mid               = 2hexOctet
         * time-high-and-version  = 2hexOctet
         * clock-seq-and-reserved = hexOctet:
         * clock-seq-low          = hexOctet
         * node                   = 6hexOctet
         * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
         * y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
         * y values are 8, 9, A, B
         */
        var cryptoObj = window.crypto; // for IE 11
        if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            // buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; // buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; // buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            // buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; // buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; // buffer[8] & 10111111 will set the 6 bit to 0.
            return CryptoUtils.decimalToHex(buffer[0]) + CryptoUtils.decimalToHex(buffer[1])
                + CryptoUtils.decimalToHex(buffer[2]) + CryptoUtils.decimalToHex(buffer[3])
                + "-" + CryptoUtils.decimalToHex(buffer[4]) + CryptoUtils.decimalToHex(buffer[5])
                + "-" + CryptoUtils.decimalToHex(buffer[6]) + CryptoUtils.decimalToHex(buffer[7])
                + "-" + CryptoUtils.decimalToHex(buffer[8]) + CryptoUtils.decimalToHex(buffer[9])
                + "-" + CryptoUtils.decimalToHex(buffer[10]) + CryptoUtils.decimalToHex(buffer[11])
                + CryptoUtils.decimalToHex(buffer[12]) + CryptoUtils.decimalToHex(buffer[13])
                + CryptoUtils.decimalToHex(buffer[14]) + CryptoUtils.decimalToHex(buffer[15]);
        }
        else {
            var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var hex = "0123456789abcdef";
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
                if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                    // each x and y needs to be random
                    r = Math.random() * 16 | 0;
                }
                if (guidHolder[i] === "x") {
                    guidResponse += hex[r];
                }
                else if (guidHolder[i] === "y") {
                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                    r |= 0x8; // set pos 3 to 1 as 1???
                    guidResponse += hex[r];
                }
                else {
                    guidResponse += guidHolder[i];
                }
            }
            return guidResponse;
        }
    };
    /**
     * verifies if a string is  GUID
     * @param guid
     */
    CryptoUtils.isGuid = function (guid) {
        var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return regexGuid.test(guid);
    };
    /**
     * Decimal to Hex
     *
     * @param num
     */
    CryptoUtils.decimalToHex = function (num) {
        var hex = num.toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    // See: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_4_%E2%80%93_escaping_the_string_before_encoding_it
    /**
     * encoding string to base64 - platform specific check
     *
     * @param input
     */
    CryptoUtils.base64Encode = function (input) {
        return btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode(Number("0x" + p1));
        }));
    };
    /**
     * Decodes a base64 encoded string.
     *
     * @param input
     */
    CryptoUtils.base64Decode = function (input) {
        var encodedString = input.replace(/-/g, "+").replace(/_/g, "/");
        switch (encodedString.length % 4) {
            case 0:
                break;
            case 2:
                encodedString += "==";
                break;
            case 3:
                encodedString += "=";
                break;
            default:
                throw new Error("Invalid base64 string");
        }
        return decodeURIComponent(atob(encodedString).split("").map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    };
    /**
     * deserialize a string
     *
     * @param query
     */
    CryptoUtils.deserialize = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    return CryptoUtils;
}());
exports.CryptoUtils = CryptoUtils;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 * Constants
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "libraryName", {
        get: function () { return "Msal.js"; } // used in telemetry sdkName
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "claims", {
        get: function () { return "claims"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientId", {
        get: function () { return "clientId"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "adalIdToken", {
        get: function () { return "adal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cachePrefix", {
        get: function () { return "msal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "scopes", {
        get: function () { return "scopes"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "no_account", {
        get: function () { return "NO_ACCOUNT"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "consumersUtid", {
        get: function () { return "9188040d-6c67-4c5b-b112-36a304b66dad"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "upn", {
        get: function () { return "upn"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_select_account", {
        get: function () { return "&prompt=select_account"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_none", {
        get: function () { return "&prompt=none"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt", {
        get: function () { return "prompt"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "response_mode_fragment", {
        get: function () { return "&response_mode=fragment"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "resourceDelimiter", {
        get: function () { return "|"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheDelimiter", {
        get: function () { return "."; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpWidth", {
        get: function () { return this._popUpWidth; },
        set: function (width) {
            this._popUpWidth = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpHeight", {
        get: function () { return this._popUpHeight; },
        set: function (height) {
            this._popUpHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "login", {
        get: function () { return "LOGIN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewToken", {
        get: function () { return "RENEW_TOKEN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "unknown", {
        get: function () { return "UNKNOWN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "homeAccountIdentifier", {
        get: function () { return "homeAccountIdentifier"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "common", {
        get: function () { return "common"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "openidScope", {
        get: function () { return "openid"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "profileScope", {
        get: function () { return "profile"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypeRedirect", {
        get: function () { return "redirectInteraction"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypePopup", {
        get: function () { return "popupInteraction"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "inProgress", {
        get: function () { return "inProgress"; },
        enumerable: true,
        configurable: true
    });
    Constants._popUpWidth = 483;
    Constants._popUpHeight = 600;
    return Constants;
}());
exports.Constants = Constants;
/**
 * Keys in the hashParams
 */
var ServerHashParamKeys;
(function (ServerHashParamKeys) {
    ServerHashParamKeys["SCOPE"] = "scope";
    ServerHashParamKeys["ERROR"] = "error";
    ServerHashParamKeys["ERROR_DESCRIPTION"] = "error_description";
    ServerHashParamKeys["ACCESS_TOKEN"] = "access_token";
    ServerHashParamKeys["ID_TOKEN"] = "id_token";
    ServerHashParamKeys["EXPIRES_IN"] = "expires_in";
    ServerHashParamKeys["SESSION_STATE"] = "session_state";
    ServerHashParamKeys["CLIENT_INFO"] = "client_info";
})(ServerHashParamKeys = exports.ServerHashParamKeys || (exports.ServerHashParamKeys = {}));
;
/**
 * @hidden
 * CacheKeys for MSAL
 */
var TemporaryCacheKeys;
(function (TemporaryCacheKeys) {
    TemporaryCacheKeys["AUTHORITY"] = "authority";
    TemporaryCacheKeys["ACQUIRE_TOKEN_ACCOUNT"] = "acquireTokenAccount";
    TemporaryCacheKeys["SESSION_STATE"] = "session.state";
    TemporaryCacheKeys["STATE_LOGIN"] = "state.login";
    TemporaryCacheKeys["STATE_ACQ_TOKEN"] = "state.acquireToken";
    TemporaryCacheKeys["STATE_RENEW"] = "state.renew";
    TemporaryCacheKeys["NONCE_IDTOKEN"] = "nonce.idtoken";
    TemporaryCacheKeys["LOGIN_REQUEST"] = "login.request";
    TemporaryCacheKeys["RENEW_STATUS"] = "token.renew.status";
    TemporaryCacheKeys["URL_HASH"] = "urlHash";
    TemporaryCacheKeys["INTERACTION_STATUS"] = "interaction_status";
    TemporaryCacheKeys["REDIRECT_REQUEST"] = "redirect_request";
})(TemporaryCacheKeys = exports.TemporaryCacheKeys || (exports.TemporaryCacheKeys = {}));
var PersistentCacheKeys;
(function (PersistentCacheKeys) {
    PersistentCacheKeys["IDTOKEN"] = "idtoken";
    PersistentCacheKeys["CLIENT_INFO"] = "client.info";
})(PersistentCacheKeys = exports.PersistentCacheKeys || (exports.PersistentCacheKeys = {}));
var ErrorCacheKeys;
(function (ErrorCacheKeys) {
    ErrorCacheKeys["LOGIN_ERROR"] = "login.error";
    ErrorCacheKeys["ERROR"] = "error";
    ErrorCacheKeys["ERROR_DESC"] = "error.description";
})(ErrorCacheKeys = exports.ErrorCacheKeys || (exports.ErrorCacheKeys = {}));
exports.AADTrustedHostList = {
    "login.windows.net": "login.windows.net",
    "login.chinacloudapi.cn": "login.chinacloudapi.cn",
    "login.cloudgovapi.us": "login.cloudgovapi.us",
    "login.microsoftonline.com": "login.microsoftonline.com",
    "login.microsoftonline.de": "login.microsoftonline.de",
    "login.microsoftonline.us": "login.microsoftonline.us"
};
/**
 * @hidden
 * SSO Types - generated to populate hints
 */
var SSOTypes;
(function (SSOTypes) {
    SSOTypes["ACCOUNT"] = "account";
    SSOTypes["SID"] = "sid";
    SSOTypes["LOGIN_HINT"] = "login_hint";
    SSOTypes["ID_TOKEN"] = "id_token";
    SSOTypes["DOMAIN_HINT"] = "domain_hint";
    SSOTypes["ORGANIZATIONS"] = "organizations";
    SSOTypes["CONSUMERS"] = "consumers";
    SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
    SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
    SSOTypes["LOGIN_REQ"] = "login_req";
    SSOTypes["DOMAIN_REQ"] = "domain_req";
})(SSOTypes = exports.SSOTypes || (exports.SSOTypes = {}));
;
/**
 * @hidden
 */
exports.BlacklistedEQParams = [
    SSOTypes.SID,
    SSOTypes.LOGIN_HINT
];
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 * @hidden
 */
exports.PromptState = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
};
/**
 * MSAL JS Library Version
 */
function libraryVersion() {
    return "1.2.2";
}
exports.libraryVersion = libraryVersion;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * Check if a string is empty
     *
     * @param str
     */
    StringUtils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ClientAuthError_1 = __webpack_require__(6);
exports.ClientConfigurationErrorMessage = {
    configurationNotSet: {
        code: "no_config_set",
        desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."
    },
    storageNotSupported: {
        code: "storage_not_supported",
        desc: "The value for the cacheLocation is not supported."
    },
    noRedirectCallbacksSet: {
        code: "no_redirect_callbacks",
        desc: "No redirect callbacks have been set. Please call handleRedirectCallback() with the appropriate function arguments before continuing. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    invalidCallbackObject: {
        code: "invalid_callback_object",
        desc: "The object passed for the callback was invalid. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    scopesRequired: {
        code: "scopes_required",
        desc: "Scopes are required to obtain an access token."
    },
    emptyScopes: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as empty array."
    },
    nonArrayScopes: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    clientScope: {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'",
    },
    invalidAuthorityType: {
        code: "invalid_authority_type",
        desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https."
    },
    authorityUriInvalidPath: {
        code: "authority_uri_invalid_path",
        desc: "Given authority URI is invalid."
    },
    unsupportedAuthorityValidation: {
        code: "unsupported_authority_validation",
        desc: "The authority validation is not supported for this authority type."
    },
    b2cAuthorityUriInvalidPath: {
        code: "b2c_authority_uri_invalid_path",
        desc: "The given URI for the B2C authority is invalid."
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    emptyRequestError: {
        code: "empty_request_error",
        desc: "Request object is required."
    },
    invalidCorrelationIdError: {
        code: "invalid_guid_sent_as_correlationId",
        desc: "Please set the correlationId as a valid guid"
    },
    telemetryConfigError: {
        code: "telemetry_config_error",
        desc: "Telemetry config is not configured with required values"
    }
};
/**
 * Error thrown when there is an error in configuration of the .js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    ClientConfigurationError.createNoSetConfigurationError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.configurationNotSet.code, "" + exports.ClientConfigurationErrorMessage.configurationNotSet.desc);
    };
    ClientConfigurationError.createStorageNotSupportedError = function (givenCacheLocation) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.storageNotSupported.code, exports.ClientConfigurationErrorMessage.storageNotSupported.desc + " Given location: " + givenCacheLocation);
    };
    ClientConfigurationError.createRedirectCallbacksNotSetError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.code, exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.desc);
    };
    ClientConfigurationError.createInvalidCallbackObjectError = function (callbackObject) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCallbackObject.code, exports.ClientConfigurationErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
    };
    ClientConfigurationError.createEmptyScopesArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.emptyScopes.code, exports.ClientConfigurationErrorMessage.emptyScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesNonArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.nonArrayScopes.code, exports.ClientConfigurationErrorMessage.nonArrayScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createClientIdSingleScopeError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.clientScope.code, exports.ClientConfigurationErrorMessage.clientScope.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesRequiredError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.scopesRequired.code, exports.ClientConfigurationErrorMessage.scopesRequired.desc + " Given value: " + scopesValue);
    };
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidPrompt.code, exports.ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code, exports.ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    ClientConfigurationError.createEmptyRequestError = function () {
        var _a = exports.ClientConfigurationErrorMessage.emptyRequestError, code = _a.code, desc = _a.desc;
        return new ClientConfigurationError(code, desc);
    };
    ClientConfigurationError.createInvalidCorrelationIdError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCorrelationIdError.code, exports.ClientConfigurationErrorMessage.invalidCorrelationIdError.desc);
    };
    ClientConfigurationError.createTelemetryConfigError = function (config) {
        var _a = exports.ClientConfigurationErrorMessage.telemetryConfigError, code = _a.code, desc = _a.desc;
        var requiredKeys = {
            applicationName: "string",
            applicationVersion: "string",
            telemetryEmitter: "function"
        };
        var missingKeys = Object.keys(requiredKeys)
            .reduce(function (keys, key) {
            return config[key] ? keys : keys.concat([key + " (" + requiredKeys[key] + ")"]);
        }, []);
        return new ClientConfigurationError(code, desc + " mising values: " + missingKeys.join(","));
    };
    return ClientConfigurationError;
}(ClientAuthError_1.ClientAuthError));
exports.ClientConfigurationError = ClientConfigurationError;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var ScopeSet_1 = __webpack_require__(10);
var StringUtils_1 = __webpack_require__(3);
var CryptoUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    /**
     * generates the URL with QueryString Parameters
     * @param scopes
     */
    UrlUtils.createNavigateUrl = function (serverRequestParams) {
        var str = this.createNavigationUrlString(serverRequestParams);
        var authEndpoint = serverRequestParams.authorityInstance.AuthorizationEndpoint;
        // if the endpoint already has queryparams, lets add to it, otherwise add the first one
        if (authEndpoint.indexOf("?") < 0) {
            authEndpoint += "?";
        }
        else {
            authEndpoint += "&";
        }
        var requestUrl = "" + authEndpoint + str.join("&");
        return requestUrl;
    };
    /**
     * Generate the array of all QueryStringParams to be sent to the server
     * @param scopes
     */
    UrlUtils.createNavigationUrlString = function (serverRequestParams) {
        var scopes = serverRequestParams.scopes;
        if (scopes.indexOf(serverRequestParams.clientId) === -1) {
            scopes.push(serverRequestParams.clientId);
        }
        var str = [];
        str.push("response_type=" + serverRequestParams.responseType);
        this.translateclientIdUsedInScope(scopes, serverRequestParams.clientId);
        str.push("scope=" + encodeURIComponent(ScopeSet_1.ScopeSet.parseScope(scopes)));
        str.push("client_id=" + encodeURIComponent(serverRequestParams.clientId));
        str.push("redirect_uri=" + encodeURIComponent(serverRequestParams.redirectUri));
        str.push("state=" + encodeURIComponent(serverRequestParams.state));
        str.push("nonce=" + encodeURIComponent(serverRequestParams.nonce));
        str.push("client_info=1");
        str.push("x-client-SKU=" + serverRequestParams.xClientSku);
        str.push("x-client-Ver=" + serverRequestParams.xClientVer);
        if (serverRequestParams.promptValue) {
            str.push("prompt=" + encodeURIComponent(serverRequestParams.promptValue));
        }
        if (serverRequestParams.claimsValue) {
            str.push("claims=" + encodeURIComponent(serverRequestParams.claimsValue));
        }
        if (serverRequestParams.queryParameters) {
            str.push(serverRequestParams.queryParameters);
        }
        if (serverRequestParams.extraQueryParameters) {
            str.push(serverRequestParams.extraQueryParameters);
        }
        str.push("client-request-id=" + encodeURIComponent(serverRequestParams.correlationId));
        return str;
    };
    /**
     * append the required scopes: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes
     * @param scopes
     */
    UrlUtils.translateclientIdUsedInScope = function (scopes, clientId) {
        var clientIdIndex = scopes.indexOf(clientId);
        if (clientIdIndex >= 0) {
            scopes.splice(clientIdIndex, 1);
            if (scopes.indexOf("openid") === -1) {
                scopes.push("openid");
            }
            if (scopes.indexOf("profile") === -1) {
                scopes.push("profile");
            }
        }
    };
    /**
     * Returns current window URL as redirect uri
     */
    UrlUtils.getDefaultRedirectUri = function () {
        return window.location.href.split("?")[0].split("#")[0];
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    UrlUtils.replaceTenantPath = function (url, tenantId) {
        url = url.toLowerCase();
        var urlObject = this.GetUrlComponents(url);
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
        }
        return this.constructAuthorityUriFromObject(urlObject, pathArray);
    };
    UrlUtils.constructAuthorityUriFromObject = function (urlObject, pathArray) {
        return this.CanonicalizeUri(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/"));
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    UrlUtils.GetUrlComponents = function (url) {
        if (!url) {
            throw "Url required";
        }
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        var match = url.match(regEx);
        if (!match || match.length < 6) {
            throw "Valid url required";
        }
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        return urlComponents;
    };
    /**
     * Given a url or path, append a trailing slash if one doesnt exist
     *
     * @param url
     */
    UrlUtils.CanonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
        }
        if (url && !UrlUtils.endsWith(url, "/")) {
            url += "/";
        }
        return url;
    };
    /**
     * Checks to see if the url ends with the suffix
     * Required because we are compiling for es5 instead of es6
     * @param url
     * @param str
     */
    // TODO: Rename this, not clear what it is supposed to do
    UrlUtils.endsWith = function (url, suffix) {
        if (!url || !suffix) {
            return false;
        }
        return url.indexOf(suffix, url.length - suffix.length) !== -1;
    };
    /**
     * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
     * @param url
     * @param name
     */
    UrlUtils.urlRemoveQueryStringParameter = function (url, name) {
        if (StringUtils_1.StringUtils.isEmpty(url)) {
            return url;
        }
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        url = url.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        return url;
    };
    /**
     * @hidden
     * @ignore
     *
     * Returns the anchor part(#) of the URL
     */
    UrlUtils.getHashFromUrl = function (urlStringOrFragment) {
        var hashIndex1 = urlStringOrFragment.indexOf("#");
        var hashIndex2 = urlStringOrFragment.indexOf("#/");
        if (hashIndex2 > -1) {
            return urlStringOrFragment.substring(hashIndex2 + 2);
        }
        else if (hashIndex1 > -1) {
            return urlStringOrFragment.substring(hashIndex1 + 1);
        }
        return urlStringOrFragment;
    };
    /**
     * @hidden
     * Check if the url contains a hash with known properties
     * @ignore
     */
    UrlUtils.urlContainsHash = function (urlString) {
        var parameters = UrlUtils.deserializeHash(urlString);
        return (parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION) ||
            parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR) ||
            parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ACCESS_TOKEN) ||
            parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ID_TOKEN));
    };
    /**
     * @hidden
     * Returns deserialized portion of URL hash
     * @ignore
     */
    UrlUtils.deserializeHash = function (urlFragment) {
        var hash = UrlUtils.getHashFromUrl(urlFragment);
        return CryptoUtils_1.CryptoUtils.deserialize(hash);
    };
    /**
     * @ignore
     * @param {string} URI
     * @returns {string} host from the URI
     *
     * extract URI from the host
     */
    UrlUtils.getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
        extractedUri = extractedUri.split("/")[0];
        return extractedUri;
    };
    return UrlUtils;
}());
exports.UrlUtils = UrlUtils;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AuthError_1 = __webpack_require__(7);
var StringUtils_1 = __webpack_require__(3);
exports.ClientAuthErrorMessage = {
    multipleMatchingTokens: {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. " +
            "Call AcquireToken again providing more requirements like authority."
    },
    multipleCacheAuthorities: {
        code: "multiple_authorities",
        desc: "Multiple authorities found in the cache. Pass authority in the API overload."
    },
    endpointResolutionError: {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    },
    popUpWindowError: {
        code: "popup_window_error",
        desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
    },
    tokenRenewalError: {
        code: "token_renewal_error",
        desc: "Token renewal operation failed due to timeout."
    },
    invalidIdToken: {
        code: "invalid_id_token",
        desc: "Invalid ID token format."
    },
    invalidStateError: {
        code: "invalid_state_error",
        desc: "Invalid state."
    },
    nonceMismatchError: {
        code: "nonce_mismatch_error",
        desc: "Nonce is not matching, Nonce received: "
    },
    loginProgressError: {
        code: "login_progress_error",
        desc: "Login_In_Progress: Error during login call - login is already in progress."
    },
    acquireTokenProgressError: {
        code: "acquiretoken_progress_error",
        desc: "AcquireToken_In_Progress: Error during login call - login is already in progress."
    },
    userCancelledError: {
        code: "user_cancelled",
        desc: "User cancelled the flow."
    },
    callbackError: {
        code: "callback_error",
        desc: "Error occurred in token received callback function."
    },
    userLoginRequiredError: {
        code: "user_login_error",
        desc: "User login is required."
    },
    userDoesNotExistError: {
        code: "user_non_existent",
        desc: "User object does not exist. Please call a login API."
    },
    clientInfoDecodingError: {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    },
    clientInfoNotPopulatedError: {
        code: "client_info_not_populated_error",
        desc: "The service did not populate client_info in the response, Please verify with the service team"
    },
    nullOrEmptyIdToken: {
        code: "null_or_empty_id_token",
        desc: "The idToken is null or empty. Please review the trace to determine the root cause."
    },
    idTokenNotParsed: {
        code: "id_token_parsing_error",
        desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
    },
    tokenEncodingError: {
        code: "token_encoding_error",
        desc: "The token to be decoded is not encoded correctly."
    },
    invalidInteractionType: {
        code: "invalid_interaction_type",
        desc: "The interaction type passed to the handler was incorrect or unknown"
    },
    cacheParseError: {
        code: "cannot_parse_cache",
        desc: "The cached token key is not a valid JSON and cannot be parsed"
    },
    blockTokenRequestsInHiddenIframe: {
        code: "block_token_requests",
        desc: "Token calls are blocked in hidden iframes"
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */
var ClientAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientAuthError, _super);
    function ClientAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientAuthError";
        Object.setPrototypeOf(_this, ClientAuthError.prototype);
        return _this;
    }
    ClientAuthError.createEndpointResolutionError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.endpointResolutionError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.endpointResolutionError.code, errorMessage);
    };
    ClientAuthError.createMultipleMatchingTokensInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleMatchingTokens.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    ClientAuthError.createMultipleAuthoritiesInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleCacheAuthorities.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleCacheAuthorities.desc + ".");
    };
    ClientAuthError.createPopupWindowError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.popUpWindowError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.popUpWindowError.code, errorMessage);
    };
    ClientAuthError.createTokenRenewalTimeoutError = function (urlNavigate) {
        var errorMessage = "URL navigated to is " + urlNavigate + ", " + exports.ClientAuthErrorMessage.tokenRenewalError.desc;
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenRenewalError.code, errorMessage);
    };
    ClientAuthError.createInvalidIdTokenError = function (idToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidIdToken.code, exports.ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + idToken);
    };
    // TODO: Is this not a security flaw to send the user the state expected??
    ClientAuthError.createInvalidStateError = function (invalidState, actualState) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidStateError.code, exports.ClientAuthErrorMessage.invalidStateError.desc + " " + invalidState + ", state expected : " + actualState + ".");
    };
    // TODO: Is this not a security flaw to send the user the Nonce expected??
    ClientAuthError.createNonceMismatchError = function (invalidNonce, actualNonce) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nonceMismatchError.code, exports.ClientAuthErrorMessage.nonceMismatchError.desc + " " + invalidNonce + ", nonce expected : " + actualNonce + ".");
    };
    ClientAuthError.createLoginInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.loginProgressError.code, exports.ClientAuthErrorMessage.loginProgressError.desc);
    };
    ClientAuthError.createAcquireTokenInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.acquireTokenProgressError.code, exports.ClientAuthErrorMessage.acquireTokenProgressError.desc);
    };
    ClientAuthError.createUserCancelledError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userCancelledError.code, exports.ClientAuthErrorMessage.userCancelledError.desc);
    };
    ClientAuthError.createErrorInCallbackFunction = function (errorDesc) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.callbackError.code, exports.ClientAuthErrorMessage.callbackError.desc + " " + errorDesc + ".");
    };
    ClientAuthError.createUserLoginRequiredError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userLoginRequiredError.code, exports.ClientAuthErrorMessage.userLoginRequiredError.desc);
    };
    ClientAuthError.createUserDoesNotExistError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userDoesNotExistError.code, exports.ClientAuthErrorMessage.userDoesNotExistError.desc);
    };
    ClientAuthError.createClientInfoDecodingError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoDecodingError.code, exports.ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createClientInfoNotPopulatedError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.code, exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nullOrEmptyIdToken.code, exports.ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
    };
    ClientAuthError.createIdTokenParsingError = function (caughtParsingError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.idTokenNotParsed.code, exports.ClientAuthErrorMessage.idTokenNotParsed.desc + " Failed with error: " + caughtParsingError);
    };
    ClientAuthError.createTokenEncodingError = function (incorrectlyEncodedToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenEncodingError.code, exports.ClientAuthErrorMessage.tokenEncodingError.desc + " Attempted to decode: " + incorrectlyEncodedToken);
    };
    ClientAuthError.createInvalidInteractionTypeError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidInteractionType.code, exports.ClientAuthErrorMessage.invalidInteractionType.desc);
    };
    ClientAuthError.createCacheParseError = function (key) {
        var errorMessage = "invalid key: " + key + ", " + exports.ClientAuthErrorMessage.cacheParseError.desc;
        return new ClientAuthError(exports.ClientAuthErrorMessage.cacheParseError.code, errorMessage);
    };
    ClientAuthError.createBlockTokenRequestsInHiddenIframeError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.blockTokenRequestsInHiddenIframe.code, exports.ClientAuthErrorMessage.blockTokenRequestsInHiddenIframe.desc);
    };
    return ClientAuthError;
}(AuthError_1.AuthError));
exports.ClientAuthError = ClientAuthError;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
exports.AuthErrorMessage = {
    unexpectedError: {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    },
    noWindowObjectError: {
        code: "no_window_object",
        desc: "No window object available. Details:"
    }
};
/**
 * General error class thrown by the MSAL.js library.
 */
var AuthError = /** @class */ (function (_super) {
    tslib_1.__extends(AuthError, _super);
    function AuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorMessage) || this;
        Object.setPrototypeOf(_this, AuthError.prototype);
        _this.errorCode = errorCode;
        _this.errorMessage = errorMessage;
        _this.name = "AuthError";
        return _this;
    }
    AuthError.createUnexpectedError = function (errDesc) {
        return new AuthError(exports.AuthErrorMessage.unexpectedError.code, exports.AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    AuthError.createNoWindowObjectError = function (errDesc) {
        return new AuthError(exports.AuthErrorMessage.noWindowObjectError.code, exports.AuthErrorMessage.noWindowObjectError.desc + " " + errDesc);
    };
    return AuthError;
}(Error));
exports.AuthError = AuthError;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_NAME_PREFIX = "msal.";
exports.EVENT_NAME_KEY = "event_name";
exports.START_TIME_KEY = "start_time";
exports.ELAPSED_TIME_KEY = "elapsed_time";
exports.TELEMETRY_BLOB_EVENT_NAMES = {
    MsalCorrelationIdConstStrKey: "Microsoft.MSAL.correlation_id",
    ApiTelemIdConstStrKey: "msal.api_telem_id",
    ApiIdConstStrKey: "msal.api_id",
    BrokerAppConstStrKey: "Microsoft_MSAL_broker_app",
    CacheEventCountConstStrKey: "Microsoft_MSAL_cache_event_count",
    HttpEventCountTelemetryBatchKey: "Microsoft_MSAL_http_event_count",
    IdpConstStrKey: "Microsoft_MSAL_idp",
    IsSilentTelemetryBatchKey: "",
    IsSuccessfulConstStrKey: "Microsoft_MSAL_is_successful",
    ResponseTimeConstStrKey: "Microsoft_MSAL_response_time",
    TenantIdConstStrKey: "Microsoft_MSAL_tenant_id",
    UiEventCountTelemetryBatchKey: "Microsoft_MSAL_ui_event_count"
};
// This is used to replace the real tenant in telemetry info
exports.TENANT_PLACEHOLDER = "<tenant>";


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ClientConfigurationError_1 = __webpack_require__(4);
var XHRClient_1 = __webpack_require__(18);
var UrlUtils_1 = __webpack_require__(5);
/**
 * @hidden
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Aad"] = 0] = "Aad";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    AuthorityType[AuthorityType["B2C"] = 2] = "B2C";
})(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
/**
 * @hidden
 */
var Authority = /** @class */ (function () {
    function Authority(authority, validateAuthority) {
        this.IsValidationEnabled = validateAuthority;
        this.CanonicalAuthority = authority;
        this.validateAsUri();
    }
    Object.defineProperty(Authority.prototype, "Tenant", {
        get: function () {
            return this.CanonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "AuthorizationEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "EndSessionEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.EndSessionEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "SelfSignedJwtAudience", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.Issuer.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Authority.prototype.validateResolved = function () {
        if (!this.tenantDiscoveryResponse) {
            throw "Please call ResolveEndpointsAsync first";
        }
    };
    Object.defineProperty(Authority.prototype, "CanonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this.canonicalAuthority;
        },
        set: function (url) {
            this.canonicalAuthority = UrlUtils_1.UrlUtils.CanonicalizeUri(url);
            this.canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
        get: function () {
            if (!this.canonicalAuthorityUrlComponents) {
                this.canonicalAuthorityUrlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(this.CanonicalAuthority);
            }
            return this.canonicalAuthorityUrlComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "DefaultOpenIdConfigurationEndpoint", {
        /**
         * // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
         */
        get: function () {
            return this.CanonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Given a string, validate that it is of the form https://domain/path
     */
    Authority.prototype.validateAsUri = function () {
        var components;
        try {
            components = this.CanonicalAuthorityUrlComponents;
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInsecure;
        }
        if (!components.PathSegments || components.PathSegments.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInvalidPath;
        }
    };
    /**
     * Calls the OIDC endpoint and returns the response
     */
    Authority.prototype.DiscoverEndpoints = function (openIdConfigurationEndpoint) {
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(openIdConfigurationEndpoint, "GET", /* enableCaching: */ true)
            .then(function (response) {
            return {
                AuthorizationEndpoint: response.authorization_endpoint,
                EndSessionEndpoint: response.end_session_endpoint,
                Issuer: response.issuer
            };
        });
    };
    /**
     * Returns a promise.
     * Checks to see if the authority is in the cache
     * Discover endpoints via openid-configuration
     * If successful, caches the endpoint for later use in OIDC
     */
    Authority.prototype.resolveEndpointsAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var openIdConfigurationEndpointResponse, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.GetOpenIdConfigurationEndpointAsync()];
                    case 1:
                        openIdConfigurationEndpointResponse = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.DiscoverEndpoints(openIdConfigurationEndpointResponse)];
                    case 2:
                        _a.tenantDiscoveryResponse = _b.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return Authority;
}());
exports.Authority = Authority;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientConfigurationError_1 = __webpack_require__(4);
var ScopeSet = /** @class */ (function () {
    function ScopeSet() {
    }
    /**
     * Check if there are dup scopes in a given request
     *
     * @param cachedScopes
     * @param scopes
     */
    // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
    ScopeSet.isIntersectingScopes = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        for (var i = 0; i < scopes.length; i++) {
            if (cachedScopes.indexOf(scopes[i].toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Check if a given scope is present in the request
     *
     * @param cachedScopes
     * @param scopes
     */
    ScopeSet.containsScope = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        return scopes.every(function (value) { return cachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
    };
    /**
     * toLower
     *
     * @param scopes
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.convertToLowerCase = function (scopes) {
        return scopes.map(function (scope) { return scope.toLowerCase(); });
    };
    /**
     * remove one element from a scope array
     *
     * @param scopes
     * @param scope
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.removeElement = function (scopes, scope) {
        return scopes.filter(function (value) { return value !== scope; });
    };
    /**
     * Parse the scopes into a formatted scopeList
     * @param scopes
     */
    ScopeSet.parseScope = function (scopes) {
        var scopeList = "";
        if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
                scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
        }
        return scopeList;
    };
    /**
     * @hidden
     *
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     * @ignore
     */
    ScopeSet.validateInputScope = function (scopes, scopesRequired, clientId) {
        if (!scopes) {
            if (scopesRequired) {
                throw ClientConfigurationError_1.ClientConfigurationError.createScopesRequiredError(scopes);
            }
            else {
                return;
            }
        }
        // Check that scopes is an array object (also throws error if scopes == null)
        if (!Array.isArray(scopes)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createScopesNonArrayError(scopes);
        }
        // Check that scopes is not an empty array
        if (scopes.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyScopesArrayError(scopes.toString());
        }
        // Check that clientId is passed as single scope
        if (scopes.indexOf(clientId) > -1) {
            if (scopes.length > 1) {
                throw ClientConfigurationError_1.ClientConfigurationError.createClientIdSingleScopeError(scopes.toString());
            }
        }
    };
    /**
     * @hidden
     *
     * Extracts scope value from the state sent with the authentication request.
     * @param {string} state
     * @returns {string} scope.
     * @ignore
     */
    ScopeSet.getScopeFromState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /**
     * @ignore
     * Appends extraScopesToConsent if passed
     * @param {@link AuthenticationParameters}
     */
    ScopeSet.appendScopes = function (reqScopes, reqExtraScopesToConsent) {
        if (reqScopes) {
            return reqExtraScopesToConsent ? reqScopes.concat(reqExtraScopesToConsent) : reqScopes;
        }
        return null;
    };
    return ScopeSet;
}());
exports.ScopeSet = ScopeSet;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils_1 = __webpack_require__(3);
var Constants_1 = __webpack_require__(2);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(localCallback, options) {
        if (options === void 0) { options = {}; }
        /**
         * @hidden
         */
        this.level = LogLevel.Info;
        var _a = options.correlationId, correlationId = _a === void 0 ? "" : _a, _b = options.level, level = _b === void 0 ? LogLevel.Info : _b, _c = options.piiLoggingEnabled, piiLoggingEnabled = _c === void 0 ? false : _c;
        this.localCallback = localCallback;
        this.correlationId = correlationId;
        this.level = level;
        this.piiLoggingEnabled = piiLoggingEnabled;
    }
    /**
     * @hidden
     */
    Logger.prototype.logMessage = function (logLevel, logMessage, containsPii) {
        if ((logLevel > this.level) || (!this.piiLoggingEnabled && containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var log;
        if (!StringUtils_1.StringUtils.isEmpty(this.correlationId)) {
            log = timestamp + ":" + this.correlationId + "-" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        else {
            log = timestamp + ":" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        this.executeCallback(logLevel, log, containsPii);
    };
    /**
     * @hidden
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * @hidden
     */
    Logger.prototype.error = function (message) {
        this.logMessage(LogLevel.Error, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.errorPii = function (message) {
        this.logMessage(LogLevel.Error, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.warning = function (message) {
        this.logMessage(LogLevel.Warning, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.warningPii = function (message) {
        this.logMessage(LogLevel.Warning, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.info = function (message) {
        this.logMessage(LogLevel.Info, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.infoPii = function (message) {
        this.logMessage(LogLevel.Info, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbose = function (message) {
        this.logMessage(LogLevel.Verbose, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbosePii = function (message) {
        this.logMessage(LogLevel.Verbose, message, true);
    };
    Logger.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled;
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AuthError_1 = __webpack_require__(7);
exports.ServerErrorMessage = {
    serverUnavailable: {
        code: "server_unavailable",
        desc: "Server is temporarily unavailable."
    },
    unknownServerError: {
        code: "unknown_server_error"
    },
};
/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
var ServerError = /** @class */ (function (_super) {
    tslib_1.__extends(ServerError, _super);
    function ServerError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ServerError";
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    ServerError.createServerUnavailableError = function () {
        return new ServerError(exports.ServerErrorMessage.serverUnavailable.code, exports.ServerErrorMessage.serverUnavailable.desc);
    };
    ServerError.createUnknownServerError = function (errorDesc) {
        return new ServerError(exports.ServerErrorMessage.unknownServerError.code, errorDesc);
    };
    return ServerError;
}(AuthError_1.AuthError));
exports.ServerError = ServerError;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var B2cAuthority_1 = __webpack_require__(19);
var Constants_1 = __webpack_require__(2);
var TelemetryConstants_1 = __webpack_require__(8);
var CryptoUtils_1 = __webpack_require__(1);
var UrlUtils_1 = __webpack_require__(5);
exports.scrubTenantFromUri = function (uri) {
    var url = UrlUtils_1.UrlUtils.GetUrlComponents(uri);
    // validate trusted host
    if (!Constants_1.AADTrustedHostList[url.HostNameAndPort.toLocaleLowerCase()]) {
        // Should this return null or what was passed?
        return null;
    }
    var pathParams = url.PathSegments;
    if (pathParams && pathParams.length >= 2) {
        var tenantPosition = pathParams[1] === B2cAuthority_1.B2cAuthority.B2C_PREFIX ? 2 : 1;
        if (tenantPosition < pathParams.length) {
            pathParams[tenantPosition] = TelemetryConstants_1.TENANT_PLACEHOLDER;
        }
    }
    return url.Protocol + "//" + url.HostNameAndPort + "/" + pathParams.join("/");
};
exports.hashPersonalIdentifier = function (valueToHash) {
    /*
     * TODO sha256 this
     * Current test runner is being funny with node libs that are webpacked anyway
     * need a different solution
     */
    return CryptoUtils_1.CryptoUtils.base64Encode(valueToHash);
};
exports.prependEventNamePrefix = function (suffix) { return "" + TelemetryConstants_1.EVENT_NAME_PREFIX + (suffix || ""); };


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AccessTokenKey_1 = __webpack_require__(26);
var AccessTokenValue_1 = __webpack_require__(27);
var ServerRequestParameters_1 = __webpack_require__(28);
var ClientInfo_1 = __webpack_require__(29);
var IdToken_1 = __webpack_require__(30);
var AuthCache_1 = __webpack_require__(31);
var Account_1 = __webpack_require__(16);
var ScopeSet_1 = __webpack_require__(10);
var StringUtils_1 = __webpack_require__(3);
var WindowUtils_1 = __webpack_require__(34);
var TokenUtils_1 = __webpack_require__(15);
var TimeUtils_1 = __webpack_require__(35);
var UrlUtils_1 = __webpack_require__(5);
var RequestUtils_1 = __webpack_require__(36);
var ResponseUtils_1 = __webpack_require__(37);
var AuthorityFactory_1 = __webpack_require__(38);
var Configuration_1 = __webpack_require__(20);
var ClientConfigurationError_1 = __webpack_require__(4);
var AuthError_1 = __webpack_require__(7);
var ClientAuthError_1 = __webpack_require__(6);
var ServerError_1 = __webpack_require__(12);
var InteractionRequiredAuthError_1 = __webpack_require__(21);
var AuthResponse_1 = __webpack_require__(22);
var TelemetryManager_1 = tslib_1.__importDefault(__webpack_require__(39));
var ApiEvent_1 = tslib_1.__importStar(__webpack_require__(41));
var Constants_1 = __webpack_require__(2);
var CryptoUtils_1 = __webpack_require__(1);
// default authority
var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common";
/**
 * @hidden
 * @ignore
 * response_type from OpenIDConnect
 * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
 * Since we support only implicit flow in this library, we restrict the response_type support to only 'token' and 'id_token'
 *
 */
var ResponseTypes = {
    id_token: "id_token",
    token: "token",
    id_token_token: "id_token token"
};
/**
 * UserAgentApplication class
 *
 * Object Instance that the developer can use to make loginXX OR acquireTokenXX functions
 */
var UserAgentApplication = /** @class */ (function () {
    /**
     * @constructor
     * Constructor for the UserAgentApplication used to instantiate the UserAgentApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application.
     * You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/&lt;Enter_the_Tenant_Info_Here&gt;.
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     *
     * In Azure B2C, authority is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/&lt;policyName&gt;/
     *
     * @param {@link (Configuration:type)} configuration object for the MSAL UserAgentApplication instance
     */
    function UserAgentApplication(configuration) {
        // callbacks for token/error
        this.authResponseCallback = null;
        this.tokenReceivedCallback = null;
        this.errorReceivedCallback = null;
        // Set the Configuration
        this.config = Configuration_1.buildConfiguration(configuration);
        // Set the callback boolean
        this.redirectCallbacksSet = false;
        this.logger = this.config.system.logger;
        this.clientId = this.config.auth.clientId;
        this.inCookie = this.config.cache.storeAuthStateInCookie;
        this.telemetryManager = this.getTelemetryManagerFromConfig(this.config.system.telemetry, this.clientId);
        // if no authority is passed, set the default: "https://login.microsoftonline.com/common"
        this.authority = this.config.auth.authority || DEFAULT_AUTHORITY;
        // cache keys msal - typescript throws an error if any value other than "localStorage" or "sessionStorage" is passed
        this.cacheStorage = new AuthCache_1.AuthCache(this.clientId, this.config.cache.cacheLocation, this.inCookie);
        // Initialize window handling code
        window.activeRenewals = {};
        window.renewStates = [];
        window.callbackMappedToRenewStates = {};
        window.promiseMappedToRenewStates = {};
        window.msal = this;
        var urlHash = window.location.hash;
        var urlContainsHash = UrlUtils_1.UrlUtils.urlContainsHash(urlHash);
        // check if back button is pressed
        WindowUtils_1.WindowUtils.checkIfBackButtonIsPressed(this.cacheStorage);
        // On the server 302 - Redirect, handle this
        if (urlContainsHash && !WindowUtils_1.WindowUtils.isInIframe() && !WindowUtils_1.WindowUtils.isInPopup()) {
            this.handleAuthenticationResponse(urlHash);
        }
    }
    Object.defineProperty(UserAgentApplication.prototype, "authority", {
        /**
         * Method to manage the authority URL.
         *
         * @returns {string} authority
         */
        get: function () {
            return this.authorityInstance.CanonicalAuthority;
        },
        /**
         * setter for the authority URL
         * @param {string} authority
         */
        // If the developer passes an authority, create an instance
        set: function (val) {
            this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.config.auth.validateAuthority);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the current authority instance from the MSAL configuration object
     *
     * @returns {@link Authority} authority instance
     */
    UserAgentApplication.prototype.getAuthorityInstance = function () {
        return this.authorityInstance;
    };
    UserAgentApplication.prototype.handleRedirectCallback = function (authOrTokenCallback, errorReceivedCallback) {
        if (!authOrTokenCallback) {
            this.redirectCallbacksSet = false;
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError(authOrTokenCallback);
        }
        // Set callbacks
        if (errorReceivedCallback) {
            this.tokenReceivedCallback = authOrTokenCallback;
            this.errorReceivedCallback = errorReceivedCallback;
            this.logger.warning("This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse).");
        }
        else {
            this.authResponseCallback = authOrTokenCallback;
        }
        this.redirectCallbacksSet = true;
        // On the server 302 - Redirect, handle this
        var cachedHash = this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.URL_HASH);
        if (cachedHash) {
            this.processCallBack(cachedHash, null);
        }
    };
    /**
     * Public API to verify if the URL contains the hash with known properties
     * @param hash
     */
    UserAgentApplication.prototype.urlContainsHash = function (hash) {
        return UrlUtils_1.UrlUtils.urlContainsHash(hash);
    };
    UserAgentApplication.prototype.authResponseHandler = function (interactionType, response, resolve) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.tokenReceivedCallback(response);
            }
            else if (this.authResponseCallback) {
                this.authResponseCallback(null, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            resolve(response);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    UserAgentApplication.prototype.authErrorHandler = function (interactionType, authErr, response, reject) {
        // set interaction_status to complete
        this.cacheStorage.removeItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.errorReceivedCallback(authErr, response.accountState);
            }
            else {
                this.authResponseCallback(authErr, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            reject(authErr);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    // #endregion
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     */
    UserAgentApplication.prototype.loginRedirect = function (userRequest) {
        // validate request
        var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, true, this.clientId, Constants_1.Constants.interactionTypeRedirect, this.redirectCallbacksSet);
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, true, request, null, null);
    };
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenRedirect = function (userRequest) {
        // validate request
        var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, false, this.clientId, Constants_1.Constants.interactionTypeRedirect, this.redirectCallbacksSet);
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, false, request, null, null);
    };
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param {@link (AuthenticationParameters:type)}
     *
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.loginPopup = function (userRequest) {
        var _this = this;
        // validate request
        var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, true, this.clientId, Constants_1.Constants.interactionTypePopup);
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, true, request, resolve, reject);
        }).catch(function (error) {
            _this.cacheStorage.resetTempCacheItems(request.state);
            throw error;
        });
    };
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.acquireTokenPopup = function (userRequest) {
        var _this = this;
        // validate request
        var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, false, this.clientId, Constants_1.Constants.interactionTypePopup);
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, false, request, resolve, reject);
        }).catch(function (error) {
            _this.cacheStorage.resetTempCacheItems(request.state);
            throw error;
        });
    };
    // #region Acquire Token
    /**
     * Use when initiating the login process or when you want to obtain an access_token for your API,
     * either by redirecting the user's browser window to the authorization endpoint or via opening a popup window in the user's browser.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenInteractive = function (interactionType, isLoginCall, request, resolve, reject) {
        var _this = this;
        // block the request if made from the hidden iframe
        WindowUtils_1.WindowUtils.blockReloadInHiddenIframes();
        var interactionProgress = this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.REDIRECT_REQUEST, "" + Constants_1.Constants.inProgress + Constants_1.Constants.resourceDelimiter + request.state);
        }
        // If already in progress, do not proceed
        if (interactionProgress === Constants_1.Constants.inProgress) {
            var thrownError = isLoginCall ? ClientAuthError_1.ClientAuthError.createLoginInProgressError() : ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError();
            var stateOnlyResponse = AuthResponse_1.buildResponseStateOnly(this.getAccountState(request.state));
            this.cacheStorage.resetTempCacheItems(request.state);
            this.authErrorHandler(interactionType, thrownError, stateOnlyResponse, reject);
            return;
        }
        // Get the account object if a session exists
        var account = (request && request.account && !isLoginCall) ? request.account : this.getAccount();
        // If no session exists, prompt the user to login.
        if (!account && !ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request)) {
            if (isLoginCall) {
                // extract ADAL id_token if exists
                var adalIdToken = this.extractADALIdToken();
                // silent login if ADAL id_token is retrieved successfully - SSO
                if (adalIdToken && !request.scopes) {
                    this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                    var tokenRequest = this.buildIDTokenRequest(request);
                    this.silentLogin = true;
                    this.acquireTokenSilent(tokenRequest).then(function (response) {
                        _this.silentLogin = false;
                        _this.logger.info("Unified cache call is successful");
                        _this.authResponseHandler(interactionType, response, resolve);
                        return;
                    }, function (error) {
                        _this.silentLogin = false;
                        _this.logger.error("Error occurred during unified cache ATS: " + error);
                        // proceed to login since ATS failed
                        _this.acquireTokenHelper(null, interactionType, isLoginCall, request, resolve, reject);
                    });
                }
                // No ADAL token found, proceed to login
                else {
                    this.acquireTokenHelper(null, interactionType, isLoginCall, request, resolve, reject);
                }
            }
            // AcquireToken call, but no account or context given, so throw error
            else {
                this.logger.info("User login is required");
                var stateOnlyResponse = AuthResponse_1.buildResponseStateOnly(this.getAccountState(request.state));
                this.cacheStorage.resetTempCacheItems(request.state);
                this.authErrorHandler(interactionType, ClientAuthError_1.ClientAuthError.createUserLoginRequiredError(), stateOnlyResponse, reject);
                return;
            }
        }
        // User session exists
        else {
            this.acquireTokenHelper(account, interactionType, isLoginCall, request, resolve, reject);
        }
    };
    /**
     * @hidden
     * @ignore
     * Helper function to acquireToken
     *
     */
    UserAgentApplication.prototype.acquireTokenHelper = function (account, interactionType, isLoginCall, request, resolve, reject) {
        var _this = this;
        // Track the acquireToken progress
        this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS, Constants_1.Constants.inProgress);
        var scope = request.scopes ? request.scopes.join(" ").toLowerCase() : this.clientId.toLowerCase();
        var serverAuthenticationRequest;
        var acquireTokenAuthority = (request && request.authority) ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority) : this.authorityInstance;
        var popUpWindow;
        if (interactionType === Constants_1.Constants.interactionTypePopup) {
            // Generate a popup window
            try {
                popUpWindow = this.openPopup("about:blank", "msal", Constants_1.Constants.popUpWidth, Constants_1.Constants.popUpHeight);
                // Push popup window handle onto stack for tracking
                WindowUtils_1.WindowUtils.trackPopup(popUpWindow);
            }
            catch (e) {
                this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code);
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
                if (reject) {
                    reject(ClientAuthError_1.ClientAuthError.createPopupWindowError());
                }
            }
            if (!popUpWindow) {
                return;
            }
        }
        acquireTokenAuthority.resolveEndpointsAsync().then(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var responseType, loginStartPage, urlNavigate, hash, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        responseType = isLoginCall ? ResponseTypes.id_token : this.getTokenType(account, request.scopes, false);
                        loginStartPage = request.redirectStartPage || window.location.href;
                        serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, this.clientId, responseType, this.getRedirectUri(request && request.redirectUri), request.scopes, request.state, request.correlationId);
                        this.updateCacheEntries(serverAuthenticationRequest, account, loginStartPage);
                        // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
                        serverAuthenticationRequest.populateQueryParams(account, request);
                        urlNavigate = UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest) + Constants_1.Constants.response_mode_fragment;
                        // set state in cache
                        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
                            if (!isLoginCall) {
                                this.cacheStorage.setItem("" + Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN + Constants_1.Constants.resourceDelimiter + request.state, serverAuthenticationRequest.state, this.inCookie);
                            }
                        }
                        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
                            window.renewStates.push(serverAuthenticationRequest.state);
                            window.requestType = isLoginCall ? Constants_1.Constants.login : Constants_1.Constants.renewToken;
                            // Register callback to capture results from server
                            this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
                        }
                        else {
                            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
                        }
                        // prompt user for interaction
                        this.navigateWindow(urlNavigate, popUpWindow);
                        if (!popUpWindow) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.monitorWindowForHash(popUpWindow, this.config.system.loadFrameTimeout, urlNavigate)];
                    case 2:
                        hash = _a.sent();
                        this.handleAuthenticationResponse(hash);
                        // Request completed successfully, set to completed
                        this.cacheStorage.removeItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
                        this.logger.info("Closing popup window");
                        // TODO: Check how this can be extracted for any framework specific code?
                        if (this.config.framework.isAngular) {
                            this.broadcast("msal:popUpHashChanged", hash);
                            WindowUtils_1.WindowUtils.closePopups();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (reject) {
                            reject(error_1);
                        }
                        if (this.config.framework.isAngular) {
                            this.broadcast("msal:popUpClosed", error_1.errorCode + Constants_1.Constants.resourceDelimiter + error_1.errorMessage);
                        }
                        else {
                            // Request failed, set to canceled
                            this.cacheStorage.removeItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
                            popUpWindow.close();
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); }).catch(function (err) {
            _this.logger.warning("could not resolve endpoints");
            _this.cacheStorage.resetTempCacheItems(request.state);
            _this.authErrorHandler(interactionType, ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString), AuthResponse_1.buildResponseStateOnly(request.state), reject);
            if (popUpWindow) {
                popUpWindow.close();
            }
        });
    };
    /**
     * Use this function to obtain a token before every call to the API / resource provider
     *
     * MSAL return's a cached token when available
     * Or it send's a request to the STS to obtain a new token using a hidden iframe.
     *
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     *
     */
    UserAgentApplication.prototype.acquireTokenSilent = function (userRequest) {
        var _this = this;
        var requestCorrelationId = userRequest.correlationId || CryptoUtils_1.CryptoUtils.createNewGuid();
        var apiEvent = new ApiEvent_1.default(requestCorrelationId, this.logger);
        apiEvent.apiEventIdentifier = ApiEvent_1.API_EVENT_IDENTIFIER.AcquireTokenSilent;
        apiEvent.apiCode = ApiEvent_1.API_CODE.AcquireTokenSilent;
        this.telemetryManager.startEvent(apiEvent);
        // validate the request
        var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, false, this.clientId);
        return new Promise(function (resolve, reject) {
            // block the request if made from the hidden iframe
            WindowUtils_1.WindowUtils.blockReloadInHiddenIframes();
            var scope = request.scopes.join(" ").toLowerCase();
            // if the developer passes an account, give that account the priority
            var account = request.account || _this.getAccount();
            // extract if there is an adalIdToken stashed in the cache
            var adalIdToken = _this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
            // if there is no account logged in and no login_hint/sid is passed in the request
            if (!account && !(request.sid || request.loginHint) && StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                _this.logger.info("User login is required");
                return reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError());
            }
            // set the response type based on the current cache status / scopes set
            var responseType = _this.getTokenType(account, request.scopes, true);
            // create a serverAuthenticationRequest populating the `queryParameters` to be sent to the Server
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority), _this.clientId, responseType, _this.getRedirectUri(request.redirectUri), request.scopes, request.state, request.correlationId);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            if (ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request) || account) {
                serverAuthenticationRequest.populateQueryParams(account, request);
            }
            // if user didn't pass login_hint/sid and adal's idtoken is present, extract the login_hint from the adalIdToken
            else if (!account && !StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                // if adalIdToken exists, extract the SSO info from the same
                var adalIdTokenObject = TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
                _this.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                serverAuthenticationRequest.populateQueryParams(account, null, adalIdTokenObject);
            }
            var userContainedClaims = request.claimsRequest || serverAuthenticationRequest.claimsValue;
            var authErr;
            var cacheResultResponse;
            if (!userContainedClaims && !request.forceRefresh) {
                try {
                    cacheResultResponse = _this.getCachedToken(serverAuthenticationRequest, account);
                }
                catch (e) {
                    authErr = e;
                }
            }
            // resolve/reject based on cacheResult
            if (cacheResultResponse) {
                _this.logger.info("Token is already in cache for scope:" + scope);
                resolve(cacheResultResponse);
                return null;
            }
            else if (authErr) {
                _this.logger.infoPii(authErr.errorCode + ":" + authErr.errorMessage);
                reject(authErr);
                return null;
            }
            // else proceed with login
            else {
                var logMessage = void 0;
                if (userContainedClaims) {
                    logMessage = "Skipped cache lookup since claims were given.";
                }
                else if (request.forceRefresh) {
                    logMessage = "Skipped cache lookup since request.forceRefresh option was set to true";
                }
                else {
                    logMessage = "Token is not in cache for scope:" + scope;
                }
                _this.logger.verbose(logMessage);
                // Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the api.
                if (!serverAuthenticationRequest.authorityInstance) {
                    serverAuthenticationRequest.authorityInstance = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority) : _this.authorityInstance;
                }
                // cache miss
                return serverAuthenticationRequest.authorityInstance.resolveEndpointsAsync()
                    .then(function () {
                    /*
                     * refresh attempt with iframe
                     * Already renewing for this scope, callback when we get the token.
                     */
                    if (window.activeRenewals[scope]) {
                        _this.logger.verbose("Renew token for scope: " + scope + " is in progress. Registering callback");
                        // Active renewals contains the state for each renewal.
                        _this.registerCallback(window.activeRenewals[scope], scope, resolve, reject);
                    }
                    else {
                        if (request.scopes && request.scopes.indexOf(_this.clientId) > -1 && request.scopes.length === 1) {
                            /*
                             * App uses idToken to send to api endpoints
                             * Default scope is tracked as clientId to store this token
                             */
                            _this.logger.verbose("renewing idToken");
                            _this.silentLogin = true;
                            _this.renewIdToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                        else {
                            // renew access token
                            _this.logger.verbose("renewing accesstoken");
                            _this.renewToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                    }
                }).catch(function (err) {
                    _this.logger.warning("could not resolve endpoints");
                    reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString()));
                    return null;
                });
            }
        })
            .then(function (res) {
            apiEvent.wasSuccessful = true;
            return res;
        })
            .catch(function (error) {
            _this.cacheStorage.resetTempCacheItems(request.state);
            apiEvent.apiErrorCode = error.errorCode;
            apiEvent.wasSuccessful = false;
            throw error;
        })
            .finally(function () {
            _this.telemetryManager.stopEvent(apiEvent);
            _this.telemetryManager.flush(requestCorrelationId);
        });
    };
    // #endregion
    // #region Popup Window Creation
    /**
     * @hidden
     *
     * Configures popup window for login.
     *
     * @param urlNavigate
     * @param title
     * @param popUpWidth
     * @param popUpHeight
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
        try {
            /**
             * adding winLeft and winTop to account for dual monitor
             * using screenLeft and screenTop for IE8 and earlier
             */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /**
             * window.innerWidth displays browser window"s height and width excluding toolbars
             * using document.documentElement.clientWidth for IE8 and earlier
             */
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
            var top = ((height / 2) - (popUpHeight / 2)) + winTop;
            // open the window
            var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top + ", left=" + left);
            if (!popupWindow) {
                throw ClientAuthError_1.ClientAuthError.createPopupWindowError();
            }
            if (popupWindow.focus) {
                popupWindow.focus();
            }
            return popupWindow;
        }
        catch (e) {
            this.logger.error("error opening popup " + e.message);
            this.cacheStorage.removeItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
            throw ClientAuthError_1.ClientAuthError.createPopupWindowError(e.toString());
        }
    };
    // #endregion
    // #region Iframe Management
    /**
     * @hidden
     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
     * @ignore
     */
    UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, scope) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var expectedState, iframe, _a, hash, error_2;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        expectedState = window.activeRenewals[scope];
                        this.logger.verbose("Set loading state to pending for: " + scope + ":" + expectedState);
                        this.cacheStorage.setItem("" + Constants_1.TemporaryCacheKeys.RENEW_STATUS + Constants_1.Constants.resourceDelimiter + expectedState, Constants_1.Constants.inProgress);
                        if (!this.config.system.navigateFrameWait) return [3 /*break*/, 2];
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.loadFrame(urlNavigate, frameName, this.config.system.navigateFrameWait, this.logger)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = WindowUtils_1.WindowUtils.loadFrameSync(urlNavigate, frameName, this.logger);
                        _b.label = 3;
                    case 3:
                        iframe = _a;
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.monitorWindowForHash(iframe.contentWindow, this.config.system.loadFrameTimeout, urlNavigate, true)];
                    case 5:
                        hash = _b.sent();
                        if (hash) {
                            this.handleAuthenticationResponse(hash);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        if (this.cacheStorage.getItem("" + Constants_1.TemporaryCacheKeys.RENEW_STATUS + Constants_1.Constants.resourceDelimiter + expectedState) === Constants_1.Constants.inProgress) {
                            // fail the iframe session if it's in pending state
                            this.logger.verbose("Loading frame has timed out after: " + (this.config.system.loadFrameTimeout / 1000) + " seconds for scope " + scope + ":" + expectedState);
                            // Error after timeout
                            if (expectedState && window.callbackMappedToRenewStates[expectedState]) {
                                window.callbackMappedToRenewStates[expectedState](null, error_2);
                            }
                            this.cacheStorage.removeItem("" + Constants_1.TemporaryCacheKeys.RENEW_STATUS + Constants_1.Constants.resourceDelimiter + expectedState);
                        }
                        WindowUtils_1.WindowUtils.removeHiddenIframe(iframe);
                        throw error_2;
                    case 7:
                        WindowUtils_1.WindowUtils.removeHiddenIframe(iframe);
                        return [2 /*return*/];
                }
            });
        });
    };
    // #endregion
    // #region General Helpers
    /**
     * @hidden
     * Used to redirect the browser to the STS authorization endpoint
     * @param {string} urlNavigate - URL of the authorization endpoint
     */
    UserAgentApplication.prototype.navigateWindow = function (urlNavigate, popupWindow) {
        // Navigate if valid URL
        if (urlNavigate && !StringUtils_1.StringUtils.isEmpty(urlNavigate)) {
            var navigateWindow = popupWindow ? popupWindow : window;
            var logMessage = popupWindow ? "Navigated Popup window to:" + urlNavigate : "Navigate to:" + urlNavigate;
            this.logger.infoPii(logMessage);
            navigateWindow.location.assign(urlNavigate);
        }
        else {
            this.logger.info("Navigate url is empty");
            throw AuthError_1.AuthError.createUnexpectedError("Navigate url is empty");
        }
    };
    /**
     * @hidden
     * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
     * @param {string} expectedState - Unique state identifier (guid).
     * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {Function} resolve - The resolve function of the promise object.
     * @param {Function} reject - The reject function of the promise object.
     * @ignore
     */
    UserAgentApplication.prototype.registerCallback = function (expectedState, scope, resolve, reject) {
        var _this = this;
        // track active renewals
        window.activeRenewals[scope] = expectedState;
        // initialize callbacks mapped array
        if (!window.promiseMappedToRenewStates[expectedState]) {
            window.promiseMappedToRenewStates[expectedState] = [];
        }
        // indexing on the current state, push the callback params to callbacks mapped
        window.promiseMappedToRenewStates[expectedState].push({ resolve: resolve, reject: reject });
        // Store the server response in the current window??
        if (!window.callbackMappedToRenewStates[expectedState]) {
            window.callbackMappedToRenewStates[expectedState] = function (response, error) {
                // reset active renewals
                window.activeRenewals[scope] = null;
                // for all promiseMappedtoRenewStates for a given 'state' - call the reject/resolve with error/token respectively
                for (var i = 0; i < window.promiseMappedToRenewStates[expectedState].length; ++i) {
                    try {
                        if (error) {
                            window.promiseMappedToRenewStates[expectedState][i].reject(error);
                        }
                        else if (response) {
                            window.promiseMappedToRenewStates[expectedState][i].resolve(response);
                        }
                        else {
                            _this.cacheStorage.resetTempCacheItems(expectedState);
                            throw AuthError_1.AuthError.createUnexpectedError("Error and response are both null");
                        }
                    }
                    catch (e) {
                        _this.logger.warning(e);
                    }
                }
                // reset
                window.promiseMappedToRenewStates[expectedState] = null;
                window.callbackMappedToRenewStates[expectedState] = null;
            };
        }
    };
    // #endregion
    // #region Logout
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     */
    UserAgentApplication.prototype.logout = function () {
        var _this = this;
        this.clearCache();
        this.account = null;
        var logout = "";
        if (this.getPostLogoutRedirectUri()) {
            logout = "post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
        }
        this.authorityInstance.resolveEndpointsAsync().then(function (authority) {
            var urlNavigate = authority.EndSessionEndpoint
                ? authority.EndSessionEndpoint + "?" + logout
                : _this.authority + "oauth2/v2.0/logout?" + logout;
            _this.navigateWindow(urlNavigate);
        });
    };
    /**
     * @hidden
     * Clear all access tokens in the cache.
     * @ignore
     */
    UserAgentApplication.prototype.clearCache = function () {
        window.renewStates = [];
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            this.cacheStorage.removeItem(JSON.stringify(accessTokenItems[i].key));
        }
        this.cacheStorage.resetCacheItems();
        // state not being sent would mean this call may not be needed; check later
        this.cacheStorage.clearMsalCookie();
    };
    /**
     * @hidden
     * Clear a given access token from the cache.
     *
     * @param accessToken
     */
    UserAgentApplication.prototype.clearCacheForScope = function (accessToken) {
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            var token = accessTokenItems[i];
            if (token.value.accessToken === accessToken) {
                this.cacheStorage.removeItem(JSON.stringify(token.key));
            }
        }
    };
    // #endregion
    // #region Response
    /**
     * @hidden
     * @ignore
     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
     * @param {string} hash - Hash passed from redirect page.
     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
     */
    UserAgentApplication.prototype.isCallback = function (hash) {
        this.logger.info("isCallback will be deprecated in favor of urlContainsHash in MSAL.js v2.0.");
        return UrlUtils_1.UrlUtils.urlContainsHash(hash);
    };
    /**
     * @hidden
     * Used to call the constructor callback with the token/error
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.processCallBack = function (hash, stateInfo, parentCallback) {
        this.logger.info("Processing the callback from redirect response");
        // get the state info from the hash
        if (!stateInfo) {
            stateInfo = this.getResponseState(hash);
        }
        var response;
        var authErr;
        // Save the token info from the hash
        try {
            response = this.saveTokenFromHash(hash, stateInfo);
        }
        catch (err) {
            authErr = err;
        }
        // remove hash from the cache
        this.cacheStorage.removeItem(Constants_1.TemporaryCacheKeys.URL_HASH);
        try {
            // Clear the cookie in the hash
            this.cacheStorage.clearMsalCookie(stateInfo.state);
            var accountState = this.getAccountState(stateInfo.state);
            if (response) {
                if ((stateInfo.requestType === Constants_1.Constants.renewToken) || response.accessToken) {
                    if (window.parent !== window) {
                        this.logger.verbose("Window is in iframe, acquiring token silently");
                    }
                    else {
                        this.logger.verbose("acquiring token interactive in progress");
                    }
                    response.tokenType = Constants_1.ServerHashParamKeys.ACCESS_TOKEN;
                }
                else if (stateInfo.requestType === Constants_1.Constants.login) {
                    response.tokenType = Constants_1.ServerHashParamKeys.ID_TOKEN;
                }
                if (!parentCallback) {
                    this.authResponseHandler(Constants_1.Constants.interactionTypeRedirect, response);
                    return;
                }
            }
            else if (!parentCallback) {
                this.cacheStorage.resetTempCacheItems(stateInfo.state);
                this.authErrorHandler(Constants_1.Constants.interactionTypeRedirect, authErr, AuthResponse_1.buildResponseStateOnly(accountState));
                return;
            }
            parentCallback(response, authErr);
        }
        catch (err) {
            this.logger.error("Error occurred in token received callback function: " + err);
            throw ClientAuthError_1.ClientAuthError.createErrorInCallbackFunction(err.toString());
        }
    };
    /**
     * @hidden
     * This method must be called for processing the response received from the STS. It extracts the hash, processes the token or error information and saves it in the cache. It then
     * calls the registered callbacks in case of redirect or resolves the promises with the result.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.handleAuthenticationResponse = function (hash) {
        // retrieve the hash
        var locationHash = hash || window.location.hash;
        // Check if the current flow is popup or hidden iframe
        var iframeWithHash = WindowUtils_1.WindowUtils.getIframeWithHash(locationHash);
        var popUpWithHash = WindowUtils_1.WindowUtils.getPopUpWithHash(locationHash);
        var isPopupOrIframe = !!(iframeWithHash || popUpWithHash);
        // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
        var stateInfo = this.getResponseState(locationHash);
        var tokenResponseCallback = null;
        this.logger.info("Returned from redirect url");
        // If parent window is the msal instance which opened the current window (iframe)
        if (isPopupOrIframe) {
            tokenResponseCallback = window.callbackMappedToRenewStates[stateInfo.state];
        }
        else {
            // Redirect cases
            tokenResponseCallback = null;
            // if set to navigate to loginRequest page post login
            if (this.config.auth.navigateToLoginRequestUrl) {
                this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.URL_HASH, locationHash);
                if (window.parent === window) {
                    var loginRequestUrl = this.cacheStorage.getItem("" + Constants_1.TemporaryCacheKeys.LOGIN_REQUEST + Constants_1.Constants.resourceDelimiter + stateInfo.state, this.inCookie);
                    // Redirect to home page if login request url is null (real null or the string null)
                    if (!loginRequestUrl || loginRequestUrl === "null") {
                        this.logger.error("Unable to get valid login request url from cache, redirecting to home page");
                        window.location.href = "/";
                    }
                    else {
                        window.location.href = loginRequestUrl;
                    }
                }
                return;
            }
            else {
                window.location.hash = "";
            }
            if (!this.redirectCallbacksSet) {
                // We reached this point too early - cache hash, return and process in handleRedirectCallbacks
                this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.URL_HASH, locationHash);
                return;
            }
        }
        this.processCallBack(locationHash, stateInfo, tokenResponseCallback);
        // If current window is opener, close all windows
        if (isPopupOrIframe) {
            WindowUtils_1.WindowUtils.closePopups();
        }
    };
    /**
     * @hidden
     * Creates a stateInfo object from the URL fragment and returns it.
     * @param {string} hash  -  Hash passed from redirect page
     * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @ignore
     */
    UserAgentApplication.prototype.getResponseState = function (hash) {
        var parameters = UrlUtils_1.UrlUtils.deserializeHash(hash);
        var stateResponse;
        if (!parameters) {
            throw AuthError_1.AuthError.createUnexpectedError("Hash was not parsed correctly.");
        }
        if (parameters.hasOwnProperty("state")) {
            stateResponse = {
                requestType: Constants_1.Constants.unknown,
                state: parameters.state,
                stateMatch: false
            };
        }
        else {
            throw AuthError_1.AuthError.createUnexpectedError("Hash does not contain state.");
        }
        /*
         * async calls can fire iframe and login request at the same time if developer does not use the API as expected
         * incoming callback needs to be looked up to find the request type
         */
        // loginRedirect
        if (stateResponse.state === this.cacheStorage.getItem("" + Constants_1.TemporaryCacheKeys.STATE_LOGIN + Constants_1.Constants.resourceDelimiter + stateResponse.state, this.inCookie) || stateResponse.state === this.silentAuthenticationState) { // loginRedirect
            stateResponse.requestType = Constants_1.Constants.login;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // acquireTokenRedirect
        else if (stateResponse.state === this.cacheStorage.getItem("" + Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN + Constants_1.Constants.resourceDelimiter + stateResponse.state, this.inCookie)) { // acquireTokenRedirect
            stateResponse.requestType = Constants_1.Constants.renewToken;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // external api requests may have many renewtoken requests for different resource
        if (!stateResponse.stateMatch) {
            stateResponse.requestType = window.requestType;
            var statesInParentContext = window.renewStates;
            for (var i = 0; i < statesInParentContext.length; i++) {
                if (statesInParentContext[i] === stateResponse.state) {
                    stateResponse.stateMatch = true;
                    break;
                }
            }
        }
        return stateResponse;
    };
    // #endregion
    // #region Token Processing (Extract to TokenProcessing.ts)
    /**
     * @hidden
     * Used to get token for the specified set of scopes from the cache
     * @param {@link ServerRequestParameters} - Request sent to the STS to obtain an id_token/access_token
     * @param {Account} account - Account for which the scopes were requested
     */
    UserAgentApplication.prototype.getCachedToken = function (serverAuthenticationRequest, account) {
        var accessTokenCacheItem = null;
        var scopes = serverAuthenticationRequest.scopes;
        // filter by clientId and account
        var tokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, account ? account.homeAccountIdentifier : null);
        // No match found after initial filtering
        if (tokenCacheItems.length === 0) {
            return null;
        }
        var filteredItems = [];
        // if no authority passed
        if (!serverAuthenticationRequest.authority) {
            // filter by scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.containsScope(cachedScopes, scopes)) {
                    filteredItems.push(cacheItem);
                }
            }
            // if only one cached token found
            if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(accessTokenCacheItem.key.authority, this.config.auth.validateAuthority);
            }
            // if more than one cached token is found
            else if (filteredItems.length > 1) {
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
            // if no match found, check if there was a single authority used
            else {
                var authorityList = this.getUniqueAuthority(tokenCacheItems, "authority");
                if (authorityList.length > 1) {
                    throw ClientAuthError_1.ClientAuthError.createMultipleAuthoritiesInCacheError(scopes.toString());
                }
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(authorityList[0], this.config.auth.validateAuthority);
            }
        }
        // if an authority is passed in the API
        else {
            // filter by authority and scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.containsScope(cachedScopes, scopes) && UrlUtils_1.UrlUtils.CanonicalizeUri(cacheItem.key.authority) === serverAuthenticationRequest.authority) {
                    filteredItems.push(cacheItem);
                }
            }
            // no match
            if (filteredItems.length === 0) {
                return null;
            }
            // if only one cachedToken Found
            else if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
            }
            else {
                // if more than one cached token is found
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
        }
        if (accessTokenCacheItem != null) {
            var expired = Number(accessTokenCacheItem.value.expiresIn);
            // If expiration is within offset, it will force renew
            var offset = this.config.system.tokenRenewalOffsetSeconds || 300;
            if (expired && (expired > TimeUtils_1.TimeUtils.now() + offset)) {
                var idTokenObj = new IdToken_1.IdToken(accessTokenCacheItem.value.idToken);
                if (!account) {
                    account = this.getAccount();
                    if (!account) {
                        throw AuthError_1.AuthError.createUnexpectedError("Account should not be null here.");
                    }
                }
                var aState = this.getAccountState(serverAuthenticationRequest.state);
                var response = {
                    uniqueId: "",
                    tenantId: "",
                    tokenType: (accessTokenCacheItem.value.idToken === accessTokenCacheItem.value.accessToken) ? Constants_1.ServerHashParamKeys.ID_TOKEN : Constants_1.ServerHashParamKeys.ACCESS_TOKEN,
                    idToken: idTokenObj,
                    idTokenClaims: idTokenObj.claims,
                    accessToken: accessTokenCacheItem.value.accessToken,
                    scopes: accessTokenCacheItem.key.scopes.split(" "),
                    expiresOn: new Date(expired * 1000),
                    account: account,
                    accountState: aState,
                    fromCache: true
                };
                ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                return response;
            }
            else {
                this.cacheStorage.removeItem(JSON.stringify(filteredItems[0].key));
                return null;
            }
        }
        else {
            return null;
        }
    };
    /**
     * @hidden
     * Used to get a unique list of authorities from the cache
     * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAuthority = function (accessTokenCacheItems, property) {
        var authorityList = [];
        var flags = [];
        accessTokenCacheItems.forEach(function (element) {
            if (element.key.hasOwnProperty(property) && (flags.indexOf(element.key[property]) === -1)) {
                flags.push(element.key[property]);
                authorityList.push(element.key[property]);
            }
        });
        return authorityList;
    };
    /**
     * @hidden
     * Check if ADAL id_token exists and return if exists.
     *
     */
    UserAgentApplication.prototype.extractADALIdToken = function () {
        var adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
        if (!StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
            return TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
        }
        return null;
    };
    /**
     * @hidden
     * Acquires access token using a hidden iframe.
     * @ignore
     */
    UserAgentApplication.prototype.renewToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        var scope = scopes.join(" ").toLowerCase();
        this.logger.verbose("renewToken is called for scope:" + scope);
        var frameName = "msalRenewFrame" + scope;
        var frameHandle = WindowUtils_1.WindowUtils.addHiddenIFrame(frameName, this.logger);
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew token Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none + Constants_1.Constants.response_mode_fragment;
        window.renewStates.push(serverAuthenticationRequest.state);
        window.requestType = Constants_1.Constants.renewToken;
        this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, frameName, scope).catch(function (error) { return reject(error); });
    };
    /**
     * @hidden
     * Renews idtoken for app's own backend when clientId is passed as a single scope in the scopes array.
     * @ignore
     */
    UserAgentApplication.prototype.renewIdToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        this.logger.info("renewidToken is called");
        var frameName = "msalIdTokenFrame";
        var frameHandle = WindowUtils_1.WindowUtils.addHiddenIFrame(frameName, this.logger);
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew Idtoken Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none + Constants_1.Constants.response_mode_fragment;
        if (this.silentLogin) {
            window.requestType = Constants_1.Constants.login;
            this.silentAuthenticationState = serverAuthenticationRequest.state;
        }
        else {
            window.requestType = Constants_1.Constants.renewToken;
            window.renewStates.push(serverAuthenticationRequest.state);
        }
        // note: scope here is clientId
        this.registerCallback(serverAuthenticationRequest.state, this.clientId, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, frameName, this.clientId).catch(function (error) { return reject(error); });
    };
    /**
     * @hidden
     *
     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
     * @param {string} authority authority received in the redirect response from AAD.
     * @param {TokenResponse} requestInfo an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @param {Account} account account object for which scopes are consented for. The default account is the logged in account.
     * @param {ClientInfo} clientInfo clientInfo received as part of the response comprising of fields uid and utid.
     * @param {IdToken} idToken idToken received as part of the response.
     * @ignore
     * @private
     */
    /* tslint:disable:no-string-literal */
    UserAgentApplication.prototype.saveAccessToken = function (response, authority, parameters, clientInfo, idTokenObj) {
        var scope;
        var accessTokenResponse = tslib_1.__assign({}, response);
        var clientObj = new ClientInfo_1.ClientInfo(clientInfo);
        var expiration;
        // if the response contains "scope"
        if (parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.SCOPE)) {
            // read the scopes
            scope = parameters[Constants_1.ServerHashParamKeys.SCOPE];
            var consentedScopes = scope.split(" ");
            // retrieve all access tokens from the cache, remove the dup scores
            var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, authority);
            for (var i = 0; i < accessTokenCacheItems.length; i++) {
                var accessTokenCacheItem = accessTokenCacheItems[i];
                if (accessTokenCacheItem.key.homeAccountIdentifier === response.account.homeAccountIdentifier) {
                    var cachedScopes = accessTokenCacheItem.key.scopes.split(" ");
                    if (ScopeSet_1.ScopeSet.isIntersectingScopes(cachedScopes, consentedScopes)) {
                        this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                    }
                }
            }
            // Generate and cache accessTokenKey and accessTokenValue
            var expiresIn = TimeUtils_1.TimeUtils.parseExpiresIn(parameters[Constants_1.ServerHashParamKeys.EXPIRES_IN]);
            expiration = TimeUtils_1.TimeUtils.now() + expiresIn;
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.ServerHashParamKeys.ACCESS_TOKEN], idTokenObj.rawIdToken, expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.accessToken = parameters[Constants_1.ServerHashParamKeys.ACCESS_TOKEN];
            accessTokenResponse.scopes = consentedScopes;
        }
        // if the response does not contain "scope" - scope is usually client_id and the token will be id_token
        else {
            scope = this.clientId;
            // Generate and cache accessTokenKey and accessTokenValue
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            expiration = Number(idTokenObj.expiration);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.ServerHashParamKeys.ID_TOKEN], parameters[Constants_1.ServerHashParamKeys.ID_TOKEN], expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.scopes = [scope];
            accessTokenResponse.accessToken = parameters[Constants_1.ServerHashParamKeys.ID_TOKEN];
        }
        if (expiration) {
            accessTokenResponse.expiresOn = new Date(expiration * 1000);
        }
        else {
            this.logger.error("Could not parse expiresIn parameter");
        }
        return accessTokenResponse;
    };
    /**
     * @hidden
     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the account object.
     * @ignore
     */
    UserAgentApplication.prototype.saveTokenFromHash = function (hash, stateInfo) {
        this.logger.info("State status:" + stateInfo.stateMatch + "; Request type:" + stateInfo.requestType);
        var response = {
            uniqueId: "",
            tenantId: "",
            tokenType: "",
            idToken: null,
            idTokenClaims: null,
            accessToken: null,
            scopes: [],
            expiresOn: null,
            account: null,
            accountState: "",
            fromCache: false
        };
        var error;
        var hashParams = UrlUtils_1.UrlUtils.deserializeHash(hash);
        var authorityKey = "";
        var acquireTokenAccountKey = "";
        var idTokenObj = null;
        // If server returns an error
        if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION) || hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR)) {
            this.logger.infoPii("Error :" + hashParams[Constants_1.ServerHashParamKeys.ERROR] + "; Error description:" + hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, hashParams[Constants_1.ServerHashParamKeys.ERROR]);
            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
            // login
            if (stateInfo.requestType === Constants_1.Constants.login) {
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.LOGIN_ERROR, hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION] + ":" + hashParams[Constants_1.ServerHashParamKeys.ERROR]);
                authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(stateInfo.state);
            }
            // acquireToken
            if (stateInfo.requestType === Constants_1.Constants.renewToken) {
                authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(stateInfo.state);
                var account = this.getAccount();
                var accountId = void 0;
                if (account && !StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
                    accountId = account.homeAccountIdentifier;
                }
                else {
                    accountId = Constants_1.Constants.no_account;
                }
                acquireTokenAccountKey = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(accountId, stateInfo.state);
            }
            var _a = Constants_1.ServerHashParamKeys.ERROR, hashErr = hashParams[_a], _b = Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION, hashErrDesc = hashParams[_b];
            if (InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErr) ||
                InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErrDesc)) {
                error = new InteractionRequiredAuthError_1.InteractionRequiredAuthError(hashParams[Constants_1.ServerHashParamKeys.ERROR], hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
            }
            else {
                error = new ServerError_1.ServerError(hashParams[Constants_1.ServerHashParamKeys.ERROR], hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
            }
        }
        // If the server returns "Success"
        else {
            // Verify the state from redirect and record tokens to storage if exists
            if (stateInfo.stateMatch) {
                this.logger.info("State is right");
                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.SESSION_STATE)) {
                    this.cacheStorage.setItem("" + Constants_1.TemporaryCacheKeys.SESSION_STATE + Constants_1.Constants.resourceDelimiter + stateInfo.state, hashParams[Constants_1.ServerHashParamKeys.SESSION_STATE]);
                }
                response.accountState = this.getAccountState(stateInfo.state);
                var clientInfo = "";
                // Process access_token
                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ACCESS_TOKEN)) {
                    this.logger.info("Fragment has access token");
                    response.accessToken = hashParams[Constants_1.ServerHashParamKeys.ACCESS_TOKEN];
                    if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.SCOPE)) {
                        response.scopes = hashParams[Constants_1.ServerHashParamKeys.SCOPE].split(" ");
                    }
                    // retrieve the id_token from response if present
                    if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ID_TOKEN)) {
                        idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.ServerHashParamKeys.ID_TOKEN]);
                        response.idToken = idTokenObj;
                        response.idTokenClaims = idTokenObj.claims;
                    }
                    else {
                        idTokenObj = new IdToken_1.IdToken(this.cacheStorage.getItem(Constants_1.PersistentCacheKeys.IDTOKEN));
                        response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    }
                    // set authority
                    var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                    // retrieve client_info - if it is not found, generate the uid and utid from idToken
                    if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.CLIENT_INFO)) {
                        clientInfo = hashParams[Constants_1.ServerHashParamKeys.CLIENT_INFO];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                        throw ClientAuthError_1.ClientAuthError.createClientInfoNotPopulatedError("ClientInfo not received in the response from the server");
                    }
                    response.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    var accountKey = void 0;
                    if (response.account && !StringUtils_1.StringUtils.isEmpty(response.account.homeAccountIdentifier)) {
                        accountKey = response.account.homeAccountIdentifier;
                    }
                    else {
                        accountKey = Constants_1.Constants.no_account;
                    }
                    acquireTokenAccountKey = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(accountKey, stateInfo.state);
                    var acquireTokenAccountKey_noaccount = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(Constants_1.Constants.no_account, stateInfo.state);
                    var cachedAccount = this.cacheStorage.getItem(acquireTokenAccountKey);
                    var acquireTokenAccount = void 0;
                    // Check with the account in the Cache
                    if (!StringUtils_1.StringUtils.isEmpty(cachedAccount)) {
                        acquireTokenAccount = JSON.parse(cachedAccount);
                        if (response.account && acquireTokenAccount && Account_1.Account.compareAccounts(response.account, acquireTokenAccount)) {
                            response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                            this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                        }
                        else {
                            this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request");
                        }
                    }
                    else if (!StringUtils_1.StringUtils.isEmpty(this.cacheStorage.getItem(acquireTokenAccountKey_noaccount))) {
                        response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                    }
                }
                // Process id_token
                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ID_TOKEN)) {
                    this.logger.info("Fragment has id token");
                    // set the idToken
                    idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.ServerHashParamKeys.ID_TOKEN]);
                    response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.CLIENT_INFO)) {
                        clientInfo = hashParams[Constants_1.ServerHashParamKeys.CLIENT_INFO];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                    }
                    // set authority
                    var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                    this.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    response.account = this.account;
                    if (idTokenObj && idTokenObj.nonce) {
                        // check nonce integrity if idToken has nonce - throw an error if not matched
                        if (idTokenObj.nonce !== this.cacheStorage.getItem("" + Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + Constants_1.Constants.resourceDelimiter + stateInfo.state, this.inCookie)) {
                            this.account = null;
                            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.LOGIN_ERROR, "Nonce Mismatch. Expected Nonce: " + this.cacheStorage.getItem("" + Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + Constants_1.Constants.resourceDelimiter + stateInfo.state, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            this.logger.error("Nonce Mismatch.Expected Nonce: " + this.cacheStorage.getItem("" + Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + Constants_1.Constants.resourceDelimiter + stateInfo.state, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            error = ClientAuthError_1.ClientAuthError.createNonceMismatchError(this.cacheStorage.getItem("" + Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + Constants_1.Constants.resourceDelimiter + stateInfo.state, this.inCookie), idTokenObj.nonce);
                        }
                        // Save the token
                        else {
                            this.cacheStorage.setItem(Constants_1.PersistentCacheKeys.IDTOKEN, hashParams[Constants_1.ServerHashParamKeys.ID_TOKEN]);
                            this.cacheStorage.setItem(Constants_1.PersistentCacheKeys.CLIENT_INFO, clientInfo);
                            // Save idToken as access token for app itself
                            this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                        }
                    }
                    else {
                        authorityKey = stateInfo.state;
                        acquireTokenAccountKey = stateInfo.state;
                        this.logger.error("Invalid id_token received in the response");
                        error = ClientAuthError_1.ClientAuthError.createInvalidIdTokenError(idTokenObj);
                        this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, error.errorCode);
                        this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, error.errorMessage);
                    }
                }
            }
            // State mismatch - unexpected/invalid state
            else {
                authorityKey = stateInfo.state;
                acquireTokenAccountKey = stateInfo.state;
                var expectedState = this.cacheStorage.getItem("" + Constants_1.TemporaryCacheKeys.STATE_LOGIN + Constants_1.Constants.resourceDelimiter + stateInfo.state, this.inCookie);
                this.logger.error("State Mismatch.Expected State: " + expectedState + "," + "Actual State: " + stateInfo.state);
                error = ClientAuthError_1.ClientAuthError.createInvalidStateError(stateInfo.state, expectedState);
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, error.errorCode);
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, error.errorMessage);
            }
        }
        // Set status to completed
        this.cacheStorage.removeItem("" + Constants_1.TemporaryCacheKeys.RENEW_STATUS + Constants_1.Constants.resourceDelimiter + stateInfo.state);
        this.cacheStorage.resetTempCacheItems(stateInfo.state);
        // this is required if navigateToLoginRequestUrl=false
        if (this.inCookie) {
            this.cacheStorage.setItemCookie(authorityKey, "", -1);
            this.cacheStorage.clearMsalCookie(stateInfo.state);
        }
        if (error) {
            // Error case, set status to cancelled
            throw error;
        }
        if (!response) {
            throw AuthError_1.AuthError.createUnexpectedError("Response is null");
        }
        return response;
    };
    /**
     * Set Authority when saving Token from the hash
     * @param state
     * @param inCookie
     * @param cacheStorage
     * @param idTokenObj
     * @param response
     */
    UserAgentApplication.prototype.populateAuthority = function (state, inCookie, cacheStorage, idTokenObj) {
        var authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(state);
        var cachedAuthority = cacheStorage.getItem(authorityKey, inCookie);
        // retrieve the authority from cache and replace with tenantID
        return StringUtils_1.StringUtils.isEmpty(cachedAuthority) ? cachedAuthority : UrlUtils_1.UrlUtils.replaceTenantPath(cachedAuthority, idTokenObj.tenantId);
    };
    /* tslint:enable:no-string-literal */
    // #endregion
    // #region Account
    /**
     * Returns the signed in account
     * (the account object is created at the time of successful login)
     * or null when no state is found
     * @returns {@link Account} - the account object stored in MSAL
     */
    UserAgentApplication.prototype.getAccount = function () {
        // if a session already exists, get the account from the session
        if (this.account) {
            return this.account;
        }
        // frame is used to get idToken and populate the account for the given session
        var rawIdToken = this.cacheStorage.getItem(Constants_1.PersistentCacheKeys.IDTOKEN);
        var rawClientInfo = this.cacheStorage.getItem(Constants_1.PersistentCacheKeys.CLIENT_INFO);
        if (!StringUtils_1.StringUtils.isEmpty(rawIdToken) && !StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            var idToken = new IdToken_1.IdToken(rawIdToken);
            var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo);
            this.account = Account_1.Account.createAccount(idToken, clientInfo);
            return this.account;
        }
        // if login not yet done, return null
        return null;
    };
    /**
     * @hidden
     *
     * Extracts state value from the accountState sent with the authentication request.
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getAccountState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return state;
    };
    /**
     * Use to get a list of unique accounts in MSAL cache based on homeAccountIdentifier.
     *
     * @param {@link Array<Account>} Account - all unique accounts in MSAL cache.
     */
    UserAgentApplication.prototype.getAllAccounts = function () {
        var accounts = [];
        var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenCacheItems.length; i++) {
            var idToken = new IdToken_1.IdToken(accessTokenCacheItems[i].value.idToken);
            var clientInfo = new ClientInfo_1.ClientInfo(accessTokenCacheItems[i].value.homeAccountIdentifier);
            var account = Account_1.Account.createAccount(idToken, clientInfo);
            accounts.push(account);
        }
        return this.getUniqueAccounts(accounts);
    };
    /**
     * @hidden
     *
     * Used to filter accounts based on homeAccountIdentifier
     * @param {Array<Account>}  Accounts - accounts saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAccounts = function (accounts) {
        if (!accounts || accounts.length <= 1) {
            return accounts;
        }
        var flags = [];
        var uniqueAccounts = [];
        for (var index = 0; index < accounts.length; ++index) {
            if (accounts[index].homeAccountIdentifier && flags.indexOf(accounts[index].homeAccountIdentifier) === -1) {
                flags.push(accounts[index].homeAccountIdentifier);
                uniqueAccounts.push(accounts[index]);
            }
        }
        return uniqueAccounts;
    };
    // #endregion
    // #region Angular
    /**
     * @hidden
     *
     * Broadcast messages - Used only for Angular?  *
     * @param eventName
     * @param data
     */
    UserAgentApplication.prototype.broadcast = function (eventName, data) {
        var evt = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(evt);
    };
    /**
     * @hidden
     *
     * Helper function to retrieve the cached token
     *
     * @param scopes
     * @param {@link Account} account
     * @param state
     * @return {@link AuthResponse} AuthResponse
     */
    UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, account, state, correlationId) {
        // Get the current session's account object
        var accountObject = account || this.getAccount();
        if (!accountObject) {
            return null;
        }
        // Construct AuthenticationRequest based on response type; set "redirectUri" from the "request" which makes this call from Angular - for this.getRedirectUri()
        var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.config.auth.validateAuthority);
        var responseType = this.getTokenType(accountObject, scopes, true);
        var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(newAuthority, this.clientId, responseType, this.getRedirectUri(), scopes, state, correlationId);
        // get cached token
        return this.getCachedToken(serverAuthenticationRequest, account);
    };
    /**
     * @hidden
     *
     * Get scopes for the Endpoint - Used in Angular to track protected and unprotected resources without interaction from the developer app
     * Note: Please check if we need to set the "redirectUri" from the "request" which makes this call from Angular - for this.getRedirectUri()
     *
     * @param endpoint
     */
    UserAgentApplication.prototype.getScopesForEndpoint = function (endpoint) {
        // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
        if (this.config.framework.unprotectedResources.length > 0) {
            for (var i = 0; i < this.config.framework.unprotectedResources.length; i++) {
                if (endpoint.indexOf(this.config.framework.unprotectedResources[i]) > -1) {
                    return null;
                }
            }
        }
        // process all protected resources and send the matched one
        if (this.config.framework.protectedResourceMap.size > 0) {
            for (var _i = 0, _a = Array.from(this.config.framework.protectedResourceMap.keys()); _i < _a.length; _i++) {
                var key = _a[_i];
                // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                if (endpoint.indexOf(key) > -1) {
                    return this.config.framework.protectedResourceMap.get(key);
                }
            }
        }
        /*
         * default resource will be clientid if nothing specified
         * App will use idtoken for calls to itself
         * check if it's staring from http or https, needs to match with app host
         */
        if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
            if (UrlUtils_1.UrlUtils.getHostFromUri(endpoint) === UrlUtils_1.UrlUtils.getHostFromUri(this.getRedirectUri())) {
                return new Array(this.clientId);
            }
        }
        else {
            /*
             * in angular level, the url for $http interceptor call could be relative url,
             * if it's relative call, we'll treat it as app backend call.
             */
            return new Array(this.clientId);
        }
        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };
    /**
     * Return boolean flag to developer to help inform if login is in progress
     * @returns {boolean} true/false
     */
    UserAgentApplication.prototype.getLoginInProgress = function () {
        var pendingCallback = this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.URL_HASH);
        if (pendingCallback) {
            return true;
        }
        return this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS) === Constants_1.Constants.inProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param loginInProgress
     */
    UserAgentApplication.prototype.setInteractionInProgress = function (inProgress) {
        if (inProgress) {
            this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS, Constants_1.Constants.inProgress);
        }
        else {
            this.cacheStorage.removeItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
        }
    };
    /**
     * @hidden
     * @ignore
     *
     * @param loginInProgress
     */
    UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
        this.setInteractionInProgress(loginInProgress);
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the status of acquireTokenInProgress
     */
    UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
        return this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS) === Constants_1.Constants.inProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param acquireTokenInProgress
     */
    UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
        this.setInteractionInProgress(acquireTokenInProgress);
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the logger handle
     */
    UserAgentApplication.prototype.getLogger = function () {
        return this.logger;
    };
    /**
     * Sets the logger callback.
     * @param logger Logger callback
     */
    UserAgentApplication.prototype.setLogger = function (logger) {
        this.logger = logger;
    };
    // #endregion
    // #region Getters and Setters
    /**
     * Use to get the redirect uri configured in MSAL or null.
     * Evaluates redirectUri if its a function, otherwise simply returns its value.
     *
     * @returns {string} redirect URL
     */
    UserAgentApplication.prototype.getRedirectUri = function (reqRedirectUri) {
        if (reqRedirectUri) {
            return reqRedirectUri;
        }
        else if (typeof this.config.auth.redirectUri === "function") {
            return this.config.auth.redirectUri();
        }
        return this.config.auth.redirectUri;
    };
    /**
     * Use to get the post logout redirect uri configured in MSAL or null.
     * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
     *
     * @returns {string} post logout redirect URL
     */
    UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
        if (typeof this.config.auth.postLogoutRedirectUri === "function") {
            return this.config.auth.postLogoutRedirectUri();
        }
        return this.config.auth.postLogoutRedirectUri;
    };
    /**
     * Use to get the current {@link Configuration} object in MSAL
     *
     * @returns {@link Configuration}
     */
    UserAgentApplication.prototype.getCurrentConfiguration = function () {
        if (!this.config) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoSetConfigurationError();
        }
        return this.config;
    };
    /**
     * @ignore
     *
     * Utils function to create the Authentication
     * @param {@link account} account object
     * @param scopes
     * @param silentCall
     *
     * @returns {string} token type: id_token or access_token
     *
     */
    UserAgentApplication.prototype.getTokenType = function (accountObject, scopes, silentCall) {
        /*
         * if account is passed and matches the account object/or set to getAccount() from cache
         * if client-id is passed as scope, get id_token else token/id_token_token (in case no session exists)
         */
        var tokenType;
        // acquireTokenSilent
        if (silentCall) {
            if (Account_1.Account.compareAccounts(accountObject, this.getAccount())) {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            else {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.id_token_token;
            }
            return tokenType;
        }
        // all other cases
        else {
            if (!Account_1.Account.compareAccounts(accountObject, this.getAccount())) {
                tokenType = ResponseTypes.id_token_token;
            }
            else {
                tokenType = (scopes.indexOf(this.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            return tokenType;
        }
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cachekeys for and stores the account information in cache
     * @param account
     * @param state
     * @hidden
     */
    UserAgentApplication.prototype.setAccountCache = function (account, state) {
        // Cache acquireTokenAccountKey
        var accountId = account ? this.getAccountId(account) : Constants_1.Constants.no_account;
        var acquireTokenAccountKey = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(accountId, state);
        this.cacheStorage.setItem(acquireTokenAccountKey, JSON.stringify(account));
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cacheKey for and stores the authority information in cache
     * @param state
     * @param authority
     * @hidden
     */
    UserAgentApplication.prototype.setAuthorityCache = function (state, authority) {
        // Cache authorityKey
        var authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(state);
        this.cacheStorage.setItem(authorityKey, UrlUtils_1.UrlUtils.CanonicalizeUri(authority), this.inCookie);
    };
    /**
     * Updates account, authority, and nonce in cache
     * @param serverAuthenticationRequest
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.updateCacheEntries = function (serverAuthenticationRequest, account, loginStartPage) {
        // Cache account and authority
        if (loginStartPage) {
            // Cache the state, nonce, and login request data
            this.cacheStorage.setItem("" + Constants_1.TemporaryCacheKeys.LOGIN_REQUEST + Constants_1.Constants.resourceDelimiter + serverAuthenticationRequest.state, loginStartPage, this.inCookie);
            this.cacheStorage.setItem("" + Constants_1.TemporaryCacheKeys.STATE_LOGIN + Constants_1.Constants.resourceDelimiter + serverAuthenticationRequest.state, serverAuthenticationRequest.state, this.inCookie);
        }
        else {
            this.setAccountCache(account, serverAuthenticationRequest.state);
        }
        // Cache authorityKey
        this.setAuthorityCache(serverAuthenticationRequest.state, serverAuthenticationRequest.authority);
        // Cache nonce
        this.cacheStorage.setItem("" + Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + Constants_1.Constants.resourceDelimiter + serverAuthenticationRequest.state, serverAuthenticationRequest.nonce, this.inCookie);
    };
    /**
     * Returns the unique identifier for the logged in account
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.getAccountId = function (account) {
        // return `${account.accountIdentifier}` + Constants.resourceDelimiter + `${account.homeAccountIdentifier}`;
        var accountId;
        if (!StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
            accountId = account.homeAccountIdentifier;
        }
        else {
            accountId = Constants_1.Constants.no_account;
        }
        return accountId;
    };
    /**
     * @ignore
     * @param extraQueryParameters
     *
     * Construct 'tokenRequest' from the available data in adalIdToken
     */
    UserAgentApplication.prototype.buildIDTokenRequest = function (request) {
        var tokenRequest = {
            scopes: [this.clientId],
            authority: this.authority,
            account: this.getAccount(),
            extraQueryParameters: request.extraQueryParameters
        };
        return tokenRequest;
    };
    /**
     * @ignore
     * @param config
     * @param clientId
     *
     * Construct TelemetryManager from Configuration
     */
    UserAgentApplication.prototype.getTelemetryManagerFromConfig = function (config, clientId) {
        if (!config) { // if unset
            return TelemetryManager_1.default.getTelemetrymanagerStub(clientId);
        }
        // if set then validate
        var applicationName = config.applicationName, applicationVersion = config.applicationVersion, telemetryEmitter = config.telemetryEmitter;
        if (!applicationName || !applicationVersion || !telemetryEmitter) {
            throw ClientConfigurationError_1.ClientConfigurationError.createTelemetryConfigError(config);
        }
        // if valid then construct
        var telemetryPlatform = {
            applicationName: applicationName,
            applicationVersion: applicationVersion
        };
        var telemetryManagerConfig = {
            platform: telemetryPlatform,
            clientId: clientId
        };
        return new TelemetryManager_1.default(telemetryManagerConfig, telemetryEmitter);
    };
    return UserAgentApplication;
}());
exports.UserAgentApplication = UserAgentApplication;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(1);
var StringUtils_1 = __webpack_require__(3);
/**
 * @hidden
 */
var TokenUtils = /** @class */ (function () {
    function TokenUtils() {
    }
    /**
     * decode a JWT
     *
     * @param jwtToken
     */
    TokenUtils.decodeJwt = function (jwtToken) {
        if (StringUtils_1.StringUtils.isEmpty(jwtToken)) {
            return null;
        }
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            // this._requestContext.logger.warn("The returned id_token is not parseable.");
            return null;
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Extract IdToken by decoding the RAWIdToken
     *
     * @param encodedIdToken
     */
    TokenUtils.extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this.decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }
        try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = CryptoUtils_1.CryptoUtils.base64Decode(base64IdToken);
            if (!base64Decoded) {
                // this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            // this._requestContext.logger.error("The returned id_token could not be decoded" + err);
        }
        return null;
    };
    return TokenUtils;
}());
exports.TokenUtils = TokenUtils;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(1);
var StringUtils_1 = __webpack_require__(3);
/**
 * accountIdentifier       combination of idToken.uid and idToken.utid
 * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
 * userName                idToken.preferred_username
 * name                    idToken.name
 * idToken                 idToken
 * sid                     idToken.sid - session identifier
 * environment             idtoken.issuer (the authority that issues the token)
 */
var Account = /** @class */ (function () {
    /**
     * Creates an Account Object
     * @praram accountIdentifier
     * @param homeAccountIdentifier
     * @param userName
     * @param name
     * @param idToken
     * @param sid
     * @param environment
     */
    function Account(accountIdentifier, homeAccountIdentifier, userName, name, idTokenClaims, sid, environment) {
        this.accountIdentifier = accountIdentifier;
        this.homeAccountIdentifier = homeAccountIdentifier;
        this.userName = userName;
        this.name = name;
        // will be deprecated soon
        this.idToken = idTokenClaims;
        this.idTokenClaims = idTokenClaims;
        this.sid = sid;
        this.environment = environment;
    }
    /**
     * @hidden
     * @param idToken
     * @param clientInfo
     */
    Account.createAccount = function (idToken, clientInfo) {
        // create accountIdentifier
        var accountIdentifier = idToken.objectId || idToken.subject;
        // create homeAccountIdentifier
        var uid = clientInfo ? clientInfo.uid : "";
        var utid = clientInfo ? clientInfo.utid : "";
        var homeAccountIdentifier;
        if (!StringUtils_1.StringUtils.isEmpty(uid) && !StringUtils_1.StringUtils.isEmpty(utid)) {
            homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
        }
        return new Account(accountIdentifier, homeAccountIdentifier, idToken.preferredName, idToken.name, idToken.claims, idToken.sid, idToken.issuer);
    };
    /**
     * Utils function to compare two Account objects - used to check if the same user account is logged in
     *
     * @param a1: Account object
     * @param a2: Account object
     */
    Account.compareAccounts = function (a1, a2) {
        if (!a1 || !a2) {
            return false;
        }
        if (a1.homeAccountIdentifier && a2.homeAccountIdentifier) {
            if (a1.homeAccountIdentifier === a2.homeAccountIdentifier) {
                return true;
            }
        }
        return false;
    };
    return Account;
}());
exports.Account = Account;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Authority_1 = __webpack_require__(9);
var XHRClient_1 = __webpack_require__(18);
var Constants_1 = __webpack_require__(2);
/**
 * @hidden
 */
var AadAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(AadAuthority, _super);
    function AadAuthority(authority, validateAuthority) {
        return _super.call(this, authority, validateAuthority) || this;
    }
    Object.defineProperty(AadAuthority.prototype, "AadInstanceDiscoveryEndpointUrl", {
        get: function () {
            return AadAuthority.AadInstanceDiscoveryEndpoint + "?api-version=1.0&authorization_endpoint=" + this.CanonicalAuthority + "oauth2/v2.0/authorize";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AadAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.Aad;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise which resolves to the OIDC endpoint
     * Only responds with the endpoint
     */
    AadAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var client;
            return tslib_1.__generator(this, function (_a) {
                if (!this.IsValidationEnabled || this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
                    return [2 /*return*/, this.DefaultOpenIdConfigurationEndpoint];
                }
                client = new XHRClient_1.XhrClient();
                return [2 /*return*/, client.sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl, "GET", true)
                        .then(function (response) {
                        return response.tenant_discovery_endpoint;
                    })];
            });
        });
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param {string} The host to look up
     */
    AadAuthority.prototype.IsInTrustedHostList = function (host) {
        return Constants_1.AADTrustedHostList[host.toLowerCase()];
    };
    AadAuthority.AadInstanceDiscoveryEndpoint = "https://login.microsoftonline.com/common/discovery/instance";
    return AadAuthority;
}(Authority_1.Authority));
exports.AadAuthority = AadAuthority;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * XHR client for JSON endpoints
 * https://www.npmjs.com/package/async-promise
 * @hidden
 */
var XhrClient = /** @class */ (function () {
    function XhrClient() {
    }
    XhrClient.prototype.sendRequestAsync = function (url, method, enableCaching) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, /* async: */ true);
            if (enableCaching) {
                /*
                 * TODO: (shivb) ensure that this can be cached
                 * xhr.setRequestHeader("Cache-Control", "Public");
                 */
            }
            xhr.onload = function (ev) {
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject(_this.handleError(xhr.responseText));
                }
                var jsonResponse;
                try {
                    jsonResponse = JSON.parse(xhr.responseText);
                }
                catch (e) {
                    reject(_this.handleError(xhr.responseText));
                }
                resolve(jsonResponse);
            };
            xhr.onerror = function (ev) {
                reject(xhr.status);
            };
            if (method === "GET") {
                xhr.send();
            }
            else {
                throw "not implemented";
            }
        });
    };
    XhrClient.prototype.handleError = function (responseText) {
        var jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
            if (jsonResponse.error) {
                return jsonResponse.error;
            }
            else {
                throw responseText;
            }
        }
        catch (e) {
            return responseText;
        }
    };
    return XhrClient;
}());
exports.XhrClient = XhrClient;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AadAuthority_1 = __webpack_require__(17);
var Authority_1 = __webpack_require__(9);
var ClientConfigurationError_1 = __webpack_require__(4);
var UrlUtils_1 = __webpack_require__(5);
/**
 * @hidden
 */
var B2cAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(B2cAuthority, _super);
    function B2cAuthority(authority, validateAuthority) {
        var _this = _super.call(this, authority, validateAuthority) || this;
        var urlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(authority);
        var pathSegments = urlComponents.PathSegments;
        if (pathSegments.length < 3) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.b2cAuthorityUriInvalidPath;
        }
        _this.CanonicalAuthority = "https://" + urlComponents.HostNameAndPort + "/" + pathSegments[0] + "/" + pathSegments[1] + "/" + pathSegments[2] + "/";
        return _this;
    }
    Object.defineProperty(B2cAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.B2C;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise with the TenantDiscoveryEndpoint
     */
    B2cAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!this.IsValidationEnabled || this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
                    return [2 /*return*/, this.DefaultOpenIdConfigurationEndpoint];
                }
                throw ClientConfigurationError_1.ClientConfigurationErrorMessage.unsupportedAuthorityValidation;
            });
        });
    };
    B2cAuthority.B2C_PREFIX = "tfp";
    return B2cAuthority;
}(AadAuthority_1.AadAuthority));
exports.B2cAuthority = B2cAuthority;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Logger_1 = __webpack_require__(11);
var UrlUtils_1 = __webpack_require__(5);
/**
 * Defaults for the Configuration Options
 */
var FRAME_TIMEOUT = 6000;
var OFFSET = 300;
var NAVIGATE_FRAME_WAIT = 500;
var DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: null,
    validateAuthority: true,
    redirectUri: function () { return UrlUtils_1.UrlUtils.getDefaultRedirectUri(); },
    postLogoutRedirectUri: function () { return UrlUtils_1.UrlUtils.getDefaultRedirectUri(); },
    navigateToLoginRequestUrl: true
};
var DEFAULT_CACHE_OPTIONS = {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
};
var DEFAULT_SYSTEM_OPTIONS = {
    logger: new Logger_1.Logger(null),
    loadFrameTimeout: FRAME_TIMEOUT,
    tokenRenewalOffsetSeconds: OFFSET,
    navigateFrameWait: NAVIGATE_FRAME_WAIT
};
var DEFAULT_FRAMEWORK_OPTIONS = {
    isAngular: false,
    unprotectedResources: new Array(),
    protectedResourceMap: new Map()
};
/**
 * MSAL function that sets the default options when not explicitly configured from app developer
 *
 * @param TAuthOptions
 * @param TCacheOptions
 * @param TSystemOptions
 * @param TFrameworkOptions
 *
 * @returns TConfiguration object
 */
function buildConfiguration(_a) {
    var auth = _a.auth, _b = _a.cache, cache = _b === void 0 ? {} : _b, _c = _a.system, system = _c === void 0 ? {} : _c, _d = _a.framework, framework = _d === void 0 ? {} : _d;
    var overlayedConfig = {
        auth: tslib_1.__assign({}, DEFAULT_AUTH_OPTIONS, auth),
        cache: tslib_1.__assign({}, DEFAULT_CACHE_OPTIONS, cache),
        system: tslib_1.__assign({}, DEFAULT_SYSTEM_OPTIONS, system),
        framework: tslib_1.__assign({}, DEFAULT_FRAMEWORK_OPTIONS, framework)
    };
    return overlayedConfig;
}
exports.buildConfiguration = buildConfiguration;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ServerError_1 = __webpack_require__(12);
exports.InteractionRequiredAuthErrorMessage = {
    interactionRequired: {
        code: "interaction_required"
    },
    consentRequired: {
        code: "consent_required"
    },
    loginRequired: {
        code: "login_required"
    },
};
/**
 * Error thrown when the user is required to perform an interactive token request.
 */
var InteractionRequiredAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(InteractionRequiredAuthError, _super);
    function InteractionRequiredAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "InteractionRequiredAuthError";
        Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
        return _this;
    }
    InteractionRequiredAuthError.isInteractionRequiredError = function (errorString) {
        var interactionRequiredCodes = [
            exports.InteractionRequiredAuthErrorMessage.interactionRequired.code,
            exports.InteractionRequiredAuthErrorMessage.consentRequired.code,
            exports.InteractionRequiredAuthErrorMessage.loginRequired.code
        ];
        return errorString && interactionRequiredCodes.indexOf(errorString) > -1;
    };
    InteractionRequiredAuthError.createLoginRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.loginRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createInteractionRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.interactionRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createConsentRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.consentRequired.code, errorDesc);
    };
    return InteractionRequiredAuthError;
}(ServerError_1.ServerError));
exports.InteractionRequiredAuthError = InteractionRequiredAuthError;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function buildResponseStateOnly(state) {
    return {
        uniqueId: "",
        tenantId: "",
        tokenType: "",
        idToken: null,
        idTokenClaims: null,
        accessToken: "",
        scopes: null,
        expiresOn: null,
        account: null,
        accountState: state,
        fromCache: false
    };
}
exports.buildResponseStateOnly = buildResponseStateOnly;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryConstants_1 = __webpack_require__(8);
var TelemetryConstants_2 = __webpack_require__(8);
var TelemetryUtils_1 = __webpack_require__(13);
var CryptoUtils_1 = __webpack_require__(1);
var TelemetryEvent = /** @class */ (function () {
    function TelemetryEvent(eventName, correlationId) {
        var _a;
        this.startTimestamp = Date.now();
        this.eventId = CryptoUtils_1.CryptoUtils.createNewGuid();
        this.event = (_a = {},
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)] = eventName,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.START_TIME_KEY)] = this.startTimestamp,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = -1,
            _a["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = correlationId,
            _a);
    }
    TelemetryEvent.prototype.setElapsedTime = function (time) {
        this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = time;
    };
    TelemetryEvent.prototype.stop = function () {
        // Set duration of event
        this.setElapsedTime(+Date.now() - +this.startTimestamp);
    };
    Object.defineProperty(TelemetryEvent.prototype, "telemetryCorrelationId", {
        get: function () {
            return this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey];
        },
        set: function (value) {
            this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TelemetryEvent.prototype, "eventName", {
        get: function () {
            return this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)];
        },
        enumerable: true,
        configurable: true
    });
    TelemetryEvent.prototype.get = function () {
        return tslib_1.__assign({}, this.event, { eventId: this.eventId });
    };
    return TelemetryEvent;
}());
exports.default = TelemetryEvent;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAgentApplication_1 = __webpack_require__(14);
exports.UserAgentApplication = UserAgentApplication_1.UserAgentApplication;
var Logger_1 = __webpack_require__(11);
exports.Logger = Logger_1.Logger;
var Logger_2 = __webpack_require__(11);
exports.LogLevel = Logger_2.LogLevel;
var Account_1 = __webpack_require__(16);
exports.Account = Account_1.Account;
var Constants_1 = __webpack_require__(2);
exports.Constants = Constants_1.Constants;
var Authority_1 = __webpack_require__(9);
exports.Authority = Authority_1.Authority;
var UserAgentApplication_2 = __webpack_require__(14);
exports.CacheResult = UserAgentApplication_2.CacheResult;
var Configuration_1 = __webpack_require__(20);
exports.CacheLocation = Configuration_1.CacheLocation;
exports.Configuration = Configuration_1.Configuration;
var AuthenticationParameters_1 = __webpack_require__(42);
exports.AuthenticationParameters = AuthenticationParameters_1.AuthenticationParameters;
var AuthResponse_1 = __webpack_require__(22);
exports.AuthResponse = AuthResponse_1.AuthResponse;
var CryptoUtils_1 = __webpack_require__(1);
exports.CryptoUtils = CryptoUtils_1.CryptoUtils;
// Errors
var AuthError_1 = __webpack_require__(7);
exports.AuthError = AuthError_1.AuthError;
var ClientAuthError_1 = __webpack_require__(6);
exports.ClientAuthError = ClientAuthError_1.ClientAuthError;
var ServerError_1 = __webpack_require__(12);
exports.ServerError = ServerError_1.ServerError;
var ClientConfigurationError_1 = __webpack_require__(4);
exports.ClientConfigurationError = ClientConfigurationError_1.ClientConfigurationError;
var InteractionRequiredAuthError_1 = __webpack_require__(21);
exports.InteractionRequiredAuthError = InteractionRequiredAuthError_1.InteractionRequiredAuthError;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(1);
var UrlUtils_1 = __webpack_require__(5);
/**
 * @hidden
 */
var AccessTokenKey = /** @class */ (function () {
    function AccessTokenKey(authority, clientId, scopes, uid, utid) {
        this.authority = UrlUtils_1.UrlUtils.CanonicalizeUri(authority);
        this.clientId = clientId;
        this.scopes = scopes;
        this.homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
    }
    return AccessTokenKey;
}());
exports.AccessTokenKey = AccessTokenKey;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenValue = /** @class */ (function () {
    function AccessTokenValue(accessToken, idToken, expiresIn, homeAccountIdentifier) {
        this.accessToken = accessToken;
        this.idToken = idToken;
        this.expiresIn = expiresIn;
        this.homeAccountIdentifier = homeAccountIdentifier;
    }
    return AccessTokenValue;
}());
exports.AccessTokenValue = AccessTokenValue;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(1);
var Constants_1 = __webpack_require__(2);
var StringUtils_1 = __webpack_require__(3);
/**
 * Nonce: OIDC Nonce definition: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
 * State: OAuth Spec: https://tools.ietf.org/html/rfc6749#section-10.12
 * @hidden
 */
var ServerRequestParameters = /** @class */ (function () {
    /**
     * Constructor
     * @param authority
     * @param clientId
     * @param scope
     * @param responseType
     * @param redirectUri
     * @param state
     */
    function ServerRequestParameters(authority, clientId, responseType, redirectUri, scopes, state, correlationId) {
        this.authorityInstance = authority;
        this.clientId = clientId;
        this.nonce = CryptoUtils_1.CryptoUtils.createNewGuid();
        // set scope to clientId if null
        this.scopes = scopes ? scopes.slice() : [clientId];
        // set state (already set at top level)
        this.state = state;
        // set correlationId
        this.correlationId = correlationId;
        // telemetry information
        this.xClientSku = "MSAL.JS";
        this.xClientVer = Constants_1.libraryVersion();
        this.responseType = responseType;
        this.redirectUri = redirectUri;
    }
    Object.defineProperty(ServerRequestParameters.prototype, "authority", {
        get: function () {
            return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     * @ignore
     *
     * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
     * @param request
     * @param serverAuthenticationRequest
     */
    ServerRequestParameters.prototype.populateQueryParams = function (account, request, adalIdTokenObject) {
        var queryParameters = {};
        if (request) {
            // add the prompt parameter to serverRequestParameters if passed
            if (request.prompt) {
                this.promptValue = request.prompt;
            }
            // Add claims challenge to serverRequestParameters if passed
            if (request.claimsRequest) {
                this.claimsValue = request.claimsRequest;
            }
            // if the developer provides one of these, give preference to developer choice
            if (ServerRequestParameters.isSSOParam(request)) {
                queryParameters = this.constructUnifiedCacheQueryParameter(request, null);
            }
        }
        if (adalIdTokenObject) {
            queryParameters = this.constructUnifiedCacheQueryParameter(null, adalIdTokenObject);
        }
        /*
         * adds sid/login_hint if not populated; populates domain_req, login_req and domain_hint
         * this.logger.verbose("Calling addHint parameters");
         */
        queryParameters = this.addHintParameters(account, queryParameters);
        // sanity check for developer passed extraQueryParameters
        var eQParams = request.extraQueryParameters;
        // Populate the extraQueryParameters to be sent to the server
        this.queryParameters = ServerRequestParameters.generateQueryParametersString(queryParameters);
        this.extraQueryParameters = ServerRequestParameters.generateQueryParametersString(eQParams);
    };
    // #region QueryParam helpers
    /**
     * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
     * in any login() or acquireToken() calls
     * @param idTokenObject
     * @param extraQueryParameters
     * @param sid
     * @param loginHint
     */
    // TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
    ServerRequestParameters.prototype.constructUnifiedCacheQueryParameter = function (request, idTokenObject) {
        // preference order: account > sid > login_hint
        var ssoType;
        var ssoData;
        var serverReqParam = {};
        // if account info is passed, account.sid > account.login_hint
        if (request) {
            if (request.account) {
                var account = request.account;
                if (account.sid) {
                    ssoType = Constants_1.SSOTypes.SID;
                    ssoData = account.sid;
                }
                else if (account.userName) {
                    ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                    ssoData = account.userName;
                }
            }
            // sid from request
            else if (request.sid) {
                ssoType = Constants_1.SSOTypes.SID;
                ssoData = request.sid;
            }
            // loginHint from request
            else if (request.loginHint) {
                ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                ssoData = request.loginHint;
            }
        }
        // adalIdToken retrieved from cache
        else if (idTokenObject) {
            if (idTokenObject.hasOwnProperty(Constants_1.Constants.upn)) {
                ssoType = Constants_1.SSOTypes.ID_TOKEN;
                ssoData = idTokenObject.upn;
            }
            else {
                ssoType = Constants_1.SSOTypes.ORGANIZATIONS;
                ssoData = null;
            }
        }
        serverReqParam = this.addSSOParameter(ssoType, ssoData);
        // add the HomeAccountIdentifier info/ domain_hint
        if (request && request.account && request.account.homeAccountIdentifier) {
            serverReqParam = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, request.account.homeAccountIdentifier, serverReqParam);
        }
        return serverReqParam;
    };
    /**
     * @hidden
     *
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
     * domain_hint can be one of users/organizations which when added skips the email based discovery process of the user
     * domain_req utid received as part of the clientInfo
     * login_req uid received as part of clientInfo
     * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
     *
     * @param {@link Account} account - Account for which the token is requested
     * @param queryparams
     * @param {@link ServerRequestParameters}
     * @ignore
     */
    ServerRequestParameters.prototype.addHintParameters = function (account, qParams) {
        /*
         * This is a final check for all queryParams added so far; preference order: sid > login_hint
         * sid cannot be passed along with login_hint or domain_hint, hence we check both are not populated yet in queryParameters
         */
        if (account && !qParams[Constants_1.SSOTypes.SID]) {
            // sid - populate only if login_hint is not already populated and the account has sid
            var populateSID = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.sid && this.promptValue === Constants_1.PromptState.NONE;
            if (populateSID) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.SID, account.sid, qParams);
            }
            // login_hint - account.userName
            else {
                var populateLoginHint = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.userName && !StringUtils_1.StringUtils.isEmpty(account.userName);
                if (populateLoginHint) {
                    qParams = this.addSSOParameter(Constants_1.SSOTypes.LOGIN_HINT, account.userName, qParams);
                }
            }
            var populateReqParams = !qParams[Constants_1.SSOTypes.DOMAIN_REQ] && !qParams[Constants_1.SSOTypes.LOGIN_REQ];
            if (populateReqParams) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, account.homeAccountIdentifier, qParams);
            }
        }
        return qParams;
    };
    /**
     * Add SID to extraQueryParameters
     * @param sid
     */
    ServerRequestParameters.prototype.addSSOParameter = function (ssoType, ssoData, ssoParam) {
        if (!ssoParam) {
            ssoParam = {};
        }
        if (!ssoData) {
            return ssoParam;
        }
        switch (ssoType) {
            case Constants_1.SSOTypes.SID: {
                ssoParam[Constants_1.SSOTypes.SID] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ID_TOKEN: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.LOGIN_HINT: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ORGANIZATIONS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.CONSUMERS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                break;
            }
            case Constants_1.SSOTypes.HOMEACCOUNT_ID: {
                var homeAccountId = ssoData.split(".");
                var uid = CryptoUtils_1.CryptoUtils.base64Decode(homeAccountId[0]);
                var utid = CryptoUtils_1.CryptoUtils.base64Decode(homeAccountId[1]);
                // TODO: domain_req and login_req are not needed according to eSTS team
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = uid;
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = utid;
                if (utid === Constants_1.Constants.consumersUtid) {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                }
                else {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                }
                break;
            }
            case Constants_1.SSOTypes.LOGIN_REQ: {
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.DOMAIN_REQ: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = ssoData;
                break;
            }
        }
        return ssoParam;
    };
    /**
     * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
     * @param extraQueryParameters
     */
    ServerRequestParameters.generateQueryParametersString = function (queryParameters) {
        var paramsString = null;
        if (queryParameters) {
            Object.keys(queryParameters).forEach(function (key) {
                if (paramsString == null) {
                    paramsString = key + "=" + encodeURIComponent(queryParameters[key]);
                }
                else {
                    paramsString += "&" + key + "=" + encodeURIComponent(queryParameters[key]);
                }
            });
        }
        return paramsString;
    };
    // #endregion
    /**
     * Check to see if there are SSO params set in the Request
     * @param request
     */
    ServerRequestParameters.isSSOParam = function (request) {
        return request && (request.account || request.sid || request.loginHint);
    };
    return ServerRequestParameters;
}());
exports.ServerRequestParameters = ServerRequestParameters;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(1);
var ClientAuthError_1 = __webpack_require__(6);
var StringUtils_1 = __webpack_require__(3);
/**
 * @hidden
 */
var ClientInfo = /** @class */ (function () {
    function ClientInfo(rawClientInfo) {
        if (!rawClientInfo || StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            this.uid = "";
            this.utid = "";
            return;
        }
        try {
            var decodedClientInfo = CryptoUtils_1.CryptoUtils.base64Decode(rawClientInfo);
            var clientInfo = JSON.parse(decodedClientInfo);
            if (clientInfo) {
                if (clientInfo.hasOwnProperty("uid")) {
                    this.uid = clientInfo.uid;
                }
                if (clientInfo.hasOwnProperty("utid")) {
                    this.utid = clientInfo.utid;
                }
            }
        }
        catch (e) {
            throw ClientAuthError_1.ClientAuthError.createClientInfoDecodingError(e);
        }
    }
    Object.defineProperty(ClientInfo.prototype, "uid", {
        get: function () {
            return this._uid ? this._uid : "";
        },
        set: function (uid) {
            this._uid = uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientInfo.prototype, "utid", {
        get: function () {
            return this._utid ? this._utid : "";
        },
        set: function (utid) {
            this._utid = utid;
        },
        enumerable: true,
        configurable: true
    });
    return ClientInfo;
}());
exports.ClientInfo = ClientInfo;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientAuthError_1 = __webpack_require__(6);
var TokenUtils_1 = __webpack_require__(15);
var StringUtils_1 = __webpack_require__(3);
/**
 * @hidden
 */
var IdToken = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    function IdToken(rawIdToken) {
        if (StringUtils_1.StringUtils.isEmpty(rawIdToken)) {
            throw ClientAuthError_1.ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
        }
        try {
            this.rawIdToken = rawIdToken;
            this.claims = TokenUtils_1.TokenUtils.extractIdToken(rawIdToken);
            if (this.claims) {
                if (this.claims.hasOwnProperty("iss")) {
                    this.issuer = this.claims["iss"];
                }
                if (this.claims.hasOwnProperty("oid")) {
                    this.objectId = this.claims["oid"];
                }
                if (this.claims.hasOwnProperty("sub")) {
                    this.subject = this.claims["sub"];
                }
                if (this.claims.hasOwnProperty("tid")) {
                    this.tenantId = this.claims["tid"];
                }
                if (this.claims.hasOwnProperty("ver")) {
                    this.version = this.claims["ver"];
                }
                if (this.claims.hasOwnProperty("preferred_username")) {
                    this.preferredName = this.claims["preferred_username"];
                }
                if (this.claims.hasOwnProperty("name")) {
                    this.name = this.claims["name"];
                }
                if (this.claims.hasOwnProperty("nonce")) {
                    this.nonce = this.claims["nonce"];
                }
                if (this.claims.hasOwnProperty("exp")) {
                    this.expiration = this.claims["exp"];
                }
                if (this.claims.hasOwnProperty("home_oid")) {
                    this.homeObjectId = this.claims["home_oid"];
                }
                if (this.claims.hasOwnProperty("sid")) {
                    this.sid = this.claims["sid"];
                }
                if (this.claims.hasOwnProperty("cloud_instance_host_name")) {
                    this.cloudInstance = this.claims["cloud_instance_host_name"];
                }
                /* tslint:enable:no-string-literal */
            }
        }
        catch (e) {
            /*
             * TODO: This error here won't really every be thrown, since extractIdToken() returns null if the decodeJwt() fails.
             * Need to add better error handling here to account for being unable to decode jwts.
             */
            throw ClientAuthError_1.ClientAuthError.createIdTokenParsingError(e);
        }
    }
    return IdToken;
}());
exports.IdToken = IdToken;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Constants_1 = __webpack_require__(2);
var AccessTokenCacheItem_1 = __webpack_require__(32);
var BrowserStorage_1 = __webpack_require__(33);
var ClientAuthError_1 = __webpack_require__(6);
/**
 * @hidden
 */
var AuthCache = /** @class */ (function (_super) {
    tslib_1.__extends(AuthCache, _super);
    function AuthCache(clientId, cacheLocation, storeAuthStateInCookie) {
        var _this = _super.call(this, cacheLocation) || this;
        _this.clientId = clientId;
        // This is hardcoded to true for now. We may make this configurable in the future
        _this.rollbackEnabled = true;
        _this.migrateCacheEntries(storeAuthStateInCookie);
        return _this;
    }
    /**
     * Support roll back to old cache schema until the next major release: true by default now
     * @param storeAuthStateInCookie
     */
    AuthCache.prototype.migrateCacheEntries = function (storeAuthStateInCookie) {
        var _this = this;
        var idTokenKey = Constants_1.Constants.cachePrefix + "." + Constants_1.PersistentCacheKeys.IDTOKEN;
        var clientInfoKey = Constants_1.Constants.cachePrefix + "." + Constants_1.PersistentCacheKeys.CLIENT_INFO;
        var errorKey = Constants_1.Constants.cachePrefix + "." + Constants_1.ErrorCacheKeys.ERROR;
        var errorDescKey = Constants_1.Constants.cachePrefix + "." + Constants_1.ErrorCacheKeys.ERROR_DESC;
        var idTokenValue = _super.prototype.getItem.call(this, idTokenKey);
        var clientInfoValue = _super.prototype.getItem.call(this, clientInfoKey);
        var errorValue = _super.prototype.getItem.call(this, errorKey);
        var errorDescValue = _super.prototype.getItem.call(this, errorDescKey);
        var values = [idTokenValue, clientInfoValue, errorValue, errorDescValue];
        var keysToMigrate = [Constants_1.PersistentCacheKeys.IDTOKEN, Constants_1.PersistentCacheKeys.CLIENT_INFO, Constants_1.ErrorCacheKeys.ERROR, Constants_1.ErrorCacheKeys.ERROR_DESC];
        keysToMigrate.forEach(function (cacheKey, index) { return _this.duplicateCacheEntry(cacheKey, values[index], storeAuthStateInCookie); });
    };
    /**
     * Utility function to help with roll back keys
     * @param newKey
     * @param value
     * @param storeAuthStateInCookie
     */
    AuthCache.prototype.duplicateCacheEntry = function (newKey, value, storeAuthStateInCookie) {
        if (value) {
            this.setItem(newKey, value, storeAuthStateInCookie);
        }
    };
    /**
     * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
     * @param key
     * @param addInstanceId
     */
    AuthCache.prototype.generateCacheKey = function (key, addInstanceId) {
        try {
            // Defined schemas do not need the key appended
            JSON.parse(key);
            return key;
        }
        catch (e) {
            if (key.indexOf("" + Constants_1.Constants.cachePrefix) === 0 || key.indexOf(Constants_1.Constants.adalIdToken) === 0) {
                return key;
            }
            return addInstanceId ? Constants_1.Constants.cachePrefix + "." + this.clientId + "." + key : Constants_1.Constants.cachePrefix + "." + key;
        }
    };
    /**
     * add value to storage
     * @param key
     * @param value
     * @param enableCookieStorage
     */
    AuthCache.prototype.setItem = function (key, value, enableCookieStorage, state) {
        _super.prototype.setItem.call(this, this.generateCacheKey(key, true), value, enableCookieStorage);
        if (this.rollbackEnabled) {
            _super.prototype.setItem.call(this, this.generateCacheKey(key, false), value, enableCookieStorage);
        }
    };
    /**
     * get one item by key from storage
     * @param key
     * @param enableCookieStorage
     */
    AuthCache.prototype.getItem = function (key, enableCookieStorage) {
        return _super.prototype.getItem.call(this, this.generateCacheKey(key, true), enableCookieStorage);
    };
    /**
     * remove value from storage
     * @param key
     */
    AuthCache.prototype.removeItem = function (key) {
        _super.prototype.removeItem.call(this, this.generateCacheKey(key, true));
        if (this.rollbackEnabled) {
            _super.prototype.removeItem.call(this, this.generateCacheKey(key, false));
        }
    };
    /**
     * Reset the cache items
     */
    AuthCache.prototype.resetCacheItems = function () {
        var storage = window[this.cacheLocation];
        var key;
        for (key in storage) {
            // Check if key contains msal prefix; For now, we are clearing all cache items created by MSAL.js
            if (storage.hasOwnProperty(key) && (key.indexOf(Constants_1.Constants.cachePrefix) !== -1)) {
                _super.prototype.removeItem.call(this, key);
                // TODO: Clear cache based on client id (clarify use cases where this is needed)
            }
        }
    };
    /**
     * Reset all temporary cache items
     */
    AuthCache.prototype.resetTempCacheItems = function (state) {
        var storage = window[this.cacheLocation];
        var key;
        // check state and remove associated cache
        for (key in storage) {
            if ((!state || key.indexOf(state) !== -1) && !this.tokenRenewalInProgress(state)) {
                this.removeItem(key);
                this.setItemCookie(key, "", -1);
                this.clearMsalCookie(state);
            }
        }
        // delete the interaction status cache
        this.removeItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
        this.removeItem(Constants_1.TemporaryCacheKeys.REDIRECT_REQUEST);
    };
    /**
     * Set cookies for IE
     * @param cName
     * @param cValue
     * @param expires
     */
    AuthCache.prototype.setItemCookie = function (cName, cValue, expires) {
        _super.prototype.setItemCookie.call(this, this.generateCacheKey(cName, true), cValue, expires);
        if (this.rollbackEnabled) {
            _super.prototype.setItemCookie.call(this, this.generateCacheKey(cName, false), cValue, expires);
        }
    };
    /**
     * get one item by key from cookies
     * @param cName
     */
    AuthCache.prototype.getItemCookie = function (cName) {
        return _super.prototype.getItemCookie.call(this, this.generateCacheKey(cName, true));
    };
    /**
     * Get all access tokens in the cache
     * @param clientId
     * @param homeAccountIdentifier
     */
    AuthCache.prototype.getAllAccessTokens = function (clientId, homeAccountIdentifier) {
        var _this = this;
        var results = Object.keys(window[this.cacheLocation]).reduce(function (tokens, key) {
            var keyMatches = key.match(clientId) && key.match(homeAccountIdentifier) && key.match(Constants_1.Constants.scopes);
            if (keyMatches) {
                var value = _this.getItem(key);
                if (value) {
                    try {
                        var parseAtKey = JSON.parse(key);
                        var newAccessTokenCacheItem = new AccessTokenCacheItem_1.AccessTokenCacheItem(parseAtKey, JSON.parse(value));
                        return tokens.concat([newAccessTokenCacheItem]);
                    }
                    catch (e) {
                        throw ClientAuthError_1.ClientAuthError.createCacheParseError(key);
                    }
                }
            }
            return tokens;
        }, []);
        return results;
    };
    /**
     * Return if the token renewal is still in progress
     * @param stateValue
     */
    AuthCache.prototype.tokenRenewalInProgress = function (stateValue) {
        var renewStatus = this.getItem(Constants_1.TemporaryCacheKeys.RENEW_STATUS + "|" + stateValue);
        return !!(renewStatus && renewStatus === Constants_1.Constants.inProgress);
    };
    /**
     * Clear all cookies
     */
    AuthCache.prototype.clearMsalCookie = function (state) {
        this.clearItemCookie(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + "|" + state);
        this.clearItemCookie(Constants_1.TemporaryCacheKeys.STATE_LOGIN + "|" + state);
        this.clearItemCookie(Constants_1.TemporaryCacheKeys.LOGIN_REQUEST + "|" + state);
        this.clearItemCookie(Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN + "|" + state);
    };
    /**
     * Create acquireTokenAccountKey to cache account object
     * @param accountId
     * @param state
     */
    AuthCache.generateAcquireTokenAccountKey = function (accountId, state) {
        return "" + Constants_1.TemporaryCacheKeys.ACQUIRE_TOKEN_ACCOUNT + Constants_1.Constants.resourceDelimiter + accountId + Constants_1.Constants.resourceDelimiter + state;
    };
    /**
     * Create authorityKey to cache authority
     * @param state
     */
    AuthCache.generateAuthorityKey = function (state) {
        return "" + Constants_1.TemporaryCacheKeys.AUTHORITY + Constants_1.Constants.resourceDelimiter + state;
    };
    return AuthCache;
}(BrowserStorage_1.BrowserStorage));
exports.AuthCache = AuthCache;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenCacheItem = /** @class */ (function () {
    function AccessTokenCacheItem(key, value) {
        this.key = key;
        this.value = value;
    }
    return AccessTokenCacheItem;
}());
exports.AccessTokenCacheItem = AccessTokenCacheItem;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientConfigurationError_1 = __webpack_require__(4);
var AuthError_1 = __webpack_require__(7);
/**
 * @hidden
 */
var BrowserStorage = /** @class */ (function () {
    function BrowserStorage(cacheLocation) {
        if (!window) {
            throw AuthError_1.AuthError.createNoWindowObjectError("Browser storage class could not find window object");
        }
        var storageSupported = typeof window[cacheLocation] !== "undefined" && window[cacheLocation] != null;
        if (!storageSupported) {
            throw ClientConfigurationError_1.ClientConfigurationError.createStorageNotSupportedError(cacheLocation);
        }
        this.cacheLocation = cacheLocation;
    }
    /**
     * add value to storage
     * @param key
     * @param value
     * @param enableCookieStorage
     */
    BrowserStorage.prototype.setItem = function (key, value, enableCookieStorage) {
        window[this.cacheLocation].setItem(key, value);
        if (enableCookieStorage) {
            this.setItemCookie(key, value);
        }
    };
    /**
     * get one item by key from storage
     * @param key
     * @param enableCookieStorage
     */
    BrowserStorage.prototype.getItem = function (key, enableCookieStorage) {
        if (enableCookieStorage && this.getItemCookie(key)) {
            return this.getItemCookie(key);
        }
        return window[this.cacheLocation].getItem(key);
    };
    /**
     * remove value from storage
     * @param key
     */
    BrowserStorage.prototype.removeItem = function (key) {
        return window[this.cacheLocation].removeItem(key);
    };
    /**
     * clear storage (remove all items from it)
     */
    BrowserStorage.prototype.clear = function () {
        return window[this.cacheLocation].clear();
    };
    /**
     * add value to cookies
     * @param cName
     * @param cValue
     * @param expires
     */
    BrowserStorage.prototype.setItemCookie = function (cName, cValue, expires) {
        var cookieStr = cName + "=" + cValue + ";path=/;";
        if (expires) {
            var expireTime = this.getCookieExpirationTime(expires);
            cookieStr += "expires=" + expireTime + ";";
        }
        document.cookie = cookieStr;
    };
    /**
     * get one item by key from cookies
     * @param cName
     */
    BrowserStorage.prototype.getItemCookie = function (cName) {
        var name = cName + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    /**
     * Clear an item in the cookies by key
     * @param cName
     */
    BrowserStorage.prototype.clearItemCookie = function (cName) {
        this.setItemCookie(cName, "", -1);
    };
    /**
     * Get cookie expiration time
     * @param cookieLifeDays
     */
    BrowserStorage.prototype.getCookieExpirationTime = function (cookieLifeDays) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLifeDays * 24 * 60 * 60 * 1000);
        return expr.toUTCString();
    };
    return BrowserStorage;
}());
exports.BrowserStorage = BrowserStorage;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClientAuthError_1 = __webpack_require__(6);
var UrlUtils_1 = __webpack_require__(5);
var Constants_1 = __webpack_require__(2);
var WindowUtils = /** @class */ (function () {
    function WindowUtils() {
    }
    /**
     * @hidden
     * Checks if the current page is running in an iframe.
     * @ignore
     */
    WindowUtils.isInIframe = function () {
        return window.parent !== window;
    };
    /**
     * @hidden
     * Check if the current page is running in a popup.
     * @ignore
     */
    WindowUtils.isInPopup = function () {
        return !!(window.opener && window.opener !== window);
    };
    /**
     * @hidden
     * Monitors a window until it loads a url with a hash
     * @ignore
     */
    WindowUtils.monitorWindowForHash = function (contentWindow, timeout, urlNavigate, isSilentCall) {
        return new Promise(function (resolve, reject) {
            var maxTicks = timeout / WindowUtils.POLLING_INTERVAL_MS;
            var ticks = 0;
            var intervalId = setInterval(function () {
                if (contentWindow.closed) {
                    clearInterval(intervalId);
                    reject(ClientAuthError_1.ClientAuthError.createUserCancelledError());
                    return;
                }
                var href;
                try {
                    /*
                     * Will throw if cross origin,
                     * which should be caught and ignored
                     * since we need the interval to keep running while on STS UI.
                     */
                    href = contentWindow.location.href;
                }
                catch (e) { }
                if (isSilentCall) {
                    /*
                     * Always run clock for silent calls
                     * as silent operations should be short,
                     * and to ensure they always at worst timeout.
                     */
                    ticks++;
                }
                else {
                    // Don't process blank pages or cross domain
                    if (!href || href === "about:blank") {
                        return;
                    }
                    /*
                     * Only run clock when we are on same domain for popups
                     * as popup operations can take a long time.
                     */
                    ticks++;
                }
                if (href && UrlUtils_1.UrlUtils.urlContainsHash(href)) {
                    clearInterval(intervalId);
                    resolve(contentWindow.location.hash);
                }
                else if (ticks > maxTicks) {
                    clearInterval(intervalId);
                    reject(ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError(urlNavigate)); // better error?
                }
            }, WindowUtils.POLLING_INTERVAL_MS);
        });
    };
    /**
     * @hidden
     * Loads iframe with authorization endpoint URL
     * @ignore
     */
    WindowUtils.loadFrame = function (urlNavigate, frameName, timeoutMs, logger) {
        var _this = this;
        /*
         * This trick overcomes iframe navigation in IE
         * IE does not load the page consistently in iframe
         */
        logger.info("LoadFrame: " + frameName);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var frameHandle = _this.loadFrameSync(urlNavigate, frameName, logger);
                if (!frameHandle) {
                    reject("Unable to load iframe with name: " + frameName);
                    return;
                }
                resolve(frameHandle);
            }, timeoutMs);
        });
    };
    /**
     * @hidden
     * Loads the iframe synchronously when the navigateTimeFrame is set to `0`
     * @param urlNavigate
     * @param frameName
     * @param logger
     */
    WindowUtils.loadFrameSync = function (urlNavigate, frameName, logger) {
        var frameHandle = WindowUtils.addHiddenIFrame(frameName, logger);
        // returning to handle null in loadFrame, also to avoid null object access errors
        if (!frameHandle) {
            return null;
        }
        else if (frameHandle.src === "" || frameHandle.src === "about:blank") {
            frameHandle.src = urlNavigate;
            logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
        }
        return frameHandle;
    };
    /**
     * @hidden
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     */
    WindowUtils.addHiddenIFrame = function (iframeId, logger) {
        if (typeof iframeId === "undefined") {
            return null;
        }
        logger.info("Add msal frame to document:" + iframeId);
        var adalFrame = document.getElementById(iframeId);
        if (!adalFrame) {
            if (document.createElement &&
                document.documentElement &&
                (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
                var ifr = document.createElement("iframe");
                ifr.setAttribute("id", iframeId);
                ifr.style.visibility = "hidden";
                ifr.style.position = "absolute";
                ifr.style.width = ifr.style.height = "0";
                ifr.style.border = "0";
                ifr.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
                adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }
        return adalFrame;
    };
    /**
     * @hidden
     * Removes a hidden iframe from the page.
     * @ignore
     */
    WindowUtils.removeHiddenIframe = function (iframe) {
        if (document.body === iframe.parentNode) {
            document.body.removeChild(iframe);
        }
    };
    /**
     * @hidden
     * Find and return the iframe element with the given hash
     * @ignore
     */
    WindowUtils.getIframeWithHash = function (hash) {
        var iframes = document.getElementsByTagName("iframe");
        var iframeArray = Array.apply(null, Array(iframes.length)).map(function (iframe, index) { return iframes.item(index); }); // eslint-disable-line prefer-spread
        return iframeArray.filter(function (iframe) {
            try {
                return iframe.contentWindow.location.hash === hash;
            }
            catch (e) {
                return false;
            }
        })[0];
    };
    /**
     * @hidden
     * Returns an array of all the popups opened by MSAL
     * @ignore
     */
    WindowUtils.getPopups = function () {
        if (!window.openedWindows) {
            window.openedWindows = [];
        }
        return window.openedWindows;
    };
    /**
     * @hidden
     * Find and return the popup with the given hash
     * @ignore
     */
    WindowUtils.getPopUpWithHash = function (hash) {
        return WindowUtils.getPopups().filter(function (popup) {
            try {
                return popup.location.hash === hash;
            }
            catch (e) {
                return false;
            }
        })[0];
    };
    /**
     * @hidden
     * Add the popup to the known list of popups
     * @ignore
     */
    WindowUtils.trackPopup = function (popup) {
        WindowUtils.getPopups().push(popup);
    };
    /**
     * @hidden
     * Close all popups
     * @ignore
     */
    WindowUtils.closePopups = function () {
        WindowUtils.getPopups().forEach(function (popup) { return popup.close(); });
    };
    /**
     * @ignore
     *
     * blocks any login/acquireToken calls to reload from within a hidden iframe (generated for silent calls)
     */
    WindowUtils.blockReloadInHiddenIframes = function () {
        // return an error if called from the hidden iframe created by the msal js silent calls
        if (UrlUtils_1.UrlUtils.urlContainsHash(window.location.hash) && WindowUtils.isInIframe()) {
            throw ClientAuthError_1.ClientAuthError.createBlockTokenRequestsInHiddenIframeError();
        }
    };
    /**
     *
     * @param cacheStorage
     */
    WindowUtils.checkIfBackButtonIsPressed = function (cacheStorage) {
        var redirectCache = cacheStorage.getItem(Constants_1.TemporaryCacheKeys.REDIRECT_REQUEST);
        // if redirect request is set and there is no hash
        if (redirectCache && !UrlUtils_1.UrlUtils.urlContainsHash(window.location.hash)) {
            var splitCache = redirectCache.split(Constants_1.Constants.resourceDelimiter);
            var state = splitCache.length > 1 ? splitCache[splitCache.length - 1] : null;
            cacheStorage.resetTempCacheItems(state);
        }
    };
    /**
     * @hidden
     * Interval in milliseconds that we poll a window
     * @ignore
     */
    WindowUtils.POLLING_INTERVAL_MS = 50;
    return WindowUtils;
}());
exports.WindowUtils = WindowUtils;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    /**
     * Returns time in seconds for expiration based on string value passed in.
     *
     * @param expiresIn
     */
    TimeUtils.parseExpiresIn = function (expiresIn) {
        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
        if (!expiresIn) {
            expiresIn = "3599";
        }
        return parseInt(expiresIn, 10);
    };
    /**
     * return the current time in Unix time. Date.getTime() returns in milliseconds.
     */
    TimeUtils.now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };
    return TimeUtils;
}());
exports.TimeUtils = TimeUtils;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Constants_1 = __webpack_require__(2);
var ClientConfigurationError_1 = __webpack_require__(4);
var ScopeSet_1 = __webpack_require__(10);
var StringUtils_1 = __webpack_require__(3);
var CryptoUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var RequestUtils = /** @class */ (function () {
    function RequestUtils() {
    }
    /**
     * @ignore
     *
     * @param request
     * @param isLoginCall
     * @param requestType
     * @param redirectCallbacksSet
     * @param cacheStorage
     * @param clientId
     *
     * validates all request parameters and generates a consumable request object
     */
    RequestUtils.validateRequest = function (request, isLoginCall, clientId, requestType, redirectCallbacksSet) {
        // Throw error if request is empty for acquire * calls
        if (!isLoginCall && !request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        // Throw error if callbacks are not set before redirect
        if (requestType == Constants_1.Constants.interactionTypeRedirect && !redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        var scopes;
        var extraQueryParameters;
        if (request) {
            // if extraScopesToConsent is passed in loginCall, append them to the login request; Validate and filter scopes (the validate function will throw if validation fails)
            scopes = isLoginCall ? ScopeSet_1.ScopeSet.appendScopes(request.scopes, request.extraScopesToConsent) : request.scopes;
            ScopeSet_1.ScopeSet.validateInputScope(scopes, !isLoginCall, clientId);
            // validate prompt parameter
            this.validatePromptParameter(request.prompt);
            // validate extraQueryParameters
            extraQueryParameters = this.validateEQParameters(request.extraQueryParameters, request.claimsRequest);
            // validate claimsRequest
            this.validateClaimsRequest(request.claimsRequest);
        }
        // validate and generate state and correlationId
        var state = this.validateAndGenerateState(request && request.state);
        var correlationId = this.validateAndGenerateCorrelationId(request && request.correlationId);
        var validatedRequest = tslib_1.__assign({}, request, { extraQueryParameters: extraQueryParameters,
            scopes: scopes,
            state: state,
            correlationId: correlationId });
        return validatedRequest;
    };
    /**
     * @ignore
     *
     * Utility to test if valid prompt value is passed in the request
     * @param request
     */
    RequestUtils.validatePromptParameter = function (prompt) {
        if (prompt) {
            if ([Constants_1.PromptState.LOGIN, Constants_1.PromptState.SELECT_ACCOUNT, Constants_1.PromptState.CONSENT, Constants_1.PromptState.NONE].indexOf(prompt) < 0) {
                throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(prompt);
            }
        }
    };
    /**
     * @ignore
     *
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    RequestUtils.validateEQParameters = function (extraQueryParameters, claimsRequest) {
        var eQParams = tslib_1.__assign({}, extraQueryParameters);
        if (!eQParams) {
            return null;
        }
        if (claimsRequest) {
            // this.logger.warning("Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both.");
            delete eQParams[Constants_1.Constants.claims];
        }
        Constants_1.BlacklistedEQParams.forEach(function (param) {
            if (eQParams[param]) {
                // this.logger.warning("Removed duplicate " + param + " from extraQueryParameters. Please use the " + param + " field in request object.");
                delete eQParams[param];
            }
        });
        return eQParams;
    };
    /**
     * @ignore
     *
     * Validates the claims passed in request is a JSON
     * TODO: More validation will be added when the server team tells us how they have actually implemented claims
     * @param claimsRequest
     */
    RequestUtils.validateClaimsRequest = function (claimsRequest) {
        if (!claimsRequest) {
            return;
        }
        var claims;
        try {
            claims = JSON.parse(claimsRequest);
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
        }
    };
    /**
     * @ignore
     *
     * generate unique state per request
     * @param request
     */
    RequestUtils.validateAndGenerateState = function (state) {
        // append GUID to user set state  or set one for the user if null
        return !StringUtils_1.StringUtils.isEmpty(state) ? CryptoUtils_1.CryptoUtils.createNewGuid() + "|" + state : CryptoUtils_1.CryptoUtils.createNewGuid();
    };
    /**
     * @ignore
     *
     * validate correlationId and generate if not valid or not set by the user
     * @param correlationId
     */
    RequestUtils.validateAndGenerateCorrelationId = function (correlationId) {
        // validate user set correlationId or set one for the user if null
        if (correlationId && !CryptoUtils_1.CryptoUtils.isGuid(correlationId)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCorrelationIdError();
        }
        return CryptoUtils_1.CryptoUtils.isGuid(correlationId) ? correlationId : CryptoUtils_1.CryptoUtils.createNewGuid();
    };
    return RequestUtils;
}());
exports.RequestUtils = RequestUtils;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * @hidden
 */
var ResponseUtils = /** @class */ (function () {
    function ResponseUtils() {
    }
    ResponseUtils.setResponseIdToken = function (originalResponse, idTokenObj) {
        if (!originalResponse) {
            return null;
        }
        else if (!idTokenObj) {
            return originalResponse;
        }
        var exp = Number(idTokenObj.expiration);
        if (exp && !originalResponse.expiresOn) {
            originalResponse.expiresOn = new Date(exp * 1000);
        }
        return tslib_1.__assign({}, originalResponse, { idToken: idTokenObj, idTokenClaims: idTokenObj.claims, uniqueId: idTokenObj.objectId || idTokenObj.subject, tenantId: idTokenObj.tenantId });
    };
    return ResponseUtils;
}());
exports.ResponseUtils = ResponseUtils;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AadAuthority_1 = __webpack_require__(17);
var B2cAuthority_1 = __webpack_require__(19);
var Authority_1 = __webpack_require__(9);
var ClientConfigurationError_1 = __webpack_require__(4);
var UrlUtils_1 = __webpack_require__(5);
var StringUtils_1 = __webpack_require__(3);
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
     * Parse the url and determine the type of authority
     */
    AuthorityFactory.DetectAuthorityFromUrl = function (authorityUrl) {
        authorityUrl = UrlUtils_1.UrlUtils.CanonicalizeUri(authorityUrl);
        var components = UrlUtils_1.UrlUtils.GetUrlComponents(authorityUrl);
        var pathSegments = components.PathSegments;
        switch (pathSegments[0]) {
            case "tfp":
                return Authority_1.AuthorityType.B2C;
            default:
                return Authority_1.AuthorityType.Aad;
        }
    };
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
     */
    AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority) {
        if (StringUtils_1.StringUtils.isEmpty(authorityUrl)) {
            return null;
        }
        var type = AuthorityFactory.DetectAuthorityFromUrl(authorityUrl);
        // Depending on above detection, create the right type.
        switch (type) {
            case Authority_1.AuthorityType.B2C:
                return new B2cAuthority_1.B2cAuthority(authorityUrl, validateAuthority);
            case Authority_1.AuthorityType.Aad:
                return new AadAuthority_1.AadAuthority(authorityUrl, validateAuthority);
            default:
                throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
    };
    return AuthorityFactory;
}());
exports.AuthorityFactory = AuthorityFactory;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var DefaultEvent_1 = tslib_1.__importDefault(__webpack_require__(40));
var Constants_1 = __webpack_require__(2);
// for use in cache events
var MSAL_CACHE_EVENT_VALUE_PREFIX = "msal.token";
var MSAL_CACHE_EVENT_NAME = "msal.cache_event";
var createEventKey = function (event) { return (event.telemetryCorrelationId + "-" + event.eventId + "-" + event.eventName); };
var TelemetryManager = /** @class */ (function () {
    function TelemetryManager(config, telemetryEmitter) {
        // correlation Id to list of events
        this.completedEvents = {};
        // event key to event
        this.inProgressEvents = {};
        // correlation id to map of eventname to count
        this.eventCountByCorrelationId = {};
        // Implement after API EVENT
        this.onlySendFailureTelemetry = false;
        // TODO THROW if bad options
        this.telemetryPlatform = tslib_1.__assign({ sdk: Constants_1.Constants.libraryName, sdkVersion: Constants_1.libraryVersion(), networkInformation: {
                // @ts-ignore
                connectionSpeed: navigator && navigator.connection && navigator.connection.effectiveType
            } }, config.platform);
        this.clientId = config.clientId;
        this.onlySendFailureTelemetry = config.onlySendFailureTelemetry;
        /*
         * TODO, when i get to wiring this through, think about what it means if
         * a developer does not implement telem at all, we still instrument, but telemetryEmitter can be
         * optional?
         */
        this.telemetryEmitter = telemetryEmitter;
    }
    TelemetryManager.getTelemetrymanagerStub = function (clientId) {
        var applicationName = "UnSetStub";
        var applicationVersion = "0.0";
        var telemetryEmitter = function () { };
        var telemetryPlatform = {
            applicationName: applicationName,
            applicationVersion: applicationVersion
        };
        var telemetryManagerConfig = {
            platform: telemetryPlatform,
            clientId: clientId
        };
        return new this(telemetryManagerConfig, telemetryEmitter);
    };
    TelemetryManager.prototype.startEvent = function (event) {
        if (!this.telemetryEmitter) {
            return;
        }
        var eventKey = createEventKey(event);
        this.inProgressEvents[eventKey] = event;
    };
    TelemetryManager.prototype.stopEvent = function (event) {
        var eventKey = createEventKey(event);
        if (!this.telemetryEmitter || !this.inProgressEvents[eventKey]) {
            return;
        }
        event.stop();
        this.incrementEventCount(event);
        var completedEvents = this.completedEvents[event.telemetryCorrelationId];
        this.completedEvents[event.telemetryCorrelationId] = (completedEvents || []).concat([event]);
        delete this.inProgressEvents[eventKey];
    };
    TelemetryManager.prototype.flush = function (correlationId) {
        var _this = this;
        // If there is only unfinished events should this still return them?
        if (!this.telemetryEmitter || !this.completedEvents[correlationId]) {
            return;
        }
        var orphanedEvents = this.getOrphanedEvents(correlationId);
        orphanedEvents.forEach(function (event) { return _this.incrementEventCount(event); });
        var eventsToFlush = this.completedEvents[correlationId].concat(orphanedEvents);
        delete this.completedEvents[correlationId];
        var eventCountsToFlush = this.eventCountByCorrelationId[correlationId];
        delete this.eventCountByCorrelationId[correlationId];
        // TODO add funcitonality for onlyFlushFailures after implementing api event? ??
        if (!eventsToFlush || !eventsToFlush.length) {
            return;
        }
        var defaultEvent = new DefaultEvent_1.default(this.telemetryPlatform, correlationId, this.clientId, eventCountsToFlush);
        var eventsWithDefaultEvent = eventsToFlush.concat([defaultEvent]);
        this.telemetryEmitter(eventsWithDefaultEvent.map(function (e) { return e.get(); }));
    };
    TelemetryManager.prototype.incrementEventCount = function (event) {
        var _a;
        /*
         * TODO, name cache event different?
         * if type is cache event, change name
         */
        var eventName = event.eventName;
        var eventCount = this.eventCountByCorrelationId[event.telemetryCorrelationId];
        if (!eventCount) {
            this.eventCountByCorrelationId[event.telemetryCorrelationId] = (_a = {},
                _a[eventName] = 1,
                _a);
        }
        else {
            eventCount[eventName] = eventCount[eventName] ? eventCount[eventName] + 1 : 1;
        }
    };
    TelemetryManager.prototype.getOrphanedEvents = function (correlationId) {
        var _this = this;
        return Object.keys(this.inProgressEvents)
            .reduce(function (memo, eventKey) {
            if (eventKey.indexOf(correlationId) !== -1) {
                var event = _this.inProgressEvents[eventKey];
                delete _this.inProgressEvents[eventKey];
                return memo.concat([event]);
            }
            return memo;
        }, []);
    };
    return TelemetryManager;
}());
exports.default = TelemetryManager;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryConstants_1 = __webpack_require__(8);
var TelemetryEvent_1 = tslib_1.__importDefault(__webpack_require__(23));
var TelemetryUtils_1 = __webpack_require__(13);
var DefaultEvent = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultEvent, _super);
    // TODO Platform Type
    function DefaultEvent(platform, correlationId, clientId, eventCount) {
        var _this = _super.call(this, TelemetryUtils_1.prependEventNamePrefix("default_event"), correlationId) || this;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("client_id")] = clientId;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_plaform")] = platform.sdk;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_version")] = platform.sdkVersion;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_name")] = platform.applicationName;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_version")] = platform.applicationVersion;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("effective_connection_speed")] = platform.networkInformation && platform.networkInformation.connectionSpeed;
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.UiEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("ui_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.HttpEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("http_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.CacheEventCountConstStrKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("cache_event"), eventCount);
        return _this;
        // / Device id?
    }
    DefaultEvent.prototype.getEventCount = function (eventName, eventCount) {
        if (!eventCount[eventName]) {
            return 0;
        }
        return eventCount[eventName];
    };
    return DefaultEvent;
}(TelemetryEvent_1.default));
exports.default = DefaultEvent;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryEvent_1 = tslib_1.__importDefault(__webpack_require__(23));
var TelemetryConstants_1 = __webpack_require__(8);
var TelemetryUtils_1 = __webpack_require__(13);
exports.EVENT_KEYS = {
    AUTHORITY: TelemetryUtils_1.prependEventNamePrefix("authority"),
    AUTHORITY_TYPE: TelemetryUtils_1.prependEventNamePrefix("authority_type"),
    PROMPT: TelemetryUtils_1.prependEventNamePrefix("ui_behavior"),
    TENANT_ID: TelemetryUtils_1.prependEventNamePrefix("tenant_id"),
    USER_ID: TelemetryUtils_1.prependEventNamePrefix("user_id"),
    WAS_SUCESSFUL: TelemetryUtils_1.prependEventNamePrefix("was_successful"),
    API_ERROR_CODE: TelemetryUtils_1.prependEventNamePrefix("api_error_code"),
    LOGIN_HINT: TelemetryUtils_1.prependEventNamePrefix("login_hint")
};
var API_CODE;
(function (API_CODE) {
    API_CODE[API_CODE["AcquireTokenRedirect"] = 2001] = "AcquireTokenRedirect";
    API_CODE[API_CODE["AcquireTokenSilent"] = 2002] = "AcquireTokenSilent";
    API_CODE[API_CODE["AcquireTokenPopup"] = 2003] = "AcquireTokenPopup";
    API_CODE[API_CODE["LoginRedirect"] = 2004] = "LoginRedirect";
    API_CODE[API_CODE["LoginPopup"] = 2005] = "LoginPopup";
})(API_CODE = exports.API_CODE || (exports.API_CODE = {}));
var API_EVENT_IDENTIFIER;
(function (API_EVENT_IDENTIFIER) {
    API_EVENT_IDENTIFIER["AcquireTokenRedirect"] = "AcquireTokenRedirect";
    API_EVENT_IDENTIFIER["AcquireTokenSilent"] = "AcquireTokenSilent";
    API_EVENT_IDENTIFIER["AcquireTokenPopup"] = "AcquireTokenPopup";
    API_EVENT_IDENTIFIER["LoginRedirect"] = "LoginRedirect";
    API_EVENT_IDENTIFIER["LoginPopup"] = "LoginPopup";
})(API_EVENT_IDENTIFIER = exports.API_EVENT_IDENTIFIER || (exports.API_EVENT_IDENTIFIER = {}));
var ApiEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ApiEvent, _super);
    function ApiEvent(correlationId, logger) {
        var _this = _super.call(this, TelemetryUtils_1.prependEventNamePrefix("api_event"), correlationId) || this;
        _this.logger = logger;
        return _this;
    }
    Object.defineProperty(ApiEvent.prototype, "apiEventIdentifier", {
        set: function (apiEventIdentifier) {
            this.event[TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.ApiTelemIdConstStrKey] = apiEventIdentifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "apiCode", {
        set: function (apiCode) {
            this.event[TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.ApiIdConstStrKey] = apiCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "authority", {
        set: function (uri) {
            this.event[exports.EVENT_KEYS.AUTHORITY] = TelemetryUtils_1.scrubTenantFromUri(uri).toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "apiErrorCode", {
        set: function (errorCode) {
            this.event[exports.EVENT_KEYS.API_ERROR_CODE] = errorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "tenantId", {
        set: function (tenantId) {
            this.event[exports.EVENT_KEYS.TENANT_ID] = this.logger.isPiiLoggingEnabled() && tenantId ?
                TelemetryUtils_1.hashPersonalIdentifier(tenantId)
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "accountId", {
        set: function (accountId) {
            this.event[exports.EVENT_KEYS.USER_ID] = this.logger.isPiiLoggingEnabled() && accountId ?
                TelemetryUtils_1.hashPersonalIdentifier(accountId)
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "wasSuccessful", {
        get: function () {
            return this.event[exports.EVENT_KEYS.WAS_SUCESSFUL] === true;
        },
        set: function (wasSuccessful) {
            this.event[exports.EVENT_KEYS.WAS_SUCESSFUL] = wasSuccessful;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "loginHint", {
        set: function (loginHint) {
            this.event[exports.EVENT_KEYS.LOGIN_HINT] = this.logger.isPiiLoggingEnabled() && loginHint ?
                TelemetryUtils_1.hashPersonalIdentifier(loginHint)
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "authorityType", {
        set: function (authorityType) {
            this.event[exports.EVENT_KEYS.AUTHORITY_TYPE] = authorityType.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "promptType", {
        set: function (promptType) {
            this.event[exports.EVENT_KEYS.PROMPT] = promptType.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    return ApiEvent;
}(TelemetryEvent_1.default));
exports.default = ApiEvent;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientConfigurationError_1 = __webpack_require__(4);
function validateClaimsRequest(request) {
    if (!request.claimsRequest) {
        return;
    }
    var claims;
    try {
        claims = JSON.parse(request.claimsRequest);
    }
    catch (e) {
        throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
    }
    // TODO: More validation will be added when the server team tells us how they have actually implemented claims
}
exports.validateClaimsRequest = validateClaimsRequest;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01zYWwvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL01zYWwvLi9zcmMvdXRpbHMvQ3J5cHRvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9TdHJpbmdVdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL1VybFV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQ2xpZW50QXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvdGVsZW1ldHJ5L1RlbGVtZXRyeUNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2F1dGhvcml0eS9BdXRob3JpdHkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9TY29wZVNldC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0xvZ2dlci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2Vycm9yL1NlcnZlckVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvdGVsZW1ldHJ5L1RlbGVtZXRyeVV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvVXNlckFnZW50QXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9Ub2tlblV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjb3VudC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2F1dGhvcml0eS9BYWRBdXRob3JpdHkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9YSFJDbGllbnQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9hdXRob3JpdHkvQjJjQXV0aG9yaXR5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQ29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2Vycm9yL0ludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRoUmVzcG9uc2UudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5RXZlbnQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2NhY2hlL0FjY2Vzc1Rva2VuS2V5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvY2FjaGUvQWNjZXNzVG9rZW5WYWx1ZS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1NlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQ2xpZW50SW5mby50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0lkVG9rZW4udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9jYWNoZS9BdXRoQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9jYWNoZS9BY2Nlc3NUb2tlbkNhY2hlSXRlbS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2NhY2hlL0Jyb3dzZXJTdG9yYWdlLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvdXRpbHMvV2luZG93VXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9UaW1lVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9SZXF1ZXN0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9SZXNwb25zZVV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvYXV0aG9yaXR5L0F1dGhvcml0eUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5TWFuYWdlci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3RlbGVtZXRyeS9EZWZhdWx0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvQXBpRXZlbnQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7Ozs7O2dGQWFnRjtBQUNoRiw2QkFBNkI7O0FBRTdCLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7SUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO1FBQ2pDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFFRixTQUFnQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDMUIsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQixTQUFTLEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQUpELDhCQUlDO0FBRVUsZ0JBQVEsR0FBRztJQUNsQixnQkFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQztRQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEY7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRCxPQUFPLGdCQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNYLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztRQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDL0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxNQUFNLENBQUMscUJBQXFCLEtBQUssVUFBVTtRQUMvRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtJQUNMLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQVZELHdCQVVDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDcEQsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3SCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtRQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztRQUMxSCxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBTEQsZ0NBS0M7QUFFRCxTQUFnQixPQUFPLENBQUMsVUFBVSxFQUFFLFNBQVM7SUFDekMsT0FBTyxVQUFVLE1BQU0sRUFBRSxHQUFHLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFGRCwwQkFFQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsYUFBYTtJQUNqRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtRQUFFLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDbkksQ0FBQztBQUZELGdDQUVDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVM7SUFDdkQsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtRQUNyRCxTQUFTLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUUsQ0FBQyxDQUFDO1FBQzNGLFNBQVMsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFLENBQUMsQ0FBQztRQUM5RixTQUFTLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9JLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVBELDhCQU9DO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJO0lBQ3JDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakgsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsY0FBYSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6SixTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxVQUFVLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxTQUFTLElBQUksQ0FBQyxFQUFFO1FBQ1osSUFBSSxDQUFDO1lBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sQ0FBQztZQUFFLElBQUk7Z0JBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM3SixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ1gsS0FBSyxDQUFDLENBQUM7b0JBQUMsS0FBSyxDQUFDO3dCQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQUMsTUFBTTtvQkFDOUIsS0FBSyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7b0JBQ3hELEtBQUssQ0FBQzt3QkFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxTQUFTO29CQUNqRCxLQUFLLENBQUM7d0JBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFBQyxTQUFTO29CQUNqRDt3QkFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQUMsU0FBUzt5QkFBRTt3QkFDNUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsQ0FBQyxLQUFLLEdB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Q0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLGNBQWMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RILFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUksU0FBUyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJO1FBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQUU7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FBRSxDQUFDLENBQUM7SUFDbEYsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENB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LENBQUMsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdELENBQUM7OztPQUFBO0lBRUwsZUFBQztBQUFELENBQUMsQ0EzRHFDLHdCQUFjLEdBMkRuRDs7Ozs7Ozs7OztBQzNGRDs7O0dBR0c7O0FBR0gsd0RBQTRFO0FBdUI1RSxTQUFnQixxQkFBcUIsQ0FBQyxPQUFpQztJQUNuRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtRQUN4QixPQUFPO0tBQ1Y7SUFDRCxJQUFJLE1BQU0sQ0FBQztJQUNYLElBQUk7UUFDQSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDOUM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sbURBQXdCLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckU7SUFFRCw4R0FBOEc7QUFDbEgsQ0FBQztBQVpELHNEQVlDIiwiZmlsZSI6Im1zYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk1zYWxcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTXNhbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNc2FsXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjQpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ3J5cHRvVXRpbHMge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByYW5kb20gR1VJRFxuICAgICAqIEByZXR1cm5zIHN0cmluZyAoR1VJRClcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlTmV3R3VpZCgpOiBzdHJpbmcge1xuICAgICAgICAvKlxuICAgICAgICAgKiBSRkM0MTIyOiBUaGUgdmVyc2lvbiA0IFVVSUQgaXMgbWVhbnQgZm9yIGdlbmVyYXRpbmcgVVVJRHMgZnJvbSB0cnVseS1yYW5kb20gb3JcbiAgICAgICAgICogcHNldWRvLXJhbmRvbSBudW1iZXJzLlxuICAgICAgICAgKiBUaGUgYWxnb3JpdGhtIGlzIGFzIGZvbGxvd3M6XG4gICAgICAgICAqICAgICBTZXQgdGhlIHR3byBtb3N0IHNpZ25pZmljYW50IGJpdHMgKGJpdHMgNiBhbmQgNykgb2YgdGhlXG4gICAgICAgICAqICAgICAgICBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIHRvIHplcm8gYW5kIG9uZSwgcmVzcGVjdGl2ZWx5LlxuICAgICAgICAgKiAgICAgU2V0IHRoZSBmb3VyIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoYml0cyAxMiB0aHJvdWdoIDE1KSBvZiB0aGVcbiAgICAgICAgICogICAgICAgIHRpbWVfaGlfYW5kX3ZlcnNpb24gZmllbGQgdG8gdGhlIDQtYml0IHZlcnNpb24gbnVtYmVyIGZyb21cbiAgICAgICAgICogICAgICAgIFNlY3Rpb24gNC4xLjMuIFZlcnNpb240XG4gICAgICAgICAqICAgICBTZXQgYWxsIHRoZSBvdGhlciBiaXRzIHRvIHJhbmRvbWx5IChvciBwc2V1ZG8tcmFuZG9tbHkpIGNob3NlblxuICAgICAgICAgKiAgICAgdmFsdWVzLlxuICAgICAgICAgKiBVVUlEICAgICAgICAgICAgICAgICAgID0gdGltZS1sb3cgXCItXCIgdGltZS1taWQgXCItXCJ0aW1lLWhpZ2gtYW5kLXZlcnNpb24gXCItXCJjbG9jay1zZXEtcmVzZXJ2ZWQgYW5kIGxvdygyaGV4T2N0ZXQpXCItXCIgbm9kZVxuICAgICAgICAgKiB0aW1lLWxvdyAgICAgICAgICAgICAgID0gNGhleE9jdGV0XG4gICAgICAgICAqIHRpbWUtbWlkICAgICAgICAgICAgICAgPSAyaGV4T2N0ZXRcbiAgICAgICAgICogdGltZS1oaWdoLWFuZC12ZXJzaW9uICA9IDJoZXhPY3RldFxuICAgICAgICAgKiBjbG9jay1zZXEtYW5kLXJlc2VydmVkID0gaGV4T2N0ZXQ6XG4gICAgICAgICAqIGNsb2NrLXNlcS1sb3cgICAgICAgICAgPSBoZXhPY3RldFxuICAgICAgICAgKiBub2RlICAgICAgICAgICAgICAgICAgID0gNmhleE9jdGV0XG4gICAgICAgICAqIEZvcm1hdDogeHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XG4gICAgICAgICAqIHkgY291bGQgYmUgMTAwMCwgMTAwMSwgMTAxMCwgMTAxMSBzaW5jZSBtb3N0IHNpZ25pZmljYW50IHR3byBiaXRzIG5lZWRzIHRvIGJlIDEwXG4gICAgICAgICAqIHkgdmFsdWVzIGFyZSA4LCA5LCBBLCBCXG4gICAgICAgICAqL1xuXG4gICAgICAgIGNvbnN0IGNyeXB0b09iajogQ3J5cHRvID0gd2luZG93LmNyeXB0bzsgLy8gZm9yIElFIDExXG4gICAgICAgIGlmIChjcnlwdG9PYmogJiYgY3J5cHRvT2JqLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgICAgICAgY3J5cHRvT2JqLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xuXG4gICAgICAgICAgICAvLyBidWZmZXJbNl0gYW5kIGJ1ZmZlcls3XSByZXByZXNlbnRzIHRoZSB0aW1lX2hpX2FuZF92ZXJzaW9uIGZpZWxkLiBXZSB3aWxsIHNldCB0aGUgZm91ciBtb3N0IHNpZ25pZmljYW50IGJpdHMgKDQgdGhyb3VnaCA3KSBvZiBidWZmZXJbNl0gdG8gcmVwcmVzZW50IGRlY2ltYWwgbnVtYmVyIDQgKFVVSUQgdmVyc2lvbiBudW1iZXIpLlxuICAgICAgICAgICAgYnVmZmVyWzZdIHw9IDB4NDA7IC8vIGJ1ZmZlcls2XSB8IDAxMDAwMDAwIHdpbGwgc2V0IHRoZSA2IGJpdCB0byAxLlxuICAgICAgICAgICAgYnVmZmVyWzZdICY9IDB4NGY7IC8vIGJ1ZmZlcls2XSAmIDAxMDAxMTExIHdpbGwgc2V0IHRoZSA0LCA1LCBhbmQgNyBiaXQgdG8gMCBzdWNoIHRoYXQgYml0cyA0LTcgPT0gMDEwMCA9IFwiNFwiLlxuXG4gICAgICAgICAgICAvLyBidWZmZXJbOF0gcmVwcmVzZW50cyB0aGUgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZCBmaWVsZC4gV2Ugd2lsbCBzZXQgdGhlIHR3byBtb3N0IHNpZ25pZmljYW50IGJpdHMgKDYgYW5kIDcpIG9mIHRoZSBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIHRvIHplcm8gYW5kIG9uZSwgcmVzcGVjdGl2ZWx5LlxuICAgICAgICAgICAgYnVmZmVyWzhdIHw9IDB4ODA7IC8vIGJ1ZmZlcls4XSB8IDEwMDAwMDAwIHdpbGwgc2V0IHRoZSA3IGJpdCB0byAxLlxuICAgICAgICAgICAgYnVmZmVyWzhdICY9IDB4YmY7IC8vIGJ1ZmZlcls4XSAmIDEwMTExMTExIHdpbGwgc2V0IHRoZSA2IGJpdCB0byAwLlxuXG4gICAgICAgICAgICByZXR1cm4gQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclswXSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzFdKVxuICAgICAgICAgICAgICAgICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsyXSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzNdKVxuICAgICAgICAgICAgICAgICsgXCItXCIgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzRdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNV0pXG4gICAgICAgICAgICAgICAgKyBcIi1cIiArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNl0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls3XSlcbiAgICAgICAgICAgICAgICArIFwiLVwiICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls4XSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzldKVxuICAgICAgICAgICAgICAgICsgXCItXCIgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzEwXSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzExXSlcbiAgICAgICAgICAgICAgICArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTJdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTNdKVxuICAgICAgICAgICAgICAgICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxNF0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxNV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZ3VpZEhvbGRlcjogc3RyaW5nID0gXCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIjtcbiAgICAgICAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XG4gICAgICAgICAgICBsZXQgcjogbnVtYmVyID0gMDtcbiAgICAgICAgICAgIGxldCBndWlkUmVzcG9uc2U6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChndWlkSG9sZGVyW2ldICE9PSBcIi1cIiAmJiBndWlkSG9sZGVyW2ldICE9PSBcIjRcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBlYWNoIHggYW5kIHkgbmVlZHMgdG8gYmUgcmFuZG9tXG4gICAgICAgICAgICAgICAgICAgIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ3VpZEhvbGRlcltpXSA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGhleFtyXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGd1aWRIb2xkZXJbaV0gPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb2NrLXNlcS1hbmQtcmVzZXJ2ZWQgZmlyc3QgaGV4IGlzIGZpbHRlcmVkIGFuZCByZW1haW5pbmcgaGV4IHZhbHVlcyBhcmUgcmFuZG9tXG4gICAgICAgICAgICAgICAgICAgIHIgJj0gMHgzOyAvLyBiaXQgYW5kIHdpdGggMDAxMSB0byBzZXQgcG9zIDIgdG8gemVybyA/MD8/XG4gICAgICAgICAgICAgICAgICAgIHIgfD0gMHg4OyAvLyBzZXQgcG9zIDMgdG8gMSBhcyAxPz8/XG4gICAgICAgICAgICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBoZXhbcl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGd1aWRIb2xkZXJbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGd1aWRSZXNwb25zZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHZlcmlmaWVzIGlmIGEgc3RyaW5nIGlzICBHVUlEXG4gICAgICogQHBhcmFtIGd1aWRcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNHdWlkKGd1aWQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCByZWdleEd1aWQgPSAvXlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9JC9pO1xuICAgICAgICByZXR1cm4gcmVnZXhHdWlkLnRlc3QoZ3VpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjaW1hbCB0byBIZXhcbiAgICAgKlxuICAgICAqIEBwYXJhbSBudW1cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVjaW1hbFRvSGV4KG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGhleDogc3RyaW5nID0gbnVtLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgd2hpbGUgKGhleC5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBoZXggPSBcIjBcIiArIGhleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGV4O1xuICAgIH1cblxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nI1NvbHV0aW9uXzRfJUUyJTgwJTkzX2VzY2FwaW5nX3RoZV9zdHJpbmdfYmVmb3JlX2VuY29kaW5nX2l0XG5cbiAgICAvKipcbiAgICAgKiBlbmNvZGluZyBzdHJpbmcgdG8gYmFzZTY0IC0gcGxhdGZvcm0gc3BlY2lmaWMgY2hlY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbnB1dFxuICAgICAqL1xuICAgIHN0YXRpYyBiYXNlNjRFbmNvZGUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChpbnB1dCkucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRvU29saWRCeXRlcyhtYXRjaCwgcDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShOdW1iZXIoXCIweFwiICsgcDEpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICovXG4gICAgc3RhdGljIGJhc2U2NERlY29kZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGVuY29kZWRTdHJpbmcgPSBpbnB1dC5yZXBsYWNlKC8tL2csIFwiK1wiKS5yZXBsYWNlKC9fL2csIFwiL1wiKTtcbiAgICAgICAgc3dpdGNoIChlbmNvZGVkU3RyaW5nLmxlbmd0aCAlIDQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlbmNvZGVkU3RyaW5nICs9IFwiPT1cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlbmNvZGVkU3RyaW5nICs9IFwiPVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGJhc2U2NCBzdHJpbmdcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IoZW5jb2RlZFN0cmluZykuc3BsaXQoXCJcIikubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIlXCIgKyAoXCIwMFwiICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgICAgICB9KS5qb2luKFwiXCIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBkZXNlcmlhbGl6ZSBhIHN0cmluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHF1ZXJ5XG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplKHF1ZXJ5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBsZXQgbWF0Y2g6IEFycmF5PHN0cmluZz47IC8vIFJlZ2V4IGZvciByZXBsYWNpbmcgYWRkaXRpb24gc3ltYm9sIHdpdGggYSBzcGFjZVxuICAgICAgICBjb25zdCBwbCA9IC9cXCsvZztcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gLyhbXiY9XSspPShbXiZdKikvZztcbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHM6IHN0cmluZykgPT4gZGVjb2RlVVJJQ29tcG9uZW50KHMucmVwbGFjZShwbCwgXCIgXCIpKTtcbiAgICAgICAgY29uc3Qgb2JqOiB7fSA9IHt9O1xuICAgICAgICBtYXRjaCA9IHNlYXJjaC5leGVjKHF1ZXJ5KTtcbiAgICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgICAgICBvYmpbZGVjb2RlKG1hdGNoWzFdKV0gPSBkZWNvZGUobWF0Y2hbMl0pO1xuICAgICAgICAgICAgbWF0Y2ggPSBzZWFyY2guZXhlYyhxdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqIENvbnN0YW50c1xuICovXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcbiAgICBzdGF0aWMgZ2V0IGxpYnJhcnlOYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIk1zYWwuanNcIjsgfSAvLyB1c2VkIGluIHRlbGVtZXRyeSBzZGtOYW1lXG4gICAgc3RhdGljIGdldCBjbGFpbXMoKTogc3RyaW5nIHsgcmV0dXJuIFwiY2xhaW1zXCI7IH1cbiAgICBzdGF0aWMgZ2V0IGNsaWVudElkKCk6IHN0cmluZyB7IHJldHVybiBcImNsaWVudElkXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgYWRhbElkVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiYWRhbC5pZHRva2VuXCI7IH1cbiAgICBzdGF0aWMgZ2V0IGNhY2hlUHJlZml4KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWxcIjsgfVxuICAgIHN0YXRpYyBnZXQgc2NvcGVzKCk6IHN0cmluZyB7IHJldHVybiBcInNjb3Blc1wiOyB9XG5cbiAgICBzdGF0aWMgZ2V0IG5vX2FjY291bnQoKTogc3RyaW5nIHsgcmV0dXJuIFwiTk9fQUNDT1VOVFwiOyB9XG4gICAgc3RhdGljIGdldCBjb25zdW1lcnNVdGlkKCk6IHN0cmluZyB7IHJldHVybiBcIjkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZFwiOyB9XG4gICAgc3RhdGljIGdldCB1cG4oKTogc3RyaW5nIHsgcmV0dXJuIFwidXBuXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgcHJvbXB0X3NlbGVjdF9hY2NvdW50KCk6IHN0cmluZyB7IHJldHVybiBcIiZwcm9tcHQ9c2VsZWN0X2FjY291bnRcIjsgfVxuICAgIHN0YXRpYyBnZXQgcHJvbXB0X25vbmUoKTogc3RyaW5nIHsgcmV0dXJuIFwiJnByb21wdD1ub25lXCI7IH1cbiAgICBzdGF0aWMgZ2V0IHByb21wdCgpOiBzdHJpbmcgeyByZXR1cm4gXCJwcm9tcHRcIjsgfVxuXG4gICAgc3RhdGljIGdldCByZXNwb25zZV9tb2RlX2ZyYWdtZW50KCk6IHN0cmluZyB7IHJldHVybiBcIiZyZXNwb25zZV9tb2RlPWZyYWdtZW50XCI7IH1cbiAgICBzdGF0aWMgZ2V0IHJlc291cmNlRGVsaW1pdGVyKCk6IHN0cmluZyB7IHJldHVybiBcInxcIjsgfVxuICAgIHN0YXRpYyBnZXQgY2FjaGVEZWxpbWl0ZXIoKTogc3RyaW5nIHsgcmV0dXJuIFwiLlwiOyB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfcG9wVXBXaWR0aDogbnVtYmVyID0gNDgzO1xuICAgIHN0YXRpYyBnZXQgcG9wVXBXaWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fcG9wVXBXaWR0aDsgfVxuICAgIHN0YXRpYyBzZXQgcG9wVXBXaWR0aCh3aWR0aDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BvcFVwV2lkdGggPSB3aWR0aDtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgX3BvcFVwSGVpZ2h0OiBudW1iZXIgPSA2MDA7XG4gICAgc3RhdGljIGdldCBwb3BVcEhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fcG9wVXBIZWlnaHQ7IH1cbiAgICBzdGF0aWMgc2V0IHBvcFVwSGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BvcFVwSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgbG9naW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiTE9HSU5cIjsgfVxuICAgIHN0YXRpYyBnZXQgcmVuZXdUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJSRU5FV19UT0tFTlwiOyB9XG4gICAgc3RhdGljIGdldCB1bmtub3duKCk6IHN0cmluZyB7IHJldHVybiBcIlVOS05PV05cIjsgfVxuXG4gICAgc3RhdGljIGdldCBob21lQWNjb3VudElkZW50aWZpZXIoKTogc3RyaW5nIHsgcmV0dXJuIFwiaG9tZUFjY291bnRJZGVudGlmaWVyXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgY29tbW9uKCk6IHN0cmluZyB7IHJldHVybiBcImNvbW1vblwiOyB9XG4gICAgc3RhdGljIGdldCBvcGVuaWRTY29wZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJvcGVuaWRcIjsgfVxuICAgIHN0YXRpYyBnZXQgcHJvZmlsZVNjb3BlKCk6IHN0cmluZyB7IHJldHVybiBcInByb2ZpbGVcIjsgfVxuXG4gICAgc3RhdGljIGdldCBpbnRlcmFjdGlvblR5cGVSZWRpcmVjdCgpOiBJbnRlcmFjdGlvblR5cGUgeyByZXR1cm4gXCJyZWRpcmVjdEludGVyYWN0aW9uXCI7IH1cbiAgICBzdGF0aWMgZ2V0IGludGVyYWN0aW9uVHlwZVBvcHVwKCk6IEludGVyYWN0aW9uVHlwZSB7IHJldHVybiBcInBvcHVwSW50ZXJhY3Rpb25cIjsgfVxuICAgIHN0YXRpYyBnZXQgaW5Qcm9ncmVzcygpOiBzdHJpbmcgeyByZXR1cm4gXCJpblByb2dyZXNzXCI7IH1cbn1cblxuLyoqXG4gKiBLZXlzIGluIHRoZSBoYXNoUGFyYW1zXG4gKi9cbmV4cG9ydCBlbnVtIFNlcnZlckhhc2hQYXJhbUtleXMge1xuICAgIFNDT1BFID0gXCJzY29wZVwiLFxuICAgIEVSUk9SID0gXCJlcnJvclwiLFxuICAgIEVSUk9SX0RFU0NSSVBUSU9OID0gXCJlcnJvcl9kZXNjcmlwdGlvblwiLFxuICAgIEFDQ0VTU19UT0tFTiA9IFwiYWNjZXNzX3Rva2VuXCIsXG4gICAgSURfVE9LRU4gPSBcImlkX3Rva2VuXCIsXG4gICAgRVhQSVJFU19JTiA9IFwiZXhwaXJlc19pblwiLFxuICAgIFNFU1NJT05fU1RBVEUgPSBcInNlc3Npb25fc3RhdGVcIixcbiAgICBDTElFTlRfSU5GTyA9IFwiY2xpZW50X2luZm9cIlxufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBDYWNoZUtleXMgZm9yIE1TQUxcbiAqL1xuZXhwb3J0IGVudW0gVGVtcG9yYXJ5Q2FjaGVLZXlzIHtcbiAgICBBVVRIT1JJVFkgPSBcImF1dGhvcml0eVwiLFxuICAgIEFDUVVJUkVfVE9LRU5fQUNDT1VOVCA9IFwiYWNxdWlyZVRva2VuQWNjb3VudFwiLFxuICAgIFNFU1NJT05fU1RBVEUgPSBcInNlc3Npb24uc3RhdGVcIixcbiAgICBTVEFURV9MT0dJTiA9IFwic3RhdGUubG9naW5cIixcbiAgICBTVEFURV9BQ1FfVE9LRU4gPSBcInN0YXRlLmFjcXVpcmVUb2tlblwiLFxuICAgIFNUQVRFX1JFTkVXID0gXCJzdGF0ZS5yZW5ld1wiLFxuICAgIE5PTkNFX0lEVE9LRU4gPSBcIm5vbmNlLmlkdG9rZW5cIixcbiAgICBMT0dJTl9SRVFVRVNUID0gXCJsb2dpbi5yZXF1ZXN0XCIsXG4gICAgUkVORVdfU1RBVFVTID0gXCJ0b2tlbi5yZW5ldy5zdGF0dXNcIixcbiAgICBVUkxfSEFTSCA9IFwidXJsSGFzaFwiLFxuICAgIElOVEVSQUNUSU9OX1NUQVRVUyA9IFwiaW50ZXJhY3Rpb25fc3RhdHVzXCIsXG4gICAgUkVESVJFQ1RfUkVRVUVTVCA9IFwicmVkaXJlY3RfcmVxdWVzdFwiXG59XG5cbmV4cG9ydCBlbnVtIFBlcnNpc3RlbnRDYWNoZUtleXMge1xuICAgIElEVE9LRU4gPSBcImlkdG9rZW5cIixcbiAgICBDTElFTlRfSU5GTyA9IFwiY2xpZW50LmluZm9cIlxufVxuXG5leHBvcnQgZW51bSBFcnJvckNhY2hlS2V5cyB7XG4gICAgTE9HSU5fRVJST1IgPSBcImxvZ2luLmVycm9yXCIsXG4gICAgRVJST1IgPSBcImVycm9yXCIsXG4gICAgRVJST1JfREVTQyA9IFwiZXJyb3IuZGVzY3JpcHRpb25cIlxufVxuXG5leHBvcnQgY29uc3QgQUFEVHJ1c3RlZEhvc3RMaXN0ID0gIHtcbiAgICBcImxvZ2luLndpbmRvd3MubmV0XCI6IFwibG9naW4ud2luZG93cy5uZXRcIixcbiAgICBcImxvZ2luLmNoaW5hY2xvdWRhcGkuY25cIjogXCJsb2dpbi5jaGluYWNsb3VkYXBpLmNuXCIsXG4gICAgXCJsb2dpbi5jbG91ZGdvdmFwaS51c1wiOiBcImxvZ2luLmNsb3VkZ292YXBpLnVzXCIsXG4gICAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLmNvbVwiLFxuICAgIFwibG9naW4ubWljcm9zb2Z0b25saW5lLmRlXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLmRlXCIsXG4gICAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUudXNcIjogXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUudXNcIlxufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBTU08gVHlwZXMgLSBnZW5lcmF0ZWQgdG8gcG9wdWxhdGUgaGludHNcbiAqL1xuZXhwb3J0IGVudW0gU1NPVHlwZXMge1xuICAgIEFDQ09VTlQgPSBcImFjY291bnRcIixcbiAgICBTSUQgPSBcInNpZFwiLFxuICAgIExPR0lOX0hJTlQgPSBcImxvZ2luX2hpbnRcIixcbiAgICBJRF9UT0tFTiA9XCJpZF90b2tlblwiLFxuICAgIERPTUFJTl9ISU5UID0gXCJkb21haW5faGludFwiLFxuICAgIE9SR0FOSVpBVElPTlMgPSBcIm9yZ2FuaXphdGlvbnNcIixcbiAgICBDT05TVU1FUlMgPSBcImNvbnN1bWVyc1wiLFxuICAgIEFDQ09VTlRfSUQgPSBcImFjY291bnRJZGVudGlmaWVyXCIsXG4gICAgSE9NRUFDQ09VTlRfSUQgPSBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiLFxuICAgIExPR0lOX1JFUSA9IFwibG9naW5fcmVxXCIsXG4gICAgRE9NQUlOX1JFUSA9IFwiZG9tYWluX3JlcVwiXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IEJsYWNrbGlzdGVkRVFQYXJhbXMgPSBbXG4gICAgU1NPVHlwZXMuU0lELFxuICAgIFNTT1R5cGVzLkxPR0lOX0hJTlRcbl07XG5cbmV4cG9ydCB0eXBlIEludGVyYWN0aW9uVHlwZSA9IFwicmVkaXJlY3RJbnRlcmFjdGlvblwiIHwgXCJwb3B1cEludGVyYWN0aW9uXCI7XG5cbi8qKlxuICogd2UgY29uc2lkZXJlZCBtYWtpbmcgdGhpcyBcImVudW1cIiBpbiB0aGUgcmVxdWVzdCBpbnN0ZWFkIG9mIHN0cmluZywgaG93ZXZlciBpdCBsb29rcyBsaWtlIHRoZSBhbGxvd2VkIGxpc3Qgb2ZcbiAqIHByb21wdCB2YWx1ZXMga2VwdCBjaGFuZ2luZyBvdmVyIHBhc3QgY291cGxlIG9mIHllYXJzLiBUaGVyZSBhcmUgc29tZSB1bmRvY3VtZW50ZWQgcHJvbXB0IHZhbHVlcyBmb3Igc29tZVxuICogaW50ZXJuYWwgcGFydG5lcnMgdG9vLCBoZW5jZSB0aGUgY2hvaWNlIG9mIGdlbmVyaWMgXCJzdHJpbmdcIiB0eXBlIGluc3RlYWQgb2YgdGhlIFwiZW51bVwiXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9tcHRTdGF0ZSA9IHtcbiAgICBMT0dJTjogXCJsb2dpblwiLFxuICAgIFNFTEVDVF9BQ0NPVU5UOiBcInNlbGVjdF9hY2NvdW50XCIsXG4gICAgQ09OU0VOVDogXCJjb25zZW50XCIsXG4gICAgTk9ORTogXCJub25lXCIsXG59O1xuXG4vKipcbiAqIE1TQUwgSlMgTGlicmFyeSBWZXJzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaWJyYXJ5VmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIjEuMi4yXCI7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpbmdVdGlscyB7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBzdHJpbmcgaXMgZW1wdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFbXB0eShzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09IFwidW5kZWZpbmVkXCIgfHwgIXN0ciB8fCAwID09PSBzdHIubGVuZ3RoKTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vQ2xpZW50QXV0aEVycm9yXCI7XG5pbXBvcnQgeyBUZWxlbWV0cnlPcHRpb25zIH0gZnJvbSBcIi4uL0NvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgPSB7XG4gICAgY29uZmlndXJhdGlvbk5vdFNldDoge1xuICAgICAgICBjb2RlOiBcIm5vX2NvbmZpZ19zZXRcIixcbiAgICAgICAgZGVzYzogXCJDb25maWd1cmF0aW9uIGhhcyBub3QgYmVlbiBzZXQuIFBsZWFzZSBjYWxsIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbiBjb25zdHJ1Y3RvciB3aXRoIGEgdmFsaWQgQ29uZmlndXJhdGlvbiBvYmplY3QuXCJcbiAgICB9LFxuICAgIHN0b3JhZ2VOb3RTdXBwb3J0ZWQ6IHtcbiAgICAgICAgY29kZTogXCJzdG9yYWdlX25vdF9zdXBwb3J0ZWRcIixcbiAgICAgICAgZGVzYzogXCJUaGUgdmFsdWUgZm9yIHRoZSBjYWNoZUxvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuXCJcbiAgICB9LFxuICAgIG5vUmVkaXJlY3RDYWxsYmFja3NTZXQ6IHtcbiAgICAgICAgY29kZTogXCJub19yZWRpcmVjdF9jYWxsYmFja3NcIixcbiAgICAgICAgZGVzYzogXCJObyByZWRpcmVjdCBjYWxsYmFja3MgaGF2ZSBiZWVuIHNldC4gUGxlYXNlIGNhbGwgaGFuZGxlUmVkaXJlY3RDYWxsYmFjaygpIHdpdGggdGhlIGFwcHJvcHJpYXRlIGZ1bmN0aW9uIGFyZ3VtZW50cyBiZWZvcmUgY29udGludWluZy4gXCIgK1xuICAgICAgICAgICAgXCJNb3JlIGluZm9ybWF0aW9uIGlzIGF2YWlsYWJsZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vQXp1cmVBRC9taWNyb3NvZnQtYXV0aGVudGljYXRpb24tbGlicmFyeS1mb3ItanMvd2lraS9NU0FMLWJhc2ljcy5cIlxuICAgIH0sXG4gICAgaW52YWxpZENhbGxiYWNrT2JqZWN0OiB7XG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9jYWxsYmFja19vYmplY3RcIixcbiAgICAgICAgZGVzYzogXCJUaGUgb2JqZWN0IHBhc3NlZCBmb3IgdGhlIGNhbGxiYWNrIHdhcyBpbnZhbGlkLiBcIiArXG4gICAgICAgICAgXCJNb3JlIGluZm9ybWF0aW9uIGlzIGF2YWlsYWJsZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vQXp1cmVBRC9taWNyb3NvZnQtYXV0aGVudGljYXRpb24tbGlicmFyeS1mb3ItanMvd2lraS9NU0FMLWJhc2ljcy5cIlxuICAgIH0sXG4gICAgc2NvcGVzUmVxdWlyZWQ6IHtcbiAgICAgICAgY29kZTogXCJzY29wZXNfcmVxdWlyZWRcIixcbiAgICAgICAgZGVzYzogXCJTY29wZXMgYXJlIHJlcXVpcmVkIHRvIG9idGFpbiBhbiBhY2Nlc3MgdG9rZW4uXCJcbiAgICB9LFxuICAgIGVtcHR5U2NvcGVzOiB7XG4gICAgICAgIGNvZGU6IFwiZW1wdHlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGNhbm5vdCBiZSBwYXNzZWQgYXMgZW1wdHkgYXJyYXkuXCJcbiAgICB9LFxuICAgIG5vbkFycmF5U2NvcGVzOiB7XG4gICAgICAgIGNvZGU6IFwibm9uYXJyYXlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGNhbm5vdCBiZSBwYXNzZWQgYXMgbm9uLWFycmF5LlwiXG4gICAgfSxcbiAgICBjbGllbnRTY29wZToge1xuICAgICAgICBjb2RlOiBcImNsaWVudGlkX2lucHV0X3Njb3Blc19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkNsaWVudCBJRCBjYW4gb25seSBiZSBwcm92aWRlZCBhcyBhIHNpbmdsZSBzY29wZS5cIlxuICAgIH0sXG4gICAgaW52YWxpZFByb21wdDoge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfcHJvbXB0X3ZhbHVlXCIsXG4gICAgICAgIGRlc2M6IFwiU3VwcG9ydGVkIHByb21wdCB2YWx1ZXMgYXJlICdsb2dpbicsICdzZWxlY3RfYWNjb3VudCcsICdjb25zZW50JyBhbmQgJ25vbmUnXCIsXG4gICAgfSxcbiAgICBpbnZhbGlkQXV0aG9yaXR5VHlwZToge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfYXV0aG9yaXR5X3R5cGVcIixcbiAgICAgICAgZGVzYzogXCJUaGUgZ2l2ZW4gYXV0aG9yaXR5IGlzIG5vdCBhIHZhbGlkIHR5cGUgb2YgYXV0aG9yaXR5IHN1cHBvcnRlZCBieSBNU0FMLiBQbGVhc2Ugc2VlIGhlcmUgZm9yIHZhbGlkIGF1dGhvcml0aWVzOiA8aW5zZXJ0IFVSTCBoZXJlPi5cIlxuICAgIH0sXG4gICAgYXV0aG9yaXR5VXJpSW5zZWN1cmU6IHtcbiAgICAgICAgY29kZTogXCJhdXRob3JpdHlfdXJpX2luc2VjdXJlXCIsXG4gICAgICAgIGRlc2M6IFwiQXV0aG9yaXR5IFVSSXMgbXVzdCB1c2UgaHR0cHMuXCJcbiAgICB9LFxuICAgIGF1dGhvcml0eVVyaUludmFsaWRQYXRoOiB7XG4gICAgICAgIGNvZGU6IFwiYXV0aG9yaXR5X3VyaV9pbnZhbGlkX3BhdGhcIixcbiAgICAgICAgZGVzYzogXCJHaXZlbiBhdXRob3JpdHkgVVJJIGlzIGludmFsaWQuXCJcbiAgICB9LFxuICAgIHVuc3VwcG9ydGVkQXV0aG9yaXR5VmFsaWRhdGlvbjoge1xuICAgICAgICBjb2RlOiBcInVuc3VwcG9ydGVkX2F1dGhvcml0eV92YWxpZGF0aW9uXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGF1dGhvcml0eSB2YWxpZGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgYXV0aG9yaXR5IHR5cGUuXCJcbiAgICB9LFxuICAgIGIyY0F1dGhvcml0eVVyaUludmFsaWRQYXRoOiB7XG4gICAgICAgIGNvZGU6IFwiYjJjX2F1dGhvcml0eV91cmlfaW52YWxpZF9wYXRoXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGdpdmVuIFVSSSBmb3IgdGhlIEIyQyBhdXRob3JpdHkgaXMgaW52YWxpZC5cIlxuICAgIH0sXG4gICAgY2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImNsYWltc19yZXF1ZXN0X3BhcnNpbmdfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJDb3VsZCBub3QgcGFyc2UgdGhlIGdpdmVuIGNsYWltcyByZXF1ZXN0IG9iamVjdC5cIlxuICAgIH0sXG4gICAgZW1wdHlSZXF1ZXN0RXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJlbXB0eV9yZXF1ZXN0X2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiUmVxdWVzdCBvYmplY3QgaXMgcmVxdWlyZWQuXCJcbiAgICB9LFxuICAgIGludmFsaWRDb3JyZWxhdGlvbklkRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2d1aWRfc2VudF9hc19jb3JyZWxhdGlvbklkXCIsXG4gICAgICAgIGRlc2M6IFwiUGxlYXNlIHNldCB0aGUgY29ycmVsYXRpb25JZCBhcyBhIHZhbGlkIGd1aWRcIlxuICAgIH0sXG4gICAgdGVsZW1ldHJ5Q29uZmlnRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ0ZWxlbWV0cnlfY29uZmlnX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiVGVsZW1ldHJ5IGNvbmZpZyBpcyBub3QgY29uZmlndXJlZCB3aXRoIHJlcXVpcmVkIHZhbHVlc1wiXG4gICAgfVxufTtcblxuLyoqXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciBpbiBjb25maWd1cmF0aW9uIG9mIHRoZSAuanMgbGlicmFyeS5cbiAqL1xuZXhwb3J0IGNsYXNzIENsaWVudENvbmZpZ3VyYXRpb25FcnJvciBleHRlbmRzIENsaWVudEF1dGhFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5wcm90b3R5cGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVOb1NldENvbmZpZ3VyYXRpb25FcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNvbmZpZ3VyYXRpb25Ob3RTZXQuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY29uZmlndXJhdGlvbk5vdFNldC5kZXNjfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVTdG9yYWdlTm90U3VwcG9ydGVkRXJyb3IoZ2l2ZW5DYWNoZUxvY2F0aW9uOiBzdHJpbmcpIDogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5zdG9yYWdlTm90U3VwcG9ydGVkLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnN0b3JhZ2VOb3RTdXBwb3J0ZWQuZGVzY30gR2l2ZW4gbG9jYXRpb246ICR7Z2l2ZW5DYWNoZUxvY2F0aW9ufWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVSZWRpcmVjdENhbGxiYWNrc05vdFNldEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9SZWRpcmVjdENhbGxiYWNrc1NldC5jb2RlLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vUmVkaXJlY3RDYWxsYmFja3NTZXQuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDYWxsYmFja09iamVjdEVycm9yKGNhbGxiYWNrT2JqZWN0OiBvYmplY3QpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDYWxsYmFja09iamVjdC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ2FsbGJhY2tPYmplY3QuZGVzY30gR2l2ZW4gdmFsdWUgZm9yIGNhbGxiYWNrIGZ1bmN0aW9uOiAke2NhbGxiYWNrT2JqZWN0fWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXMuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXMuZGVzY30gR2l2ZW4gdmFsdWU6ICR7c2NvcGVzVmFsdWV9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVTY29wZXNOb25BcnJheUVycm9yKHNjb3Blc1ZhbHVlOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vbkFycmF5U2NvcGVzLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vbkFycmF5U2NvcGVzLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SWRTaW5nbGVTY29wZUVycm9yKHNjb3Blc1ZhbHVlOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsaWVudFNjb3BlLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsaWVudFNjb3BlLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlU2NvcGVzUmVxdWlyZWRFcnJvcihzY29wZXNWYWx1ZTogYW55KTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5zY29wZXNSZXF1aXJlZC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5zY29wZXNSZXF1aXJlZC5kZXNjfSBHaXZlbiB2YWx1ZTogJHtzY29wZXNWYWx1ZX1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZFByb21wdEVycm9yKHByb21wdFZhbHVlOiBhbnkpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRQcm9tcHQuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZFByb21wdC5kZXNjfSBHaXZlbiB2YWx1ZTogJHtwcm9tcHRWYWx1ZX1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcihjbGFpbXNSZXF1ZXN0UGFyc2VFcnJvcjogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IuZGVzY30gR2l2ZW4gdmFsdWU6ICR7Y2xhaW1zUmVxdWVzdFBhcnNlRXJyb3J9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIGNvbnN0IHsgY29kZSwgZGVzYyB9ID0gQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5lbXB0eVJlcXVlc3RFcnJvcjtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoY29kZSwgZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDb3JyZWxhdGlvbklkRXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ29ycmVsYXRpb25JZEVycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDb3JyZWxhdGlvbklkRXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVRlbGVtZXRyeUNvbmZpZ0Vycm9yKGNvbmZpZzogVGVsZW1ldHJ5T3B0aW9ucyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIGNvbnN0IHsgY29kZSwgZGVzYyB9ID0gQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS50ZWxlbWV0cnlDb25maWdFcnJvcjtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRLZXlzID0ge1xuICAgICAgICAgICAgYXBwbGljYXRpb25OYW1lOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgYXBwbGljYXRpb25WZXJzaW9uOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgdGVsZW1ldHJ5RW1pdHRlcjogXCJmdW5jdGlvblwiXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWlzc2luZ0tleXMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZEtleXMpXG4gICAgICAgICAgICAucmVkdWNlKChrZXlzLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnW2tleV0gPyBrZXlzIDoga2V5cy5jb25jYXQoWyBgJHtrZXl9ICgke3JlcXVpcmVkS2V5c1trZXldfSlgIF0pO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKGNvZGUsIGAke2Rlc2N9IG1pc2luZyB2YWx1ZXM6ICR7bWlzc2luZ0tleXMuam9pbihcIixcIil9YCk7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IElVcmkgfSBmcm9tIFwiLi4vSVVyaVwiO1xuaW1wb3J0IHsgQ29uc3RhbnRzLCBTU09UeXBlcywgU2VydmVySGFzaFBhcmFtS2V5cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vU2VydmVyUmVxdWVzdFBhcmFtZXRlcnNcIjtcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL1Njb3BlU2V0XCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL0NyeXB0b1V0aWxzXCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi8uLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBVcmxVdGlscyB7XG5cbiAgICAvKipcbiAgICAgKiBnZW5lcmF0ZXMgdGhlIFVSTCB3aXRoIFF1ZXJ5U3RyaW5nIFBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZU5hdmlnYXRlVXJsKHNlcnZlclJlcXVlc3RQYXJhbXM6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5jcmVhdGVOYXZpZ2F0aW9uVXJsU3RyaW5nKHNlcnZlclJlcXVlc3RQYXJhbXMpO1xuICAgICAgICBsZXQgYXV0aEVuZHBvaW50OiBzdHJpbmcgPSBzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmF1dGhvcml0eUluc3RhbmNlLkF1dGhvcml6YXRpb25FbmRwb2ludDtcbiAgICAgICAgLy8gaWYgdGhlIGVuZHBvaW50IGFscmVhZHkgaGFzIHF1ZXJ5cGFyYW1zLCBsZXRzIGFkZCB0byBpdCwgb3RoZXJ3aXNlIGFkZCB0aGUgZmlyc3Qgb25lXG4gICAgICAgIGlmIChhdXRoRW5kcG9pbnQuaW5kZXhPZihcIj9cIikgPCAwKSB7XG4gICAgICAgICAgICBhdXRoRW5kcG9pbnQgKz0gXCI/XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdXRoRW5kcG9pbnQgKz0gXCImXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXF1ZXN0VXJsOiBzdHJpbmcgPSBgJHthdXRoRW5kcG9pbnR9JHtzdHIuam9pbihcIiZcIil9YDtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgdGhlIGFycmF5IG9mIGFsbCBRdWVyeVN0cmluZ1BhcmFtcyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZU5hdmlnYXRpb25VcmxTdHJpbmcoc2VydmVyUmVxdWVzdFBhcmFtczogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3Qgc2NvcGVzID0gc2VydmVyUmVxdWVzdFBhcmFtcy5zY29wZXM7XG5cbiAgICAgICAgaWYgKHNjb3Blcy5pbmRleE9mKHNlcnZlclJlcXVlc3RQYXJhbXMuY2xpZW50SWQpID09PSAtMSkge1xuICAgICAgICAgICAgc2NvcGVzLnB1c2goc2VydmVyUmVxdWVzdFBhcmFtcy5jbGllbnRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICAgIHN0ci5wdXNoKFwicmVzcG9uc2VfdHlwZT1cIiArIHNlcnZlclJlcXVlc3RQYXJhbXMucmVzcG9uc2VUeXBlKTtcblxuICAgICAgICB0aGlzLnRyYW5zbGF0ZWNsaWVudElkVXNlZEluU2NvcGUoc2NvcGVzLCBzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNsaWVudElkKTtcbiAgICAgICAgc3RyLnB1c2goXCJzY29wZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChTY29wZVNldC5wYXJzZVNjb3BlKHNjb3BlcykpKTtcbiAgICAgICAgc3RyLnB1c2goXCJjbGllbnRfaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5jbGllbnRJZCkpO1xuICAgICAgICBzdHIucHVzaChcInJlZGlyZWN0X3VyaT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnJlZGlyZWN0VXJpKSk7XG5cbiAgICAgICAgc3RyLnB1c2goXCJzdGF0ZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnN0YXRlKSk7XG4gICAgICAgIHN0ci5wdXNoKFwibm9uY2U9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5ub25jZSkpO1xuXG4gICAgICAgIHN0ci5wdXNoKFwiY2xpZW50X2luZm89MVwiKTtcbiAgICAgICAgc3RyLnB1c2goYHgtY2xpZW50LVNLVT0ke3NlcnZlclJlcXVlc3RQYXJhbXMueENsaWVudFNrdX1gKTtcbiAgICAgICAgc3RyLnB1c2goYHgtY2xpZW50LVZlcj0ke3NlcnZlclJlcXVlc3RQYXJhbXMueENsaWVudFZlcn1gKTtcbiAgICAgICAgaWYgKHNlcnZlclJlcXVlc3RQYXJhbXMucHJvbXB0VmFsdWUpIHtcbiAgICAgICAgICAgIHN0ci5wdXNoKFwicHJvbXB0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZlclJlcXVlc3RQYXJhbXMucHJvbXB0VmFsdWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNsYWltc1ZhbHVlKSB7XG4gICAgICAgICAgICBzdHIucHVzaChcImNsYWltcz1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNsYWltc1ZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VydmVyUmVxdWVzdFBhcmFtcy5xdWVyeVBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIHN0ci5wdXNoKHNlcnZlclJlcXVlc3RQYXJhbXMucXVlcnlQYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmV4dHJhUXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBzdHIucHVzaChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmV4dHJhUXVlcnlQYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0ci5wdXNoKFwiY2xpZW50LXJlcXVlc3QtaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5jb3JyZWxhdGlvbklkKSk7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYXBwZW5kIHRoZSByZXF1aXJlZCBzY29wZXM6IGh0dHBzOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1iYXNpYy0xXzAuaHRtbCNTY29wZXNcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgdHJhbnNsYXRlY2xpZW50SWRVc2VkSW5TY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4sIGNsaWVudElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2xpZW50SWRJbmRleDogbnVtYmVyID0gc2NvcGVzLmluZGV4T2YoY2xpZW50SWQpO1xuICAgICAgICBpZiAoY2xpZW50SWRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBzY29wZXMuc3BsaWNlKGNsaWVudElkSW5kZXgsIDEpO1xuICAgICAgICAgICAgaWYgKHNjb3Blcy5pbmRleE9mKFwib3BlbmlkXCIpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHNjb3Blcy5wdXNoKFwib3BlbmlkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjb3Blcy5pbmRleE9mKFwicHJvZmlsZVwiKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzY29wZXMucHVzaChcInByb2ZpbGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGN1cnJlbnQgd2luZG93IFVSTCBhcyByZWRpcmVjdCB1cmlcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0RGVmYXVsdFJlZGlyZWN0VXJpKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMF0uc3BsaXQoXCIjXCIpWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgdXJsIGxpa2UgaHR0cHM6Ly9hOmIvY29tbW9uL2Q/ZT1mI2csIGFuZCBhIHRlbmFudElkLCByZXR1cm5zIGh0dHBzOi8vYTpiL3RlbmFudElkL2RcbiAgICAgKiBAcGFyYW0gaHJlZiBUaGUgdXJsXG4gICAgICogQHBhcmFtIHRlbmFudElkIFRoZSB0ZW5hbnQgaWQgdG8gcmVwbGFjZVxuICAgICAqL1xuICAgIHN0YXRpYyByZXBsYWNlVGVuYW50UGF0aCh1cmw6IHN0cmluZywgdGVuYW50SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHVybCA9IHVybC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCB1cmxPYmplY3QgPSB0aGlzLkdldFVybENvbXBvbmVudHModXJsKTtcbiAgICAgICAgY29uc3QgcGF0aEFycmF5ID0gdXJsT2JqZWN0LlBhdGhTZWdtZW50cztcbiAgICAgICAgaWYgKHRlbmFudElkICYmIChwYXRoQXJyYXkubGVuZ3RoICE9PSAwICYmIChwYXRoQXJyYXlbMF0gPT09IENvbnN0YW50cy5jb21tb24gfHwgcGF0aEFycmF5WzBdID09PSBTU09UeXBlcy5PUkdBTklaQVRJT05TKSkpIHtcbiAgICAgICAgICAgIHBhdGhBcnJheVswXSA9IHRlbmFudElkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdEF1dGhvcml0eVVyaUZyb21PYmplY3QodXJsT2JqZWN0LCBwYXRoQXJyYXkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25zdHJ1Y3RBdXRob3JpdHlVcmlGcm9tT2JqZWN0KHVybE9iamVjdDogSVVyaSwgcGF0aEFycmF5OiBzdHJpbmdbXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5DYW5vbmljYWxpemVVcmkodXJsT2JqZWN0LlByb3RvY29sICsgXCIvL1wiICsgdXJsT2JqZWN0Lkhvc3ROYW1lQW5kUG9ydCArIFwiL1wiICsgcGF0aEFycmF5LmpvaW4oXCIvXCIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgb3V0IHRoZSBjb21wb25lbnRzIGZyb20gYSB1cmwgc3RyaW5nLlxuICAgICAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSB2YXJpb3VzIGNvbXBvbmVudHMuIFBsZWFzZSBjYWNoZSB0aGlzIHZhbHVlIGluc3RlZCBvZiBjYWxsaW5nIHRoaXMgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWUgdXJsLlxuICAgICAqL1xuICAgIHN0YXRpYyBHZXRVcmxDb21wb25lbnRzKHVybDogc3RyaW5nKTogSVVyaSB7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlVybCByZXF1aXJlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vY3VydGlzei8xMTEzOWIyY2ZjYWVmNGEyNjFlMFxuICAgICAgICBjb25zdCByZWdFeCA9IFJlZ0V4cChcIl4oKFteOi8/I10rKTopPygvLyhbXi8/I10qKSk/KFtePyNdKikoXFxcXD8oW14jXSopKT8oIyguKikpP1wiKTtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaChyZWdFeCk7XG5cbiAgICAgICAgaWYgKCFtYXRjaCB8fCBtYXRjaC5sZW5ndGggPCA2KSB7XG4gICAgICAgICAgICB0aHJvdyBcIlZhbGlkIHVybCByZXF1aXJlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsQ29tcG9uZW50cyA9IDxJVXJpPntcbiAgICAgICAgICAgIFByb3RvY29sOiBtYXRjaFsxXSxcbiAgICAgICAgICAgIEhvc3ROYW1lQW5kUG9ydDogbWF0Y2hbNF0sXG4gICAgICAgICAgICBBYnNvbHV0ZVBhdGg6IG1hdGNoWzVdXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHBhdGhTZWdtZW50cyA9IHVybENvbXBvbmVudHMuQWJzb2x1dGVQYXRoLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgcGF0aFNlZ21lbnRzID0gcGF0aFNlZ21lbnRzLmZpbHRlcigodmFsKSA9PiB2YWwgJiYgdmFsLmxlbmd0aCA+IDApOyAvLyByZW1vdmUgZW1wdHkgZWxlbWVudHNcbiAgICAgICAgdXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHMgPSBwYXRoU2VnbWVudHM7XG4gICAgICAgIHJldHVybiB1cmxDb21wb25lbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgdXJsIG9yIHBhdGgsIGFwcGVuZCBhIHRyYWlsaW5nIHNsYXNoIGlmIG9uZSBkb2VzbnQgZXhpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBzdGF0aWMgQ2Fub25pY2FsaXplVXJpKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgdXJsID0gdXJsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXJsICYmICFVcmxVdGlscy5lbmRzV2l0aCh1cmwsIFwiL1wiKSkge1xuICAgICAgICAgICAgdXJsICs9IFwiL1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSB1cmwgZW5kcyB3aXRoIHRoZSBzdWZmaXhcbiAgICAgKiBSZXF1aXJlZCBiZWNhdXNlIHdlIGFyZSBjb21waWxpbmcgZm9yIGVzNSBpbnN0ZWFkIG9mIGVzNlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gc3RyXG4gICAgICovXG4gICAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIG5vdCBjbGVhciB3aGF0IGl0IGlzIHN1cHBvc2VkIHRvIGRvXG4gICAgc3RhdGljIGVuZHNXaXRoKHVybDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXVybCB8fCAhc3VmZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsLmluZGV4T2Yoc3VmZml4LCB1cmwubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCkgIT09IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFV0aWxzIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgbG9naW5faGludCBhbmQgZG9tYWluX2hpbnQgZnJvbSB0aGUgaS9wIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgc3RhdGljIHVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eSh1cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcXFxcJlwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgICAgIC8vIG5hbWU9dmFsdWUmXG4gICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcIiArIG5hbWUgKyBcIj0pW15cXCZdKyZcIik7XG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcbiAgICAgICAgLy8gbmFtZT12YWx1ZVxuICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoXCIoXCIgKyBuYW1lICsgXCI9KVteXFwmXStcIik7XG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogUmV0dXJucyB0aGUgYW5jaG9yIHBhcnQoIykgb2YgdGhlIFVSTFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRIYXNoRnJvbVVybCh1cmxTdHJpbmdPckZyYWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBoYXNoSW5kZXgxID0gdXJsU3RyaW5nT3JGcmFnbWVudC5pbmRleE9mKFwiI1wiKTtcbiAgICAgICAgY29uc3QgaGFzaEluZGV4MiA9IHVybFN0cmluZ09yRnJhZ21lbnQuaW5kZXhPZihcIiMvXCIpO1xuICAgICAgICBpZiAoaGFzaEluZGV4MiA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsU3RyaW5nT3JGcmFnbWVudC5zdWJzdHJpbmcoaGFzaEluZGV4MiArIDIpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc2hJbmRleDEgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybFN0cmluZ09yRnJhZ21lbnQuc3Vic3RyaW5nKGhhc2hJbmRleDEgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsU3RyaW5nT3JGcmFnbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ2hlY2sgaWYgdGhlIHVybCBjb250YWlucyBhIGhhc2ggd2l0aCBrbm93biBwcm9wZXJ0aWVzXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHN0YXRpYyB1cmxDb250YWluc0hhc2godXJsU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IFVybFV0aWxzLmRlc2VyaWFsaXplSGFzaCh1cmxTdHJpbmcpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShTZXJ2ZXJIYXNoUGFyYW1LZXlzLkVSUk9SX0RFU0NSSVBUSU9OKSB8fFxuICAgICAgICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShTZXJ2ZXJIYXNoUGFyYW1LZXlzLkVSUk9SKSB8fFxuICAgICAgICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShTZXJ2ZXJIYXNoUGFyYW1LZXlzLkFDQ0VTU19UT0tFTikgfHxcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoU2VydmVySGFzaFBhcmFtS2V5cy5JRF9UT0tFTilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogUmV0dXJucyBkZXNlcmlhbGl6ZWQgcG9ydGlvbiBvZiBVUkwgaGFzaFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVIYXNoKHVybEZyYWdtZW50OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IFVybFV0aWxzLmdldEhhc2hGcm9tVXJsKHVybEZyYWdtZW50KTtcbiAgICAgICAgcmV0dXJuIENyeXB0b1V0aWxzLmRlc2VyaWFsaXplKGhhc2gpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gVVJJXG4gICAgICogQHJldHVybnMge3N0cmluZ30gaG9zdCBmcm9tIHRoZSBVUklcbiAgICAgKlxuICAgICAqIGV4dHJhY3QgVVJJIGZyb20gdGhlIGhvc3RcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SG9zdEZyb21VcmkodXJpOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICAvLyByZW1vdmUgaHR0cDovLyBvciBodHRwczovLyBmcm9tIHVyaVxuICAgICAgICBsZXQgZXh0cmFjdGVkVXJpID0gU3RyaW5nKHVyaSkucmVwbGFjZSgvXihodHRwcz86KVxcL1xcLy8sIFwiXCIpO1xuICAgICAgICBleHRyYWN0ZWRVcmkgPSBleHRyYWN0ZWRVcmkuc3BsaXQoXCIvXCIpWzBdO1xuICAgICAgICByZXR1cm4gZXh0cmFjdGVkVXJpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi9BdXRoRXJyb3JcIjtcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi4vSWRUb2tlblwiO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IENsaWVudEF1dGhFcnJvck1lc3NhZ2UgPSB7XG4gICAgbXVsdGlwbGVNYXRjaGluZ1Rva2Vuczoge1xuICAgICAgICBjb2RlOiBcIm11bHRpcGxlX21hdGNoaW5nX3Rva2Vuc1wiLFxuICAgICAgICBkZXNjOiBcIlRoZSBjYWNoZSBjb250YWlucyBtdWx0aXBsZSB0b2tlbnMgc2F0aXNmeWluZyB0aGUgcmVxdWlyZW1lbnRzLiBcIiArXG4gICAgICAgICAgICBcIkNhbGwgQWNxdWlyZVRva2VuIGFnYWluIHByb3ZpZGluZyBtb3JlIHJlcXVpcmVtZW50cyBsaWtlIGF1dGhvcml0eS5cIlxuICAgIH0sXG4gICAgbXVsdGlwbGVDYWNoZUF1dGhvcml0aWVzOiB7XG4gICAgICAgIGNvZGU6IFwibXVsdGlwbGVfYXV0aG9yaXRpZXNcIixcbiAgICAgICAgZGVzYzogXCJNdWx0aXBsZSBhdXRob3JpdGllcyBmb3VuZCBpbiB0aGUgY2FjaGUuIFBhc3MgYXV0aG9yaXR5IGluIHRoZSBBUEkgb3ZlcmxvYWQuXCJcbiAgICB9LFxuICAgIGVuZHBvaW50UmVzb2x1dGlvbkVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiZW5kcG9pbnRzX3Jlc29sdXRpb25fZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJFcnJvcjogY291bGQgbm90IHJlc29sdmUgZW5kcG9pbnRzLiBQbGVhc2UgY2hlY2sgbmV0d29yayBhbmQgdHJ5IGFnYWluLlwiXG4gICAgfSxcbiAgICBwb3BVcFdpbmRvd0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwicG9wdXBfd2luZG93X2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiRXJyb3Igb3BlbmluZyBwb3B1cCB3aW5kb3cuIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgYXJlIHVzaW5nIElFIG9yIGlmIHBvcHVwcyBhcmUgYmxvY2tlZCBpbiB0aGUgYnJvd3Nlci5cIlxuICAgIH0sXG4gICAgdG9rZW5SZW5ld2FsRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ0b2tlbl9yZW5ld2FsX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiVG9rZW4gcmVuZXdhbCBvcGVyYXRpb24gZmFpbGVkIGR1ZSB0byB0aW1lb3V0LlwiXG4gICAgfSxcbiAgICBpbnZhbGlkSWRUb2tlbjoge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfaWRfdG9rZW5cIixcbiAgICAgICAgZGVzYzogXCJJbnZhbGlkIElEIHRva2VuIGZvcm1hdC5cIlxuICAgIH0sXG4gICAgaW52YWxpZFN0YXRlRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX3N0YXRlX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiSW52YWxpZCBzdGF0ZS5cIlxuICAgIH0sXG4gICAgbm9uY2VNaXNtYXRjaEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwibm9uY2VfbWlzbWF0Y2hfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJOb25jZSBpcyBub3QgbWF0Y2hpbmcsIE5vbmNlIHJlY2VpdmVkOiBcIlxuICAgIH0sXG4gICAgbG9naW5Qcm9ncmVzc0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwibG9naW5fcHJvZ3Jlc3NfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJMb2dpbl9Jbl9Qcm9ncmVzczogRXJyb3IgZHVyaW5nIGxvZ2luIGNhbGwgLSBsb2dpbiBpcyBhbHJlYWR5IGluIHByb2dyZXNzLlwiXG4gICAgfSxcbiAgICBhY3F1aXJlVG9rZW5Qcm9ncmVzc0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiYWNxdWlyZXRva2VuX3Byb2dyZXNzX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiQWNxdWlyZVRva2VuX0luX1Byb2dyZXNzOiBFcnJvciBkdXJpbmcgbG9naW4gY2FsbCAtIGxvZ2luIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MuXCJcbiAgICB9LFxuICAgIHVzZXJDYW5jZWxsZWRFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInVzZXJfY2FuY2VsbGVkXCIsXG4gICAgICAgIGRlc2M6IFwiVXNlciBjYW5jZWxsZWQgdGhlIGZsb3cuXCJcbiAgICB9LFxuICAgIGNhbGxiYWNrRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJjYWxsYmFja19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkVycm9yIG9jY3VycmVkIGluIHRva2VuIHJlY2VpdmVkIGNhbGxiYWNrIGZ1bmN0aW9uLlwiXG4gICAgfSxcbiAgICB1c2VyTG9naW5SZXF1aXJlZEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidXNlcl9sb2dpbl9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWQuXCJcbiAgICB9LFxuICAgIHVzZXJEb2VzTm90RXhpc3RFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInVzZXJfbm9uX2V4aXN0ZW50XCIsXG4gICAgICAgIGRlc2M6IFwiVXNlciBvYmplY3QgZG9lcyBub3QgZXhpc3QuIFBsZWFzZSBjYWxsIGEgbG9naW4gQVBJLlwiXG4gICAgfSxcbiAgICBjbGllbnRJbmZvRGVjb2RpbmdFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImNsaWVudF9pbmZvX2RlY29kaW5nX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGNsaWVudCBpbmZvIGNvdWxkIG5vdCBiZSBwYXJzZWQvZGVjb2RlZCBjb3JyZWN0bHkuIFBsZWFzZSByZXZpZXcgdGhlIHRyYWNlIHRvIGRldGVybWluZSB0aGUgcm9vdCBjYXVzZS5cIlxuICAgIH0sXG4gICAgY2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiY2xpZW50X2luZm9fbm90X3BvcHVsYXRlZF9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBzZXJ2aWNlIGRpZCBub3QgcG9wdWxhdGUgY2xpZW50X2luZm8gaW4gdGhlIHJlc3BvbnNlLCBQbGVhc2UgdmVyaWZ5IHdpdGggdGhlIHNlcnZpY2UgdGVhbVwiXG4gICAgfSxcbiAgICBudWxsT3JFbXB0eUlkVG9rZW46IHtcbiAgICAgICAgY29kZTogXCJudWxsX29yX2VtcHR5X2lkX3Rva2VuXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGlkVG9rZW4gaXMgbnVsbCBvciBlbXB0eS4gUGxlYXNlIHJldmlldyB0aGUgdHJhY2UgdG8gZGV0ZXJtaW5lIHRoZSByb290IGNhdXNlLlwiXG4gICAgfSxcbiAgICBpZFRva2VuTm90UGFyc2VkOiB7XG4gICAgICAgIGNvZGU6IFwiaWRfdG9rZW5fcGFyc2luZ19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIklEIHRva2VuIGNhbm5vdCBiZSBwYXJzZWQuIFBsZWFzZSByZXZpZXcgc3RhY2sgdHJhY2UgdG8gZGV0ZXJtaW5lIHJvb3QgY2F1c2UuXCJcbiAgICB9LFxuICAgIHRva2VuRW5jb2RpbmdFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInRva2VuX2VuY29kaW5nX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIHRva2VuIHRvIGJlIGRlY29kZWQgaXMgbm90IGVuY29kZWQgY29ycmVjdGx5LlwiXG4gICAgfSxcbiAgICBpbnZhbGlkSW50ZXJhY3Rpb25UeXBlOiB7XG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9pbnRlcmFjdGlvbl90eXBlXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGludGVyYWN0aW9uIHR5cGUgcGFzc2VkIHRvIHRoZSBoYW5kbGVyIHdhcyBpbmNvcnJlY3Qgb3IgdW5rbm93blwiXG4gICAgfSxcbiAgICBjYWNoZVBhcnNlRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJjYW5ub3RfcGFyc2VfY2FjaGVcIixcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGVkIHRva2VuIGtleSBpcyBub3QgYSB2YWxpZCBKU09OIGFuZCBjYW5ub3QgYmUgcGFyc2VkXCJcbiAgICB9LFxuICAgIGJsb2NrVG9rZW5SZXF1ZXN0c0luSGlkZGVuSWZyYW1lOiB7XG4gICAgICAgIGNvZGU6IFwiYmxvY2tfdG9rZW5fcmVxdWVzdHNcIixcbiAgICAgICAgZGVzYzogXCJUb2tlbiBjYWxscyBhcmUgYmxvY2tlZCBpbiBoaWRkZW4gaWZyYW1lc1wiXG4gICAgfVxufTtcblxuLyoqXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgY2xpZW50IGNvZGUgcnVubmluZyBvbiB0aGUgYnJvd3Nlci5cbiAqL1xuZXhwb3J0IGNsYXNzIENsaWVudEF1dGhFcnJvciBleHRlbmRzIEF1dGhFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDbGllbnRBdXRoRXJyb3JcIjtcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQ2xpZW50QXV0aEVycm9yLnByb3RvdHlwZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyckRldGFpbD86IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmRlc2M7XG4gICAgICAgIGlmIChlcnJEZXRhaWwgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkoZXJyRGV0YWlsKSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGAgRGV0YWlsczogJHtlcnJEZXRhaWx9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdUb2tlbnNJbkNhY2hlRXJyb3Ioc2NvcGU6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ1Rva2Vucy5jb2RlLFxuICAgICAgICAgICAgYENhY2hlIGVycm9yIGZvciBzY29wZSAke3Njb3BlfTogJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdUb2tlbnMuZGVzY30uYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZU11bHRpcGxlQXV0aG9yaXRpZXNJbkNhY2hlRXJyb3Ioc2NvcGU6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVDYWNoZUF1dGhvcml0aWVzLmNvZGUsXG4gICAgICAgICAgICBgQ2FjaGUgZXJyb3IgZm9yIHNjb3BlICR7c2NvcGV9OiAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVDYWNoZUF1dGhvcml0aWVzLmRlc2N9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVQb3B1cFdpbmRvd0Vycm9yKGVyckRldGFpbD86IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuZGVzYztcbiAgICAgICAgaWYgKGVyckRldGFpbCAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShlcnJEZXRhaWwpKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYCBEZXRhaWxzOiAke2VyckRldGFpbH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5jb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVUb2tlblJlbmV3YWxUaW1lb3V0RXJyb3IodXJsTmF2aWdhdGU6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGBVUkwgbmF2aWdhdGVkIHRvIGlzICR7dXJsTmF2aWdhdGV9LCAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5SZW5ld2FsRXJyb3IuZGVzY31gO1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuUmVuZXdhbEVycm9yLmNvZGUsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkSWRUb2tlbkVycm9yKGlkVG9rZW46IElkVG9rZW4pIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSWRUb2tlbi5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSWRUb2tlbi5kZXNjfSBHaXZlbiB0b2tlbjogJHtpZFRva2VufWApO1xuICAgIH1cblxuICAgIC8vIFRPRE86IElzIHRoaXMgbm90IGEgc2VjdXJpdHkgZmxhdyB0byBzZW5kIHRoZSB1c2VyIHRoZSBzdGF0ZSBleHBlY3RlZD8/XG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRTdGF0ZUVycm9yKGludmFsaWRTdGF0ZTogc3RyaW5nLCBhY3R1YWxTdGF0ZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkU3RhdGVFcnJvci5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkU3RhdGVFcnJvci5kZXNjfSAke2ludmFsaWRTdGF0ZX0sIHN0YXRlIGV4cGVjdGVkIDogJHthY3R1YWxTdGF0ZX0uYCk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogSXMgdGhpcyBub3QgYSBzZWN1cml0eSBmbGF3IHRvIHNlbmQgdGhlIHVzZXIgdGhlIE5vbmNlIGV4cGVjdGVkPz9cbiAgICBzdGF0aWMgY3JlYXRlTm9uY2VNaXNtYXRjaEVycm9yKGludmFsaWROb25jZTogc3RyaW5nLCBhY3R1YWxOb25jZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5ub25jZU1pc21hdGNoRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9uY2VNaXNtYXRjaEVycm9yLmRlc2N9ICR7aW52YWxpZE5vbmNlfSwgbm9uY2UgZXhwZWN0ZWQgOiAke2FjdHVhbE5vbmNlfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTG9naW5JblByb2dyZXNzRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5sb2dpblByb2dyZXNzRXJyb3IuY29kZSxcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UubG9naW5Qcm9ncmVzc0Vycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVBY3F1aXJlVG9rZW5JblByb2dyZXNzRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5hY3F1aXJlVG9rZW5Qcm9ncmVzc0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmFjcXVpcmVUb2tlblByb2dyZXNzRXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVzZXJDYW5jZWxsZWRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJDYW5jZWxsZWRFcnJvci5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyQ2FuY2VsbGVkRXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUVycm9ySW5DYWxsYmFja0Z1bmN0aW9uKGVycm9yRGVzYzogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5jYWxsYmFja0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNhbGxiYWNrRXJyb3IuZGVzY30gJHtlcnJvckRlc2N9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVVc2VyTG9naW5SZXF1aXJlZEVycm9yKCkgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJMb2dpblJlcXVpcmVkRXJyb3IuY29kZSxcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckxvZ2luUmVxdWlyZWRFcnJvci5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVXNlckRvZXNOb3RFeGlzdEVycm9yKCkgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJEb2VzTm90RXhpc3RFcnJvci5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyRG9lc05vdEV4aXN0RXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNsaWVudEluZm9EZWNvZGluZ0Vycm9yKGNhdWdodEVycm9yOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvRGVjb2RpbmdFcnJvci5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvRGVjb2RpbmdFcnJvci5kZXNjfSBGYWlsZWQgd2l0aCBlcnJvcjogJHtjYXVnaHRFcnJvcn1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yKGNhdWdodEVycm9yOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yLmRlc2N9IEZhaWxlZCB3aXRoIGVycm9yOiAke2NhdWdodEVycm9yfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJZFRva2VuTnVsbE9yRW1wdHlFcnJvcihpbnZhbGlkUmF3VG9rZW5TdHJpbmc6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm51bGxPckVtcHR5SWRUb2tlbi5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5udWxsT3JFbXB0eUlkVG9rZW4uZGVzY30gUmF3IElEIFRva2VuIFZhbHVlOiAke2ludmFsaWRSYXdUb2tlblN0cmluZ31gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSWRUb2tlblBhcnNpbmdFcnJvcihjYXVnaHRQYXJzaW5nRXJyb3I6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmlkVG9rZW5Ob3RQYXJzZWQuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaWRUb2tlbk5vdFBhcnNlZC5kZXNjfSBGYWlsZWQgd2l0aCBlcnJvcjogJHtjYXVnaHRQYXJzaW5nRXJyb3J9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVRva2VuRW5jb2RpbmdFcnJvcihpbmNvcnJlY3RseUVuY29kZWRUb2tlbjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5FbmNvZGluZ0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuRW5jb2RpbmdFcnJvci5kZXNjfSBBdHRlbXB0ZWQgdG8gZGVjb2RlOiAke2luY29ycmVjdGx5RW5jb2RlZFRva2VufWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkSW50ZXJhY3Rpb25UeXBlRXJyb3IoKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZEludGVyYWN0aW9uVHlwZS5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSW50ZXJhY3Rpb25UeXBlLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDYWNoZVBhcnNlRXJyb3Ioa2V5OiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYGludmFsaWQga2V5OiAke2tleX0sICR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jYWNoZVBhcnNlRXJyb3IuZGVzY31gO1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNhY2hlUGFyc2VFcnJvci5jb2RlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQmxvY2tUb2tlblJlcXVlc3RzSW5IaWRkZW5JZnJhbWVFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmJsb2NrVG9rZW5SZXF1ZXN0c0luSGlkZGVuSWZyYW1lLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmJsb2NrVG9rZW5SZXF1ZXN0c0luSGlkZGVuSWZyYW1lLmRlc2MpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgY29uc3QgQXV0aEVycm9yTWVzc2FnZSA9IHtcbiAgICB1bmV4cGVjdGVkRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ1bmV4cGVjdGVkX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiVW5leHBlY3RlZCBlcnJvciBpbiBhdXRoZW50aWNhdGlvbi5cIlxuICAgIH0sXG4gICAgbm9XaW5kb3dPYmplY3RFcnJvcjoge1xuICAgICAgICBjb2RlOiBcIm5vX3dpbmRvd19vYmplY3RcIixcbiAgICAgICAgZGVzYzogXCJObyB3aW5kb3cgb2JqZWN0IGF2YWlsYWJsZS4gRGV0YWlsczpcIlxuICAgIH1cbn07XG5cbi8qKlxuICogR2VuZXJhbCBlcnJvciBjbGFzcyB0aHJvd24gYnkgdGhlIE1TQUwuanMgbGlicmFyeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF1dGhFcnJvciBleHRlbmRzIEVycm9yIHtcblxuICAgIGVycm9yQ29kZTogc3RyaW5nO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xuICAgICAgICBzdXBlcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQXV0aEVycm9yLnByb3RvdHlwZSk7XG5cbiAgICAgICAgdGhpcy5lcnJvckNvZGUgPSBlcnJvckNvZGU7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkF1dGhFcnJvclwiO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVVbmV4cGVjdGVkRXJyb3IoZXJyRGVzYzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXV0aEVycm9yKEF1dGhFcnJvck1lc3NhZ2UudW5leHBlY3RlZEVycm9yLmNvZGUsIGAke0F1dGhFcnJvck1lc3NhZ2UudW5leHBlY3RlZEVycm9yLmRlc2N9OiAke2VyckRlc2N9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZU5vV2luZG93T2JqZWN0RXJyb3IoZXJyRGVzYzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXV0aEVycm9yKEF1dGhFcnJvck1lc3NhZ2Uubm9XaW5kb3dPYmplY3RFcnJvci5jb2RlLCBgJHtBdXRoRXJyb3JNZXNzYWdlLm5vV2luZG93T2JqZWN0RXJyb3IuZGVzY30gJHtlcnJEZXNjfWApO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBFVkVOVF9OQU1FX1BSRUZJWCA9IFwibXNhbC5cIjtcbmV4cG9ydCBjb25zdCBFVkVOVF9OQU1FX0tFWSA9IFwiZXZlbnRfbmFtZVwiO1xuZXhwb3J0IGNvbnN0IFNUQVJUX1RJTUVfS0VZID0gXCJzdGFydF90aW1lXCI7XG5leHBvcnQgY29uc3QgRUxBUFNFRF9USU1FX0tFWSAgPSBcImVsYXBzZWRfdGltZVwiO1xuXG5leHBvcnQgY29uc3QgVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMgPSAge1xuICAgIE1zYWxDb3JyZWxhdGlvbklkQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0Lk1TQUwuY29ycmVsYXRpb25faWRcIixcbiAgICBBcGlUZWxlbUlkQ29uc3RTdHJLZXk6IFwibXNhbC5hcGlfdGVsZW1faWRcIixcbiAgICBBcGlJZENvbnN0U3RyS2V5OiBcIm1zYWwuYXBpX2lkXCIsXG4gICAgQnJva2VyQXBwQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfYnJva2VyX2FwcFwiLFxuICAgIENhY2hlRXZlbnRDb3VudENvbnN0U3RyS2V5OiBcIk1pY3Jvc29mdF9NU0FMX2NhY2hlX2V2ZW50X2NvdW50XCIsXG4gICAgSHR0cEV2ZW50Q291bnRUZWxlbWV0cnlCYXRjaEtleTogXCJNaWNyb3NvZnRfTVNBTF9odHRwX2V2ZW50X2NvdW50XCIsXG4gICAgSWRwQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfaWRwXCIsXG4gICAgSXNTaWxlbnRUZWxlbWV0cnlCYXRjaEtleTogXCJcIixcbiAgICBJc1N1Y2Nlc3NmdWxDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9pc19zdWNjZXNzZnVsXCIsXG4gICAgUmVzcG9uc2VUaW1lQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfcmVzcG9uc2VfdGltZVwiLFxuICAgIFRlbmFudElkQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfdGVuYW50X2lkXCIsXG4gICAgVWlFdmVudENvdW50VGVsZW1ldHJ5QmF0Y2hLZXk6IFwiTWljcm9zb2Z0X01TQUxfdWlfZXZlbnRfY291bnRcIlxufTtcblxuLy8gVGhpcyBpcyB1c2VkIHRvIHJlcGxhY2UgdGhlIHJlYWwgdGVuYW50IGluIHRlbGVtZXRyeSBpbmZvXG5leHBvcnQgY29uc3QgVEVOQU5UX1BMQUNFSE9MREVSID0gXCI8dGVuYW50PlwiO1xuXG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuLi9JVXJpXCI7XG5pbXBvcnQgeyBJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2UgfSBmcm9tIFwiLi9JVGVuYW50RGlzY292ZXJ5UmVzcG9uc2VcIjtcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XG5pbXBvcnQgeyBYaHJDbGllbnQgfSBmcm9tIFwiLi4vWEhSQ2xpZW50XCI7XG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gXCIuLi91dGlscy9VcmxVdGlsc1wiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGVudW0gQXV0aG9yaXR5VHlwZSB7XG4gICAgQWFkLFxuICAgIEFkZnMsXG4gICAgQjJDXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXV0aG9yaXR5IHtcbiAgICBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5Jc1ZhbGlkYXRpb25FbmFibGVkID0gdmFsaWRhdGVBdXRob3JpdHk7XG4gICAgICAgIHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5ID0gYXV0aG9yaXR5O1xuXG4gICAgICAgIHRoaXMudmFsaWRhdGVBc1VyaSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgQXV0aG9yaXR5VHlwZSgpOiBBdXRob3JpdHlUeXBlO1xuXG4gICAgcHVibGljIElzVmFsaWRhdGlvbkVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IFRlbmFudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLlBhdGhTZWdtZW50c1swXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRlbmFudERpc2NvdmVyeVJlc3BvbnNlOiBJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2U7XG5cbiAgICBwdWJsaWMgZ2V0IEF1dGhvcml6YXRpb25FbmRwb2ludCgpOiBzdHJpbmcge1xuICAgICAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuQXV0aG9yaXphdGlvbkVuZHBvaW50LnJlcGxhY2UoXCJ7dGVuYW50fVwiLCB0aGlzLlRlbmFudCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBFbmRTZXNzaW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLkVuZFNlc3Npb25FbmRwb2ludC5yZXBsYWNlKFwie3RlbmFudH1cIiwgdGhpcy5UZW5hbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgU2VsZlNpZ25lZEp3dEF1ZGllbmNlKCk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5Jc3N1ZXIucmVwbGFjZShcInt0ZW5hbnR9XCIsIHRoaXMuVGVuYW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlUmVzb2x2ZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgXCJQbGVhc2UgY2FsbCBSZXNvbHZlRW5kcG9pbnRzQXN5bmMgZmlyc3RcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgVVJMIHRoYXQgaXMgdGhlIGF1dGhvcml0eSBzZXQgYnkgdGhlIGRldmVsb3BlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgQ2Fub25pY2FsQXV0aG9yaXR5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IENhbm9uaWNhbEF1dGhvcml0eSh1cmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eSA9IFVybFV0aWxzLkNhbm9uaWNhbGl6ZVVyaSh1cmwpO1xuICAgICAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2Fub25pY2FsQXV0aG9yaXR5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzOiBJVXJpO1xuXG4gICAgcHVibGljIGdldCBDYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKCk6IElVcmkge1xuICAgICAgICBpZiAoIXRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cykge1xuICAgICAgICAgICAgdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzID0gVXJsVXRpbHMuR2V0VXJsQ29tcG9uZW50cyh0aGlzLkNhbm9uaWNhbEF1dGhvcml0eSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIC8vIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWRpc2NvdmVyeS0xXzAuaHRtbCNQcm92aWRlck1ldGFkYXRhXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBEZWZhdWx0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLkNhbm9uaWNhbEF1dGhvcml0eX12Mi4wLy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uYDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHN0cmluZywgdmFsaWRhdGUgdGhhdCBpdCBpcyBvZiB0aGUgZm9ybSBodHRwczovL2RvbWFpbi9wYXRoXG4gICAgICovXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUFzVXJpKCkge1xuICAgICAgICBsZXQgY29tcG9uZW50cztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMgPSB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZEF1dGhvcml0eVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbXBvbmVudHMuUHJvdG9jb2wgfHwgY29tcG9uZW50cy5Qcm90b2NvbC50b0xvd2VyQ2FzZSgpICE9PSBcImh0dHBzOlwiKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmF1dGhvcml0eVVyaUluc2VjdXJlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb21wb25lbnRzLlBhdGhTZWdtZW50cyB8fCBjb21wb25lbnRzLlBhdGhTZWdtZW50cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmF1dGhvcml0eVVyaUludmFsaWRQYXRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgdGhlIE9JREMgZW5kcG9pbnQgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBEaXNjb3ZlckVuZHBvaW50cyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQ6IHN0cmluZyk6IFByb21pc2U8SVRlbmFudERpc2NvdmVyeVJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBYaHJDbGllbnQoKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5zZW5kUmVxdWVzdEFzeW5jKG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCwgXCJHRVRcIiwgLyogZW5hYmxlQ2FjaGluZzogKi8gdHJ1ZSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2U+e1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uRW5kcG9pbnQ6IHJlc3BvbnNlLmF1dGhvcml6YXRpb25fZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICAgIEVuZFNlc3Npb25FbmRwb2ludDogcmVzcG9uc2UuZW5kX3Nlc3Npb25fZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICAgIElzc3VlcjogcmVzcG9uc2UuaXNzdWVyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlLlxuICAgICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBpbiB0aGUgY2FjaGVcbiAgICAgKiBEaXNjb3ZlciBlbmRwb2ludHMgdmlhIG9wZW5pZC1jb25maWd1cmF0aW9uXG4gICAgICogSWYgc3VjY2Vzc2Z1bCwgY2FjaGVzIHRoZSBlbmRwb2ludCBmb3IgbGF0ZXIgdXNlIGluIE9JRENcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgcmVzb2x2ZUVuZHBvaW50c0FzeW5jKCk6IFByb21pc2U8QXV0aG9yaXR5PiB7XG4gICAgICAgIGNvbnN0IG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludFJlc3BvbnNlID0gYXdhaXQgdGhpcy5HZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpO1xuICAgICAgICB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlID0gYXdhaXQgdGhpcy5EaXNjb3ZlckVuZHBvaW50cyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgVGVuYW50RGlzY292ZXJ5RW5kcG9pbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgR2V0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50QXN5bmMoKTogUHJvbWlzZTxzdHJpbmc+O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzIH0gZnJvbSBcIi4vQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzXCI7XG5cbmV4cG9ydCBjbGFzcyBTY29wZVNldCB7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGVyZSBhcmUgZHVwIHNjb3BlcyBpbiBhIGdpdmVuIHJlcXVlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWNoZWRTY29wZXNcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICovXG4gICAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIGludGVyc2VjdGluZyBzY29wZXMgaXNuJ3QgYSBncmVhdCBuYW1lIGZvciBkdXBsaWNhdGUgY2hlY2tlclxuICAgIHN0YXRpYyBpc0ludGVyc2VjdGluZ1Njb3BlcyhjYWNoZWRTY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3BlczogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgICAgICBjYWNoZWRTY29wZXMgPSB0aGlzLmNvbnZlcnRUb0xvd2VyQ2FzZShjYWNoZWRTY29wZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjb3Blcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFNjb3Blcy5pbmRleE9mKHNjb3Blc1tpXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgZ2l2ZW4gc2NvcGUgaXMgcHJlc2VudCBpbiB0aGUgcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhY2hlZFNjb3Blc1xuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY29udGFpbnNTY29wZShjYWNoZWRTY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3BlczogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgICAgICBjYWNoZWRTY29wZXMgPSB0aGlzLmNvbnZlcnRUb0xvd2VyQ2FzZShjYWNoZWRTY29wZXMpO1xuICAgICAgICByZXR1cm4gc2NvcGVzLmV2ZXJ5KCh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiBjYWNoZWRTY29wZXMuaW5kZXhPZih2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpID49IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvTG93ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKi9cbiAgICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgdG9vIGdlbmVyaWMgbmFtZSBmb3IgYSBmdW5jdGlvbiB0aGF0IG9ubHkgZGVhbHMgd2l0aCBzY29wZXNcbiAgICBzdGF0aWMgY29udmVydFRvTG93ZXJDYXNlKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gc2NvcGVzLm1hcChzY29wZSA9PiBzY29wZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZW1vdmUgb25lIGVsZW1lbnQgZnJvbSBhIHNjb3BlIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICogQHBhcmFtIHNjb3BlXG4gICAgICovXG4gICAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIHRvbyBnZW5lcmljIG5hbWUgZm9yIGEgZnVuY3Rpb24gdGhhdCBvbmx5IGRlYWxzIHdpdGggc2NvcGVzXG4gICAgc3RhdGljIHJlbW92ZUVsZW1lbnQoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBzY29wZXMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBzY29wZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgdGhlIHNjb3BlcyBpbnRvIGEgZm9ybWF0dGVkIHNjb3BlTGlzdFxuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VTY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcge1xuICAgICAgICBsZXQgc2NvcGVMaXN0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBpZiAoc2NvcGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgc2NvcGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVMaXN0ICs9IChpICE9PSBzY29wZXMubGVuZ3RoIC0gMSkgPyBzY29wZXNbaV0gKyBcIiBcIiA6IHNjb3Blc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzY29wZUxpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICogVXNlZCB0byB2YWxpZGF0ZSB0aGUgc2NvcGVzIGlucHV0IHBhcmFtZXRlciByZXF1ZXN0ZWQgIGJ5IHRoZSBkZXZlbG9wZXIuXG4gICAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzY29wZXMgLSBEZXZlbG9wZXIgcmVxdWVzdGVkIHBlcm1pc3Npb25zLiBOb3QgYWxsIHNjb3BlcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuIHJldHVybmVkLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2NvcGVzUmVxdWlyZWQgLSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2NvcGVzIGFycmF5IGlzIHJlcXVpcmVkIG9yIG5vdFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgdmFsaWRhdGVJbnB1dFNjb3BlKHNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGVzUmVxdWlyZWQ6IGJvb2xlYW4sIGNsaWVudElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFzY29wZXMpIHtcbiAgICAgICAgICAgIGlmIChzY29wZXNSZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVTY29wZXNSZXF1aXJlZEVycm9yKHNjb3Blcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIHRoYXQgc2NvcGVzIGlzIGFuIGFycmF5IG9iamVjdCAoYWxzbyB0aHJvd3MgZXJyb3IgaWYgc2NvcGVzID09IG51bGwpXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzY29wZXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlU2NvcGVzTm9uQXJyYXlFcnJvcihzY29wZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBzY29wZXMgaXMgbm90IGFuIGVtcHR5IGFycmF5XG4gICAgICAgIGlmIChzY29wZXMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5U2NvcGVzQXJyYXlFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayB0aGF0IGNsaWVudElkIGlzIHBhc3NlZCBhcyBzaW5nbGUgc2NvcGVcbiAgICAgICAgaWYgKHNjb3Blcy5pbmRleE9mKGNsaWVudElkKSA+IC0xKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlQ2xpZW50SWRTaW5nbGVTY29wZUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKlxuICAgICAqIEV4dHJhY3RzIHNjb3BlIHZhbHVlIGZyb20gdGhlIHN0YXRlIHNlbnQgd2l0aCB0aGUgYXV0aGVudGljYXRpb24gcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzY29wZS5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIGdldFNjb3BlRnJvbVN0YXRlKHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0SW5kZXggPSBzdGF0ZS5pbmRleE9mKFwifFwiKTtcbiAgICAgICAgICAgIGlmIChzcGxpdEluZGV4ID4gLTEgJiYgc3BsaXRJbmRleCArIDEgPCBzdGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuc3Vic3RyaW5nKHNwbGl0SW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogQXBwZW5kcyBleHRyYVNjb3Blc1RvQ29uc2VudCBpZiBwYXNzZWRcbiAgICAgKiBAcGFyYW0ge0BsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31cbiAgICAgKi9cbiAgICBzdGF0aWMgYXBwZW5kU2NvcGVzKHJlcVNjb3BlczogQXJyYXk8c3RyaW5nPiwgcmVxRXh0cmFTY29wZXNUb0NvbnNlbnQ6IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgaWYocmVxU2NvcGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxRXh0cmFTY29wZXNUb0NvbnNlbnQgPyBbLi4ucmVxU2NvcGVzLCAuLi5yZXFFeHRyYVNjb3Blc1RvQ29uc2VudF06IHJlcVNjb3BlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5pbXBvcnQgeyBsaWJyYXJ5VmVyc2lvbiB9IGZyb20gXCIuL3V0aWxzL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXJDYWxsYmFjayB7XG4gICAgKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nLCBjb250YWluc1BpaTogYm9vbGVhbik6IHZvaWQ7XG59XG5cbmV4cG9ydCBlbnVtIExvZ0xldmVsIHtcbiAgICBFcnJvcixcbiAgICBXYXJuaW5nLFxuICAgIEluZm8sXG4gICAgVmVyYm9zZVxufVxuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHsvLyBTaW5nbGV0b24gQ2xhc3NcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICAvLyBUT0RPOiBUaGlzIGRvZXMgbm90IHNlZW0gdG8gYmUgYSBzaW5nbGV0b24hISBDaGFuZ2Ugb3IgRGVsZXRlLlxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBMb2dnZXI7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjb3JyZWxhdGlvbklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBsZXZlbDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JbmZvO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgcGlpTG9nZ2luZ0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBsb2NhbENhbGxiYWNrOiBJTG9nZ2VyQ2FsbGJhY2s7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2NhbENhbGxiYWNrOiBJTG9nZ2VyQ2FsbGJhY2ssXG4gICAgICAgIG9wdGlvbnM6XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcsXG4gICAgICAgICAgICBsZXZlbD86IExvZ0xldmVsLFxuICAgICAgICAgICAgcGlpTG9nZ2luZ0VuYWJsZWQ/OiBib29sZWFuLFxuICAgICAgICB9ID0ge30pIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY29ycmVsYXRpb25JZCA9IFwiXCIsXG4gICAgICAgICAgICBsZXZlbCA9IExvZ0xldmVsLkluZm8sXG4gICAgICAgICAgICBwaWlMb2dnaW5nRW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIHRoaXMubG9jYWxDYWxsYmFjayA9IGxvY2FsQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuY29ycmVsYXRpb25JZCA9IGNvcnJlbGF0aW9uSWQ7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5waWlMb2dnaW5nRW5hYmxlZCA9IHBpaUxvZ2dpbmdFbmFibGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGxvZ01lc3NhZ2UobG9nTGV2ZWw6IExvZ0xldmVsLCBsb2dNZXNzYWdlOiBzdHJpbmcsIGNvbnRhaW5zUGlpOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICgobG9nTGV2ZWwgPiB0aGlzLmxldmVsKSB8fCAoIXRoaXMucGlpTG9nZ2luZ0VuYWJsZWQgJiYgY29udGFpbnNQaWkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpO1xuICAgICAgICBsZXQgbG9nOiBzdHJpbmc7XG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmNvcnJlbGF0aW9uSWQpKSB7XG4gICAgICAgICAgICBsb2cgPSB0aW1lc3RhbXAgKyBcIjpcIiArIHRoaXMuY29ycmVsYXRpb25JZCArIFwiLVwiICsgbGlicmFyeVZlcnNpb24oKSArIFwiLVwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCIgXCIgKyBsb2dNZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbG9nID0gdGltZXN0YW1wICsgXCI6XCIgKyBsaWJyYXJ5VmVyc2lvbigpICsgXCItXCIgKyBMb2dMZXZlbFtsb2dMZXZlbF0gKyBcIiBcIiArIGxvZ01lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5leGVjdXRlQ2FsbGJhY2sobG9nTGV2ZWwsIGxvZywgY29udGFpbnNQaWkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBleGVjdXRlQ2FsbGJhY2sobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNvbnRhaW5zUGlpOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxDYWxsYmFjayhsZXZlbCwgbWVzc2FnZSwgY29udGFpbnNQaWkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZXJyb3JQaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5XYXJuaW5nLCBtZXNzYWdlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHdhcm5pbmdQaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5XYXJuaW5nLCBtZXNzYWdlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgaW5mbyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLkluZm8sIG1lc3NhZ2UsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgaW5mb1BpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLkluZm8sIG1lc3NhZ2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB2ZXJib3NlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuVmVyYm9zZSwgbWVzc2FnZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB2ZXJib3NlUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuVmVyYm9zZSwgbWVzc2FnZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaXNQaWlMb2dnaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGlpTG9nZ2luZ0VuYWJsZWQ7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL0F1dGhFcnJvclwiO1xuXG5leHBvcnQgY29uc3QgU2VydmVyRXJyb3JNZXNzYWdlID0ge1xuICAgIHNlcnZlclVuYXZhaWxhYmxlOiB7XG4gICAgICAgIGNvZGU6IFwic2VydmVyX3VuYXZhaWxhYmxlXCIsXG4gICAgICAgIGRlc2M6IFwiU2VydmVyIGlzIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlLlwiXG4gICAgfSxcbiAgICB1bmtub3duU2VydmVyRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ1bmtub3duX3NlcnZlcl9lcnJvclwiXG4gICAgfSxcbn07XG5cbi8qKlxuICogRXJyb3IgdGhyb3duIHdoZW4gdGhlcmUgaXMgYW4gZXJyb3Igd2l0aCB0aGUgc2VydmVyIGNvZGUsIGZvciBleGFtcGxlLCB1bmF2YWlsYWJpbGl0eS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9yIGV4dGVuZHMgQXV0aEVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlNlcnZlckVycm9yXCI7XG5cbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFNlcnZlckVycm9yLnByb3RvdHlwZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVNlcnZlclVuYXZhaWxhYmxlRXJyb3IoKTogU2VydmVyRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFNlcnZlckVycm9yKFNlcnZlckVycm9yTWVzc2FnZS5zZXJ2ZXJVbmF2YWlsYWJsZS5jb2RlLFxuICAgICAgICAgICAgU2VydmVyRXJyb3JNZXNzYWdlLnNlcnZlclVuYXZhaWxhYmxlLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVVbmtub3duU2VydmVyRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBTZXJ2ZXJFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgU2VydmVyRXJyb3IoU2VydmVyRXJyb3JNZXNzYWdlLnVua25vd25TZXJ2ZXJFcnJvci5jb2RlLFxuICAgICAgICAgICAgZXJyb3JEZXNjKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCMmNBdXRob3JpdHkgfSBmcm9tIFwiLi4vYXV0aG9yaXR5L0IyY0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgQUFEVHJ1c3RlZEhvc3RMaXN0IH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVOQU5UX1BMQUNFSE9MREVSLCBFVkVOVF9OQU1FX1BSRUZJWCB9IGZyb20gXCIuL1RlbGVtZXRyeUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1VybFV0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBzY3J1YlRlbmFudEZyb21VcmkgPSAodXJpOiBzdHJpbmcpOiBTdHJpbmcgPT4ge1xuXG4gICAgY29uc3QgdXJsID0gVXJsVXRpbHMuR2V0VXJsQ29tcG9uZW50cyh1cmkpO1xuXG4gICAgLy8gdmFsaWRhdGUgdHJ1c3RlZCBob3N0XG4gICAgaWYgKCFBQURUcnVzdGVkSG9zdExpc3RbdXJsLkhvc3ROYW1lQW5kUG9ydC50b0xvY2FsZUxvd2VyQ2FzZSgpXSkge1xuICAgICAgICAvLyBTaG91bGQgdGhpcyByZXR1cm4gbnVsbCBvciB3aGF0IHdhcyBwYXNzZWQ/XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdGhQYXJhbXMgPSB1cmwuUGF0aFNlZ21lbnRzO1xuXG4gICAgaWYgKHBhdGhQYXJhbXMgJiYgcGF0aFBhcmFtcy5sZW5ndGggPj0gMikge1xuICAgICAgICBjb25zdCB0ZW5hbnRQb3NpdGlvbiA9IHBhdGhQYXJhbXNbMV0gPT09ICBCMmNBdXRob3JpdHkuQjJDX1BSRUZJWCA/IDIgOiAxO1xuICAgICAgICBpZiAodGVuYW50UG9zaXRpb24gPCBwYXRoUGFyYW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcGF0aFBhcmFtc1t0ZW5hbnRQb3NpdGlvbl0gPSBURU5BTlRfUExBQ0VIT0xERVI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gIGAke3VybC5Qcm90b2NvbH0vLyR7dXJsLkhvc3ROYW1lQW5kUG9ydH0vJHtwYXRoUGFyYW1zLmpvaW4oXCIvXCIpfWA7XG59O1xuXG5leHBvcnQgY29uc3QgaGFzaFBlcnNvbmFsSWRlbnRpZmllciA9ICh2YWx1ZVRvSGFzaDogc3RyaW5nKSA9PiB7XG4gICAgLypcbiAgICAgKiBUT0RPIHNoYTI1NiB0aGlzXG4gICAgICogQ3VycmVudCB0ZXN0IHJ1bm5lciBpcyBiZWluZyBmdW5ueSB3aXRoIG5vZGUgbGlicyB0aGF0IGFyZSB3ZWJwYWNrZWQgYW55d2F5XG4gICAgICogbmVlZCBhIGRpZmZlcmVudCBzb2x1dGlvblxuICAgICAqL1xuICAgIHJldHVybiBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodmFsdWVUb0hhc2gpO1xufTtcblxuZXhwb3J0IGNvbnN0IHByZXBlbmRFdmVudE5hbWVQcmVmaXggPSAoc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4gYCR7RVZFTlRfTkFNRV9QUkVGSVh9JHtzdWZmaXggfHwgXCJcIn1gO1xuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIH0gZnJvbSBcIi4vY2FjaGUvQWNjZXNzVG9rZW5DYWNoZUl0ZW1cIjtcbmltcG9ydCB7IEFjY2Vzc1Rva2VuS2V5IH0gZnJvbSBcIi4vY2FjaGUvQWNjZXNzVG9rZW5LZXlcIjtcbmltcG9ydCB7IEFjY2Vzc1Rva2VuVmFsdWUgfSBmcm9tIFwiLi9jYWNoZS9BY2Nlc3NUb2tlblZhbHVlXCI7XG5pbXBvcnQgeyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyB9IGZyb20gXCIuL1NlcnZlclJlcXVlc3RQYXJhbWV0ZXJzXCI7XG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9hdXRob3JpdHkvQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBDbGllbnRJbmZvIH0gZnJvbSBcIi4vQ2xpZW50SW5mb1wiO1xuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHsgQXV0aENhY2hlIH0gZnJvbSBcIi4vY2FjaGUvQXV0aENhY2hlXCI7XG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHsgU2NvcGVTZXQgfSBmcm9tIFwiLi9TY29wZVNldFwiO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xuaW1wb3J0IHsgV2luZG93VXRpbHMgfSBmcm9tIFwiLi91dGlscy9XaW5kb3dVdGlsc1wiO1xuaW1wb3J0IHsgVG9rZW5VdGlscyB9IGZyb20gXCIuL3V0aWxzL1Rva2VuVXRpbHNcIjtcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuL3V0aWxzL1RpbWVVdGlsc1wiO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi91dGlscy9VcmxVdGlsc1wiO1xuaW1wb3J0IHsgUmVxdWVzdFV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvUmVxdWVzdFV0aWxzXCI7XG5pbXBvcnQgeyBSZXNwb25zZVV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvUmVzcG9uc2VVdGlsc1wiO1xuaW1wb3J0IHsgQXV0aG9yaXR5RmFjdG9yeSB9IGZyb20gXCIuL2F1dGhvcml0eS9BdXRob3JpdHlGYWN0b3J5XCI7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBidWlsZENvbmZpZ3VyYXRpb24sIFRlbGVtZXRyeU9wdGlvbnMgfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcIjtcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQXV0aEVycm9yXCI7XG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcbmltcG9ydCB7IFNlcnZlckVycm9yIH0gZnJvbSBcIi4vZXJyb3IvU2VydmVyRXJyb3JcIjtcbmltcG9ydCB7IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXCI7XG5pbXBvcnQgeyBBdXRoUmVzcG9uc2UsIGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkgfSBmcm9tIFwiLi9BdXRoUmVzcG9uc2VcIjtcbmltcG9ydCBUZWxlbWV0cnlNYW5hZ2VyIGZyb20gXCIuL3RlbGVtZXRyeS9UZWxlbWV0cnlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBUZWxlbWV0cnlQbGF0Zm9ybSwgVGVsZW1ldHJ5Q29uZmlnIH0gZnJvbSBcIi4vdGVsZW1ldHJ5L1RlbGVtZXRyeVR5cGVzXCI7XG5pbXBvcnQgQXBpRXZlbnQsIHsgQVBJX0NPREUsIEFQSV9FVkVOVF9JREVOVElGSUVSIH0gZnJvbSBcIi4vdGVsZW1ldHJ5L0FwaUV2ZW50XCI7XG5pbXBvcnQgeyBDb25zdGFudHMsXG4gICAgU2VydmVySGFzaFBhcmFtS2V5cyxcbiAgICBJbnRlcmFjdGlvblR5cGUsXG4gICAgbGlicmFyeVZlcnNpb24sXG4gICAgVGVtcG9yYXJ5Q2FjaGVLZXlzLFxuICAgIFBlcnNpc3RlbnRDYWNoZUtleXMsXG4gICAgRXJyb3JDYWNoZUtleXMsXG59IGZyb20gXCIuL3V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi91dGlscy9DcnlwdG9VdGlsc1wiO1xuXG4vLyBkZWZhdWx0IGF1dGhvcml0eVxuY29uc3QgREVGQVVMVF9BVVRIT1JJVFkgPSBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIjtcblxuLyoqXG4gKiBJbnRlcmZhY2UgdG8gaGFuZGxlIGlGcmFtZSBnZW5lcmF0aW9uLCBQb3B1cCBXaW5kb3cgY3JlYXRpb24gYW5kIHJlZGlyZWN0IGhhbmRsaW5nXG4gKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgbXNhbDogT2JqZWN0O1xuICAgICAgICBDdXN0b21FdmVudDogQ3VzdG9tRXZlbnQ7XG4gICAgICAgIEV2ZW50OiBFdmVudDtcbiAgICAgICAgYWN0aXZlUmVuZXdhbHM6IHt9O1xuICAgICAgICByZW5ld1N0YXRlczogQXJyYXk8c3RyaW5nPjtcbiAgICAgICAgY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzIDoge307XG4gICAgICAgIHByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzOiB7fTtcbiAgICAgICAgb3BlbmVkV2luZG93czogQXJyYXk8V2luZG93PjtcbiAgICAgICAgcmVxdWVzdFR5cGU6IHN0cmluZztcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICogQGlnbm9yZVxuICogcmVzcG9uc2VfdHlwZSBmcm9tIE9wZW5JRENvbm5lY3RcbiAqIFJlZmVyZW5jZXM6IGh0dHBzOi8vb3BlbmlkLm5ldC9zcGVjcy9vYXV0aC12Mi1tdWx0aXBsZS1yZXNwb25zZS10eXBlcy0xXzAuaHRtbCAmIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tNC4yLjFcbiAqIFNpbmNlIHdlIHN1cHBvcnQgb25seSBpbXBsaWNpdCBmbG93IGluIHRoaXMgbGlicmFyeSwgd2UgcmVzdHJpY3QgdGhlIHJlc3BvbnNlX3R5cGUgc3VwcG9ydCB0byBvbmx5ICd0b2tlbicgYW5kICdpZF90b2tlbidcbiAqXG4gKi9cbmNvbnN0IFJlc3BvbnNlVHlwZXMgPSB7XG4gICAgaWRfdG9rZW46IFwiaWRfdG9rZW5cIixcbiAgICB0b2tlbjogXCJ0b2tlblwiLFxuICAgIGlkX3Rva2VuX3Rva2VuOiBcImlkX3Rva2VuIHRva2VuXCJcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICogQGlnbm9yZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlUmVzdWx0IHtcbiAgICBlcnJvckRlc2M6IHN0cmluZztcbiAgICB0b2tlbjogc3RyaW5nO1xuICAgIGVycm9yOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICogQGlnbm9yZVxuICogRGF0YSB0eXBlIHRvIGhvbGQgaW5mb3JtYXRpb24gYWJvdXQgc3RhdGUgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCB0eXBlIFJlc3BvbnNlU3RhdGVJbmZvID0ge1xuICAgIHN0YXRlOiBzdHJpbmc7XG4gICAgc3RhdGVNYXRjaDogYm9vbGVhbjtcbiAgICByZXF1ZXN0VHlwZTogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBBIHR5cGUgYWxpYXMgZm9yIGFuIGF1dGhSZXNwb25zZUNhbGxiYWNrIGZ1bmN0aW9uLlxuICoge0BsaW5rIChhdXRoUmVzcG9uc2VDYWxsYmFjazp0eXBlKX1cbiAqIEBwYXJhbSBhdXRoRXJyIGVycm9yIGNyZWF0ZWQgZm9yIGZhaWx1cmUgY2FzZXNcbiAqIEBwYXJhbSByZXNwb25zZSByZXNwb25zZSBjb250YWluaW5nIHRva2VuIHN0cmluZ3MgaW4gc3VjY2VzcyBjYXNlcywgb3IganVzdCBzdGF0ZSB2YWx1ZSBpbiBlcnJvciBjYXNlc1xuICovXG5leHBvcnQgdHlwZSBhdXRoUmVzcG9uc2VDYWxsYmFjayA9IChhdXRoRXJyOiBBdXRoRXJyb3IsIHJlc3BvbnNlPzogQXV0aFJlc3BvbnNlKSA9PiB2b2lkO1xuXG4vKipcbiAqIEEgdHlwZSBhbGlhcyBmb3IgYSB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgZnVuY3Rpb24uXG4gKiB7QGxpbmsgKHRva2VuUmVjZWl2ZWRDYWxsYmFjazp0eXBlKX1cbiAqIEByZXR1cm5zIHJlc3BvbnNlIG9mIHR5cGUge0BsaW5rIChBdXRoUmVzcG9uc2U6dHlwZSl9XG4gKiBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIGdldCB0aGUgY2FsbCBiYWNrIG9uY2UgdGhpcyBBUEkgaXMgY29tcGxldGVkIChlaXRoZXIgc3VjY2Vzc2Z1bGx5IG9yIHdpdGggYSBmYWlsdXJlKS5cbiAqL1xuZXhwb3J0IHR5cGUgdG9rZW5SZWNlaXZlZENhbGxiYWNrID0gKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UpID0+IHZvaWQ7XG5cbi8qKlxuICogQSB0eXBlIGFsaWFzIGZvciBhIGVycm9yUmVjZWl2ZWRDYWxsYmFjayBmdW5jdGlvbi5cbiAqIHtAbGluayAoZXJyb3JSZWNlaXZlZENhbGxiYWNrOnR5cGUpfVxuICogQHJldHVybnMgcmVzcG9uc2Ugb2YgdHlwZSB7QGxpbmsgKEF1dGhFcnJvcjpjbGFzcyl9XG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhY2NvdW50IHN0YXRlXG4gKi9cbmV4cG9ydCB0eXBlIGVycm9yUmVjZWl2ZWRDYWxsYmFjayA9IChhdXRoRXJyOiBBdXRoRXJyb3IsIGFjY291bnRTdGF0ZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4vKipcbiAqIFVzZXJBZ2VudEFwcGxpY2F0aW9uIGNsYXNzXG4gKlxuICogT2JqZWN0IEluc3RhbmNlIHRoYXQgdGhlIGRldmVsb3BlciBjYW4gdXNlIHRvIG1ha2UgbG9naW5YWCBPUiBhY3F1aXJlVG9rZW5YWCBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJBZ2VudEFwcGxpY2F0aW9uIHtcblxuICAgIC8vIGlucHV0IENvbmZpZ3VyYXRpb24gYnkgdGhlIGRldmVsb3Blci91c2VyXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb247XG5cbiAgICAvLyBjYWxsYmFja3MgZm9yIHRva2VuL2Vycm9yXG4gICAgcHJpdmF0ZSBhdXRoUmVzcG9uc2VDYWxsYmFjazogYXV0aFJlc3BvbnNlQ2FsbGJhY2sgPSBudWxsO1xuICAgIHByaXZhdGUgdG9rZW5SZWNlaXZlZENhbGxiYWNrOiB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgPSBudWxsO1xuICAgIHByaXZhdGUgZXJyb3JSZWNlaXZlZENhbGxiYWNrOiBlcnJvclJlY2VpdmVkQ2FsbGJhY2sgPSBudWxsO1xuXG4gICAgLy8gQWRkZWQgZm9yIHJlYWRhYmlsaXR5IGFzIHRoZXNlIHBhcmFtcyBhcmUgdmVyeSBmcmVxdWVudGx5IHVzZWRcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xuICAgIHByaXZhdGUgY2xpZW50SWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGluQ29va2llOiBib29sZWFuO1xuICAgIHByaXZhdGUgdGVsZW1ldHJ5TWFuYWdlcjogVGVsZW1ldHJ5TWFuYWdlcjtcblxuICAgIC8vIENhY2hlIGFuZCBBY2NvdW50IGluZm8gcmVmZXJyZWQgYWNyb3NzIHRva2VuIGdyYW50IGZsb3dcbiAgICBwcm90ZWN0ZWQgY2FjaGVTdG9yYWdlOiBBdXRoQ2FjaGU7XG4gICAgcHJpdmF0ZSBhY2NvdW50OiBBY2NvdW50O1xuXG4gICAgLy8gc3RhdGUgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBzaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzaWxlbnRMb2dpbjogYm9vbGVhbjtcbiAgICBwcml2YXRlIHJlZGlyZWN0Q2FsbGJhY2tzU2V0OiBib29sZWFuO1xuXG4gICAgLy8gQXV0aG9yaXR5IEZ1bmN0aW9uYWxpdHlcbiAgICBwcm90ZWN0ZWQgYXV0aG9yaXR5SW5zdGFuY2U6IEF1dGhvcml0eTtcblxuICAgIC8qKlxuICAgICAqIHNldHRlciBmb3IgdGhlIGF1dGhvcml0eSBVUkxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5XG4gICAgICovXG4gICAgLy8gSWYgdGhlIGRldmVsb3BlciBwYXNzZXMgYW4gYXV0aG9yaXR5LCBjcmVhdGUgYW4gaW5zdGFuY2VcbiAgICBwdWJsaWMgc2V0IGF1dGhvcml0eSh2YWwpIHtcbiAgICAgICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA9IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UodmFsLCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gbWFuYWdlIHRoZSBhdXRob3JpdHkgVVJMLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gYXV0aG9yaXR5XG4gICAgICovXG4gICAgcHVibGljIGdldCBhdXRob3JpdHkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UuQ2Fub25pY2FsQXV0aG9yaXR5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBhdXRob3JpdHkgaW5zdGFuY2UgZnJvbSB0aGUgTVNBTCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAqXG4gICAgICogQHJldHVybnMge0BsaW5rIEF1dGhvcml0eX0gYXV0aG9yaXR5IGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIGdldEF1dGhvcml0eUluc3RhbmNlKCk6IEF1dGhvcml0eSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIENvbnN0cnVjdG9yIGZvciB0aGUgVXNlckFnZW50QXBwbGljYXRpb24gdXNlZCB0byBpbnN0YW50aWF0ZSB0aGUgVXNlckFnZW50QXBwbGljYXRpb24gb2JqZWN0XG4gICAgICpcbiAgICAgKiBJbXBvcnRhbnQgYXR0cmlidXRlcyBpbiB0aGUgQ29uZmlndXJhdGlvbiBvYmplY3QgZm9yIGF1dGggYXJlOlxuICAgICAqIC0gY2xpZW50SUQ6IHRoZSBhcHBsaWNhdGlvbiBJRCBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAqIFlvdSBjYW4gb2J0YWluIG9uZSBieSByZWdpc3RlcmluZyB5b3VyIGFwcGxpY2F0aW9uIHdpdGggb3VyIEFwcGxpY2F0aW9uIHJlZ2lzdHJhdGlvbiBwb3J0YWwgOiBodHRwczovL3BvcnRhbC5henVyZS5jb20vI2JsYWRlL01pY3Jvc29mdF9BQURfSUFNL0FjdGl2ZURpcmVjdG9yeU1lbnVCbGFkZS9SZWdpc3RlcmVkQXBwc1ByZXZpZXdcbiAgICAgKiAtIGF1dGhvcml0eTogdGhlIGF1dGhvcml0eSBVUkwgZm9yIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICpcbiAgICAgKiBJbiBBenVyZSBBRCwgYXV0aG9yaXR5IGlzIGEgVVJMIGluZGljYXRpbmcgdGhlIEF6dXJlIGFjdGl2ZSBkaXJlY3RvcnkgdGhhdCBNU0FMIHVzZXMgdG8gb2J0YWluIHRva2Vucy5cbiAgICAgKiBJdCBpcyBvZiB0aGUgZm9ybSBodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vJmx0O0VudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlJmd0Oy5cbiAgICAgKiBJZiB5b3VyIGFwcGxpY2F0aW9uIHN1cHBvcnRzIEFjY291bnRzIGluIG9uZSBvcmdhbml6YXRpb25hbCBkaXJlY3RvcnksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggdGhlIFRlbmFudCBJZCBvciBUZW5hbnQgbmFtZSAoZm9yIGV4YW1wbGUsIGNvbnRvc28ubWljcm9zb2Z0LmNvbSkuXG4gICAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBzdXBwb3J0cyBBY2NvdW50cyBpbiBhbnkgb3JnYW5pemF0aW9uYWwgZGlyZWN0b3J5LCByZXBsYWNlIFwiRW50ZXJfdGhlX1RlbmFudF9JbmZvX0hlcmVcIiB2YWx1ZSB3aXRoIG9yZ2FuaXphdGlvbnMuXG4gICAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBzdXBwb3J0cyBBY2NvdW50cyBpbiBhbnkgb3JnYW5pemF0aW9uYWwgZGlyZWN0b3J5IGFuZCBwZXJzb25hbCBNaWNyb3NvZnQgYWNjb3VudHMsIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggY29tbW9uLlxuICAgICAqIFRvIHJlc3RyaWN0IHN1cHBvcnQgdG8gUGVyc29uYWwgTWljcm9zb2Z0IGFjY291bnRzIG9ubHksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggY29uc3VtZXJzLlxuICAgICAqXG4gICAgICpcbiAgICAgKiBJbiBBenVyZSBCMkMsIGF1dGhvcml0eSBpcyBvZiB0aGUgZm9ybSBodHRwczovLyZsdDtpbnN0YW5jZSZndDsvdGZwLyZsdDt0ZW5hbnQmZ3Q7LyZsdDtwb2xpY3lOYW1lJmd0Oy9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QGxpbmsgKENvbmZpZ3VyYXRpb246dHlwZSl9IGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciB0aGUgTVNBTCBVc2VyQWdlbnRBcHBsaWNhdGlvbiBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcblxuICAgICAgICAvLyBTZXQgdGhlIENvbmZpZ3VyYXRpb25cbiAgICAgICAgdGhpcy5jb25maWcgPSBidWlsZENvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbik7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBjYWxsYmFjayBib29sZWFuXG4gICAgICAgIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmxvZ2dlciA9IHRoaXMuY29uZmlnLnN5c3RlbS5sb2dnZXI7XG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSB0aGlzLmNvbmZpZy5hdXRoLmNsaWVudElkO1xuICAgICAgICB0aGlzLmluQ29va2llID0gdGhpcy5jb25maWcuY2FjaGUuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZTtcblxuICAgICAgICB0aGlzLnRlbGVtZXRyeU1hbmFnZXIgPSB0aGlzLmdldFRlbGVtZXRyeU1hbmFnZXJGcm9tQ29uZmlnKHRoaXMuY29uZmlnLnN5c3RlbS50ZWxlbWV0cnksIHRoaXMuY2xpZW50SWQpO1xuXG4gICAgICAgIC8vIGlmIG5vIGF1dGhvcml0eSBpcyBwYXNzZWQsIHNldCB0aGUgZGVmYXVsdDogXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCJcbiAgICAgICAgdGhpcy5hdXRob3JpdHkgPSB0aGlzLmNvbmZpZy5hdXRoLmF1dGhvcml0eSB8fCBERUZBVUxUX0FVVEhPUklUWTtcblxuICAgICAgICAvLyBjYWNoZSBrZXlzIG1zYWwgLSB0eXBlc2NyaXB0IHRocm93cyBhbiBlcnJvciBpZiBhbnkgdmFsdWUgb3RoZXIgdGhhbiBcImxvY2FsU3RvcmFnZVwiIG9yIFwic2Vzc2lvblN0b3JhZ2VcIiBpcyBwYXNzZWRcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UgPSBuZXcgQXV0aENhY2hlKHRoaXMuY2xpZW50SWQsIHRoaXMuY29uZmlnLmNhY2hlLmNhY2hlTG9jYXRpb24sIHRoaXMuaW5Db29raWUpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgd2luZG93IGhhbmRsaW5nIGNvZGVcbiAgICAgICAgd2luZG93LmFjdGl2ZVJlbmV3YWxzID0ge307XG4gICAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xuICAgICAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzID0geyB9O1xuICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXMgPSB7IH07XG4gICAgICAgIHdpbmRvdy5tc2FsID0gdGhpcztcblxuICAgICAgICBjb25zdCB1cmxIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgIGNvbnN0IHVybENvbnRhaW5zSGFzaCA9IFVybFV0aWxzLnVybENvbnRhaW5zSGFzaCh1cmxIYXNoKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBiYWNrIGJ1dHRvbiBpcyBwcmVzc2VkXG4gICAgICAgIFdpbmRvd1V0aWxzLmNoZWNrSWZCYWNrQnV0dG9uSXNQcmVzc2VkKHRoaXMuY2FjaGVTdG9yYWdlKTtcblxuICAgICAgICAvLyBPbiB0aGUgc2VydmVyIDMwMiAtIFJlZGlyZWN0LCBoYW5kbGUgdGhpc1xuICAgICAgICBpZiAodXJsQ29udGFpbnNIYXNoICYmICFXaW5kb3dVdGlscy5pc0luSWZyYW1lKCkgJiYgIVdpbmRvd1V0aWxzLmlzSW5Qb3B1cCgpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UodXJsSGFzaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjcmVnaW9uIFJlZGlyZWN0IENhbGxiYWNrc1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICogU2V0IHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgZm9yIHRoZSByZWRpcmVjdCBmbG93IHRvIHNlbmQgYmFjayB0aGUgc3VjY2VzcyBvciBlcnJvciBvYmplY3QuXG4gICAgICogQHBhcmFtIHtAbGluayAodG9rZW5SZWNlaXZlZENhbGxiYWNrOnR5cGUpfSBzdWNjZXNzQ2FsbGJhY2sgLSBDYWxsYmFjayB3aGljaCBjb250YWlucyB0aGUgQXV0aFJlc3BvbnNlIG9iamVjdCwgY29udGFpbmluZyBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKiBAcGFyYW0ge0BsaW5rIChlcnJvclJlY2VpdmVkQ2FsbGJhY2s6dHlwZSl9IGVycm9yQ2FsbGJhY2sgLSBDYWxsYmFjayB3aGljaCBjb250YWlucyBhIEF1dGhFcnJvciBvYmplY3QsIGNvbnRhaW5pbmcgZXJyb3IgZGF0YSBmcm9tIGVpdGhlciB0aGUgc2VydmVyXG4gICAgICogb3IgdGhlIGxpYnJhcnksIGRlcGVuZGluZyBvbiB0aGUgb3JpZ2luIG9mIHRoZSBlcnJvci5cbiAgICAgKi9cbiAgICBoYW5kbGVSZWRpcmVjdENhbGxiYWNrKHRva2VuUmVjZWl2ZWRDYWxsYmFjazogdG9rZW5SZWNlaXZlZENhbGxiYWNrLCBlcnJvclJlY2VpdmVkQ2FsbGJhY2s6IGVycm9yUmVjZWl2ZWRDYWxsYmFjayk6IHZvaWQ7XG4gICAgaGFuZGxlUmVkaXJlY3RDYWxsYmFjayhhdXRoQ2FsbGJhY2s6IGF1dGhSZXNwb25zZUNhbGxiYWNrKTogdm9pZDtcbiAgICBoYW5kbGVSZWRpcmVjdENhbGxiYWNrKGF1dGhPclRva2VuQ2FsbGJhY2s6IGF1dGhSZXNwb25zZUNhbGxiYWNrIHwgdG9rZW5SZWNlaXZlZENhbGxiYWNrLCBlcnJvclJlY2VpdmVkQ2FsbGJhY2s/OiBlcnJvclJlY2VpdmVkQ2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgaWYgKCFhdXRoT3JUb2tlbkNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlSW52YWxpZENhbGxiYWNrT2JqZWN0RXJyb3IoYXV0aE9yVG9rZW5DYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgY2FsbGJhY2tzXG4gICAgICAgIGlmIChlcnJvclJlY2VpdmVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5SZWNlaXZlZENhbGxiYWNrID0gYXV0aE9yVG9rZW5DYWxsYmFjayBhcyB0b2tlblJlY2VpdmVkQ2FsbGJhY2s7XG4gICAgICAgICAgICB0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjayA9IGVycm9yUmVjZWl2ZWRDYWxsYmFjaztcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJUaGlzIG92ZXJsb2FkIGZvciBjYWxsYmFjayBpcyBkZXByZWNhdGVkIC0gcGxlYXNlIGNoYW5nZSB0aGUgZm9ybWF0IG9mIHRoZSBjYWxsYmFja3MgdG8gYSBzaW5nbGUgY2FsbGJhY2sgYXMgc2hvd246IChlcnI6IEF1dGhFcnJvciwgcmVzcG9uc2U6IEF1dGhSZXNwb25zZSkuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hdXRoUmVzcG9uc2VDYWxsYmFjayA9IGF1dGhPclRva2VuQ2FsbGJhY2sgYXMgYXV0aFJlc3BvbnNlQ2FsbGJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0ID0gdHJ1ZTtcblxuICAgICAgICAvLyBPbiB0aGUgc2VydmVyIDMwMiAtIFJlZGlyZWN0LCBoYW5kbGUgdGhpc1xuICAgICAgICBjb25zdCBjYWNoZWRIYXNoID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShUZW1wb3JhcnlDYWNoZUtleXMuVVJMX0hBU0gpO1xuICAgICAgICBpZiAoY2FjaGVkSGFzaCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ2FsbEJhY2soY2FjaGVkSGFzaCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQVBJIHRvIHZlcmlmeSBpZiB0aGUgVVJMIGNvbnRhaW5zIHRoZSBoYXNoIHdpdGgga25vd24gcHJvcGVydGllc1xuICAgICAqIEBwYXJhbSBoYXNoXG4gICAgICovXG4gICAgcHVibGljIHVybENvbnRhaW5zSGFzaChoYXNoOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFVybFV0aWxzLnVybENvbnRhaW5zSGFzaChoYXNoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGF1dGhSZXNwb25zZUhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlOiBJbnRlcmFjdGlvblR5cGUsIHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIHJlc29sdmU/OiBhbnkpIDogdm9pZCB7XG4gICAgICAgIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JSZWNlaXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlblJlY2VpdmVkQ2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF1dGhSZXNwb25zZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoUmVzcG9uc2VDYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhdXRoRXJyb3JIYW5kbGVyKGludGVyYWN0aW9uVHlwZTogSW50ZXJhY3Rpb25UeXBlLCBhdXRoRXJyOiBBdXRoRXJyb3IsIHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIHJlamVjdD86IGFueSkgOiB2b2lkIHtcbiAgICAgICAgLy8gc2V0IGludGVyYWN0aW9uX3N0YXR1cyB0byBjb21wbGV0ZVxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5JTlRFUkFDVElPTl9TVEFUVVMpO1xuICAgICAgICBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JSZWNlaXZlZENhbGxiYWNrKGF1dGhFcnIsIHJlc3BvbnNlLmFjY291bnRTdGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlQ2FsbGJhY2soYXV0aEVyciwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwKSB7XG4gICAgICAgICAgICByZWplY3QoYXV0aEVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZEludGVyYWN0aW9uVHlwZUVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG4gICAgLyoqXG4gICAgICogVXNlIHdoZW4gaW5pdGlhdGluZyB0aGUgbG9naW4gcHJvY2VzcyBieSByZWRpcmVjdGluZyB0aGUgdXNlcidzIGJyb3dzZXIgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQuXG4gICAgICogQHBhcmFtIHtAbGluayAoQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzOnR5cGUpfVxuICAgICAqL1xuICAgIGxvZ2luUmVkaXJlY3QodXNlclJlcXVlc3Q/OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiB2b2lkIHtcbiAgICAgICAgLy8gdmFsaWRhdGUgcmVxdWVzdFxuICAgICAgICBjb25zdCByZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgPSBSZXF1ZXN0VXRpbHMudmFsaWRhdGVSZXF1ZXN0KHVzZXJSZXF1ZXN0LCB0cnVlLCB0aGlzLmNsaWVudElkLCBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QsIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQpO1xuICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkludGVyYWN0aXZlKENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCwgdHJ1ZSwgcmVxdWVzdCwgIG51bGwsIG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB3aGVuIHlvdSB3YW50IHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gZm9yIHlvdXIgQVBJIGJ5IHJlZGlyZWN0aW5nIHRoZSB1c2VyJ3MgYnJvd3NlciB3aW5kb3cgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQuXG4gICAgICogQHBhcmFtIHtAbGluayAoQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzOnR5cGUpfVxuICAgICAqXG4gICAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBhY3F1aXJlVG9rZW5SZWRpcmVjdCh1c2VyUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogdm9pZCB7XG4gICAgICAgIC8vIHZhbGlkYXRlIHJlcXVlc3RcbiAgICAgICAgY29uc3QgcmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0gUmVxdWVzdFV0aWxzLnZhbGlkYXRlUmVxdWVzdCh1c2VyUmVxdWVzdCwgZmFsc2UsIHRoaXMuY2xpZW50SWQsIENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCwgdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCk7XG4gICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW50ZXJhY3RpdmUoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0LCBmYWxzZSwgcmVxdWVzdCwgbnVsbCwgbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHdoZW4gaW5pdGlhdGluZyB0aGUgbG9naW4gcHJvY2VzcyB2aWEgb3BlbmluZyBhIHBvcHVwIHdpbmRvdyBpbiB0aGUgdXNlcidzIGJyb3dzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QGxpbmsgKEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyczp0eXBlKX1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxBdXRoUmVzcG9uc2U+fSAtIGEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoaXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZCwgb3IgcmVqZWN0ZWQgaWYgYW4gZXJyb3Igd2FzIHJhaXNlZC4gUmV0dXJucyB0aGUge0BsaW5rIEF1dGhSZXNwb25zZX0gb2JqZWN0XG4gICAgICovXG4gICAgbG9naW5Qb3B1cCh1c2VyUmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XG4gICAgICAgIC8vIHZhbGlkYXRlIHJlcXVlc3RcbiAgICAgICAgY29uc3QgcmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0gUmVxdWVzdFV0aWxzLnZhbGlkYXRlUmVxdWVzdCh1c2VyUmVxdWVzdCwgdHJ1ZSwgdGhpcy5jbGllbnRJZCwgQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkludGVyYWN0aXZlKENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCwgdHJ1ZSwgcmVxdWVzdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yOiBBdXRoRXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlc2V0VGVtcENhY2hlSXRlbXMocmVxdWVzdC5zdGF0ZSk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHdoZW4geW91IHdhbnQgdG8gb2J0YWluIGFuIGFjY2Vzc190b2tlbiBmb3IgeW91ciBBUEkgdmlhIG9wZW5pbmcgYSBwb3B1cCB3aW5kb3cgaW4gdGhlIHVzZXIncyBicm93c2VyXG4gICAgICogQHBhcmFtIHtAbGluayBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnN9XG4gICAgICpcbiAgICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxBdXRoUmVzcG9uc2U+fSAtIGEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoaXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZCwgb3IgcmVqZWN0ZWQgaWYgYW4gZXJyb3Igd2FzIHJhaXNlZC4gUmV0dXJucyB0aGUge0BsaW5rIEF1dGhSZXNwb25zZX0gb2JqZWN0XG4gICAgICovXG4gICAgYWNxdWlyZVRva2VuUG9wdXAodXNlclJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XG4gICAgICAgIC8vIHZhbGlkYXRlIHJlcXVlc3RcbiAgICAgICAgY29uc3QgcmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0gUmVxdWVzdFV0aWxzLnZhbGlkYXRlUmVxdWVzdCh1c2VyUmVxdWVzdCwgZmFsc2UsIHRoaXMuY2xpZW50SWQsIENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEF1dGhSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JbnRlcmFjdGl2ZShDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXAsIGZhbHNlLCByZXF1ZXN0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3I6IEF1dGhFcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVzZXRUZW1wQ2FjaGVJdGVtcyhyZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAjcmVnaW9uIEFjcXVpcmUgVG9rZW5cblxuICAgIC8qKlxuICAgICAqIFVzZSB3aGVuIGluaXRpYXRpbmcgdGhlIGxvZ2luIHByb2Nlc3Mgb3Igd2hlbiB5b3Ugd2FudCB0byBvYnRhaW4gYW4gYWNjZXNzX3Rva2VuIGZvciB5b3VyIEFQSSxcbiAgICAgKiBlaXRoZXIgYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIncyBicm93c2VyIHdpbmRvdyB0byB0aGUgYXV0aG9yaXphdGlvbiBlbmRwb2ludCBvciB2aWEgb3BlbmluZyBhIHBvcHVwIHdpbmRvdyBpbiB0aGUgdXNlcidzIGJyb3dzZXIuXG4gICAgICogQHBhcmFtIHtAbGluayAoQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzOnR5cGUpfVxuICAgICAqXG4gICAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBwcml2YXRlIGFjcXVpcmVUb2tlbkludGVyYWN0aXZlKGludGVyYWN0aW9uVHlwZTogSW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbDogYm9vbGVhbiwgcmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgcmVzb2x2ZT86IGFueSwgcmVqZWN0PzogYW55KTogdm9pZCB7XG5cbiAgICAgICAgLy8gYmxvY2sgdGhlIHJlcXVlc3QgaWYgbWFkZSBmcm9tIHRoZSBoaWRkZW4gaWZyYW1lXG4gICAgICAgIFdpbmRvd1V0aWxzLmJsb2NrUmVsb2FkSW5IaWRkZW5JZnJhbWVzKCk7XG5cbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Qcm9ncmVzcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLklOVEVSQUNUSU9OX1NUQVRVUyk7XG4gICAgICAgIGlmKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5SRURJUkVDVF9SRVFVRVNULCBgJHtDb25zdGFudHMuaW5Qcm9ncmVzc30ke0NvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlcn0ke3JlcXVlc3Quc3RhdGV9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhbHJlYWR5IGluIHByb2dyZXNzLCBkbyBub3QgcHJvY2VlZFxuICAgICAgICBpZiAoaW50ZXJhY3Rpb25Qcm9ncmVzcyA9PT0gQ29uc3RhbnRzLmluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHRocm93bkVycm9yID0gaXNMb2dpbkNhbGwgPyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTG9naW5JblByb2dyZXNzRXJyb3IoKSA6IENsaWVudEF1dGhFcnJvci5jcmVhdGVBY3F1aXJlVG9rZW5JblByb2dyZXNzRXJyb3IoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlT25seVJlc3BvbnNlID0gYnVpbGRSZXNwb25zZVN0YXRlT25seSh0aGlzLmdldEFjY291bnRTdGF0ZShyZXF1ZXN0LnN0YXRlKSk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZXNldFRlbXBDYWNoZUl0ZW1zKHJlcXVlc3Quc3RhdGUpO1xuICAgICAgICAgICAgdGhpcy5hdXRoRXJyb3JIYW5kbGVyKGludGVyYWN0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICB0aHJvd25FcnJvcixcbiAgICAgICAgICAgICAgICBzdGF0ZU9ubHlSZXNwb25zZSxcbiAgICAgICAgICAgICAgICByZWplY3QpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IHRoZSBhY2NvdW50IG9iamVjdCBpZiBhIHNlc3Npb24gZXhpc3RzXG4gICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSAocmVxdWVzdCAmJiByZXF1ZXN0LmFjY291bnQgJiYgIWlzTG9naW5DYWxsKSA/IHJlcXVlc3QuYWNjb3VudCA6IHRoaXMuZ2V0QWNjb3VudCgpO1xuXG4gICAgICAgIC8vIElmIG5vIHNlc3Npb24gZXhpc3RzLCBwcm9tcHQgdGhlIHVzZXIgdG8gbG9naW4uXG4gICAgICAgIGlmICghYWNjb3VudCAmJiAhU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuaXNTU09QYXJhbShyZXF1ZXN0KSkge1xuICAgICAgICAgICAgaWYgKGlzTG9naW5DYWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gZXh0cmFjdCBBREFMIGlkX3Rva2VuIGlmIGV4aXN0c1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkYWxJZFRva2VuID0gdGhpcy5leHRyYWN0QURBTElkVG9rZW4oKTtcblxuICAgICAgICAgICAgICAgIC8vIHNpbGVudCBsb2dpbiBpZiBBREFMIGlkX3Rva2VuIGlzIHJldHJpZXZlZCBzdWNjZXNzZnVsbHkgLSBTU09cbiAgICAgICAgICAgICAgICBpZiAoYWRhbElkVG9rZW4gJiYgIXJlcXVlc3Quc2NvcGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJBREFMJ3MgaWRUb2tlbiBleGlzdHMuIEV4dHJhY3RpbmcgbG9naW4gaW5mb3JtYXRpb24gZnJvbSBBREFMJ3MgaWRUb2tlbiBcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0gdGhpcy5idWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lsZW50TG9naW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlblNpbGVudCh0b2tlblJlcXVlc3QpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVuaWZpZWQgY2FjaGUgY2FsbCBpcyBzdWNjZXNzZnVsXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlLCByZXNwb25zZSwgcmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBkdXJpbmcgdW5pZmllZCBjYWNoZSBBVFM6IFwiICsgZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9jZWVkIHRvIGxvZ2luIHNpbmNlIEFUUyBmYWlsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSGVscGVyKG51bGwsIGludGVyYWN0aW9uVHlwZSwgaXNMb2dpbkNhbGwsIHJlcXVlc3QscmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIEFEQUwgdG9rZW4gZm91bmQsIHByb2NlZWQgdG8gbG9naW5cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5IZWxwZXIobnVsbCwgaW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbCwgcmVxdWVzdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBY3F1aXJlVG9rZW4gY2FsbCwgYnV0IG5vIGFjY291bnQgb3IgY29udGV4dCBnaXZlbiwgc28gdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlT25seVJlc3BvbnNlID0gYnVpbGRSZXNwb25zZVN0YXRlT25seSh0aGlzLmdldEFjY291bnRTdGF0ZShyZXF1ZXN0LnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVzZXRUZW1wQ2FjaGVJdGVtcyhyZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhFcnJvckhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlLFxuICAgICAgICAgICAgICAgICAgICBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZU9ubHlSZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNlciBzZXNzaW9uIGV4aXN0c1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSGVscGVyKGFjY291bnQsIGludGVyYWN0aW9uVHlwZSwgaXNMb2dpbkNhbGwsIHJlcXVlc3QsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBhY3F1aXJlVG9rZW5cbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgYWNxdWlyZVRva2VuSGVscGVyKGFjY291bnQ6IEFjY291bnQsIGludGVyYWN0aW9uVHlwZTogSW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbDogYm9vbGVhbiwgcmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgcmVzb2x2ZT86IGFueSwgcmVqZWN0PzogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIFRyYWNrIHRoZSBhY3F1aXJlVG9rZW4gcHJvZ3Jlc3NcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShUZW1wb3JhcnlDYWNoZUtleXMuSU5URVJBQ1RJT05fU1RBVFVTLCBDb25zdGFudHMuaW5Qcm9ncmVzcyk7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gcmVxdWVzdC5zY29wZXMgPyByZXF1ZXN0LnNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpIDogdGhpcy5jbGllbnRJZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGxldCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzO1xuICAgICAgICBjb25zdCBhY3F1aXJlVG9rZW5BdXRob3JpdHkgPSAocmVxdWVzdCAmJiByZXF1ZXN0LmF1dGhvcml0eSkgPyBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHJlcXVlc3QuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KSA6IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2U7XG5cbiAgICAgICAgbGV0IHBvcFVwV2luZG93OiBXaW5kb3c7XG5cbiAgICAgICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwKSB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIHBvcHVwIHdpbmRvd1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwb3BVcFdpbmRvdyA9IHRoaXMub3BlblBvcHVwKFwiYWJvdXQ6YmxhbmtcIiwgXCJtc2FsXCIsIENvbnN0YW50cy5wb3BVcFdpZHRoLCBDb25zdGFudHMucG9wVXBIZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgLy8gUHVzaCBwb3B1cCB3aW5kb3cgaGFuZGxlIG9udG8gc3RhY2sgZm9yIHRyYWNraW5nXG4gICAgICAgICAgICAgICAgV2luZG93VXRpbHMudHJhY2tQb3B1cChwb3BVcFdpbmRvdyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuY29kZSArIFwiOlwiICsgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmRlc2MpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oRXJyb3JDYWNoZUtleXMuRVJST1IsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5jb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEVycm9yQ2FjaGVLZXlzLkVSUk9SX0RFU0MsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5kZXNjKTtcbiAgICAgICAgICAgICAgICBpZiAocmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcG9wVXBXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhY3F1aXJlVG9rZW5BdXRob3JpdHkucmVzb2x2ZUVuZHBvaW50c0FzeW5jKCkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAvLyBPbiBGdWxmaWxsbWVudFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSBpc0xvZ2luQ2FsbCA/IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4gOiB0aGlzLmdldFRva2VuVHlwZShhY2NvdW50LCByZXF1ZXN0LnNjb3BlcywgZmFsc2UpO1xuXG4gICAgICAgICAgICBjb25zdCBsb2dpblN0YXJ0UGFnZSA9IHJlcXVlc3QucmVkaXJlY3RTdGFydFBhZ2UgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbiAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyhcbiAgICAgICAgICAgICAgICBhY3F1aXJlVG9rZW5BdXRob3JpdHksXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGUsXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWRpcmVjdFVyaShyZXF1ZXN0ICYmIHJlcXVlc3QucmVkaXJlY3RVcmkpLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2NvcGVzLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc3RhdGUsXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5jb3JyZWxhdGlvbklkXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQsIGxvZ2luU3RhcnRQYWdlKTtcblxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxuICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCk7XG5cbiAgICAgICAgICAgIC8vIENvbnN0cnVjdCB1cmxOYXZpZ2F0ZVxuICAgICAgICAgICAgY29uc3QgdXJsTmF2aWdhdGUgPSBVcmxVdGlscy5jcmVhdGVOYXZpZ2F0ZVVybChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpICsgQ29uc3RhbnRzLnJlc3BvbnNlX21vZGVfZnJhZ21lbnQ7XG5cbiAgICAgICAgICAgIC8vIHNldCBzdGF0ZSBpbiBjYWNoZVxuICAgICAgICAgICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0xvZ2luQ2FsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKGAke1RlbXBvcmFyeUNhY2hlS2V5cy5TVEFURV9BQ1FfVE9LRU59JHtDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXJ9JHtyZXF1ZXN0LnN0YXRlfWAsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgdGhpcy5pbkNvb2tpZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcy5wdXNoKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RUeXBlID0gaXNMb2dpbkNhbGwgPyBDb25zdGFudHMubG9naW4gOiBDb25zdGFudHMucmVuZXdUb2tlbjtcblxuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGNhbGxiYWNrIHRvIGNhcHR1cmUgcmVzdWx0cyBmcm9tIHNlcnZlclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHNjb3BlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZEludGVyYWN0aW9uVHlwZUVycm9yKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHByb21wdCB1c2VyIGZvciBpbnRlcmFjdGlvblxuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVdpbmRvdyh1cmxOYXZpZ2F0ZSwgcG9wVXBXaW5kb3cpO1xuXG4gICAgICAgICAgICAvLyBwb3BVcFdpbmRvdyB3aWxsIGJlIG51bGwgZm9yIHJlZGlyZWN0cywgc28gd2UgZG9udCBuZWVkIHRvIGF0dGVtcHQgdG8gbW9uaXRvciB0aGUgd2luZG93XG4gICAgICAgICAgICBpZiAocG9wVXBXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNoID0gYXdhaXQgV2luZG93VXRpbHMubW9uaXRvcldpbmRvd0Zvckhhc2gocG9wVXBXaW5kb3csIHRoaXMuY29uZmlnLnN5c3RlbS5sb2FkRnJhbWVUaW1lb3V0LCB1cmxOYXZpZ2F0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvblJlc3BvbnNlKGhhc2gpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlcXVlc3QgY29tcGxldGVkIHN1Y2Nlc3NmdWxseSwgc2V0IHRvIGNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5JTlRFUkFDVElPTl9TVEFUVVMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQ2xvc2luZyBwb3B1cCB3aW5kb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQ2hlY2sgaG93IHRoaXMgY2FuIGJlIGV4dHJhY3RlZCBmb3IgYW55IGZyYW1ld29yayBzcGVjaWZpYyBjb2RlP1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoXCJtc2FsOnBvcFVwSGFzaENoYW5nZWRcIiwgaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBXaW5kb3dVdGlscy5jbG9zZVBvcHVwcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5mcmFtZXdvcmsuaXNBbmd1bGFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChcIm1zYWw6cG9wVXBDbG9zZWRcIiwgZXJyb3IuZXJyb3JDb2RlICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyICsgZXJyb3IuZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcXVlc3QgZmFpbGVkLCBzZXQgdG8gY2FuY2VsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLklOVEVSQUNUSU9OX1NUQVRVUyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3BVcFdpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiY291bGQgbm90IHJlc29sdmUgZW5kcG9pbnRzXCIpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVzZXRUZW1wQ2FjaGVJdGVtcyhyZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgICAgIHRoaXMuYXV0aEVycm9ySGFuZGxlcihpbnRlcmFjdGlvblR5cGUsIENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcihlcnIudG9TdHJpbmcpLCBidWlsZFJlc3BvbnNlU3RhdGVPbmx5KHJlcXVlc3Quc3RhdGUpLCByZWplY3QpO1xuICAgICAgICAgICAgaWYgKHBvcFVwV2luZG93KSB7XG4gICAgICAgICAgICAgICAgcG9wVXBXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gb2J0YWluIGEgdG9rZW4gYmVmb3JlIGV2ZXJ5IGNhbGwgdG8gdGhlIEFQSSAvIHJlc291cmNlIHByb3ZpZGVyXG4gICAgICpcbiAgICAgKiBNU0FMIHJldHVybidzIGEgY2FjaGVkIHRva2VuIHdoZW4gYXZhaWxhYmxlXG4gICAgICogT3IgaXQgc2VuZCdzIGEgcmVxdWVzdCB0byB0aGUgU1RTIHRvIG9idGFpbiBhIG5ldyB0b2tlbiB1c2luZyBhIGhpZGRlbiBpZnJhbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0BsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31cbiAgICAgKlxuICAgICAqIFRvIHJlbmV3IGlkVG9rZW4sIHBsZWFzZSBwYXNzIGNsaWVudElkIGFzIHRoZSBvbmx5IHNjb3BlIGluIHRoZSBBdXRoZW50aWNhdGlvbiBQYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPEF1dGhSZXNwb25zZT59IC0gYSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhpcyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLCBvciByZWplY3RlZCBpZiBhbiBlcnJvciB3YXMgcmFpc2VkLiBSZXR1cm5zIHRoZSB7QGxpbmsgQXV0aFJlc3BvbnNlfSBvYmplY3RcbiAgICAgKlxuICAgICAqL1xuICAgIGFjcXVpcmVUb2tlblNpbGVudCh1c2VyUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdENvcnJlbGF0aW9uSWQgPSB1c2VyUmVxdWVzdC5jb3JyZWxhdGlvbklkIHx8IENyeXB0b1V0aWxzLmNyZWF0ZU5ld0d1aWQoKTtcbiAgICAgICAgY29uc3QgYXBpRXZlbnQ6IEFwaUV2ZW50ID0gbmV3IEFwaUV2ZW50KHJlcXVlc3RDb3JyZWxhdGlvbklkLCB0aGlzLmxvZ2dlcik7XG4gICAgICAgIGFwaUV2ZW50LmFwaUV2ZW50SWRlbnRpZmllciA9IEFQSV9FVkVOVF9JREVOVElGSUVSLkFjcXVpcmVUb2tlblNpbGVudDtcbiAgICAgICAgYXBpRXZlbnQuYXBpQ29kZSA9IEFQSV9DT0RFLkFjcXVpcmVUb2tlblNpbGVudDtcbiAgICAgICAgdGhpcy50ZWxlbWV0cnlNYW5hZ2VyLnN0YXJ0RXZlbnQoYXBpRXZlbnQpO1xuICAgICAgICAvLyB2YWxpZGF0ZSB0aGUgcmVxdWVzdFxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gUmVxdWVzdFV0aWxzLnZhbGlkYXRlUmVxdWVzdCh1c2VyUmVxdWVzdCwgZmFsc2UsIHRoaXMuY2xpZW50SWQpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgLy8gYmxvY2sgdGhlIHJlcXVlc3QgaWYgbWFkZSBmcm9tIHRoZSBoaWRkZW4gaWZyYW1lXG4gICAgICAgICAgICBXaW5kb3dVdGlscy5ibG9ja1JlbG9hZEluSGlkZGVuSWZyYW1lcygpO1xuXG4gICAgICAgICAgICBjb25zdCBzY29wZSA9IHJlcXVlc3Quc2NvcGVzLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBkZXZlbG9wZXIgcGFzc2VzIGFuIGFjY291bnQsIGdpdmUgdGhhdCBhY2NvdW50IHRoZSBwcmlvcml0eVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IHJlcXVlc3QuYWNjb3VudCB8fCB0aGlzLmdldEFjY291bnQoKTtcblxuICAgICAgICAgICAgLy8gZXh0cmFjdCBpZiB0aGVyZSBpcyBhbiBhZGFsSWRUb2tlbiBzdGFzaGVkIGluIHRoZSBjYWNoZVxuICAgICAgICAgICAgY29uc3QgYWRhbElkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hZGFsSWRUb2tlbik7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGFjY291bnQgbG9nZ2VkIGluIGFuZCBubyBsb2dpbl9oaW50L3NpZCBpcyBwYXNzZWQgaW4gdGhlIHJlcXVlc3RcbiAgICAgICAgICAgIGlmICghYWNjb3VudCAmJiAhKHJlcXVlc3Quc2lkICB8fCByZXF1ZXN0LmxvZ2luSGludCkgJiYgU3RyaW5nVXRpbHMuaXNFbXB0eShhZGFsSWRUb2tlbikgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2V0IHRoZSByZXNwb25zZSB0eXBlIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNhY2hlIHN0YXR1cyAvIHNjb3BlcyBzZXRcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IHRoaXMuZ2V0VG9rZW5UeXBlKGFjY291bnQsIHJlcXVlc3Quc2NvcGVzLCB0cnVlKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0IHBvcHVsYXRpbmcgdGhlIGBxdWVyeVBhcmFtZXRlcnNgIHRvIGJlIHNlbnQgdG8gdGhlIFNlcnZlclxuICAgICAgICAgICAgY29uc3Qgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgICAgIEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpLFxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkocmVxdWVzdC5yZWRpcmVjdFVyaSksXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zY29wZXMsXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zdGF0ZSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmNvcnJlbGF0aW9uSWQsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgKHNpZC9sb2dpbl9oaW50L2RvbWFpbl9oaW50KSBhbmQgYW55IG90aGVyIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXG4gICAgICAgICAgICBpZiAoU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuaXNTU09QYXJhbShyZXF1ZXN0KSB8fCBhY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB1c2VyIGRpZG4ndCBwYXNzIGxvZ2luX2hpbnQvc2lkIGFuZCBhZGFsJ3MgaWR0b2tlbiBpcyBwcmVzZW50LCBleHRyYWN0IHRoZSBsb2dpbl9oaW50IGZyb20gdGhlIGFkYWxJZFRva2VuXG4gICAgICAgICAgICBlbHNlIGlmICghYWNjb3VudCAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShhZGFsSWRUb2tlbikpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBhZGFsSWRUb2tlbiBleGlzdHMsIGV4dHJhY3QgdGhlIFNTTyBpbmZvIGZyb20gdGhlIHNhbWVcbiAgICAgICAgICAgICAgICBjb25zdCBhZGFsSWRUb2tlbk9iamVjdCA9IFRva2VuVXRpbHMuZXh0cmFjdElkVG9rZW4oYWRhbElkVG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJBREFMJ3MgaWRUb2tlbiBleGlzdHMuIEV4dHJhY3RpbmcgbG9naW4gaW5mb3JtYXRpb24gZnJvbSBBREFMJ3MgaWRUb2tlbiBcIik7XG4gICAgICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgbnVsbCwgYWRhbElkVG9rZW5PYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdXNlckNvbnRhaW5lZENsYWltcyA9IHJlcXVlc3QuY2xhaW1zUmVxdWVzdCB8fCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY2xhaW1zVmFsdWU7XG5cbiAgICAgICAgICAgIGxldCBhdXRoRXJyOiBBdXRoRXJyb3I7XG4gICAgICAgICAgICBsZXQgY2FjaGVSZXN1bHRSZXNwb25zZTtcblxuICAgICAgICAgICAgaWYgKCF1c2VyQ29udGFpbmVkQ2xhaW1zICYmICFyZXF1ZXN0LmZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlUmVzdWx0UmVzcG9uc2UgPSB0aGlzLmdldENhY2hlZFRva2VuKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBhdXRoRXJyID0gZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlc29sdmUvcmVqZWN0IGJhc2VkIG9uIGNhY2hlUmVzdWx0XG4gICAgICAgICAgICBpZiAoY2FjaGVSZXN1bHRSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJUb2tlbiBpcyBhbHJlYWR5IGluIGNhY2hlIGZvciBzY29wZTpcIiArIHNjb3BlKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNhY2hlUmVzdWx0UmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXV0aEVycikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoYXV0aEVyci5lcnJvckNvZGUgKyBcIjpcIiArIGF1dGhFcnIuZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZWplY3QoYXV0aEVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlIHByb2NlZWQgd2l0aCBsb2dpblxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGxvZ01lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJDb250YWluZWRDbGFpbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nTWVzc2FnZSA9IFwiU2tpcHBlZCBjYWNoZSBsb29rdXAgc2luY2UgY2xhaW1zIHdlcmUgZ2l2ZW4uXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgICAgICBsb2dNZXNzYWdlID0gXCJTa2lwcGVkIGNhY2hlIGxvb2t1cCBzaW5jZSByZXF1ZXN0LmZvcmNlUmVmcmVzaCBvcHRpb24gd2FzIHNldCB0byB0cnVlXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nTWVzc2FnZSA9IFwiVG9rZW4gaXMgbm90IGluIGNhY2hlIGZvciBzY29wZTpcIiArIHNjb3BlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKGxvZ01lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FjaGUgcmVzdWx0IGNhbiByZXR1cm4gbnVsbCBpZiBjYWNoZSBpcyBlbXB0eS4gSW4gdGhhdCBjYXNlLCBzZXQgYXV0aG9yaXR5IHRvIGRlZmF1bHQgdmFsdWUgaWYgbm8gYXV0aG9yaXR5IGlzIHBhc3NlZCB0byB0aGUgYXBpLlxuICAgICAgICAgICAgICAgIGlmICghc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSA9IHJlcXVlc3QuYXV0aG9yaXR5ID8gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShyZXF1ZXN0LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSkgOiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjYWNoZSBtaXNzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogcmVmcmVzaCBhdHRlbXB0IHdpdGggaWZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBBbHJlYWR5IHJlbmV3aW5nIGZvciB0aGlzIHNjb3BlLCBjYWxsYmFjayB3aGVuIHdlIGdldCB0aGUgdG9rZW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlJlbmV3IHRva2VuIGZvciBzY29wZTogXCIgKyBzY29wZSArIFwiIGlzIGluIHByb2dyZXNzLiBSZWdpc3RlcmluZyBjYWxsYmFja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBY3RpdmUgcmVuZXdhbHMgY29udGFpbnMgdGhlIHN0YXRlIGZvciBlYWNoIHJlbmV3YWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV0sIHNjb3BlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3Quc2NvcGVzICYmIHJlcXVlc3Quc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPiAtMSAmJiByZXF1ZXN0LnNjb3Blcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQXBwIHVzZXMgaWRUb2tlbiB0byBzZW5kIHRvIGFwaSBlbmRwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRGVmYXVsdCBzY29wZSBpcyB0cmFja2VkIGFzIGNsaWVudElkIHRvIHN0b3JlIHRoaXMgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJyZW5ld2luZyBpZFRva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5ld0lkVG9rZW4ocmVxdWVzdC5zY29wZXMsIHJlc29sdmUsIHJlamVjdCwgYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5ldyBhY2Nlc3MgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcInJlbmV3aW5nIGFjY2Vzc3Rva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmV3VG9rZW4ocmVxdWVzdC5zY29wZXMsIHJlc29sdmUsIHJlamVjdCwgYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyci50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGFwaUV2ZW50Lndhc1N1Y2Nlc3NmdWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogQXV0aEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVzZXRUZW1wQ2FjaGVJdGVtcyhyZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgICAgICAgICBhcGlFdmVudC5hcGlFcnJvckNvZGUgPSBlcnJvci5lcnJvckNvZGU7XG4gICAgICAgICAgICAgICAgYXBpRXZlbnQud2FzU3VjY2Vzc2Z1bCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbGVtZXRyeU1hbmFnZXIuc3RvcEV2ZW50KGFwaUV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbGVtZXRyeU1hbmFnZXIuZmx1c2gocmVxdWVzdENvcnJlbGF0aW9uSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBQb3B1cCBXaW5kb3cgQ3JlYXRpb25cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKlxuICAgICAqIENvbmZpZ3VyZXMgcG9wdXAgd2luZG93IGZvciBsb2dpbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxOYXZpZ2F0ZVxuICAgICAqIEBwYXJhbSB0aXRsZVxuICAgICAqIEBwYXJhbSBwb3BVcFdpZHRoXG4gICAgICogQHBhcmFtIHBvcFVwSGVpZ2h0XG4gICAgICogQGlnbm9yZVxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIG9wZW5Qb3B1cCh1cmxOYXZpZ2F0ZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBwb3BVcFdpZHRoOiBudW1iZXIsIHBvcFVwSGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogYWRkaW5nIHdpbkxlZnQgYW5kIHdpblRvcCB0byBhY2NvdW50IGZvciBkdWFsIG1vbml0b3JcbiAgICAgICAgICAgICAqIHVzaW5nIHNjcmVlbkxlZnQgYW5kIHNjcmVlblRvcCBmb3IgSUU4IGFuZCBlYXJsaWVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IHdpbkxlZnQgPSB3aW5kb3cuc2NyZWVuTGVmdCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogd2luZG93LnNjcmVlblg7XG4gICAgICAgICAgICBjb25zdCB3aW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wID8gd2luZG93LnNjcmVlblRvcCA6IHdpbmRvdy5zY3JlZW5ZO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiB3aW5kb3cuaW5uZXJXaWR0aCBkaXNwbGF5cyBicm93c2VyIHdpbmRvd1wicyBoZWlnaHQgYW5kIHdpZHRoIGV4Y2x1ZGluZyB0b29sYmFyc1xuICAgICAgICAgICAgICogdXNpbmcgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIGZvciBJRTggYW5kIGVhcmxpZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9ICgod2lkdGggLyAyKSAtIChwb3BVcFdpZHRoIC8gMikpICsgd2luTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9ICgoaGVpZ2h0IC8gMikgLSAocG9wVXBIZWlnaHQgLyAyKSkgKyB3aW5Ub3A7XG5cbiAgICAgICAgICAgIC8vIG9wZW4gdGhlIHdpbmRvd1xuICAgICAgICAgICAgY29uc3QgcG9wdXBXaW5kb3cgPSB3aW5kb3cub3Blbih1cmxOYXZpZ2F0ZSwgdGl0bGUsIFwid2lkdGg9XCIgKyBwb3BVcFdpZHRoICsgXCIsIGhlaWdodD1cIiArIHBvcFVwSGVpZ2h0ICsgXCIsIHRvcD1cIiArIHRvcCArIFwiLCBsZWZ0PVwiICsgbGVmdCk7XG4gICAgICAgICAgICBpZiAoIXBvcHVwV2luZG93KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVBvcHVwV2luZG93RXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3B1cFdpbmRvdy5mb2N1cykge1xuICAgICAgICAgICAgICAgIHBvcHVwV2luZG93LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwb3B1cFdpbmRvdztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJlcnJvciBvcGVuaW5nIHBvcHVwIFwiICsgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLklOVEVSQUNUSU9OX1NUQVRVUyk7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcihlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBJZnJhbWUgTWFuYWdlbWVudFxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENhbGxpbmcgX2xvYWRGcmFtZSBidXQgd2l0aCBhIHRpbWVvdXQgdG8gc2lnbmFsIGZhaWx1cmUgaW4gbG9hZGZyYW1lU3RhdHVzLiBDYWxsYmFja3MgYXJlIGxlZnQuXG4gICAgICogcmVnaXN0ZXJlZCB3aGVuIG5ldHdvcmsgZXJyb3JzIG9jY3VyIGFuZCBzdWJzZXF1ZW50IHRva2VuIHJlcXVlc3RzIGZvciBzYW1lIHJlc291cmNlIGFyZSByZWdpc3RlcmVkIHRvIHRoZSBwZW5kaW5nIHJlcXVlc3QuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByaXZhdGUgYXN5bmMgbG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGU6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLy8gc2V0IGlmcmFtZSBzZXNzaW9uIHRvIHBlbmRpbmdcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRTdGF0ZSA9IHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV07XG4gICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJTZXQgbG9hZGluZyBzdGF0ZSB0byBwZW5kaW5nIGZvcjogXCIgKyBzY29wZSArIFwiOlwiICsgZXhwZWN0ZWRTdGF0ZSk7XG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLlJFTkVXX1NUQVRVU30ke0NvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlcn0ke2V4cGVjdGVkU3RhdGV9YCwgQ29uc3RhbnRzLmluUHJvZ3Jlc3MpO1xuXG4gICAgICAgIC8vIHJlbmRlciB0aGUgaWZyYW1lIHN5bmNocm9ub3VzbHkgaWYgYXBwIGNob29zZXMgbm8gdGltZW91dCwgZWxzZSB3YWl0IGZvciB0aGUgc2V0IHRpbWVyIHRvIGV4cGlyZVxuICAgICAgICBjb25zdCBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50ID0gdGhpcy5jb25maWcuc3lzdGVtLm5hdmlnYXRlRnJhbWVXYWl0ID9cbiAgICAgICAgICAgIGF3YWl0IFdpbmRvd1V0aWxzLmxvYWRGcmFtZSh1cmxOYXZpZ2F0ZSwgZnJhbWVOYW1lLCB0aGlzLmNvbmZpZy5zeXN0ZW0ubmF2aWdhdGVGcmFtZVdhaXQsIHRoaXMubG9nZ2VyKTpcbiAgICAgICAgICAgIFdpbmRvd1V0aWxzLmxvYWRGcmFtZVN5bmModXJsTmF2aWdhdGUsIGZyYW1lTmFtZSwgdGhpcy5sb2dnZXIpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBoYXNoID0gYXdhaXQgV2luZG93VXRpbHMubW9uaXRvcldpbmRvd0Zvckhhc2goaWZyYW1lLmNvbnRlbnRXaW5kb3csIHRoaXMuY29uZmlnLnN5c3RlbS5sb2FkRnJhbWVUaW1lb3V0LCB1cmxOYXZpZ2F0ZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGlmIChoYXNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvblJlc3BvbnNlKGhhc2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLlJFTkVXX1NUQVRVU30ke0NvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlcn0ke2V4cGVjdGVkU3RhdGV9YCkgPT09IENvbnN0YW50cy5pblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgLy8gZmFpbCB0aGUgaWZyYW1lIHNlc3Npb24gaWYgaXQncyBpbiBwZW5kaW5nIHN0YXRlXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIkxvYWRpbmcgZnJhbWUgaGFzIHRpbWVkIG91dCBhZnRlcjogXCIgKyAodGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQgLyAxMDAwKSArIFwiIHNlY29uZHMgZm9yIHNjb3BlIFwiICsgc2NvcGUgKyBcIjpcIiArIGV4cGVjdGVkU3RhdGUpO1xuICAgICAgICAgICAgICAgIC8vIEVycm9yIGFmdGVyIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBpZiAoZXhwZWN0ZWRTdGF0ZSAmJiB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0obnVsbCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLlJFTkVXX1NUQVRVU30ke0NvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlcn0ke2V4cGVjdGVkU3RhdGV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXaW5kb3dVdGlscy5yZW1vdmVIaWRkZW5JZnJhbWUoaWZyYW1lKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIFdpbmRvd1V0aWxzLnJlbW92ZUhpZGRlbklmcmFtZShpZnJhbWUpO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gR2VuZXJhbCBIZWxwZXJzXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogVXNlZCB0byByZWRpcmVjdCB0aGUgYnJvd3NlciB0byB0aGUgU1RTIGF1dGhvcml6YXRpb24gZW5kcG9pbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsTmF2aWdhdGUgLSBVUkwgb2YgdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIG5hdmlnYXRlV2luZG93KHVybE5hdmlnYXRlOiBzdHJpbmcsIHBvcHVwV2luZG93PzogV2luZG93KSB7XG4gICAgICAgIC8vIE5hdmlnYXRlIGlmIHZhbGlkIFVSTFxuICAgICAgICBpZiAodXJsTmF2aWdhdGUgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkodXJsTmF2aWdhdGUpKSB7XG4gICAgICAgICAgICBjb25zdCBuYXZpZ2F0ZVdpbmRvdzogV2luZG93ID0gcG9wdXBXaW5kb3cgPyBwb3B1cFdpbmRvdyA6IHdpbmRvdztcbiAgICAgICAgICAgIGNvbnN0IGxvZ01lc3NhZ2U6IHN0cmluZyA9IHBvcHVwV2luZG93ID8gXCJOYXZpZ2F0ZWQgUG9wdXAgd2luZG93IHRvOlwiICsgdXJsTmF2aWdhdGUgOiBcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGU7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKGxvZ01lc3NhZ2UpO1xuICAgICAgICAgICAgbmF2aWdhdGVXaW5kb3cubG9jYXRpb24uYXNzaWduKHVybE5hdmlnYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJOYXZpZ2F0ZSB1cmwgaXMgZW1wdHlcIik7XG4gICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiTmF2aWdhdGUgdXJsIGlzIGVtcHR5XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFVzZWQgdG8gYWRkIHRoZSBkZXZlbG9wZXIgcmVxdWVzdGVkIGNhbGxiYWNrIHRvIHRoZSBhcnJheSBvZiBjYWxsYmFja3MgZm9yIHRoZSBzcGVjaWZpZWQgc2NvcGVzLiBUaGUgdXBkYXRlZCBhcnJheSBpcyBzdG9yZWQgb24gdGhlIHdpbmRvdyBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwZWN0ZWRTdGF0ZSAtIFVuaXF1ZSBzdGF0ZSBpZGVudGlmaWVyIChndWlkKS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2NvcGUgLSBEZXZlbG9wZXIgcmVxdWVzdGVkIHBlcm1pc3Npb25zLiBOb3QgYWxsIHNjb3BlcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuIHJldHVybmVkLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgLSBUaGUgcmVzb2x2ZSBmdW5jdGlvbiBvZiB0aGUgcHJvbWlzZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IC0gVGhlIHJlamVjdCBmdW5jdGlvbiBvZiB0aGUgcHJvbWlzZSBvYmplY3QuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByaXZhdGUgcmVnaXN0ZXJDYWxsYmFjayhleHBlY3RlZFN0YXRlOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcsIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIC8vIHRyYWNrIGFjdGl2ZSByZW5ld2Fsc1xuICAgICAgICB3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdID0gZXhwZWN0ZWRTdGF0ZTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIGNhbGxiYWNrcyBtYXBwZWQgYXJyYXlcbiAgICAgICAgaWYgKCF3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0pIHtcbiAgICAgICAgICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGluZGV4aW5nIG9uIHRoZSBjdXJyZW50IHN0YXRlLCBwdXNoIHRoZSBjYWxsYmFjayBwYXJhbXMgdG8gY2FsbGJhY2tzIG1hcHBlZFxuICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0ucHVzaCh7IHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0IH0pO1xuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgaW4gdGhlIGN1cnJlbnQgd2luZG93Pz9cbiAgICAgICAgaWYgKCF3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID0gKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGVycm9yOiBBdXRoRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyByZXNldCBhY3RpdmUgcmVuZXdhbHNcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vIGZvciBhbGwgcHJvbWlzZU1hcHBlZHRvUmVuZXdTdGF0ZXMgZm9yIGEgZ2l2ZW4gJ3N0YXRlJyAtIGNhbGwgdGhlIHJlamVjdC9yZXNvbHZlIHdpdGggZXJyb3IvdG9rZW4gcmVzcGVjdGl2ZWx5XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXVtpXS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXVtpXS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVzZXRUZW1wQ2FjaGVJdGVtcyhleHBlY3RlZFN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiRXJyb3IgYW5kIHJlc3BvbnNlIGFyZSBib3RoIG51bGxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyByZXNldFxuICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBMb2dvdXRcblxuICAgIC8qKlxuICAgICAqIFVzZSB0byBsb2cgb3V0IHRoZSBjdXJyZW50IHVzZXIsIGFuZCByZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgcG9zdExvZ291dFJlZGlyZWN0VXJpLlxuICAgICAqIERlZmF1bHQgYmVoYXZpb3VyIGlzIHRvIHJlZGlyZWN0IHRoZSB1c2VyIHRvIGB3aW5kb3cubG9jYXRpb24uaHJlZmAuXG4gICAgICovXG4gICAgbG9nb3V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gbnVsbDtcbiAgICAgICAgbGV0IGxvZ291dCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKSB7XG4gICAgICAgICAgICBsb2dvdXQgPSBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlLnJlc29sdmVFbmRwb2ludHNBc3luYygpLnRoZW4oYXV0aG9yaXR5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybE5hdmlnYXRlID0gYXV0aG9yaXR5LkVuZFNlc3Npb25FbmRwb2ludFxuICAgICAgICAgICAgICAgID8gYCR7YXV0aG9yaXR5LkVuZFNlc3Npb25FbmRwb2ludH0/JHtsb2dvdXR9YFxuICAgICAgICAgICAgICAgIDogYCR7dGhpcy5hdXRob3JpdHl9b2F1dGgyL3YyLjAvbG9nb3V0PyR7bG9nb3V0fWA7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlV2luZG93KHVybE5hdmlnYXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENsZWFyIGFsbCBhY2Nlc3MgdG9rZW5zIGluIHRoZSBjYWNoZS5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNsZWFyQ2FjaGUoKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbkl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKENvbnN0YW50cy5jbGllbnRJZCwgQ29uc3RhbnRzLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbkl0ZW1zW2ldLmtleSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlc2V0Q2FjaGVJdGVtcygpO1xuICAgICAgICAvLyBzdGF0ZSBub3QgYmVpbmcgc2VudCB3b3VsZCBtZWFuIHRoaXMgY2FsbCBtYXkgbm90IGJlIG5lZWRlZDsgY2hlY2sgbGF0ZXJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJNc2FsQ29va2llKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENsZWFyIGEgZ2l2ZW4gYWNjZXNzIHRva2VuIGZyb20gdGhlIGNhY2hlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGFjY2Vzc1Rva2VuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNsZWFyQ2FjaGVGb3JTY29wZShhY2Nlc3NUb2tlbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnMoQ29uc3RhbnRzLmNsaWVudElkLCBDb25zdGFudHMuaG9tZUFjY291bnRJZGVudGlmaWVyKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGFjY2Vzc1Rva2VuSXRlbXNbaV07XG4gICAgICAgICAgICBpZiAodG9rZW4udmFsdWUuYWNjZXNzVG9rZW4gPT09IGFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShKU09OLnN0cmluZ2lmeSh0b2tlbi5rZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gUmVzcG9uc2VcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICogQ2hlY2tzIGlmIHRoZSByZWRpcmVjdCByZXNwb25zZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBTVFMuIEluIGNhc2Ugb2YgcmVkaXJlY3QsIHRoZSB1cmwgZnJhZ21lbnQgaGFzIGVpdGhlciBpZF90b2tlbiwgYWNjZXNzX3Rva2VuIG9yIGVycm9yLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoIC0gSGFzaCBwYXNzZWQgZnJvbSByZWRpcmVjdCBwYWdlLlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSAtIHRydWUgaWYgcmVzcG9uc2UgY29udGFpbnMgaWRfdG9rZW4sIGFjY2Vzc190b2tlbiBvciBlcnJvciwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlzQ2FsbGJhY2soaGFzaDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJpc0NhbGxiYWNrIHdpbGwgYmUgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiB1cmxDb250YWluc0hhc2ggaW4gTVNBTC5qcyB2Mi4wLlwiKTtcbiAgICAgICAgcmV0dXJuIFVybFV0aWxzLnVybENvbnRhaW5zSGFzaChoYXNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogVXNlZCB0byBjYWxsIHRoZSBjb25zdHJ1Y3RvciBjYWxsYmFjayB3aXRoIHRoZSB0b2tlbi9lcnJvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaD13aW5kb3cubG9jYXRpb24uaGFzaF0gLSBIYXNoIGZyYWdtZW50IG9mIFVybC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHByb2Nlc3NDYWxsQmFjayhoYXNoOiBzdHJpbmcsIHN0YXRlSW5mbzogUmVzcG9uc2VTdGF0ZUluZm8sIHBhcmVudENhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlByb2Nlc3NpbmcgdGhlIGNhbGxiYWNrIGZyb20gcmVkaXJlY3QgcmVzcG9uc2VcIik7XG4gICAgICAgIC8vIGdldCB0aGUgc3RhdGUgaW5mbyBmcm9tIHRoZSBoYXNoXG4gICAgICAgIGlmICghc3RhdGVJbmZvKSB7XG4gICAgICAgICAgICBzdGF0ZUluZm8gPSB0aGlzLmdldFJlc3BvbnNlU3RhdGUoaGFzaCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzcG9uc2UgOiBBdXRoUmVzcG9uc2U7XG4gICAgICAgIGxldCBhdXRoRXJyIDogQXV0aEVycm9yO1xuICAgICAgICAvLyBTYXZlIHRoZSB0b2tlbiBpbmZvIGZyb20gdGhlIGhhc2hcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zYXZlVG9rZW5Gcm9tSGFzaChoYXNoLCBzdGF0ZUluZm8pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGF1dGhFcnIgPSBlcnI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgaGFzaCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5VUkxfSEFTSCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBjb29raWUgaW4gdGhlIGhhc2hcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLmNsZWFyTXNhbENvb2tpZShzdGF0ZUluZm8uc3RhdGUpO1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudFN0YXRlOiBzdHJpbmcgPSB0aGlzLmdldEFjY291bnRTdGF0ZShzdGF0ZUluZm8uc3RhdGUpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5yZW5ld1Rva2VuKSB8fCByZXNwb25zZS5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiV2luZG93IGlzIGluIGlmcmFtZSwgYWNxdWlyaW5nIHRva2VuIHNpbGVudGx5XCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcImFjcXVpcmluZyB0b2tlbiBpbnRlcmFjdGl2ZSBpbiBwcm9ncmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS50b2tlblR5cGUgPSBTZXJ2ZXJIYXNoUGFyYW1LZXlzLkFDQ0VTU19UT0tFTjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMubG9naW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudG9rZW5UeXBlID0gU2VydmVySGFzaFBhcmFtS2V5cy5JRF9UT0tFTjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUhhbmRsZXIoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFwYXJlbnRDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlc2V0VGVtcENhY2hlSXRlbXMoc3RhdGVJbmZvLnN0YXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhFcnJvckhhbmRsZXIoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0LCBhdXRoRXJyLCBidWlsZFJlc3BvbnNlU3RhdGVPbmx5KGFjY291bnRTdGF0ZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2socmVzcG9uc2UsIGF1dGhFcnIpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiRXJyb3Igb2NjdXJyZWQgaW4gdG9rZW4gcmVjZWl2ZWQgY2FsbGJhY2sgZnVuY3Rpb246IFwiICsgZXJyKTtcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVFcnJvckluQ2FsbGJhY2tGdW5jdGlvbihlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogVGhpcyBtZXRob2QgbXVzdCBiZSBjYWxsZWQgZm9yIHByb2Nlc3NpbmcgdGhlIHJlc3BvbnNlIHJlY2VpdmVkIGZyb20gdGhlIFNUUy4gSXQgZXh0cmFjdHMgdGhlIGhhc2gsIHByb2Nlc3NlcyB0aGUgdG9rZW4gb3IgZXJyb3IgaW5mb3JtYXRpb24gYW5kIHNhdmVzIGl0IGluIHRoZSBjYWNoZS4gSXQgdGhlblxuICAgICAqIGNhbGxzIHRoZSByZWdpc3RlcmVkIGNhbGxiYWNrcyBpbiBjYXNlIG9mIHJlZGlyZWN0IG9yIHJlc29sdmVzIHRoZSBwcm9taXNlcyB3aXRoIHRoZSByZXN1bHQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoPXdpbmRvdy5sb2NhdGlvbi5oYXNoXSAtIEhhc2ggZnJhZ21lbnQgb2YgVXJsLlxuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlQXV0aGVudGljYXRpb25SZXNwb25zZShoYXNoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgLy8gcmV0cmlldmUgdGhlIGhhc2hcbiAgICAgICAgY29uc3QgbG9jYXRpb25IYXNoID0gaGFzaCB8fCB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBmbG93IGlzIHBvcHVwIG9yIGhpZGRlbiBpZnJhbWVcbiAgICAgICAgY29uc3QgaWZyYW1lV2l0aEhhc2ggPSBXaW5kb3dVdGlscy5nZXRJZnJhbWVXaXRoSGFzaChsb2NhdGlvbkhhc2gpO1xuICAgICAgICBjb25zdCBwb3BVcFdpdGhIYXNoID0gV2luZG93VXRpbHMuZ2V0UG9wVXBXaXRoSGFzaChsb2NhdGlvbkhhc2gpO1xuICAgICAgICBjb25zdCBpc1BvcHVwT3JJZnJhbWUgPSAhIShpZnJhbWVXaXRoSGFzaCB8fCBwb3BVcFdpdGhIYXNoKTtcblxuICAgICAgICAvLyBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93KSwgYnkgdXNpbmcgc2VsZiwgd2luZG93LnBhcmVudCBiZWNvbWVzIGVxdWFsIHRvIHdpbmRvdyBpbiBnZXRSZXNwb25zZVN0YXRlIG1ldGhvZCBzcGVjaWZpY2FsbHlcbiAgICAgICAgY29uc3Qgc3RhdGVJbmZvID0gdGhpcy5nZXRSZXNwb25zZVN0YXRlKGxvY2F0aW9uSGFzaCk7XG5cbiAgICAgICAgbGV0IHRva2VuUmVzcG9uc2VDYWxsYmFjazogKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGVycm9yOiBBdXRoRXJyb3IpID0+IHZvaWQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJSZXR1cm5lZCBmcm9tIHJlZGlyZWN0IHVybFwiKTtcbiAgICAgICAgLy8gSWYgcGFyZW50IHdpbmRvdyBpcyB0aGUgbXNhbCBpbnN0YW5jZSB3aGljaCBvcGVuZWQgdGhlIGN1cnJlbnQgd2luZG93IChpZnJhbWUpXG4gICAgICAgIGlmIChpc1BvcHVwT3JJZnJhbWUpIHtcbiAgICAgICAgICAgIHRva2VuUmVzcG9uc2VDYWxsYmFjayA9IHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbc3RhdGVJbmZvLnN0YXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlZGlyZWN0IGNhc2VzXG4gICAgICAgICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgLy8gaWYgc2V0IHRvIG5hdmlnYXRlIHRvIGxvZ2luUmVxdWVzdCBwYWdlIHBvc3QgbG9naW5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hdXRoLm5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5VUkxfSEFTSCwgbG9jYXRpb25IYXNoKTtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LnBhcmVudCA9PT0gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVxdWVzdFVybCA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLkxPR0lOX1JFUVVFU1R9JHtDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXJ9JHtzdGF0ZUluZm8uc3RhdGV9YCwgdGhpcy5pbkNvb2tpZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gaG9tZSBwYWdlIGlmIGxvZ2luIHJlcXVlc3QgdXJsIGlzIG51bGwgKHJlYWwgbnVsbCBvciB0aGUgc3RyaW5nIG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9naW5SZXF1ZXN0VXJsIHx8IGxvZ2luUmVxdWVzdFVybCA9PT0gXCJudWxsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiVW5hYmxlIHRvIGdldCB2YWxpZCBsb2dpbiByZXF1ZXN0IHVybCBmcm9tIGNhY2hlLCByZWRpcmVjdGluZyB0byBob21lIHBhZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2dpblJlcXVlc3RVcmw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSByZWFjaGVkIHRoaXMgcG9pbnQgdG9vIGVhcmx5IC0gY2FjaGUgaGFzaCwgcmV0dXJuIGFuZCBwcm9jZXNzIGluIGhhbmRsZVJlZGlyZWN0Q2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShUZW1wb3JhcnlDYWNoZUtleXMuVVJMX0hBU0gsIGxvY2F0aW9uSGFzaCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzQ2FsbEJhY2sobG9jYXRpb25IYXNoLCBzdGF0ZUluZm8sIHRva2VuUmVzcG9uc2VDYWxsYmFjayk7XG5cbiAgICAgICAgLy8gSWYgY3VycmVudCB3aW5kb3cgaXMgb3BlbmVyLCBjbG9zZSBhbGwgd2luZG93c1xuICAgICAgICBpZiAoaXNQb3B1cE9ySWZyYW1lKSB7XG4gICAgICAgICAgICBXaW5kb3dVdGlscy5jbG9zZVBvcHVwcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENyZWF0ZXMgYSBzdGF0ZUluZm8gb2JqZWN0IGZyb20gdGhlIFVSTCBmcmFnbWVudCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaCAgLSAgSGFzaCBwYXNzZWQgZnJvbSByZWRpcmVjdCBwYWdlXG4gICAgICogQHJldHVybnMge1Rva2VuUmVzcG9uc2V9IGFuIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFEIGNvbXByaXNpbmcgb2YgdGhlIGtleXMgLSBwYXJhbWV0ZXJzLCByZXF1ZXN0VHlwZSwgc3RhdGVNYXRjaCwgc3RhdGVSZXNwb25zZSBhbmQgdmFsaWQuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRSZXNwb25zZVN0YXRlKGhhc2g6IHN0cmluZyk6IFJlc3BvbnNlU3RhdGVJbmZvIHtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IFVybFV0aWxzLmRlc2VyaWFsaXplSGFzaChoYXNoKTtcbiAgICAgICAgbGV0IHN0YXRlUmVzcG9uc2U6IFJlc3BvbnNlU3RhdGVJbmZvO1xuICAgICAgICBpZiAoIXBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJIYXNoIHdhcyBub3QgcGFyc2VkIGNvcnJlY3RseS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSkge1xuICAgICAgICAgICAgc3RhdGVSZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0VHlwZTogQ29uc3RhbnRzLnVua25vd24sXG4gICAgICAgICAgICAgICAgc3RhdGU6IHBhcmFtZXRlcnMuc3RhdGUsXG4gICAgICAgICAgICAgICAgc3RhdGVNYXRjaDogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiSGFzaCBkb2VzIG5vdCBjb250YWluIHN0YXRlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICAgKiBhc3luYyBjYWxscyBjYW4gZmlyZSBpZnJhbWUgYW5kIGxvZ2luIHJlcXVlc3QgYXQgdGhlIHNhbWUgdGltZSBpZiBkZXZlbG9wZXIgZG9lcyBub3QgdXNlIHRoZSBBUEkgYXMgZXhwZWN0ZWRcbiAgICAgICAgICogaW5jb21pbmcgY2FsbGJhY2sgbmVlZHMgdG8gYmUgbG9va2VkIHVwIHRvIGZpbmQgdGhlIHJlcXVlc3QgdHlwZVxuICAgICAgICAgKi9cblxuICAgICAgICAvLyBsb2dpblJlZGlyZWN0XG4gICAgICAgIGlmIChzdGF0ZVJlc3BvbnNlLnN0YXRlID09PSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKGAke1RlbXBvcmFyeUNhY2hlS2V5cy5TVEFURV9MT0dJTn0ke0NvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlcn0ke3N0YXRlUmVzcG9uc2Uuc3RhdGV9YCwgdGhpcy5pbkNvb2tpZSkgfHwgc3RhdGVSZXNwb25zZS5zdGF0ZSA9PT0gdGhpcy5zaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlKSB7IC8vIGxvZ2luUmVkaXJlY3RcbiAgICAgICAgICAgIHN0YXRlUmVzcG9uc2UucmVxdWVzdFR5cGUgPSBDb25zdGFudHMubG9naW47XG4gICAgICAgICAgICBzdGF0ZVJlc3BvbnNlLnN0YXRlTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlUmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWNxdWlyZVRva2VuUmVkaXJlY3RcbiAgICAgICAgZWxzZSBpZiAoc3RhdGVSZXNwb25zZS5zdGF0ZSA9PT0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShgJHtUZW1wb3JhcnlDYWNoZUtleXMuU1RBVEVfQUNRX1RPS0VOfSR7Q29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyfSR7c3RhdGVSZXNwb25zZS5zdGF0ZX1gLCB0aGlzLmluQ29va2llKSkgeyAvLyBhY3F1aXJlVG9rZW5SZWRpcmVjdFxuICAgICAgICAgICAgc3RhdGVSZXNwb25zZS5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xuICAgICAgICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXh0ZXJuYWwgYXBpIHJlcXVlc3RzIG1heSBoYXZlIG1hbnkgcmVuZXd0b2tlbiByZXF1ZXN0cyBmb3IgZGlmZmVyZW50IHJlc291cmNlXG4gICAgICAgIGlmICghc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoKSB7XG4gICAgICAgICAgICBzdGF0ZVJlc3BvbnNlLnJlcXVlc3RUeXBlID0gd2luZG93LnJlcXVlc3RUeXBlO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVzSW5QYXJlbnRDb250ZXh0ID0gd2luZG93LnJlbmV3U3RhdGVzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXNJblBhcmVudENvbnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzSW5QYXJlbnRDb250ZXh0W2ldID09PSBzdGF0ZVJlc3BvbnNlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlUmVzcG9uc2Uuc3RhdGVNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gVG9rZW4gUHJvY2Vzc2luZyAoRXh0cmFjdCB0byBUb2tlblByb2Nlc3NpbmcudHMpXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogVXNlZCB0byBnZXQgdG9rZW4gZm9yIHRoZSBzcGVjaWZpZWQgc2V0IG9mIHNjb3BlcyBmcm9tIHRoZSBjYWNoZVxuICAgICAqIEBwYXJhbSB7QGxpbmsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnN9IC0gUmVxdWVzdCBzZW50IHRvIHRoZSBTVFMgdG8gb2J0YWluIGFuIGlkX3Rva2VuL2FjY2Vzc190b2tlblxuICAgICAqIEBwYXJhbSB7QWNjb3VudH0gYWNjb3VudCAtIEFjY291bnQgZm9yIHdoaWNoIHRoZSBzY29wZXMgd2VyZSByZXF1ZXN0ZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldENhY2hlZFRva2VuKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMsIGFjY291bnQ6IEFjY291bnQpOiBBdXRoUmVzcG9uc2Uge1xuICAgICAgICBsZXQgYWNjZXNzVG9rZW5DYWNoZUl0ZW06IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gbnVsbDtcbiAgICAgICAgY29uc3Qgc2NvcGVzID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnNjb3BlcztcblxuICAgICAgICAvLyBmaWx0ZXIgYnkgY2xpZW50SWQgYW5kIGFjY291bnRcbiAgICAgICAgY29uc3QgdG9rZW5DYWNoZUl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKHRoaXMuY2xpZW50SWQsIGFjY291bnQgPyBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllciA6IG51bGwpO1xuXG4gICAgICAgIC8vIE5vIG1hdGNoIGZvdW5kIGFmdGVyIGluaXRpYWwgZmlsdGVyaW5nXG4gICAgICAgIGlmICh0b2tlbkNhY2hlSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXM6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiA9IFtdO1xuXG4gICAgICAgIC8vIGlmIG5vIGF1dGhvcml0eSBwYXNzZWRcbiAgICAgICAgaWYgKCFzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICAvLyBmaWx0ZXIgYnkgc2NvcGVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVJdGVtID0gdG9rZW5DYWNoZUl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoU2NvcGVTZXQuY29udGFpbnNTY29wZShjYWNoZWRTY29wZXMsIHNjb3BlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKGNhY2hlSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBvbmx5IG9uZSBjYWNoZWQgdG9rZW4gZm91bmRcbiAgICAgICAgICAgIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gZmlsdGVyZWRJdGVtc1swXTtcbiAgICAgICAgICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBjYWNoZWQgdG9rZW4gaXMgZm91bmRcbiAgICAgICAgICAgIGVsc2UgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIG5vIG1hdGNoIGZvdW5kLCBjaGVjayBpZiB0aGVyZSB3YXMgYSBzaW5nbGUgYXV0aG9yaXR5IHVzZWRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhvcml0eUxpc3QgPSB0aGlzLmdldFVuaXF1ZUF1dGhvcml0eSh0b2tlbkNhY2hlSXRlbXMsIFwiYXV0aG9yaXR5XCIpO1xuICAgICAgICAgICAgICAgIGlmIChhdXRob3JpdHlMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlQXV0aG9yaXRpZXNJbkNhY2hlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSA9IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UoYXV0aG9yaXR5TGlzdFswXSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgYW4gYXV0aG9yaXR5IGlzIHBhc3NlZCBpbiB0aGUgQVBJXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZmlsdGVyIGJ5IGF1dGhvcml0eSBhbmQgc2NvcGVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVJdGVtID0gdG9rZW5DYWNoZUl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoU2NvcGVTZXQuY29udGFpbnNTY29wZShjYWNoZWRTY29wZXMsIHNjb3BlcykgJiYgVXJsVXRpbHMuQ2Fub25pY2FsaXplVXJpKGNhY2hlSXRlbS5rZXkuYXV0aG9yaXR5KSA9PT0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goY2FjaGVJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBubyBtYXRjaFxuICAgICAgICAgICAgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBvbmx5IG9uZSBjYWNoZWRUb2tlbiBGb3VuZFxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IGZpbHRlcmVkSXRlbXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBtb3JlIHRoYW4gb25lIGNhY2hlZCB0b2tlbiBpcyBmb3VuZFxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbkNhY2hlSXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBleHBpcmVkID0gTnVtYmVyKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmV4cGlyZXNJbik7XG4gICAgICAgICAgICAvLyBJZiBleHBpcmF0aW9uIGlzIHdpdGhpbiBvZmZzZXQsIGl0IHdpbGwgZm9yY2UgcmVuZXdcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY29uZmlnLnN5c3RlbS50b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzIHx8IDMwMDtcbiAgICAgICAgICAgIGlmIChleHBpcmVkICYmIChleHBpcmVkID4gVGltZVV0aWxzLm5vdygpICsgb2Zmc2V0KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkVG9rZW5PYmogPSBuZXcgSWRUb2tlbihhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5pZFRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudCA9IHRoaXMuZ2V0QWNjb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJBY2NvdW50IHNob3VsZCBub3QgYmUgbnVsbCBoZXJlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBhU3RhdGUgPSB0aGlzLmdldEFjY291bnRTdGF0ZShzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlIDogQXV0aFJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICB1bmlxdWVJZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50SWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHRva2VuVHlwZTogKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmlkVG9rZW4gPT09IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmFjY2Vzc1Rva2VuKSA/IFNlcnZlckhhc2hQYXJhbUtleXMuSURfVE9LRU4gOiBTZXJ2ZXJIYXNoUGFyYW1LZXlzLkFDQ0VTU19UT0tFTixcbiAgICAgICAgICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbk9iaixcbiAgICAgICAgICAgICAgICAgICAgaWRUb2tlbkNsYWltczogaWRUb2tlbk9iai5jbGFpbXMsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVzOiBhY2Nlc3NUb2tlbkNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlc09uOiBuZXcgRGF0ZShleHBpcmVkICogMTAwMCksXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ6IGFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRTdGF0ZTogYVN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBmcm9tQ2FjaGU6IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFJlc3BvbnNlVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBpZFRva2VuT2JqKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWRJdGVtc1swXS5rZXkpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFVzZWQgdG8gZ2V0IGEgdW5pcXVlIGxpc3Qgb2YgYXV0aG9yaXRpZXMgZnJvbSB0aGUgY2FjaGVcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPn0gIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyAtIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyBzYXZlZCBpbiB0aGUgY2FjaGVcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRVbmlxdWVBdXRob3JpdHkoYWNjZXNzVG9rZW5DYWNoZUl0ZW1zOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4sIHByb3BlcnR5OiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgYXV0aG9yaXR5TGlzdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgICBjb25zdCBmbGFnczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgKGZsYWdzLmluZGV4T2YoZWxlbWVudC5rZXlbcHJvcGVydHldKSA9PT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MucHVzaChlbGVtZW50LmtleVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgIGF1dGhvcml0eUxpc3QucHVzaChlbGVtZW50LmtleVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF1dGhvcml0eUxpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENoZWNrIGlmIEFEQUwgaWRfdG9rZW4gZXhpc3RzIGFuZCByZXR1cm4gaWYgZXhpc3RzLlxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSBleHRyYWN0QURBTElkVG9rZW4oKTogYW55IHtcbiAgICAgICAgY29uc3QgYWRhbElkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hZGFsSWRUb2tlbik7XG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShhZGFsSWRUb2tlbikpIHtcbiAgICAgICAgICAgIHJldHVybiBUb2tlblV0aWxzLmV4dHJhY3RJZFRva2VuKGFkYWxJZFRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQWNxdWlyZXMgYWNjZXNzIHRva2VuIHVzaW5nIGEgaGlkZGVuIGlmcmFtZS5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW5ld1Rva2VuKHNjb3BlczogQXJyYXk8c3RyaW5nPiwgcmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24sIGFjY291bnQ6IEFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcInJlbmV3VG9rZW4gaXMgY2FsbGVkIGZvciBzY29wZTpcIiArIHNjb3BlKTtcblxuICAgICAgICBjb25zdCBmcmFtZU5hbWUgPSBgbXNhbFJlbmV3RnJhbWUke3Njb3BlfWA7XG4gICAgICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gV2luZG93VXRpbHMuYWRkSGlkZGVuSUZyYW1lKGZyYW1lTmFtZSwgdGhpcy5sb2dnZXIpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyB0b2tlbiBFeHBlY3RlZCBzdGF0ZTogXCIgKyBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xuXG4gICAgICAgIC8vIEJ1aWxkIHVybE5hdmlnYXRlIHdpdGggXCJwcm9tcHQ9bm9uZVwiIGFuZCBuYXZpZ2F0ZSB0byBVUkwgaW4gaGlkZGVuIGlGcmFtZVxuICAgICAgICBjb25zdCB1cmxOYXZpZ2F0ZSA9IFVybFV0aWxzLnVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKFVybFV0aWxzLmNyZWF0ZU5hdmlnYXRlVXJsKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCksIENvbnN0YW50cy5wcm9tcHQpICsgQ29uc3RhbnRzLnByb21wdF9ub25lICsgQ29uc3RhbnRzLnJlc3BvbnNlX21vZGVfZnJhZ21lbnQ7XG5cbiAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLnJlbmV3VG9rZW47XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHNjb3BlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiTmF2aWdhdGUgdG86XCIgKyB1cmxOYXZpZ2F0ZSk7XG4gICAgICAgIGZyYW1lSGFuZGxlLnNyYyA9IFwiYWJvdXQ6YmxhbmtcIjtcbiAgICAgICAgdGhpcy5sb2FkSWZyYW1lVGltZW91dCh1cmxOYXZpZ2F0ZSwgZnJhbWVOYW1lLCBzY29wZSkuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFJlbmV3cyBpZHRva2VuIGZvciBhcHAncyBvd24gYmFja2VuZCB3aGVuIGNsaWVudElkIGlzIHBhc3NlZCBhcyBhIHNpbmdsZSBzY29wZSBpbiB0aGUgc2NvcGVzIGFycmF5LlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbmV3SWRUb2tlbihzY29wZXM6IEFycmF5PHN0cmluZz4sIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCBhY2NvdW50OiBBY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJyZW5ld2lkVG9rZW4gaXMgY2FsbGVkXCIpO1xuICAgICAgICBjb25zdCBmcmFtZU5hbWUgPSBcIm1zYWxJZFRva2VuRnJhbWVcIjtcbiAgICAgICAgY29uc3QgZnJhbWVIYW5kbGUgPSBXaW5kb3dVdGlscy5hZGRIaWRkZW5JRnJhbWUoZnJhbWVOYW1lLCB0aGlzLmxvZ2dlcik7XG5cbiAgICAgICAgdGhpcy51cGRhdGVDYWNoZUVudHJpZXMoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhY2NvdW50KTtcblxuICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiUmVuZXcgSWR0b2tlbiBFeHBlY3RlZCBzdGF0ZTogXCIgKyBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xuXG4gICAgICAgIC8vIEJ1aWxkIHVybE5hdmlnYXRlIHdpdGggXCJwcm9tcHQ9bm9uZVwiIGFuZCBuYXZpZ2F0ZSB0byBVUkwgaW4gaGlkZGVuIGlGcmFtZVxuICAgICAgICBjb25zdCB1cmxOYXZpZ2F0ZSA9IFVybFV0aWxzLnVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKFVybFV0aWxzLmNyZWF0ZU5hdmlnYXRlVXJsKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCksIENvbnN0YW50cy5wcm9tcHQpICsgQ29uc3RhbnRzLnByb21wdF9ub25lICsgQ29uc3RhbnRzLnJlc3BvbnNlX21vZGVfZnJhZ21lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc2lsZW50TG9naW4pIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5sb2dpbjtcbiAgICAgICAgICAgIHRoaXMuc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZSA9IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xuICAgICAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdGU6IHNjb3BlIGhlcmUgaXMgY2xpZW50SWRcbiAgICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgdGhpcy5jbGllbnRJZCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGUpO1xuICAgICAgICBmcmFtZUhhbmRsZS5zcmMgPSBcImFib3V0OmJsYW5rXCI7XG4gICAgICAgIHRoaXMubG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGUsIGZyYW1lTmFtZSwgdGhpcy5jbGllbnRJZCkuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgbXVzdCBiZSBjYWxsZWQgZm9yIHByb2Nlc3NpbmcgdGhlIHJlc3BvbnNlIHJlY2VpdmVkIGZyb20gQUFELiBJdCBleHRyYWN0cyB0aGUgaGFzaCwgcHJvY2Vzc2VzIHRoZSB0b2tlbiBvciBlcnJvciwgc2F2ZXMgaXQgaW4gdGhlIGNhY2hlIGFuZCBjYWxscyB0aGUgcmVnaXN0ZXJlZCBjYWxsYmFja3Mgd2l0aCB0aGUgcmVzdWx0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdXRob3JpdHkgYXV0aG9yaXR5IHJlY2VpdmVkIGluIHRoZSByZWRpcmVjdCByZXNwb25zZSBmcm9tIEFBRC5cbiAgICAgKiBAcGFyYW0ge1Rva2VuUmVzcG9uc2V9IHJlcXVlc3RJbmZvIGFuIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFEIGNvbXByaXNpbmcgb2YgdGhlIGtleXMgLSBwYXJhbWV0ZXJzLCByZXF1ZXN0VHlwZSwgc3RhdGVNYXRjaCwgc3RhdGVSZXNwb25zZSBhbmQgdmFsaWQuXG4gICAgICogQHBhcmFtIHtBY2NvdW50fSBhY2NvdW50IGFjY291bnQgb2JqZWN0IGZvciB3aGljaCBzY29wZXMgYXJlIGNvbnNlbnRlZCBmb3IuIFRoZSBkZWZhdWx0IGFjY291bnQgaXMgdGhlIGxvZ2dlZCBpbiBhY2NvdW50LlxuICAgICAqIEBwYXJhbSB7Q2xpZW50SW5mb30gY2xpZW50SW5mbyBjbGllbnRJbmZvIHJlY2VpdmVkIGFzIHBhcnQgb2YgdGhlIHJlc3BvbnNlIGNvbXByaXNpbmcgb2YgZmllbGRzIHVpZCBhbmQgdXRpZC5cbiAgICAgKiBAcGFyYW0ge0lkVG9rZW59IGlkVG9rZW4gaWRUb2tlbiByZWNlaXZlZCBhcyBwYXJ0IG9mIHRoZSByZXNwb25zZS5cbiAgICAgKiBAaWdub3JlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgIHByaXZhdGUgc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGF1dGhvcml0eTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGNsaWVudEluZm86IHN0cmluZywgaWRUb2tlbk9iajogSWRUb2tlbik6IEF1dGhSZXNwb25zZSB7XG4gICAgICAgIGxldCBzY29wZTogc3RyaW5nO1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlblJlc3BvbnNlID0geyAuLi5yZXNwb25zZSB9O1xuICAgICAgICBjb25zdCBjbGllbnRPYmo6IENsaWVudEluZm8gPSBuZXcgQ2xpZW50SW5mbyhjbGllbnRJbmZvKTtcbiAgICAgICAgbGV0IGV4cGlyYXRpb246IG51bWJlcjtcblxuICAgICAgICAvLyBpZiB0aGUgcmVzcG9uc2UgY29udGFpbnMgXCJzY29wZVwiXG4gICAgICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KFNlcnZlckhhc2hQYXJhbUtleXMuU0NPUEUpKSB7XG4gICAgICAgICAgICAvLyByZWFkIHRoZSBzY29wZXNcbiAgICAgICAgICAgIHNjb3BlID0gcGFyYW1ldGVyc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLlNDT1BFXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnNlbnRlZFNjb3BlcyA9IHNjb3BlLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICAgICAgLy8gcmV0cmlldmUgYWxsIGFjY2VzcyB0b2tlbnMgZnJvbSB0aGUgY2FjaGUsIHJlbW92ZSB0aGUgZHVwIHNjb3Jlc1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKHRoaXMuY2xpZW50SWQsIGF1dGhvcml0eSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBhY2Nlc3NUb2tlbkNhY2hlSXRlbXNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LmhvbWVBY2NvdW50SWRlbnRpZmllciA9PT0gcmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkU2NvcGVzID0gYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChTY29wZVNldC5pc0ludGVyc2VjdGluZ1Njb3BlcyhjYWNoZWRTY29wZXMsIGNvbnNlbnRlZFNjb3BlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGFuZCBjYWNoZSBhY2Nlc3NUb2tlbktleSBhbmQgYWNjZXNzVG9rZW5WYWx1ZVxuICAgICAgICAgICAgY29uc3QgZXhwaXJlc0luID0gVGltZVV0aWxzLnBhcnNlRXhwaXJlc0luKHBhcmFtZXRlcnNbU2VydmVySGFzaFBhcmFtS2V5cy5FWFBJUkVTX0lOXSk7XG4gICAgICAgICAgICBleHBpcmF0aW9uID0gVGltZVV0aWxzLm5vdygpICsgZXhwaXJlc0luO1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5LZXkgPSBuZXcgQWNjZXNzVG9rZW5LZXkoYXV0aG9yaXR5LCB0aGlzLmNsaWVudElkLCBzY29wZSwgY2xpZW50T2JqLnVpZCwgY2xpZW50T2JqLnV0aWQpO1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5WYWx1ZSA9IG5ldyBBY2Nlc3NUb2tlblZhbHVlKHBhcmFtZXRlcnNbU2VydmVySGFzaFBhcmFtS2V5cy5BQ0NFU1NfVE9LRU5dLCBpZFRva2VuT2JqLnJhd0lkVG9rZW4sIGV4cGlyYXRpb24udG9TdHJpbmcoKSwgY2xpZW50SW5mbyk7XG5cbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5LZXkpLCBKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlblZhbHVlKSk7XG5cbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuUmVzcG9uc2UuYWNjZXNzVG9rZW4gID0gcGFyYW1ldGVyc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLkFDQ0VTU19UT0tFTl07XG4gICAgICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLnNjb3BlcyA9IGNvbnNlbnRlZFNjb3BlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgcmVzcG9uc2UgZG9lcyBub3QgY29udGFpbiBcInNjb3BlXCIgLSBzY29wZSBpcyB1c3VhbGx5IGNsaWVudF9pZCBhbmQgdGhlIHRva2VuIHdpbGwgYmUgaWRfdG9rZW5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY29wZSA9IHRoaXMuY2xpZW50SWQ7XG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGFuZCBjYWNoZSBhY2Nlc3NUb2tlbktleSBhbmQgYWNjZXNzVG9rZW5WYWx1ZVxuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5LZXkgPSBuZXcgQWNjZXNzVG9rZW5LZXkoYXV0aG9yaXR5LCB0aGlzLmNsaWVudElkLCBzY29wZSwgY2xpZW50T2JqLnVpZCwgY2xpZW50T2JqLnV0aWQpO1xuICAgICAgICAgICAgZXhwaXJhdGlvbiA9IE51bWJlcihpZFRva2VuT2JqLmV4cGlyYXRpb24pO1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5WYWx1ZSA9IG5ldyBBY2Nlc3NUb2tlblZhbHVlKHBhcmFtZXRlcnNbU2VydmVySGFzaFBhcmFtS2V5cy5JRF9UT0tFTl0sIHBhcmFtZXRlcnNbU2VydmVySGFzaFBhcmFtS2V5cy5JRF9UT0tFTl0sIGV4cGlyYXRpb24udG9TdHJpbmcoKSwgY2xpZW50SW5mbyk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuS2V5KSwgSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5WYWx1ZSkpO1xuICAgICAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5zY29wZXMgPSBbc2NvcGVdO1xuICAgICAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5hY2Nlc3NUb2tlbiA9IHBhcmFtZXRlcnNbU2VydmVySGFzaFBhcmFtS2V5cy5JRF9UT0tFTl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhwaXJhdGlvbikge1xuICAgICAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5leHBpcmVzT24gPSBuZXcgRGF0ZShleHBpcmF0aW9uICogMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkNvdWxkIG5vdCBwYXJzZSBleHBpcmVzSW4gcGFyYW1ldGVyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuUmVzcG9uc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFNhdmVzIHRva2VuIG9yIGVycm9yIHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIEFBRCBpbiB0aGUgY2FjaGUuIEluIGNhc2Ugb2YgaWRfdG9rZW4sIGl0IGFsc28gY3JlYXRlcyB0aGUgYWNjb3VudCBvYmplY3QuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzYXZlVG9rZW5Gcm9tSGFzaChoYXNoOiBzdHJpbmcsIHN0YXRlSW5mbzogUmVzcG9uc2VTdGF0ZUluZm8pOiBBdXRoUmVzcG9uc2Uge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU3RhdGUgc3RhdHVzOlwiICsgc3RhdGVJbmZvLnN0YXRlTWF0Y2ggKyBcIjsgUmVxdWVzdCB0eXBlOlwiICsgc3RhdGVJbmZvLnJlcXVlc3RUeXBlKTtcblxuICAgICAgICBsZXQgcmVzcG9uc2UgOiBBdXRoUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICB1bmlxdWVJZDogXCJcIixcbiAgICAgICAgICAgIHRlbmFudElkOiBcIlwiLFxuICAgICAgICAgICAgdG9rZW5UeXBlOiBcIlwiLFxuICAgICAgICAgICAgaWRUb2tlbjogbnVsbCxcbiAgICAgICAgICAgIGlkVG9rZW5DbGFpbXM6IG51bGwsXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcbiAgICAgICAgICAgIHNjb3BlczogW10sXG4gICAgICAgICAgICBleHBpcmVzT246IG51bGwsXG4gICAgICAgICAgICBhY2NvdW50OiBudWxsLFxuICAgICAgICAgICAgYWNjb3VudFN0YXRlOiBcIlwiLFxuICAgICAgICAgICAgZnJvbUNhY2hlOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBlcnJvcjogQXV0aEVycm9yO1xuICAgICAgICBjb25zdCBoYXNoUGFyYW1zID0gVXJsVXRpbHMuZGVzZXJpYWxpemVIYXNoKGhhc2gpO1xuICAgICAgICBsZXQgYXV0aG9yaXR5S2V5OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBsZXQgYWNxdWlyZVRva2VuQWNjb3VudEtleTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgbGV0IGlkVG9rZW5PYmo6IElkVG9rZW4gPSBudWxsO1xuXG4gICAgICAgIC8vIElmIHNlcnZlciByZXR1cm5zIGFuIGVycm9yXG4gICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KFNlcnZlckhhc2hQYXJhbUtleXMuRVJST1JfREVTQ1JJUFRJT04pIHx8IGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoU2VydmVySGFzaFBhcmFtS2V5cy5FUlJPUikpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoXCJFcnJvciA6XCIgKyBoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuRVJST1JdICsgXCI7IEVycm9yIGRlc2NyaXB0aW9uOlwiICsgaGFzaFBhcmFtc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLkVSUk9SX0RFU0NSSVBUSU9OXSk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEVycm9yQ2FjaGVLZXlzLkVSUk9SLCBoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuRVJST1JdKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oRXJyb3JDYWNoZUtleXMuRVJST1JfREVTQywgaGFzaFBhcmFtc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLkVSUk9SX0RFU0NSSVBUSU9OXSk7XG5cbiAgICAgICAgICAgIC8vIGxvZ2luXG4gICAgICAgICAgICBpZiAoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMubG9naW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEVycm9yQ2FjaGVLZXlzLkxPR0lOX0VSUk9SLCBoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuRVJST1JfREVTQ1JJUFRJT05dICsgXCI6XCIgKyBoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuRVJST1JdKTtcbiAgICAgICAgICAgICAgICBhdXRob3JpdHlLZXkgPSBBdXRoQ2FjaGUuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGVJbmZvLnN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWNxdWlyZVRva2VuXG4gICAgICAgICAgICBpZiAoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMucmVuZXdUb2tlbikge1xuICAgICAgICAgICAgICAgIGF1dGhvcml0eUtleSA9IEF1dGhDYWNoZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZUluZm8uc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IHRoaXMuZ2V0QWNjb3VudCgpO1xuICAgICAgICAgICAgICAgIGxldCBhY2NvdW50SWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWNjb3VudCAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkID0gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQgPSBDb25zdGFudHMubm9fYWNjb3VudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gQXV0aENhY2hlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50SWQsIHN0YXRlSW5mby5zdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBbU2VydmVySGFzaFBhcmFtS2V5cy5FUlJPUl06IGhhc2hFcnIsXG4gICAgICAgICAgICAgICAgW1NlcnZlckhhc2hQYXJhbUtleXMuRVJST1JfREVTQ1JJUFRJT05dOiBoYXNoRXJyRGVzY1xuICAgICAgICAgICAgfSA9IGhhc2hQYXJhbXM7XG4gICAgICAgICAgICBpZiAoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5pc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvcihoYXNoRXJyKSB8fFxuICAgICAgICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLmlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yKGhhc2hFcnJEZXNjKSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoaGFzaFBhcmFtc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLkVSUk9SXSwgaGFzaFBhcmFtc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLkVSUk9SX0RFU0NSSVBUSU9OXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IFNlcnZlckVycm9yKGhhc2hQYXJhbXNbU2VydmVySGFzaFBhcmFtS2V5cy5FUlJPUl0sIGhhc2hQYXJhbXNbU2VydmVySGFzaFBhcmFtS2V5cy5FUlJPUl9ERVNDUklQVElPTl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBzZXJ2ZXIgcmV0dXJucyBcIlN1Y2Nlc3NcIlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFZlcmlmeSB0aGUgc3RhdGUgZnJvbSByZWRpcmVjdCBhbmQgcmVjb3JkIHRva2VucyB0byBzdG9yYWdlIGlmIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHN0YXRlSW5mby5zdGF0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlN0YXRlIGlzIHJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KFNlcnZlckhhc2hQYXJhbUtleXMuU0VTU0lPTl9TVEFURSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShgJHtUZW1wb3JhcnlDYWNoZUtleXMuU0VTU0lPTl9TVEFURX0ke0NvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlcn0ke3N0YXRlSW5mby5zdGF0ZX1gLCBoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuU0VTU0lPTl9TVEFURV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNwb25zZS5hY2NvdW50U3RhdGUgPSB0aGlzLmdldEFjY291bnRTdGF0ZShzdGF0ZUluZm8uc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudEluZm86IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIGFjY2Vzc190b2tlblxuICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KFNlcnZlckhhc2hQYXJhbUtleXMuQUNDRVNTX1RPS0VOKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiRnJhZ21lbnQgaGFzIGFjY2VzcyB0b2tlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYWNjZXNzVG9rZW4gPSBoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuQUNDRVNTX1RPS0VOXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShTZXJ2ZXJIYXNoUGFyYW1LZXlzLlNDT1BFKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2NvcGVzID0gaGFzaFBhcmFtc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLlNDT1BFXS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyByZXRyaWV2ZSB0aGUgaWRfdG9rZW4gZnJvbSByZXNwb25zZSBpZiBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KFNlcnZlckhhc2hQYXJhbUtleXMuSURfVE9LRU4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRva2VuT2JqID0gbmV3IElkVG9rZW4oaGFzaFBhcmFtc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLklEX1RPS0VOXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5pZFRva2VuID0gaWRUb2tlbk9iajtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmlkVG9rZW5DbGFpbXMgPSBpZFRva2VuT2JqLmNsYWltcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkVG9rZW5PYmogPSBuZXcgSWRUb2tlbih0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKFBlcnNpc3RlbnRDYWNoZUtleXMuSURUT0tFTikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBSZXNwb25zZVV0aWxzLnNldFJlc3BvbnNlSWRUb2tlbihyZXNwb25zZSwgaWRUb2tlbk9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgYXV0aG9yaXR5XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhvcml0eTogc3RyaW5nID0gdGhpcy5wb3B1bGF0ZUF1dGhvcml0eShzdGF0ZUluZm8uc3RhdGUsIHRoaXMuaW5Db29raWUsIHRoaXMuY2FjaGVTdG9yYWdlLCBpZFRva2VuT2JqKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZXRyaWV2ZSBjbGllbnRfaW5mbyAtIGlmIGl0IGlzIG5vdCBmb3VuZCwgZ2VuZXJhdGUgdGhlIHVpZCBhbmQgdXRpZCBmcm9tIGlkVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoU2VydmVySGFzaFBhcmFtS2V5cy5DTElFTlRfSU5GTykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudEluZm8gPSBoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuQ0xJRU5UX0lORk9dO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcIkNsaWVudEluZm8gbm90IHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIEFBRFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IoXCJDbGllbnRJbmZvIG5vdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChpZFRva2VuT2JqLCBuZXcgQ2xpZW50SW5mbyhjbGllbnRJbmZvKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRLZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFjY291bnQgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkocmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50S2V5ID0gcmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50S2V5ID0gQ29uc3RhbnRzLm5vX2FjY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gQXV0aENhY2hlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50S2V5LCBzdGF0ZUluZm8uc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5X25vYWNjb3VudCA9IEF1dGhDYWNoZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoQ29uc3RhbnRzLm5vX2FjY291bnQsIHN0YXRlSW5mby5zdGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkQWNjb3VudDogc3RyaW5nID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShhY3F1aXJlVG9rZW5BY2NvdW50S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjcXVpcmVUb2tlbkFjY291bnQ6IEFjY291bnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgd2l0aCB0aGUgYWNjb3VudCBpbiB0aGUgQ2FjaGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGNhY2hlZEFjY291bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50ID0gSlNPTi5wYXJzZShjYWNoZWRBY2NvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5hY2NvdW50ICYmIGFjcXVpcmVUb2tlbkFjY291bnQgJiYgQWNjb3VudC5jb21wYXJlQWNjb3VudHMocmVzcG9uc2UuYWNjb3VudCwgYWNxdWlyZVRva2VuQWNjb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlLCBhdXRob3JpdHksIGhhc2hQYXJhbXMsIGNsaWVudEluZm8sIGlkVG9rZW5PYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJUaGUgdXNlciBvYmplY3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgcGFzc2VkIGluIHRoZSBhY3F1aXJlVG9rZW4gcmVxdWVzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlIGFjY291bnQgb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVzcG9uc2UgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBvbmUgcGFzc2VkIGluIHRoZSBhY3F1aXJlVG9rZW4gcmVxdWVzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKGFjcXVpcmVUb2tlbkFjY291bnRLZXlfbm9hY2NvdW50KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2UsIGF1dGhvcml0eSwgaGFzaFBhcmFtcywgY2xpZW50SW5mbywgaWRUb2tlbk9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIGlkX3Rva2VuXG4gICAgICAgICAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoU2VydmVySGFzaFBhcmFtS2V5cy5JRF9UT0tFTikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIkZyYWdtZW50IGhhcyBpZCB0b2tlblwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGlkVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKGhhc2hQYXJhbXNbU2VydmVySGFzaFBhcmFtS2V5cy5JRF9UT0tFTl0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gUmVzcG9uc2VVdGlscy5zZXRSZXNwb25zZUlkVG9rZW4ocmVzcG9uc2UsIGlkVG9rZW5PYmopO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShTZXJ2ZXJIYXNoUGFyYW1LZXlzLkNMSUVOVF9JTkZPKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SW5mbyA9IGhhc2hQYXJhbXNbU2VydmVySGFzaFBhcmFtS2V5cy5DTElFTlRfSU5GT107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiQ2xpZW50SW5mbyBub3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gQUFEXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGF1dGhvcml0eVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdXRob3JpdHk6IHN0cmluZyA9IHRoaXMucG9wdWxhdGVBdXRob3JpdHkoc3RhdGVJbmZvLnN0YXRlLCB0aGlzLmluQ29va2llLCB0aGlzLmNhY2hlU3RvcmFnZSwgaWRUb2tlbk9iaik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW5PYmosIG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYWNjb3VudCA9IHRoaXMuYWNjb3VudDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRUb2tlbk9iaiAmJiBpZFRva2VuT2JqLm5vbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBub25jZSBpbnRlZ3JpdHkgaWYgaWRUb2tlbiBoYXMgbm9uY2UgLSB0aHJvdyBhbiBlcnJvciBpZiBub3QgbWF0Y2hlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkVG9rZW5PYmoubm9uY2UgIT09IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLk5PTkNFX0lEVE9LRU59JHtDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXJ9JHtzdGF0ZUluZm8uc3RhdGV9YCwgdGhpcy5pbkNvb2tpZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oRXJyb3JDYWNoZUtleXMuTE9HSU5fRVJST1IsIFwiTm9uY2UgTWlzbWF0Y2guIEV4cGVjdGVkIE5vbmNlOiBcIiArIHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLk5PTkNFX0lEVE9LRU59JHtDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXJ9JHtzdGF0ZUluZm8uc3RhdGV9YCwgdGhpcy5pbkNvb2tpZSkgKyBcIixcIiArIFwiQWN0dWFsIE5vbmNlOiBcIiArIGlkVG9rZW5PYmoubm9uY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiTm9uY2UgTWlzbWF0Y2guRXhwZWN0ZWQgTm9uY2U6IFwiICsgdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShgJHtUZW1wb3JhcnlDYWNoZUtleXMuTk9OQ0VfSURUT0tFTn0ke0NvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlcn0ke3N0YXRlSW5mby5zdGF0ZX1gLCB0aGlzLmluQ29va2llKSArIFwiLFwiICsgXCJBY3R1YWwgTm9uY2U6IFwiICsgaWRUb2tlbk9iai5ub25jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTm9uY2VNaXNtYXRjaEVycm9yKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLk5PTkNFX0lEVE9LRU59JHtDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXJ9JHtzdGF0ZUluZm8uc3RhdGV9YCwgdGhpcy5pbkNvb2tpZSksIGlkVG9rZW5PYmoubm9uY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oUGVyc2lzdGVudENhY2hlS2V5cy5JRFRPS0VOLCBoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuSURfVE9LRU5dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKFBlcnNpc3RlbnRDYWNoZUtleXMuQ0xJRU5UX0lORk8sIGNsaWVudEluZm8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBpZFRva2VuIGFzIGFjY2VzcyB0b2tlbiBmb3IgYXBwIGl0c2VsZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlLCBhdXRob3JpdHksIGhhc2hQYXJhbXMsIGNsaWVudEluZm8sIGlkVG9rZW5PYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXR5S2V5ID0gc3RhdGVJbmZvLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IHN0YXRlSW5mby5zdGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJJbnZhbGlkIGlkX3Rva2VuIHJlY2VpdmVkIGluIHRoZSByZXNwb25zZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJZFRva2VuRXJyb3IoaWRUb2tlbk9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEVycm9yQ2FjaGVLZXlzLkVSUk9SLCBlcnJvci5lcnJvckNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShFcnJvckNhY2hlS2V5cy5FUlJPUl9ERVNDLCBlcnJvci5lcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RhdGUgbWlzbWF0Y2ggLSB1bmV4cGVjdGVkL2ludmFsaWQgc3RhdGVcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF1dGhvcml0eUtleSA9IHN0YXRlSW5mby5zdGF0ZTtcbiAgICAgICAgICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gc3RhdGVJbmZvLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRTdGF0ZSA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLlNUQVRFX0xPR0lOfSR7Q29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyfSR7c3RhdGVJbmZvLnN0YXRlfWAsIHRoaXMuaW5Db29raWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiU3RhdGUgTWlzbWF0Y2guRXhwZWN0ZWQgU3RhdGU6IFwiICsgZXhwZWN0ZWRTdGF0ZSArIFwiLFwiICsgXCJBY3R1YWwgU3RhdGU6IFwiICsgc3RhdGVJbmZvLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBlcnJvciA9IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkU3RhdGVFcnJvcihzdGF0ZUluZm8uc3RhdGUsIGV4cGVjdGVkU3RhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oRXJyb3JDYWNoZUtleXMuRVJST1IsIGVycm9yLmVycm9yQ29kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShFcnJvckNhY2hlS2V5cy5FUlJPUl9ERVNDLCBlcnJvci5lcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHN0YXR1cyB0byBjb21wbGV0ZWRcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShgJHtUZW1wb3JhcnlDYWNoZUtleXMuUkVORVdfU1RBVFVTfSR7Q29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyfSR7c3RhdGVJbmZvLnN0YXRlfWApO1xuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZXNldFRlbXBDYWNoZUl0ZW1zKHN0YXRlSW5mby5zdGF0ZSk7XG5cbiAgICAgICAgLy8gdGhpcyBpcyByZXF1aXJlZCBpZiBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsPWZhbHNlXG4gICAgICAgIGlmICh0aGlzLmluQ29va2llKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtQ29va2llKGF1dGhvcml0eUtleSwgXCJcIiwgLTEpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJNc2FsQ29va2llKHN0YXRlSW5mby5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBFcnJvciBjYXNlLCBzZXQgc3RhdHVzIHRvIGNhbmNlbGxlZFxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiUmVzcG9uc2UgaXMgbnVsbFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgQXV0aG9yaXR5IHdoZW4gc2F2aW5nIFRva2VuIGZyb20gdGhlIGhhc2hcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gaW5Db29raWVcbiAgICAgKiBAcGFyYW0gY2FjaGVTdG9yYWdlXG4gICAgICogQHBhcmFtIGlkVG9rZW5PYmpcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKi9cbiAgICBwcml2YXRlIHBvcHVsYXRlQXV0aG9yaXR5KHN0YXRlOiBzdHJpbmcsIGluQ29va2llOiBib29sZWFuLCBjYWNoZVN0b3JhZ2U6IEF1dGhDYWNoZSwgaWRUb2tlbk9iajogSWRUb2tlbik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGF1dGhvcml0eUtleTogc3RyaW5nID0gQXV0aENhY2hlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlKTtcbiAgICAgICAgY29uc3QgY2FjaGVkQXV0aG9yaXR5OiBzdHJpbmcgPSBjYWNoZVN0b3JhZ2UuZ2V0SXRlbShhdXRob3JpdHlLZXksIGluQ29va2llKTtcblxuICAgICAgICAvLyByZXRyaWV2ZSB0aGUgYXV0aG9yaXR5IGZyb20gY2FjaGUgYW5kIHJlcGxhY2Ugd2l0aCB0ZW5hbnRJRFxuICAgICAgICByZXR1cm4gU3RyaW5nVXRpbHMuaXNFbXB0eShjYWNoZWRBdXRob3JpdHkpID8gY2FjaGVkQXV0aG9yaXR5IDogVXJsVXRpbHMucmVwbGFjZVRlbmFudFBhdGgoY2FjaGVkQXV0aG9yaXR5LCBpZFRva2VuT2JqLnRlbmFudElkKTtcbiAgICB9XG5cbiAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLXN0cmluZy1saXRlcmFsICovXG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIEFjY291bnRcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNpZ25lZCBpbiBhY2NvdW50XG4gICAgICogKHRoZSBhY2NvdW50IG9iamVjdCBpcyBjcmVhdGVkIGF0IHRoZSB0aW1lIG9mIHN1Y2Nlc3NmdWwgbG9naW4pXG4gICAgICogb3IgbnVsbCB3aGVuIG5vIHN0YXRlIGlzIGZvdW5kXG4gICAgICogQHJldHVybnMge0BsaW5rIEFjY291bnR9IC0gdGhlIGFjY291bnQgb2JqZWN0IHN0b3JlZCBpbiBNU0FMXG4gICAgICovXG4gICAgZ2V0QWNjb3VudCgpOiBBY2NvdW50IHtcbiAgICAgICAgLy8gaWYgYSBzZXNzaW9uIGFscmVhZHkgZXhpc3RzLCBnZXQgdGhlIGFjY291bnQgZnJvbSB0aGUgc2Vzc2lvblxuICAgICAgICBpZiAodGhpcy5hY2NvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZnJhbWUgaXMgdXNlZCB0byBnZXQgaWRUb2tlbiBhbmQgcG9wdWxhdGUgdGhlIGFjY291bnQgZm9yIHRoZSBnaXZlbiBzZXNzaW9uXG4gICAgICAgIGNvbnN0IHJhd0lkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKFBlcnNpc3RlbnRDYWNoZUtleXMuSURUT0tFTik7XG4gICAgICAgIGNvbnN0IHJhd0NsaWVudEluZm8gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKFBlcnNpc3RlbnRDYWNoZUtleXMuQ0xJRU5UX0lORk8pO1xuXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShyYXdJZFRva2VuKSAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShyYXdDbGllbnRJbmZvKSkge1xuICAgICAgICAgICAgY29uc3QgaWRUb2tlbiA9IG5ldyBJZFRva2VuKHJhd0lkVG9rZW4pO1xuICAgICAgICAgICAgY29uc3QgY2xpZW50SW5mbyA9IG5ldyBDbGllbnRJbmZvKHJhd0NsaWVudEluZm8pO1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW4sIGNsaWVudEluZm8pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudDtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBsb2dpbiBub3QgeWV0IGRvbmUsIHJldHVybiBudWxsXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKlxuICAgICAqIEV4dHJhY3RzIHN0YXRlIHZhbHVlIGZyb20gdGhlIGFjY291bnRTdGF0ZSBzZW50IHdpdGggdGhlIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QuXG4gICAgICogQHJldHVybnMge3N0cmluZ30gc2NvcGUuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIGdldEFjY291bnRTdGF0ZSAoc3RhdGU6IHN0cmluZykge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0SW5kZXggPSBzdGF0ZS5pbmRleE9mKFwifFwiKTtcbiAgICAgICAgICAgIGlmIChzcGxpdEluZGV4ID4gLTEgJiYgc3BsaXRJbmRleCArIDEgPCBzdGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuc3Vic3RyaW5nKHNwbGl0SW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHRvIGdldCBhIGxpc3Qgb2YgdW5pcXVlIGFjY291bnRzIGluIE1TQUwgY2FjaGUgYmFzZWQgb24gaG9tZUFjY291bnRJZGVudGlmaWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtAbGluayBBcnJheTxBY2NvdW50Pn0gQWNjb3VudCAtIGFsbCB1bmlxdWUgYWNjb3VudHMgaW4gTVNBTCBjYWNoZS5cbiAgICAgKi9cbiAgICBnZXRBbGxBY2NvdW50cygpOiBBcnJheTxBY2NvdW50PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBBcnJheTxBY2NvdW50PiA9IFtdO1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnMoQ29uc3RhbnRzLmNsaWVudElkLCBDb25zdGFudHMuaG9tZUFjY291bnRJZGVudGlmaWVyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaWRUb2tlbiA9IG5ldyBJZFRva2VuKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtc1tpXS52YWx1ZS5pZFRva2VuKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudEluZm8gPSBuZXcgQ2xpZW50SW5mbyhhY2Nlc3NUb2tlbkNhY2hlSXRlbXNbaV0udmFsdWUuaG9tZUFjY291bnRJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSBBY2NvdW50LmNyZWF0ZUFjY291bnQoaWRUb2tlbiwgY2xpZW50SW5mbyk7XG4gICAgICAgICAgICBhY2NvdW50cy5wdXNoKGFjY291bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VW5pcXVlQWNjb3VudHMoYWNjb3VudHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKlxuICAgICAqIFVzZWQgdG8gZmlsdGVyIGFjY291bnRzIGJhc2VkIG9uIGhvbWVBY2NvdW50SWRlbnRpZmllclxuICAgICAqIEBwYXJhbSB7QXJyYXk8QWNjb3VudD59ICBBY2NvdW50cyAtIGFjY291bnRzIHNhdmVkIGluIHRoZSBjYWNoZVxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFVuaXF1ZUFjY291bnRzKGFjY291bnRzOiBBcnJheTxBY2NvdW50Pik6IEFycmF5PEFjY291bnQ+IHtcbiAgICAgICAgaWYgKCFhY2NvdW50cyB8fCBhY2NvdW50cy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY291bnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmxhZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgICAgY29uc3QgdW5pcXVlQWNjb3VudHM6IEFycmF5PEFjY291bnQ+ID0gW107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhY2NvdW50cy5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChhY2NvdW50c1tpbmRleF0uaG9tZUFjY291bnRJZGVudGlmaWVyICYmIGZsYWdzLmluZGV4T2YoYWNjb3VudHNbaW5kZXhdLmhvbWVBY2NvdW50SWRlbnRpZmllcikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MucHVzaChhY2NvdW50c1tpbmRleF0uaG9tZUFjY291bnRJZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgICB1bmlxdWVBY2NvdW50cy5wdXNoKGFjY291bnRzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5pcXVlQWNjb3VudHM7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBBbmd1bGFyXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBCcm9hZGNhc3QgbWVzc2FnZXMgLSBVc2VkIG9ubHkgZm9yIEFuZ3VsYXI/ICAqXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBicm9hZGNhc3QoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE6IHN0cmluZykge1xuICAgICAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGRldGFpbDogZGF0YSB9KTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIGNhY2hlZCB0b2tlblxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqIEBwYXJhbSB7QGxpbmsgQWNjb3VudH0gYWNjb3VudFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm4ge0BsaW5rIEF1dGhSZXNwb25zZX0gQXV0aFJlc3BvbnNlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldENhY2hlZFRva2VuSW50ZXJuYWwoc2NvcGVzIDogQXJyYXk8c3RyaW5nPiAsIGFjY291bnQ6IEFjY291bnQsIHN0YXRlOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpOiBBdXRoUmVzcG9uc2Uge1xuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc2Vzc2lvbidzIGFjY291bnQgb2JqZWN0XG4gICAgICAgIGNvbnN0IGFjY291bnRPYmplY3Q6IEFjY291bnQgPSBhY2NvdW50IHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xuICAgICAgICBpZiAoIWFjY291bnRPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29uc3RydWN0IEF1dGhlbnRpY2F0aW9uUmVxdWVzdCBiYXNlZCBvbiByZXNwb25zZSB0eXBlOyBzZXQgXCJyZWRpcmVjdFVyaVwiIGZyb20gdGhlIFwicmVxdWVzdFwiIHdoaWNoIG1ha2VzIHRoaXMgY2FsbCBmcm9tIEFuZ3VsYXIgLSBmb3IgdGhpcy5nZXRSZWRpcmVjdFVyaSgpXG4gICAgICAgIGNvbnN0IG5ld0F1dGhvcml0eSA9IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPyB0aGlzLmF1dGhvcml0eUluc3RhbmNlIDogQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZSh0aGlzLmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IHRoaXMuZ2V0VG9rZW5UeXBlKGFjY291bnRPYmplY3QsIHNjb3BlcywgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3Qgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgbmV3QXV0aG9yaXR5LFxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcbiAgICAgICAgICAgIHNjb3BlcyxcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgY29ycmVsYXRpb25JZFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGdldCBjYWNoZWQgdG9rZW5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FjaGVkVG9rZW4oc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhY2NvdW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBHZXQgc2NvcGVzIGZvciB0aGUgRW5kcG9pbnQgLSBVc2VkIGluIEFuZ3VsYXIgdG8gdHJhY2sgcHJvdGVjdGVkIGFuZCB1bnByb3RlY3RlZCByZXNvdXJjZXMgd2l0aG91dCBpbnRlcmFjdGlvbiBmcm9tIHRoZSBkZXZlbG9wZXIgYXBwXG4gICAgICogTm90ZTogUGxlYXNlIGNoZWNrIGlmIHdlIG5lZWQgdG8gc2V0IHRoZSBcInJlZGlyZWN0VXJpXCIgZnJvbSB0aGUgXCJyZXF1ZXN0XCIgd2hpY2ggbWFrZXMgdGhpcyBjYWxsIGZyb20gQW5ndWxhciAtIGZvciB0aGlzLmdldFJlZGlyZWN0VXJpKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbmRwb2ludFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTY29wZXNGb3JFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKSA6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICAvLyBpZiB1c2VyIHNwZWNpZmllZCBsaXN0IG9mIHVucHJvdGVjdGVkUmVzb3VyY2VzLCBubyBuZWVkIHRvIHNlbmQgdG9rZW4gdG8gdGhlc2UgZW5kcG9pbnRzLCByZXR1cm4gbnVsbC5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChlbmRwb2ludC5pbmRleE9mKHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlc1tpXSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcm9jZXNzIGFsbCBwcm90ZWN0ZWQgcmVzb3VyY2VzIGFuZCBzZW5kIHRoZSBtYXRjaGVkIG9uZVxuICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLnByb3RlY3RlZFJlc291cmNlTWFwLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBBcnJheS5mcm9tKHRoaXMuY29uZmlnLmZyYW1ld29yay5wcm90ZWN0ZWRSZXNvdXJjZU1hcC5rZXlzKCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uZmlnRW5kcG9pbnQgaXMgbGlrZSAvYXBpL1RvZG8gcmVxdWVzdGVkIGVuZHBvaW50IGNhbiBiZSAvYXBpL1RvZG8vMVxuICAgICAgICAgICAgICAgIGlmIChlbmRwb2ludC5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZnJhbWV3b3JrLnByb3RlY3RlZFJlc291cmNlTWFwLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIGRlZmF1bHQgcmVzb3VyY2Ugd2lsbCBiZSBjbGllbnRpZCBpZiBub3RoaW5nIHNwZWNpZmllZFxuICAgICAgICAgKiBBcHAgd2lsbCB1c2UgaWR0b2tlbiBmb3IgY2FsbHMgdG8gaXRzZWxmXG4gICAgICAgICAqIGNoZWNrIGlmIGl0J3Mgc3RhcmluZyBmcm9tIGh0dHAgb3IgaHR0cHMsIG5lZWRzIHRvIG1hdGNoIHdpdGggYXBwIGhvc3RcbiAgICAgICAgICovXG4gICAgICAgIGlmIChlbmRwb2ludC5pbmRleE9mKFwiaHR0cDovL1wiKSA+IC0xIHx8IGVuZHBvaW50LmluZGV4T2YoXCJodHRwczovL1wiKSA+IC0xKSB7XG4gICAgICAgICAgICBpZiAoVXJsVXRpbHMuZ2V0SG9zdEZyb21VcmkoZW5kcG9pbnQpID09PSBVcmxVdGlscy5nZXRIb3N0RnJvbVVyaSh0aGlzLmdldFJlZGlyZWN0VXJpKCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheTxzdHJpbmc+KHRoaXMuY2xpZW50SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIGluIGFuZ3VsYXIgbGV2ZWwsIHRoZSB1cmwgZm9yICRodHRwIGludGVyY2VwdG9yIGNhbGwgY291bGQgYmUgcmVsYXRpdmUgdXJsLFxuICAgICAgICAgICAgICogaWYgaXQncyByZWxhdGl2ZSBjYWxsLCB3ZSdsbCB0cmVhdCBpdCBhcyBhcHAgYmFja2VuZCBjYWxsLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5PHN0cmluZz4odGhpcy5jbGllbnRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub3QgdGhlIGFwcCdzIG93biBiYWNrZW5kIG9yIG5vdCBhIGRvbWFpbiBsaXN0ZWQgaW4gdGhlIGVuZHBvaW50cyBzdHJ1Y3R1cmVcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGJvb2xlYW4gZmxhZyB0byBkZXZlbG9wZXIgdG8gaGVscCBpbmZvcm0gaWYgbG9naW4gaXMgaW4gcHJvZ3Jlc3NcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZS9mYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRMb2dpbkluUHJvZ3Jlc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHBlbmRpbmdDYWxsYmFjayA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLlVSTF9IQVNIKTtcbiAgICAgICAgaWYgKHBlbmRpbmdDYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLklOVEVSQUNUSU9OX1NUQVRVUykgPT09IENvbnN0YW50cy5pblByb2dyZXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbG9naW5JblByb2dyZXNzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldEludGVyYWN0aW9uSW5Qcm9ncmVzcyhpblByb2dyZXNzOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChpblByb2dyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5JTlRFUkFDVElPTl9TVEFUVVMsIENvbnN0YW50cy5pblByb2dyZXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLklOVEVSQUNUSU9OX1NUQVRVUyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogQHBhcmFtIGxvZ2luSW5Qcm9ncmVzc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXRsb2dpbkluUHJvZ3Jlc3MobG9naW5JblByb2dyZXNzIDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNldEludGVyYWN0aW9uSW5Qcm9ncmVzcyhsb2dpbkluUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiByZXR1cm5zIHRoZSBzdGF0dXMgb2YgYWNxdWlyZVRva2VuSW5Qcm9ncmVzc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRBY3F1aXJlVG9rZW5JblByb2dyZXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShUZW1wb3JhcnlDYWNoZUtleXMuSU5URVJBQ1RJT05fU1RBVFVTKSA9PT0gQ29uc3RhbnRzLmluUHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY3F1aXJlVG9rZW5JblByb2dyZXNzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldEFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MoYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXRJbnRlcmFjdGlvbkluUHJvZ3Jlc3MoYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIHJldHVybnMgdGhlIGxvZ2dlciBoYW5kbGVcbiAgICAgKi9cbiAgICBnZXRMb2dnZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2dnZXIgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIGxvZ2dlciBMb2dnZXIgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBzZXRMb2dnZXIobG9nZ2VyOiBMb2dnZXIpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBHZXR0ZXJzIGFuZCBTZXR0ZXJzXG5cbiAgICAvKipcbiAgICAgKiBVc2UgdG8gZ2V0IHRoZSByZWRpcmVjdCB1cmkgY29uZmlndXJlZCBpbiBNU0FMIG9yIG51bGwuXG4gICAgICogRXZhbHVhdGVzIHJlZGlyZWN0VXJpIGlmIGl0cyBhIGZ1bmN0aW9uLCBvdGhlcndpc2Ugc2ltcGx5IHJldHVybnMgaXRzIHZhbHVlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcmVkaXJlY3QgVVJMXG4gICAgICovXG4gICAgcHVibGljIGdldFJlZGlyZWN0VXJpKHJlcVJlZGlyZWN0VXJpPzogIHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmKHJlcVJlZGlyZWN0VXJpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxUmVkaXJlY3RVcmk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmF1dGgucmVkaXJlY3RVcmkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmF1dGgucmVkaXJlY3RVcmkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5yZWRpcmVjdFVyaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdG8gZ2V0IHRoZSBwb3N0IGxvZ291dCByZWRpcmVjdCB1cmkgY29uZmlndXJlZCBpbiBNU0FMIG9yIG51bGwuXG4gICAgICogRXZhbHVhdGVzIHBvc3RMb2dvdXRyZWRpcmVjdFVyaSBpZiBpdHMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIHNpbXBseSByZXR1cm5zIGl0cyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHBvc3QgbG9nb3V0IHJlZGlyZWN0IFVSTFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5hdXRoLnBvc3RMb2dvdXRSZWRpcmVjdFVyaSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5wb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5wb3N0TG9nb3V0UmVkaXJlY3RVcmk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHRvIGdldCB0aGUgY3VycmVudCB7QGxpbmsgQ29uZmlndXJhdGlvbn0gb2JqZWN0IGluIE1TQUxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtAbGluayBDb25maWd1cmF0aW9ufVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDdXJyZW50Q29uZmlndXJhdGlvbigpOiBDb25maWd1cmF0aW9uIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZU5vU2V0Q29uZmlndXJhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIFV0aWxzIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgQXV0aGVudGljYXRpb25cbiAgICAgKiBAcGFyYW0ge0BsaW5rIGFjY291bnR9IGFjY291bnQgb2JqZWN0XG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqIEBwYXJhbSBzaWxlbnRDYWxsXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0b2tlbiB0eXBlOiBpZF90b2tlbiBvciBhY2Nlc3NfdG9rZW5cbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VG9rZW5UeXBlKGFjY291bnRPYmplY3Q6IEFjY291bnQsIHNjb3Blczogc3RyaW5nW10sIHNpbGVudENhbGw6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICAvKlxuICAgICAgICAgKiBpZiBhY2NvdW50IGlzIHBhc3NlZCBhbmQgbWF0Y2hlcyB0aGUgYWNjb3VudCBvYmplY3Qvb3Igc2V0IHRvIGdldEFjY291bnQoKSBmcm9tIGNhY2hlXG4gICAgICAgICAqIGlmIGNsaWVudC1pZCBpcyBwYXNzZWQgYXMgc2NvcGUsIGdldCBpZF90b2tlbiBlbHNlIHRva2VuL2lkX3Rva2VuX3Rva2VuIChpbiBjYXNlIG5vIHNlc3Npb24gZXhpc3RzKVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IHRva2VuVHlwZTogc3RyaW5nO1xuXG4gICAgICAgIC8vIGFjcXVpcmVUb2tlblNpbGVudFxuICAgICAgICBpZiAoc2lsZW50Q2FsbCkge1xuICAgICAgICAgICAgaWYgKEFjY291bnQuY29tcGFyZUFjY291bnRzKGFjY291bnRPYmplY3QsIHRoaXMuZ2V0QWNjb3VudCgpKSkge1xuICAgICAgICAgICAgICAgIHRva2VuVHlwZSA9IChzY29wZXMuaW5kZXhPZih0aGlzLmNvbmZpZy5hdXRoLmNsaWVudElkKSA+IC0xKSA/IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4gOiBSZXNwb25zZVR5cGVzLnRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9rZW5UeXBlICA9IChzY29wZXMuaW5kZXhPZih0aGlzLmNvbmZpZy5hdXRoLmNsaWVudElkKSA+IC0xKSA/IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4gOiBSZXNwb25zZVR5cGVzLmlkX3Rva2VuX3Rva2VuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5UeXBlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFsbCBvdGhlciBjYXNlc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghQWNjb3VudC5jb21wYXJlQWNjb3VudHMoYWNjb3VudE9iamVjdCwgdGhpcy5nZXRBY2NvdW50KCkpKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5UeXBlID0gUmVzcG9uc2VUeXBlcy5pZF90b2tlbl90b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRva2VuVHlwZSA9IChzY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA+IC0xKSA/IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4gOiBSZXNwb25zZVR5cGVzLnRva2VuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5UeXBlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogU2V0cyB0aGUgY2FjaGVrZXlzIGZvciBhbmQgc3RvcmVzIHRoZSBhY2NvdW50IGluZm9ybWF0aW9uIGluIGNhY2hlXG4gICAgICogQHBhcmFtIGFjY291bnRcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRBY2NvdW50Q2FjaGUoYWNjb3VudDogQWNjb3VudCwgc3RhdGU6IHN0cmluZykge1xuXG4gICAgICAgIC8vIENhY2hlIGFjcXVpcmVUb2tlbkFjY291bnRLZXlcbiAgICAgICAgY29uc3QgYWNjb3VudElkID0gYWNjb3VudCA/IHRoaXMuZ2V0QWNjb3VudElkKGFjY291bnQpIDogQ29uc3RhbnRzLm5vX2FjY291bnQ7XG5cbiAgICAgICAgY29uc3QgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IEF1dGhDYWNoZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoYWNjb3VudElkLCBzdGF0ZSk7XG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oYWNxdWlyZVRva2VuQWNjb3VudEtleSwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiBTZXRzIHRoZSBjYWNoZUtleSBmb3IgYW5kIHN0b3JlcyB0aGUgYXV0aG9yaXR5IGluZm9ybWF0aW9uIGluIGNhY2hlXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNldEF1dGhvcml0eUNhY2hlKHN0YXRlOiBzdHJpbmcsIGF1dGhvcml0eTogc3RyaW5nKSB7XG4gICAgICAgIC8vIENhY2hlIGF1dGhvcml0eUtleVxuICAgICAgICBjb25zdCBhdXRob3JpdHlLZXkgPSBBdXRoQ2FjaGUuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGUpO1xuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKGF1dGhvcml0eUtleSwgVXJsVXRpbHMuQ2Fub25pY2FsaXplVXJpKGF1dGhvcml0eSksIHRoaXMuaW5Db29raWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYWNjb3VudCwgYXV0aG9yaXR5LCBhbmQgbm9uY2UgaW4gY2FjaGVcbiAgICAgKiBAcGFyYW0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0XG4gICAgICogQHBhcmFtIGFjY291bnRcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMsIGFjY291bnQ6IEFjY291bnQsIGxvZ2luU3RhcnRQYWdlPzogYW55KSB7XG4gICAgICAgIC8vIENhY2hlIGFjY291bnQgYW5kIGF1dGhvcml0eVxuICAgICAgICBpZiAobG9naW5TdGFydFBhZ2UpIHtcbiAgICAgICAgICAgIC8vIENhY2hlIHRoZSBzdGF0ZSwgbm9uY2UsIGFuZCBsb2dpbiByZXF1ZXN0IGRhdGFcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLkxPR0lOX1JFUVVFU1R9JHtDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXJ9JHtzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGV9YCwgbG9naW5TdGFydFBhZ2UsIHRoaXMuaW5Db29raWUpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShgJHtUZW1wb3JhcnlDYWNoZUtleXMuU1RBVEVfTE9HSU59JHtDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXJ9JHtzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGV9YCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmluQ29va2llKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWNjb3VudENhY2hlKGFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FjaGUgYXV0aG9yaXR5S2V5XG4gICAgICAgIHRoaXMuc2V0QXV0aG9yaXR5Q2FjaGUoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KTtcblxuICAgICAgICAvLyBDYWNoZSBub25jZVxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKGAke1RlbXBvcmFyeUNhY2hlS2V5cy5OT05DRV9JRFRPS0VOfSR7Q29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyfSR7c2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlfWAsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5ub25jZSwgdGhpcy5pbkNvb2tpZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBsb2dnZWQgaW4gYWNjb3VudFxuICAgICAqIEBwYXJhbSBhY2NvdW50XG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEFjY291bnRJZChhY2NvdW50OiBBY2NvdW50KTogYW55IHtcbiAgICAgICAgLy8gcmV0dXJuIGAke2FjY291bnQuYWNjb3VudElkZW50aWZpZXJ9YCArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArIGAke2FjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyfWA7XG4gICAgICAgIGxldCBhY2NvdW50SWQ6IHN0cmluZztcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgYWNjb3VudElkID0gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhY2NvdW50SWQgPSBDb25zdGFudHMubm9fYWNjb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2NvdW50SWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIEBwYXJhbSBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xuICAgICAqXG4gICAgICogQ29uc3RydWN0ICd0b2tlblJlcXVlc3QnIGZyb20gdGhlIGF2YWlsYWJsZSBkYXRhIGluIGFkYWxJZFRva2VuXG4gICAgICovXG4gICAgcHJpdmF0ZSBidWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB7XG5cbiAgICAgICAgY29uc3QgdG9rZW5SZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgPSB7XG4gICAgICAgICAgICBzY29wZXM6IFt0aGlzLmNsaWVudElkXSxcbiAgICAgICAgICAgIGF1dGhvcml0eTogdGhpcy5hdXRob3JpdHksXG4gICAgICAgICAgICBhY2NvdW50OiB0aGlzLmdldEFjY291bnQoKSxcbiAgICAgICAgICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRva2VuUmVxdWVzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqIEBwYXJhbSBjbGllbnRJZFxuICAgICAqXG4gICAgICogQ29uc3RydWN0IFRlbGVtZXRyeU1hbmFnZXIgZnJvbSBDb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRUZWxlbWV0cnlNYW5hZ2VyRnJvbUNvbmZpZyhjb25maWc6IFRlbGVtZXRyeU9wdGlvbnMsIGNsaWVudElkOiBzdHJpbmcpOiBUZWxlbWV0cnlNYW5hZ2VyIHtcbiAgICAgICAgaWYgKCFjb25maWcpIHsgLy8gaWYgdW5zZXRcbiAgICAgICAgICAgIHJldHVybiBUZWxlbWV0cnlNYW5hZ2VyLmdldFRlbGVtZXRyeW1hbmFnZXJTdHViKGNsaWVudElkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBzZXQgdGhlbiB2YWxpZGF0ZVxuICAgICAgICBjb25zdCB7IGFwcGxpY2F0aW9uTmFtZSwgYXBwbGljYXRpb25WZXJzaW9uLCB0ZWxlbWV0cnlFbWl0dGVyIH0gPSBjb25maWc7XG4gICAgICAgIGlmICghYXBwbGljYXRpb25OYW1lIHx8ICFhcHBsaWNhdGlvblZlcnNpb24gfHwgIXRlbGVtZXRyeUVtaXR0ZXIpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVUZWxlbWV0cnlDb25maWdFcnJvcihjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHZhbGlkIHRoZW4gY29uc3RydWN0XG4gICAgICAgIGNvbnN0IHRlbGVtZXRyeVBsYXRmb3JtOiBUZWxlbWV0cnlQbGF0Zm9ybSA9IHtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uTmFtZSxcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uVmVyc2lvblxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0ZWxlbWV0cnlNYW5hZ2VyQ29uZmlnOiBUZWxlbWV0cnlDb25maWcgPSB7XG4gICAgICAgICAgICBwbGF0Zm9ybTogdGVsZW1ldHJ5UGxhdGZvcm0sXG4gICAgICAgICAgICBjbGllbnRJZDogY2xpZW50SWRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBUZWxlbWV0cnlNYW5hZ2VyKHRlbGVtZXRyeU1hbmFnZXJDb25maWcsIHRlbGVtZXRyeUVtaXR0ZXIpO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL0NyeXB0b1V0aWxzXCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVG9rZW5VdGlscyB7XG5cbiAgICAvKipcbiAgICAgKiBkZWNvZGUgYSBKV1RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBqd3RUb2tlblxuICAgICAqL1xuICAgIHN0YXRpYyBkZWNvZGVKd3Qoand0VG9rZW46IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGp3dFRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWRUb2tlblBhcnRzUmVnZXggPSAvXihbXlxcLlxcc10qKVxcLihbXlxcLlxcc10rKVxcLihbXlxcLlxcc10qKSQvO1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gaWRUb2tlblBhcnRzUmVnZXguZXhlYyhqd3RUb2tlbik7XG4gICAgICAgIGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuX3JlcXVlc3RDb250ZXh0LmxvZ2dlci53YXJuKFwiVGhlIHJldHVybmVkIGlkX3Rva2VuIGlzIG5vdCBwYXJzZWFibGUuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3JhY2tlZFRva2VuID0ge1xuICAgICAgICAgICAgaGVhZGVyOiBtYXRjaGVzWzFdLFxuICAgICAgICAgICAgSldTUGF5bG9hZDogbWF0Y2hlc1syXSxcbiAgICAgICAgICAgIEpXU1NpZzogbWF0Y2hlc1szXVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY3JhY2tlZFRva2VuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgSWRUb2tlbiBieSBkZWNvZGluZyB0aGUgUkFXSWRUb2tlblxuICAgICAqXG4gICAgICogQHBhcmFtIGVuY29kZWRJZFRva2VuXG4gICAgICovXG4gICAgc3RhdGljIGV4dHJhY3RJZFRva2VuKGVuY29kZWRJZFRva2VuOiBzdHJpbmcpOiBhbnkge1xuICAgIC8vIGlkIHRva2VuIHdpbGwgYmUgZGVjb2RlZCB0byBnZXQgdGhlIHVzZXJuYW1lXG4gICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IHRoaXMuZGVjb2RlSnd0KGVuY29kZWRJZFRva2VuKTtcbiAgICAgICAgaWYgKCFkZWNvZGVkVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBiYXNlNjRJZFRva2VuID0gZGVjb2RlZFRva2VuLkpXU1BheWxvYWQ7XG4gICAgICAgICAgICBjb25zdCBiYXNlNjREZWNvZGVkID0gQ3J5cHRvVXRpbHMuYmFzZTY0RGVjb2RlKGJhc2U2NElkVG9rZW4pO1xuICAgICAgICAgICAgaWYgKCFiYXNlNjREZWNvZGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLmluZm8oXCJUaGUgcmV0dXJuZWQgaWRfdG9rZW4gY291bGQgbm90IGJlIGJhc2U2NCB1cmwgc2FmZSBkZWNvZGVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEVDTUEgc2NyaXB0IGhhcyBKU09OIGJ1aWx0LWluIHN1cHBvcnRcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGJhc2U2NERlY29kZWQpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuX3JlcXVlc3RDb250ZXh0LmxvZ2dlci5lcnJvcihcIlRoZSByZXR1cm5lZCBpZF90b2tlbiBjb3VsZCBub3QgYmUgZGVjb2RlZFwiICsgZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDbGllbnRJbmZvIH0gZnJvbSBcIi4vQ2xpZW50SW5mb1wiO1xuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcblxuLyoqXG4gKiBhY2NvdW50SWRlbnRpZmllciAgICAgICBjb21iaW5hdGlvbiBvZiBpZFRva2VuLnVpZCBhbmQgaWRUb2tlbi51dGlkXG4gKiBob21lQWNjb3VudElkZW50aWZpZXIgICBjb21iaW5hdGlvbiBvZiBjbGllbnRJbmZvLnVpZCBhbmQgY2xpZW50SW5mby51dGlkXG4gKiB1c2VyTmFtZSAgICAgICAgICAgICAgICBpZFRva2VuLnByZWZlcnJlZF91c2VybmFtZVxuICogbmFtZSAgICAgICAgICAgICAgICAgICAgaWRUb2tlbi5uYW1lXG4gKiBpZFRva2VuICAgICAgICAgICAgICAgICBpZFRva2VuXG4gKiBzaWQgICAgICAgICAgICAgICAgICAgICBpZFRva2VuLnNpZCAtIHNlc3Npb24gaWRlbnRpZmllclxuICogZW52aXJvbm1lbnQgICAgICAgICAgICAgaWR0b2tlbi5pc3N1ZXIgKHRoZSBhdXRob3JpdHkgdGhhdCBpc3N1ZXMgdGhlIHRva2VuKVxuICovXG5leHBvcnQgY2xhc3MgQWNjb3VudCB7XG5cbiAgICBhY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xuICAgIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGlkVG9rZW46IFN0cmluZ0RpY3Q7IC8vIHdpbGwgYmUgZGVwcmVjYXRlZCBzb29uXG4gICAgaWRUb2tlbkNsYWltczogU3RyaW5nRGljdDtcbiAgICBzaWQ6IHN0cmluZztcbiAgICBlbnZpcm9ubWVudDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBBY2NvdW50IE9iamVjdFxuICAgICAqIEBwcmFyYW0gYWNjb3VudElkZW50aWZpZXJcbiAgICAgKiBAcGFyYW0gaG9tZUFjY291bnRJZGVudGlmaWVyXG4gICAgICogQHBhcmFtIHVzZXJOYW1lXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gaWRUb2tlblxuICAgICAqIEBwYXJhbSBzaWRcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50SWRlbnRpZmllcjogc3RyaW5nLCBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZywgdXNlck5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBpZFRva2VuQ2xhaW1zOiBTdHJpbmdEaWN0LCBzaWQ6IHN0cmluZywgIGVudmlyb25tZW50OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hY2NvdW50SWRlbnRpZmllciA9IGFjY291bnRJZGVudGlmaWVyO1xuICAgICAgICB0aGlzLmhvbWVBY2NvdW50SWRlbnRpZmllciA9IGhvbWVBY2NvdW50SWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyB3aWxsIGJlIGRlcHJlY2F0ZWQgc29vblxuICAgICAgICB0aGlzLmlkVG9rZW4gPSBpZFRva2VuQ2xhaW1zO1xuICAgICAgICB0aGlzLmlkVG9rZW5DbGFpbXMgPSBpZFRva2VuQ2xhaW1zO1xuICAgICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAcGFyYW0gaWRUb2tlblxuICAgICAqIEBwYXJhbSBjbGllbnRJbmZvXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZUFjY291bnQoaWRUb2tlbjogSWRUb2tlbiwgY2xpZW50SW5mbzogQ2xpZW50SW5mbyk6IEFjY291bnQge1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhY2NvdW50SWRlbnRpZmllclxuICAgICAgICBjb25zdCBhY2NvdW50SWRlbnRpZmllcjogc3RyaW5nID0gaWRUb2tlbi5vYmplY3RJZCB8fCAgaWRUb2tlbi5zdWJqZWN0O1xuXG4gICAgICAgIC8vIGNyZWF0ZSBob21lQWNjb3VudElkZW50aWZpZXJcbiAgICAgICAgY29uc3QgdWlkOiBzdHJpbmcgPSBjbGllbnRJbmZvID8gY2xpZW50SW5mby51aWQgOiBcIlwiO1xuICAgICAgICBjb25zdCB1dGlkOiBzdHJpbmcgPSBjbGllbnRJbmZvID8gY2xpZW50SW5mby51dGlkIDogXCJcIjtcblxuICAgICAgICBsZXQgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eSh1aWQpICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KHV0aWQpKSB7XG4gICAgICAgICAgICBob21lQWNjb3VudElkZW50aWZpZXIgPSBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodWlkKSArIFwiLlwiICsgQ3J5cHRvVXRpbHMuYmFzZTY0RW5jb2RlKHV0aWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQWNjb3VudChhY2NvdW50SWRlbnRpZmllciwgaG9tZUFjY291bnRJZGVudGlmaWVyLCBpZFRva2VuLnByZWZlcnJlZE5hbWUsIGlkVG9rZW4ubmFtZSwgaWRUb2tlbi5jbGFpbXMsIGlkVG9rZW4uc2lkLCBpZFRva2VuLmlzc3Vlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXRpbHMgZnVuY3Rpb24gdG8gY29tcGFyZSB0d28gQWNjb3VudCBvYmplY3RzIC0gdXNlZCB0byBjaGVjayBpZiB0aGUgc2FtZSB1c2VyIGFjY291bnQgaXMgbG9nZ2VkIGluXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYTE6IEFjY291bnQgb2JqZWN0XG4gICAgICogQHBhcmFtIGEyOiBBY2NvdW50IG9iamVjdFxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlQWNjb3VudHMoYTE6IEFjY291bnQsIGEyOiBBY2NvdW50KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghYTEgfHwgIWEyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGExLmhvbWVBY2NvdW50SWRlbnRpZmllciAmJiBhMi5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGlmIChhMS5ob21lQWNjb3VudElkZW50aWZpZXIgPT09IGEyLmhvbWVBY2NvdW50SWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQXV0aG9yaXR5LCBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBYaHJDbGllbnQgfSBmcm9tIFwiLi4vWEhSQ2xpZW50XCI7XG5pbXBvcnQgeyBBQURUcnVzdGVkSG9zdExpc3QgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWFkQXV0aG9yaXR5IGV4dGVuZHMgQXV0aG9yaXR5IHtcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBBYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50OiBzdHJpbmcgPSBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb24vZGlzY292ZXJ5L2luc3RhbmNlXCI7XG5cbiAgICBwcml2YXRlIGdldCBBYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHtBYWRBdXRob3JpdHkuQWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludH0/YXBpLXZlcnNpb249MS4wJmF1dGhvcml6YXRpb25fZW5kcG9pbnQ9JHt0aGlzLkNhbm9uaWNhbEF1dGhvcml0eX1vYXV0aDIvdjIuMC9hdXRob3JpemVgO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoYXV0aG9yaXR5LCB2YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGUge1xuICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5BYWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIE9JREMgZW5kcG9pbnRcbiAgICAgKiBPbmx5IHJlc3BvbmRzIHdpdGggdGhlIGVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGlmICghdGhpcy5Jc1ZhbGlkYXRpb25FbmFibGVkIHx8IHRoaXMuSXNJblRydXN0ZWRIb3N0TGlzdCh0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBjdXN0b20gZG9tYWlucyBpbiBBQUQgd2hlcmUgd2UgcXVlcnkgdGhlIHNlcnZpY2UgZm9yIHRoZSBJbnN0YW5jZSBkaXNjb3ZlcnlcbiAgICAgICAgY29uc3QgY2xpZW50OiBYaHJDbGllbnQgPSBuZXcgWGhyQ2xpZW50KCk7XG5cbiAgICAgICAgcmV0dXJuIGNsaWVudC5zZW5kUmVxdWVzdEFzeW5jKHRoaXMuQWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludFVybCwgXCJHRVRcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZW5hbnRfZGlzY292ZXJ5X2VuZHBvaW50O1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgaG9zdCBpcyBpbiBhIGxpc3Qgb2YgdHJ1c3RlZCBob3N0c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgaG9zdCB0byBsb29rIHVwXG4gICAgICovXG4gICAgcHVibGljIElzSW5UcnVzdGVkSG9zdExpc3QoaG9zdDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBBQURUcnVzdGVkSG9zdExpc3RbaG9zdC50b0xvd2VyQ2FzZSgpXTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBYSFIgY2xpZW50IGZvciBKU09OIGVuZHBvaW50c1xuICogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvYXN5bmMtcHJvbWlzZVxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgWGhyQ2xpZW50IHtcbiAgICBwdWJsaWMgc2VuZFJlcXVlc3RBc3luYyh1cmw6IHN0cmluZywgbWV0aG9kOiBzdHJpbmcsIGVuYWJsZUNhY2hpbmc/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgLyogYXN5bmM6ICovIHRydWUpO1xuICAgICAgICAgICAgaWYgKGVuYWJsZUNhY2hpbmcpIHtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAqIFRPRE86IChzaGl2YikgZW5zdXJlIHRoYXQgdGhpcyBjYW4gYmUgY2FjaGVkXG4gICAgICAgICAgICAgICAgICogeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwiUHVibGljXCIpO1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB4aHIub25sb2FkID0gKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMuaGFuZGxlRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQganNvblJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGpzb25SZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5oYW5kbGVFcnJvcih4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uUmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IFwibm90IGltcGxlbWVudGVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYW5kbGVFcnJvcihyZXNwb25zZVRleHQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGxldCBqc29uUmVzcG9uc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBqc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBpZiAoanNvblJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb25SZXNwb25zZS5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VUZXh0O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFhZEF1dGhvcml0eSB9IGZyb20gXCIuL0FhZEF1dGhvcml0eVwiO1xuaW1wb3J0IHsgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1VybFV0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQjJjQXV0aG9yaXR5IGV4dGVuZHMgQWFkQXV0aG9yaXR5IHtcbiAgICBwdWJsaWMgc3RhdGljIEIyQ19QUkVGSVg6IFN0cmluZyA9IFwidGZwXCI7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihhdXRob3JpdHksIHZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICAgICAgY29uc3QgdXJsQ29tcG9uZW50cyA9IFVybFV0aWxzLkdldFVybENvbXBvbmVudHMoYXV0aG9yaXR5KTtcblxuICAgICAgICBjb25zdCBwYXRoU2VnbWVudHMgPSB1cmxDb21wb25lbnRzLlBhdGhTZWdtZW50cztcbiAgICAgICAgaWYgKHBhdGhTZWdtZW50cy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmIyY0F1dGhvcml0eVVyaUludmFsaWRQYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5DYW5vbmljYWxBdXRob3JpdHkgPSBgaHR0cHM6Ly8ke3VybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0fS8ke3BhdGhTZWdtZW50c1swXX0vJHtwYXRoU2VnbWVudHNbMV19LyR7cGF0aFNlZ21lbnRzWzJdfS9gO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgQXV0aG9yaXR5VHlwZSgpOiBBdXRob3JpdHlUeXBlIHtcbiAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQjJDO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIFRlbmFudERpc2NvdmVyeUVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGlmICghdGhpcy5Jc1ZhbGlkYXRpb25FbmFibGVkIHx8IHRoaXMuSXNJblRydXN0ZWRIb3N0TGlzdCh0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UudW5zdXBwb3J0ZWRBdXRob3JpdHlWYWxpZGF0aW9uO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvVXJsVXRpbHNcIjtcbmltcG9ydCB7IFRlbGVtZXRyeUVtaXR0ZXIgfSBmcm9tIFwiLi90ZWxlbWV0cnkvVGVsZW1ldHJ5VHlwZXNcIjtcblxuLyoqXG4gKiBDYWNoZSBsb2NhdGlvbiBvcHRpb25zIHN1cHBvcnRlZCBieSBNU0FMIGFyZTpcbiAqIC0gbG9jYWwgc3RvcmFnZTogTVNBTCB1c2VzIGJyb3dzZXJzIGxvY2FsIHN0b3JhZ2UgdG8gc3RvcmUgaXRzIGNhY2hlXG4gKiAtIHNlc3Npb24gc3RvcmFnZTogTVNBTCB1c2VzIHRoZSBicm93c2VycyBzZXNzaW9uIHN0b3JhZ2UgdG8gc3RvcmUgaXRzIGNhY2hlXG4gKi9cbmV4cG9ydCB0eXBlIENhY2hlTG9jYXRpb24gPSBcImxvY2FsU3RvcmFnZVwiIHwgXCJzZXNzaW9uU3RvcmFnZVwiO1xuXG4vKipcbiAqIERlZmF1bHRzIGZvciB0aGUgQ29uZmlndXJhdGlvbiBPcHRpb25zXG4gKi9cbmNvbnN0IEZSQU1FX1RJTUVPVVQgPSA2MDAwO1xuY29uc3QgT0ZGU0VUID0gMzAwO1xuY29uc3QgTkFWSUdBVEVfRlJBTUVfV0FJVCA9IDUwMDtcblxuLyoqXG4gKiBAdHlwZSBBdXRoT3B0aW9uczogVXNlIHRoaXMgdG8gY29uZmlndXJlIHRoZSBhdXRoIG9wdGlvbnMgaW4gdGhlIENvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKlxuICogIC0gY2xpZW50SWQgICAgICAgICAgICAgICAgICAgIC0gQ2xpZW50IElEIG9mIHlvdXIgYXBwIHJlZ2lzdGVyZWQgd2l0aCBvdXIgQXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbCA6IGh0dHBzOi8vcG9ydGFsLmF6dXJlLmNvbS8jYmxhZGUvTWljcm9zb2Z0X0FBRF9JQU0vQWN0aXZlRGlyZWN0b3J5TWVudUJsYWRlL1JlZ2lzdGVyZWRBcHBzUHJldmlldyBpbiBNaWNyb3NvZnQgSWRlbnRpdHkgUGxhdGZvcm1cbiAqICAtIGF1dGhvcml0eSAgICAgICAgICAgICAgICAgICAtIFlvdSBjYW4gY29uZmlndXJlIGEgc3BlY2lmaWMgYXV0aG9yaXR5LCBkZWZhdWx0cyB0byBcIiBcIiBvciBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxuICogIC0gdmFsaWRhdGVBdXRob3JpdHkgICAgICAgICAgIC0gVXNlZCB0byB0dXJuIGF1dGhvcml0eSB2YWxpZGF0aW9uIG9uL29mZi4gV2hlbiBzZXQgdG8gdHJ1ZSAoZGVmYXVsdCksIE1TQUwgd2lsbCBjb21wYXJlIHRoZSBhcHBsaWNhdGlvbidzIGF1dGhvcml0eSBhZ2FpbnN0IHdlbGwta25vd24gVVJMcyB0ZW1wbGF0ZXMgcmVwcmVzZW50aW5nIHdlbGwtZm9ybWVkIGF1dGhvcml0aWVzLiBJdCBpcyB1c2VmdWwgd2hlbiB0aGUgYXV0aG9yaXR5IGlzIG9idGFpbmVkIGF0IHJ1biB0aW1lIHRvIHByZXZlbnQgTVNBTCBmcm9tIGRpc3BsYXlpbmcgYXV0aGVudGljYXRpb24gcHJvbXB0cyBmcm9tIG1hbGljaW91cyBwYWdlcy5cbiAqICAtIHJlZGlyZWN0VXJpICAgICAgICAgICAgICAgICAtIFRoZSByZWRpcmVjdCBVUkkgb2YgdGhlIGFwcGxpY2F0aW9uLCB0aGlzIHNob3VsZCBiZSBzYW1lIGFzIHRoZSB2YWx1ZSBpbiB0aGUgYXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbC5EZWZhdWx0cyB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxuICogIC0gcG9zdExvZ291dFJlZGlyZWN0VXJpICAgICAgIC0gVXNlZCB0byByZWRpcmVjdCB0aGUgdXNlciB0byB0aGlzIGxvY2F0aW9uIGFmdGVyIGxvZ291dC4gRGVmYXVsdHMgdG8gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYC5cbiAqICAtIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmwgICAtIFVzZWQgdG8gdHVybiBvZmYgZGVmYXVsdCBuYXZpZ2F0aW9uIHRvIHN0YXJ0IHBhZ2UgYWZ0ZXIgbG9naW4uIERlZmF1bHQgaXMgdHJ1ZS4gVGhpcyBpcyB1c2VkIG9ubHkgZm9yIHJlZGlyZWN0IGZsb3dzLlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgQXV0aE9wdGlvbnMgPSB7XG4gICAgY2xpZW50SWQ6IHN0cmluZztcbiAgICBhdXRob3JpdHk/OiBzdHJpbmc7XG4gICAgdmFsaWRhdGVBdXRob3JpdHk/OiBib29sZWFuO1xuICAgIHJlZGlyZWN0VXJpPzogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG4gICAgcG9zdExvZ291dFJlZGlyZWN0VXJpPzogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG4gICAgbmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybD86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFVzZSB0aGlzIHRvIGNvbmZpZ3VyZSB0aGUgYmVsb3cgY2FjaGUgY29uZmlndXJhdGlvbiBvcHRpb25zOlxuICpcbiAqIC0gY2FjaGVMb2NhdGlvbiAgICAgICAgICAgIC0gVXNlZCB0byBzcGVjaWZ5IHRoZSBjYWNoZUxvY2F0aW9uIHVzZXIgd2FudHMgdG8gc2V0LiBWYWxpZCB2YWx1ZXMgYXJlIFwibG9jYWxTdG9yYWdlXCIgYW5kIFwic2Vzc2lvblN0b3JhZ2VcIlxuICogLSBzdG9yZUF1dGhTdGF0ZUluQ29va2llICAgLSBJZiBzZXQsIE1TQUwgc3RvcmUncyB0aGUgYXV0aCByZXF1ZXN0IHN0YXRlIHJlcXVpcmVkIGZvciB2YWxpZGF0aW9uIG9mIHRoZSBhdXRoIGZsb3dzIGluIHRoZSBicm93c2VyIGNvb2tpZXMuIEJ5IGRlZmF1bHQgdGhpcyBmbGFnIGlzIHNldCB0byBmYWxzZS5cbiAqL1xuZXhwb3J0IHR5cGUgQ2FjaGVPcHRpb25zID0ge1xuICAgIGNhY2hlTG9jYXRpb24/OiBDYWNoZUxvY2F0aW9uO1xuICAgIHN0b3JlQXV0aFN0YXRlSW5Db29raWU/OiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBUZWxlbWV0cnkgQ29uZmlnIE9wdGlvbnNcbiAqIC0gYXBwbGljYXRpb25OYW1lICAgICAgICAgICAgICAtIE5hbWUgb2YgdGhlIGNvbnN1bWluZyBhcHBzIGFwcGxpY2F0aW9uXG4gKiAtIGFwcGxpY2F0aW9uVmVyc2lvbiAgICAgICAgICAgLSBWZXJpc29uIG9mIHRoZSBjb25zdW1pbmcgYXBwbGljYXRpb25cbiAqIC0gdGVsZW1ldHJ5RW1pdHRlciAgICAgICAgICAgICAtIEZ1bmN0aW9uIHdoZXJlIHRlbGVtZXRyeSBldmVudHMgYXJlIGZsdXNoZWQgdG9cbiAqL1xuZXhwb3J0IHR5cGUgVGVsZW1ldHJ5T3B0aW9ucyA9IHtcbiAgICBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZztcbiAgICBhcHBsaWNhdGlvblZlcnNpb246IHN0cmluZztcbiAgICB0ZWxlbWV0cnlFbWl0dGVyOiBUZWxlbWV0cnlFbWl0dGVyXG4gICAgLy8gVE9ETywgYWRkIG9ubHlBZGRGYWlsdXJlVGVsZW1ldHJ5IG9wdGlvblxufTtcblxuLyoqXG4gKiBMaWJyYXJ5IFNwZWNpZmljIE9wdGlvbnNcbiAqXG4gKiAtIGxvZ2dlciAgICAgICAgICAgICAgICAgICAgICAgLSBVc2VkIHRvIGluaXRpYWxpemUgdGhlIExvZ2dlciBvYmplY3Q7IFRPRE86IEV4cGFuZCBvbiBsb2dnZXIgZGV0YWlscyBvciBsaW5rIHRvIHRoZSBkb2N1bWVudGF0aW9uIG9uIGxvZ2dlclxuICogLSBsb2FkRnJhbWVUaW1lb3V0ICAgICAgICAgICAgIC0gbWF4aW11bSB0aW1lIHRoZSBsaWJyYXJ5IHNob3VsZCB3YWl0IGZvciBhIGZyYW1lIHRvIGxvYWRcbiAqIC0gdG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcyAgICAtIHNldHMgdGhlIHdpbmRvdyBvZiBvZmZzZXQgbmVlZGVkIHRvIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJ5XG4gKiAtIG5hdmlnYXRlRnJhbWVXYWl0ICAgICAgICAgICAgLSBzZXRzIHRoZSB3YWl0IHRpbWUgZm9yIGhpZGRlbiBpRnJhbWUgbmF2aWdhdGlvblxuICovXG5leHBvcnQgdHlwZSBTeXN0ZW1PcHRpb25zID0ge1xuICAgIGxvZ2dlcj86IExvZ2dlcjtcbiAgICBsb2FkRnJhbWVUaW1lb3V0PzogbnVtYmVyO1xuICAgIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM/OiBudW1iZXI7XG4gICAgbmF2aWdhdGVGcmFtZVdhaXQ/OiBudW1iZXI7XG4gICAgdGVsZW1ldHJ5PzogVGVsZW1ldHJ5T3B0aW9uc1xufTtcblxuLyoqXG4gKiBBcHAvRnJhbWV3b3JrIHNwZWNpZmljIGVudmlyb25tZW50IHN1cHBvcnRcbiAqXG4gKiAtIGlzQW5ndWxhciAgICAgICAgICAgICAgICAtIGZsYWcgc2V0IHRvIGRldGVybWluZSBpZiBpdCBpcyBBbmd1bGFyIEZyYW1ld29yay4gTVNBTCB1c2VzIHRoaXMgdG8gYnJvYWRjYXN0IHRva2Vucy4gTW9yZSB0byBjb21lIGhlcmU6IGRldGFuZ2xlIHRoaXMgZGVwZW5kZW5jeSBmcm9tIGNvcmUuXG4gKiAtIHVucHJvdGVjdGVkUmVzb3VyY2VzICAgICAtIEFycmF5IG9mIFVSSSdzIHdoaWNoIGFyZSB1bnByb3RlY3RlZCByZXNvdXJjZXMuIE1TQUwgd2lsbCBub3QgYXR0YWNoIGEgdG9rZW4gdG8gb3V0Z29pbmcgcmVxdWVzdHMgdGhhdCBoYXZlIHRoZXNlIFVSSS4gRGVmYXVsdHMgdG8gJ251bGwnLlxuICogLSBwcm90ZWN0ZWRSZXNvdXJjZU1hcCAgICAgLSBUaGlzIGlzIG1hcHBpbmcgb2YgcmVzb3VyY2VzIHRvIHNjb3BlcyB1c2VkIGJ5IE1TQUwgZm9yIGF1dG9tYXRpY2FsbHkgYXR0YWNoaW5nIGFjY2VzcyB0b2tlbnMgaW4gd2ViIEFQSSBjYWxscy5BIHNpbmdsZSBhY2Nlc3MgdG9rZW4gaXMgb2J0YWluZWQgZm9yIHRoZSByZXNvdXJjZS4gU28geW91IGNhbiBtYXAgYSBzcGVjaWZpYyByZXNvdXJjZSBwYXRoIGFzIGZvbGxvd3M6IHtcImh0dHBzOi8vZ3JhcGgubWljcm9zb2Z0LmNvbS92MS4wL21lXCIsIFtcInVzZXIucmVhZFwiXX0sIG9yIHRoZSBhcHAgVVJMIG9mIHRoZSByZXNvdXJjZSBhczoge1wiaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL1wiLCBbXCJ1c2VyLnJlYWRcIiwgXCJtYWlsLnNlbmRcIl19LiBUaGlzIGlzIHJlcXVpcmVkIGZvciBDT1JTIGNhbGxzLlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgRnJhbWV3b3JrT3B0aW9ucyA9IHtcbiAgICBpc0FuZ3VsYXI/OiBib29sZWFuO1xuICAgIHVucHJvdGVjdGVkUmVzb3VyY2VzPzogQXJyYXk8c3RyaW5nPjtcbiAgICBwcm90ZWN0ZWRSZXNvdXJjZU1hcD86IE1hcDxzdHJpbmcsIEFycmF5PHN0cmluZz4+O1xufTtcblxuLyoqXG4gKiBVc2UgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIGNvbmZpZ3VyZSBNU0FMIGFuZCBpbml0aWFsaXplIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbi5cbiAqXG4gKiBUaGlzIG9iamVjdCBhbGxvd3MgeW91IHRvIGNvbmZpZ3VyZSBpbXBvcnRhbnQgZWxlbWVudHMgb2YgTVNBTCBmdW5jdGlvbmFsaXR5OlxuICogLSBhdXRoOiB0aGlzIGlzIHdoZXJlIHlvdSBjb25maWd1cmUgYXV0aCBlbGVtZW50cyBsaWtlIGNsaWVudElELCAgYXV0aG9yaXR5IHVzZWQgZm9yIGF1dGhlbnRpY2F0aW5nIGFnYWluc3QgdGhlIE1pY3Jvc29mdCBJZGVudGl0eSBQbGF0Zm9ybVxuICogLSBjYWNoZTogdGhpcyBpcyB3aGVyZSB5b3UgY29uZmlndXJlIGNhY2hlIGxvY2F0aW9uIGFuZCB3aGV0aGVyIHRvIHN0b3JlIGNhY2hlIGluIGNvb2tpZXNcbiAqIC0gc3lzdGVtOiB0aGlzIGlzIHdoZXJlIHlvdSBjYW4gY29uZmlndXJlIHRoZSBsb2dnZXIsIGZyYW1lIHRpbWVvdXQgZXRjLlxuICogLSBmcmFtZXdvcms6IHRoaXMgaXMgd2hlcmUgeW91IGNhbiBjb25maWd1cmUgdGhlIHJ1bm5pbmcgbW9kZSBvZiBhbmd1bGFyLiBNb3JlIHRvIGNvbWUgaGVyZSBzb29uLlxuICovXG5leHBvcnQgdHlwZSBDb25maWd1cmF0aW9uID0ge1xuICAgIGF1dGg6IEF1dGhPcHRpb25zLFxuICAgIGNhY2hlPzogQ2FjaGVPcHRpb25zLFxuICAgIHN5c3RlbT86IFN5c3RlbU9wdGlvbnMsXG4gICAgZnJhbWV3b3JrPzogRnJhbWV3b3JrT3B0aW9uc1xufTtcblxuY29uc3QgREVGQVVMVF9BVVRIX09QVElPTlM6IEF1dGhPcHRpb25zID0ge1xuICAgIGNsaWVudElkOiBcIlwiLFxuICAgIGF1dGhvcml0eTogbnVsbCxcbiAgICB2YWxpZGF0ZUF1dGhvcml0eTogdHJ1ZSxcbiAgICByZWRpcmVjdFVyaTogKCkgPT4gVXJsVXRpbHMuZ2V0RGVmYXVsdFJlZGlyZWN0VXJpKCksXG4gICAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiAoKSA9PiBVcmxVdGlscy5nZXREZWZhdWx0UmVkaXJlY3RVcmkoKSxcbiAgICBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsOiB0cnVlXG59O1xuXG5jb25zdCBERUZBVUxUX0NBQ0hFX09QVElPTlM6IENhY2hlT3B0aW9ucyA9IHtcbiAgICBjYWNoZUxvY2F0aW9uOiBcInNlc3Npb25TdG9yYWdlXCIsXG4gICAgc3RvcmVBdXRoU3RhdGVJbkNvb2tpZTogZmFsc2Vcbn07XG5cbmNvbnN0IERFRkFVTFRfU1lTVEVNX09QVElPTlM6IFN5c3RlbU9wdGlvbnMgPSB7XG4gICAgbG9nZ2VyOiBuZXcgTG9nZ2VyKG51bGwpLFxuICAgIGxvYWRGcmFtZVRpbWVvdXQ6IEZSQU1FX1RJTUVPVVQsXG4gICAgdG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kczogT0ZGU0VULFxuICAgIG5hdmlnYXRlRnJhbWVXYWl0OiBOQVZJR0FURV9GUkFNRV9XQUlUXG59O1xuXG5jb25zdCBERUZBVUxUX0ZSQU1FV09SS19PUFRJT05TOiBGcmFtZXdvcmtPcHRpb25zID0ge1xuICAgIGlzQW5ndWxhcjogZmFsc2UsXG4gICAgdW5wcm90ZWN0ZWRSZXNvdXJjZXM6IG5ldyBBcnJheTxzdHJpbmc+KCksXG4gICAgcHJvdGVjdGVkUmVzb3VyY2VNYXA6IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PigpXG59O1xuXG4vKipcbiAqIE1TQUwgZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSBkZWZhdWx0IG9wdGlvbnMgd2hlbiBub3QgZXhwbGljaXRseSBjb25maWd1cmVkIGZyb20gYXBwIGRldmVsb3BlclxuICpcbiAqIEBwYXJhbSBUQXV0aE9wdGlvbnNcbiAqIEBwYXJhbSBUQ2FjaGVPcHRpb25zXG4gKiBAcGFyYW0gVFN5c3RlbU9wdGlvbnNcbiAqIEBwYXJhbSBURnJhbWV3b3JrT3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRDb25maWd1cmF0aW9uIG9iamVjdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbmZpZ3VyYXRpb24oeyBhdXRoLCBjYWNoZSA9IHt9LCBzeXN0ZW0gPSB7fSwgZnJhbWV3b3JrID0ge319OiBDb25maWd1cmF0aW9uKTogQ29uZmlndXJhdGlvbiB7XG4gICAgY29uc3Qgb3ZlcmxheWVkQ29uZmlnOiBDb25maWd1cmF0aW9uID0ge1xuICAgICAgICBhdXRoOiB7IC4uLkRFRkFVTFRfQVVUSF9PUFRJT05TLCAuLi5hdXRoIH0sXG4gICAgICAgIGNhY2hlOiB7IC4uLkRFRkFVTFRfQ0FDSEVfT1BUSU9OUywgLi4uY2FjaGUgfSxcbiAgICAgICAgc3lzdGVtOiB7IC4uLkRFRkFVTFRfU1lTVEVNX09QVElPTlMsIC4uLnN5c3RlbSB9LFxuICAgICAgICBmcmFtZXdvcms6IHsgLi4uREVGQVVMVF9GUkFNRVdPUktfT1BUSU9OUywgLi4uZnJhbWV3b3JrIH1cbiAgICB9O1xuICAgIHJldHVybiBvdmVybGF5ZWRDb25maWc7XG59XG5cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL1NlcnZlckVycm9yXCI7XG5cbmV4cG9ydCBjb25zdCBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZSA9IHtcbiAgICBpbnRlcmFjdGlvblJlcXVpcmVkOiB7XG4gICAgICAgIGNvZGU6IFwiaW50ZXJhY3Rpb25fcmVxdWlyZWRcIlxuICAgIH0sXG4gICAgY29uc2VudFJlcXVpcmVkOiB7XG4gICAgICAgIGNvZGU6IFwiY29uc2VudF9yZXF1aXJlZFwiXG4gICAgfSxcbiAgICBsb2dpblJlcXVpcmVkOiB7XG4gICAgICAgIGNvZGU6IFwibG9naW5fcmVxdWlyZWRcIlxuICAgIH0sXG59O1xuXG4vKipcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZSB1c2VyIGlzIHJlcXVpcmVkIHRvIHBlcmZvcm0gYW4gaW50ZXJhY3RpdmUgdG9rZW4gcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgZXh0ZW5kcyBTZXJ2ZXJFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXCI7XG5cbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IucHJvdG90eXBlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNJbnRlcmFjdGlvblJlcXVpcmVkRXJyb3IoZXJyb3JTdHJpbmc6IHN0cmluZykgOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25SZXF1aXJlZENvZGVzID0gW1xuICAgICAgICAgICAgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UuaW50ZXJhY3Rpb25SZXF1aXJlZC5jb2RlLFxuICAgICAgICAgICAgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UuY29uc2VudFJlcXVpcmVkLmNvZGUsXG4gICAgICAgICAgICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5sb2dpblJlcXVpcmVkLmNvZGVcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gZXJyb3JTdHJpbmcgJiYgaW50ZXJhY3Rpb25SZXF1aXJlZENvZGVzLmluZGV4T2YoZXJyb3JTdHJpbmcpID4gLTE7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUxvZ2luUmVxdWlyZWRBdXRoRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUmVxdWlyZWQuY29kZSwgZXJyb3JEZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UuaW50ZXJhY3Rpb25SZXF1aXJlZC5jb2RlLCBlcnJvckRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDb25zZW50UmVxdWlyZWRBdXRoRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmNvbnNlbnRSZXF1aXJlZC5jb2RlLCBlcnJvckRlc2MpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcblxuZXhwb3J0IHR5cGUgQXV0aFJlc3BvbnNlID0ge1xuICAgIHVuaXF1ZUlkOiBzdHJpbmc7XG4gICAgdGVuYW50SWQ6IHN0cmluZztcbiAgICB0b2tlblR5cGU6IHN0cmluZztcbiAgICBpZFRva2VuOiBJZFRva2VuO1xuICAgIGlkVG9rZW5DbGFpbXM6IFN0cmluZ0RpY3Q7XG4gICAgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgICBzY29wZXM6IEFycmF5PHN0cmluZz47XG4gICAgZXhwaXJlc09uOiBEYXRlO1xuICAgIGFjY291bnQ6IEFjY291bnQ7XG4gICAgYWNjb3VudFN0YXRlOiBzdHJpbmc7XG4gICAgZnJvbUNhY2hlOiBib29sZWFuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSZXNwb25zZVN0YXRlT25seShzdGF0ZTogc3RyaW5nKSA6IEF1dGhSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5pcXVlSWQ6IFwiXCIsXG4gICAgICAgIHRlbmFudElkOiBcIlwiLFxuICAgICAgICB0b2tlblR5cGU6IFwiXCIsXG4gICAgICAgIGlkVG9rZW46IG51bGwsXG4gICAgICAgIGlkVG9rZW5DbGFpbXM6IG51bGwsXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBcIlwiLFxuICAgICAgICBzY29wZXM6IG51bGwsXG4gICAgICAgIGV4cGlyZXNPbjogbnVsbCxcbiAgICAgICAgYWNjb3VudDogbnVsbCxcbiAgICAgICAgYWNjb3VudFN0YXRlOiBzdGF0ZSxcbiAgICAgICAgZnJvbUNhY2hlOiBmYWxzZVxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUyB9IGZyb20gXCIuL1RlbGVtZXRyeUNvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgICBFVkVOVF9OQU1FX0tFWSxcbiAgICBTVEFSVF9USU1FX0tFWSxcbiAgICBFTEFQU0VEX1RJTUVfS0VZXG59IGZyb20gXCIuL1RlbGVtZXRyeUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgcHJlcGVuZEV2ZW50TmFtZVByZWZpeCB9IGZyb20gXCIuL1RlbGVtZXRyeVV0aWxzXCI7XG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuLi91dGlscy9DcnlwdG9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlFdmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXJ0VGltZXN0YW1wOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGV2ZW50OiBhbnk7IC8vIFRPRE8gVFlQRSBUSElTXG4gICAgcHVibGljIGV2ZW50SWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGV2ZW50TmFtZTogc3RyaW5nLCBjb3JyZWxhdGlvbklkOiBzdHJpbmcpIHtcblxuICAgICAgICB0aGlzLnN0YXJ0VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5ldmVudElkID0gQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xuICAgICAgICB0aGlzLmV2ZW50ID0ge1xuICAgICAgICAgICAgW3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoRVZFTlRfTkFNRV9LRVkpXTogZXZlbnROYW1lLFxuICAgICAgICAgICAgW3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoU1RBUlRfVElNRV9LRVkpXTogdGhpcy5zdGFydFRpbWVzdGFtcCxcbiAgICAgICAgICAgIFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KEVMQVBTRURfVElNRV9LRVkpXTogLTEsXG4gICAgICAgICAgICBbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleX1gXTogY29ycmVsYXRpb25JZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RWxhcHNlZFRpbWUodGltZTogTnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFTEFQU0VEX1RJTUVfS0VZKV0gPSB0aW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xuICAgICAgICAvLyBTZXQgZHVyYXRpb24gb2YgZXZlbnRcbiAgICAgICAgdGhpcy5zZXRFbGFwc2VkVGltZSgrRGF0ZS5ub3coKSAtICt0aGlzLnN0YXJ0VGltZXN0YW1wKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRlbGVtZXRyeUNvcnJlbGF0aW9uSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleX1gXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRlbGVtZXRyeUNvcnJlbGF0aW9uSWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmV2ZW50W2Ake1RFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTLk1zYWxDb3JyZWxhdGlvbklkQ29uc3RTdHJLZXl9YF0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGV2ZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KEVWRU5UX05BTUVfS0VZKV07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCgpOiBvYmplY3Qge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4udGhpcy5ldmVudCxcbiAgICAgICAgICAgIGV2ZW50SWQ6IHRoaXMuZXZlbnRJZFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImV4cG9ydCB7IFVzZXJBZ2VudEFwcGxpY2F0aW9uIH0gZnJvbSBcIi4vVXNlckFnZW50QXBwbGljYXRpb25cIjtcbmV4cG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlclwiO1xuZXhwb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmV4cG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XG5leHBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcbmV4cG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuL2F1dGhvcml0eS9BdXRob3JpdHlcIjtcbmV4cG9ydCB7IENhY2hlUmVzdWx0IH0gZnJvbSBcIi4vVXNlckFnZW50QXBwbGljYXRpb25cIjtcbmV4cG9ydCB7IENhY2hlTG9jYXRpb24sIENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XG5leHBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcIjtcbmV4cG9ydCB7IEF1dGhSZXNwb25zZSB9IGZyb20gXCIuL0F1dGhSZXNwb25zZVwiO1xuZXhwb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi91dGlscy9DcnlwdG9VdGlsc1wiO1xuXG4vLyBFcnJvcnNcbmV4cG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0F1dGhFcnJvclwiO1xuZXhwb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XG5leHBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL2Vycm9yL1NlcnZlckVycm9yXCI7XG5leHBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbmV4cG9ydCB7IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXCI7XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1VybFV0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5LZXkge1xuXG4gICAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gICAgY2xpZW50SWQ6IHN0cmluZztcbiAgICBzY29wZXM6IHN0cmluZztcbiAgICBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCBzY29wZXM6IHN0cmluZywgdWlkOiBzdHJpbmcsIHV0aWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmF1dGhvcml0eSA9IFVybFV0aWxzLkNhbm9uaWNhbGl6ZVVyaShhdXRob3JpdHkpO1xuICAgICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgICAgIHRoaXMuc2NvcGVzID0gc2NvcGVzO1xuICAgICAgICB0aGlzLmhvbWVBY2NvdW50SWRlbnRpZmllciA9IENyeXB0b1V0aWxzLmJhc2U2NEVuY29kZSh1aWQpICsgXCIuXCIgKyBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodXRpZCk7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5WYWx1ZSB7XG5cbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICAgIGlkVG9rZW46IHN0cmluZztcbiAgICBleHBpcmVzSW46IHN0cmluZztcbiAgICBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIGlkVG9rZW46IHN0cmluZywgZXhwaXJlc0luOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy5pZFRva2VuID0gaWRUb2tlbjtcbiAgICAgICAgdGhpcy5leHBpcmVzSW4gPSBleHBpcmVzSW47XG4gICAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gaG9tZUFjY291bnRJZGVudGlmaWVyO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9hdXRob3JpdHkvQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL3V0aWxzL0NyeXB0b1V0aWxzXCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcIjtcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgeyBTU09UeXBlcywgQ29uc3RhbnRzLCBQcm9tcHRTdGF0ZSwgbGlicmFyeVZlcnNpb24gfSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcblxuLyoqXG4gKiBOb25jZTogT0lEQyBOb25jZSBkZWZpbml0aW9uOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNJRFRva2VuXG4gKiBTdGF0ZTogT0F1dGggU3BlYzogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NDkjc2VjdGlvbi0xMC4xMlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMge1xuXG4gICAgYXV0aG9yaXR5SW5zdGFuY2U6IEF1dGhvcml0eTtcbiAgICBjbGllbnRJZDogc3RyaW5nO1xuICAgIHNjb3BlczogQXJyYXk8c3RyaW5nPjtcblxuICAgIG5vbmNlOiBzdHJpbmc7XG4gICAgc3RhdGU6IHN0cmluZztcblxuICAgIC8vIHRlbGVtZXRyeSBpbmZvcm1hdGlvblxuICAgIHhDbGllbnRWZXI6IHN0cmluZztcbiAgICB4Q2xpZW50U2t1OiBzdHJpbmc7XG4gICAgY29ycmVsYXRpb25JZDogc3RyaW5nO1xuXG4gICAgcmVzcG9uc2VUeXBlOiBzdHJpbmc7XG4gICAgcmVkaXJlY3RVcmk6IHN0cmluZztcblxuICAgIHByb21wdFZhbHVlOiBzdHJpbmc7XG4gICAgY2xhaW1zVmFsdWU6IHN0cmluZztcblxuICAgIHF1ZXJ5UGFyYW1ldGVyczogc3RyaW5nO1xuICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IGF1dGhvcml0eSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA/IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UuQ2Fub25pY2FsQXV0aG9yaXR5IDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlcbiAgICAgKiBAcGFyYW0gY2xpZW50SWRcbiAgICAgKiBAcGFyYW0gc2NvcGVcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VUeXBlXG4gICAgICogQHBhcmFtIHJlZGlyZWN0VXJpXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGF1dGhvcml0eTogQXV0aG9yaXR5LCBjbGllbnRJZDogc3RyaW5nLCByZXNwb25zZVR5cGU6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzdGF0ZTogc3RyaW5nLCBjb3JyZWxhdGlvbklkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA9IGF1dGhvcml0eTtcbiAgICAgICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xuICAgICAgICB0aGlzLm5vbmNlID0gQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xuXG4gICAgICAgIC8vIHNldCBzY29wZSB0byBjbGllbnRJZCBpZiBudWxsXG4gICAgICAgIHRoaXMuc2NvcGVzID0gc2NvcGVzPyBbIC4uLnNjb3Blc10gOiBbY2xpZW50SWRdO1xuXG4gICAgICAgIC8vIHNldCBzdGF0ZSAoYWxyZWFkeSBzZXQgYXQgdG9wIGxldmVsKVxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICAgICAgLy8gc2V0IGNvcnJlbGF0aW9uSWRcbiAgICAgICAgdGhpcy5jb3JyZWxhdGlvbklkID0gY29ycmVsYXRpb25JZDtcblxuICAgICAgICAvLyB0ZWxlbWV0cnkgaW5mb3JtYXRpb25cbiAgICAgICAgdGhpcy54Q2xpZW50U2t1ID0gXCJNU0FMLkpTXCI7XG4gICAgICAgIHRoaXMueENsaWVudFZlciA9IGxpYnJhcnlWZXJzaW9uKCk7XG5cbiAgICAgICAgdGhpcy5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGU7XG4gICAgICAgIHRoaXMucmVkaXJlY3RVcmkgPSByZWRpcmVjdFVyaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogVXRpbGl0eSB0byBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgYW5kIEV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIFNlcnZlclJlcXVlc3RQYXJhbWVyZXJzXG4gICAgICogQHBhcmFtIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0XG4gICAgICovXG4gICAgcG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50OiBBY2NvdW50LCByZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIGFkYWxJZFRva2VuT2JqZWN0PzogYW55KTogdm9pZCB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtZXRlcnM6IFN0cmluZ0RpY3QgPSB7fTtcblxuICAgICAgICBpZiAocmVxdWVzdCkge1xuICAgICAgICAgICAgLy8gYWRkIHRoZSBwcm9tcHQgcGFyYW1ldGVyIHRvIHNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIGlmIHBhc3NlZFxuICAgICAgICAgICAgaWYgKHJlcXVlc3QucHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRWYWx1ZSA9IHJlcXVlc3QucHJvbXB0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgY2xhaW1zIGNoYWxsZW5nZSB0byBzZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyBpZiBwYXNzZWRcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmNsYWltc1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYWltc1ZhbHVlID0gcmVxdWVzdC5jbGFpbXNSZXF1ZXN0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGUgZGV2ZWxvcGVyIHByb3ZpZGVzIG9uZSBvZiB0aGVzZSwgZ2l2ZSBwcmVmZXJlbmNlIHRvIGRldmVsb3BlciBjaG9pY2VcbiAgICAgICAgICAgIGlmIChTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycy5pc1NTT1BhcmFtKHJlcXVlc3QpKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gdGhpcy5jb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihyZXF1ZXN0LCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhZGFsSWRUb2tlbk9iamVjdCkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gdGhpcy5jb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihudWxsLCBhZGFsSWRUb2tlbk9iamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBhZGRzIHNpZC9sb2dpbl9oaW50IGlmIG5vdCBwb3B1bGF0ZWQ7IHBvcHVsYXRlcyBkb21haW5fcmVxLCBsb2dpbl9yZXEgYW5kIGRvbWFpbl9oaW50XG4gICAgICAgICAqIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJDYWxsaW5nIGFkZEhpbnQgcGFyYW1ldGVyc1wiKTtcbiAgICAgICAgICovXG4gICAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMuYWRkSGludFBhcmFtZXRlcnMoYWNjb3VudCwgcXVlcnlQYXJhbWV0ZXJzKTtcblxuICAgICAgICAvLyBzYW5pdHkgY2hlY2sgZm9yIGRldmVsb3BlciBwYXNzZWQgZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICAgICAgY29uc3QgZVFQYXJhbXM6IFN0cmluZ0RpY3QgPSByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzO1xuXG4gICAgICAgIC8vIFBvcHVsYXRlIHRoZSBleHRyYVF1ZXJ5UGFyYW1ldGVycyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMgPSBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycy5nZW5lcmF0ZVF1ZXJ5UGFyYW1ldGVyc1N0cmluZyhxdWVyeVBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmV4dHJhUXVlcnlQYXJhbWV0ZXJzID0gU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuZ2VuZXJhdGVRdWVyeVBhcmFtZXRlcnNTdHJpbmcoZVFQYXJhbXMpO1xuICAgIH1cblxuICAgIC8vICNyZWdpb24gUXVlcnlQYXJhbSBoZWxwZXJzXG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlciBmb3IgdGhlIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxuICAgICAqIGluIGFueSBsb2dpbigpIG9yIGFjcXVpcmVUb2tlbigpIGNhbGxzXG4gICAgICogQHBhcmFtIGlkVG9rZW5PYmplY3RcbiAgICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0gc2lkXG4gICAgICogQHBhcmFtIGxvZ2luSGludFxuICAgICAqL1xuICAgIC8vIFRPRE86IGNoZWNrIGhvdyB0aGlzIGJlaGF2ZXMgd2hlbiBkb21haW5faGludCBvbmx5IGlzIHNlbnQgaW4gZXh0cmFwYXJhbWV0ZXJzIGFuZCBpZFRva2VuIGhhcyBubyB1cG4uXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIGlkVG9rZW5PYmplY3Q6IGFueSk6IFN0cmluZ0RpY3Qge1xuXG4gICAgICAgIC8vIHByZWZlcmVuY2Ugb3JkZXI6IGFjY291bnQgPiBzaWQgPiBsb2dpbl9oaW50XG4gICAgICAgIGxldCBzc29UeXBlO1xuICAgICAgICBsZXQgc3NvRGF0YTtcbiAgICAgICAgbGV0IHNlcnZlclJlcVBhcmFtOiBTdHJpbmdEaWN0ID0ge307XG4gICAgICAgIC8vIGlmIGFjY291bnQgaW5mbyBpcyBwYXNzZWQsIGFjY291bnQuc2lkID4gYWNjb3VudC5sb2dpbl9oaW50XG4gICAgICAgIGlmIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5hY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IHJlcXVlc3QuYWNjb3VudDtcbiAgICAgICAgICAgICAgICBpZiAoYWNjb3VudC5zaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLlNJRDtcbiAgICAgICAgICAgICAgICAgICAgc3NvRGF0YSA9IGFjY291bnQuc2lkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhY2NvdW50LnVzZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5MT0dJTl9ISU5UO1xuICAgICAgICAgICAgICAgICAgICBzc29EYXRhID0gYWNjb3VudC51c2VyTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaWQgZnJvbSByZXF1ZXN0XG4gICAgICAgICAgICBlbHNlIGlmIChyZXF1ZXN0LnNpZCkge1xuICAgICAgICAgICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5TSUQ7XG4gICAgICAgICAgICAgICAgc3NvRGF0YSA9IHJlcXVlc3Quc2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbG9naW5IaW50IGZyb20gcmVxdWVzdFxuICAgICAgICAgICAgZWxzZSBpZiAocmVxdWVzdC5sb2dpbkhpbnQpIHtcbiAgICAgICAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuTE9HSU5fSElOVDtcbiAgICAgICAgICAgICAgICBzc29EYXRhID0gcmVxdWVzdC5sb2dpbkhpbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRhbElkVG9rZW4gcmV0cmlldmVkIGZyb20gY2FjaGVcbiAgICAgICAgZWxzZSBpZiAoaWRUb2tlbk9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGlkVG9rZW5PYmplY3QuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLnVwbikpIHtcbiAgICAgICAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuSURfVE9LRU47XG4gICAgICAgICAgICAgICAgc3NvRGF0YSA9IGlkVG9rZW5PYmplY3QudXBuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XG4gICAgICAgICAgICAgICAgc3NvRGF0YSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2ZXJSZXFQYXJhbSA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKHNzb1R5cGUsIHNzb0RhdGEpO1xuXG4gICAgICAgIC8vIGFkZCB0aGUgSG9tZUFjY291bnRJZGVudGlmaWVyIGluZm8vIGRvbWFpbl9oaW50XG4gICAgICAgIGlmIChyZXF1ZXN0ICYmIHJlcXVlc3QuYWNjb3VudCAmJiByZXF1ZXN0LmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBzZXJ2ZXJSZXFQYXJhbSA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lELCByZXF1ZXN0LmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyLCBzZXJ2ZXJSZXFQYXJhbSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VydmVyUmVxUGFyYW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICogQWRkcyBsb2dpbl9oaW50IHRvIGF1dGhvcml6YXRpb24gVVJMIHdoaWNoIGlzIHVzZWQgdG8gcHJlLWZpbGwgdGhlIHVzZXJuYW1lIGZpZWxkIG9mIHNpZ24gaW4gcGFnZSBmb3IgdGhlIHVzZXIgaWYga25vd24gYWhlYWQgb2YgdGltZVxuICAgICAqIGRvbWFpbl9oaW50IGNhbiBiZSBvbmUgb2YgdXNlcnMvb3JnYW5pemF0aW9ucyB3aGljaCB3aGVuIGFkZGVkIHNraXBzIHRoZSBlbWFpbCBiYXNlZCBkaXNjb3ZlcnkgcHJvY2VzcyBvZiB0aGUgdXNlclxuICAgICAqIGRvbWFpbl9yZXEgdXRpZCByZWNlaXZlZCBhcyBwYXJ0IG9mIHRoZSBjbGllbnRJbmZvXG4gICAgICogbG9naW5fcmVxIHVpZCByZWNlaXZlZCBhcyBwYXJ0IG9mIGNsaWVudEluZm9cbiAgICAgKiBBbHNvIGRvZXMgYSBzYW5pdHkgY2hlY2sgZm9yIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHBhc3NlZCBieSB0aGUgdXNlciB0byBlbnN1cmUgbm8gcmVwZWF0IHF1ZXJ5UGFyYW1ldGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtAbGluayBBY2NvdW50fSBhY2NvdW50IC0gQWNjb3VudCBmb3Igd2hpY2ggdGhlIHRva2VuIGlzIHJlcXVlc3RlZFxuICAgICAqIEBwYXJhbSBxdWVyeXBhcmFtc1xuICAgICAqIEBwYXJhbSB7QGxpbmsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnN9XG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkSGludFBhcmFtZXRlcnMoYWNjb3VudDogQWNjb3VudCwgcVBhcmFtczogU3RyaW5nRGljdCk6IFN0cmluZ0RpY3Qge1xuICAgIC8qXG4gICAgICogVGhpcyBpcyBhIGZpbmFsIGNoZWNrIGZvciBhbGwgcXVlcnlQYXJhbXMgYWRkZWQgc28gZmFyOyBwcmVmZXJlbmNlIG9yZGVyOiBzaWQgPiBsb2dpbl9oaW50XG4gICAgICogc2lkIGNhbm5vdCBiZSBwYXNzZWQgYWxvbmcgd2l0aCBsb2dpbl9oaW50IG9yIGRvbWFpbl9oaW50LCBoZW5jZSB3ZSBjaGVjayBib3RoIGFyZSBub3QgcG9wdWxhdGVkIHlldCBpbiBxdWVyeVBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICAgICAgaWYgKGFjY291bnQgJiYgIXFQYXJhbXNbU1NPVHlwZXMuU0lEXSkge1xuICAgICAgICAgICAgLy8gc2lkIC0gcG9wdWxhdGUgb25seSBpZiBsb2dpbl9oaW50IGlzIG5vdCBhbHJlYWR5IHBvcHVsYXRlZCBhbmQgdGhlIGFjY291bnQgaGFzIHNpZFxuICAgICAgICAgICAgY29uc3QgcG9wdWxhdGVTSUQgPSAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9ISU5UXSAmJiBhY2NvdW50LnNpZCAmJiB0aGlzLnByb21wdFZhbHVlID09PSBQcm9tcHRTdGF0ZS5OT05FO1xuICAgICAgICAgICAgaWYgKHBvcHVsYXRlU0lEKSB7XG4gICAgICAgICAgICAgICAgcVBhcmFtcyA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLlNJRCwgYWNjb3VudC5zaWQsIHFQYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbG9naW5faGludCAtIGFjY291bnQudXNlck5hbWVcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVsYXRlTG9naW5IaW50ID0gIXFQYXJhbXNbU1NPVHlwZXMuTE9HSU5fSElOVF0gJiYgYWNjb3VudC51c2VyTmFtZSAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShhY2NvdW50LnVzZXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAocG9wdWxhdGVMb2dpbkhpbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcVBhcmFtcyA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkxPR0lOX0hJTlQsIGFjY291bnQudXNlck5hbWUsIHFQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcG9wdWxhdGVSZXFQYXJhbXMgPSAhcVBhcmFtc1tTU09UeXBlcy5ET01BSU5fUkVRXSAmJiAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9SRVFdO1xuICAgICAgICAgICAgaWYgKHBvcHVsYXRlUmVxUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcVBhcmFtcyA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lELCBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllciwgcVBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcVBhcmFtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgU0lEIHRvIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHNpZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1NPUGFyYW1ldGVyKHNzb1R5cGU6IHN0cmluZywgc3NvRGF0YTogc3RyaW5nLCBzc29QYXJhbT86IFN0cmluZ0RpY3QpOiBTdHJpbmdEaWN0IHtcbiAgICAgICAgaWYgKCFzc29QYXJhbSkge1xuICAgICAgICAgICAgc3NvUGFyYW0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3NvRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHNzb1BhcmFtO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChzc29UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLlNJRDoge1xuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLlNJRF0gPSBzc29EYXRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5JRF9UT0tFTjoge1xuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX0hJTlRdID0gc3NvRGF0YTtcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5MT0dJTl9ISU5UOiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fSElOVF0gPSBzc29EYXRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5PUkdBTklaQVRJT05TOiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgU1NPVHlwZXMuQ09OU1VNRVJTOiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuQ09OU1VNRVJTO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5IT01FQUNDT1VOVF9JRDoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVBY2NvdW50SWQgPSBzc29EYXRhLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1aWQgPSBDcnlwdG9VdGlscy5iYXNlNjREZWNvZGUoaG9tZUFjY291bnRJZFswXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXRpZCA9IENyeXB0b1V0aWxzLmJhc2U2NERlY29kZShob21lQWNjb3VudElkWzFdKTtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGRvbWFpbl9yZXEgYW5kIGxvZ2luX3JlcSBhcmUgbm90IG5lZWRlZCBhY2NvcmRpbmcgdG8gZVNUUyB0ZWFtXG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fUkVRXSA9IHVpZDtcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fUkVRXSA9IHV0aWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodXRpZCA9PT0gQ29uc3RhbnRzLmNvbnN1bWVyc1V0aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuQ09OU1VNRVJTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLkxPR0lOX1JFUToge1xuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX1JFUV0gPSBzc29EYXRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5ET01BSU5fUkVROiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX1JFUV0gPSBzc29EYXRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNzb1BhcmFtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgdG8gZ2VuZXJhdGUgYSBRdWVyeVBhcmFtZXRlclN0cmluZyBmcm9tIGEgS2V5LVZhbHVlIG1hcHBpbmcgb2YgZXh0cmFRdWVyeVBhcmFtZXRlcnMgcGFzc2VkXG4gICAgICogQHBhcmFtIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgICovXG4gICAgc3RhdGljIGdlbmVyYXRlUXVlcnlQYXJhbWV0ZXJzU3RyaW5nKHF1ZXJ5UGFyYW1ldGVyczogU3RyaW5nRGljdCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBwYXJhbXNTdHJpbmc6IHN0cmluZyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1ldGVycykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbWV0ZXJzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNTdHJpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNTdHJpbmcgPSBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5UGFyYW1ldGVyc1trZXldKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zU3RyaW5nICs9IGAmJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5UGFyYW1ldGVyc1trZXldKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtc1N0cmluZztcbiAgICB9XG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBTU08gcGFyYW1zIHNldCBpbiB0aGUgUmVxdWVzdFxuICAgICAqIEBwYXJhbSByZXF1ZXN0XG4gICAgICovXG4gICAgc3RhdGljIGlzU1NPUGFyYW0ocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0ICYmIChyZXF1ZXN0LmFjY291bnQgfHwgcmVxdWVzdC5zaWQgfHwgcmVxdWVzdC5sb2dpbkhpbnQpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL3V0aWxzL0NyeXB0b1V0aWxzXCI7XG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbGllbnRJbmZvIHtcblxuICAgIHByaXZhdGUgX3VpZDogc3RyaW5nO1xuICAgIGdldCB1aWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VpZCA/IHRoaXMuX3VpZCA6IFwiXCI7XG4gICAgfVxuXG4gICAgc2V0IHVpZCh1aWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl91aWQgPSB1aWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXRpZDogc3RyaW5nO1xuICAgIGdldCB1dGlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91dGlkID8gdGhpcy5fdXRpZCA6IFwiXCI7XG4gICAgfVxuXG4gICAgc2V0IHV0aWQodXRpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3V0aWQgPSB1dGlkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJhd0NsaWVudEluZm86IHN0cmluZykge1xuICAgICAgICBpZiAoIXJhd0NsaWVudEluZm8gfHwgU3RyaW5nVXRpbHMuaXNFbXB0eShyYXdDbGllbnRJbmZvKSkge1xuICAgICAgICAgICAgdGhpcy51aWQgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy51dGlkID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkQ2xpZW50SW5mbzogc3RyaW5nID0gQ3J5cHRvVXRpbHMuYmFzZTY0RGVjb2RlKHJhd0NsaWVudEluZm8pO1xuICAgICAgICAgICAgY29uc3QgY2xpZW50SW5mbzogQ2xpZW50SW5mbyA9IDxDbGllbnRJbmZvPkpTT04ucGFyc2UoZGVjb2RlZENsaWVudEluZm8pO1xuICAgICAgICAgICAgaWYgKGNsaWVudEluZm8pIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xpZW50SW5mby5oYXNPd25Qcm9wZXJ0eShcInVpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpZCA9IGNsaWVudEluZm8udWlkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjbGllbnRJbmZvLmhhc093blByb3BlcnR5KFwidXRpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnV0aWQgPSBjbGllbnRJbmZvLnV0aWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQ2xpZW50SW5mb0RlY29kaW5nRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XG5pbXBvcnQgeyBUb2tlblV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvVG9rZW5VdGlsc1wiO1xuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuL01zYWxUeXBlc1wiO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIElkVG9rZW4ge1xuXG4gICAgaXNzdWVyOiBzdHJpbmc7XG4gICAgb2JqZWN0SWQ6IHN0cmluZztcbiAgICBzdWJqZWN0OiBzdHJpbmc7XG4gICAgdGVuYW50SWQ6IHN0cmluZztcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XG4gICAgcHJlZmVycmVkTmFtZTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBob21lT2JqZWN0SWQ6IHN0cmluZztcbiAgICBub25jZTogc3RyaW5nO1xuICAgIGV4cGlyYXRpb246IHN0cmluZztcbiAgICByYXdJZFRva2VuOiBzdHJpbmc7XG4gICAgY2xhaW1zOiBTdHJpbmdEaWN0O1xuICAgIHNpZDogc3RyaW5nO1xuICAgIGNsb3VkSW5zdGFuY2U6IHN0cmluZztcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgIGNvbnN0cnVjdG9yKHJhd0lkVG9rZW46IHN0cmluZykge1xuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShyYXdJZFRva2VuKSkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUlkVG9rZW5OdWxsT3JFbXB0eUVycm9yKHJhd0lkVG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnJhd0lkVG9rZW4gPSByYXdJZFRva2VuO1xuICAgICAgICAgICAgdGhpcy5jbGFpbXMgPSBUb2tlblV0aWxzLmV4dHJhY3RJZFRva2VuKHJhd0lkVG9rZW4pO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwiaXNzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNzdWVyID0gdGhpcy5jbGFpbXNbXCJpc3NcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwib2lkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0SWQgPSB0aGlzLmNsYWltc1tcIm9pZFwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJzdWJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0ID0gdGhpcy5jbGFpbXNbXCJzdWJcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwidGlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVuYW50SWQgPSB0aGlzLmNsYWltc1tcInRpZFwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJ2ZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gdGhpcy5jbGFpbXNbXCJ2ZXJcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwicHJlZmVycmVkX3VzZXJuYW1lXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZmVycmVkTmFtZSA9IHRoaXMuY2xhaW1zW1wicHJlZmVycmVkX3VzZXJuYW1lXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5jbGFpbXNbXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcIm5vbmNlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9uY2UgPSB0aGlzLmNsYWltc1tcIm5vbmNlXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcImV4cFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGlyYXRpb24gPSB0aGlzLmNsYWltc1tcImV4cFwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJob21lX29pZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbWVPYmplY3RJZCA9IHRoaXMuY2xhaW1zW1wiaG9tZV9vaWRcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwic2lkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lkID0gdGhpcy5jbGFpbXNbXCJzaWRcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwiY2xvdWRfaW5zdGFuY2VfaG9zdF9uYW1lXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvdWRJbnN0YW5jZSA9IHRoaXMuY2xhaW1zW1wiY2xvdWRfaW5zdGFuY2VfaG9zdF9uYW1lXCJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBUT0RPOiBUaGlzIGVycm9yIGhlcmUgd29uJ3QgcmVhbGx5IGV2ZXJ5IGJlIHRocm93biwgc2luY2UgZXh0cmFjdElkVG9rZW4oKSByZXR1cm5zIG51bGwgaWYgdGhlIGRlY29kZUp3dCgpIGZhaWxzLlxuICAgICAgICAgICAgICogTmVlZCB0byBhZGQgYmV0dGVyIGVycm9yIGhhbmRsaW5nIGhlcmUgdG8gYWNjb3VudCBmb3IgYmVpbmcgdW5hYmxlIHRvIGRlY29kZSBqd3RzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSWRUb2tlblBhcnNpbmdFcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENvbnN0YW50cywgUGVyc2lzdGVudENhY2hlS2V5cywgVGVtcG9yYXJ5Q2FjaGVLZXlzLCBFcnJvckNhY2hlS2V5c30gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5DYWNoZUl0ZW0gfSBmcm9tIFwiLi9BY2Nlc3NUb2tlbkNhY2hlSXRlbVwiO1xuaW1wb3J0IHsgQ2FjaGVMb2NhdGlvbiB9IGZyb20gXCIuLi9Db25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBCcm93c2VyU3RvcmFnZSB9IGZyb20gXCIuL0Jyb3dzZXJTdG9yYWdlXCI7XG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQXV0aENhY2hlIGV4dGVuZHMgQnJvd3NlclN0b3JhZ2Ugey8vIFNpbmdsZXRvblxuXG4gICAgcHJpdmF0ZSBjbGllbnRJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcm9sbGJhY2tFbmFibGVkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50SWQ6IHN0cmluZywgY2FjaGVMb2NhdGlvbjogQ2FjaGVMb2NhdGlvbiwgc3RvcmVBdXRoU3RhdGVJbkNvb2tpZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihjYWNoZUxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xuICAgICAgICAvLyBUaGlzIGlzIGhhcmRjb2RlZCB0byB0cnVlIGZvciBub3cuIFdlIG1heSBtYWtlIHRoaXMgY29uZmlndXJhYmxlIGluIHRoZSBmdXR1cmVcbiAgICAgICAgdGhpcy5yb2xsYmFja0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1pZ3JhdGVDYWNoZUVudHJpZXMoc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VwcG9ydCByb2xsIGJhY2sgdG8gb2xkIGNhY2hlIHNjaGVtYSB1bnRpbCB0aGUgbmV4dCBtYWpvciByZWxlYXNlOiB0cnVlIGJ5IGRlZmF1bHQgbm93XG4gICAgICogQHBhcmFtIHN0b3JlQXV0aFN0YXRlSW5Db29raWVcbiAgICAgKi9cbiAgICBwcml2YXRlIG1pZ3JhdGVDYWNoZUVudHJpZXMoc3RvcmVBdXRoU3RhdGVJbkNvb2tpZTogYm9vbGVhbikge1xuXG4gICAgICAgIGNvbnN0IGlkVG9rZW5LZXkgPSBgJHtDb25zdGFudHMuY2FjaGVQcmVmaXh9LiR7UGVyc2lzdGVudENhY2hlS2V5cy5JRFRPS0VOfWA7XG4gICAgICAgIGNvbnN0IGNsaWVudEluZm9LZXkgPSBgJHtDb25zdGFudHMuY2FjaGVQcmVmaXh9LiR7UGVyc2lzdGVudENhY2hlS2V5cy5DTElFTlRfSU5GT31gO1xuICAgICAgICBjb25zdCBlcnJvcktleSA9IGAke0NvbnN0YW50cy5jYWNoZVByZWZpeH0uJHtFcnJvckNhY2hlS2V5cy5FUlJPUn1gO1xuICAgICAgICBjb25zdCBlcnJvckRlc2NLZXkgPSBgJHtDb25zdGFudHMuY2FjaGVQcmVmaXh9LiR7RXJyb3JDYWNoZUtleXMuRVJST1JfREVTQ31gO1xuXG4gICAgICAgIGNvbnN0IGlkVG9rZW5WYWx1ZSA9IHN1cGVyLmdldEl0ZW0oaWRUb2tlbktleSk7XG4gICAgICAgIGNvbnN0IGNsaWVudEluZm9WYWx1ZSA9IHN1cGVyLmdldEl0ZW0oY2xpZW50SW5mb0tleSk7XG4gICAgICAgIGNvbnN0IGVycm9yVmFsdWUgPSBzdXBlci5nZXRJdGVtKGVycm9yS2V5KTtcbiAgICAgICAgY29uc3QgZXJyb3JEZXNjVmFsdWUgPSBzdXBlci5nZXRJdGVtKGVycm9yRGVzY0tleSk7XG5cbiAgICAgICAgY29uc3QgdmFsdWVzID0gW2lkVG9rZW5WYWx1ZSwgY2xpZW50SW5mb1ZhbHVlLCBlcnJvclZhbHVlLCBlcnJvckRlc2NWYWx1ZV07XG4gICAgICAgIGNvbnN0IGtleXNUb01pZ3JhdGUgPSBbUGVyc2lzdGVudENhY2hlS2V5cy5JRFRPS0VOLCBQZXJzaXN0ZW50Q2FjaGVLZXlzLkNMSUVOVF9JTkZPLCBFcnJvckNhY2hlS2V5cy5FUlJPUiwgRXJyb3JDYWNoZUtleXMuRVJST1JfREVTQ107XG5cbiAgICAgICAga2V5c1RvTWlncmF0ZS5mb3JFYWNoKChjYWNoZUtleSwgaW5kZXgpID0+IHRoaXMuZHVwbGljYXRlQ2FjaGVFbnRyeShjYWNoZUtleSwgdmFsdWVzW2luZGV4XSwgc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gaGVscCB3aXRoIHJvbGwgYmFjayBrZXlzXG4gICAgICogQHBhcmFtIG5ld0tleVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBzdG9yZUF1dGhTdGF0ZUluQ29va2llXG4gICAgICovXG4gICAgcHJpdmF0ZSBkdXBsaWNhdGVDYWNoZUVudHJ5KG5ld0tleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBzdG9yZUF1dGhTdGF0ZUluQ29va2llPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbShuZXdLZXksIHZhbHVlLCBzdG9yZUF1dGhTdGF0ZUluQ29va2llKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBlbmQgbXNhbC48Y2xpZW50LWlkPiB0byBlYWNoIGtleTsgU2tpcCBmb3IgYW55IEpTT04gb2JqZWN0IGFzIEtleSAoZGVmaW5lZCBzY2hlbWFzIGRvIG5vdCBuZWVkIHRoZSBrZXkgYXBwZW5kZWQ6IEFjY2Vzc1Rva2VuIEtleXMgb3IgdGhlIHVwY29taW5nIHNjaGVtYSlcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHBhcmFtIGFkZEluc3RhbmNlSWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdlbmVyYXRlQ2FjaGVLZXkoa2V5OiBzdHJpbmcsIGFkZEluc3RhbmNlSWQ6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRGVmaW5lZCBzY2hlbWFzIGRvIG5vdCBuZWVkIHRoZSBrZXkgYXBwZW5kZWRcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihgJHtDb25zdGFudHMuY2FjaGVQcmVmaXh9YCkgPT09IDAgfHwga2V5LmluZGV4T2YoQ29uc3RhbnRzLmFkYWxJZFRva2VuKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGRJbnN0YW5jZUlkID8gYCR7Q29uc3RhbnRzLmNhY2hlUHJlZml4fS4ke3RoaXMuY2xpZW50SWR9LiR7a2V5fWAgOiBgJHtDb25zdGFudHMuY2FjaGVQcmVmaXh9LiR7a2V5fWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBhZGQgdmFsdWUgdG8gc3RvcmFnZVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0gZW5hYmxlQ29va2llU3RvcmFnZVxuICAgICAqL1xuICAgIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGVuYWJsZUNvb2tpZVN0b3JhZ2U/OiBib29sZWFuLCBzdGF0ZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBzdXBlci5zZXRJdGVtKHRoaXMuZ2VuZXJhdGVDYWNoZUtleShrZXksIHRydWUpLCB2YWx1ZSwgZW5hYmxlQ29va2llU3RvcmFnZSk7XG4gICAgICAgIGlmICh0aGlzLnJvbGxiYWNrRW5hYmxlZCkge1xuICAgICAgICAgICAgc3VwZXIuc2V0SXRlbSh0aGlzLmdlbmVyYXRlQ2FjaGVLZXkoa2V5LCBmYWxzZSksIHZhbHVlLCBlbmFibGVDb29raWVTdG9yYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCBvbmUgaXRlbSBieSBrZXkgZnJvbSBzdG9yYWdlXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSBlbmFibGVDb29raWVTdG9yYWdlXG4gICAgICovXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZywgZW5hYmxlQ29va2llU3RvcmFnZT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0SXRlbSh0aGlzLmdlbmVyYXRlQ2FjaGVLZXkoa2V5LCB0cnVlKSwgZW5hYmxlQ29va2llU3RvcmFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlIHZhbHVlIGZyb20gc3RvcmFnZVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKi9cbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnJlbW92ZUl0ZW0odGhpcy5nZW5lcmF0ZUNhY2hlS2V5KGtleSwgdHJ1ZSkpO1xuICAgICAgICBpZiAodGhpcy5yb2xsYmFja0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHN1cGVyLnJlbW92ZUl0ZW0odGhpcy5nZW5lcmF0ZUNhY2hlS2V5KGtleSwgZmFsc2UpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBjYWNoZSBpdGVtc1xuICAgICAqL1xuICAgIHJlc2V0Q2FjaGVJdGVtcygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dO1xuICAgICAgICBsZXQga2V5OiBzdHJpbmc7XG4gICAgICAgIGZvciAoa2V5IGluIHN0b3JhZ2UpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGtleSBjb250YWlucyBtc2FsIHByZWZpeDsgRm9yIG5vdywgd2UgYXJlIGNsZWFyaW5nIGFsbCBjYWNoZSBpdGVtcyBjcmVhdGVkIGJ5IE1TQUwuanNcbiAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkgJiYgKGtleS5pbmRleE9mKENvbnN0YW50cy5jYWNoZVByZWZpeCkgIT09IC0xKSkge1xuICAgICAgICAgICAgICAgIHN1cGVyLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBDbGVhciBjYWNoZSBiYXNlZCBvbiBjbGllbnQgaWQgKGNsYXJpZnkgdXNlIGNhc2VzIHdoZXJlIHRoaXMgaXMgbmVlZGVkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgYWxsIHRlbXBvcmFyeSBjYWNoZSBpdGVtc1xuICAgICAqL1xuICAgIHJlc2V0VGVtcENhY2hlSXRlbXMoc3RhdGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XG4gICAgICAgIGxldCBrZXk6IHN0cmluZztcbiAgICAgICAgLy8gY2hlY2sgc3RhdGUgYW5kIHJlbW92ZSBhc3NvY2lhdGVkIGNhY2hlXG4gICAgICAgIGZvciAoa2V5IGluIHN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGlmICgoIXN0YXRlIHx8IGtleS5pbmRleE9mKHN0YXRlKSAhPT0gLTEpICYmICF0aGlzLnRva2VuUmVuZXdhbEluUHJvZ3Jlc3Moc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKGtleSwgXCJcIiwgLTEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJNc2FsQ29va2llKHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBkZWxldGUgdGhlIGludGVyYWN0aW9uIHN0YXR1cyBjYWNoZVxuICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLklOVEVSQUNUSU9OX1NUQVRVUyk7XG4gICAgICAgIHRoaXMucmVtb3ZlSXRlbShUZW1wb3JhcnlDYWNoZUtleXMuUkVESVJFQ1RfUkVRVUVTVCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNvb2tpZXMgZm9yIElFXG4gICAgICogQHBhcmFtIGNOYW1lXG4gICAgICogQHBhcmFtIGNWYWx1ZVxuICAgICAqIEBwYXJhbSBleHBpcmVzXG4gICAgICovXG4gICAgc2V0SXRlbUNvb2tpZShjTmFtZTogc3RyaW5nLCBjVmFsdWU6IHN0cmluZywgZXhwaXJlcz86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBzdXBlci5zZXRJdGVtQ29va2llKHRoaXMuZ2VuZXJhdGVDYWNoZUtleShjTmFtZSwgdHJ1ZSksIGNWYWx1ZSwgZXhwaXJlcyk7XG4gICAgICAgIGlmICh0aGlzLnJvbGxiYWNrRW5hYmxlZCkge1xuICAgICAgICAgICAgc3VwZXIuc2V0SXRlbUNvb2tpZSh0aGlzLmdlbmVyYXRlQ2FjaGVLZXkoY05hbWUsIGZhbHNlKSwgY1ZhbHVlLCBleHBpcmVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCBvbmUgaXRlbSBieSBrZXkgZnJvbSBjb29raWVzXG4gICAgICogQHBhcmFtIGNOYW1lXG4gICAgICovXG4gICAgZ2V0SXRlbUNvb2tpZShjTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldEl0ZW1Db29raWUodGhpcy5nZW5lcmF0ZUNhY2hlS2V5KGNOYW1lLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBhY2Nlc3MgdG9rZW5zIGluIHRoZSBjYWNoZVxuICAgICAqIEBwYXJhbSBjbGllbnRJZFxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkZW50aWZpZXJcbiAgICAgKi9cbiAgICBnZXRBbGxBY2Nlc3NUb2tlbnMoY2xpZW50SWQ6IHN0cmluZywgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcpOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gT2JqZWN0LmtleXMod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pLnJlZHVjZSgodG9rZW5zLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleU1hdGNoZXMgPSBrZXkubWF0Y2goY2xpZW50SWQpICYmIGtleS5tYXRjaChob21lQWNjb3VudElkZW50aWZpZXIpICYmIGtleS5tYXRjaChDb25zdGFudHMuc2NvcGVzKTtcbiAgICAgICAgICAgIGlmICgga2V5TWF0Y2hlcyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0SXRlbShrZXkpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VBdEtleSA9IEpTT04ucGFyc2Uoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gbmV3IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtKHBhcnNlQXRLZXksIEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbnMuY29uY2F0KFsgbmV3QWNjZXNzVG9rZW5DYWNoZUl0ZW0gXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDYWNoZVBhcnNlRXJyb3Ioa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICAgICAgfSwgW10pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBpZiB0aGUgdG9rZW4gcmVuZXdhbCBpcyBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAqIEBwYXJhbSBzdGF0ZVZhbHVlXG4gICAgICovXG4gICAgcHJpdmF0ZSB0b2tlblJlbmV3YWxJblByb2dyZXNzKHN0YXRlVmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCByZW5ld1N0YXR1cyA9IHRoaXMuZ2V0SXRlbShgJHtUZW1wb3JhcnlDYWNoZUtleXMuUkVORVdfU1RBVFVTfXwke3N0YXRlVmFsdWV9YCk7XG4gICAgICAgIHJldHVybiAhIShyZW5ld1N0YXR1cyAmJiByZW5ld1N0YXR1cyA9PT0gQ29uc3RhbnRzLmluUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBjb29raWVzXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyTXNhbENvb2tpZShzdGF0ZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFySXRlbUNvb2tpZShgJHtUZW1wb3JhcnlDYWNoZUtleXMuTk9OQ0VfSURUT0tFTn18JHtzdGF0ZX1gKTtcbiAgICAgICAgdGhpcy5jbGVhckl0ZW1Db29raWUoYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLlNUQVRFX0xPR0lOfXwke3N0YXRlfWApO1xuICAgICAgICB0aGlzLmNsZWFySXRlbUNvb2tpZShgJHtUZW1wb3JhcnlDYWNoZUtleXMuTE9HSU5fUkVRVUVTVH18JHtzdGF0ZX1gKTtcbiAgICAgICAgdGhpcy5jbGVhckl0ZW1Db29raWUoYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLlNUQVRFX0FDUV9UT0tFTn18JHtzdGF0ZX1gKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYWNxdWlyZVRva2VuQWNjb3VudEtleSB0byBjYWNoZSBhY2NvdW50IG9iamVjdFxuICAgICAqIEBwYXJhbSBhY2NvdW50SWRcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50SWQ6IGFueSwgc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHtUZW1wb3JhcnlDYWNoZUtleXMuQUNRVUlSRV9UT0tFTl9BQ0NPVU5UfSR7Q29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyfSR7YWNjb3VudElkfSR7Q29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyfSR7c3RhdGV9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXV0aG9yaXR5S2V5IHRvIGNhY2hlIGF1dGhvcml0eVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHtUZW1wb3JhcnlDYWNoZUtleXMuQVVUSE9SSVRZfSR7Q29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyfSR7c3RhdGV9YDtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQWNjZXNzVG9rZW5LZXkgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlbktleVwiO1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5WYWx1ZSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuVmFsdWVcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkNhY2hlSXRlbSB7XG5cbiAgICBrZXk6IEFjY2Vzc1Rva2VuS2V5O1xuICAgIHZhbHVlOiBBY2Nlc3NUb2tlblZhbHVlO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5OiBBY2Nlc3NUb2tlbktleSwgdmFsdWU6IEFjY2Vzc1Rva2VuVmFsdWUpIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ2FjaGVMb2NhdGlvbiB9IGZyb20gXCIuLi9Db25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQXV0aEVycm9yXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQnJvd3NlclN0b3JhZ2Ugey8vIFNpbmdsZXRvblxuXG4gICAgcHJvdGVjdGVkIGNhY2hlTG9jYXRpb246IENhY2hlTG9jYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihjYWNoZUxvY2F0aW9uOiBDYWNoZUxvY2F0aW9uKSB7XG4gICAgICAgIGlmICghd2luZG93KSB7XG4gICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlTm9XaW5kb3dPYmplY3RFcnJvcihcIkJyb3dzZXIgc3RvcmFnZSBjbGFzcyBjb3VsZCBub3QgZmluZCB3aW5kb3cgb2JqZWN0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RvcmFnZVN1cHBvcnRlZCA9IHR5cGVvZiB3aW5kb3dbY2FjaGVMb2NhdGlvbl0gIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93W2NhY2hlTG9jYXRpb25dICE9IG51bGw7XG4gICAgICAgIGlmICghc3RvcmFnZVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVN0b3JhZ2VOb3RTdXBwb3J0ZWRFcnJvcihjYWNoZUxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlTG9jYXRpb24gPSBjYWNoZUxvY2F0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGFkZCB2YWx1ZSB0byBzdG9yYWdlXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBlbmFibGVDb29raWVTdG9yYWdlXG4gICAgICovXG4gICAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZW5hYmxlQ29va2llU3RvcmFnZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0uc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKGVuYWJsZUNvb2tpZVN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCBvbmUgaXRlbSBieSBrZXkgZnJvbSBzdG9yYWdlXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSBlbmFibGVDb29raWVTdG9yYWdlXG4gICAgICovXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZywgZW5hYmxlQ29va2llU3RvcmFnZT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBpZiAoZW5hYmxlQ29va2llU3RvcmFnZSAmJiB0aGlzLmdldEl0ZW1Db29raWUoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbUNvb2tpZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5nZXRJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlIHZhbHVlIGZyb20gc3RvcmFnZVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKi9cbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2xlYXIgc3RvcmFnZSAocmVtb3ZlIGFsbCBpdGVtcyBmcm9tIGl0KVxuICAgICAqL1xuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICByZXR1cm4gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0uY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBhZGQgdmFsdWUgdG8gY29va2llc1xuICAgICAqIEBwYXJhbSBjTmFtZVxuICAgICAqIEBwYXJhbSBjVmFsdWVcbiAgICAgKiBAcGFyYW0gZXhwaXJlc1xuICAgICAqL1xuICAgIHNldEl0ZW1Db29raWUoY05hbWU6IHN0cmluZywgY1ZhbHVlOiBzdHJpbmcsIGV4cGlyZXM/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvb2tpZVN0ciA9IGNOYW1lICsgXCI9XCIgKyBjVmFsdWUgKyBcIjtwYXRoPS87XCI7XG4gICAgICAgIGlmIChleHBpcmVzKSB7XG4gICAgICAgICAgICBjb25zdCBleHBpcmVUaW1lID0gdGhpcy5nZXRDb29raWVFeHBpcmF0aW9uVGltZShleHBpcmVzKTtcbiAgICAgICAgICAgIGNvb2tpZVN0ciArPSBcImV4cGlyZXM9XCIgKyBleHBpcmVUaW1lICsgXCI7XCI7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IG9uZSBpdGVtIGJ5IGtleSBmcm9tIGNvb2tpZXNcbiAgICAgKiBAcGFyYW0gY05hbWVcbiAgICAgKi9cbiAgICBnZXRJdGVtQ29va2llKGNOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBuYW1lID0gY05hbWUgKyBcIj1cIjtcbiAgICAgICAgY29uc3QgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYyA9IGNhW2ldO1xuICAgICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xuICAgICAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbiBpdGVtIGluIHRoZSBjb29raWVzIGJ5IGtleVxuICAgICAqIEBwYXJhbSBjTmFtZVxuICAgICAqL1xuICAgIGNsZWFySXRlbUNvb2tpZShjTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShjTmFtZSwgXCJcIiwgLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjb29raWUgZXhwaXJhdGlvbiB0aW1lXG4gICAgICogQHBhcmFtIGNvb2tpZUxpZmVEYXlzXG4gICAgICovXG4gICAgZ2V0Q29va2llRXhwaXJhdGlvblRpbWUoY29va2llTGlmZURheXM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgZXhwciA9IG5ldyBEYXRlKHRvZGF5LmdldFRpbWUoKSArIGNvb2tpZUxpZmVEYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIHJldHVybiBleHByLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi9VcmxVdGlsc1wiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL0xvZ2dlclwiO1xuaW1wb3J0IHsgQXV0aENhY2hlIH0gZnJvbSBcIi4uL2NhY2hlL0F1dGhDYWNoZVwiO1xuaW1wb3J0IHsgVGVtcG9yYXJ5Q2FjaGVLZXlzLCBDb25zdGFudHMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBXaW5kb3dVdGlscyB7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEludGVydmFsIGluIG1pbGxpc2Vjb25kcyB0aGF0IHdlIHBvbGwgYSB3aW5kb3dcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgUE9MTElOR19JTlRFUlZBTF9NUyA9IDUwO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCBwYWdlIGlzIHJ1bm5pbmcgaW4gYW4gaWZyYW1lLlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNJbklmcmFtZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgcGFnZSBpcyBydW5uaW5nIGluIGEgcG9wdXAuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0luUG9wdXAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhISh3aW5kb3cub3BlbmVyICYmIHdpbmRvdy5vcGVuZXIgIT09IHdpbmRvdyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIE1vbml0b3JzIGEgd2luZG93IHVudGlsIGl0IGxvYWRzIGEgdXJsIHdpdGggYSBoYXNoXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHN0YXRpYyBtb25pdG9yV2luZG93Rm9ySGFzaChjb250ZW50V2luZG93OiBXaW5kb3csIHRpbWVvdXQ6IG51bWJlciwgdXJsTmF2aWdhdGU6IHN0cmluZywgaXNTaWxlbnRDYWxsPzogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXhUaWNrcyA9IHRpbWVvdXQgLyBXaW5kb3dVdGlscy5QT0xMSU5HX0lOVEVSVkFMX01TO1xuICAgICAgICAgICAgbGV0IHRpY2tzID0gMDtcblxuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudFdpbmRvdy5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVVc2VyQ2FuY2VsbGVkRXJyb3IoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgaHJlZjtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgKiBXaWxsIHRocm93IGlmIGNyb3NzIG9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICogd2hpY2ggc2hvdWxkIGJlIGNhdWdodCBhbmQgaWdub3JlZFxuICAgICAgICAgICAgICAgICAgICAgKiBzaW5jZSB3ZSBuZWVkIHRoZSBpbnRlcnZhbCB0byBrZWVwIHJ1bm5pbmcgd2hpbGUgb24gU1RTIFVJLlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgaHJlZiA9IGNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzU2lsZW50Q2FsbCkge1xuICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgKiBBbHdheXMgcnVuIGNsb2NrIGZvciBzaWxlbnQgY2FsbHNcbiAgICAgICAgICAgICAgICAgICAgICogYXMgc2lsZW50IG9wZXJhdGlvbnMgc2hvdWxkIGJlIHNob3J0LFxuICAgICAgICAgICAgICAgICAgICAgKiBhbmQgdG8gZW5zdXJlIHRoZXkgYWx3YXlzIGF0IHdvcnN0IHRpbWVvdXQuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICB0aWNrcysrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IHByb2Nlc3MgYmxhbmsgcGFnZXMgb3IgY3Jvc3MgZG9tYWluXG4gICAgICAgICAgICAgICAgICAgIGlmICghaHJlZiB8fCBocmVmID09PSBcImFib3V0OmJsYW5rXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAqIE9ubHkgcnVuIGNsb2NrIHdoZW4gd2UgYXJlIG9uIHNhbWUgZG9tYWluIGZvciBwb3B1cHNcbiAgICAgICAgICAgICAgICAgICAgICogYXMgcG9wdXAgb3BlcmF0aW9ucyBjYW4gdGFrZSBhIGxvbmcgdGltZS5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHRpY2tzKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGhyZWYgJiYgVXJsVXRpbHMudXJsQ29udGFpbnNIYXNoKGhyZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29udGVudFdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRpY2tzID4gbWF4VGlja3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVUb2tlblJlbmV3YWxUaW1lb3V0RXJyb3IodXJsTmF2aWdhdGUpKTsgLy8gYmV0dGVyIGVycm9yP1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFdpbmRvd1V0aWxzLlBPTExJTkdfSU5URVJWQUxfTVMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogTG9hZHMgaWZyYW1lIHdpdGggYXV0aG9yaXphdGlvbiBlbmRwb2ludCBVUkxcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIGxvYWRGcmFtZSh1cmxOYXZpZ2F0ZTogc3RyaW5nLCBmcmFtZU5hbWU6IHN0cmluZywgdGltZW91dE1zOiBudW1iZXIsIGxvZ2dlcjogTG9nZ2VyKTogUHJvbWlzZTxIVE1MSUZyYW1lRWxlbWVudD4ge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGlzIHRyaWNrIG92ZXJjb21lcyBpZnJhbWUgbmF2aWdhdGlvbiBpbiBJRVxuICAgICAgICAgKiBJRSBkb2VzIG5vdCBsb2FkIHRoZSBwYWdlIGNvbnNpc3RlbnRseSBpbiBpZnJhbWVcbiAgICAgICAgICovXG4gICAgICAgIGxvZ2dlci5pbmZvKFwiTG9hZEZyYW1lOiBcIiArIGZyYW1lTmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gdGhpcy5sb2FkRnJhbWVTeW5jKHVybE5hdmlnYXRlLCBmcmFtZU5hbWUsIGxvZ2dlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZyYW1lSGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChgVW5hYmxlIHRvIGxvYWQgaWZyYW1lIHdpdGggbmFtZTogJHtmcmFtZU5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKGZyYW1lSGFuZGxlKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXRNcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBMb2FkcyB0aGUgaWZyYW1lIHN5bmNocm9ub3VzbHkgd2hlbiB0aGUgbmF2aWdhdGVUaW1lRnJhbWUgaXMgc2V0IHRvIGAwYFxuICAgICAqIEBwYXJhbSB1cmxOYXZpZ2F0ZVxuICAgICAqIEBwYXJhbSBmcmFtZU5hbWVcbiAgICAgKiBAcGFyYW0gbG9nZ2VyXG4gICAgICovXG4gICAgc3RhdGljIGxvYWRGcmFtZVN5bmModXJsTmF2aWdhdGU6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcsIGxvZ2dlcjogTG9nZ2VyKTogSFRNTElGcmFtZUVsZW1lbnR7XG4gICAgICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gV2luZG93VXRpbHMuYWRkSGlkZGVuSUZyYW1lKGZyYW1lTmFtZSwgbG9nZ2VyKTtcblxuICAgICAgICAvLyByZXR1cm5pbmcgdG8gaGFuZGxlIG51bGwgaW4gbG9hZEZyYW1lLCBhbHNvIHRvIGF2b2lkIG51bGwgb2JqZWN0IGFjY2VzcyBlcnJvcnNcbiAgICAgICAgaWYgKCFmcmFtZUhhbmRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZnJhbWVIYW5kbGUuc3JjID09PSBcIlwiIHx8IGZyYW1lSGFuZGxlLnNyYyA9PT0gXCJhYm91dDpibGFua1wiKSB7XG4gICAgICAgICAgICBmcmFtZUhhbmRsZS5zcmMgPSB1cmxOYXZpZ2F0ZTtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvUGlpKFwiRnJhbWUgTmFtZSA6IFwiICsgZnJhbWVOYW1lICsgXCIgTmF2aWdhdGVkIHRvOiBcIiArIHVybE5hdmlnYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZUhhbmRsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQWRkcyB0aGUgaGlkZGVuIGlmcmFtZSBmb3Igc2lsZW50IHRva2VuIHJlbmV3YWwuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHN0YXRpYyBhZGRIaWRkZW5JRnJhbWUoaWZyYW1lSWQ6IHN0cmluZywgbG9nZ2VyOiBMb2dnZXIpOiBIVE1MSUZyYW1lRWxlbWVudCB7XG4gICAgICAgIGlmICh0eXBlb2YgaWZyYW1lSWQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nZ2VyLmluZm8oXCJBZGQgbXNhbCBmcmFtZSB0byBkb2N1bWVudDpcIiArIGlmcmFtZUlkKTtcbiAgICAgICAgbGV0IGFkYWxGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlmcmFtZUlkKSBhcyBIVE1MSUZyYW1lRWxlbWVudDtcbiAgICAgICAgaWYgKCFhZGFsRnJhbWUpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5jcmVhdGVFbGVtZW50ICYmXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgNS4wXCIpID09PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICAgICAgICAgIGlmci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZnJhbWVJZCk7XG4gICAgICAgICAgICAgICAgaWZyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgIGlmci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICBpZnIuc3R5bGUud2lkdGggPSBpZnIuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgaWZyLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGlmci5zZXRBdHRyaWJ1dGUoXCJzYW5kYm94XCIsIFwiYWxsb3ctc2NyaXB0cyBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1mb3Jtc1wiKTtcbiAgICAgICAgICAgICAgICBhZGFsRnJhbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmFwcGVuZENoaWxkKGlmcikgYXMgSFRNTElGcmFtZUVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5ICYmIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8aWZyYW1lIG5hbWU9J1wiICsgaWZyYW1lSWQgKyBcIicgaWQ9J1wiICsgaWZyYW1lSWQgKyBcIicgc3R5bGU9J2Rpc3BsYXk6bm9uZSc+PC9pZnJhbWU+XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmZyYW1lcyAmJiB3aW5kb3cuZnJhbWVzW2lmcmFtZUlkXSkge1xuICAgICAgICAgICAgICAgIGFkYWxGcmFtZSA9IHdpbmRvdy5mcmFtZXNbaWZyYW1lSWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFkYWxGcmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogUmVtb3ZlcyBhIGhpZGRlbiBpZnJhbWUgZnJvbSB0aGUgcGFnZS5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZUhpZGRlbklmcmFtZShpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5ID09PSBpZnJhbWUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEZpbmQgYW5kIHJldHVybiB0aGUgaWZyYW1lIGVsZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gaGFzaFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SWZyYW1lV2l0aEhhc2goaGFzaDogc3RyaW5nKTogSFRNTElGcmFtZUVsZW1lbnQge1xuICAgICAgICBjb25zdCBpZnJhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpZnJhbWVcIik7XG4gICAgICAgIGNvbnN0IGlmcmFtZUFycmF5OiBBcnJheTxIVE1MSUZyYW1lRWxlbWVudD4gPSBBcnJheS5hcHBseShudWxsLCBBcnJheShpZnJhbWVzLmxlbmd0aCkpLm1hcCgoaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4gaWZyYW1lcy5pdGVtKGluZGV4KSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXNwcmVhZFxuXG4gICAgICAgIHJldHVybiBpZnJhbWVBcnJheS5maWx0ZXIoKGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlmcmFtZS5jb250ZW50V2luZG93LmxvY2F0aW9uLmhhc2ggPT09IGhhc2g7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBhbGwgdGhlIHBvcHVwcyBvcGVuZWQgYnkgTVNBTFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UG9wdXBzKCk6IEFycmF5PFdpbmRvdz4ge1xuICAgICAgICBpZiAoIXdpbmRvdy5vcGVuZWRXaW5kb3dzKSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbmVkV2luZG93cyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdpbmRvdy5vcGVuZWRXaW5kb3dzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBGaW5kIGFuZCByZXR1cm4gdGhlIHBvcHVwIHdpdGggdGhlIGdpdmVuIGhhc2hcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIGdldFBvcFVwV2l0aEhhc2goaGFzaDogc3RyaW5nKTogV2luZG93IHtcbiAgICAgICAgcmV0dXJuIFdpbmRvd1V0aWxzLmdldFBvcHVwcygpLmZpbHRlcihwb3B1cCA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3B1cC5sb2NhdGlvbi5oYXNoID09PSBoYXNoO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEFkZCB0aGUgcG9wdXAgdG8gdGhlIGtub3duIGxpc3Qgb2YgcG9wdXBzXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHN0YXRpYyB0cmFja1BvcHVwKHBvcHVwOiBXaW5kb3cpOiB2b2lkIHtcbiAgICAgICAgV2luZG93VXRpbHMuZ2V0UG9wdXBzKCkucHVzaChwb3B1cCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENsb3NlIGFsbCBwb3B1cHNcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIGNsb3NlUG9wdXBzKCk6IHZvaWQge1xuICAgICAgICBXaW5kb3dVdGlscy5nZXRQb3B1cHMoKS5mb3JFYWNoKHBvcHVwID0+IHBvcHVwLmNsb3NlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIGJsb2NrcyBhbnkgbG9naW4vYWNxdWlyZVRva2VuIGNhbGxzIHRvIHJlbG9hZCBmcm9tIHdpdGhpbiBhIGhpZGRlbiBpZnJhbWUgKGdlbmVyYXRlZCBmb3Igc2lsZW50IGNhbGxzKVxuICAgICAqL1xuICAgIHN0YXRpYyBibG9ja1JlbG9hZEluSGlkZGVuSWZyYW1lcygpIHtcbiAgICAgICAgLy8gcmV0dXJuIGFuIGVycm9yIGlmIGNhbGxlZCBmcm9tIHRoZSBoaWRkZW4gaWZyYW1lIGNyZWF0ZWQgYnkgdGhlIG1zYWwganMgc2lsZW50IGNhbGxzXG4gICAgICAgIGlmIChVcmxVdGlscy51cmxDb250YWluc0hhc2god2luZG93LmxvY2F0aW9uLmhhc2gpICYmIFdpbmRvd1V0aWxzLmlzSW5JZnJhbWUoKSkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUJsb2NrVG9rZW5SZXF1ZXN0c0luSGlkZGVuSWZyYW1lRXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhY2hlU3RvcmFnZVxuICAgICAqL1xuICAgIHN0YXRpYyBjaGVja0lmQmFja0J1dHRvbklzUHJlc3NlZChjYWNoZVN0b3JhZ2U6IEF1dGhDYWNoZSkge1xuICAgICAgICBjb25zdCByZWRpcmVjdENhY2hlID0gY2FjaGVTdG9yYWdlLmdldEl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLlJFRElSRUNUX1JFUVVFU1QpO1xuXG4gICAgICAgIC8vIGlmIHJlZGlyZWN0IHJlcXVlc3QgaXMgc2V0IGFuZCB0aGVyZSBpcyBubyBoYXNoXG4gICAgICAgIGlmKHJlZGlyZWN0Q2FjaGUgJiYgIVVybFV0aWxzLnVybENvbnRhaW5zSGFzaCh3aW5kb3cubG9jYXRpb24uaGFzaCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0Q2FjaGUgPSByZWRpcmVjdENhY2hlLnNwbGl0KENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlcik7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHNwbGl0Q2FjaGUubGVuZ3RoID4gMSA/IHNwbGl0Q2FjaGVbc3BsaXRDYWNoZS5sZW5ndGgtMV06IG51bGw7XG4gICAgICAgICAgICBjYWNoZVN0b3JhZ2UucmVzZXRUZW1wQ2FjaGVJdGVtcyhzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBUaW1lVXRpbHMge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGltZSBpbiBzZWNvbmRzIGZvciBleHBpcmF0aW9uIGJhc2VkIG9uIHN0cmluZyB2YWx1ZSBwYXNzZWQgaW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwaXJlc0luXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlRXhwaXJlc0luKGV4cGlyZXNJbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgLy8gaWYgQUFEIGRpZCBub3Qgc2VuZCBcImV4cGlyZXNfaW5cIiBwcm9wZXJ0eSwgdXNlIGRlZmF1bHQgZXhwaXJhdGlvbiBvZiAzNTk5IHNlY29uZHMsIGZvciBzb21lIHJlYXNvbiBBQUQgc2VuZHMgMzU5OSBhcyBcImV4cGlyZXNfaW5cIiB2YWx1ZSBpbnN0ZWFkIG9mIDM2MDBcbiAgICAgICAgaWYgKCFleHBpcmVzSW4pIHtcbiAgICAgICAgICAgIGV4cGlyZXNJbiA9IFwiMzU5OVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZUludChleHBpcmVzSW4sIDEwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gdGhlIGN1cnJlbnQgdGltZSBpbiBVbml4IHRpbWUuIERhdGUuZ2V0VGltZSgpIHJldHVybnMgaW4gbWlsbGlzZWNvbmRzLlxuICAgICAqL1xuICAgIHN0YXRpYyBub3coKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLjApO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzXCI7XG5pbXBvcnQgeyBDb25zdGFudHMsIFByb21wdFN0YXRlLCBCbGFja2xpc3RlZEVRUGFyYW1zIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgU2NvcGVTZXQgfSBmcm9tIFwiLi4vU2NvcGVTZXRcIjtcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi4vTXNhbFR5cGVzXCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0VXRpbHMge1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gaXNMb2dpbkNhbGxcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFR5cGVcbiAgICAgKiBAcGFyYW0gcmVkaXJlY3RDYWxsYmFja3NTZXRcbiAgICAgKiBAcGFyYW0gY2FjaGVTdG9yYWdlXG4gICAgICogQHBhcmFtIGNsaWVudElkXG4gICAgICpcbiAgICAgKiB2YWxpZGF0ZXMgYWxsIHJlcXVlc3QgcGFyYW1ldGVycyBhbmQgZ2VuZXJhdGVzIGEgY29uc3VtYWJsZSByZXF1ZXN0IG9iamVjdFxuICAgICAqL1xuICAgIHN0YXRpYyB2YWxpZGF0ZVJlcXVlc3QocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCBpc0xvZ2luQ2FsbDogYm9vbGVhbiwgY2xpZW50SWQ6IHN0cmluZywgcmVxdWVzdFR5cGU/OiBzdHJpbmcsIHJlZGlyZWN0Q2FsbGJhY2tzU2V0PzogYm9vbGVhbik6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB7XG5cbiAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgcmVxdWVzdCBpcyBlbXB0eSBmb3IgYWNxdWlyZSAqIGNhbGxzXG4gICAgICAgIGlmKCFpc0xvZ2luQ2FsbCAmJiAhcmVxdWVzdCkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBjYWxsYmFja3MgYXJlIG5vdCBzZXQgYmVmb3JlIHJlZGlyZWN0XG4gICAgICAgIGlmKHJlcXVlc3RUeXBlID09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCAmJiAhcmVkaXJlY3RDYWxsYmFja3NTZXQpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVSZWRpcmVjdENhbGxiYWNrc05vdFNldEVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2NvcGVzOiBBcnJheTxzdHJpbmc+O1xuICAgICAgICBsZXQgZXh0cmFRdWVyeVBhcmFtZXRlcnM6IFN0cmluZ0RpY3Q7XG5cbiAgICAgICAgaWYocmVxdWVzdCkge1xuICAgICAgICAgICAgLy8gaWYgZXh0cmFTY29wZXNUb0NvbnNlbnQgaXMgcGFzc2VkIGluIGxvZ2luQ2FsbCwgYXBwZW5kIHRoZW0gdG8gdGhlIGxvZ2luIHJlcXVlc3Q7IFZhbGlkYXRlIGFuZCBmaWx0ZXIgc2NvcGVzICh0aGUgdmFsaWRhdGUgZnVuY3Rpb24gd2lsbCB0aHJvdyBpZiB2YWxpZGF0aW9uIGZhaWxzKVxuICAgICAgICAgICAgc2NvcGVzID0gaXNMb2dpbkNhbGwgPyBTY29wZVNldC5hcHBlbmRTY29wZXMocmVxdWVzdC5zY29wZXMsIHJlcXVlc3QuZXh0cmFTY29wZXNUb0NvbnNlbnQpIDogcmVxdWVzdC5zY29wZXM7XG4gICAgICAgICAgICBTY29wZVNldC52YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzLCAhaXNMb2dpbkNhbGwsIGNsaWVudElkKTtcblxuICAgICAgICAgICAgLy8gdmFsaWRhdGUgcHJvbXB0IHBhcmFtZXRlclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVByb21wdFBhcmFtZXRlcihyZXF1ZXN0LnByb21wdCk7XG5cbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgICAgICAgICBleHRyYVF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMudmFsaWRhdGVFUVBhcmFtZXRlcnMocmVxdWVzdC5leHRyYVF1ZXJ5UGFyYW1ldGVycywgcmVxdWVzdC5jbGFpbXNSZXF1ZXN0KTtcblxuICAgICAgICAgICAgLy8gdmFsaWRhdGUgY2xhaW1zUmVxdWVzdFxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUNsYWltc1JlcXVlc3QocmVxdWVzdC5jbGFpbXNSZXF1ZXN0KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWRhdGUgYW5kIGdlbmVyYXRlIHN0YXRlIGFuZCBjb3JyZWxhdGlvbklkXG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy52YWxpZGF0ZUFuZEdlbmVyYXRlU3RhdGUocmVxdWVzdCAmJiByZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgY29uc3QgY29ycmVsYXRpb25JZCA9IHRoaXMudmFsaWRhdGVBbmRHZW5lcmF0ZUNvcnJlbGF0aW9uSWQocmVxdWVzdCAmJiByZXF1ZXN0LmNvcnJlbGF0aW9uSWQpO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZFJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyA9IHtcbiAgICAgICAgICAgIC4uLnJlcXVlc3QsXG4gICAgICAgICAgICBleHRyYVF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgICAgIHNjb3BlcyxcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgY29ycmVsYXRpb25JZFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRSZXF1ZXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIFV0aWxpdHkgdG8gdGVzdCBpZiB2YWxpZCBwcm9tcHQgdmFsdWUgaXMgcGFzc2VkIGluIHRoZSByZXF1ZXN0XG4gICAgICogQHBhcmFtIHJlcXVlc3RcbiAgICAgKi9cbiAgICBzdGF0aWMgdmFsaWRhdGVQcm9tcHRQYXJhbWV0ZXIgKHByb21wdDogc3RyaW5nKSB7XG4gICAgICAgIGlmKHByb21wdCkge1xuICAgICAgICAgICAgaWYgKFtQcm9tcHRTdGF0ZS5MT0dJTiwgUHJvbXB0U3RhdGUuU0VMRUNUX0FDQ09VTlQsIFByb21wdFN0YXRlLkNPTlNFTlQsIFByb21wdFN0YXRlLk5PTkVdLmluZGV4T2YocHJvbXB0KSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlSW52YWxpZFByb21wdEVycm9yKHByb21wdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiBSZW1vdmVzIHVubmVjZXNzYXJ5IG9yIGR1cGxpY2F0ZSBxdWVyeSBwYXJhbWV0ZXJzIGZyb20gZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgICAqL1xuICAgIHN0YXRpYyB2YWxpZGF0ZUVRUGFyYW1ldGVycyhleHRyYVF1ZXJ5UGFyYW1ldGVyczogU3RyaW5nRGljdCwgY2xhaW1zUmVxdWVzdDogc3RyaW5nKSA6IFN0cmluZ0RpY3Qge1xuICAgICAgICBjb25zdCBlUVBhcmFtcyA6IFN0cmluZ0RpY3QgPSB7IC4uLmV4dHJhUXVlcnlQYXJhbWV0ZXJzfTtcbiAgICAgICAgaWYgKCFlUVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYWltc1JlcXVlc3QpIHtcbiAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJSZW1vdmVkIGR1cGxpY2F0ZSBjbGFpbXMgZnJvbSBleHRyYVF1ZXJ5UGFyYW1ldGVycy4gUGxlYXNlIHVzZSBlaXRoZXIgdGhlIGNsYWltc1JlcXVlc3QgZmllbGQgT1IgcGFzcyBhcyBleHRyYVF1ZXJ5UGFyYW1ldGVyIC0gbm90IGJvdGguXCIpO1xuICAgICAgICAgICAgZGVsZXRlIGVRUGFyYW1zW0NvbnN0YW50cy5jbGFpbXNdO1xuICAgICAgICB9XG4gICAgICAgIEJsYWNrbGlzdGVkRVFQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICBpZiAoZVFQYXJhbXNbcGFyYW1dKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dnZXIud2FybmluZyhcIlJlbW92ZWQgZHVwbGljYXRlIFwiICsgcGFyYW0gKyBcIiBmcm9tIGV4dHJhUXVlcnlQYXJhbWV0ZXJzLiBQbGVhc2UgdXNlIHRoZSBcIiArIHBhcmFtICsgXCIgZmllbGQgaW4gcmVxdWVzdCBvYmplY3QuXCIpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBlUVBhcmFtc1twYXJhbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlUVBhcmFtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIGNsYWltcyBwYXNzZWQgaW4gcmVxdWVzdCBpcyBhIEpTT05cbiAgICAgKiBUT0RPOiBNb3JlIHZhbGlkYXRpb24gd2lsbCBiZSBhZGRlZCB3aGVuIHRoZSBzZXJ2ZXIgdGVhbSB0ZWxscyB1cyBob3cgdGhleSBoYXZlIGFjdHVhbGx5IGltcGxlbWVudGVkIGNsYWltc1xuICAgICAqIEBwYXJhbSBjbGFpbXNSZXF1ZXN0XG4gICAgICovXG4gICAgc3RhdGljIHZhbGlkYXRlQ2xhaW1zUmVxdWVzdChjbGFpbXNSZXF1ZXN0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFjbGFpbXNSZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNsYWltcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNsYWltcyA9IEpTT04ucGFyc2UoY2xhaW1zUmVxdWVzdCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVDbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogZ2VuZXJhdGUgdW5pcXVlIHN0YXRlIHBlciByZXF1ZXN0XG4gICAgICogQHBhcmFtIHJlcXVlc3RcbiAgICAgKi9cbiAgICBzdGF0aWMgdmFsaWRhdGVBbmRHZW5lcmF0ZVN0YXRlKHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICAvLyBhcHBlbmQgR1VJRCB0byB1c2VyIHNldCBzdGF0ZSAgb3Igc2V0IG9uZSBmb3IgdGhlIHVzZXIgaWYgbnVsbFxuICAgICAgICByZXR1cm4gIVN0cmluZ1V0aWxzLmlzRW1wdHkoc3RhdGUpID8gQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpICsgXCJ8XCIgKyBzdGF0ZSA6IENyeXB0b1V0aWxzLmNyZWF0ZU5ld0d1aWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiB2YWxpZGF0ZSBjb3JyZWxhdGlvbklkIGFuZCBnZW5lcmF0ZSBpZiBub3QgdmFsaWQgb3Igbm90IHNldCBieSB0aGUgdXNlclxuICAgICAqIEBwYXJhbSBjb3JyZWxhdGlvbklkXG4gICAgICovXG4gICAgc3RhdGljIHZhbGlkYXRlQW5kR2VuZXJhdGVDb3JyZWxhdGlvbklkKGNvcnJlbGF0aW9uSWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIC8vIHZhbGlkYXRlIHVzZXIgc2V0IGNvcnJlbGF0aW9uSWQgb3Igc2V0IG9uZSBmb3IgdGhlIHVzZXIgaWYgbnVsbFxuICAgICAgICBpZihjb3JyZWxhdGlvbklkICYmICFDcnlwdG9VdGlscy5pc0d1aWQoY29ycmVsYXRpb25JZCkpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ29ycmVsYXRpb25JZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENyeXB0b1V0aWxzLmlzR3VpZChjb3JyZWxhdGlvbklkKT8gY29ycmVsYXRpb25JZCA6IENyeXB0b1V0aWxzLmNyZWF0ZU5ld0d1aWQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBdXRoUmVzcG9uc2UgfSBmcm9tIFwiLi4vQXV0aFJlc3BvbnNlXCI7XG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4uL0lkVG9rZW5cIjtcblxuLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VVdGlscyB7XG5cbiAgICBzdGF0aWMgc2V0UmVzcG9uc2VJZFRva2VuKG9yaWdpbmFsUmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgaWRUb2tlbk9iajogSWRUb2tlbikgOiBBdXRoUmVzcG9uc2Uge1xuICAgICAgICBpZiAoIW9yaWdpbmFsUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKCFpZFRva2VuT2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZXNwb25zZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4cCA9IE51bWJlcihpZFRva2VuT2JqLmV4cGlyYXRpb24pO1xuICAgICAgICBpZiAoZXhwICYmICFvcmlnaW5hbFJlc3BvbnNlLmV4cGlyZXNPbikge1xuICAgICAgICAgICAgb3JpZ2luYWxSZXNwb25zZS5leHBpcmVzT24gPSBuZXcgRGF0ZShleHAgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ub3JpZ2luYWxSZXNwb25zZSxcbiAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW5PYmosXG4gICAgICAgICAgICBpZFRva2VuQ2xhaW1zOiBpZFRva2VuT2JqLmNsYWltcyxcbiAgICAgICAgICAgIHVuaXF1ZUlkOiBpZFRva2VuT2JqLm9iamVjdElkIHx8IGlkVG9rZW5PYmouc3ViamVjdCxcbiAgICAgICAgICAgIHRlbmFudElkOiBpZFRva2VuT2JqLnRlbmFudElkLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuaW1wb3J0IHsgQWFkQXV0aG9yaXR5IH0gZnJvbSBcIi4vQWFkQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBCMmNBdXRob3JpdHkgfSBmcm9tIFwiLi9CMmNBdXRob3JpdHlcIjtcbmltcG9ydCB7IEF1dGhvcml0eSwgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1VybFV0aWxzXCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aG9yaXR5RmFjdG9yeSB7XG4gICAgLyoqXG4gICAgICogUGFyc2UgdGhlIHVybCBhbmQgZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGF1dGhvcml0eVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIERldGVjdEF1dGhvcml0eUZyb21VcmwoYXV0aG9yaXR5VXJsOiBzdHJpbmcpOiBBdXRob3JpdHlUeXBlIHtcbiAgICAgICAgYXV0aG9yaXR5VXJsID0gVXJsVXRpbHMuQ2Fub25pY2FsaXplVXJpKGF1dGhvcml0eVVybCk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBVcmxVdGlscy5HZXRVcmxDb21wb25lbnRzKGF1dGhvcml0eVVybCk7XG4gICAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IGNvbXBvbmVudHMuUGF0aFNlZ21lbnRzO1xuICAgICAgICBzd2l0Y2ggKHBhdGhTZWdtZW50c1swXSkge1xuICAgICAgICAgICAgY2FzZSBcInRmcFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkIyQztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQWFkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIGF1dGhvcml0eSBvYmplY3Qgb2YgdGhlIGNvcnJlY3QgdHlwZSBiYXNlZCBvbiB0aGUgdXJsXG4gICAgICogUGVyZm9ybXMgYmFzaWMgYXV0aG9yaXR5IHZhbGlkYXRpb24gLSBjaGVja3MgdG8gc2VlIGlmIHRoZSBhdXRob3JpdHkgaXMgb2YgYSB2YWxpZCB0eXBlIChlZyBhYWQsIGIyYylcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZUluc3RhbmNlKGF1dGhvcml0eVVybDogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbik6IEF1dGhvcml0eSB7XG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGF1dGhvcml0eVVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHR5cGUgPSBBdXRob3JpdHlGYWN0b3J5LkRldGVjdEF1dGhvcml0eUZyb21VcmwoYXV0aG9yaXR5VXJsKTtcbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIGFib3ZlIGRldGVjdGlvbiwgY3JlYXRlIHRoZSByaWdodCB0eXBlLlxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXV0aG9yaXR5VHlwZS5CMkM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCMmNBdXRob3JpdHkoYXV0aG9yaXR5VXJsLCB2YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgICAgICAgICBjYXNlIEF1dGhvcml0eVR5cGUuQWFkOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQWFkQXV0aG9yaXR5KGF1dGhvcml0eVVybCwgdmFsaWRhdGVBdXRob3JpdHkpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRBdXRob3JpdHlUeXBlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVGVsZW1ldHJ5RXZlbnQgZnJvbSBcIi4vVGVsZW1ldHJ5RXZlbnRcIjtcbmltcG9ydCB7XG4gICAgQ29tcGxldGVkRXZlbnRzLFxuICAgIEV2ZW50Q291bnQsXG4gICAgRXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZCxcbiAgICBJblByb2dyZXNzRXZlbnRzLFxuICAgIFRlbGVtZXRyeUNvbmZpZyxcbiAgICBUZWxlbWV0cnlQbGF0Zm9ybSxcbiAgICBUZWxlbWV0cnlFbWl0dGVyXG59IGZyb20gXCIuL1RlbGVtZXRyeVR5cGVzXCI7XG5pbXBvcnQgRGVmYXVsdEV2ZW50IGZyb20gXCIuL0RlZmF1bHRFdmVudFwiO1xuaW1wb3J0IHsgbGlicmFyeVZlcnNpb24sIENvbnN0YW50cyB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcblxuLy8gZm9yIHVzZSBpbiBjYWNoZSBldmVudHNcbmNvbnN0IE1TQUxfQ0FDSEVfRVZFTlRfVkFMVUVfUFJFRklYID0gXCJtc2FsLnRva2VuXCI7XG5jb25zdCBNU0FMX0NBQ0hFX0VWRU5UX05BTUUgPSBcIm1zYWwuY2FjaGVfZXZlbnRcIjtcblxuY29uc3QgY3JlYXRlRXZlbnRLZXkgPSAoZXZlbnQ6IFRlbGVtZXRyeUV2ZW50KTogc3RyaW5nID0+IChcbiAgICBgJHtldmVudC50ZWxlbWV0cnlDb3JyZWxhdGlvbklkfS0ke2V2ZW50LmV2ZW50SWR9LSR7ZXZlbnQuZXZlbnROYW1lfWBcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbGVtZXRyeU1hbmFnZXIge1xuXG4gICAgLy8gY29ycmVsYXRpb24gSWQgdG8gbGlzdCBvZiBldmVudHNcbiAgICBwcml2YXRlIGNvbXBsZXRlZEV2ZW50czogQ29tcGxldGVkRXZlbnRzID0ge307XG4gICAgLy8gZXZlbnQga2V5IHRvIGV2ZW50XG4gICAgcHJpdmF0ZSBpblByb2dyZXNzRXZlbnRzOiBJblByb2dyZXNzRXZlbnRzID0ge307XG4gICAgLy8gY29ycmVsYXRpb24gaWQgdG8gbWFwIG9mIGV2ZW50bmFtZSB0byBjb3VudFxuICAgIHByaXZhdGUgZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZDogRXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZCA9IHt9O1xuXG4gICAgLy8gSW1wbGVtZW50IGFmdGVyIEFQSSBFVkVOVFxuICAgIHByaXZhdGUgb25seVNlbmRGYWlsdXJlVGVsZW1ldHJ5OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSB0ZWxlbWV0cnlQbGF0Zm9ybTogVGVsZW1ldHJ5UGxhdGZvcm07XG4gICAgcHJpdmF0ZSBjbGllbnRJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgdGVsZW1ldHJ5RW1pdHRlcjogVGVsZW1ldHJ5RW1pdHRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogVGVsZW1ldHJ5Q29uZmlnLCB0ZWxlbWV0cnlFbWl0dGVyOiBUZWxlbWV0cnlFbWl0dGVyKSB7XG4gICAgICAgIC8vIFRPRE8gVEhST1cgaWYgYmFkIG9wdGlvbnNcbiAgICAgICAgdGhpcy50ZWxlbWV0cnlQbGF0Zm9ybSA9IHtcbiAgICAgICAgICAgIHNkazogQ29uc3RhbnRzLmxpYnJhcnlOYW1lLFxuICAgICAgICAgICAgc2RrVmVyc2lvbjogbGlicmFyeVZlcnNpb24oKSxcbiAgICAgICAgICAgIG5ldHdvcmtJbmZvcm1hdGlvbjoge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uU3BlZWQ6IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IuY29ubmVjdGlvbiAmJiBuYXZpZ2F0b3IuY29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uY29uZmlnLnBsYXRmb3JtXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSBjb25maWcuY2xpZW50SWQ7XG4gICAgICAgIHRoaXMub25seVNlbmRGYWlsdXJlVGVsZW1ldHJ5ID0gY29uZmlnLm9ubHlTZW5kRmFpbHVyZVRlbGVtZXRyeTtcbiAgICAgICAgLypcbiAgICAgICAgICogVE9ETywgd2hlbiBpIGdldCB0byB3aXJpbmcgdGhpcyB0aHJvdWdoLCB0aGluayBhYm91dCB3aGF0IGl0IG1lYW5zIGlmXG4gICAgICAgICAqIGEgZGV2ZWxvcGVyIGRvZXMgbm90IGltcGxlbWVudCB0ZWxlbSBhdCBhbGwsIHdlIHN0aWxsIGluc3RydW1lbnQsIGJ1dCB0ZWxlbWV0cnlFbWl0dGVyIGNhbiBiZVxuICAgICAgICAgKiBvcHRpb25hbD9cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5RW1pdHRlciA9IHRlbGVtZXRyeUVtaXR0ZXI7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRlbGVtZXRyeW1hbmFnZXJTdHViKGNsaWVudElkOiBzdHJpbmcpIDogVGVsZW1ldHJ5TWFuYWdlciB7XG4gICAgICAgIGNvbnN0IGFwcGxpY2F0aW9uTmFtZSA9IFwiVW5TZXRTdHViXCI7XG4gICAgICAgIGNvbnN0IGFwcGxpY2F0aW9uVmVyc2lvbiA9IFwiMC4wXCI7XG4gICAgICAgIGNvbnN0IHRlbGVtZXRyeUVtaXR0ZXIgPSAoKSA9PiB7fTtcbiAgICAgICAgY29uc3QgdGVsZW1ldHJ5UGxhdGZvcm06IFRlbGVtZXRyeVBsYXRmb3JtID0ge1xuICAgICAgICAgICAgYXBwbGljYXRpb25OYW1lLFxuICAgICAgICAgICAgYXBwbGljYXRpb25WZXJzaW9uXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRlbGVtZXRyeU1hbmFnZXJDb25maWc6IFRlbGVtZXRyeUNvbmZpZyA9IHtcbiAgICAgICAgICAgIHBsYXRmb3JtOiB0ZWxlbWV0cnlQbGF0Zm9ybSxcbiAgICAgICAgICAgIGNsaWVudElkOiBjbGllbnRJZFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXcgdGhpcyh0ZWxlbWV0cnlNYW5hZ2VyQ29uZmlnLCB0ZWxlbWV0cnlFbWl0dGVyKTtcbiAgICB9XG5cbiAgICBzdGFydEV2ZW50KGV2ZW50OiBUZWxlbWV0cnlFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMudGVsZW1ldHJ5RW1pdHRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50S2V5ID0gY3JlYXRlRXZlbnRLZXkoZXZlbnQpO1xuICAgICAgICB0aGlzLmluUHJvZ3Jlc3NFdmVudHNbZXZlbnRLZXldID0gZXZlbnQ7XG4gICAgfVxuXG4gICAgc3RvcEV2ZW50KGV2ZW50OiBUZWxlbWV0cnlFdmVudCkge1xuICAgICAgICBjb25zdCBldmVudEtleSA9IGNyZWF0ZUV2ZW50S2V5KGV2ZW50KTtcbiAgICAgICAgaWYgKCF0aGlzLnRlbGVtZXRyeUVtaXR0ZXIgfHwgIXRoaXMuaW5Qcm9ncmVzc0V2ZW50c1tldmVudEtleV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5zdG9wKCk7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50RXZlbnRDb3VudChldmVudCk7XG5cbiAgICAgICAgY29uc3QgY29tcGxldGVkRXZlbnRzID0gdGhpcy5jb21wbGV0ZWRFdmVudHNbZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZF07XG5cbiAgICAgICAgdGhpcy5jb21wbGV0ZWRFdmVudHNbZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZF0gPSBbLi4uKGNvbXBsZXRlZEV2ZW50cyB8fCBbXSksIGV2ZW50XTtcblxuICAgICAgICBkZWxldGUgdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XTtcbiAgICB9XG5cbiAgICBmbHVzaChjb3JyZWxhdGlvbklkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmx5IHVuZmluaXNoZWQgZXZlbnRzIHNob3VsZCB0aGlzIHN0aWxsIHJldHVybiB0aGVtP1xuICAgICAgICBpZiAoIXRoaXMudGVsZW1ldHJ5RW1pdHRlciB8fCAhdGhpcy5jb21wbGV0ZWRFdmVudHNbY29ycmVsYXRpb25JZF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9ycGhhbmVkRXZlbnRzID0gdGhpcy5nZXRPcnBoYW5lZEV2ZW50cyhjb3JyZWxhdGlvbklkKTtcbiAgICAgICAgb3JwaGFuZWRFdmVudHMuZm9yRWFjaChldmVudCA9PiB0aGlzLmluY3JlbWVudEV2ZW50Q291bnQoZXZlbnQpKTtcbiAgICAgICAgY29uc3QgZXZlbnRzVG9GbHVzaDogQXJyYXk8VGVsZW1ldHJ5RXZlbnQ+ID0gW1xuICAgICAgICAgICAgLi4udGhpcy5jb21wbGV0ZWRFdmVudHNbY29ycmVsYXRpb25JZF0sXG4gICAgICAgICAgICAuLi5vcnBoYW5lZEV2ZW50c1xuICAgICAgICBdO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbXBsZXRlZEV2ZW50c1tjb3JyZWxhdGlvbklkXTtcbiAgICAgICAgY29uc3QgZXZlbnRDb3VudHNUb0ZsdXNoOiBFdmVudENvdW50ID0gdGhpcy5ldmVudENvdW50QnlDb3JyZWxhdGlvbklkW2NvcnJlbGF0aW9uSWRdO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWRbY29ycmVsYXRpb25JZF07XG4gICAgICAgIC8vIFRPRE8gYWRkIGZ1bmNpdG9uYWxpdHkgZm9yIG9ubHlGbHVzaEZhaWx1cmVzIGFmdGVyIGltcGxlbWVudGluZyBhcGkgZXZlbnQ/ID8/XG5cbiAgICAgICAgaWYgKCFldmVudHNUb0ZsdXNoIHx8ICFldmVudHNUb0ZsdXNoLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdEV2ZW50OiBEZWZhdWx0RXZlbnQgPSBuZXcgRGVmYXVsdEV2ZW50KFxuICAgICAgICAgICAgdGhpcy50ZWxlbWV0cnlQbGF0Zm9ybSxcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQsXG4gICAgICAgICAgICB0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgZXZlbnRDb3VudHNUb0ZsdXNoXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZXZlbnRzV2l0aERlZmF1bHRFdmVudCA9IFsgLi4uZXZlbnRzVG9GbHVzaCwgZGVmYXVsdEV2ZW50IF07XG5cbiAgICAgICAgdGhpcy50ZWxlbWV0cnlFbWl0dGVyKGV2ZW50c1dpdGhEZWZhdWx0RXZlbnQubWFwKGUgPT4gZS5nZXQoKSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5jcmVtZW50RXZlbnRDb3VudChldmVudDogVGVsZW1ldHJ5RXZlbnQpOiB2b2lkIHtcbiAgICAgICAgLypcbiAgICAgICAgICogVE9ETywgbmFtZSBjYWNoZSBldmVudCBkaWZmZXJlbnQ/XG4gICAgICAgICAqIGlmIHR5cGUgaXMgY2FjaGUgZXZlbnQsIGNoYW5nZSBuYW1lXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBldmVudC5ldmVudE5hbWU7XG4gICAgICAgIGNvbnN0IGV2ZW50Q291bnQgPSB0aGlzLmV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWRbZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZF07XG4gICAgICAgIGlmICghZXZlbnRDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudENvdW50QnlDb3JyZWxhdGlvbklkW2V2ZW50LnRlbGVtZXRyeUNvcnJlbGF0aW9uSWRdID0ge1xuICAgICAgICAgICAgICAgIFtldmVudE5hbWVdOiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRDb3VudFtldmVudE5hbWVdID0gZXZlbnRDb3VudFtldmVudE5hbWVdID8gZXZlbnRDb3VudFtldmVudE5hbWVdICsgMSA6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE9ycGhhbmVkRXZlbnRzKGNvcnJlbGF0aW9uSWQ6IHN0cmluZyk6IEFycmF5PFRlbGVtZXRyeUV2ZW50PiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluUHJvZ3Jlc3NFdmVudHMpXG4gICAgICAgICAgICAucmVkdWNlKChtZW1vLCBldmVudEtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudEtleS5pbmRleE9mKGNvcnJlbGF0aW9uSWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuaW5Qcm9ncmVzc0V2ZW50c1tldmVudEtleV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmluUHJvZ3Jlc3NFdmVudHNbZXZlbnRLZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLm1lbW8sIGV2ZW50XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRVZFTlRfTkFNRV9QUkVGSVgsIFRFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTIH0gZnJvbSBcIi4vVGVsZW1ldHJ5Q29uc3RhbnRzXCI7XG5pbXBvcnQgVGVsZW1ldHJ5RXZlbnQgZnJvbSBcIi4vVGVsZW1ldHJ5RXZlbnRcIjtcbmltcG9ydCB7IEV2ZW50Q291bnQsIFRlbGVtZXRyeVBsYXRmb3JtIH0gZnJvbSBcIi4vVGVsZW1ldHJ5VHlwZXNcIjtcbmltcG9ydCB7IHByZXBlbmRFdmVudE5hbWVQcmVmaXggfSBmcm9tIFwiLi9UZWxlbWV0cnlVdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0RXZlbnQgZXh0ZW5kcyBUZWxlbWV0cnlFdmVudCB7XG4gICAgLy8gVE9ETyBQbGF0Zm9ybSBUeXBlXG4gICAgY29uc3RydWN0b3IocGxhdGZvcm06IFRlbGVtZXRyeVBsYXRmb3JtLCBjb3JyZWxhdGlvbklkOiBzdHJpbmcsIGNsaWVudElkOiBzdHJpbmcsIGV2ZW50Q291bnQ6IEV2ZW50Q291bnQpIHtcbiAgICAgICAgc3VwZXIocHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImRlZmF1bHRfZXZlbnRcIiksIGNvcnJlbGF0aW9uSWQpO1xuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJjbGllbnRfaWRcIildID0gY2xpZW50SWQ7XG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcInNka19wbGFmb3JtXCIpXSA9IHBsYXRmb3JtLnNkaztcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwic2RrX3ZlcnNpb25cIildID0gcGxhdGZvcm0uc2RrVmVyc2lvbjtcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwiYXBwbGljYXRpb25fbmFtZVwiKV0gPSBwbGF0Zm9ybS5hcHBsaWNhdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImFwcGxpY2F0aW9uX3ZlcnNpb25cIildID0gcGxhdGZvcm0uYXBwbGljYXRpb25WZXJzaW9uO1xuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJlZmZlY3RpdmVfY29ubmVjdGlvbl9zcGVlZFwiKV0gPSBwbGF0Zm9ybS5uZXR3b3JrSW5mb3JtYXRpb24gJiYgcGxhdGZvcm0ubmV0d29ya0luZm9ybWF0aW9uLmNvbm5lY3Rpb25TcGVlZDtcbiAgICAgICAgdGhpcy5ldmVudFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5VaUV2ZW50Q291bnRUZWxlbWV0cnlCYXRjaEtleX1gXSA9IHRoaXMuZ2V0RXZlbnRDb3VudChwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwidWlfZXZlbnRcIiksIGV2ZW50Q291bnQpO1xuICAgICAgICB0aGlzLmV2ZW50W2Ake1RFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTLkh0dHBFdmVudENvdW50VGVsZW1ldHJ5QmF0Y2hLZXl9YF0gPSB0aGlzLmdldEV2ZW50Q291bnQocHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImh0dHBfZXZlbnRcIiksIGV2ZW50Q291bnQpO1xuICAgICAgICB0aGlzLmV2ZW50W2Ake1RFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTLkNhY2hlRXZlbnRDb3VudENvbnN0U3RyS2V5fWBdID0gdGhpcy5nZXRFdmVudENvdW50KHByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJjYWNoZV9ldmVudFwiKSwgZXZlbnRDb3VudCk7XG4gICAgICAgIC8vIC8gRGV2aWNlIGlkP1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RXZlbnRDb3VudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRDb3VudDogRXZlbnRDb3VudCk6IG51bWJlciB7XG4gICAgICAgIGlmICghZXZlbnRDb3VudFtldmVudE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnRDb3VudFtldmVudE5hbWVdO1xuICAgIH1cbn1cbiIsImltcG9ydCBUZWxlbWV0cnlFdmVudCBmcm9tIFwiLi9UZWxlbWV0cnlFdmVudFwiO1xuaW1wb3J0IHsgVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMgfSBmcm9tIFwiLi9UZWxlbWV0cnlDb25zdGFudHNcIjtcbmltcG9ydCB7IHNjcnViVGVuYW50RnJvbVVyaSwgaGFzaFBlcnNvbmFsSWRlbnRpZmllciwgcHJlcGVuZEV2ZW50TmFtZVByZWZpeCB9IGZyb20gXCIuL1RlbGVtZXRyeVV0aWxzXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vTG9nZ2VyXCI7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9LRVlTID0ge1xuICAgIEFVVEhPUklUWTogcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImF1dGhvcml0eVwiKSxcbiAgICBBVVRIT1JJVFlfVFlQRTogcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImF1dGhvcml0eV90eXBlXCIpLFxuICAgIFBST01QVDogcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcInVpX2JlaGF2aW9yXCIpLFxuICAgIFRFTkFOVF9JRDogcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcInRlbmFudF9pZFwiKSxcbiAgICBVU0VSX0lEOiBwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwidXNlcl9pZFwiKSxcbiAgICBXQVNfU1VDRVNTRlVMOiBwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwid2FzX3N1Y2Nlc3NmdWxcIiksXG4gICAgQVBJX0VSUk9SX0NPREU6IHByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJhcGlfZXJyb3JfY29kZVwiKSxcbiAgICBMT0dJTl9ISU5UOiBwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwibG9naW5faGludFwiKVxufTtcblxuZXhwb3J0IGVudW0gQVBJX0NPREUge1xuICAgIEFjcXVpcmVUb2tlblJlZGlyZWN0ID0gMjAwMSxcbiAgICBBY3F1aXJlVG9rZW5TaWxlbnQgPSAyMDAyLFxuICAgIEFjcXVpcmVUb2tlblBvcHVwID0gMjAwMyxcbiAgICBMb2dpblJlZGlyZWN0ID0gMjAwNCxcbiAgICBMb2dpblBvcHVwID0gMjAwNVxufVxuXG5leHBvcnQgZW51bSBBUElfRVZFTlRfSURFTlRJRklFUiB7XG4gICAgQWNxdWlyZVRva2VuUmVkaXJlY3QgPSBcIkFjcXVpcmVUb2tlblJlZGlyZWN0XCIsXG4gICAgQWNxdWlyZVRva2VuU2lsZW50ID0gXCJBY3F1aXJlVG9rZW5TaWxlbnRcIixcbiAgICBBY3F1aXJlVG9rZW5Qb3B1cCA9IFwiQWNxdWlyZVRva2VuUG9wdXBcIixcbiAgICBMb2dpblJlZGlyZWN0ID0gXCJMb2dpblJlZGlyZWN0XCIsXG4gICAgTG9naW5Qb3B1cCA9IFwiTG9naW5Qb3B1cFwiXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaUV2ZW50IGV4dGVuZHMgVGVsZW1ldHJ5RXZlbnQge1xuXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvcnJlbGF0aW9uSWQ6IHN0cmluZywgbG9nZ2VyOiBMb2dnZXIpIHtcbiAgICAgICAgc3VwZXIocHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImFwaV9ldmVudFwiKSwgY29ycmVsYXRpb25JZCk7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYXBpRXZlbnRJZGVudGlmaWVyKGFwaUV2ZW50SWRlbnRpZmllcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXZlbnRbVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuQXBpVGVsZW1JZENvbnN0U3RyS2V5XSA9IGFwaUV2ZW50SWRlbnRpZmllcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGFwaUNvZGUoYXBpQ29kZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZXZlbnRbVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuQXBpSWRDb25zdFN0cktleV0gPSBhcGlDb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYXV0aG9yaXR5KHVyaTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXZlbnRbRVZFTlRfS0VZUy5BVVRIT1JJVFldID0gc2NydWJUZW5hbnRGcm9tVXJpKHVyaSkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGFwaUVycm9yQ29kZShlcnJvckNvZGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmV2ZW50W0VWRU5UX0tFWVMuQVBJX0VSUk9SX0NPREVdID0gZXJyb3JDb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdGVuYW50SWQodGVuYW50SWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmV2ZW50W0VWRU5UX0tFWVMuVEVOQU5UX0lEXSA9IHRoaXMubG9nZ2VyLmlzUGlpTG9nZ2luZ0VuYWJsZWQoKSAmJiB0ZW5hbnRJZCA/XG4gICAgICAgICAgICBoYXNoUGVyc29uYWxJZGVudGlmaWVyKHRlbmFudElkKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYWNjb3VudElkKGFjY291bnRJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXZlbnRbRVZFTlRfS0VZUy5VU0VSX0lEXSA9IHRoaXMubG9nZ2VyLmlzUGlpTG9nZ2luZ0VuYWJsZWQoKSAmJiBhY2NvdW50SWQgP1xuICAgICAgICAgICAgaGFzaFBlcnNvbmFsSWRlbnRpZmllcihhY2NvdW50SWQpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB3YXNTdWNjZXNzZnVsKHdhc1N1Y2Nlc3NmdWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ldmVudFtFVkVOVF9LRVlTLldBU19TVUNFU1NGVUxdID0gd2FzU3VjY2Vzc2Z1bDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHdhc1N1Y2Nlc3NmdWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50W0VWRU5UX0tFWVMuV0FTX1NVQ0VTU0ZVTF0gPT09IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBsb2dpbkhpbnQobG9naW5IaW50OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ldmVudFtFVkVOVF9LRVlTLkxPR0lOX0hJTlRdID0gdGhpcy5sb2dnZXIuaXNQaWlMb2dnaW5nRW5hYmxlZCgpICYmIGxvZ2luSGludCA/XG4gICAgICAgICAgICBoYXNoUGVyc29uYWxJZGVudGlmaWVyKGxvZ2luSGludClcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGF1dGhvcml0eVR5cGUoYXV0aG9yaXR5VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXZlbnRbRVZFTlRfS0VZUy5BVVRIT1JJVFlfVFlQRV0gPSBhdXRob3JpdHlUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwcm9tcHRUeXBlKHByb21wdFR5cGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmV2ZW50W0VWRU5UX0tFWVMuUFJPTVBUXSA9IHByb21wdFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XG5pbXBvcnQgeyBTdHJpbmdEaWN0IH0gZnJvbSBcIi4vTXNhbFR5cGVzXCI7XG5cbi8qKlxuICogQGxpbmsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzfUF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1xuICovXG5leHBvcnQgdHlwZSBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgPSB7XG4gICAgc2NvcGVzPzogQXJyYXk8c3RyaW5nPjtcbiAgICBleHRyYVNjb3Blc1RvQ29uc2VudD86IEFycmF5PHN0cmluZz47XG4gICAgcHJvbXB0Pzogc3RyaW5nO1xuICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzPzogU3RyaW5nRGljdDtcbiAgICBjbGFpbXNSZXF1ZXN0Pzogc3RyaW5nO1xuICAgIGF1dGhvcml0eT86IHN0cmluZztcbiAgICBzdGF0ZT86IHN0cmluZztcbiAgICBjb3JyZWxhdGlvbklkPzogc3RyaW5nO1xuICAgIGFjY291bnQ/OiBBY2NvdW50O1xuICAgIHNpZD86IHN0cmluZztcbiAgICBsb2dpbkhpbnQ/OiBzdHJpbmc7XG4gICAgZm9yY2VSZWZyZXNoPzogYm9vbGVhbjtcbiAgICByZWRpcmVjdFVyaT86IHN0cmluZztcbiAgICByZWRpcmVjdFN0YXJ0UGFnZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNsYWltc1JlcXVlc3QocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKSB7XG4gICAgaWYgKCFyZXF1ZXN0LmNsYWltc1JlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgY2xhaW1zO1xuICAgIHRyeSB7XG4gICAgICAgIGNsYWltcyA9IEpTT04ucGFyc2UocmVxdWVzdC5jbGFpbXNSZXF1ZXN0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVDbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yKGUpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IE1vcmUgdmFsaWRhdGlvbiB3aWxsIGJlIGFkZGVkIHdoZW4gdGhlIHNlcnZlciB0ZWFtIHRlbGxzIHVzIGhvdyB0aGV5IGhhdmUgYWN0dWFsbHkgaW1wbGVtZW50ZWQgY2xhaW1zXG59XG4iXSwic291cmNlUm9vdCI6IiJ9