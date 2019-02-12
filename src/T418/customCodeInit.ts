/*
==============================
IMPORT MODULE | STATIC
its needed for eatch project
==============================
*/

import {LogInput} from "./log"
import {Language} from "./language"
import {Country} from "./country"

export function customCodeInit(developEnvi: boolean):void {
  /*
  ==============================
  INIT CUSTOM LOG, language, country | STATIC
  so we can make a switch(on/of) if we on development envi or nah
  ==============================
  */

  //detect envi
  let c = new LogInput(developEnvi);

  //detect language
  let lang = new Language();
  let l = lang.which();

  //detect country
  let country = new Country();
  let co = country.which(); 

  /*
  ==============================
  BEGIN CUSTOM CODE | DYNAMIC
  ==============================
  */

  class Clone {
    variation: number;
    price_Elm: HTMLElement;
    target_Elm_ToInsertBefore: Element;
    position: string;
    constructor(target_elm: Element, position: string) {
      this.target_Elm_ToInsertBefore = target_elm;
      this.position = position;
    }
    append(price_Elm: HTMLElement) {
      let cloned = price_Elm.cloneNode(true);
      this.target_Elm_ToInsertBefore.insertBefore(cloned, this.target_Elm_ToInsertBefore.childNodes[5]);
      (<HTMLElement>cloned).classList.add('t4u-custom-' + this.position);
    }
  }

  class V1 extends Clone {
    
    constructor(target_elm: Element, position: string = 'left') {
      // code...
      super(target_elm, position);
    }
    append(price_Elm: HTMLElement) {
      super.append(price_Elm);
    }
  }

  class V2 extends Clone {
    
    constructor(target_elm: Element, position: string = 'right') {
      // code...
      super(target_elm, position);
    }
    append(price_Elm: HTMLElement) {
      super.append(price_Elm);
    }
  }

  let v = new V2((<Element>document.querySelector('.productDetail-controls-wrapper-inner-right')));

  v.append(document.querySelectorAll('.productDetail-productTitlePriceContainer')[0].querySelector('.productPrice'));

  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}