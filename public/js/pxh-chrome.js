'use strict';
(function(){

  var pxhLoginMenuToggleControl = document.querySelector('.pxh-login__link');
  var pxhLoginMenuToggleTarget = document.querySelector('.pxh-login-menu');

  var pxhDrawerToggleControls = [
    '.pxh-drawer-toggle__link',
    '.pxh-view-header-drawer-toggle__link'
  ];

  var pxhDrawerToggleTargets = {
    '.pxh-drawer' : 'pxh-drawer--hidden-until@md pxh-drawer--narrow@md',
    '.pxh-overlay' : 'pxh-overlay--hidden',
    '.pxh-navigation' : 'pxh-navigation--narrow@md',
    '.pxh-login__name' : 'pxh-login__name--narrow@md',
    '.pxh-login__link' : 'pxh-login__link--narrow@md',
    '.pxh-login__settings' : 'pxh-login__settings--narrow@md',
    '.pxh-login__caret' : 'pxh-login__caret--narrow@md',
    '.pxh-view' : 'pxh-view--narrow@lg',
    '.pxh-view-header' : 'pxh-view-header--narrow@lg',
    '.pxh-view-header-drawer-toggle' : 'pxh-view-header-drawer-toggle--hidden',
    'html' : 'pxh-disable-scroll-until@lg',
    'body' : 'pxh-disable-scroll-until@lg'
  };

  function pxhToggleLoginMenu() {
    if ((pxhLoginMenuToggleControl) && (pxhLoginMenuToggleTarget)) {
      pxhLoginMenuToggleControl.addEventListener('click', function(e) {
        e.preventDefault();
        pxhLoginMenuToggleTarget.classList.toggle('pxh-login-menu--visible');
      }); 
    }
  }

  function pxhBindDrawerToggleEvents() {
    for (var i = 0; i < pxhDrawerToggleControls.length; i++) {
      var toggleControl = pxhDrawerToggleControls[i];
      var toggleControlElement = document.querySelector(toggleControl);
      toggleControlElement.addEventListener('click', pxhToggleDrawerTargets);
    }
  }

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var phxToggleDrawerOnWindowChange = debounce(function() {
    var windowWidth = window.innerWidth;
    var triggerWidth = 1024 + 30; // add a few extra pixels to accomodate scroll bar and prevent @md state bounce
    console.log('current width: ' + windowWidth);
    if (
      ((windowWidth >= triggerWidth) && (document.querySelector('.pxh-view--narrow\\@lg') === null))
      ||
      ((windowWidth < triggerWidth) && (document.querySelector('.pxh-view--narrow\\@lg')))
      )
    {
      pxhToggleDrawerTargets();
      // duplicating the cookie toggle here because it's an event and we want to fire the cookie toggle even though that's suppressed in the main toggle function
      if (pxhReadCookie('pxh-drawer-state') == 'wide') {
        pxhUpdateCookie('pxh-drawer-state', 'narrow');
      }
      else {
        pxhUpdateCookie('pxh-drawer-state', 'wide');
      }
    }
  }, 500);

  function pxhToggleDrawerTargets(event) {
    if (event) {
      // toggle was triggered by a click event, not a load event
      // prevent default event behavior
      event.preventDefault();
      // if drawer-state cookie is wide, change it to narrow
      if (pxhReadCookie('pxh-drawer-state') == 'wide') {
        pxhUpdateCookie('pxh-drawer-state', 'narrow');
      }
      // else, change drawer-state cookie to wide
      else {
        pxhUpdateCookie('pxh-drawer-state', 'wide');
      }
    }
    // loop through all the target classes to toggle
    for (var pxhBaseClassName in pxhDrawerToggleTargets) {
      if ((pxhDrawerToggleTargets.hasOwnProperty(pxhBaseClassName)) && (document.querySelector(pxhBaseClassName))) {
        var toggleTargetElement = document.querySelector(pxhBaseClassName);
        if (pxhDrawerToggleTargets[pxhBaseClassName].indexOf(' ')) {
          var pxhToggleClassNames = pxhDrawerToggleTargets[pxhBaseClassName].split(' ');
          for (var i = 0; i < pxhToggleClassNames.length; i++) {
            toggleTargetElement.classList.toggle(pxhToggleClassNames[i]);
          }
        } else {
          toggleTargetElement.classList.toggle(pxhDrawerToggleTargets[pxhBaseClassName]);
        }
      }
    }

  }

  function phxCreateCookie(key, val) {
    if (!pxhReadCookie(key)) {
      document.cookie = escape(key) + '=' + escape(val);
    }
  }

  function pxhReadCookie(key) {
    if (document.cookie) {
      var cookies = document.cookie.split('; ');
      for (var i = cookies.length - 1; i >= 0; i--) {
        var cookie = cookies[i].split('=');
        if (cookie[0] == key) {
          return cookie[1];
        }
      }
    } else {
      return false;
    }
  }

  function pxhUpdateCookie(key, val) {
    if (pxhReadCookie(key)) {
      document.cookie = escape(key) + '=' + escape(val);
    }
  }

  function phxPrepareDrawer() {
    if (pxhReadCookie('pxh-drawer-state') == 'wide') {
      pxhToggleDrawerTargets();
    }
  }

  // INIT
  pxhBindDrawerToggleEvents();
  pxhToggleLoginMenu();
  window.addEventListener('resize', phxToggleDrawerOnWindowChange);
  document.addEventListener('DOMContentLoaded', function(event) {
    phxCreateCookie('pxh-drawer-state', 'narrow');
    phxPrepareDrawer();
  });

}());
