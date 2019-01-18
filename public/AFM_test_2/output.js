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
document.getElementsByTagName('html')[0].classList.add("t4u-AFMtest-2");
var MaandAflossen = /** @class */ (function () {
    function MaandAflossen(theVariantion) {
        // code...
        var variation = {
            v1: {
                aflosbedrag: '75',
                left: '1.72414%',
                persoonlijke_lening: {
                    maandbedrag: '75',
                    looptijd: '83 <small>maanden</small>',
                    rente: '6.5%',
                    totalePrijst: '6.173,66'
                },
                doodlopend_krediet: {
                    maandbedrag: '75',
                    looptijd: '81 <small>maanden</small>',
                    rente: '6%',
                    totalePrijst: '6.060,12'
                }
            },
            v2: {
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
                }
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
                }
            }
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
        //change in mogelijk leenvormen Box
        this.insertValue = function (targetElm, maandbedrag, looptijd, rente, totalePrijst) {
            for (var i = 0; i < targetElm[0].getElementsByTagName('li').length; i++) {
                var target = targetElm[0].getElementsByTagName('li')[i];
                var targetValue = target.getElementsByClassName('offertestraat__results__list__value')[0];
                if (target.classList.contains('offertestraat__results__list__maandtermijn')) {
                    //change maandtermijn value
                    targetValue.innerHTML = maandbedrag;
                }
                else if (target.classList.contains('offertestraat__results__list__looptijd')) {
                    //change looptijd value
                    targetValue.innerHTML = looptijd;
                }
                else if (target.classList.contains('offertestraat__results__list__rente')) {
                    //change rente value
                    targetValue.innerHTML = rente;
                }
                else if (target.classList.contains('offertestraat__results__list__totale-prijs')) {
                    //change totale-prijs value 
                    targetValue.innerHTML = totalePrijst;
                }
            }
        };
    }
    MaandAflossen.prototype.insert = function () {
        //desktop and tablets
        var fieldAflosbedrag_elm = document.getElementById('field-aflosbedrag');
        var plContainer_elm = document.getElementsByClassName('offertestraat__results__pl');
        var dkContainer_elm = document.getElementsByClassName('offertestraat__results__dk');
        var blueSliderAflossen_elm = document.querySelectorAll('[name="fieldset-monthly"]')[0].getElementsByClassName('noUi-origin');
        //mobile
        var plContainerTotalPriceMobile_elm = document.getElementsByClassName('offertestraat__results__footer-mobile__pl');
        var dkContainerTotalPriceMobile_elm = document.getElementsByClassName('offertestraat__results__footer-mobile__dk');
        //loop through PL en DK and change the content
        //desktop and tablets
        this.insertValue(plContainer_elm, this.persoonlijke_lening_maandbedrag, this.persoonlijke_lening_looptijd, this.persoonlijke_lening_rente, this.persoonlijke_lening_totalePrijst);
        this.insertValue(dkContainer_elm, this.doodlopend_krediet_maandbedrag, this.doodlopend_krediet_looptijd, this.doodlopend_krediet_rente, this.doodlopend_krediet_totalePrijst);
        // mobile
        plContainerTotalPriceMobile_elm[0].getElementsByClassName('offertestraat__results__mobile-totale-prijs')[0].innerHTML = this.persoonlijke_lening_totalePrijst;
        dkContainerTotalPriceMobile_elm[0].getElementsByClassName('offertestraat__results__mobile-totale-prijs')[0].innerHTML = this.doodlopend_krediet_totalePrijst;
        //change input value
        fieldAflosbedrag_elm.value = this.aflosBedrag;
        //change left value slider
        blueSliderAflossen_elm[0].style.left = this.left;
    };
    return MaandAflossen;
}());
var V1 = /** @class */ (function (_super) {
    __extends(V1, _super);
    function V1(variation) {
        if (variation === void 0) { variation = 'v1'; }
        // code...
        return _super.call(this, variation) || this;
    }
    V1.prototype.insert = function () {
        _super.prototype.insert.call(this);
    };
    return V1;
}(MaandAflossen));
var V2 = /** @class */ (function (_super) {
    __extends(V2, _super);
    function V2(variation) {
        if (variation === void 0) { variation = 'v2'; }
        // code...
        return _super.call(this, variation) || this;
    }
    V2.prototype.insert = function () {
        _super.prototype.insert.call(this);
    };
    return V2;
}(MaandAflossen));
var V3 = /** @class */ (function (_super) {
    __extends(V3, _super);
    function V3(variation) {
        if (variation === void 0) { variation = 'v3'; }
        // code...
        return _super.call(this, variation) || this;
    }
    V3.prototype.insert = function () {
        var _this = this;
        var blueSliderAflossen_elm = document.querySelectorAll('[name="fieldset-monthly"]')[0].getElementsByClassName('noUi-origin');
        var blueSliderLenen_elm = document.querySelectorAll('[name="fieldset-amount"]')[0].getElementsByClassName('range-slider-wrapper');
        //take 'insert function' from class MaandAflossen to this extends class
        var insert = function () {
            _super.prototype.insert.call(_this);
        };
        //hide the blue slider
        var displayNoneSlider = function () {
            blueSliderAflossen_elm[0].getElementsByClassName('noUi-handle')[0].style.display = 'none';
        };
        //on mouse up init insert() and displayNoneSlider()
        blueSliderLenen_elm[0].addEventListener('mouseup', function () {
            setTimeout(function () { insert(); displayNoneSlider(); }, 1200);
        });
        //init funcion for the first time()
        displayNoneSlider();
        // insert function from the class MaandAflossen with a super 
        _super.prototype.insert.call(this);
    };
    return V3;
}(MaandAflossen));
//creat instant object
var v = new V1();
//init code when the box: mogelijke leenvormen has showed
var inter = setInterval(function () {
    if (document.getElementsByClassName('offertestraat__results__panel__wrapper').length > 0) {
        v.insert();
        clearInterval(inter);
    }
}, 300);
