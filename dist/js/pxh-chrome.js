"use strict";/*! pxh-chrome.js 0.12.0 */
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},pxhStatesObject={drawerOpen:{"pxh-drawer":{remove:"pxh-drawer--hidden-until@md pxh-drawer--narrow@md",add:"pxh-drawer--wide@lg"},"pxh-drawer-header__link":{remove:"pxh-drawer-header__link--narrow@md",add:"pxh-drawer-header__link--wide@md"},"pxh-overlay":{remove:"pxh-overlay--hidden"},"pxh-navigation":{remove:"pxh-navigation--narrow@md",add:"pxh-navigation--wide@lg"},"pxh-login":{add:"pxh-login--wide@lg",remove:"pxh-login--narrow@md"},"pxh-login__name":{remove:"pxh-login__name--narrow@md",add:"pxh-login__name--wide@lg"},"pxh-login__link":{remove:"pxh-login__link--narrow@md",add:"pxh-login__link--narrow@lg"},"pxh-login__settings":{remove:"pxh-login__settings--narrow@md",add:"pxh-login__settings--wide@lg"},"pxh-login__caret":{remove:"pxh-login__caret--narrow@md",add:"pxh-login__caret--wide@lg"},"pxh-view":{add:"pxh-disable-scroll-until@lg pxh-view--narrow@lg",remove:"pxh-view--wide@lg"},"pxh-view-header":{add:"pxh-view-header--narrow@lg",remove:"pxh-view-header--wide@lg"},"pxh-view-header-drawer-toggle":{add:"pxh-view-header-drawer-toggle--hidden"}},drawerClosed:{"pxh-drawer":{add:"pxh-drawer--hidden-until@md pxh-drawer--narrow@md",remove:"pxh-drawer--wide@lg"},"pxh-drawer-header__link":{remove:"pxh-drawer-header__link--wide@md pxh-drawer-header__link--wide@lg",add:"pxh-drawer-header__link--narrow@md"},"pxh-overlay":{add:"pxh-overlay--hidden"},"pxh-navigation":{add:"pxh-navigation--narrow@md",remove:"pxh-navigation--wide@lg"},"pxh-login":{add:"pxh-login--narrow@md",remove:"pxh-login--wide@lg"},"pxh-login__name":{add:"pxh-login__name--narrow@md",remove:"pxh-login__name--wide@lg"},"pxh-login__link":{add:"pxh-login__link--narrow@md",remove:"pxh-login__link--wide@lg"},"pxh-login__settings":{add:"pxh-login__settings--narrow@md",remove:"pxh-login__settings--wide@lg"},"pxh-login__caret":{add:"pxh-login__caret--narrow@md",remove:"pxh-login__caret--wide@lg"},"pxh-view":{remove:"pxh-disable-scroll-until@lg pxh-view--narrow@lg",add:"pxh-view--wide@lg"},"pxh-view-header":{remove:"pxh-view-header--narrow@lg",add:"pxh-view-header--wide@lg"},"pxh-view-header-drawer-toggle":{remove:"pxh-view-header-drawer-toggle--hidden"}}},pxhLgBreakpoint=window.matchMedia("(min-width: 1024px)");/*! css-element-queries/ResizeSensor.js 0.3.2 */
!function(){var e=function t(e,o){function n(){this.q=[],this.add=function(e){this.q.push(e)};var e,t;this.call=function(){for(e=0,t=this.q.length;t>e;e++)this.q[e].call()}}function r(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t]}function i(e,t){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(t)}else e.resizedAttached=new n,e.resizedAttached.add(t);e.pxhResizeSensor=document.createElement("div"),e.pxhResizeSensor.className="resize-sensor";var o="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",i="position: absolute; left: 0; top: 0; transition: 0s;";e.pxhResizeSensor.style.cssText=o,e.pxhResizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+o+'"><div style="'+i+'"></div></div><div class="resize-sensor-shrink" style="'+o+'"><div style="'+i+' width: 200%; height: 200%"></div></div>',e.appendChild(e.pxhResizeSensor),{fixed:1,absolute:1}[r(e,"position")]||(e.style.position="relative");var a,d,s=e.pxhResizeSensor.childNodes[0],p=s.childNodes[0],h=e.pxhResizeSensor.childNodes[1],l=(h.childNodes[0],function(){p.style.width=s.offsetWidth+10+"px",p.style.height=s.offsetHeight+10+"px",s.scrollLeft=s.scrollWidth,s.scrollTop=s.scrollHeight,h.scrollLeft=h.scrollWidth,h.scrollTop=h.scrollHeight,a=e.offsetWidth,d=e.offsetHeight});l();var x=function(){e.resizedAttached&&e.resizedAttached.call()},c=function(e,t,o){e.attachEvent?e.attachEvent("on"+t,o):e.addEventListener(t,o)},g=function(){e.offsetWidth==a&&e.offsetHeight==d||x(),l()};c(s,"scroll",g),c(h,"scroll",g)}var a=Object.prototype.toString.call(e),d="[object Array]"===a||"[object NodeList]"===a||"[object HTMLCollection]"===a||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements;if(d)for(var s=0,p=e.length;p>s;s++)i(e[s],o);else i(e,o);this.detach=function(){if(d)for(var o=0,n=e.length;n>o;o++)t.detach(e[o]);else t.detach(e)}};e.detach=function(e){e.pxhResizeSensor&&(e.removeChild(e.pxhResizeSensor),delete e.pxhResizeSensor,delete e.resizedAttached)},"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=e:window.pxhResizeSensor=e}(),function(e){if("function"==typeof define&&define.amd)define(e);else if("object"===("undefined"==typeof exports?"undefined":_typeof(exports)))module.exports=e();else{var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var o=arguments[e];for(var n in o)t[n]=o[n]}return t}function t(o){function n(t,r,i){var a;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},n.defaults,i),"number"==typeof i.expires){var d=new Date;d.setMilliseconds(d.getMilliseconds()+864e5*i.expires),i.expires=d}try{a=JSON.stringify(r),/^[\{\[]/.test(a)&&(r=a)}catch(s){}return r=o.write?o.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape),document.cookie=[t,"=",r,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}t||(a={});for(var p=document.cookie?document.cookie.split("; "):[],h=/(%[0-9A-Z]{2})+/g,l=0;l<p.length;l++){var x=p[l].split("="),c=x[0].replace(h,decodeURIComponent),g=x.slice(1).join("=");'"'===g.charAt(0)&&(g=g.slice(1,-1));try{if(g=o.read?o.read(g,c):o(g,c)||g.replace(h,decodeURIComponent),this.json)try{g=JSON.parse(g)}catch(s){}if(t===c){a=g;break}t||(a[c]=g)}catch(s){}}return a}}return n.get=n.set=n,n.getJSON=function(){return n.apply({json:!0},[].slice.call(arguments))},n.defaults={},n.remove=function(t,o){n(t,"",e(o,{expires:-1}))},n.removeAll=function(){for(var e=document.cookie.split(";"),t=e.length-1;t>=0;t--){var o=e[t],n=o.indexOf("="),r=n>-1?o.substr(0,n):o;document.cookie=r+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}},n.withConverter=t,n}return t(function(){})});var pxhCookies=Cookies.noConflict(),pxhChangeClasses=function(e,t,o){var n=document.getElementsByClassName(e);if("undefined"!=typeof n&&n.length>0)for(var r=n.length-1;r>=0;r--)if(o.indexOf(" "))for(var i=o.split(" "),a=i.length-1;a>=0;a--)"toggle"===t?n[r].classList.toggle(i[a]):"add"===t?n[r].classList.add(i[a]):"remove"===t&&n[r].classList.remove(i[a]);else o&&("toggle"===t?n[r].classList.toggle(o):"add"===t?n[r].classList.add(o):"remove"===t&&n[r].classList.remove(o))},pxhFindObjectByLabel=function(e,t){for(var o in e)if(e.hasOwnProperty(t))return e[t]},pxhLoadState=function(e,t){var o=pxhFindObjectByLabel(e,t);for(var n in o){var r=o[n];for(var i in r){var a=r[i];pxhChangeClasses(n,i,a)}}},pxhToggleDrawerOnLarge=function(e){e.matches?(pxhLoadState(pxhStatesObject,"drawerOpen"),pxhCookies.set("pxh-drawer-narrow","false",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","true",{expires:1,path:"/"})):(pxhLoadState(pxhStatesObject,"drawerClosed"),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}))},pxhBindDrawerMediaQueryControls=function(e,t){var o=document.getElementsByClassName(e);if("undefined"!=typeof o&&o.length>0)for(var n=o.length-1;n>=0;n--)o[n].addEventListener("click",function(){t.matches||(pxhLoadState(pxhStatesObject,"drawerClosed"),pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"}))})},pxhToggleDrawer=function(e){e.preventDefault(),"true"===pxhCookies.get("pxh-drawer-open")?(pxhLoadState(pxhStatesObject,"drawerClosed"),pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"})):"false"===pxhCookies.get("pxh-drawer-open")&&(pxhLoadState(pxhStatesObject,"drawerOpen"),pxhCookies.set("pxh-drawer-open","true",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-narrow","false",{expires:1,path:"/"}))},pxhBindDrawerControls=function(e){var t=document.getElementsByClassName(e);if("undefined"!=typeof t&&t.length>0)for(var o=t.length-1;o>=0;o--)t[o].addEventListener("click",pxhToggleDrawer)},pxhOverlayDrawerControl=function(){var e=document.getElementsByClassName("pxh-overlay");if("undefined"!=typeof e&&e.length>0)for(var t=e.length-1;t>=0;t--)e[t].addEventListener("click",function(e){pxhLgBreakpoint.matches||"true"!==pxhCookies.get("pxh-drawer-open")||(pxhLoadState(pxhStatesObject,"drawerClosed"),pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"}))})},pxhEscapeDrawerControl=function(){document.addEventListener("keyup",function(e){27!=e.keyCode||pxhLgBreakpoint.matches||"true"!==pxhCookies.get("pxh-drawer-open")||(pxhLoadState(pxhStatesObject,"drawerClosed"),pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"}))})},pxhToggleLoginMenu=function(e,t,o){var n=document.getElementsByClassName(e),r=document.getElementsByClassName(t);if("undefined"!=typeof n&&n.length>0&&"undefined"!=typeof r&&r.length>0)for(var i=n.length-1;i>=0;i--)n[i].addEventListener("click",function(e){e.preventDefault(),r[0].classList.toggle(o),e.stopPropagation()})},pxhAnywhereLoginMenuControl=function(e,t,o){var n=document.getElementsByClassName(e),r=document.getElementsByClassName(t);"undefined"!=typeof n&&n.length>0&&"undefined"!=typeof r&&r.length>0&&document.addEventListener("click",function(e){for(var t=r.length-1;t>=0;t--)r[t].classList.remove(o)})};document.addEventListener("DOMContentLoaded",function(e){null===pxhCookies.get("pxh-drawer-open")&&pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"}),null===pxhCookies.get("pxh-drawer-narrow")&&pxhCookies.set("pxh-drawer-narrow","false",{expires:1,path:"/"}),pxhLgBreakpoint.matches&&"true"===pxhCookies.get("pxh-drawer-narrow")?(pxhLoadState(pxhStatesObject,"drawerClosed"),pxhCookies.set("pxh-drawer-narrow","true",{expires:1,path:"/"})):pxhLgBreakpoint.matches?pxhCookies.set("pxh-drawer-open","true",{expires:1,path:"/"}):pxhCookies.set("pxh-drawer-open","false",{expires:1,path:"/"})}),pxhLgBreakpoint.addListener(pxhToggleDrawerOnLarge),pxhBindDrawerMediaQueryControls("pxh-navigation__link",pxhLgBreakpoint),pxhBindDrawerMediaQueryControls("pxh-navigation__sub-link",pxhLgBreakpoint),pxhBindDrawerControls("pxh-drawer-toggle__link"),pxhBindDrawerControls("pxh-view-header-drawer-toggle__link"),pxhOverlayDrawerControl(),pxhEscapeDrawerControl(),pxhAnywhereLoginMenuControl("pxh-login__profile-link","pxh-login-menu--profile","pxh-login-menu--visible"),pxhAnywhereLoginMenuControl("pxh-login__settings-link","pxh-login-menu--settings","pxh-login-menu--visible"),pxhToggleLoginMenu("pxh-login__profile-link","pxh-login-menu--profile","pxh-login-menu--visible"),pxhToggleLoginMenu("pxh-login__settings-link","pxh-login-menu--settings","pxh-login-menu--visible");var pxhView=document.getElementById("js-view"),pxhViewResized=document.createEvent("CustomEvent");pxhViewResized.initCustomEvent("pxhViewResized",!1,!1,{viewResized:!0}),new pxhResizeSensor(pxhView,function(){document.dispatchEvent(pxhViewResized)}),document.addEventListener("pxhViewResized",function(e){console.log("pxhViewResized was fired!")});