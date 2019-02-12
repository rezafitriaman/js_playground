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
function customCodeInit(developEnvi) {
    var c = new log_1.LogInput(developEnvi);
    var filterContainer_elm = document.getElementsByClassName('productLister-viewOptions-placeholder');
    var last_known_scroll_position = 0;
    var hide = false;
    var topNavigation_Elm = document.getElementsByClassName('topNavigation');
    var myInterval = setInterval(function () {
        if (topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions').length > 0) {
            topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions')[0].style.display = 'none';
            clearInterval(myInterval);
        }
    }, 100);
    window.addEventListener('scroll', function (e) {
        var offsetTop_FilterContainer = filterContainer_elm[0].offsetTop - 50;
        last_known_scroll_position = window.scrollY;
        if (last_known_scroll_position - 50 > offsetTop_FilterContainer) {
            if (topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions').length > 0) {
                topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions')[0].style.display = 'none';
                hide = true;
            }
        }
        if (last_known_scroll_position < offsetTop_FilterContainer) {
            if (filterContainer_elm[0].getElementsByClassName('productLister-viewOptions').length > 0) {
                filterContainer_elm[0].getElementsByClassName('productLister-viewOptions')[0].style.display = 'block';
                hide = false;
            }
        }
    });
}
exports.customCodeInit = customCodeInit;
},{"./log":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogInput = (function () {
    function LogInput(developEnvi) {
        this.developEnvi = developEnvi;
    }
    LogInput.prototype.log = function (input) {
        if (this.developEnvi) {
            console.log(input);
        }
        else {
            return;
        }
    };
    return LogInput;
}());
exports.LogInput = LogInput;
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appendJsOrigin_1 = require("./appendJsOrigin");
var customCodeInit_1 = require("./customCodeInit");
var developEnvi = false;
var testId = "nonsticky";
var urlOrigin = 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js';
if (developEnvi) {
    console.log('%c<-------------------DEV ENVI' + '-------------------' + testId + '------------------->', "color: green; font-size:16px;");
    appendJsOrigin_1.appendJsOrigin(testId, urlOrigin);
    customCodeInit_1.customCodeInit(developEnvi);
}
else {
    customCodeInit_1.customCodeInit(developEnvi);
}
},{"./appendJsOrigin":1,"./customCodeInit":2}]},{},[4])

//# sourceMappingURL=bundle.js.map
