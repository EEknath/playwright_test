"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.prototype.browserName = function () {
        console.log("broser name");
    };
    Browser.prototype.browserVersion = function () {
        console.log("browserversion");
    };
    return Browser;
}());
exports.Browser = Browser;
