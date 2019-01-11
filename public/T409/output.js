document.getElementsByTagName('html')[0].classList.add("t4u-T409");
var imageBlockElm = document.getElementsByClassName('productTile-images');
var navElm = document.getElementsByClassName('pagination')[0].getElementsByTagName('li');
var searchPage;
var signing = function () {
    for (var i = 0; i < imageBlockElm.length; i++) {
        var containerTitleEl = imageBlockElm[i].getElementsByClassName('productSigning-container--tile');
        var productSigningEl = imageBlockElm[i].getElementsByClassName('productSigning--v2');
        if (containerTitleEl[0] != undefined) {
            if (containerTitleEl[0].children.length > 1) {
                //if more then 2 title
                productSigningEl[0].style.bottom = '40px';
                productSigningEl[0].style.top = 'auto';
            }
            else {
                //if more then 1 title
                productSigningEl[0].style.bottom = '20px';
                productSigningEl[0].style.top = 'auto';
            }
        }
        else {
            //if more then 0 title
            productSigningEl[0].style.bottom = '0px';
            productSigningEl[0].style.top = 'auto';
        }
    }
};
var initSigning = function () {
    setTimeout(function () { signing(); }, 2000);
};
var addClick = function () {
    for (var i = 0; i < navElm.length; i++) {
        navElm[i].addEventListener('click', initSigning);
        navElm[i].addEventListener('touchstart', initSigning);
    }
};
setInterval(function () {
    if (searchPage != window.location.search) {
        addClick();
    }
    searchPage = window.location.search;
}, 500);
signing();
