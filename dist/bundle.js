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
        return str.match(regularExp)[0];
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
            var regExp, convertedTime, result;
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
                            })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
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


var DigitalWatch = /** @class */ (function (_super) {
    __extends(DigitalWatch, _super);
    function DigitalWatch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentColor = _Enums__WEBPACK_IMPORTED_MODULE_1__["Colors"].WHITE;
        _this.colors = Object.values(_Enums__WEBPACK_IMPORTED_MODULE_1__["Colors"]);
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
        this.currentColor = this.colors.find(function (item) { return str === item; });
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
    TaskList["FRY"] = "Fry";
    TaskList["COOK"] = "Cook";
    TaskList["BAKE"] = "Bake";
    TaskList["BOIL"] = "Boil";
})(TaskList || (TaskList = {}));
var Colors;
(function (Colors) {
    Colors["WHITE"] = "White";
    Colors["GREEN"] = "Green";
    Colors["RED"] = "Red";
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
        _this.taskList = Object.values(_Enums__WEBPACK_IMPORTED_MODULE_1__["TaskList"]);
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
newWatch.changeColor(_Enums__WEBPACK_IMPORTED_MODULE_3__["Colors"].RED);
console.log(newWatch.getColor());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fic3RyYWN0RGV2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9EaWdpdGFsV2F0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudW1zLnRzIiwid2VicGFjazovLy8uL3NyYy9NdWx0aWNvb2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU21hcnRIb3VzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0lBTUksd0JBQVksSUFBWTtRQUpkLFVBQUssR0FBWSxLQUFLLENBQUM7UUFLN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVT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QUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDakMsUUFBUSxDQUFDLFdBQVcsQ0FBQyw2Q0FBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBEZXZpY2VJbnRlcmZhY2UgfSBmcm9tIFwiLi9EZXZpY2VJbnRlcmZhY2VcIlxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3REZXZpY2UgaW1wbGVtZW50cyBEZXZpY2VJbnRlcmZhY2Uge1xuICAgIHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHN0YXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIHVzZXJUaW1lOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRUaW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNWYWxpZFN0cihyZWd1bGFyRXhwOiBSZWdFeHAsIHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHN0ci5tYXRjaChyZWd1bGFyRXhwKVswXTtcbiAgICB9XG5cbiAgICBzZXROYW1lKHN0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlZ0V4cDogUmVnRXhwID0gL15cXHd7NCwxMH0vaTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5pc1ZhbGlkU3RyKHJlZ0V4cCwgc3RyKTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9mZigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldFN0YXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG5cbiAgICBhc3luYyB0aW1lcihzdHI6IHN0cmluZywgdG9nZ2xlcjogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCByZWdFeHA6IFJlZ0V4cCA9IC9eKFswMV1cXGR8MlswLTNdKTpbMC01XVswLTldLztcbiAgICAgICAgdGhpcy51c2VyVGltZSA9IHRoaXMuaXNWYWxpZFN0cihyZWdFeHAsIHN0cik7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLnRha2VDdXJyZW50VGltZSgpO1xuICAgICAgICBjb25zdCBjb252ZXJ0ZWRUaW1lOiBudW1iZXIgPSB0aGlzLnRpbWVDb252ZXJ0ZXIodGhpcy5jdXJyZW50VGltZSwgdGhpcy51c2VyVGltZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmICh0b2dnbGVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKFwidGltZSB0byBjb29rXCIpLCBjb252ZXJ0ZWRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9nZ2xlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoXCJ3YWtlIHVwLCB3b3JrIGhhcmQhXCIpLCBjb252ZXJ0ZWRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiUGxzLCBwdXQgYm9vbGVhbiBkYXRhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0YWtlQ3VycmVudFRpbWUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGhvdXJzOiBudW1iZXIgPVxuICAgICAgICAgICAgZGF0ZS5nZXRIb3VycygpIDwgMTAgPyBOdW1iZXIoXCIwXCIgKyBkYXRlLmdldEhvdXJzKCkpIDogZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBjb25zdCBtaW51dGVzOiBudW1iZXIgPVxuICAgICAgICAgICAgZGF0ZS5nZXRNaW51dGVzKCkgPCAxMCA/IE51bWJlcihcIjBcIiArIGRhdGUuZ2V0TWludXRlcygpKSA6IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZyA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdGltZUNvbnZlcnRlcihjdXJyZW50VGltZTogc3RyaW5nLCB1c2VyVGltZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWVBcnJheTogc3RyaW5nW10gPSBjdXJyZW50VGltZS5zcGxpdChcIjpcIik7XG4gICAgICAgIGNvbnN0IHVzZXJUaW1lQXJyYXk6IHN0cmluZ1tdID0gdXNlclRpbWUuc3BsaXQoXCI6XCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50TWlsbGlzZWNvbmRzOiBudW1iZXIgPVxuICAgICAgICAgICAgTnVtYmVyKGN1cnJlbnRUaW1lQXJyYXlbMF0pICogNjAgKiA2MCAqIDEwMDAgKyBOdW1iZXIoY3VycmVudFRpbWVBcnJheVsxXSkgKiA2MCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IHVzZXJNaWxsaXNlY29uZHMgPVxuICAgICAgICAgICAgTnVtYmVyKHVzZXJUaW1lQXJyYXlbMF0pICogNjAgKiA2MCAqIDEwMDAgKyBOdW1iZXIodXNlclRpbWVBcnJheVsxXSkgKiA2MCAqIDEwMDA7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh1c2VyTWlsbGlzZWNvbmRzIC0gY3VycmVudE1pbGxpc2Vjb25kcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQWJzdHJhY3REZXZpY2UgfSBmcm9tIFwiLi9BYnN0cmFjdERldmljZVwiXG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tIFwiLi9FbnVtc1wiXG5cbmV4cG9ydCBjbGFzcyBEaWdpdGFsV2F0Y2ggZXh0ZW5kcyBBYnN0cmFjdERldmljZSB7XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRDb2xvcjogc3RyaW5nID0gQ29sb3JzLldISVRFO1xuICAgIHByb3RlY3RlZCBjb2xvcnM6IHN0cmluZ1tdID0gT2JqZWN0LnZhbHVlcyhDb2xvcnMpO1xuICAgIHByb3RlY3RlZCBicmlnaHRuZXNzOiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBjbG9jazogbnVsbCB8IG51bWJlciA9IG51bGw7XG5cbiAgICBvbigpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIub24oKTtcbiAgICAgICAgdGhpcy5jbG9ja1N0YXJ0KCk7XG4gICAgfVxuXG4gICAgb2ZmKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5vZmYoKTtcbiAgICAgICAgdGhpcy5jbG9ja1N0b3AoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VDb2xvcihzdHI6IENvbG9ycyk6IHZvaWQgeyBcbiAgICAgICB0aGlzLmN1cnJlbnRDb2xvciA9IHRoaXMuY29sb3JzLmZpbmQoKGl0ZW0pPT5zdHIgPT09IGl0ZW0pO1xuICAgIH1cblxuICAgIGdldENvbG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRDb2xvcjtcbiAgICB9XG4gICAgZ2V0QWxsQ29sb3JzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzO1xuICAgIH1cblxuICAgIGluY3JlYXNlQnJpZ2h0bmVzcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IHRydWUgJiYgdGhpcy5icmlnaHRuZXNzIDwgMTApIHtcbiAgICAgICAgICAgIHRoaXMuYnJpZ2h0bmVzcysrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjcmVhc2VCcmlnaHRuZXNzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gdHJ1ZSAmJiB0aGlzLmJyaWdodG5lc3MgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmJyaWdodG5lc3MtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJyaWdodG5lc3MoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJpZ2h0bmVzcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0VXBDbG9jaygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGF0ZVN0cjogc3RyaW5nID0gU3RyaW5nKG5ldyBEYXRlKCkpO1xuICAgICAgICBjb25zdCByZWdFeHA6IFJlZ0V4cCA9IC8oXFx3ezN9XFxzKXsyfVxcZHsyfVxcc1xcZHs0fVxccyhcXGR7Mn06KXsyfVxcZHsyfS87XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlOiBzdHJpbmcgPSBkYXRlU3RyLm1hdGNoKHJlZ0V4cClbMF07XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKS5pbm5lclRleHQgPSBgRGF0ZSZUaW1lOiAke2N1cnJlbnREYXRlfWA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsb2NrU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xvY2sgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5zZXRVcENsb2NrLCAxMDAwKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xvY2tTdG9wKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmNsb2NrKTtcbiAgICAgICAgdGhpcy5jbG9jayA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKS5pbm5lclRleHQgPSBgYDtcbiAgICB9XG59XG4iLCJlbnVtIFRhc2tMaXN0IHtcbiAgICBGUlk9XCJGcnlcIiwgQ09PSz1cIkNvb2tcIiwgQkFLRT1cIkJha2VcIiwgQk9JTD1cIkJvaWxcIlxufVxuXG5lbnVtIENvbG9ycyB7XG4gICAgV0hJVEUgPSBcIldoaXRlXCIsIEdSRUVOID0gXCJHcmVlblwiICwgUkVEID0gXCJSZWRcIlxufVxuXG5leHBvcnQge1Rhc2tMaXN0LCBDb2xvcnN9O1xuIiwiaW1wb3J0IHsgQWJzdHJhY3REZXZpY2UgfSBmcm9tIFwiLi9BYnN0cmFjdERldmljZVwiXG5pbXBvcnQgeyBUYXNrTGlzdCB9IGZyb20gXCIuL0VudW1zXCJcblxuZXhwb3J0IGNsYXNzIE11bHRpY29va2VyICBleHRlbmRzIEFic3RyYWN0RGV2aWNlIHtcbiAgICBwcm90ZWN0ZWQgdGFzazogbnVsbCB8IHN0cmluZyAgPSBudWxsOyAvLyBUaGUgbWFpbiBnb2FsIGlzIHRoYXQgdXNlciBzZXRzIHRhc2sgYW5kIGNvb2tpbmcgc3RhcnRzLCBzbyBpdCdzIG5vdCBwb3NzaWJsZSB0byBzZXQgZGVmYXVsdCB2YWx1ZVxuICAgIHByb3RlY3RlZCBjdXJyZW50VGFzazogbnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgdGFza0xpc3Q6IHN0cmluZ1tdID0gT2JqZWN0LnZhbHVlcyhUYXNrTGlzdCk7XG4gICAgcHJvdGVjdGVkIHRlbXBlcmF0dXJlOiBudW1iZXIgPSAxMDA7XG5cbiAgICBnZXRUYXNrbGlzdCgpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0O1xuICAgIH1cblxuICAgIGdldFRhc2soKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMudGFzayAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXNrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiVGFzayBpcyBub3Qgc2V0LiBQbGVhc2UsIHNldCB0YXNrLlwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRVcFRhc2soKTogdm9pZCB7XG4gICAgICAgIGlmKCB0aGlzLnN0YXRlID09PSB0cnVlKXtcbiAgICAgICAgICAgIHRoaXMudGFzayA9IHRoaXMudGFza0xpc3RbdGhpcy5jdXJyZW50VGFza11cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFzayA9IHRoaXMudGFza0xpc3RbMF07XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgIH1cblxuICAgIGdldEN1cnJlbnRUYXNrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdFt0aGlzLmN1cnJlbnRUYXNrXTtcbiAgICB9XG5cbiAgICBuZXh0VGFzaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IHRydWUgJiZcbiAgICAgICAgdGhpcy5jdXJyZW50VGFzayA+IHRoaXMudGFza0xpc3QubGVuZ3RoIC0gMVxuICAgICAgICAgICAgPyB0aGlzLmN1cnJlbnRUYXNrXG4gICAgICAgICAgICA6ICsrdGhpcy5jdXJyZW50VGFzaztcbiAgICB9XG5cbiAgICBwcmV2aW91c1Rhc2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSB0cnVlICYmIHRoaXMuY3VycmVudFRhc2sgPD0gMFxuICAgICAgICAgICAgPyB0aGlzLmN1cnJlbnRUYXNrXG4gICAgICAgICAgICA6IC0tdGhpcy5jdXJyZW50VGFzaztcbiAgICB9XG5cbiAgICBnZXRUZW1wZXJhdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGVyYXR1cmU7XG4gICAgfVxuXG4gICAgaW5jcmVhc2VUZW1wZXJhdHVyZSgpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSB0cnVlICYmIHRoaXMudGVtcGVyYXR1cmUgPj0gMTAwXG4gICAgICAgICAgICA/IHRoaXMudGVtcGVyYXR1cmVcbiAgICAgICAgICAgIDogKyt0aGlzLnRlbXBlcmF0dXJlO1xuICAgIH1cbiAgICBkZWNyZWFzZVRlbXBlcmF0dXJlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSB0cnVlICYmIHRoaXMudGVtcGVyYXR1cmUgPD0gMFxuICAgICAgICAgICAgPyB0aGlzLnRlbXBlcmF0dXJlXG4gICAgICAgICAgICA6IC0tdGhpcy50ZW1wZXJhdHVyZTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRVcFRhc2tXaXRoVGltZXIoc3RyOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgc3VwZXIudGltZXIoc3RyLCB0cnVlKTtcbiAgICAgICAgdGhpcy50YXNrID0gdGhpcy50YXNrTGlzdFt0aGlzLmN1cnJlbnRUYXNrXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrIGlzIHNldFwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEZXZpY2VJbnRlcmZhY2UgfSBmcm9tIFwiLi9EZXZpY2VJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNsYXNzIFNtYXJ0SG91c2U8VCBleHRlbmRzIERldmljZUludGVyZmFjZT4ge1xuICAgIHByaXZhdGUgZGV2aWNlcyA9IG5ldyBNYXA8c3RyaW5nLCBUPigpO1xuICAgIFxuICAgIGFkZERldmljZSh2YWx1ZTogVCk6dm9pZCB7XG4gICAgICAgIHRoaXMuZGV2aWNlcy5zZXQodmFsdWUuZ2V0TmFtZSgpICx2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0QWxsRGV2aWNlcygpOiBNYXA8c3RyaW5nLCBUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRldmljZXM7XG4gICAgfVxuXG4gICAgZ2V0RGV2aWNlQnlLZXkoa2V5OiBzdHJpbmcpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlcy5nZXQoa2V5KTtcbiAgICB9XG5cbiAgICBkZWxldGVEZXZpY2Uoa2V5OnN0cmluZyk6dm9pZCB7XG4gICAgICAgIHRoaXMuZGV2aWNlcy5kZWxldGUoa2V5KTtcbiAgICB9XG5cbiAgICBkZWxldGVBbGxEZXZpY2VzKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuZGV2aWNlcy5jbGVhcigpO1xuICAgIH1cblxuICAgIGV2ZXJ5dGhpbmdPbigpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgdGhpcy5kZXZpY2VzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICB2YWx1ZS5vbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlcnl0aGluZ09mZigpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgdGhpcy5kZXZpY2VzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICB2YWx1ZS5vZmYoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgRGlnaXRhbFdhdGNoIH0gZnJvbSBcIi4vRGlnaXRhbFdhdGNoXCI7XG5pbXBvcnQgeyBNdWx0aWNvb2tlciB9IGZyb20gXCIuL011bHRpY29va2VyXCI7XG5pbXBvcnQgeyBTbWFydEhvdXNlIH0gZnJvbSBcIi4vU21hcnRIb3VzZVwiO1xuaW1wb3J0IHtBYnN0cmFjdERldmljZX0gZnJvbSBcIi4vQWJzdHJhY3REZXZpY2VcIjtcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gXCIuL0VudW1zXCJcbmltcG9ydCB7IHNpZ24gfSBmcm9tIFwiY3J5cHRvXCI7XG5cbmNvbnN0IHNoID0gbmV3IFNtYXJ0SG91c2U8QWJzdHJhY3REZXZpY2U+KCk7XG5cbmNvbnN0IG5ld1dhdGNoID0gbmV3IERpZ2l0YWxXYXRjaChcIlJvbGV4XCIpO1xuXG5jb25zdCBzb21lTXVsdGljb29rZXIgPSBuZXcgTXVsdGljb29rZXIoXCJQb2xhcmlzXCIpO1xuXG5zaC5hZGREZXZpY2UobmV3V2F0Y2gpO1xuc2guYWRkRGV2aWNlKHNvbWVNdWx0aWNvb2tlcik7XG5zaC5ldmVyeXRoaW5nT24oKTtcbmNvbnNvbGUubG9nKHNoLmdldEFsbERldmljZXMoKSk7XG5cbnNvbWVNdWx0aWNvb2tlci5uZXh0VGFzaygpO1xuc29tZU11bHRpY29va2VyLnNldFVwVGFzaygpO1xuY29uc29sZS5sb2coc29tZU11bHRpY29va2VyLmdldFRhc2soKSk7XG5zb21lTXVsdGljb29rZXIucHJldmlvdXNUYXNrKCk7XG5zb21lTXVsdGljb29rZXIuc2V0VXBUYXNrKCk7XG5jb25zb2xlLmxvZyhzb21lTXVsdGljb29rZXIuZ2V0VGFzaygpKTtcbmNvbnNvbGUubG9nKHNvbWVNdWx0aWNvb2tlci5nZXRUYXNrbGlzdCgpKTtcblxuY29uc29sZS5sb2cobmV3V2F0Y2guZ2V0QWxsQ29sb3JzKCkpO1xuY29uc29sZS5sb2cobmV3V2F0Y2guZ2V0Q29sb3IoKSk7XG5uZXdXYXRjaC5jaGFuZ2VDb2xvcihDb2xvcnMuUkVEKTtcbmNvbnNvbGUubG9nKG5ld1dhdGNoLmdldENvbG9yKCkpOyJdLCJzb3VyY2VSb290IjoiIn0=