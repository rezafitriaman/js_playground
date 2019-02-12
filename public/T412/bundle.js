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
var prodId_1 = require("./prodId");
function customCodeInit() {
    var targetContainersElm = document.getElementsByClassName('productListerTeaser');
    var productId = prodId_1.prodId();
    var reg = /(d?\w+-(\w+)-(\w+))/g;
    for (var i = 0; i < targetContainersElm.length; i++) {
        for (var j = 0; j < productId.length; j++) {
            if (targetContainersElm[i].getAttribute("href").match(reg)[0] == productId[j]) {
                var target = targetContainersElm[i].getElementsByClassName('productListerTeaser-imageContainer')[0].getElementsByClassName('productListerTeaser-image--secondary')[0];
                var newId = target.getAttribute('data-srcset').replace(/(F02)/g, 'W04');
                targetContainersElm[i].getElementsByClassName('productListerTeaser-imageContainer')[0].getElementsByClassName('productListerTeaser-image--secondary')[0].setAttribute('data-srcset', newId);
            }
        }
    }
}
exports.customCodeInit = customCodeInit;
},{"./prodId":4}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appendJsOrigin_1 = require("./appendJsOrigin");
var customCodeInit_1 = require("./customCodeInit");
var developEnvi = false;
var testId = "T412";
var urlOrigin = 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js';
if (developEnvi) {
    console.log('%c<-------------------DEV ENVI' + '-------------------' + testId + '------------------->', "color: green; font-size:16px;");
    appendJsOrigin_1.appendJsOrigin(testId, urlOrigin);
    customCodeInit_1.customCodeInit();
}
else {
    customCodeInit_1.customCodeInit();
}
},{"./appendJsOrigin":1,"./customCodeInit":2}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function prodId() {
    var prodId = ["d11933-a878-9819",
        "d11939-8375-906",
        "d11939-8375-6484",
        "d11939-8375-9819",
        "d11940-8375-2864",
        "d11943-8375-4749",
        "d11945-B146-6484",
        "d11952-a920-6486",
        "d12041-a896-7181",
        "d12050-a896-7181",
        "d12054-a910-6342",
        "d12055-a909-6342",
        "d12675-9172-367",
        "d13430-336-2743",
        "d13430-336-a423",
        "d04434-2757-1855",
        "d04434-2757-4749",
        "d10911-2340-6486",
        "d10977-a664-9895",
        "d10990-a888-a131",
        "d10992-9524-6484",
        "d11006-a657-6484",
        "d11010-a896-7181",
        "d11016-5126-7159",
        "d11020-5335-6484",
        "d11036-9469-4213",
        "d11036-9469-7159",
        "d11037-a696-9945",
        "d11040-a872-7293",
        "d11040-a872-a102",
        "d11057-8970-082",
        "d11146-6553-6526",
        "d11154-a888-a131",
        "d11794-a302-001",
        "d11798-8555-992",
        "d11800-a657-6484",
        "d11801-a517-6484",
        "d11802-a569-1545",
        "d11802-a569-4213",
        "d11805-8970-001",
        "d11808-a875-8708",
        "d11822-a911-6342",
        "d11823-a612-6067",
        "d11824-a971-2743",
        "d11824-a971-7228",
        "d11824-a971-a423",
        "d11825-a971-a423",
        "d11827-a612-905",
        "d11828-5879-6067",
        "d11829-5879-6484",
        "d11831-a971-6484",
        "d11831-a971-9819",
        "d11832-a919-7181",
        "d11834-a971-6484",
        "d11838-a657-4213",
        "d11838-a657-6484",
        "d11841-9469-6484",
        "d11847-4107-6067",
        "d11853-a893-906",
        "d11857-9395-6484",
        "d11859-336-110",
        "d11859-336-976",
        "d11861-336-7209",
        "d11865-336-110",
        "d11865-336-6484",
        "d11889-8161-2211",
        "d11891-8161-2211",
        "d11896-a922-6067",
        "d11902-a872-7293",
        "d11902-a872-a102",
        "d11932-9406-7220",
        "d11933-a878-6484"];
    return prodId;
}
exports.prodId = prodId;
},{}]},{},[3])

//# sourceMappingURL=bundle.js.map
