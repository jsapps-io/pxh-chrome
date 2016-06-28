"use strict";/*! pxh-chrome.js 0.14.2 */
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},pxhStates={"default":{"pxh-drawer":{add:"pxh-drawer--hidden-until@md pxh-drawer--narrow@md pxh-drawer--wide@lg",remove:"pxh-drawer--narrow@lg"},"pxh-drawer-header__link":{remove:"pxh-drawer-header__link--wide@md",add:"pxh-drawer-header__link--narrow@md pxh-drawer-header__link--wide@lg"},"pxh-overlay":{add:"pxh-overlay--hidden"},"pxh-navigation":{add:"pxh-navigation--narrow@md pxh-navigation--wide@lg"},"pxh-login":{add:"pxh-login--narrow@md pxh-login--wide@lg"},"pxh-login__name":{add:"pxh-login__name--narrow@md pxh-login__name--wide@lg"},"pxh-login__link":{add:"pxh-login__link--narrow@md pxh-login__link--wide@lg"},"pxh-login__settings":{add:"pxh-login__settings--narrow@md pxh-login__settings--wide@lg"},"pxh-login__caret":{add:"pxh-login__caret--narrow@md pxh-login__caret--wide@lg"},"pxh-view":{remove:"pxh-disable-scroll-until@lg pxh-view--wide@lg",add:"pxh-view--narrow@lg"},"pxh-view-header":{remove:"pxh-view-header--wide@lg",add:"pxh-view-header--narrow@lg"},"pxh-view-header-drawer-toggle":{remove:"pxh-view-header-drawer-toggle--hidden"},"pxh-notifications__icon":{add:"pxh-notifications__icon--narrow@md pxh-notifications__icon--wide@lg"}},open:{"pxh-drawer":{remove:"pxh-drawer--hidden-until@md pxh-drawer--narrow@md pxh-drawer--narrow@lg",add:"pxh-drawer--wide@lg"},"pxh-drawer-header__link":{remove:"pxh-drawer-header__link--narrow@md",add:"pxh-drawer-header__link--wide@md pxh-drawer-header__link--wide@lg"},"pxh-overlay":{remove:"pxh-overlay--hidden"},"pxh-navigation":{remove:"pxh-navigation--narrow@md",add:"pxh-navigation--wide@lg"},"pxh-login":{add:"pxh-login--wide@lg",remove:"pxh-login--narrow@md"},"pxh-login__name":{remove:"pxh-login__name--narrow@md",add:"pxh-login__name--wide@lg"},"pxh-login__link":{remove:"pxh-login__link--narrow@md pxh-login__link--narrow@lg"},"pxh-login__settings":{remove:"pxh-login__settings--narrow@md",add:"pxh-login__settings--wide@lg"},"pxh-login__caret":{remove:"pxh-login__caret--narrow@md",add:"pxh-login__caret--wide@lg"},"pxh-view":{add:"pxh-disable-scroll-until@lg pxh-view--narrow@lg",remove:"pxh-view--wide@lg"},"pxh-view-header":{add:"pxh-view-header--narrow@lg",remove:"pxh-view-header--wide@lg"},"pxh-view-header-drawer-toggle":{add:"pxh-view-header-drawer-toggle--hidden"},"pxh-notifications__icon":{remove:"pxh-notifications__icon--narrow@md",add:"pxh-notifications__icon--wide@lg"}},narrowAtLg:{"pxh-drawer":{add:"pxh-drawer--hidden-until@md pxh-drawer--narrow@md pxh-drawer--narrow@lg",remove:"pxh-drawer--wide@lg"},"pxh-drawer-header__link":{remove:"pxh-drawer-header__link--wide@md pxh-drawer-header__link--wide@lg",add:"pxh-drawer-header__link--narrow@md"},"pxh-overlay":{add:"pxh-overlay--hidden"},"pxh-navigation":{add:"pxh-navigation--narrow@md",remove:"pxh-navigation--wide@lg"},"pxh-login":{add:"pxh-login--narrow@md",remove:"pxh-login--wide@lg"},"pxh-login__name":{add:"pxh-login__name--narrow@md",remove:"pxh-login__name--wide@lg"},"pxh-login__link":{add:"pxh-login__link--narrow@md",remove:"pxh-login__link--wide@lg"},"pxh-login__settings":{add:"pxh-login__settings--narrow@md",remove:"pxh-login__settings--wide@lg"},"pxh-login__caret":{add:"pxh-login__caret--narrow@md",remove:"pxh-login__caret--wide@lg"},"pxh-view":{remove:"pxh-disable-scroll-until@lg pxh-view--narrow@lg",add:"pxh-view--wide@lg"},"pxh-view-header":{remove:"pxh-view-header--narrow@lg",add:"pxh-view-header--wide@lg"},"pxh-view-header-drawer-toggle":{remove:"pxh-view-header-drawer-toggle--hidden"},"pxh-notifications__icon":{add:"pxh-notifications__icon--narrow@md",remove:"pxh-notifications__icon--wide@lg"}}},pxhTransitions={outToIn:{"pxh-drawer":{add:"pxh-drawer--animate-in"}},inToOut:{"pxh-drawer":{add:"pxh-drawer--animate-out"}},narrowToOpen:{"pxh-drawer":{add:"pxh-drawer--animate-wide"},"pxh-drawer-header__link":{add:"pxh-drawer-header__link--animate-in"},"pxh-navigation__item-text":{add:"pxh-navigation__item-text--animate-in"},"pxh-navigation__sub-link":{add:"pxh-navigation__sub-link--animate-in"},"pxh-login":{add:"pxh-navigation__sub-link--animate-wide"},"pxh-login__name":{add:"pxh-login__name--animate-in"},"pxh-login__caret":{add:"pxh-login__caret--animate-in"},"pxh-login__settings":{add:"pxh-login__settings--animate-in"}},openToNarrow:{"pxh-drawer":{add:"pxh-drawer--animate-narrow"},"pxh-drawer-header__link":{add:"pxh-drawer-header__link--animate-out"},"pxh-navigation__item-text":{add:"pxh-navigation__item-text--animate-out"},"pxh-navigation__sub-link":{add:"pxh-navigation__sub-link--animate-out"},"pxh-login__name":{add:"pxh-login__name--animate-out"},"pxh-login__caret":{add:"pxh-login__caret--animate-out"},"pxh-login__settings":{add:"pxh-login__settings--animate-out"}},outToNarrow:{"pxh-drawer":{add:"pxh-drawer--animate-in"},"pxh-view":{add:"pxh-view--animate-full-to-wide"},"pxh-view-header":{add:"pxh-view-header--animate-full-to-wide"}},narrowToOut:{"pxh-drawer":{add:"pxh-drawer--animate-out-wide"},"pxh-drawer-header__link":{add:"pxh-drawer-header__link--animate-in"},"pxh-navigation__item-text":{add:"pxh-navigation__item-text--animate-in"},"pxh-navigation__sub-link":{add:"pxh-navigation__sub-link--animate-in"},"pxh-login":{add:"pxh-navigation__sub-link--animate-wide"},"pxh-login__name":{add:"pxh-login__name--animate-in"},"pxh-login__caret":{add:"pxh-login__caret--animate-in"},"pxh-login__settings":{add:"pxh-login__settings--animate-in"}},wideToNarrow:{"pxh-drawer":{add:"pxh-drawer--animate-narrow"},"pxh-drawer-header__link":{add:"pxh-drawer-header__link--animate-out"},"pxh-navigation__item-text":{add:"pxh-navigation__item-text--animate-out"},"pxh-navigation__sub-link":{add:"pxh-navigation__sub-link--animate-out"},"pxh-login__name":{add:"pxh-login__name--animate-out"},"pxh-login__caret":{add:"pxh-login__caret--animate-out"},"pxh-login__settings":{add:"pxh-login__settings--animate-out"},"pxh-view":{add:"pxh-view--animate-wide"},"pxh-view-header":{add:"pxh-view-header--animate-wide"}},narrowToWide:{"pxh-drawer":{add:"pxh-drawer--animate-wide"},"pxh-drawer-header__link":{add:"pxh-drawer-header__link--animate-in"},"pxh-navigation__item-text":{add:"pxh-navigation__item-text--animate-in"},"pxh-navigation__sub-link":{add:"pxh-navigation__sub-link--animate-in"},"pxh-login__name":{add:"pxh-login__name--animate-in"},"pxh-login__caret":{add:"pxh-login__caret--animate-in"},"pxh-login__settings":{add:"pxh-login__settings--animate-in"},"pxh-view":{add:"pxh-view--animate-narrow"},"pxh-view-header":{add:"pxh-view-header--animate-narrow"}},clearAll:{"pxh-drawer":{remove:"pxh-drawer--animate-in pxh-drawer--animate-out pxh-drawer--animate-narrow pxh-drawer--animate-wide pxh-drawer--animate-out-wide"},"pxh-drawer-header__link":{remove:"pxh-drawer-header__link--animate-in pxh-drawer-header__link--animate-out"},"pxh-navigation__item-text":{remove:"pxh-navigation__item-text--animate-in pxh-navigation__item-text--animate-out"},"pxh-navigation__sub-link":{remove:"pxh-navigation__sub-link--animate-in pxh-navigation__sub-link--animate-out"},"pxh-login__name":{remove:"pxh-login__name--animate-in pxh-login__name--animate-out"},"pxh-login__caret":{remove:"pxh-login__caret--animate-in pxh-login__caret--animate-out"},"pxh-login__settings":{remove:"pxh-login__settings--animate-in pxh-login__settings--animate-out"},"pxh-view":{remove:"pxh-view--animate-wide pxh-view--animate-narrow pxh-view--animate-full-to-wide"},"pxh-view-header":{remove:"pxh-view-header--animate-wide pxh-view-header--animate-narrow pxh-view-header--animate-full-to-wide"}}},pxhResizeSensor=function e(a,n){function i(){this.q=[],this.add=function(e){this.q.push(e)};var e,a;this.call=function(){for(e=0,a=this.q.length;e<a;e++)this.q[e].call()}}function t(e,a){return e.currentStyle?e.currentStyle[a]:window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(a):e.style[a]}function r(e,a){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(a)}else e.resizedAttached=new i,e.resizedAttached.add(a);e.pxhResizeSensor=document.createElement("div"),e.pxhResizeSensor.className="resize-sensor";var n="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",r="position: absolute; left: 0; top: 0; transition: 0s;";e.pxhResizeSensor.style.cssText=n,e.pxhResizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+n+'"><div style="'+r+'"></div></div><div class="resize-sensor-shrink" style="'+n+'"><div style="'+r+' width: 200%; height: 200%"></div></div>',e.appendChild(e.pxhResizeSensor),{fixed:1,absolute:1}[t(e,"position")]||(e.style.position="relative");var o,d,h=e.pxhResizeSensor.childNodes[0],p=h.childNodes[0],s=e.pxhResizeSensor.childNodes[1],x=(s.childNodes[0],function(){p.style.width=h.offsetWidth+10+"px",p.style.height=h.offsetHeight+10+"px",h.scrollLeft=h.scrollWidth,h.scrollTop=h.scrollHeight,s.scrollLeft=s.scrollWidth,s.scrollTop=s.scrollHeight,o=e.offsetWidth,d=e.offsetHeight});x();var l=function(){e.resizedAttached&&e.resizedAttached.call()},w=function(e,a,n){e.attachEvent?e.attachEvent("on"+a,n):e.addEventListener(a,n)},g=function(){e.offsetWidth==o&&e.offsetHeight==d||l(),x()};w(h,"scroll",g),w(s,"scroll",g)}var o=Object.prototype.toString.call(a),d="[object Array]"===o||"[object NodeList]"===o||"[object HTMLCollection]"===o||"undefined"!=typeof jQuery&&a instanceof jQuery||"undefined"!=typeof Elements&&a instanceof Elements;if(d)for(var h=0,p=a.length;h<p;h++)r(a[h],n);else r(a,n);this.detach=function(){if(d)for(var n=0,i=a.length;n<i;n++)e.detach(a[n]);else e.detach(a)}};pxhResizeSensor.detach=function(e){e.pxhResizeSensor&&(e.removeChild(e.pxhResizeSensor),delete e.pxhResizeSensor,delete e.resizedAttached)},"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=pxhResizeSensor:window.pxhResizeSensor=pxhResizeSensor,function(e){if("function"==typeof define&&define.amd)define(e);else if("object"===("undefined"==typeof exports?"undefined":_typeof(exports)))module.exports=e();else{var a=window.Cookies,n=window.Cookies=e();n.noConflict=function(){return window.Cookies=a,n}}}(function(){function e(){for(var e=0,a={};e<arguments.length;e++){var n=arguments[e];for(var i in n)a[i]=n[i]}return a}function a(n){function i(a,t,r){var o;if("undefined"!=typeof document){if(arguments.length>1){if(r=e({path:"/"},i.defaults,r),"number"==typeof r.expires){var d=new Date;d.setMilliseconds(d.getMilliseconds()+864e5*r.expires),r.expires=d}try{o=JSON.stringify(t),/^[\{\[]/.test(o)&&(t=o)}catch(h){}return t=n.write?n.write(t,a):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),a=encodeURIComponent(String(a)),a=a.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),a=a.replace(/[\(\)]/g,escape),document.cookie=[a,"=",t,r.expires&&"; expires="+r.expires.toUTCString(),r.path&&"; path="+r.path,r.domain&&"; domain="+r.domain,r.secure?"; secure":""].join("")}a||(o={});for(var p=document.cookie?document.cookie.split("; "):[],s=/(%[0-9A-Z]{2})+/g,x=0;x<p.length;x++){var l=p[x].split("="),w=l[0].replace(s,decodeURIComponent),g=l.slice(1).join("=");'"'===g.charAt(0)&&(g=g.slice(1,-1));try{if(g=n.read?n.read(g,w):n(g,w)||g.replace(s,decodeURIComponent),this.json)try{g=JSON.parse(g)}catch(h){}if(a===w){o=g;break}a||(o[w]=g)}catch(h){}}return o}}return i.get=i.set=i,i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(a,n){i(a,"",e(n,{expires:-1}))},i.removeAll=function(){for(var e=document.cookie.split(";"),a=e.length-1;a>=0;a--){var n=e[a],i=n.indexOf("="),t=i>-1?n.substr(0,i):n;document.cookie=t+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}},i.withConverter=a,i}return a(function(){})});var pxhCookies=Cookies.noConflict(),arrayExists=function(e){return"undefined"!=typeof e&&e.length>0},getItemByPropertyName=function(e,a){for(var n in e)if(e.hasOwnProperty(a))return e[a]},pxhLoadState=function(e,a){var n=getItemByPropertyName(e,a);for(var i in n){var t=n[i];for(var r in t){var o=t[r];pxhChangeClasses(i,r,o)}}},pxhChangeClasses=function(e,a,n){var i=document.getElementsByClassName(e);if(arrayExists(i)&&n){n=n.replace(/  +/g," ");for(var t=n.split(" "),r=i.length-1;r>=0;r--)for(var o=t.length-1;o>=0;o--)"add"===a?i[r].classList.add(t[o]):"remove"===a?i[r].classList.remove(t[o]):"toggle"===a&&i[r].classList.toggle(t[o])}},pxhBindControl=function(e){var a=document.getElementsByClassName(e);if(arrayExists(a))for(var n=a.length-1;n>=0;n--)a[n].addEventListener("click",function(){var e=document.getElementsByClassName("pxh-drawer")[0],a=e.classList.contains("pxh-drawer--wide@lg"),n=e.classList.contains("pxh-drawer--narrow@md"),i=e.classList.contains("pxh-drawer--hidden-until@md");pxhLoadState(pxhTransitions,"clearAll"),window.matchMedia("(min-width: 1024px)").matches&&a?(pxhLoadState(pxhTransitions,"wideToNarrow"),pxhLoadState(pxhStates,"narrowAtLg"),document.dispatchEvent(pxhDrawerClosed),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"})):window.matchMedia("(min-width: 1024px)").matches?(pxhLoadState(pxhTransitions,"narrowToWide"),pxhLoadState(pxhStates,"default"),document.dispatchEvent(pxhDrawerOpened),pxhCookies.set("pxh-drawer-narrow","false",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","true",{expires:1,path:"/"})):n&&window.matchMedia("(min-width: 768px)").matches?(pxhLoadState(pxhTransitions,"narrowToOpen"),pxhLoadState(pxhStates,"open"),document.dispatchEvent(pxhDrawerOpened),pxhCookies.set("pxh-drawer-open","true",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-narrow","false",{expires:1,path:"/"})):window.matchMedia("(min-width: 768px)").matches?(pxhLoadState(pxhTransitions,"openToNarrow"),pxhLoadState(pxhStates,"default"),document.dispatchEvent(pxhDrawerClosed),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"})):i?(pxhLoadState(pxhTransitions,"outToIn"),pxhLoadState(pxhStates,"open"),document.dispatchEvent(pxhDrawerOpened),pxhCookies.set("pxh-drawer-narrow","false",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","true",{expires:1,path:"/"})):(pxhLoadState(pxhTransitions,"inToOut"),pxhLoadState(pxhStates,"default"),document.dispatchEvent(pxhDrawerClosed),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}))})},pxhBreakpointAtMd=function(e){pxhLoadState(pxhTransitions,"clearAll");var a=document.getElementsByClassName("pxh-drawer")[0],n=(a.classList.contains("pxh-drawer--wide@lg"),a.classList.contains("pxh-drawer--narrow@md"));e.matches?n&&pxhLoadState(pxhTransitions,"outToNarrow"):n&&pxhLoadState(pxhTransitions,"narrowToOut")},pxhBreakpointAtLg=function(e){pxhLoadState(pxhTransitions,"clearAll");var a=document.getElementsByClassName("pxh-drawer")[0],n=a.classList.contains("pxh-drawer--wide@lg"),i=a.classList.contains("pxh-drawer--narrow@md");e.matches?n&&!i?(pxhLoadState(pxhStates,"default"),pxhCookies.set("pxh-drawer-narrow","false",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","true",{expires:1,path:"/"})):(pxhLoadState(pxhTransitions,"narrowToWide"),pxhLoadState(pxhStates,"default"),document.dispatchEvent(pxhDrawerOpened),pxhCookies.set("pxh-drawer-narrow","false",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","true",{expires:1,path:"/"})):(n&&pxhLoadState(pxhTransitions,"wideToNarrow"),pxhLoadState(pxhStates,"default"),document.dispatchEvent(pxhDrawerClosed),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}))},pxhBindDrawerMediaQueryControls=function(e,a){var n=document.getElementsByClassName(e);if(arrayExists(n))for(var i=n.length-1;i>=0;i--)n[i].addEventListener("click",function(){pxhLoadState(pxhTransitions,"clearAll"),a.matches||(pxhLoadState(pxhStates,"default"),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}))})},pxhOverlayDrawerControl=function(){var e=document.getElementsByClassName("pxh-overlay");if(arrayExists(e))for(var a=e.length-1;a>=0;a--)e[a].addEventListener("click",function(e){lgBreakpoint.matches||"true"!==pxhCookies.get("pxh-drawer-open")||(pxhLoadState(pxhTransitions,"clearAll"),pxhLoadState(pxhStates,"default"),document.dispatchEvent(pxhDrawerClosed),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}))})},pxhEscapeDrawerControl=function(){document.addEventListener("keyup",function(e){27!=e.keyCode||lgBreakpoint.matches||"true"!==pxhCookies.get("pxh-drawer-open")||(pxhLoadState(pxhTransitions,"clearAll"),pxhLoadState(pxhStates,"default"),document.dispatchEvent(pxhDrawerClosed),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}))})},pxhToggleLoginMenu=function(e,a,n){var i=document.getElementsByClassName(e),t=document.getElementsByClassName(a);if(arrayExists(i)&&arrayExists(t))for(var r=i.length-1;r>=0;r--)i[r].addEventListener("click",function(e){e.preventDefault();var i=t[0].classList.contains(n);pxhChangeClasses("pxh-login-menu","remove",n),i||pxhChangeClasses(a,"toggle",n),e.stopPropagation()})},pxhAnywhereLoginMenuControl=function(e,a,n){var i=document.getElementsByClassName(e),t=document.getElementsByClassName(a);arrayExists(i)&&arrayExists(t)&&document.addEventListener("click",function(e){pxhChangeClasses(a,"remove",n)})},pxhAddResizeSensor=function(e){var a=document.getElementById(e);a&&new pxhResizeSensor(a,function(){document.dispatchEvent(pxhViewResized)})},pxhToggleNotifications=function(e,a,n){var i=document.getElementsByClassName(e),t=document.getElementsByClassName(a);arrayExists(i)&&arrayExists(t)&&i[0].addEventListener("click",function(e){pxhChangeClasses(a,"toggle",n)})},lgBreakpoint=window.matchMedia("(min-width: 1024px)"),mdBreakpoint=window.matchMedia("(min-width: 768px)");document.addEventListener("DOMContentLoaded",function(e){lgBreakpoint.addListener(pxhBreakpointAtLg),mdBreakpoint.addListener(pxhBreakpointAtMd)});var pxhViewResized=document.createEvent("CustomEvent");pxhViewResized.initCustomEvent("pxhViewResized",!1,!1,{viewResized:!0});var pxhDrawerOpened=document.createEvent("CustomEvent");pxhDrawerOpened.initCustomEvent("pxhDrawerOpened",!1,!1,{drawerOpened:!0});var pxhDrawerClosed=document.createEvent("CustomEvent");pxhDrawerClosed.initCustomEvent("pxhDrawerClosed",!1,!1,{drawerClosed:!0}),document.addEventListener("DOMContentLoaded",function(e){pxhBindControl("pxh-view-header-drawer-toggle"),pxhBindControl("pxh-drawer-toggle"),null===pxhCookies.get("pxh-drawer-open")&&pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}),null===pxhCookies.get("pxh-drawer-narrow")&&pxhCookies.set("pxh-drawer-narrow","false",{expires:1,path:"/"}),window.matchMedia("(min-width: 1024px)").matches&&"true"===pxhCookies.get("pxh-drawer-narrow")?(pxhLoadState(pxhStates,"narrowAtLg"),document.dispatchEvent(pxhDrawerClosed),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"})):window.matchMedia("(min-width: 1024px)").matches?pxhCookies.set("pxh-drawer-open","true",{expires:1,path:"/"}):pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}),document.addEventListener("navRefreshed",function(e){pxhToggleLoginMenu("pxh-login__profile-link","pxh-login-menu--profile","pxh-login-menu--visible"),pxhToggleLoginMenu("pxh-login__settings-link","pxh-login-menu--settings","pxh-login-menu--visible")}),pxhBindDrawerMediaQueryControls("pxh-navigation__link",lgBreakpoint),pxhBindDrawerMediaQueryControls("pxh-navigation__sub-link",lgBreakpoint),pxhOverlayDrawerControl(),pxhEscapeDrawerControl(),pxhAnywhereLoginMenuControl("pxh-login__profile-link","pxh-login-menu--profile","pxh-login-menu--visible"),pxhAnywhereLoginMenuControl("pxh-login__settings-link","pxh-login-menu--settings","pxh-login-menu--visible"),pxhToggleLoginMenu("pxh-login__profile-link","pxh-login-menu--profile","pxh-login-menu--visible"),pxhToggleLoginMenu("pxh-login__settings-link","pxh-login-menu--settings","pxh-login-menu--visible"),pxhToggleNotifications("pxh-notifications__icon","pxh-notifications","pxh-notifications--visible"),pxhAddResizeSensor("js-view")});