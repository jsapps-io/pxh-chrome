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

  function loadState(stateObject) {
    if (stateObject) {
      // iterate through each target class
      for (var targetClass in stateObject) {
        var stateChangeTarget = stateObject[targetClass];
        // var stateChangeTargetName = Object.getOwnPropertyNames(stateChangeTarget);
        // within each target class, iterate through each state change
        for (var stateChangeType in stateChangeTarget) {
          var stateChangeClasses = stateChangeTarget[stateChangeType];
          // now that we have everything, let's feed it to changeClasses
          changeClasses(targetClass, stateChangeType, stateChangeClasses);
        }
      }
    }
  }

  var statesObject = {
    'drawerOpen' : {
      'pxh-drawer' : {
        'remove' : 'pxh-drawer--hidden-until@md pxh-drawer--narrow@md'
      },
      'pxh-overlay' : {
        'remove' : 'pxh-overlay--hidden'
      },
      'pxh-navigation' : {
        'remove' : 'pxh-navigation--narrow@md'
      },
      'pxh-login__name' : {
        'remove' : 'pxh-login__name--narrow@md'
      },
      'pxh-login__link' : {
        'remove' : 'pxh-login__link--narrow@md'
      },
      'pxh-login__settings' : {
        'remove' : 'pxh-login__settings--narrow@md'
      },
      'pxh-login__caret' : {
        'remove' : 'pxh-login__caret--narrow@md'
      },
      'pxh-view' : {
        'add' : 'pxh-disable-scroll-until@lg',
        'add' : 'pxh-view--narrow@lg'
      },
      'pxh-view-header' : {
        'add' : 'pxh-view-header--narrow@lg'
      },
      'pxh-view-header-drawer-toggle' : {
        'add' : 'pxh-view-header-drawer-toggle--hidden'
      }
    },
    'drawerClosed' : {
      'pxh-drawer' : {
        'add' : 'pxh-drawer--hidden-until@md pxh-drawer--narrow@md'
      },
      'pxh-overlay' : {
        'add' : 'pxh-overlay--hidden'
      },
      'pxh-navigation' : {
        'add' : 'pxh-navigation--narrow@md'
      },
      'pxh-login__name' : {
        'add' : 'pxh-login__name--narrow@md'
      },
      'pxh-login__link' : {
        'add' : 'pxh-login__link--narrow@md'
      },
      'pxh-login__settings' : {
        'add' : 'pxh-login__settings--narrow@md'
      },
      'pxh-login__caret' : {
        'add' : 'pxh-login__caret--narrow@md'
      },
      'pxh-view' : {
        'remove' : 'pxh-disable-scroll-until@lg',
        'remove' : 'pxh-view--narrow@lg'
      },
      'pxh-view-header' : {
        'remove' : 'pxh-view-header--narrow@lg'
      },
      'pxh-view-header-drawer-toggle' : {
        'remove' : 'pxh-view-header-drawer-toggle--hidden'
      }
    }
  }

  // add an event listener for when the DOM content is ready
  document.addEventListener('DOMContentLoaded', function(event) {
    // check if the "narrow" cookie is set and if we're currently at the desktop breakpoint
    if ((docCookies.getItem('pxh-drawer-state') === 'narrow') && (lgBreakpoint.matches)) {
      // toggle the drawer closed
      loadState(stateToggleObject);
      docCookies.setItem('pxh-drawer-state', 'narrow', 86400, '/');
    }
    if (!docCookies.getItem('pxh-drawer-state')) {
      docCookies.setItem('pxh-drawer-state', 'wide', 86400, '/');
    }
  });

  // toggle drawer-specific classes when drawer toggle is fired
  function toggleDrawer(event) {
    loadState(stateToggleObject);
    console.log(docCookies.getItem('pxh-drawer-state'));
    if (lgBreakpoint.matches) {
      if (docCookies.getItem('pxh-drawer-state') === 'narrow') {
        docCookies.setItem('pxh-drawer-state', 'wide', 86400, '/');
      } 
      else if (docCookies.getItem('pxh-drawer-state') === 'wide') {
        docCookies.setItem('pxh-drawer-state', 'narrow', 86400, '/');
      }
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

  var pxhLoginMenuToggleControl = document.querySelector('.pxh-login__link');
  var pxhLoginMenuToggleTarget = document.querySelector('.pxh-login-menu');

  function pxhToggleLoginMenu() {
    if ((pxhLoginMenuToggleControl) && (pxhLoginMenuToggleTarget)) {
      pxhLoginMenuToggleControl.addEventListener('click', function(e) {
        e.preventDefault();
        pxhLoginMenuToggleTarget.classList.toggle('pxh-login-menu--visible');
      }); 
    }
  }

  pxhToggleLoginMenu();

}());
