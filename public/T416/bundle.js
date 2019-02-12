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
var log_1 = require("./log");
var language_1 = require("./language");
function customCodeInit(developEnvi) {
    var c = new log_1.LogInput(developEnvi);
    var targetContainer_elm = document.getElementsByClassName('checkoutAccount-section-inner');
    var targetTile_elm = targetContainer_elm[0].getElementsByClassName('loginForm-col--first')[0];
    var lang = new language_1.Language();
    var l = lang.which();
    c.log(l);
    var textObject = {
        'nl_': 'Doorgaan als gast',
        'en_': 'Guest checkout',
        'fr_': 'Continuer en tant qu\'invité',
        'de_': 'Weiter als Gast'
    };
    c.log(textObject);
    targetTile_elm.classList.add("t4u-custom");
    targetTile_elm.getElementsByClassName('section-title')[0].innerHTML = textObject[l];
}
exports.customCodeInit = customCodeInit;
},{"./language":4,"./log":5}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function customStyle() {
    var style = "\n\t\t<style id=\"t4u-custom-style\">\n\t\t\t.t4u-custom {\n\t\t\t\t-webkit-order: 0!important;\n\t\t\t    -ms-flex-order: 0!important;\n\t\t\t    order: 0!important;\n\t\t\t}\n\t\t</style>";
    document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
}
exports.customStyle = customStyle;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appendJsOrigin_1 = require("./appendJsOrigin");
var customCodeInit_1 = require("./customCodeInit");
var customStyle_1 = require("./customStyle");
var developEnvi = true;
var testId = "T416";
var urlOrigin = 'https://www.g-star.com/_ui/g-star/js/app/base.1f42b9df26df50a299c31779358e4496.js';
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
},{"./appendJsOrigin":1,"./customCodeInit":2,"./customStyle":3}]},{},[6])

//# sourceMappingURL=bundle.js.map
