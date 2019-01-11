document.getElementsByTagName('html')[0].classList.add("t4u-T409");
let imageBlockElm: HTMLCollection = document.getElementsByClassName('productTile-images');
let navElm: HTMLCollection = document.getElementsByClassName('pagination')[0].getElementsByTagName('li');
let searchPage:string;
let signing = ():void => {

	for (var i = 0; i < imageBlockElm.length; i++) {
		let containerTitleEl: HTMLCollection = imageBlockElm[i].getElementsByClassName('productSigning-container--tile');
		let productSigningEl: HTMLCollection = imageBlockElm[i].getElementsByClassName('productSigning--v2');

		if(containerTitleEl[0] != undefined) {
			if(containerTitleEl[0].children.length > 1) {
				//if more then 2 title
				(<HTMLElement>productSigningEl[0]).style.bottom = '40px';
				(<HTMLElement>productSigningEl[0]).style.top = 'auto';
			}else {
				//if more then 1 title
				(<HTMLElement>productSigningEl[0]).style.bottom = '20px';
				(<HTMLElement>productSigningEl[0]).style.top = 'auto';
			}
		}else {
			//if more then 0 title
			(<HTMLElement>productSigningEl[0]).style.bottom = '0px';
			(<HTMLElement>productSigningEl[0]).style.top = 'auto';
		}
	}
	
}
let initSigning = ():void => {
	setTimeout(function(){ signing(); }, 2000);
}
let addClick = ():void => {
	for (var i = 0; i < navElm.length; i++) {
		navElm[i].addEventListener('click', initSigning);
		navElm[i].addEventListener('touchstart', initSigning);
	}
}
setInterval(function(){ 
	if(searchPage != window.location.search) {
		addClick();
	}
	searchPage = window.location.search;
}, 500);
signing();