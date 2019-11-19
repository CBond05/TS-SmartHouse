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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AbstractDevice.ts":
/*!*******************************!*\
  !*** ./src/AbstractDevice.ts ***!
  \*******************************/
/*! exports provided: AbstractDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDevice", function() { return AbstractDevice; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};
var AbstractDevice = /** @class */ (function () {
    function AbstractDevice(name) {
        this.state = false;
        this.name = name;
    }
    AbstractDevice.prototype.isValidStr = function (regularExp, str) {
        var result = str.match(regularExp);
        var findValue = result[0];
        return findValue;
    };
    AbstractDevice.prototype.setName = function (str) {
        var regExp = /^\w{4,10}/i;
        this.name = this.isValidStr(regExp, str);
    };
    AbstractDevice.prototype.getName = function () {
        return this.name;
    };
    AbstractDevice.prototype.on = function () {
        this.state = true;
    };
    AbstractDevice.prototype.off = function () {
        this.state = false;
    };
    AbstractDevice.prototype.getState = function () {
        return this.state;
    };
    AbstractDevice.prototype.timer = function (str, toggler) {
        return __awaiter(this, void 0, void 0, function () {
            var regExp, convertedTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        regExp = /^([01]\d|2[0-3]):[0-5][0-9]/;
                        this.userTime = this.isValidStr(regExp, str);
                        this.currentTime = this.takeCurrentTime();
                        convertedTime = this.timeConverter(this.currentTime, this.userTime);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                if (toggler === true) {
                                    setTimeout(function () { return resolve("time to cook"); }, convertedTime);
                                }
                                else if (toggler === false) {
                                    setTimeout(function () { return resolve("wake up, work hard!"); }, convertedTime);
                                }
                                else {
                                    reject("Pls, put boolean data");
                                }
                            }).then(function (result) { return console.log(result); }, function (error) { return console.log(error); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AbstractDevice.prototype.takeCurrentTime = function () {
        var date = new Date();
        var hours = date.getHours() < 10 ? Number("0" + date.getHours()) : date.getHours();
        var minutes = date.getMinutes() < 10 ? Number("0" + date.getMinutes()) : date.getMinutes();
        var result = hours + ":" + minutes;
        return result;
    };
    AbstractDevice.prototype.timeConverter = function (currentTime, userTime) {
        var currentTimeArray = currentTime.split(":");
        var userTimeArray = userTime.split(":");
        var currentMilliseconds = Number(currentTimeArray[0]) * 60 * 60 * 1000 + Number(currentTimeArray[1]) * 60 * 1000;
        var userMilliseconds = Number(userTimeArray[0]) * 60 * 60 * 1000 + Number(userTimeArray[1]) * 60 * 1000;
        return Math.abs(userMilliseconds - currentMilliseconds);
    };
    return AbstractDevice;
}());



/***/ }),

/***/ "./src/DigitalWatch.ts":
/*!*****************************!*\
  !*** ./src/DigitalWatch.ts ***!
  \*****************************/
/*! exports provided: DigitalWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalWatch", function() { return DigitalWatch; });
/* harmony import */ var _AbstractDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDevice */ "./src/AbstractDevice.ts");
/* harmony import */ var _Enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enums */ "./src/Enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};


var DigitalWatch = /** @class */ (function (_super) {
    __extends(DigitalWatch, _super);
    function DigitalWatch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentColor = _Enums__WEBPACK_IMPORTED_MODULE_1__["Colors"].White;
        _this.colors = Object.keys(_Enums__WEBPACK_IMPORTED_MODULE_1__["Colors"]);
        _this.brightness = 0;
        _this.clock = null;
        return _this;
    }
    DigitalWatch.prototype.on = function () {
        _super.prototype.on.call(this);
        this.clockStart();
    };
    DigitalWatch.prototype.off = function () {
        _super.prototype.off.call(this);
        this.clockStop();
    };
    DigitalWatch.prototype.changeColor = function (str) {
        var e_1, _a;
        try {
            for (var _b = __values(this.colors), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (str === item) {
                    this.currentColor = str;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    DigitalWatch.prototype.getColor = function () {
        return this.currentColor;
    };
    DigitalWatch.prototype.getAllColors = function () {
        return this.colors;
    };
    DigitalWatch.prototype.increaseBrightness = function () {
        if (this.state === true && this.brightness < 10) {
            this.brightness++;
        }
    };
    DigitalWatch.prototype.decreaseBrightness = function () {
        if (this.state === true && this.brightness > 0) {
            this.brightness--;
        }
    };
    DigitalWatch.prototype.getBrightness = function () {
        return this.brightness;
    };
    DigitalWatch.prototype.setUpClock = function () {
        var dateStr = String(new Date());
        var regExp = /(\w{3}\s){2}\d{2}\s\d{4}\s(\d{2}:){2}\d{2}/;
        var currentDate = dateStr.match(regExp)[0];
        document.getElementById("root").innerText = "Date&Time: " + currentDate;
    };
    DigitalWatch.prototype.clockStart = function () {
        this.clock = window.setInterval(this.setUpClock, 1000);
    };
    DigitalWatch.prototype.clockStop = function () {
        window.clearInterval(this.clock);
        this.clock = null;
        document.getElementById("root").innerText = "";
    };
    return DigitalWatch;
}(_AbstractDevice__WEBPACK_IMPORTED_MODULE_0__["AbstractDevice"]));



/***/ }),

/***/ "./src/Enums.ts":
/*!**********************!*\
  !*** ./src/Enums.ts ***!
  \**********************/
/*! exports provided: TaskList, Colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskList", function() { return TaskList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
var TaskList;
(function (TaskList) {
    TaskList["Fry"] = "Fry";
    TaskList["Cook"] = "Cook";
    TaskList["Bake"] = "Bake";
    TaskList["Boil"] = "Boil";
})(TaskList || (TaskList = {}));
var Colors;
(function (Colors) {
    Colors["White"] = "White";
    Colors["Green"] = "Green";
    Colors["Red"] = "Red";
})(Colors || (Colors = {}));



/***/ }),

/***/ "./src/Multicooker.ts":
/*!****************************!*\
  !*** ./src/Multicooker.ts ***!
  \****************************/
/*! exports provided: Multicooker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multicooker", function() { return Multicooker; });
/* harmony import */ var _AbstractDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDevice */ "./src/AbstractDevice.ts");
/* harmony import */ var _Enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enums */ "./src/Enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};


var Multicooker = /** @class */ (function (_super) {
    __extends(Multicooker, _super);
    function Multicooker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.task = null; // The main goal is that user sets task and cooking starts, so it's not possible to set default value
        _this.currentTask = 0;
        _this.taskList = Object.keys(_Enums__WEBPACK_IMPORTED_MODULE_1__["TaskList"]);
        _this.temperature = 100;
        return _this;
    }
    Multicooker.prototype.getTasklist = function () {
        return this.taskList;
    };
    Multicooker.prototype.getTask = function () {
        if (this.task != null) {
            return this.task;
        }
        else {
            return "Task is not set. Please, set task.";
        }
    };
    Multicooker.prototype.setUpTask = function () {
        if (this.state === true) {
            this.task = this.taskList[this.currentTask];
        }
        else {
            this.task = this.taskList[0];
        }
    };
    Multicooker.prototype.getCurrentTask = function () {
        return this.taskList[this.currentTask];
    };
    Multicooker.prototype.nextTask = function () {
        return this.state === true &&
            this.currentTask > this.taskList.length - 1
            ? this.currentTask
            : ++this.currentTask;
    };
    Multicooker.prototype.previousTask = function () {
        return this.state === true && this.currentTask <= 0
            ? this.currentTask
            : --this.currentTask;
    };
    Multicooker.prototype.getTemperature = function () {
        return this.temperature;
    };
    Multicooker.prototype.increaseTemperature = function () {
        return this.state === true && this.temperature >= 100
            ? this.temperature
            : ++this.temperature;
    };
    Multicooker.prototype.decreaseTemperature = function () {
        return this.state === true && this.temperature <= 0
            ? this.temperature
            : --this.temperature;
    };
    Multicooker.prototype.setUpTaskWithTimer = function (str) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.timer.call(this, str, true)];
                    case 1:
                        _a.sent();
                        this.task = this.taskList[this.currentTask];
                        console.log("task is set");
                        return [2 /*return*/];
                }
            });
        });
    };
    return Multicooker;
}(_AbstractDevice__WEBPACK_IMPORTED_MODULE_0__["AbstractDevice"]));



/***/ }),

/***/ "./src/SmartHouse.ts":
/*!***************************!*\
  !*** ./src/SmartHouse.ts ***!
  \***************************/
/*! exports provided: SmartHouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartHouse", function() { return SmartHouse; });
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var SmartHouse = /** @class */ (function () {
    function SmartHouse() {
        this.devices = new Map();
    }
    SmartHouse.prototype.addDevice = function (value) {
        this.devices.set(value.getName(), value);
    };
    SmartHouse.prototype.getAllDevices = function () {
        return this.devices;
    };
    SmartHouse.prototype.getDeviceByKey = function (key) {
        return this.devices.get(key);
    };
    SmartHouse.prototype.deleteDevice = function (key) {
        this.devices.delete(key);
    };
    SmartHouse.prototype.deleteAllDevices = function () {
        this.devices.clear();
    };
    SmartHouse.prototype.everythingOn = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.devices.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                value.on();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SmartHouse.prototype.everythingOff = function () {
        var e_2, _a;
        try {
            for (var _b = __values(this.devices.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                value.off();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return SmartHouse;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DigitalWatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DigitalWatch */ "./src/DigitalWatch.ts");
/* harmony import */ var _Multicooker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Multicooker */ "./src/Multicooker.ts");
/* harmony import */ var _SmartHouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SmartHouse */ "./src/SmartHouse.ts");
/* harmony import */ var _Enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Enums */ "./src/Enums.ts");




var sh = new _SmartHouse__WEBPACK_IMPORTED_MODULE_2__["SmartHouse"]();
var newWatch = new _DigitalWatch__WEBPACK_IMPORTED_MODULE_0__["DigitalWatch"]("Rolex");
var someMulticooker = new _Multicooker__WEBPACK_IMPORTED_MODULE_1__["Multicooker"]("Polaris");
sh.addDevice(newWatch);
sh.addDevice(someMulticooker);
sh.everythingOn();
console.log(sh.getAllDevices());
someMulticooker.nextTask();
someMulticooker.setUpTask();
console.log(someMulticooker.getTask());
someMulticooker.previousTask();
someMulticooker.setUpTask();
console.log(someMulticooker.getTask());
console.log(someMulticooker.getTasklist());
console.log(newWatch.getAllColors());
console.log(newWatch.getColor());
newWatch.changeColor(_Enums__WEBPACK_IMPORTED_MODULE_3__["Colors"].Red);
console.log(newWatch.getColor());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fic3RyYWN0RGV2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9EaWdpdGFsV2F0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudW1zLnRzIiwid2VicGFjazovLy8uL3NyYy9NdWx0aWNvb2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU21hcnRIb3VzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0lBTUksd0JBQVksSUFBWTtRQUpkLFVBQUssR0FBWSxLQUFLLENBQUM7UUFLN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVT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QU8sRUFBRSxDQUFDLENBQUM7QUFDdkMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQy9CLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLFFBQVEsQ0FBQyxXQUFXLENBQUMsNkNBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgRGV2aWNlSW50ZXJmYWNlIH0gZnJvbSBcIi4vRGV2aWNlSW50ZXJmYWNlXCJcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGV2aWNlIGltcGxlbWVudHMgRGV2aWNlSW50ZXJmYWNlIHtcbiAgICBwcm90ZWN0ZWQgbmFtZTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBzdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCB1c2VyVGltZTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBjdXJyZW50VGltZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGlzVmFsaWRTdHIocmVndWxhckV4cDogUmVnRXhwLCBzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8c3RyaW5nPiA9IHN0ci5tYXRjaChyZWd1bGFyRXhwKTtcbiAgICAgICAgbGV0IGZpbmRWYWx1ZTogc3RyaW5nID0gcmVzdWx0WzBdO1xuICAgICAgICByZXR1cm4gZmluZFZhbHVlO1xuICAgIH1cblxuICAgIHNldE5hbWUoc3RyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVnRXhwOiBSZWdFeHAgPSAvXlxcd3s0LDEwfS9pO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmlzVmFsaWRTdHIocmVnRXhwLCBzdHIpO1xuICAgIH1cblxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb2ZmKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0U3RhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cblxuICAgIGFzeW5jIHRpbWVyKHN0cjogc3RyaW5nLCB0b2dnbGVyOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHJlZ0V4cDogUmVnRXhwID0gL14oWzAxXVxcZHwyWzAtM10pOlswLTVdWzAtOV0vO1xuICAgICAgICB0aGlzLnVzZXJUaW1lID0gdGhpcy5pc1ZhbGlkU3RyKHJlZ0V4cCwgc3RyKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMudGFrZUN1cnJlbnRUaW1lKCk7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZFRpbWU6IG51bWJlciA9IHRoaXMudGltZUNvbnZlcnRlcih0aGlzLmN1cnJlbnRUaW1lLCB0aGlzLnVzZXJUaW1lKTtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHRvZ2dsZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoXCJ0aW1lIHRvIGNvb2tcIiksIGNvbnZlcnRlZFRpbWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2dnbGVyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShcIndha2UgdXAsIHdvcmsgaGFyZCFcIiksIGNvbnZlcnRlZFRpbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJQbHMsIHB1dCBib29sZWFuIGRhdGFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCksIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRha2VDdXJyZW50VGltZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgaG91cnM6IG51bWJlciA9XG4gICAgICAgICAgICBkYXRlLmdldEhvdXJzKCkgPCAxMCA/IE51bWJlcihcIjBcIiArIGRhdGUuZ2V0SG91cnMoKSkgOiBkYXRlLmdldEhvdXJzKCk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXM6IG51bWJlciA9XG4gICAgICAgICAgICBkYXRlLmdldE1pbnV0ZXMoKSA8IDEwID8gTnVtYmVyKFwiMFwiICsgZGF0ZS5nZXRNaW51dGVzKCkpIDogZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0aW1lQ29udmVydGVyKGN1cnJlbnRUaW1lOiBzdHJpbmcsIHVzZXJUaW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBjdXJyZW50VGltZUFycmF5OiBzdHJpbmdbXSA9IGN1cnJlbnRUaW1lLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgY29uc3QgdXNlclRpbWVBcnJheTogc3RyaW5nW10gPSB1c2VyVGltZS5zcGxpdChcIjpcIik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRNaWxsaXNlY29uZHM6IG51bWJlciA9XG4gICAgICAgICAgICBOdW1iZXIoY3VycmVudFRpbWVBcnJheVswXSkgKiA2MCAqIDYwICogMTAwMCArIE51bWJlcihjdXJyZW50VGltZUFycmF5WzFdKSAqIDYwICogMTAwMDtcbiAgICAgICAgY29uc3QgdXNlck1pbGxpc2Vjb25kcyA9XG4gICAgICAgICAgICBOdW1iZXIodXNlclRpbWVBcnJheVswXSkgKiA2MCAqIDYwICogMTAwMCArIE51bWJlcih1c2VyVGltZUFycmF5WzFdKSAqIDYwICogMTAwMDtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHVzZXJNaWxsaXNlY29uZHMgLSBjdXJyZW50TWlsbGlzZWNvbmRzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBYnN0cmFjdERldmljZSB9IGZyb20gXCIuL0Fic3RyYWN0RGV2aWNlXCJcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gXCIuL0VudW1zXCJcblxuZXhwb3J0IGNsYXNzIERpZ2l0YWxXYXRjaCBleHRlbmRzIEFic3RyYWN0RGV2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY3VycmVudENvbG9yOiBzdHJpbmcgPSBDb2xvcnMuV2hpdGU7XG4gICAgcHJvdGVjdGVkIGNvbG9yczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhDb2xvcnMpO1xuICAgIHByb3RlY3RlZCBicmlnaHRuZXNzOiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBjbG9jazogbnVsbCB8IG51bWJlciA9IG51bGw7XG5cbiAgICBvbigpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIub24oKTtcbiAgICAgICAgdGhpcy5jbG9ja1N0YXJ0KCk7XG4gICAgfVxuXG4gICAgb2ZmKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5vZmYoKTtcbiAgICAgICAgdGhpcy5jbG9ja1N0b3AoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VDb2xvcihzdHI6IENvbG9ycyk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuY29sb3JzKSB7XG4gICAgICAgICAgICBpZiAoc3RyID09PSBpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29sb3IgPSBzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDb2xvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Q29sb3I7XG4gICAgfVxuICAgIGdldEFsbENvbG9ycygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9ycztcbiAgICB9XG5cbiAgICBpbmNyZWFzZUJyaWdodG5lc3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSB0cnVlICYmIHRoaXMuYnJpZ2h0bmVzcyA8IDEwKSB7XG4gICAgICAgICAgICB0aGlzLmJyaWdodG5lc3MrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY3JlYXNlQnJpZ2h0bmVzcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IHRydWUgJiYgdGhpcy5icmlnaHRuZXNzID4gMCkge1xuICAgICAgICAgICAgdGhpcy5icmlnaHRuZXNzLS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCcmlnaHRuZXNzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmJyaWdodG5lc3M7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldFVwQ2xvY2soKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRhdGVTdHI6IHN0cmluZyA9IFN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgY29uc3QgcmVnRXhwOiBSZWdFeHAgPSAvKFxcd3szfVxccyl7Mn1cXGR7Mn1cXHNcXGR7NH1cXHMoXFxkezJ9Oil7Mn1cXGR7Mn0vO1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZTogc3RyaW5nID0gZGF0ZVN0ci5tYXRjaChyZWdFeHApWzBdO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikuaW5uZXJUZXh0ID0gYERhdGUmVGltZTogJHtjdXJyZW50RGF0ZX1gO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbG9ja1N0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsb2NrID0gd2luZG93LnNldEludGVydmFsKHRoaXMuc2V0VXBDbG9jaywgMTAwMCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsb2NrU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5jbG9jayk7XG4gICAgICAgIHRoaXMuY2xvY2sgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikuaW5uZXJUZXh0ID0gYGA7XG4gICAgfVxufVxuIiwiZW51bSBUYXNrTGlzdCB7XG4gICAgRnJ5PVwiRnJ5XCIsIENvb2s9XCJDb29rXCIsIEJha2U9XCJCYWtlXCIsIEJvaWw9XCJCb2lsXCJcbn1cblxuZW51bSBDb2xvcnMge1xuICAgIFdoaXRlID0gXCJXaGl0ZVwiLCBHcmVlbiA9IFwiR3JlZW5cIiAsIFJlZCA9IFwiUmVkXCJcbn1cblxuZXhwb3J0IHtUYXNrTGlzdCwgQ29sb3JzfTtcbiIsImltcG9ydCB7IEFic3RyYWN0RGV2aWNlIH0gZnJvbSBcIi4vQWJzdHJhY3REZXZpY2VcIlxuaW1wb3J0IHsgVGFza0xpc3QgfSBmcm9tIFwiLi9FbnVtc1wiXG5cbmV4cG9ydCBjbGFzcyBNdWx0aWNvb2tlciAgZXh0ZW5kcyBBYnN0cmFjdERldmljZSB7XG4gICAgcHJvdGVjdGVkIHRhc2s6IG51bGwgfCBzdHJpbmcgID0gbnVsbDsgLy8gVGhlIG1haW4gZ29hbCBpcyB0aGF0IHVzZXIgc2V0cyB0YXNrIGFuZCBjb29raW5nIHN0YXJ0cywgc28gaXQncyBub3QgcG9zc2libGUgdG8gc2V0IGRlZmF1bHQgdmFsdWVcbiAgICBwcm90ZWN0ZWQgY3VycmVudFRhc2s6IG51bWJlciA9IDA7XG4gICAgcHJvdGVjdGVkIHRhc2tMaXN0OiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKFRhc2tMaXN0KTtcbiAgICBwcm90ZWN0ZWQgdGVtcGVyYXR1cmU6IG51bWJlciA9IDEwMDtcblxuICAgIGdldFRhc2tsaXN0KCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0VGFzaygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy50YXNrICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJUYXNrIGlzIG5vdCBzZXQuIFBsZWFzZSwgc2V0IHRhc2suXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFVwVGFzaygpOiB2b2lkIHtcbiAgICAgICAgaWYoIHRoaXMuc3RhdGUgPT09IHRydWUpe1xuICAgICAgICAgICAgdGhpcy50YXNrID0gdGhpcy50YXNrTGlzdFt0aGlzLmN1cnJlbnRUYXNrXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXNrID0gdGhpcy50YXNrTGlzdFswXTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFRhc2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0W3RoaXMuY3VycmVudFRhc2tdO1xuICAgIH1cblxuICAgIG5leHRUYXNrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gdHJ1ZSAmJlxuICAgICAgICB0aGlzLmN1cnJlbnRUYXNrID4gdGhpcy50YXNrTGlzdC5sZW5ndGggLSAxXG4gICAgICAgICAgICA/IHRoaXMuY3VycmVudFRhc2tcbiAgICAgICAgICAgIDogKyt0aGlzLmN1cnJlbnRUYXNrO1xuICAgIH1cblxuICAgIHByZXZpb3VzVGFzaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IHRydWUgJiYgdGhpcy5jdXJyZW50VGFzayA8PSAwXG4gICAgICAgICAgICA/IHRoaXMuY3VycmVudFRhc2tcbiAgICAgICAgICAgIDogLS10aGlzLmN1cnJlbnRUYXNrO1xuICAgIH1cblxuICAgIGdldFRlbXBlcmF0dXJlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZW1wZXJhdHVyZTtcbiAgICB9XG5cbiAgICBpbmNyZWFzZVRlbXBlcmF0dXJlKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IHRydWUgJiYgdGhpcy50ZW1wZXJhdHVyZSA+PSAxMDBcbiAgICAgICAgICAgID8gdGhpcy50ZW1wZXJhdHVyZVxuICAgICAgICAgICAgOiArK3RoaXMudGVtcGVyYXR1cmU7XG4gICAgfVxuICAgIGRlY3JlYXNlVGVtcGVyYXR1cmUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IHRydWUgJiYgdGhpcy50ZW1wZXJhdHVyZSA8PSAwXG4gICAgICAgICAgICA/IHRoaXMudGVtcGVyYXR1cmVcbiAgICAgICAgICAgIDogLS10aGlzLnRlbXBlcmF0dXJlO1xuICAgIH1cblxuICAgIGFzeW5jIHNldFVwVGFza1dpdGhUaW1lcihzdHI6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBzdXBlci50aW1lcihzdHIsIHRydWUpO1xuICAgICAgICB0aGlzLnRhc2sgPSB0aGlzLnRhc2tMaXN0W3RoaXMuY3VycmVudFRhc2tdO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhc2sgaXMgc2V0XCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERldmljZUludGVyZmFjZSB9IGZyb20gXCIuL0RldmljZUludGVyZmFjZVwiO1xuXG5leHBvcnQgY2xhc3MgU21hcnRIb3VzZTxUIGV4dGVuZHMgRGV2aWNlSW50ZXJmYWNlPiB7XG4gICAgcHJpdmF0ZSBkZXZpY2VzID0gbmV3IE1hcDxzdHJpbmcsIFQ+KCk7XG4gICAgXG4gICAgYWRkRGV2aWNlKHZhbHVlOiBUKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kZXZpY2VzLnNldCh2YWx1ZS5nZXROYW1lKCkgLHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRBbGxEZXZpY2VzKCk6IE1hcDxzdHJpbmcsIFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlcztcbiAgICB9XG5cbiAgICBnZXREZXZpY2VCeUtleShrZXk6IHN0cmluZyk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXZpY2VzLmdldChrZXkpO1xuICAgIH1cblxuICAgIGRlbGV0ZURldmljZShrZXk6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kZXZpY2VzLmRlbGV0ZShrZXkpO1xuICAgIH1cblxuICAgIGRlbGV0ZUFsbERldmljZXMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kZXZpY2VzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZXZlcnl0aGluZ09uKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiB0aGlzLmRldmljZXMudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIHZhbHVlLm9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmVyeXRoaW5nT2ZmKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiB0aGlzLmRldmljZXMudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIHZhbHVlLm9mZigpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBEaWdpdGFsV2F0Y2ggfSBmcm9tIFwiLi9EaWdpdGFsV2F0Y2hcIjtcbmltcG9ydCB7IE11bHRpY29va2VyIH0gZnJvbSBcIi4vTXVsdGljb29rZXJcIjtcbmltcG9ydCB7IFNtYXJ0SG91c2UgfSBmcm9tIFwiLi9TbWFydEhvdXNlXCI7XG5pbXBvcnQge0Fic3RyYWN0RGV2aWNlfSBmcm9tIFwiLi9BYnN0cmFjdERldmljZVwiO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSBcIi4vRW51bXNcIlxuaW1wb3J0IHsgc2lnbiB9IGZyb20gXCJjcnlwdG9cIjtcblxuY29uc3Qgc2ggPSBuZXcgU21hcnRIb3VzZTxBYnN0cmFjdERldmljZT4oKTtcblxuY29uc3QgbmV3V2F0Y2ggPSBuZXcgRGlnaXRhbFdhdGNoKFwiUm9sZXhcIik7XG5cbmNvbnN0IHNvbWVNdWx0aWNvb2tlciA9IG5ldyBNdWx0aWNvb2tlcihcIlBvbGFyaXNcIik7XG5cbnNoLmFkZERldmljZShuZXdXYXRjaCk7XG5zaC5hZGREZXZpY2Uoc29tZU11bHRpY29va2VyKTtcbnNoLmV2ZXJ5dGhpbmdPbigpO1xuY29uc29sZS5sb2coc2guZ2V0QWxsRGV2aWNlcygpKTtcblxuc29tZU11bHRpY29va2VyLm5leHRUYXNrKCk7XG5zb21lTXVsdGljb29rZXIuc2V0VXBUYXNrKCk7XG5jb25zb2xlLmxvZyhzb21lTXVsdGljb29rZXIuZ2V0VGFzaygpKTtcbnNvbWVNdWx0aWNvb2tlci5wcmV2aW91c1Rhc2soKTtcbnNvbWVNdWx0aWNvb2tlci5zZXRVcFRhc2soKTtcbmNvbnNvbGUubG9nKHNvbWVNdWx0aWNvb2tlci5nZXRUYXNrKCkpO1xuY29uc29sZS5sb2coc29tZU11bHRpY29va2VyLmdldFRhc2tsaXN0KCkpO1xuY29uc29sZS5sb2cobmV3V2F0Y2guZ2V0QWxsQ29sb3JzKCkpO1xuY29uc29sZS5sb2cobmV3V2F0Y2guZ2V0Q29sb3IoKSk7XG5uZXdXYXRjaC5jaGFuZ2VDb2xvcihDb2xvcnMuUmVkKTtcbmNvbnNvbGUubG9nKG5ld1dhdGNoLmdldENvbG9yKCkpOyJdLCJzb3VyY2VSb290IjoiIn0=