document.getElementsByTagName("html")[0].classList.add("t4u-T376A");var getCookie=function(e){var n=("; "+document.cookie).split("; "+e+"=");if(2==n.length)return n.pop().split(";").shift()},url=window.location.pathname.split("/")[1],enLang=url.match(/en_/g),frLang=url.match(/fr_/g),deLang=url.match(/de_/g),text=function(){var e;return enLang?e="NEW":frLang?e="NEW":deLang&&(e="NEU"),e},newHTML='<span style="color: white;display: inline-block;background-color: rgb(255, 0, 0);padding: 1px 10px;border-radius: 5px;margin-left: 5px;">'+text()+"</span>",witchNav=getCookie("_GSMARS_PLP2"),navA=function(){var e=document.getElementById("sidenav-navigationNode_00000668").getElementsByClassName("sideNav-link")[0].getElementsByTagName("span")[0],n=document.getElementById("sidenav-navigationNode_0000066B").getElementsByClassName("sideNav-link")[0].getElementsByTagName("span")[0],t='<span style="background-color:#f00;border-radius:3px;display:inline-block;position:absolute;left:5px;width:6px;height:6px;text-indent: 54px;line-height: 7px;top:12px;"></span>';e.closest(".sideNav-subItem").childNodes[1].innerHTML=e.closest(".sideNav-subItem").childNodes[1].innerHTML+newHTML,e.innerHTML=e.innerHTML+t,n.innerHTML=n.innerHTML+t,n.closest(".sideNav-subItem").childNodes[1].innerHTML=n.closest(".sideNav-subItem").childNodes[1].innerHTML+newHTML},navC=function(){console.log("C");var e=document.getElementsByClassName("flyout__column")[0].getElementsByClassName("flyout__columnItem"),n=document.getElementsByClassName("flyout__column")[6].getElementsByClassName("flyout__columnItem"),t='<span style="background-color:#f00;border-radius:3px;display:inline-block;position:absolute;left:-8px;width:6px;height:6px;text-indent: 54px;line-height: 7px;top:12px;"></span>';e[0].getElementsByClassName("flyout__columnTitle")[0].innerHTML=e[0].getElementsByClassName("flyout__columnTitle")[0].innerHTML+newHTML,e[1].getElementsByTagName("span")[0].innerHTML=e[1].getElementsByTagName("span")[0].innerHTML+t,n[0].getElementsByClassName("flyout__columnTitle")[0].innerHTML=n[0].getElementsByClassName("flyout__columnTitle")[0].innerHTML+newHTML,n[1].getElementsByTagName("span")[0].innerHTML=n[1].getElementsByTagName("span")[0].innerHTML+t};function myFunction(e){e.matches?"A"==witchNav||"B"==witchNav?navA():navC():navA()}var x=window.matchMedia("(min-width: 1025px)");myFunction(x),x.addListener(myFunction);