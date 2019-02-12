(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appendJsOrigin(testId, urlOrigin) {
    var rawUrl = urlOrigin;
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = rawUrl;
    script.id = 't4u-custom-script';
    if (document.getElementById('t4u-custom-script')) {
        document.getElementById('t4u-custom-script').remove();
    }
    head.appendChild(script);
    document.getElementsByTagName('html')[0].classList.add(testId);
}
exports.appendJsOrigin = appendJsOrigin;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Country = (function () {
    function Country() {
        var url = window.location.href;
        this.regex = /(_\w\w)/g;
        this.url = url;
    }
    Country.prototype.which = function () {
        var language = this.url.match(this.regex);
        return language[0];
    };
    return Country;
}());
exports.Country = Country;
},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("./log");
var language_1 = require("./language");
var country_1 = require("./country");
function customCodeInit(developEnvi) {
    var c = new log_1.LogInput(developEnvi);
    var lang = new language_1.Language();
    var l = lang.which();
    var country = new country_1.Country();
    var co = country.which();
    var Clone = (function () {
        function Clone(target_elm, position) {
            this.target_Elm_ToInsertBefore = target_elm;
            this.position = position;
        }
        Clone.prototype.append = function (price_Elm) {
            var cloned = price_Elm.cloneNode(true);
            this.target_Elm_ToInsertBefore.insertBefore(cloned, this.target_Elm_ToInsertBefore.childNodes[5]);
            cloned.classList.add('t4u-custom-' + this.position);
        };
        return Clone;
    }());
    var V1 = (function (_super) {
        __extends(V1, _super);
        function V1(target_elm, position) {
            if (position === void 0) { position = 'left'; }
            return _super.call(this, target_elm, position) || this;
        }
        V1.prototype.append = function (price_Elm) {
            _super.prototype.append.call(this, price_Elm);
        };
        return V1;
    }(Clone));
    var V2 = (function (_super) {
        __extends(V2, _super);
        function V2(target_elm, position) {
            if (position === void 0) { position = 'right'; }
            return _super.call(this, target_elm, position) || this;
        }
        V2.prototype.append = function (price_Elm) {
            _super.prototype.append.call(this, price_Elm);
        };
        return V2;
    }(Clone));
    var v = new V2(document.querySelector('.productDetail-controls-wrapper-inner-right'));
    v.append(document.querySelectorAll('.productDetail-productTitlePriceContainer')[0].querySelector('.productPrice'));
}
exports.customCodeInit = customCodeInit;
},{"./country":2,"./language":5,"./log":6}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function customStyle() {
    var style = "\n\t\t<style id=\"t4u-custom-style\">\n\t\t\t.t4u-custom-left {\n\t\t\t\ttext-align: left!important;\n\t\t\t}\n\t\t\t.t4u-custom-right {\n\t\t\t\ttext-align: right!important;\n\t\t\t\tmargin-right: 5px!important;\n\t\t\t}\n\t\t</style>";
    document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
}
exports.customStyle = customStyle;
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Language = (function () {
    function Language() {
        var url = window.location.href;
        this.regex = /(\w\w_)/g;
        this.url = url;
    }
    Language.prototype.which = function () {
        var language = this.url.match(this.regex);
        return language[0];
    };
    return Language;
}());
exports.Language = Language;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogInput = (function () {
    function LogInput(developEnvi) {
        this.developEnvi = developEnvi;
    }
    LogInput.prototype.log = function (input) {
        if (this.developEnvi) {
            console.log("%ccustom-log = ", 'color: green', input);
        }
        else {
            return;
        }
    };
    return LogInput;
}());
exports.LogInput = LogInput;
},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appendJsOrigin_1 = require("./appendJsOrigin");
var customCodeInit_1 = require("./customCodeInit");
var customStyle_1 = require("./customStyle");
var developEnvi = false;
var testId = "T418";
var urlOrigin = 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js';
if (developEnvi) {
    console.log('%c<-------------------DEV ENVI' + '-------------------' + testId + '------------------->', "color: green; font-size:16px;");
    appendJsOrigin_1.appendJsOrigin(testId, urlOrigin);
    customStyle_1.customStyle();
    customCodeInit_1.customCodeInit(developEnvi);
}
else {
    customStyle_1.customStyle();
    customCodeInit_1.customCodeInit(developEnvi);
}
},{"./appendJsOrigin":1,"./customCodeInit":3,"./customStyle":4}]},{},[7])

//# sourceMappingURL=bundle.js.map
