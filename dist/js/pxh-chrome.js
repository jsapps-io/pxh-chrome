"use strict";!function(){function e(){i&&l&&i.addEventListener("click",function(e){e.preventDefault(),l.classList.toggle("pxh-login-menu--visible")})}function n(){for(var e=0;e<o.length;e++){var n=o[e],i=document.querySelector(n);i.addEventListener("click",r)}}function r(e){e.preventDefault();for(var n in t)if(t.hasOwnProperty(n)&&document.querySelector(n)){var r=document.querySelector(n);if(t[n].indexOf(" "))for(var i=t[n].split(" "),l=0;l<i.length;l++)r.classList.toggle(i[l]);else r.classList.toggle(t[n])}}var i=(window.location.pathname,window.location.hash,document.querySelectorAll(".pxh-navigation__item"),document.querySelector(".pxh-login__link")),l=document.querySelector(".pxh-login-menu"),o=[".pxh-drawer-toggle__link",".pxh-view-header-drawer-toggle__link"],t={".pxh-drawer":"pxh-drawer--hidden-until@md pxh-drawer--narrow@md",".pxh-overlay":"pxh-overlay--hidden",".pxh-navigation":"pxh-navigation--narrow@md",".pxh-login__name":"pxh-login__name--narrow@md",".pxh-login__link":"pxh-login__link--narrow@md",".pxh-login__settings":"pxh-login__settings--narrow@md",".pxh-login__caret":"pxh-login__caret--narrow@md",".pxh-view":"pxh-view--narrow@lg",".pxh-view-header":"pxh-view-header--narrow@lg",".pxh-view-header-drawer-toggle":"pxh-view-header-drawer-toggle--hidden",html:"pxh-disable-scroll-until@lg",body:"pxh-disable-scroll-until@lg"};n(),e()}();