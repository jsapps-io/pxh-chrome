'use strict';
(function(){

  var lgBreakpoint = window.matchMedia('(min-width: 1024px)');

  // :: cookies.js ::

  // A complete cookies reader/writer framework with full unicode support.

  // Revision #1 - September 4, 2014

  // https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
  // https://developer.mozilla.org/User:fusionchess

  // This framework is released under the GNU Public License, version 3 or later.
  // http://www.gnu.org/licenses/gpl-3.0-standalone.html

  // Syntaxes:

  // * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
  // * docCookies.getItem(name)
  // * docCookies.removeItem(name[, path[, domain]])
  // * docCookies.hasItem(name)
  // * docCookies.keys()

  var docCookies = {
    getItem: function (sKey) {
      if (!sKey) { return null; }
      return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
      var sExpires = '';
      if (vEnd) {
        switch (vEnd.constructor) {
          case Number:
            sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
            break;
          case String:
            sExpires = '; expires=' + vEnd;
            break;
          case Date:
            sExpires = '; expires=' + vEnd.toUTCString();
            break;
        }
      }
      document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
      return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
      if (!this.hasItem(sKey)) { return false; }
      document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
      return true;
    },
    hasItem: function (sKey) {
      if (!sKey) { return false; }
      return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
    },
    keys: function () {
      var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
      for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
      return aKeys;
    }
  };

  // toggle classes
  function changeClasses(targetClassName, changeType, classNamesToChange) {
    // find the first element that matches targetClassName
    var targets = document.getElementsByClassName(targetClassName);
    // if an element matches, work with it
    if ((typeof targets !== 'undefined') && (targets.length > 0)) {

      for (var j = targets.length - 1; j >= 0; j--) {

        // if there are multiple classNamesToChange delimited by spaces, work with them
        if (classNamesToChange.indexOf(' ')) {
          // split multiple classNamesToChange into an array
          var classes = classNamesToChange.split(' ');
          // iterate through the array of classes
          for (var k = classes.length - 1; k >= 0; k--) {
            // if we're supposed to toggle the classNamesToChange on the target element, do it
            if (changeType === 'toggle') {
              targets[j].classList.toggle(classes[k]);
            }
            // if we're supposed to add the classNamesToChange to the target element, do it
            else if (changeType === 'add') {
              targets[j].classList.add(classes[k]);
            }
            // if we're supposed to remove the classNamesToChange from the target element, do it
            else if (changeType === 'remove') {
              targets[j].classList.remove(classes[k]);
            }
          }
        }
        // if there's just one class name, work with it
        else if (classNamesToChange) {
          // if we're supposed to toggle the class name on the target element, do it
          if (changeType === 'toggle') {
            targets[j].classList.toggle(classNamesToChange);
          }
          // if we're supposed to add the class name to the target element, do it
          else if (changeType === 'add') {
            targets[j].classList.add(classNamesToChange);
          }
          // if we're supposed to remove the class name from the target element, do it
          else if (changeType === 'remove') {
            targets[j].classList.remove(classNamesToChange);
          }
        }
      }
    }
  }

  function findObjectByLabel(obj, label) {
    for(var i in obj) {
      if(obj.hasOwnProperty(label)) {
        return obj[label];
      }
    }
  };

  function loadState(statesObject, targetStateName) {
    var targetState = findObjectByLabel(statesObject, targetStateName);
    for (var targetClass in targetState) {
      var stateChangeTarget = targetState[targetClass];
      for (var stateChangeType in stateChangeTarget) {
        var stateChangeClasses = stateChangeTarget[stateChangeType];
        changeClasses(targetClass, stateChangeType, stateChangeClasses);
      }
    }
  }

  var statesObject = {
    'drawerOpen' : {
      'pxh-drawer' : {
        'remove' : 'pxh-drawer--hidden-until@md pxh-drawer--narrow@md',
        'add' : 'pxh-drawer--wide@lg'
      },
      'pxh-drawer-header__link' : {
        'remove' : 'pxh-drawer-header__link--narrow@md',
        'add' : 'pxh-drawer-header__link--wide@md'
      },
      'pxh-overlay' : {
        'remove' : 'pxh-overlay--hidden'
      },
      'pxh-navigation' : {
        'remove' : 'pxh-navigation--narrow@md',
        'add' : 'pxh-navigation--wide@lg'
      },
      'pxh-login__name' : {
        'remove' : 'pxh-login__name--narrow@md',
        'add' : 'pxh-login__name--wide@lg'
      },
      'pxh-login__link' : {
        'remove' : 'pxh-login__link--narrow@md',
        'add' : 'pxh-login__link--narrow@lg'
      },
      'pxh-login__settings' : {
        'remove' : 'pxh-login__settings--narrow@md',
        'add' : 'pxh-login__settings--wide@lg'
      },
      'pxh-login__caret' : {
        'remove' : 'pxh-login__caret--narrow@md',
        'add' : 'pxh-login__caret--wide@lg'
      },
      'pxh-view' : {
        'add' : 'pxh-disable-scroll-until@lg pxh-view--narrow@lg',
        'remove' : 'pxh-view--wide@lg'
      },
      'pxh-view-header' : {
        'add' : 'pxh-view-header--narrow@lg',
        'remove' : 'pxh-view-header--wide@lg'
      },
      'pxh-view-header-drawer-toggle' : {
        'add' : 'pxh-view-header-drawer-toggle--hidden'
      }
    },
    'drawerClosed' : {
      'pxh-drawer' : {
        'add' : 'pxh-drawer--hidden-until@md pxh-drawer--narrow@md',
        'remove' : 'pxh-drawer--wide@lg'
      },
      'pxh-drawer-header__link' : {
        'remove' : 'pxh-drawer-header__link--wide@md pxh-drawer-header__link--wide@lg',
        'add' : 'pxh-drawer-header__link--narrow@md'
      },
      'pxh-overlay' : {
        'add' : 'pxh-overlay--hidden'
      },
      'pxh-navigation' : {
        'add' : 'pxh-navigation--narrow@md',
        'remove' : 'pxh-navigation--wide@lg'
      },
      'pxh-login__name' : {
        'add' : 'pxh-login__name--narrow@md',
        'remove' : 'pxh-login__name--wide@lg'
      },
      'pxh-login__link' : {
        'add' : 'pxh-login__link--narrow@md',
        'remove' : 'pxh-login__link--wide@lg'
      },
      'pxh-login__settings' : {
        'add' : 'pxh-login__settings--narrow@md',
        'remove' : 'pxh-login__settings--wide@lg'
      },
      'pxh-login__caret' : {
        'add' : 'pxh-login__caret--narrow@md',
        'remove' : 'pxh-login__caret--wide@lg'
      },
      'pxh-view' : {
        'remove' : 'pxh-disable-scroll-until@lg pxh-view--narrow@lg',
        'add' : 'pxh-view--wide@lg'
      },
      'pxh-view-header' : {
        'remove' : 'pxh-view-header--narrow@lg',
        'add' : 'pxh-view-header--wide@lg'
      },
      'pxh-view-header-drawer-toggle' : {
        'remove' : 'pxh-view-header-drawer-toggle--hidden'
      }
    }
  }

  function toggleDrawerOnLarge(mediaQueryList) {
    if (mediaQueryList.matches) {
      loadState(statesObject, 'drawerOpen');
      docCookies.setItem('pxh-drawer-narrow', 'false', 86400, '/');
      docCookies.setItem('pxh-drawer-open', 'true', 86400, '/');
    } else {
      loadState(statesObject, 'drawerClosed');
      docCookies.setItem('pxh-drawer-narrow', 'true', 86400, '/');
      docCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
    }
  }

  lgBreakpoint.addListener(toggleDrawerOnLarge);

  // make links automatically close the drawer when clicked
  function bindDrawerMediaQueryControls(targetClass, mediaQueryList) {
    var targetElements = document.getElementsByClassName(targetClass);
    if ((typeof targetElements !== 'undefined') && (targetElements.length > 0)) {
      // iterate through drawer controls and fire the toggleDrawer function when clicked
      for (var i = targetElements.length - 1; i >= 0; i--) {
        targetElements[i].addEventListener('click', function() {
          if (!mediaQueryList.matches) {
            loadState(statesObject, 'drawerClosed');
            docCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
            docCookies.setItem('pxh-drawer-narrow', 'true', 86400, '/');
          }
        })
      }
    }
  }

  bindDrawerMediaQueryControls('pxh-navigation__link', lgBreakpoint);
  bindDrawerMediaQueryControls('pxh-navigation__sub-link', lgBreakpoint);

  // add an event listener for when the DOM content is ready
  document.addEventListener('DOMContentLoaded', function(event) {
    if (docCookies.getItem('pxh-drawer-open') === null) {
      docCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
    }

    if (docCookies.getItem('pxh-drawer-narrow') === null)  {
      docCookies.setItem('pxh-drawer-narrow', 'false', 86400, '/');
    }

    // check if the "narrow" cookie is set and if we're currently at the desktop breakpoint
    if ((lgBreakpoint.matches) && (docCookies.getItem('pxh-drawer-narrow') === 'true')) {
      // toggle the drawer closed
      loadState(statesObject, 'drawerClosed');
      docCookies.setItem('pxh-drawer-narrow', 'true', 86400, '/');
    } 
    else if (lgBreakpoint.matches) {
      docCookies.setItem('pxh-drawer-open', 'true', 86400, '/');
    } else {
      docCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
    }
  });

  // toggle drawer-specific classes when drawer toggle is fired
  function toggleDrawer(event) {
    event.preventDefault();
    if (docCookies.getItem('pxh-drawer-open') === 'true') {
      loadState(statesObject, 'drawerClosed');
      docCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
      docCookies.setItem('pxh-drawer-narrow', 'true', 86400, '/');
    }
    else if (docCookies.getItem('pxh-drawer-open') === 'false') {
      loadState(statesObject, 'drawerOpen');
      docCookies.setItem('pxh-drawer-open', 'true', 86400, '/');
      docCookies.setItem('pxh-drawer-narrow', 'false', 86400, '/');
    }
  }

  function bindDrawerControls(controlClass) {
    var controlElement = document.getElementsByClassName(controlClass);
    if ((typeof controlElement !== 'undefined') && (controlElement.length > 0)) {
      // iterate through drawer controls and fire the toggleDrawer function when clicked
      for (var i = controlElement.length - 1; i >= 0; i--) {
        controlElement[i].addEventListener('click', toggleDrawer);
      }
    }
  }

  bindDrawerControls('pxh-drawer-toggle__link');
  bindDrawerControls('pxh-view-header-drawer-toggle__link');

  var pxhOverlay = document.getElementsByClassName('pxh-overlay');

  function pxhOverlayDrawerControl() {
    if ((typeof pxhOverlay !== 'undefined') && (pxhOverlay.length > 0)) {
      pxhOverlay[0].addEventListener('click', function(e) {
        console.log('clicked');
        if ((!lgBreakpoint.matches) && (docCookies.getItem('pxh-drawer-open') === 'true')) {
          loadState(statesObject, 'drawerClosed');
          docCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
          docCookies.setItem('pxh-drawer-narrow', 'true', 86400, '/');
        }
      })
    }
  }

  pxhOverlayDrawerControl();

  function pxhEscapeDrawerControl() {
    document.addEventListener("keyup", function(e) {
       if ((e.keyCode == 27) && (!lgBreakpoint.matches) && (docCookies.getItem('pxh-drawer-open') === 'true')) {
        loadState(statesObject, 'drawerClosed');
        docCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
        docCookies.setItem('pxh-drawer-narrow', 'true', 86400, '/');
      }
    })
  }

  pxhEscapeDrawerControl();


  var pxhLoginMenuToggleControl = document.getElementsByClassName('pxh-login__link');
  var pxhLoginMenuToggleTarget = document.getElementsByClassName('pxh-login-menu');

  function pxhToggleLoginMenu() {
    if ((typeof pxhLoginMenuToggleControl !== 'undefined') && (pxhLoginMenuToggleControl.length > 0) && (typeof pxhLoginMenuToggleTarget !== 'undefined') && (pxhLoginMenuToggleTarget.length > 0)) {
      // grab the first login menu and login toggle found and handle it ... ignore the rest
      pxhLoginMenuToggleControl[0].addEventListener('click', function(e) {
        e.preventDefault();
        pxhLoginMenuToggleTarget[0].classList.toggle('pxh-login-menu--visible');
      }); 
    }
  }

  pxhToggleLoginMenu();

}());
