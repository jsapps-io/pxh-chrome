'use strict';
/*! pxh-chrome.js 0.13.4 */

// **************
// CONFIG OBJECTS
// **************

var pxhStates = {
  'default' : {
    'pxh-drawer' : {
      'add' : 'pxh-drawer--hidden-until@md pxh-drawer--narrow@md pxh-drawer--wide@lg',
      'remove' : 'pxh-drawer--narrow@lg'
    },
    'pxh-drawer-header__link' : {
      'remove' : 'pxh-drawer-header__link--wide@md',
      'add' : 'pxh-drawer-header__link--narrow@md pxh-drawer-header__link--wide@lg'
    },
    'pxh-overlay' : {
      'add' : 'pxh-overlay--hidden'
    },
    'pxh-navigation' : {
      'add' : 'pxh-navigation--narrow@md pxh-navigation--wide@lg'
    },
    'pxh-login' : {
      'add' : 'pxh-login--narrow@md pxh-login--wide@lg'
    },
    'pxh-login__name' : {
      'add' : 'pxh-login__name--narrow@md pxh-login__name--wide@lg'
    },
    'pxh-login__link' : {
      'add' : 'pxh-login__link--narrow@md pxh-login__link--wide@lg'
    },
    'pxh-login__settings' : {
      'add' : 'pxh-login__settings--narrow@md pxh-login__settings--wide@lg'
    },
    'pxh-login__caret' : {
      'add' : 'pxh-login__caret--narrow@md pxh-login__caret--wide@lg',
    },
    'pxh-view' : {
      'remove' : 'pxh-disable-scroll-until@lg pxh-view--wide@lg',
      'add' : 'pxh-view--narrow@lg'
    },
    'pxh-view-header' : {
      'remove' : 'pxh-view-header--wide@lg',
      'add' : 'pxh-view-header--narrow@lg'
    },
    'pxh-view-header-drawer-toggle' : {
      'remove' : 'pxh-view-header-drawer-toggle--hidden'
    }
  },
  'open' : {
    'pxh-drawer' : {
      'remove' : 'pxh-drawer--hidden-until@md pxh-drawer--narrow@md pxh-drawer--narrow@lg',
      'add' : 'pxh-drawer--wide@lg'
    },
    'pxh-drawer-header__link' : {
      'remove' : 'pxh-drawer-header__link--narrow@md',
      'add' : 'pxh-drawer-header__link--wide@md pxh-drawer-header__link--wide@lg'
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
      'remove' : 'pxh-login__link--narrow@md pxh-login__link--narrow@lg'
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
  'narrowAtLarge' : {
    'pxh-drawer' : {
      'add' : 'pxh-drawer--hidden-until@md pxh-drawer--narrow@md pxh-drawer--narrow@lg',
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

var pxhTransitions = {
  'outToIn' : {
    'pxh-drawer' : {
      'add' : 'pxh-drawer--animate-in',
    }
  },
  'inToOut' : {
    'pxh-drawer' : {
      'add' : 'pxh-drawer--animate-out'
    }
  },
  'narrowToOpen' : {
    'pxh-drawer' : {
      'add' : 'pxh-drawer--animate-wide'
    },
    'pxh-drawer-header__link' : {
      'add' : 'pxh-drawer-header__link--animate-in'
    },
    'pxh-navigation__item-text' : {
      'add' : 'pxh-navigation__item-text--animate-in'
    },
    'pxh-navigation__sub-link' : {
      'add' : 'pxh-navigation__sub-link--animate-in'
    },
    'pxh-login' : {
      'add' : 'pxh-navigation__sub-link--animate-wide'
    },
    'pxh-login__name' : {
      'add' : 'pxh-login__name--animate-in'
    },
    'pxh-login__caret' : {
      'add' : 'pxh-login__caret--animate-in'
    },
    'pxh-login__settings' : {
      'add' : 'pxh-login__settings--animate-in'
    }
  },
  'openToNarrow' : {
    'pxh-drawer' : {
      'add' : 'pxh-drawer--animate-narrow'
    },
    'pxh-drawer-header__link' : {
      'add' : 'pxh-drawer-header__link--animate-out'
    },
    'pxh-navigation__item-text' : {
      'add' : 'pxh-navigation__item-text--animate-out'
    },
    'pxh-navigation__sub-link' : {
      'add' : 'pxh-navigation__sub-link--animate-out'
    },
    'pxh-login__name' : {
      'add' : 'pxh-login__name--animate-out'
    },
    'pxh-login__caret' : {
      'add' : 'pxh-login__caret--animate-out'
    },
    'pxh-login__settings' : {
      'add' : 'pxh-login__settings--animate-out'
    }
  },
  'outToNarrow' : {
    'pxh-drawer' : {
      'add' : 'pxh-drawer--animate-in'
    },
    'pxh-view' : {
      'add' : 'pxh-view--animate-full-to-wide'
    },
    'pxh-view-header' : {
      'add' : 'pxh-view-header--animate-full-to-wide'
    }
  },
  'narrowToOut' : {
    'pxh-drawer' : {
      'add' : 'pxh-drawer--animate-out-wide'
    },
    'pxh-drawer-header__link' : {
      'add' : 'pxh-drawer-header__link--animate-in'
    },
    'pxh-navigation__item-text' : {
      'add' : 'pxh-navigation__item-text--animate-in'
    },
    'pxh-navigation__sub-link' : {
      'add' : 'pxh-navigation__sub-link--animate-in'
    },
    'pxh-login' : {
      'add' : 'pxh-navigation__sub-link--animate-wide'
    },
    'pxh-login__name' : {
      'add' : 'pxh-login__name--animate-in'
    },
    'pxh-login__caret' : {
      'add' : 'pxh-login__caret--animate-in'
    },
    'pxh-login__settings' : {
      'add' : 'pxh-login__settings--animate-in'
    }
  },
  'wideToNarrow' : {
    'pxh-drawer' : {
      'add' : 'pxh-drawer--animate-narrow'
    },
    'pxh-drawer-header__link' : {
      'add' : 'pxh-drawer-header__link--animate-out'
    },
    'pxh-navigation__item-text' : {
      'add' : 'pxh-navigation__item-text--animate-out'
    },
    'pxh-navigation__sub-link' : {
      'add' : 'pxh-navigation__sub-link--animate-out'
    },
    'pxh-login__name' : {
      'add' : 'pxh-login__name--animate-out'
    },
    'pxh-login__caret' : {
      'add' : 'pxh-login__caret--animate-out'
    },
    'pxh-login__settings' : {
      'add' : 'pxh-login__settings--animate-out'
    },
    'pxh-view' : {
      'add' : 'pxh-view--animate-wide'
    },
    'pxh-view-header' : {
      'add' : 'pxh-view-header--animate-wide'
    }
  },
  'narrowToWide' : {
    'pxh-drawer' : {
      'add' : 'pxh-drawer--animate-wide'
    },
    'pxh-drawer-header__link' : {
      'add' : 'pxh-drawer-header__link--animate-in'
    },
    'pxh-navigation__item-text' : {
      'add' : 'pxh-navigation__item-text--animate-in'
    },
    'pxh-navigation__sub-link' : {
      'add' : 'pxh-navigation__sub-link--animate-in'
    },
    'pxh-login__name' : {
      'add' : 'pxh-login__name--animate-in'
    },
    'pxh-login__caret' : {
      'add' : 'pxh-login__caret--animate-in'
    },
    'pxh-login__settings' : {
      'add' : 'pxh-login__settings--animate-in'
    },
    'pxh-view' : {
      'add' : 'pxh-view--animate-narrow'
    },
    'pxh-view-header' : {
      'add' : 'pxh-view-header--animate-narrow'
    }
  },
  'clearAll' : {
    'pxh-drawer' : {
      'remove' : 'pxh-drawer--animate-in pxh-drawer--animate-out pxh-drawer--animate-narrow pxh-drawer--animate-wide pxh-drawer--animate-out-wide'
    },
    'pxh-drawer-header__link' : {
      'remove' : 'pxh-drawer-header__link--animate-in pxh-drawer-header__link--animate-out'
    },
    'pxh-navigation__item-text' : {
      'remove' : 'pxh-navigation__item-text--animate-in pxh-navigation__item-text--animate-out'
    },
    'pxh-navigation__sub-link' : {
      'remove' : 'pxh-navigation__sub-link--animate-in pxh-navigation__sub-link--animate-out'
    },
    'pxh-login__name' : {
      'remove' : 'pxh-login__name--animate-in pxh-login__name--animate-out'
    },
    'pxh-login__caret' : {
      'remove' : 'pxh-login__caret--animate-in pxh-login__caret--animate-out'
    },
    'pxh-login__settings' : {
      'remove' : 'pxh-login__settings--animate-in pxh-login__settings--animate-out'
    },
    'pxh-view' : {
      'remove' : 'pxh-view--animate-wide pxh-view--animate-narrow pxh-view--animate-full-to-wide'
    },
    'pxh-view-header' : {
      'remove' : 'pxh-view-header--animate-wide pxh-view-header--animate-narrow pxh-view-header--animate-full-to-wide'
    }
  }
}

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

// (function() {

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
      };
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

// })();

/*!
 * JavaScript Cookie v2.1.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    var OldCookies = window.Cookies;
    var api = window.Cookies = factory();
    api.noConflict = function () {
      window.Cookies = OldCookies;
      return api;
    };
  }
}(function () {
  function extend () {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[ i ];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }

  function init (converter) {
    function api (key, value, attributes) {
      var result;
      if (typeof document === 'undefined') {
        return;
      }

      // Write

      if (arguments.length > 1) {
        attributes = extend({
          path: '/'
        }, api.defaults, attributes);

        if (typeof attributes.expires === 'number') {
          var expires = new Date();
          expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
          attributes.expires = expires;
        }

        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}

        if (!converter.write) {
          value = encodeURIComponent(String(value))
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }

        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);

        return (document.cookie = [
          key, '=', value,
          attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
          attributes.path    && '; path=' + attributes.path,
          attributes.domain  && '; domain=' + attributes.domain,
          attributes.secure ? '; secure' : ''
        ].join(''));
      }

      // Read

      if (!key) {
        result = {};
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling "get()"
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;

      for (; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var name = parts[0].replace(rdecode, decodeURIComponent);
        var cookie = parts.slice(1).join('=');

        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          cookie = converter.read ?
            converter.read(cookie, name) : converter(cookie, name) ||
            cookie.replace(rdecode, decodeURIComponent);

          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }

          if (key === name) {
            result = cookie;
            break;
          }

          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {}
      }

      return result;
    }

    api.get = api.set = api;
    // api.set = api;
    // api.get = function (key) {
    //   return api(key);
    // };
    api.getJSON = function () {
      return api.apply({
        json: true
      }, [].slice.call(arguments));
    };
    api.defaults = {};

    api.remove = function (key, attributes) {
      api(key, '', extend(attributes, {
        expires: -1
      }));
    };

    api.removeAll = function () {
      var cookies = document.cookie.split(';');
      for (var i = cookies.length - 1; i >= 0; i--) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf('=');
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }
    }

    api.withConverter = init;

    return api;
  }

  return init(function () {});
}));

var pxhCookies = Cookies.noConflict();














function arrayExists(array) {
  if ((typeof array !== 'undefined') && (array.length > 0)) {
    return true;
  }
  else {
    return false;
  }
}

function getItemByPropertyName(haystack, propertyName) {
  for (var i in haystack) {
    if (haystack.hasOwnProperty(propertyName)) {
      return haystack[propertyName];
    }
  }
};

function pxhLoadState(stateObject, targetStateName) {
  // grab the target state object from the master states object
  var targetState = getItemByPropertyName(stateObject, targetStateName);
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

// e.g. pxhChangeClasses('nav', 'add', 'hidden--until-@md')
function pxhChangeClasses(targetClassName, changeType, classNamesToChange) {
  var targetElements = document.getElementsByClassName(targetClassName);
  if (arrayExists(targetElements) && (classNamesToChange)) {
    classNamesToChange = classNamesToChange.replace(/  +/g, ' ');
    var classNamesToChangeArray = classNamesToChange.split(' ');
    for (var i = targetElements.length - 1; i >= 0; i--) {
      for (var j = classNamesToChangeArray.length -1; j >= 0; j--) {
        if (changeType === 'add') {
          targetElements[i].classList.add(classNamesToChangeArray[j]);
        }
        else if (changeType === 'remove') {
          targetElements[i].classList.remove(classNamesToChangeArray[j]);
        }
        else if (changeType === 'toggle') {
          targetElements[i].classList.toggle(classNamesToChangeArray[j]);
        }
      }
    }
  }
}

function bindControl(controlName) {
  var controlElements = document.getElementsByClassName(controlName);
  if (arrayExists(controlElements)) {
    for (var i = controlElements.length - 1; i >= 0; i--) {
      controlElements[i].addEventListener('click', function() {
        var firstDrawer = document.getElementsByClassName('pxh-drawer')[0];
        var drawerIsAtDefaultState = firstDrawer.classList.contains('pxh-drawer--wide@lg');
        var drawerIsNarrowAtMedium = firstDrawer.classList.contains('pxh-drawer--narrow@md');
        var drawerIsHiddenAtSmall = firstDrawer.classList.contains('pxh-drawer--hidden-until@md');
        pxhLoadState(pxhTransitions, 'clearAll');
        if ((window.matchMedia('(min-width: 1024px)').matches) && (drawerIsAtDefaultState)) {
          console.log('@lg - drawer default so narrow it');
          pxhLoadState(pxhTransitions, 'wideToNarrow');
          pxhLoadState(pxhStates, 'narrowAtLarge');
          document.dispatchEvent(pxhDrawerClosed);
          pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
        }
        else if (window.matchMedia('(min-width: 1024px)').matches) {
          console.log('@lg - drawer narrow so widen it');
          pxhLoadState(pxhTransitions, 'narrowToWide');
          pxhLoadState(pxhStates, 'default');
          document.dispatchEvent(pxhDrawerOpened);
          pxhCookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
          pxhCookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
        }
        else if ((drawerIsNarrowAtMedium) && (window.matchMedia('(min-width: 768px)').matches)) {
          console.log('@md - drawer narrow so open it');
          pxhLoadState(pxhTransitions, 'narrowToOpen');
          pxhLoadState(pxhStates, 'open');
          document.dispatchEvent(pxhDrawerOpened);
          pxhCookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
          pxhCookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
        }
        else if (window.matchMedia('(min-width: 768px)').matches) {
          console.log('@md - drawer open so narrow it');
          pxhLoadState(pxhTransitions, 'openToNarrow');
          pxhLoadState(pxhStates, 'default');
          document.dispatchEvent(pxhDrawerClosed);
          pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
        }
        else if (drawerIsHiddenAtSmall) {
          console.log('@sm - drawer hidden so reveal it');
          pxhLoadState(pxhTransitions, 'outToIn');
          pxhLoadState(pxhStates, 'open');
          document.dispatchEvent(pxhDrawerOpened);
          pxhCookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
          pxhCookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
        }
        else {
          console.log('@sm - drawer revealed so hide it');
          pxhLoadState(pxhTransitions, 'inToOut');
          pxhLoadState(pxhStates, 'default');
          document.dispatchEvent(pxhDrawerClosed);
          pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
        }
      })
    }
  }
}

function handleMdBreakpoint(breakpoint) {
  console.log('@md breakpoint - removing all transitions');
  pxhLoadState(pxhTransitions, 'clearAll');
  var firstDrawer = document.getElementsByClassName('pxh-drawer')[0];
  var drawerIsAtDefaultState = firstDrawer.classList.contains('pxh-drawer--wide@lg');
  if (breakpoint.matches) {
    console.log('entered @md');
    if (drawerIsAtDefaultState) {
      console.log('drawer was at default');
      document.dispatchEvent(pxhDrawerClosed);
      pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
      pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
      pxhLoadState(pxhTransitions, 'outToNarrow');
    }
  } else {
    console.log('exited @md');
    if (drawerIsAtDefaultState) {
      console.log('drawer was at default');
      pxhLoadState(pxhTransitions, 'narrowToOut');
    }
  }
}

function handleLgBreakpoint(breakpoint) {
  console.log('@lg breakpoint - removing all transitions');
  pxhLoadState(pxhTransitions, 'clearAll');
  var firstDrawer = document.getElementsByClassName('pxh-drawer')[0];
  // var drawerIsAtNarrowAtLargeState = firstDrawer.classList.contains('pxh-drawer--narrow@lg');
  var drawerIsOpen = firstDrawer.classList.contains('pxh-drawer--wide@lg');
  if (breakpoint.matches) {
    console.log('entered @lg');
    if (drawerIsOpen) {
      console.log('drawer is open so keep it open');
      pxhLoadState(pxhTransitions, 'narrowToWide');
      pxhLoadState(pxhStates, 'default');
      pxhCookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
      pxhCookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
    }
    else {
      console.log('drawer was narrow @md so open it @lg');
      pxhLoadState(pxhTransitions, 'narrowToWide');
      pxhLoadState(pxhStates, 'default');
      document.dispatchEvent(pxhDrawerOpened);
      pxhCookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
      pxhCookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
    }
  }
  else {
    console.log('exited @lg');
    if (drawerIsOpen) {
      pxhLoadState(pxhTransitions, 'wideToNarrow');
    };
    pxhLoadState(pxhStates, 'default');
    document.dispatchEvent(pxhDrawerClosed);
    pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
    pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
  }
}














var pxhBindDrawerMediaQueryControls = function(targetClass, mediaQuery) {
  var targetElements = document.getElementsByClassName(targetClass);
  if ((typeof targetElements !== 'undefined') && (targetElements.length > 0)) {
    // iterate through drawer controls and fire the pxhToggleDrawer function when clicked
    for (var i = targetElements.length - 1; i >= 0; i--) {
      targetElements[i].addEventListener('click', function() {
        pxhLoadState(pxhTransitions, 'clearAll');
        if (!mediaQuery.matches) {
          pxhLoadState(pxhStates, 'default');
          pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
        }
      })
    }
  }
}

var pxhOverlayDrawerControl = function() {
  var pxhOverlay = document.getElementsByClassName('pxh-overlay');
  if ((typeof pxhOverlay !== 'undefined') && (pxhOverlay.length > 0)) {
    for (var i = pxhOverlay.length - 1; i >= 0; i--) {
      pxhOverlay[i].addEventListener('click', function(e) {
        if ((!lgBreakpoint.matches) && (pxhCookies.get('pxh-drawer-open') === 'true')) {
          pxhLoadState(pxhTransitions, 'clearAll');
          pxhLoadState(pxhStates, 'default');
          document.dispatchEvent(pxhDrawerClosed);
          pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});

        }
      })
    }
  }
}

var pxhEscapeDrawerControl = function() {
  document.addEventListener('keyup', function(e) {
     if ((e.keyCode == 27) && (!lgBreakpoint.matches) && (pxhCookies.get('pxh-drawer-open') === 'true')) {
      pxhLoadState(pxhTransitions, 'clearAll');
      pxhLoadState(pxhStates, 'default');
      document.dispatchEvent(pxhDrawerClosed);
      pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
      pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
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

var lgBreakpoint = window.matchMedia('(min-width: 1024px)');
var mdBreakpoint = window.matchMedia('(min-width: 768px)');
document.addEventListener('DOMContentLoaded', function(event) {
  lgBreakpoint.addListener(handleLgBreakpoint);
  mdBreakpoint.addListener(handleMdBreakpoint);
});

document.addEventListener('DOMContentLoaded', function(event) {
  bindControl('pxh-view-header-drawer-toggle');
  bindControl('pxh-drawer-toggle');

  if (pxhCookies.get('pxh-drawer-open') === null) {
    pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
  }

  if (pxhCookies.get('pxh-drawer-narrow') === null)  {
    pxhCookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
  }

  // check if the 'narrow' cookie is set and if we're currently at the desktop breakpoint
  if ((window.matchMedia('(min-width: 1024px)').matches) && (pxhCookies.get('pxh-drawer-narrow') === 'true')) {
    // toggle the drawer closed
    pxhLoadState(pxhStates, 'narrowAtLarge');
    document.dispatchEvent(pxhDrawerClosed);
    pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
  } 
  else if (window.matchMedia('(min-width: 1024px)').matches) {
    pxhCookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
  } else {
    pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
  }
  document.addEventListener('navRefreshed', function(event) {
    pxhToggleLoginMenu('pxh-login__profile-link', 'pxh-login-menu--profile', 'pxh-login-menu--visible');
    pxhToggleLoginMenu('pxh-login__settings-link', 'pxh-login-menu--settings', 'pxh-login-menu--visible');
  });

  pxhBindDrawerMediaQueryControls('pxh-navigation__link', lgBreakpoint);
  pxhBindDrawerMediaQueryControls('pxh-navigation__sub-link', lgBreakpoint);

  pxhOverlayDrawerControl();

  pxhEscapeDrawerControl();

  pxhAnywhereLoginMenuControl('pxh-login__profile-link', 'pxh-login-menu--profile', 'pxh-login-menu--visible');
  pxhAnywhereLoginMenuControl('pxh-login__settings-link', 'pxh-login-menu--settings', 'pxh-login-menu--visible');

  pxhToggleLoginMenu('pxh-login__profile-link', 'pxh-login-menu--profile', 'pxh-login-menu--visible');
  pxhToggleLoginMenu('pxh-login__settings-link', 'pxh-login-menu--settings', 'pxh-login-menu--visible');
});

var pxhView = document.getElementById('js-view');

var pxhViewResized = document.createEvent('CustomEvent');
pxhViewResized.initCustomEvent('pxhViewResized', false, false, {
    'viewResized': true
});

var pxhDrawerOpened = document.createEvent('CustomEvent');
pxhDrawerOpened.initCustomEvent('pxhDrawerOpened', false, false, {
    'drawerOpened': true
});

var pxhDrawerClosed = document.createEvent('CustomEvent');
pxhDrawerClosed.initCustomEvent('pxhDrawerClosed', false, false, {
    'drawerClosed': true
});

if (pxhView) {
  new pxhResizeSensor(pxhView, function() {
    document.dispatchEvent(pxhViewResized);
  });
}
