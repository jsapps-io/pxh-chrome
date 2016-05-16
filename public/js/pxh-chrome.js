'use strict';
/*! pxh-chrome.js 0.10.0 */

// **************
// CONFIG OBJECTS
// **************

var pxhStatesObject = {
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
    'pxh-login' : {
      'add' : 'pxh-login--wide@lg',
      'remove' : 'pxh-login--narrow@md'
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
    'pxh-login' : {
      'add' : 'pxh-login--narrow@md',
      'remove' : 'pxh-login--wide@lg'
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

// TODO: lots of functions reach into this without explicitly taking it as an input parameter, and you should probably compartmentalize your code better than that
var pxhLgBreakpoint = window.matchMedia('(min-width: 1024px)');

// *********
// FUNCTIONS
// *********

/*! css-element-queries/ResizeSensor.js 0.3.2 */

/**
 * css-element-queries/ResizeSensor.js
 * Copyright Marc J. Schmidt.
 * The MIT License (MIT)
 * https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */

(function() {

  /**
   * Class for dimension change detection.
   *
   * @param {Element|Element[]|Elements|jQuery} element
   * @param {Function} callback
   *
   * @constructor
   */
  var pxhResizeSensor = function(element, callback) {
    /**
     *
     * @constructor
     */
    function EventQueue() {
      this.q = [];
      this.add = function(ev) {
        this.q.push(ev);
      };

      var i, j;
      this.call = function() {
        for (i = 0, j = this.q.length; i < j; i++) {
          this.q[i].call();
        }

    /**
     * @param {HTMLElement} element
     * @param {String}      prop
     * @returns {String|Number}
     */
    function getComputedStyle(element, prop) {
      if (element.currentStyle) {
        return element.currentStyle[prop];
      } else if (window.getComputedStyle) {
        return window.getComputedStyle(element, null).getPropertyValue(prop);
      } else {
        return element.style[prop];
      }
    }

    /**
     *
     * @param {HTMLElement} element
     * @param {Function}    resized
     */
    function attachResizeEvent(element, resized) {
      if (!element.resizedAttached) {
        element.resizedAttached = new EventQueue();
        element.resizedAttached.add(resized);
      } else if (element.resizedAttached) {
        element.resizedAttached.add(resized);
        return;
      }

      element.pxhResizeSensor = document.createElement('div');
      element.pxhResizeSensor.className = 'resize-sensor';
      var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
      var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';

      element.pxhResizeSensor.style.cssText = style;
      element.pxhResizeSensor.innerHTML =
        '<div class="resize-sensor-expand" style="' + style + '">' +
          '<div style="' + styleChild + '"></div>' +
        '</div>' +
        '<div class="resize-sensor-shrink" style="' + style + '">' +
          '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' +
        '</div>';
      element.appendChild(element.pxhResizeSensor);

      if (!{fixed: 1, absolute: 1}[getComputedStyle(element, 'position')]) {
        element.style.position = 'relative';
      }

      var expand = element.pxhResizeSensor.childNodes[0];
      var expandChild = expand.childNodes[0];
      var shrink = element.pxhResizeSensor.childNodes[1];
      var shrinkChild = shrink.childNodes[0];

      var lastWidth, lastHeight;

      var reset = function() {
        expandChild.style.width = expand.offsetWidth + 10 + 'px';
        expandChild.style.height = expand.offsetHeight + 10 + 'px';
        expand.scrollLeft = expand.scrollWidth;
        expand.scrollTop = expand.scrollHeight;
        shrink.scrollLeft = shrink.scrollWidth;
        shrink.scrollTop = shrink.scrollHeight;
        lastWidth = element.offsetWidth;
        lastHeight = element.offsetHeight;
      };

      reset();

      var changed = function() {
        if (element.resizedAttached) {
          element.resizedAttached.call();
        }
      };

      var addEvent = function(el, name, cb) {
        if (el.attachEvent) {
          el.attachEvent('on' + name, cb);
        } else {
          el.addEventListener(name, cb);
        }
      };

      var onScroll = function() {
        if (element.offsetWidth != lastWidth || element.offsetHeight != lastHeight) {
          changed();
        }
        reset();
      };

      addEvent(expand, 'scroll', onScroll);
      addEvent(shrink, 'scroll', onScroll);
    }

    var elementType = Object.prototype.toString.call(element);
    var isCollectionTyped = ('[object Array]' === elementType
      || ('[object NodeList]' === elementType)
      || ('[object HTMLCollection]' === elementType)
      || ('undefined' !== typeof jQuery && element instanceof jQuery) //jquery
      || ('undefined' !== typeof Elements && element instanceof Elements) //mootools
    );

    if (isCollectionTyped) {
      var i = 0, j = element.length;
      for (; i < j; i++) {
        attachResizeEvent(element[i], callback);
      }
    } else {
      attachResizeEvent(element, callback);
    }

    this.detach = function() {
      if (isCollectionTyped) {
        var i = 0, j = element.length;
        for (; i < j; i++) {
          pxhResizeSensor.detach(element[i]);
        }
      } else {
        pxhResizeSensor.detach(element);
      }
    };
  };

  pxhResizeSensor.detach = function(element) {
    if (element.pxhResizeSensor) {
      element.removeChild(element.pxhResizeSensor);
      delete element.pxhResizeSensor;
      delete element.resizedAttached;
    }
  };

  // make available to common module loader
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = pxhResizeSensor;
  }
  else {
    window.pxhResizeSensor = pxhResizeSensor;
  }

})();

// :: cookies.js ::

// A complete cookies reader/writer framework with full unicode support.

// Revision #1 - September 4, 2014

// https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
// https://developer.mozilla.org/User:fusionchess

// This framework is released under the GNU Public License, version 3 or later.
// http://www.gnu.org/licenses/gpl-3.0-standalone.html

// Syntaxes:

// * pxhCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
// * pxhCookies.getItem(name)
// * pxhCookies.removeItem(name[, path[, domain]])
// * pxhCookies.hasItem(name)
// * pxhCookies.keys()

var pxhCookies = {
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
  },
  removeAll: function () {
    var cookies = document.cookie.split(';');
    for (var i = cookies.length - 1; i >= 0; i--) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf('=');
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  }
};

// toggle classes
var pxhChangeClasses = function(targetClassName, changeType, classNamesToChange) {
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

var pxhFindObjectByLabel = function(obj, label) {
  for (var i in obj) {
    if (obj.hasOwnProperty(label)) {
      return obj[label];
    }
  }
};

var pxhLoadState = function(pxhStatesObject, targetStateName) {
  // grab the target state object from the master states object
  var targetState = pxhFindObjectByLabel(pxhStatesObject, targetStateName);
  // iterate through each target class in the target state object
  for (var targetClass in targetState) {
    // grab the target state for each class in the target state
    var stateChangeTarget = targetState[targetClass];
    // iterate through each target state change (e.g. whether to add, remove, toggle)
    for (var stateChangeType in stateChangeTarget) {
      // grab the target state change classes (e.g. which classes to add, remove, or toggle)
      var stateChangeClasses = stateChangeTarget[stateChangeType];
      // change the classes of each target element based on its target class, the type of change to make, and its target classes
      pxhChangeClasses(targetClass, stateChangeType, stateChangeClasses);
    }
  }
}

var pxhToggleDrawerOnLarge = function(mediaQuery) {
  if (mediaQuery.matches) {
    pxhLoadState(pxhStatesObject, 'drawerOpen');
    pxhCookies.setItem('pxh-drawer-narrow', 'false', 86400, '/');
    pxhCookies.setItem('pxh-drawer-open', 'true', 86400, '/');
  } else {
    pxhLoadState(pxhStatesObject, 'drawerClosed');
    pxhCookies.setItem('pxh-drawer-narrow', 'true', 86400, '/');
    pxhCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
  }
}

// make links automatically close the drawer when clicked
var pxhBindDrawerMediaQueryControls = function(targetClass, mediaQuery) {
  var targetElements = document.getElementsByClassName(targetClass);
  if ((typeof targetElements !== 'undefined') && (targetElements.length > 0)) {
    // iterate through drawer controls and fire the pxhToggleDrawer function when clicked
    for (var i = targetElements.length - 1; i >= 0; i--) {
      targetElements[i].addEventListener('click', function() {
        if (!mediaQuery.matches) {
          pxhLoadState(pxhStatesObject, 'drawerClosed');
          pxhCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
          pxhCookies.setItem('pxh-drawer-narrow', 'true', 86400, '/');
        }
      })
    }
  }
}

// toggle drawer-specific classes when drawer toggle is fired
var pxhToggleDrawer = function(event) {
  event.preventDefault();
  if (pxhCookies.getItem('pxh-drawer-open') === 'true') {
    pxhLoadState(pxhStatesObject, 'drawerClosed');
    pxhCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
    pxhCookies.setItem('pxh-drawer-narrow', 'true', 86400, '/');
  }
  else if (pxhCookies.getItem('pxh-drawer-open') === 'false') {
    pxhLoadState(pxhStatesObject, 'drawerOpen');
    pxhCookies.setItem('pxh-drawer-open', 'true', 86400, '/');
    pxhCookies.setItem('pxh-drawer-narrow', 'false', 86400, '/');
  }
}

var pxhBindDrawerControls = function(controlClass) {
  var controlElement = document.getElementsByClassName(controlClass);
  if ((typeof controlElement !== 'undefined') && (controlElement.length > 0)) {
    // iterate through drawer controls and fire the pxhToggleDrawer function when clicked
    for (var i = controlElement.length - 1; i >= 0; i--) {
      controlElement[i].addEventListener('click', pxhToggleDrawer);
    }
  }
}

var pxhOverlayDrawerControl = function() {
  var pxhOverlay = document.getElementsByClassName('pxh-overlay');
  if ((typeof pxhOverlay !== 'undefined') && (pxhOverlay.length > 0)) {
    for (var i = pxhOverlay.length - 1; i >= 0; i--) {
      pxhOverlay[i].addEventListener('click', function(e) {
        if ((!pxhLgBreakpoint.matches) && (pxhCookies.getItem('pxh-drawer-open') === 'true')) {
          pxhLoadState(pxhStatesObject, 'drawerClosed');
          pxhCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
          pxhCookies.setItem('pxh-drawer-narrow', 'true', 86400, '/');
        }
      })
    }
  }
}

var pxhEscapeDrawerControl = function() {
  document.addEventListener('keyup', function(e) {
     if ((e.keyCode == 27) && (!pxhLgBreakpoint.matches) && (pxhCookies.getItem('pxh-drawer-open') === 'true')) {
      pxhLoadState(pxhStatesObject, 'drawerClosed');
      pxhCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
      pxhCookies.setItem('pxh-drawer-narrow', 'true', 86400, '/');
    }
  })
}

var pxhToggleLoginMenu = function(toggleControl, toggleTarget, toggleClass) {
  var toggleControlElement = document.getElementsByClassName(toggleControl);
  var toggleTargetElement = document.getElementsByClassName(toggleTarget);
  if ((typeof toggleControlElement !== 'undefined') && (toggleControlElement.length > 0) && (typeof toggleTargetElement !== 'undefined') && (toggleTargetElement.length > 0)) {
    for (var i = toggleControlElement.length - 1; i >= 0; i--) {
      toggleControlElement[i].addEventListener('click', function(e) {
        e.preventDefault();
        toggleTargetElement[0].classList.toggle(toggleClass);
        e.stopPropagation();
      }); 
    }
  }
}

// dismiss the login menu if the user clicks anywhere
var pxhAnywhereLoginMenuControl = function(toggleControl, toggleTarget, removeClass) {
  var controlElement = document.getElementsByClassName(toggleControl);
  var targetElement = document.getElementsByClassName(toggleTarget);
  if ((typeof controlElement !== 'undefined') && (controlElement.length > 0) && (typeof targetElement !== 'undefined') && (targetElement.length > 0)) {
    document.addEventListener('click', function(e) {
      for (var i = targetElement.length - 1; i >= 0; i--) {
        targetElement[i].classList.remove(removeClass);
      }
    });
  }
}


// ********
// FIRE!!!!
// ********

// add an event listener for when the DOM content is ready
document.addEventListener('DOMContentLoaded', function(event) {
  if (pxhCookies.getItem('pxh-drawer-open') === null) {
    pxhCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
  }

  if (pxhCookies.getItem('pxh-drawer-narrow') === null)  {
    pxhCookies.setItem('pxh-drawer-narrow', 'false', 86400, '/');
  }

  // check if the 'narrow' cookie is set and if we're currently at the desktop breakpoint
  if ((pxhLgBreakpoint.matches) && (pxhCookies.getItem('pxh-drawer-narrow') === 'true')) {
    // toggle the drawer closed
    pxhLoadState(pxhStatesObject, 'drawerClosed');
    pxhCookies.setItem('pxh-drawer-narrow', 'true', 86400, '/');
  } 
  else if (pxhLgBreakpoint.matches) {
    pxhCookies.setItem('pxh-drawer-open', 'true', 86400, '/');
  } else {
    pxhCookies.setItem('pxh-drawer-open', 'false', 86400, '/');
  }
});

pxhLgBreakpoint.addListener(pxhToggleDrawerOnLarge);

pxhBindDrawerMediaQueryControls('pxh-navigation__link', pxhLgBreakpoint);
pxhBindDrawerMediaQueryControls('pxh-navigation__sub-link', pxhLgBreakpoint);

pxhBindDrawerControls('pxh-drawer-toggle__link');
pxhBindDrawerControls('pxh-view-header-drawer-toggle__link');

pxhOverlayDrawerControl();

pxhEscapeDrawerControl();

pxhAnywhereLoginMenuControl('pxh-login__profile-link', 'pxh-login-menu--profile', 'pxh-login-menu--visible');
pxhAnywhereLoginMenuControl('pxh-login__settings-link', 'pxh-login-menu--settings', 'pxh-login-menu--visible');

pxhToggleLoginMenu('pxh-login__profile-link', 'pxh-login-menu--profile', 'pxh-login-menu--visible');
pxhToggleLoginMenu('pxh-login__settings-link', 'pxh-login-menu--settings', 'pxh-login-menu--visible');

var pxhView = document.getElementById('js-view');

var pxhViewResized = new CustomEvent('pxhViewResized', {
  'detail' : pxhView.offsetWidth
});

new ResizeSensor(pxhView, function() {
  document.dispatchEvent(pxhViewResized);
});

// document.addEventListener('pxhViewResized', function(event) {
//   console.log('pxhViewResized was fired!');
//   console.log('width changed to ' + event.detail);
// });
