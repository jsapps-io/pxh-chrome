"use strict";!function(){function e(){l&&d&&l.addEventListener("click",function(e){e.preventDefault(),d.classList.toggle("pxh-login-menu--visible")})}function r(){for(var e=0;e<c.length;e++){var r=c[e],n=document.querySelector(r);n.addEventListener("click",t)}}function n(e,r,n){var t;return function(){var o=this,a=arguments,i=function(){t=null,n||e.apply(o,a)},l=n&&!t;clearTimeout(t),t=setTimeout(i,r),l&&e.apply(o,a)}}function t(e){console.log("start pxhToggleDrawerTargets: "+document.cookie),e&&(e.preventDefault(),"wide"==a("pxh-drawer-state")?o("pxh-drawer-state","narrow",1,"/"):o("pxh-drawer-state","wide",1,"/"));for(var r in h)if(h.hasOwnProperty(r)&&document.querySelector(r)){var n=document.querySelector(r);if(h[r].indexOf(" "))for(var t=h[r].split(" "),i=0;i<t.length;i++)n.classList.toggle(t[i]);else n.classList.toggle(h[r])}console.log("end pxhToggleDrawerTargets: "+document.cookie)}function o(e,r,n,t){var o=new Date;o.setDate(o.getDate()+n),document.cookie=escape(e)+"="+escape(r)+"; expires="+o+"; path="+escape(t)}function a(e){if(!document.cookie)return!1;for(var r=document.cookie.split("; "),n=r.length-1;n>=0;n--){var t=r[n].split("=");if(t[0]==e)return t[1]}}function i(){console.log("start pxhPrepareDrawer: "+document.cookie),"wide"==a("pxh-drawer-state")&&t(),console.log("end pxhPrepareDrawer: "+document.cookie)}var l=document.querySelector(".pxh-login__link"),d=document.querySelector(".pxh-login-menu"),c=[".pxh-drawer-toggle__link",".pxh-view-header-drawer-toggle__link"],h={".pxh-drawer":"pxh-drawer--hidden-until@md pxh-drawer--narrow@md",".pxh-overlay":"pxh-overlay--hidden",".pxh-navigation":"pxh-navigation--narrow@md",".pxh-login__name":"pxh-login__name--narrow@md",".pxh-login__link":"pxh-login__link--narrow@md",".pxh-login__settings":"pxh-login__settings--narrow@md",".pxh-login__caret":"pxh-login__caret--narrow@md",".pxh-view":"pxh-view--narrow@lg",".pxh-view-header":"pxh-view-header--narrow@lg",".pxh-view-header-drawer-toggle":"pxh-view-header-drawer-toggle--hidden",html:"pxh-disable-scroll-until@lg",body:"pxh-disable-scroll-until@lg"},p=n(function(){var e=window.innerWidth,r=1054;console.log("current width: "+e),(e>=r&&null===document.querySelector(".pxh-view--narrow\\@lg")||r>e&&document.querySelector(".pxh-view--narrow\\@lg"))&&(t(),"wide"==a("pxh-drawer-state")?o("pxh-drawer-state","narrow",1,"/"):o("pxh-drawer-state","wide",1,"/"))},500);r(),e(),window.addEventListener("resize",p),document.addEventListener("DOMContentLoaded",function(e){a("pxh-drawer-state")||o("pxh-drawer-state","narrow",1,"/"),i()})}();