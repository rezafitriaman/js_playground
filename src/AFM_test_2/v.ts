document.getElementsByTagName('html')[0].classList.add("t4u-AFMtest-2");
class MaandAflossen {
  aflosBedrag: string;
  left: string;

  persoonlijke_lening_maandbedrag: string;
  persoonlijke_lening_looptijd: string;
  persoonlijke_lening_rente: string;
  persoonlijke_lening_totalePrijst: string;

  doodlopend_krediet_maandbedrag: string;
  doodlopend_krediet_looptijd: string;
  doodlopend_krediet_rente: string;
  doodlopend_krediet_totalePrijst: string;
  insertValue: Function;

  constructor(theVariantion: string) {
    // code...
    let variation : any = {
      v1 : {
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
      v2 : {
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
      v3 : {
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
    this.insertValue = (targetElm: any, maandbedrag: any, looptijd: any, rente: any, totalePrijst: any):void => {
      for (var i = 0; i < targetElm[0].getElementsByTagName('li').length; i++) {
        let target:HTMLElement = targetElm[0].getElementsByTagName('li')[i];
        let targetValue:Element = target.getElementsByClassName('offertestraat__results__list__value')[0];
        if(target.classList.contains('offertestraat__results__list__maandtermijn')) {
          //change maandtermijn value
          targetValue.innerHTML = maandbedrag;
        }else if(target.classList.contains('offertestraat__results__list__looptijd')) {
          //change looptijd value
          targetValue.innerHTML = looptijd;
        }else if(target.classList.contains('offertestraat__results__list__rente')) {
          //change rente value
          targetValue.innerHTML = rente;
        }else if(target.classList.contains('offertestraat__results__list__totale-prijs')) {
          //change totale-prijs value 
          targetValue.innerHTML = totalePrijst;
        }
      }
    }
  }
  insert() {
    //desktop and tablets
    let fieldAflosbedrag_elm = <HTMLInputElement>document.getElementById('field-aflosbedrag');
    let plContainer_elm: HTMLCollectionOf<Element> = document.getElementsByClassName('offertestraat__results__pl');
    let dkContainer_elm: HTMLCollectionOf<Element> = document.getElementsByClassName('offertestraat__results__dk');
    let blueSliderAflossen_elm: HTMLCollectionOf<Element> = document.querySelectorAll('[name="fieldset-monthly"]')[0].getElementsByClassName('noUi-origin');
    //mobile
    let plContainerTotalPriceMobile_elm: HTMLCollectionOf<Element> = document.getElementsByClassName('offertestraat__results__footer-mobile__pl');
    let dkContainerTotalPriceMobile_elm: HTMLCollectionOf<Element> = document.getElementsByClassName('offertestraat__results__footer-mobile__dk');
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
    (<HTMLElement>blueSliderAflossen_elm[0]).style.left = this.left;
  }
}

class V1 extends MaandAflossen {  
  constructor(variation: string = 'v1') {
    // code...
    super(variation);
  }
  insert() {
    super.insert();
  }
}

class V2 extends MaandAflossen {
  constructor(variation: string = 'v2') {
    // code...
    super(variation);
  }
  insert() {
    super.insert();
  }
}

class V3 extends MaandAflossen {
  constructor(variation: string = 'v3') {
    // code...
    super(variation);
  }
  insert() {
    let blueSliderAflossen_elm: HTMLCollectionOf<Element> = document.querySelectorAll('[name="fieldset-monthly"]')[0].getElementsByClassName('noUi-origin');
    let blueSliderLenen_elm: HTMLCollectionOf<Element> = document.querySelectorAll('[name="fieldset-amount"]')[0].getElementsByClassName('range-slider-wrapper');
    //take 'insert function' from class MaandAflossen to this extends class
    let insert = ():void =>{
      super.insert();
    }
    //hide the blue slider
    let displayNoneSlider = ():void => {
      (<HTMLElement>blueSliderAflossen_elm[0].getElementsByClassName('noUi-handle')[0]).style.display = 'none';
    } 
    //on mouse up init insert() and displayNoneSlider()
    (<HTMLElement>blueSliderLenen_elm[0]).addEventListener('mouseup', function() {
      setTimeout(function(){ insert(); displayNoneSlider();}, 1200);
    });
    //init funcion for the first time()
    displayNoneSlider();
    // insert function from the class MaandAflossen with a super 
    super.insert();
  }
}
//creat instant object
let v = new V1();
//init code when the box: mogelijke leenvormen has showed
let inter = setInterval(function(){
  if(document.getElementsByClassName('offertestraat__results__panel__wrapper').length > 0) {
    v.insert();
    clearInterval(inter)
  } 
}, 300);