(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appendJsOrigin() {
    var rawUrl = 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.42.0.24204';
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = rawUrl;
    script.id = 't4u-custom-script';
    if (document.getElementById('t4u-custom-script')) {
        document.getElementById('t4u-custom-script').remove();
    }
    head.appendChild(script);
}
exports.appendJsOrigin = appendJsOrigin;
},{}],2:[function(require,module,exports){
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
var appendJsOrigin_1 = require("./appendJsOrigin");
var developEnvi = true;
var testId = "t4u-AFMtest-2";
var customCodeInit = function () {
    var MaandAflossen = (function () {
        function MaandAflossen(theVariantion) {
            var variation = {
                v1: {
                    aflosbedrag: '150',
                    left: '6.89655%',
                    persoonlijke_lening: {
                        maandbedrag: '150',
                        looptijd: '37 <small>maanden</small>',
                        rente: '6.5%',
                        totalePrijst: '5.512,05'
                    },
                    doodlopend_krediet: {
                        maandbedrag: '150',
                        looptijd: '37 <small>maanden</small>',
                        rente: '6%',
                        totalePrijst: '5.469,18'
                    },
                    procentTage: '3'
                },
                v2: {
                    aflosbedrag: '200',
                    left: '6.89655%',
                    persoonlijke_lening: {
                        maandbedrag: '200',
                        looptijd: '27 <small>maanden</small>',
                        rente: '6.5%',
                        totalePrijst: '5.374,97'
                    },
                    doodlopend_krediet: {
                        maandbedrag: '200',
                        looptijd: '27 <small>maanden</small>',
                        rente: '6%',
                        totalePrijst: '5.344,55'
                    },
                    procentTage: '4'
                },
                v3: {
                    aflosbedrag: '',
                    left: '0%',
                    persoonlijke_lening: {
                        maandbedrag: '-',
                        looptijd: '- <small>maanden</small>',
                        rente: '-',
                        totalePrijst: '-'
                    },
                    doodlopend_krediet: {
                        maandbedrag: '-',
                        looptijd: '- <small>maanden</small>',
                        rente: '-',
                        totalePrijst: '-'
                    },
                    procentTage: '0'
                },
                v4: {
                    aflosbedrag: '100',
                    left: '3.44828%',
                    persoonlijke_lening: {
                        maandbedrag: '100',
                        looptijd: '59 <small>maanden</small>',
                        rente: '6.5%',
                        totalePrijst: '5.817,23'
                    },
                    doodlopend_krediet: {
                        maandbedrag: '100',
                        looptijd: '58 <small>maanden</small>',
                        rente: '6%',
                        totalePrijst: '5.743,98'
                    },
                    procentTage: '2'
                },
            };
            this.aflosBedrag = variation[theVariantion].aflosbedrag;
            this.left = variation[theVariantion].left;
            this.persoonlijke_lening_maandbedrag = variation[theVariantion].persoonlijke_lening.maandbedrag;
            this.persoonlijke_lening_looptijd = variation[theVariantion].persoonlijke_lening.looptijd;
            this.persoonlijke_lening_rente = variation[theVariantion].persoonlijke_lening.rente;
            this.persoonlijke_lening_totalePrijst = variation[theVariantion].persoonlijke_lening.totalePrijst;
            this.doodlopend_krediet_maandbedrag = variation[theVariantion].doodlopend_krediet.maandbedrag;
            this.doodlopend_krediet_looptijd = variation[theVariantion].doodlopend_krediet.looptijd;
            this.doodlopend_krediet_rente = variation[theVariantion].doodlopend_krediet.rente;
            this.doodlopend_krediet_totalePrijst = variation[theVariantion].doodlopend_krediet.totalePrijst;
            this.procentTage = variation[theVariantion].procentTage;
            this.insertValue = function (targetElm, maandbedrag, looptijd, rente, totalePrijst) {
                for (var i = 0; i < targetElm[0].getElementsByTagName('li').length; i++) {
                    var target = targetElm[0].getElementsByTagName('li')[i];
                    var targetValue = target.getElementsByClassName('offertestraat__results__list__value')[0];
                    if (target.classList.contains('offertestraat__results__list__maandtermijn')) {
                        targetValue.innerHTML = maandbedrag;
                    }
                    else if (target.classList.contains('offertestraat__results__list__looptijd')) {
                        targetValue.innerHTML = looptijd;
                    }
                    else if (target.classList.contains('offertestraat__results__list__rente')) {
                        targetValue.innerHTML = rente;
                    }
                    else if (target.classList.contains('offertestraat__results__list__totale-prijs')) {
                        targetValue.innerHTML = totalePrijst;
                    }
                }
            };
        }
        MaandAflossen.prototype.insert = function () {
            var fieldAflosbedrag_elm = document.getElementById('field-aflosbedrag');
            var plContainer_elm = document.getElementsByClassName('offertestraat__results__pl');
            var dkContainer_elm = document.getElementsByClassName('offertestraat__results__dk');
            var blueSliderAflossen_elm = document.querySelectorAll('[name="fieldset-monthly"]')[0].getElementsByClassName('noUi-origin');
            var defaultPaymentPercentage_elm = document.getElementById('DefaultPaymentPercentage');
            var plContainerTotalPriceMobile_elm = document.getElementsByClassName('offertestraat__results__footer-mobile__pl');
            var dkContainerTotalPriceMobile_elm = document.getElementsByClassName('offertestraat__results__footer-mobile__dk');
            this.insertValue(plContainer_elm, this.persoonlijke_lening_maandbedrag, this.persoonlijke_lening_looptijd, this.persoonlijke_lening_rente, this.persoonlijke_lening_totalePrijst);
            this.insertValue(dkContainer_elm, this.doodlopend_krediet_maandbedrag, this.doodlopend_krediet_looptijd, this.doodlopend_krediet_rente, this.doodlopend_krediet_totalePrijst);
            plContainerTotalPriceMobile_elm[0].getElementsByClassName('offertestraat__results__mobile-totale-prijs')[0].innerHTML = this.persoonlijke_lening_totalePrijst;
            dkContainerTotalPriceMobile_elm[0].getElementsByClassName('offertestraat__results__mobile-totale-prijs')[0].innerHTML = this.doodlopend_krediet_totalePrijst;
            fieldAflosbedrag_elm.value = this.aflosBedrag;
            blueSliderAflossen_elm[0].style.left = this.left;
            defaultPaymentPercentage_elm.value = this.procentTage;
        };
        MaandAflossen.prototype.addText = function () {
            var text = "<i>Gebruik de balk om een aflosbedrag te kiezen.</i>";
            var target = document.getElementById('monthly');
            target.insertAdjacentHTML('afterend', text);
        };
        return MaandAflossen;
    }());
    var V1 = (function (_super) {
        __extends(V1, _super);
        function V1(variation) {
            if (variation === void 0) { variation = 'v1'; }
            return _super.call(this, variation) || this;
        }
        V1.prototype.insert = function () {
            _super.prototype.insert.call(this);
            _super.prototype.addText.call(this);
        };
        return V1;
    }(MaandAflossen));
    var V2 = (function (_super) {
        __extends(V2, _super);
        function V2(variation) {
            if (variation === void 0) { variation = 'v2'; }
            return _super.call(this, variation) || this;
        }
        V2.prototype.insert = function () {
            _super.prototype.insert.call(this);
            _super.prototype.addText.call(this);
        };
        return V2;
    }(MaandAflossen));
    var V3 = (function (_super) {
        __extends(V3, _super);
        function V3(variation) {
            if (variation === void 0) { variation = 'v3'; }
            return _super.call(this, variation) || this;
        }
        V3.prototype.insert = function () {
            var _this = this;
            var x = window.matchMedia("(max-width: 500px)");
            var event = 'ontouchend' in window ? 'touchend' : 'mouseup';
            var fieldsetMonthly_elm = document.querySelectorAll('[name="fieldset-monthly"]')[0];
            var fieldsetAmount_elm = document.querySelectorAll('[name="fieldset-amount"]')[0];
            var blueSliderAflossenBackground_elm = fieldsetMonthly_elm.getElementsByClassName('noUi-target');
            var blueSliderAflossen_elm = fieldsetMonthly_elm.getElementsByClassName('noUi-origin');
            var blueSliderLenen_elm = fieldsetAmount_elm.getElementsByClassName('range-slider-wrapper');
            var noUiBackground_elm = fieldsetMonthly_elm.getElementsByClassName('noUi-background');
            var fieldsetMonthlyInput_elm = fieldsetMonthly_elm.getElementsByTagName('input');
            var sliderParentAflosBedrag_elm = document.getElementsByClassName('js-input-slider')[1];
            var inlutAflosBedrag_elm = document.getElementsByClassName('range-slider-wrapper')[1];
            var atMedia = function (x) {
                if (x.matches) {
                    hideBlueBackGround();
                    showBlueBackGround();
                }
            };
            var insert = function () {
                _super.prototype.insert.call(_this);
            };
            var displayNoneSlider = function () {
                blueSliderAflossen_elm[0].getElementsByClassName('noUi-handle')[0].style.display = 'none';
            };
            var hideBlueBackGround = function () {
                var style = "\n        <style class=\"t4u-custom-style\">\n           fieldset[name=\"fieldset-monthly\"] .noUi-target:before {\n             background-color: #ced3db!important;\n           }\n        </style>";
                if (document.getElementsByClassName('t4u-custom-style').length == 0) {
                    document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
                }
            };
            var showBlueBackGround = function () {
                function remove() {
                    var customStyle = document.getElementsByClassName('t4u-custom-style');
                    for (var i = 0; i < customStyle.length; i++) {
                        customStyle[i].remove();
                    }
                }
                sliderParentAflosBedrag_elm.addEventListener(event, function () {
                    remove();
                });
                inlutAflosBedrag_elm.addEventListener(event, function () {
                    remove();
                });
            };
            document.getElementById('field-aflosbedrag').addEventListener(event, function () {
                var blueButton = document.getElementsByClassName('noUi-handle');
                if (blueButton[1].style.display == 'none') {
                    blueButton[1].style.display;
                    setTimeout(function () {
                        hideBlueBackGround();
                    }, 5);
                }
            });
            blueSliderLenen_elm[0].addEventListener(event, function () {
                fieldsetMonthlyInput_elm[0].style.color = 'transparent';
                setTimeout(function () {
                    insert();
                    displayNoneSlider();
                    hideBlueBackGround();
                }, 800);
            });
            fieldsetMonthlyInput_elm[0].addEventListener(event, function () {
                this.style.color = 'black';
            });
            blueSliderAflossenBackground_elm[0].addEventListener(event, function () {
                fieldsetMonthlyInput_elm[0].style.color = 'black';
            });
            displayNoneSlider();
            atMedia(x);
            x.addListener(atMedia);
            _super.prototype.insert.call(this);
            _super.prototype.addText.call(this);
        };
        return V3;
    }(MaandAflossen));
    var V4 = (function (_super) {
        __extends(V4, _super);
        function V4(variation) {
            if (variation === void 0) { variation = 'v4'; }
            return _super.call(this, variation) || this;
        }
        V4.prototype.insert = function () {
            _super.prototype.insert.call(this);
            _super.prototype.addText.call(this);
        };
        return V4;
    }(MaandAflossen));
    var v = new V3();
    var inter = setInterval(function () {
        if (document.getElementsByClassName('offertestraat__results offertestraat__results--leenbedrag')[0].style.display != 'none') {
            v.insert();
            clearInterval(inter);
        }
    }, 300);
};
if (developEnvi) {
    console.log('%c!---------DEV ENVI + ' + testId + '---------!', "color: green; font-size:18px;");
    appendJsOrigin_1.appendJsOrigin(testId);
    customCodeInit();
}
else {
    customCodeInit();
}
},{"./appendJsOrigin":1}]},{},[2])

//# sourceMappingURL=bundle.js.map
