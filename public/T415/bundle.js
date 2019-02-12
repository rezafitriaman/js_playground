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
    var phone_elm = document.querySelector("#notice-phone");
    var target = phone_elm.querySelector('.formInputLabel');
    c.log(co);
    c.log(l);
    var x = {
        '_nl': "+31",
        '_be': "+32",
        '_us': "+1",
        '_de': "+49",
        '_fr': "+33",
        '_ca': "+1",
        '_au': "+61",
        '_gb': "+44",
        '_dk': "+45",
        '_es': "+34"
    };
    var languageObj = {
        'en_': "Please make sure you include country code " + x[co] + ".",
        'de_': "Bitte l\u00E4ndervorwahl " + x[co] + " mit angeben.",
        'fr_': "Merci d\u2019ajouter votre indicatif pays " + x[co] + ".",
        'es_': "Por favor incluya el prefijo del pa\u00EDs " + x[co],
        'nl_': "Voeg ook landcode " + x[co] + " toe.",
    };
    var htmlString = "\n     <span class=\"formInputLabel t4u-custom\">" + languageObj[l] + "</span>";
    c.log(languageObj[l]);
    target.insertAdjacentHTML('afterend', htmlString);
}
exports.customCodeInit = customCodeInit;
},{"./country":2,"./language":5,"./log":6}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function customStyle() {
    var style = "\n\t\t<style id=\"t4u-custom-style\">\n\t\t\t.t4u-custom {\n\t\t\t\tcolor: #aaa!important;\n\t\t\t}\n\t\t</style>";
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
var testId = "T415";
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
},{"./appendJsOrigin":1,"./customCodeInit":3,"./customStyle":4}]},{},[7])

//# sourceMappingURL=bundle.js.map
