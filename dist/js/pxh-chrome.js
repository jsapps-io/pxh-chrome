'use strict';
/*! pxh-chrome.js 1.0.1 */

// **************
// CONFIG OBJECTS
// **************

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var PREFIX = 'pxh-',
    NARROW = '--narrow',
    WIDE = '--wide',
    HIDDEN = '--hidden',
    VISIBLE = '--visible',
    UNTIL = '-until',
    AT_MD = '@md',
    AT_LG = '@lg',
    ANIMATE = '--animate',
    ANIMATE_IN = ANIMATE + '-in',
    ANIMATE_OUT = ANIMATE + '-out',
    ANIMATE_NARROW = ANIMATE + '-narrow',
    ANIMATE_WIDE = ANIMATE + '-wide',
    ANIMATE_FULL_TO_WIDE = ANIMATE + '-full-to-wide',
    ANIMATE_OUT_WIDE = ANIMATE + '-out-wide';

// drawer
var DRAWER = PREFIX + 'drawer',
    DRAWER_HIDDEN_UNTIL_AT_MD = DRAWER + HIDDEN + UNTIL + AT_MD,
    DRAWER_NARROW_AT_MD = DRAWER + NARROW + AT_MD,
    DRAWER_WIDE_AT_LG = DRAWER + WIDE + AT_LG,
    DRAWER_NARROW_AT_LG = DRAWER + NARROW + AT_LG,
    DRAWER_ANIMATE_IN = DRAWER + ANIMATE_IN,
    DRAWER_ANIMATE_OUT = DRAWER + ANIMATE_OUT,
    DRAWER_ANIMATE_WIDE = DRAWER + ANIMATE_WIDE,
    DRAWER_ANIMATE_NARROW = DRAWER + ANIMATE_NARROW,
    DRAWER_ANIMATE_OUT_WIDE = DRAWER + ANIMATE_OUT_WIDE;

// drawer-header__link
var DRAWER_HEADER_LINK = PREFIX + 'drawer-header__link',
    DRAWER_HEADER_LINK_WIDE_AT_MD = DRAWER_HEADER_LINK + WIDE + AT_MD,
    DRAWER_HEADER_LINK_NARROW_AT_MD = DRAWER_HEADER_LINK + NARROW + AT_MD,
    DRAWER_HEADER_LINK_WIDE_AT_LG = DRAWER_HEADER_LINK + WIDE + AT_LG,
    DRAWER_HEADER_LINK_ANIMATE_IN = DRAWER_HEADER_LINK + ANIMATE_IN,
    DRAWER_HEADER_LINK_ANIMATE_OUT = DRAWER_HEADER_LINK + ANIMATE_OUT;

// overlay
var OVERLAY = PREFIX + 'overlay',
    OVERLAY_HIDDEN = OVERLAY + HIDDEN;

// navigation
var NAVIGATION = PREFIX + 'navigation',
    NAVIGATION_NARROW_AT_MD = NAVIGATION + NARROW + AT_MD,
    NAVIGATION_WIDE_AT_LG = NAVIGATION + WIDE + AT_LG;

// navigation__item-text
var NAVIGATION_ITEM_TEXT = PREFIX + 'navigation__item-text',
    NAVIGATION_ITEM_TEXT_ANIMATE_IN = NAVIGATION_ITEM_TEXT + ANIMATE_IN,
    NAVIGATION_ITEM_TEXT_ANIMATE_OUT = NAVIGATION_ITEM_TEXT + ANIMATE_OUT;

// navigation__sub-link
var NAVIGATION_SUB_LINK = PREFIX + 'navigation__sub-link',
    NAVIGATION_SUB_LINK_ANIMATE_IN = NAVIGATION_SUB_LINK + ANIMATE_IN,
    NAVIGATION_SUB_LINK_ANIMATE_OUT = NAVIGATION_SUB_LINK + ANIMATE_OUT;

// login
var LOGIN = PREFIX + 'login',
    LOGIN_NARROW_AT_MD = LOGIN + NARROW + AT_MD,
    LOGIN_WIDE_AT_LG = LOGIN + WIDE + AT_LG;

// login__name
var LOGIN_NAME = PREFIX + 'login__name',
    LOGIN_NAME_NARROW_AT_MD = LOGIN_NAME + NARROW + AT_MD,
    LOGIN_NAME_WIDE_AT_LG = LOGIN_NAME + WIDE + AT_LG,
    LOGIN_NAME_ANIMATE_IN = LOGIN_NAME + ANIMATE_IN,
    LOGIN_NAME_ANIMATE_OUT = LOGIN_NAME + ANIMATE_OUT;

// login__link
var LOGIN_LINK = PREFIX + 'login__link',
    LOGIN_LINK_NARROW_AT_MD = LOGIN_LINK + NARROW + AT_MD,
    LOGIN_LINK_WIDE_AT_LG = LOGIN_LINK + WIDE + AT_LG,
    LOGIN_LINK_NARROW_AT_LG = LOGIN_LINK + NARROW + AT_LG;

// login__settings
var LOGIN_SETTINGS = PREFIX + 'login__settings',
    LOGIN_SETTINGS_NARROW_AT_MD = LOGIN_SETTINGS + NARROW + AT_MD,
    LOGIN_SETTINGS_WIDE_AT_LG = LOGIN_SETTINGS + WIDE + AT_LG,
    LOGIN_SETTINGS_ANIMATE_IN = LOGIN_SETTINGS + ANIMATE_IN,
    LOGIN_SETTINGS_ANIMATE_OUT = LOGIN_SETTINGS + ANIMATE_OUT;

// login__caret
var LOGIN_CARET = PREFIX + 'login__caret',
    LOGIN_CARET_NARROW_AT_MD = LOGIN_CARET + NARROW + AT_MD,
    LOGIN_CARET_WIDE_AT_LG = LOGIN_CARET + WIDE + AT_LG,
    LOGIN_CARET_ANIMATE_IN = LOGIN_CARET + ANIMATE_IN,
    LOGIN_CARET_ANIMATE_OUT = LOGIN_CARET + ANIMATE_OUT;

// view
var VIEW = PREFIX + 'view',
    VIEW_NARROW_AT_LG = VIEW + NARROW + AT_LG,
    VIEW_WIDE_AT_LG = VIEW + WIDE + AT_LG,
    VIEW_ANIMATE_FULL_TO_WIDE = VIEW + ANIMATE_FULL_TO_WIDE,
    VIEW_ANIMATE_WIDE = VIEW + ANIMATE_WIDE,
    VIEW_ANIMATE_NARROW = VIEW + ANIMATE_NARROW;

// view-header
var VIEW_HEADER = PREFIX + 'view-header',
    VIEW_HEADER_NARROW_AT_LG = VIEW_HEADER + NARROW + AT_LG,
    VIEW_HEADER_WIDE_AT_LG = VIEW_HEADER + WIDE + AT_LG,
    VIEW_HEADER_ANIMATE_WIDE = VIEW_HEADER + ANIMATE_WIDE,
    VIEW_HEADER_ANIMATE_NARROW = VIEW_HEADER + ANIMATE_NARROW,
    VIEW_HEADER_ANIMATE_FULL_TO_WIDE = VIEW_HEADER + ANIMATE_FULL_TO_WIDE;

// view-header-drawer-toggle
var VIEW_HEADER_DRAWER_TOGGLE = PREFIX + 'view-header-drawer-toggle',
    VIEW_HEADER_DRAWER_TOGGLE_HIDDEN = VIEW_HEADER_DRAWER_TOGGLE + HIDDEN;

// notifications__icon
var NOTIFICATIONS_ICON = PREFIX + 'notifications__icon',
    NOTIFICATIONS_ICON_NARROW_AT_MD = NOTIFICATIONS_ICON + NARROW + AT_MD,
    NOTIFICATIONS_ICON_WIDE_AT_LG = NOTIFICATIONS_ICON + WIDE + AT_LG;

var NOTIFICATIONS = PREFIX + 'notifications',
    NOTIFICATIONS_VISIBLE = NOTIFICATIONS + VISIBLE;

// disable-scroll
var DISABLE_SCROLL = PREFIX + 'disable-scroll',
    DISABLE_SCROLL_UNTIL_AT_LG = DISABLE_SCROLL + UNTIL + AT_LG;

var pxhStates = {
  'default': {
    'pxh-drawer': {
      'add': DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + DRAWER_NARROW_AT_MD + ' ' + DRAWER_WIDE_AT_LG,
      'remove': DRAWER_NARROW_AT_LG
    },
    'pxh-drawer-header__link': {
      'remove': DRAWER_HEADER_LINK_WIDE_AT_MD,
      'add': DRAWER_HEADER_LINK_NARROW_AT_MD + ' ' + DRAWER_HEADER_LINK_WIDE_AT_LG
    },
    'pxh-overlay': {
      'add': OVERLAY_HIDDEN
    },
    'pxh-navigation': {
      'add': NAVIGATION_NARROW_AT_MD + ' ' + NAVIGATION_WIDE_AT_LG
    },
    'pxh-login': {
      'add': LOGIN_NARROW_AT_MD + ' ' + LOGIN_WIDE_AT_LG
    },
    'pxh-login__name': {
      'add': LOGIN_NAME_NARROW_AT_MD + ' ' + LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link': {
      'add': LOGIN_LINK_NARROW_AT_MD + ' ' + LOGIN_LINK_WIDE_AT_LG
    },
    'pxh-login__settings': {
      'add': LOGIN_SETTINGS_NARROW_AT_MD + ' ' + LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret': {
      'add': LOGIN_CARET_NARROW_AT_MD + ' ' + LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-view': {
      'remove': DISABLE_SCROLL_UNTIL_AT_LG + ' ' + VIEW_WIDE_AT_LG,
      'add': VIEW_NARROW_AT_LG
    },
    'pxh-view-header': {
      'remove': VIEW_HEADER_WIDE_AT_LG,
      'add': VIEW_HEADER_NARROW_AT_LG
    },
    'pxh-view-header-drawer-toggle': {
      'remove': VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications__icon': {
      'add': NOTIFICATIONS_ICON_NARROW_AT_MD + ' ' + NOTIFICATIONS_ICON_WIDE_AT_LG
    },
    'pxh-notifications': {
      'remove': NOTIFICATIONS_VISIBLE
    }
  },
  'open': {
    'pxh-drawer': {
      'remove': DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + DRAWER_NARROW_AT_MD + ' ' + DRAWER_NARROW_AT_LG,
      'add': DRAWER_WIDE_AT_LG
    },
    'pxh-drawer-header__link': {
      'remove': DRAWER_HEADER_LINK_NARROW_AT_MD,
      'add': DRAWER_HEADER_LINK_WIDE_AT_MD + ' ' + DRAWER_HEADER_LINK_WIDE_AT_LG
    },
    'pxh-overlay': {
      'remove': OVERLAY_HIDDEN
    },
    'pxh-navigation': {
      'remove': NAVIGATION_NARROW_AT_MD,
      'add': NAVIGATION_WIDE_AT_LG
    },
    'pxh-login': {
      'add': LOGIN_WIDE_AT_LG,
      'remove': LOGIN_NARROW_AT_MD
    },
    'pxh-login__name': {
      'remove': LOGIN_NAME_NARROW_AT_MD,
      'add': LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link': {
      'remove': LOGIN_LINK_NARROW_AT_MD + ' ' + LOGIN_LINK_NARROW_AT_LG
    },
    'pxh-login__settings': {
      'remove': LOGIN_SETTINGS_NARROW_AT_MD,
      'add': LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret': {
      'remove': LOGIN_CARET_NARROW_AT_MD,
      'add': LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-view': {
      'add': DISABLE_SCROLL_UNTIL_AT_LG + ' ' + VIEW_NARROW_AT_LG,
      'remove': VIEW_WIDE_AT_LG
    },
    'pxh-view-header': {
      'add': VIEW_HEADER_NARROW_AT_LG,
      'remove': VIEW_HEADER_WIDE_AT_LG
    },
    'pxh-view-header-drawer-toggle': {
      'add': VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications__icon': {
      'remove': NOTIFICATIONS_ICON_NARROW_AT_MD,
      'add': NOTIFICATIONS_ICON_WIDE_AT_LG
    }
  },
  'narrowAtLg': {
    'pxh-drawer': {
      'add': DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + DRAWER_NARROW_AT_MD + ' ' + DRAWER_NARROW_AT_LG,
      'remove': DRAWER_WIDE_AT_LG
    },
    'pxh-drawer-header__link': {
      'remove': DRAWER_HEADER_LINK_WIDE_AT_MD + ' ' + DRAWER_HEADER_LINK_WIDE_AT_LG,
      'add': DRAWER_HEADER_LINK_NARROW_AT_MD
    },
    'pxh-overlay': {
      'add': OVERLAY_HIDDEN
    },
    'pxh-navigation': {
      'add': NAVIGATION_NARROW_AT_MD,
      'remove': NAVIGATION_WIDE_AT_LG
    },
    'pxh-login': {
      'add': LOGIN_NARROW_AT_MD,
      'remove': LOGIN_WIDE_AT_LG
    },
    'pxh-login__name': {
      'add': LOGIN_NAME_NARROW_AT_MD,
      'remove': LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link': {
      'add': LOGIN_LINK_NARROW_AT_MD,
      'remove': LOGIN_LINK_WIDE_AT_LG
    },
    'pxh-login__settings': {
      'add': LOGIN_SETTINGS_NARROW_AT_MD,
      'remove': LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret': {
      'add': LOGIN_CARET_NARROW_AT_MD,
      'remove': LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-view': {
      'remove': DISABLE_SCROLL_UNTIL_AT_LG + ' ' + VIEW_NARROW_AT_LG,
      'add': VIEW_WIDE_AT_LG
    },
    'pxh-view-header': {
      'remove': VIEW_HEADER_NARROW_AT_LG,
      'add': VIEW_HEADER_WIDE_AT_LG
    },
    'pxh-view-header-drawer-toggle': {
      'remove': VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications__icon': {
      'add': NOTIFICATIONS_ICON_NARROW_AT_MD,
      'remove': NOTIFICATIONS_ICON_WIDE_AT_LG
    },
    'pxh-notifications': {
      'remove': NOTIFICATIONS_VISIBLE
    }
  }
};

var pxhTransitions = {
  'outToIn': {
    'pxh-drawer': {
      'add': DRAWER_ANIMATE_IN
    }
  },
  'inToOut': {
    'pxh-drawer': {
      'add': DRAWER_ANIMATE_OUT
    }
  },
  'narrowToOpen': {
    'pxh-drawer': {
      'add': DRAWER_ANIMATE_WIDE
    },
    'pxh-drawer-header__link': {
      'add': DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text': {
      'add': NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link': {
      'add': NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name': {
      'add': LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret': {
      'add': LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings': {
      'add': LOGIN_SETTINGS_ANIMATE_IN
    }
  },
  'openToNarrow': {
    'pxh-drawer': {
      'add': DRAWER_ANIMATE_NARROW
    },
    'pxh-drawer-header__link': {
      'add': DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text': {
      'add': NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link': {
      'add': NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name': {
      'add': LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret': {
      'add': LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings': {
      'add': LOGIN_SETTINGS_ANIMATE_OUT
    }
  },
  'outToNarrow': {
    'pxh-drawer': {
      'add': DRAWER_ANIMATE_IN
    },
    'pxh-view': {
      'add': VIEW_ANIMATE_FULL_TO_WIDE
    },
    'pxh-view-header': {
      'add': VIEW_HEADER_ANIMATE_FULL_TO_WIDE
    }
  },
  'narrowToOut': {
    'pxh-drawer': {
      'add': DRAWER_ANIMATE_OUT_WIDE
    },
    'pxh-drawer-header__link': {
      'add': DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text': {
      'add': NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link': {
      'add': NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name': {
      'add': LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret': {
      'add': LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings': {
      'add': LOGIN_SETTINGS_ANIMATE_IN
    }
  },
  'wideToNarrow': {
    'pxh-drawer': {
      'add': DRAWER_ANIMATE_NARROW
    },
    'pxh-drawer-header__link': {
      'add': DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text': {
      'add': NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link': {
      'add': NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name': {
      'add': LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret': {
      'add': LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings': {
      'add': LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-view': {
      'add': VIEW_ANIMATE_WIDE
    },
    'pxh-view-header': {
      'add': VIEW_HEADER_ANIMATE_WIDE
    }
  },
  'narrowToWide': {
    'pxh-drawer': {
      'add': DRAWER_ANIMATE_WIDE
    },
    'pxh-drawer-header__link': {
      'add': DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text': {
      'add': NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link': {
      'add': NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name': {
      'add': LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret': {
      'add': LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings': {
      'add': LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-view': {
      'add': VIEW_ANIMATE_NARROW
    },
    'pxh-view-header': {
      'add': VIEW_HEADER_ANIMATE_NARROW
    }
  },
  'clearAll': {
    'pxh-drawer': {
      'remove': DRAWER_ANIMATE_IN + ' ' + DRAWER_ANIMATE_OUT + ' ' + DRAWER_ANIMATE_NARROW + ' ' + DRAWER_ANIMATE_WIDE + ' ' + DRAWER_ANIMATE_OUT_WIDE
    },
    'pxh-drawer-header__link': {
      'remove': DRAWER_HEADER_LINK_ANIMATE_IN + ' ' + DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text': {
      'remove': NAVIGATION_ITEM_TEXT_ANIMATE_IN + ' ' + NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link': {
      'remove': NAVIGATION_SUB_LINK_ANIMATE_IN + ' ' + NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name': {
      'remove': LOGIN_NAME_ANIMATE_IN + ' ' + LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret': {
      'remove': LOGIN_CARET_ANIMATE_IN + ' ' + LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings': {
      'remove': LOGIN_SETTINGS_ANIMATE_IN + ' ' + LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-view': {
      'remove': VIEW_ANIMATE_WIDE + ' ' + VIEW_ANIMATE_NARROW + ' ' + VIEW_ANIMATE_FULL_TO_WIDE
    },
    'pxh-view-header': {
      'remove': VIEW_HEADER_ANIMATE_WIDE + ' ' + VIEW_HEADER_ANIMATE_NARROW + ' ' + VIEW_HEADER_ANIMATE_FULL_TO_WIDE
    }
  }
};

// *********
// THIRD PARTY LIBRARIES
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
var pxhResizeSensor = function pxhResizeSensor(element, callback) {
  /**
   *
   * @constructor
   */
  function EventQueue() {
    this.q = [];
    this.add = function (ev) {
      this.q.push(ev);
    };

    var i, j;
    this.call = function () {
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
    element.pxhResizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + style + '">' + '<div style="' + styleChild + '"></div>' + '</div>' + '<div class="resize-sensor-shrink" style="' + style + '">' + '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' + '</div>';
    element.appendChild(element.pxhResizeSensor);

    if (!{ fixed: 1, absolute: 1 }[getComputedStyle(element, 'position')]) {
      element.style.position = 'relative';
    }

    var expand = element.pxhResizeSensor.childNodes[0];
    var expandChild = expand.childNodes[0];
    var shrink = element.pxhResizeSensor.childNodes[1];
    var shrinkChild = shrink.childNodes[0];

    var lastWidth, lastHeight;

    var reset = function reset() {
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

    var changed = function changed() {
      if (element.resizedAttached) {
        element.resizedAttached.call();
      }
    };

    var addEvent = function addEvent(el, name, cb) {
      if (el.attachEvent) {
        el.attachEvent('on' + name, cb);
      } else {
        el.addEventListener(name, cb);
      }
    };

    var onScroll = function onScroll() {
      if (element.offsetWidth != lastWidth || element.offsetHeight != lastHeight) {
        changed();
      }
      reset();
    };

    addEvent(expand, 'scroll', onScroll);
    addEvent(shrink, 'scroll', onScroll);
  }

  var elementType = Object.prototype.toString.call(element);
  var isCollectionTyped = '[object Array]' === elementType || '[object NodeList]' === elementType || '[object HTMLCollection]' === elementType || 'undefined' !== typeof jQuery && element instanceof jQuery //jquery
  || 'undefined' !== typeof Elements && element instanceof Elements //mootools
  ;

  if (isCollectionTyped) {
    var i = 0,
        j = element.length;
    for (; i < j; i++) {
      attachResizeEvent(element[i], callback);
    }
  } else {
    attachResizeEvent(element, callback);
  }

  this.detach = function () {
    if (isCollectionTyped) {
      var i = 0,
          j = element.length;
      for (; i < j; i++) {
        pxhResizeSensor.detach(element[i]);
      }
    } else {
      pxhResizeSensor.detach(element);
    }
  };
};

pxhResizeSensor.detach = function (element) {
  if (element.pxhResizeSensor) {
    element.removeChild(element.pxhResizeSensor);
    delete element.pxhResizeSensor;
    delete element.resizedAttached;
  }
};

// make available to common module loader
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = pxhResizeSensor;
} else {
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
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory();
  } else {
    var OldCookies = window.Cookies;
    var api = window.Cookies = factory();
    api.noConflict = function () {
      window.Cookies = OldCookies;
      return api;
    };
  }
})(function () {
  function extend() {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[i];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }

  function init(converter) {
    function api(key, value, attributes) {
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
          value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }

        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);

        return document.cookie = [key, '=', value, attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
        attributes.path && '; path=' + attributes.path, attributes.domain && '; domain=' + attributes.domain, attributes.secure ? '; secure' : ''].join('');
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
          cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

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
    };

    api.withConverter = init;

    return api;
  }

  return init(function () {});
});

var pxhCookies = Cookies.noConflict();

// *********
// GENERIC FUNCTIONS
// *********

// polyfill to support .remove() in IE11
// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove

if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

/* arrayExists() */
var arrayExists = function arrayExists(array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    return true;
  } else {
    return false;
  }
};

/* getItemByPropertyName() */
var getItemByPropertyName = function getItemByPropertyName(haystack, propertyName) {
  for (var i in haystack) {
    if (haystack.hasOwnProperty(propertyName)) {
      return haystack[propertyName];
    }
  }
};

/* pxhLoadState() */
var pxhLoadState = function pxhLoadState(stateObject, targetStateName) {
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
};

/* pxhChangeClasses() */
// e.g. pxhChangeClasses('nav', 'add', 'hidden--until-@md')
var pxhChangeClasses = function pxhChangeClasses(targetClassName, changeType, classNamesToChange) {
  var targetElements = document.getElementsByClassName(targetClassName);
  if (arrayExists(targetElements) && classNamesToChange) {
    classNamesToChange = classNamesToChange.replace(/  +/g, ' ');
    var classNamesToChangeArray = classNamesToChange.split(' ');
    for (var i = targetElements.length - 1; i >= 0; i--) {
      for (var j = classNamesToChangeArray.length - 1; j >= 0; j--) {
        if (changeType === 'add') {
          targetElements[i].classList.add(classNamesToChangeArray[j]);
        } else if (changeType === 'remove') {
          targetElements[i].classList.remove(classNamesToChangeArray[j]);
        } else if (changeType === 'toggle') {
          targetElements[i].classList.toggle(classNamesToChangeArray[j]);
        }
      }
    }
  }
};

/* pxhBindControl() */
var pxhBindControl = function pxhBindControl(controlName) {
  var controlElements = document.getElementsByClassName(controlName);
  if (arrayExists(controlElements)) {
    for (var i = controlElements.length - 1; i >= 0; i--) {
      controlElements[i].addEventListener('click', function () {
        var firstDrawer = document.getElementsByClassName('pxh-drawer')[0];
        var drawerIsAtDefaultState = firstDrawer.classList.contains('pxh-drawer--wide@lg');
        var drawerIsNarrowAtMd = firstDrawer.classList.contains('pxh-drawer--narrow@md');
        var drawerIsHiddenAtSm = firstDrawer.classList.contains('pxh-drawer--hidden-until@md');
        pxhLoadState(pxhTransitions, 'clearAll');
        if (window.matchMedia('(min-width: 1024px)').matches && drawerIsAtDefaultState) {
          pxhLoadState(pxhTransitions, 'wideToNarrow');
          pxhLoadState(pxhStates, 'narrowAtLg');
          document.dispatchEvent(pxhDrawerClosed);
          pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        } else if (window.matchMedia('(min-width: 1024px)').matches) {
          pxhLoadState(pxhTransitions, 'narrowToWide');
          pxhLoadState(pxhStates, 'default');
          document.dispatchEvent(pxhDrawerOpened);
          pxhCookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
          pxhCookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
        } else if (drawerIsNarrowAtMd && window.matchMedia('(min-width: 768px)').matches) {
          pxhLoadState(pxhTransitions, 'narrowToOpen');
          pxhLoadState(pxhStates, 'open');
          document.dispatchEvent(pxhDrawerOpened);
          pxhCookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
          pxhCookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
        } else if (window.matchMedia('(min-width: 768px)').matches) {
          pxhLoadState(pxhTransitions, 'openToNarrow');
          pxhLoadState(pxhStates, 'default');
          document.dispatchEvent(pxhDrawerClosed);
          pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        } else if (drawerIsHiddenAtSm) {
          pxhLoadState(pxhTransitions, 'outToIn');
          pxhLoadState(pxhStates, 'open');
          document.dispatchEvent(pxhDrawerOpened);
          pxhCookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
          pxhCookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
        } else {
          pxhLoadState(pxhTransitions, 'inToOut');
          pxhLoadState(pxhStates, 'default');
          document.dispatchEvent(pxhDrawerClosed);
          pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        }
      });
    }
  }
};

var pxhBreakpointAtMd = function pxhBreakpointAtMd(breakpoint) {
  pxhLoadState(pxhTransitions, 'clearAll');
  var firstDrawer = document.getElementsByClassName('pxh-drawer')[0];
  var drawerIsWideAtLg = firstDrawer.classList.contains('pxh-drawer--wide@lg');
  var drawerIsNarrowAtMd = firstDrawer.classList.contains('pxh-drawer--narrow@md');
  if (breakpoint.matches) {
    // we entered the @md breakpoint from the @sm breakpoint
    if (drawerIsNarrowAtMd) {
      // the drawer wasn't open @sm so open it to narrow @md
      // fire the transition
      pxhLoadState(pxhTransitions, 'outToNarrow');
    }
  } else {
    // we exited the @md breakpoint into the @sm breakpoint
    if (drawerIsNarrowAtMd) {
      // the drawer was open to narrow @md to move it out @sm
      pxhLoadState(pxhTransitions, 'narrowToOut');
    }
  }
};

var pxhBreakpointAtLg = function pxhBreakpointAtLg(breakpoint) {
  pxhLoadState(pxhTransitions, 'clearAll');
  var firstDrawer = document.getElementsByClassName('pxh-drawer')[0];
  var drawerIsWideAtLg = firstDrawer.classList.contains('pxh-drawer--wide@lg');
  var drawerIsNarrowAtMd = firstDrawer.classList.contains('pxh-drawer--narrow@md');
  if (breakpoint.matches) {
    // we entered the @lg breakpoint from the @md breakpoint
    if (drawerIsWideAtLg && !drawerIsNarrowAtMd) {
      // the drawer was open @md so keep it open @lg
      // don't fire any transitions
      pxhLoadState(pxhStates, 'default');
      pxhCookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
      pxhCookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
    } else {
      // drawer was narrow @md so transition it to wide @lg
      // fire transitions
      pxhLoadState(pxhTransitions, 'narrowToWide');
      pxhLoadState(pxhStates, 'default');
      document.dispatchEvent(pxhDrawerOpened);
      pxhCookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
      pxhCookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
    }
  } else {
    // we exited the @lg breakpoint into the @md breakpoint
    if (drawerIsWideAtLg) {
      // the drawer was wide @lg so transition it to narrow @md
      // fire transitions
      pxhLoadState(pxhTransitions, 'wideToNarrow');
    };
    pxhLoadState(pxhStates, 'default');
    document.dispatchEvent(pxhDrawerClosed);
    pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
    pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
  }
};

var pxhBindDrawerMediaQueryControls = function pxhBindDrawerMediaQueryControls(targetClass, mediaQuery) {
  var targetElements = document.getElementsByClassName(targetClass);
  if (arrayExists(targetElements)) {
    // iterate through drawer controls and fire the pxhToggleDrawer function when clicked
    for (var i = targetElements.length - 1; i >= 0; i--) {
      targetElements[i].addEventListener('click', function () {
        pxhLoadState(pxhTransitions, 'clearAll');
        if (!mediaQuery.matches) {
          pxhLoadState(pxhStates, 'default');
          pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        }
      });
    }
  }
};

var pxhOverlayDrawerControl = function pxhOverlayDrawerControl() {
  var pxhOverlay = document.getElementsByClassName('pxh-overlay');
  var pxhNotifications = document.getElementsByClassName('pxh-notifications');
  if (arrayExists(pxhOverlay)) {
    for (var i = pxhOverlay.length - 1; i >= 0; i--) {
      pxhOverlay[i].addEventListener('click', function (e) {
        if (!lgBreakpoint.matches && pxhCookies.get('pxh-drawer-open') === 'true') {
          // if the notifications list is visible, close it when clicking the overlay but don't close the drawer
          if (arrayExists(pxhNotifications) && pxhNotifications[0].classList.contains('pxh-notifications--visible')) {
            pxhNotifications[0].classList.remove('pxh-notifications--visible');
          } else {
            pxhLoadState(pxhTransitions, 'clearAll');
            pxhLoadState(pxhStates, 'default');
            document.dispatchEvent(pxhDrawerClosed);
            pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
            pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
          }
        }
      });
    }
  }
};

var pxhEscapeDrawerControl = function pxhEscapeDrawerControl() {
  document.addEventListener('keyup', function (e) {
    if (e.keyCode == 27 && !lgBreakpoint.matches && pxhCookies.get('pxh-drawer-open') === 'true') {
      pxhLoadState(pxhTransitions, 'clearAll');
      pxhLoadState(pxhStates, 'default');
      document.dispatchEvent(pxhDrawerClosed);
      pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
      pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
    }
  });
};

var pxhToggleLoginMenu = function pxhToggleLoginMenu(toggleControl, toggleTarget, toggleClass) {
  var toggleControlElements = document.getElementsByClassName(toggleControl);
  var toggleTargetElements = document.getElementsByClassName(toggleTarget);
  if (arrayExists(toggleControlElements) && arrayExists(toggleTargetElements)) {
    for (var i = toggleControlElements.length - 1; i >= 0; i--) {
      toggleControlElements[i].addEventListener('click', function (e) {
        e.preventDefault();
        var menuIsVisible = toggleTargetElements[0].classList.contains(toggleClass);
        pxhChangeClasses('pxh-login-menu', 'remove', toggleClass);
        if (!menuIsVisible) {
          pxhChangeClasses(toggleTarget, 'toggle', toggleClass);
        }
        e.stopPropagation();
      });
    }
  }
};

// dismiss the login menu if the user clicks anywhere
var pxhAnywhereLoginMenuControl = function pxhAnywhereLoginMenuControl(toggleControl, toggleTarget, removeClass) {
  var controlElement = document.getElementsByClassName(toggleControl);
  var targetElement = document.getElementsByClassName(toggleTarget);
  if (arrayExists(controlElement) && arrayExists(targetElement)) {
    document.addEventListener('click', function (e) {
      pxhChangeClasses(toggleTarget, 'remove', removeClass);
    });
  }
};

var pxhAddResizeSensor = function pxhAddResizeSensor(targetId) {
  var targetElement = document.getElementById(targetId);
  if (targetElement) {
    new pxhResizeSensor(targetElement, function () {
      document.dispatchEvent(pxhViewResized);
    });
  }
};

// this is a total hack
var pxhToggleNotifications = function pxhToggleNotifications(toggleControl, toggleTarget, toggleClass) {
  var controlElement = document.getElementsByClassName(toggleControl);
  var targetElement = document.getElementsByClassName(toggleTarget);
  if (arrayExists(controlElement) && arrayExists(targetElement)) {
    controlElement[0].addEventListener('click', function (e) {
      pxhChangeClasses(toggleTarget, 'toggle', toggleClass);
    });
  }
};

// type : 'green' // green, blue, orange, red
// isPersistent : false // true, false
// icon : 'info-circle' // any Font Awesome icon slug
// text : 'This is the text for notification #1.'
// actionLabel : 'View'
// actionLink : 'http://google.com' // fully qualified link or route
// actionCallback : // callback function
// timestamp: '9:36 AM'

var toastObject1 = {
  value: 'something'
};

var toastObject2 = {
  type: 'orange',
  isPersistent: true,
  icon: 'exclamation-circle',
  text: 'It can be this long or longer if you want. In fact, it can be really, really long if you have a lot you want to say. We kind of discourage this much content but knock yourself out! Just keep talking and talking and talking and this area will keep expanding and expanding.',
  actionLabel: 'View a lot of things right now',
  actionLink: 'http://google.com',
  timestamp: '9:36 AM'
};

var toastObject3 = {
  type: 'blue',
  isPersistent: false,
  icon: 'info-circle',
  text: 'It can be this long or longer if you want. In fact, it can be really, really long if you have a lot you want to say. We kind of discourage this much content but knock yourself out! Just keep talking and talking and talking and this area will keep expanding and expanding.',
  actionLabel: 'View a lot of things right now',
  actionLink: 'http://google.com'
};

var toastObject4 = {
  type: 'red',
  isPersistent: false,
  icon: 'times-circle',
  text: 'Fourth notification? Coming right up!',
  actionLabel: 'Beef',
  actionLink: 'http://beef.org'
};

var toast = {
  badge: {
    count: 0,
    increment: function increment() {
      toast.badge.count = toast.badge.count + 1;
      if (toast.badge.count > 9) {
        toast.badge.text = '9+';
      } else if (toast.badge.count < 0) {
        toast.badge.count = 0;
        toast.badge.text = 0;
      } else {
        toast.badge.text = toast.badge.count;
      }
      toast.badge.update();
    },
    decrement: function decrement() {
      toast.badge.count = toast.badge.count - 1;
      if (toast.badge.count > 9) {
        toast.badge.text = '9+';
      } else if (toast.badge.count < 0) {
        toast.badge.count = 0;
        toast.badge.text = 0;
      } else {
        toast.badge.text = toast.badge.count;
      }
      toast.badge.update();
    },
    update: function update() {
      var notificationIcon = '';
      var notificationBadge = '';
      if (notificationBadge = document.getElementById('js-notifications__icon-badge')) {
        if (toast.badge.count > 0) {
          notificationBadge.innerHTML = toast.badge.text;
          notificationBadge.classList.remove('pxh-notifications__icon-badge--hidden');
          if (notificationIcon = document.getElementById('js-notifications__icon')) {
            // notificationIcon.classList.remove('pxh-notifications__icon--narrow@md');
          }
        } else {
          notificationBadge.classList.add('pxh-notifications__icon-badge--hidden');
          // notificationIcon.classList.add('pxh-notifications__icon--narrow@md');
        }
      }
    }
  },

  add: function add(object) {
    var id = Math.floor(Math.random() * 16777215).toString(16);
    var notificationList = '';
    var toastList = '';
    if ((notificationList = document.getElementById('js-notifications__list')) && (object.actionLink || object.actionCallback)) {
      var notificationFirstChild = notificationList.firstChild;
      var notificationElement = notificationList.insertBefore(toast.markup.createNotification(object, id), notificationFirstChild);
      toast.badge.increment();
      toast.action.dismissButton(notificationElement, 'notification', id);
      toast.action.expandButton(notificationElement, 'notification');
    }
    if (toastList = document.getElementById('js-toasts')) {
      var toastFirstChild = toastList.firstChild;
      var toastElement = toastList.insertBefore(toast.markup.createToast(object, id), toastFirstChild);
      toast.action.dismissButton(toastElement, 'toast', id);
      toast.action.expandButton(toastElement, 'toast');
      if (!object.isPersistent) {
        setTimeout(function () {
          if (!toastElement.classList.contains('pxh-toast--expanded')) {
            // after 2000ms animate the toast out
            toast.autoHide(id);
            // 1000ms after the animation, remove the notification from the DOM
            setTimeout(function () {
              toast.autoRemove(id);
            }, 1000);
          }
        }, 5000);
      }
    }
  },

  action: {
    dismissButton: function dismissButton(element, slug, id) {
      var button = document.getElementById('js-' + slug + '__dismiss-button--' + id);
      if (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          toast.hide(id);
          setTimeout(function () {
            toast.remove(id);
          }, 1000);
        });
      }
    },

    expandButton: function expandButton(element, slug) {
      var button = element.querySelector('.js-' + slug + '__more-button');
      if (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          toast.expand(element, slug);
        });
      }
    },

    removeAllButton: function removeAllButton() {
      toast.hideAll();
      setTimeout(function () {
        toast.removeAll();
      }, 1000);
    }
  },

  hide: function hide(id) {
    var toastList = '';
    var toast = '';
    var notificationList = '';
    var notification = '';
    if ((toastList = document.getElementById('js-toasts')) && (toast = document.getElementById('js-toast--' + id))) {
      toast.classList.add('pxh-toast--animate-out');
      toast.classList.remove('pxh-toast--animate-in');
    }
    if ((notificationList = document.getElementById('js-notifications__list')) && (notification = document.getElementById('js-notification--' + id))) {
      notification.classList.add('pxh-notification--animate-out');
      notification.classList.remove('pxh-notification--animate-in');
    }
  },

  hideAll: function hideAll() {
    var notificationList = '';
    var notifications = [];
    if ((notificationList = document.getElementById('js-notifications__list')) && (notifications = document.getElementsByClassName('pxh-notification'))) {
      for (var i = notifications.length - 1; i >= 0; i--) {
        var id = notifications[i].id.replace('js-notification--', '');
        toast.hide(id);
      }
    }
  },

  autoHide: function autoHide(id) {
    var toastList = '';
    var toast = '';
    if ((toastList = document.getElementById('js-toasts')) && (toast = document.getElementById('js-toast--' + id))) {
      toast.classList.add('pxh-toast--animate-out');
      toast.classList.remove('pxh-toast--animate-in');
    }
  },

  remove: function remove(id) {
    var toastList = '';
    var toastElement = '';
    var notificationList = '';
    var notification = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastElement = document.getElementById('js-toast--' + id))) {
      toastElement.remove();
    }
    if ((notificationList = document.getElementById('js-notifications__list')) && (notification = document.getElementById('js-notification--' + id))) {
      notification.remove();
      toast.badge.decrement();
    }
  },

  autoRemove: function autoRemove(id) {
    var toastList = '';
    var toastElement = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastElement = document.getElementById('js-toast--' + id))) {
      toastElement.remove();
    }
  },

  removeAll: function removeAll() {
    var notificationList = '';
    var notifications = [];
    if ((notificationList = document.getElementById('js-notifications__list')) && (notifications = document.getElementsByClassName('pxh-notification'))) {
      for (var i = notifications.length - 1; i >= 0; i--) {
        var id = notifications[i].id.replace('js-notification--', '');
        toast.remove(id);
      }
    }
  },

  expand: function expand(element, slug) {
    if (element.classList.contains('pxh-' + slug + '--expanded')) {
      element.classList.remove('pxh-' + slug + '--expanded');
      element.querySelector('.pxh-' + slug + '__more').classList.remove('pxh-' + slug + '__more--expanded');
      element.querySelector('.pxh-' + slug + '__more-button').innerHTML = 'Show more';
    } else {
      element.classList.remove('pxh-' + slug + '--animate-in');
      element.classList.add('pxh-' + slug + '--expanded');
      element.querySelector('.pxh-' + slug + '__more').classList.add('pxh-' + slug + '__more--expanded');
      element.querySelector('.pxh-' + slug + '__more-button').innerHTML = 'Show less';
    }
  },

  markup: {
    icon: function icon(object, slug) {
      var icon = object.icon ? object.icon : 'info-circle';
      var type = object.type ? object.type : 'blue';
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__icon pxh-' + slug + '__icon--' + type + '">\n');
      markup.push('  <i class="fa fa-' + icon + '"></i>\n');
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    toastText: function toastText(object, slug) {
      var text = object.text ? object.text : 'You received a new notification.';
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__text">\n');
      markup.push('  ' + text + '\n');
      markup.push(toast.markup.more(object, slug));
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    notificationText: function notificationText(object, slug) {
      var text = object.text ? object.text : 'You received a new notification.';
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__text">\n');
      if (object.actionLink) {
        markup.push('  <a class="pxh-' + slug + '__link" href="' + object.actionLink + '">\n');
      } else if (object.actionCallback) {
        markup.push('  <a class="pxh-' + slug + '__link" href="#">actionCallback: ' + object.actionCallback + ' ' + '\n');
      }
      markup.push('  ' + text + '\n');
      if (object.actionLink || object.actionCallback) {
        markup.push('  </a>\n');
      }
      markup.push(toast.markup.more(object, slug));
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    more: function more(object, slug) {
      var markup = [];
      markup.push('  <div class="pxh-' + slug + '__more">\n');
      markup.push('    <a href="#" class="pxh-' + slug + '__more-button js-' + slug + '__more-button">\n');
      markup.push('      Show more\n');
      markup.push('    </a>\n');
      markup.push('  </div>\n');
      markup = markup.join('');
      return markup;
    },

    timestamp: function timestamp(object, slug) {
      var timestamp = object.timestamp ? object.timestamp : false;
      var markup = [];
      if (timestamp) {
        markup.push('<div class="pxh-' + slug + '__timestamp">\n');
        markup.push('  ' + timestamp + '\n');
        markup.push('</div>\n');
      }
      markup = markup.join('');
      return markup;
    },

    dismiss: function dismiss(object, slug, id) {
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__dismiss">\n');
      markup.push('  <a href="#" class="pxh-' + slug + '__dismiss-button js-' + slug + '__dismiss-button" id="js-' + slug + '__dismiss-button--' + id + '">\n');
      markup.push('    <i class="fa fa-times"></i>\n');
      markup.push('  </a>\n');
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    button: function button(object, slug) {
      var markup = [];
      if (object.actionLink) {
        markup.push('<div class="pxh-' + slug + '__action">\n');
        markup.push('  <a class="pxh-' + slug + '__button" href="' + object.actionLink + '">' + object.actionLabel + '</a>\n');
        markup.push('</div>\n');
      } else if (object.actionCallback) {
        markup.push('<div class="pxh-' + slug + '__action">\n');
        markup.push('  <a class="pxh-' + slug + '__button" href="#">actionCallback: ' + object.actionCallback + object.actionLabel + '</a>\n');
        markup.push('</div>\n');
      }
      markup = markup.join('');
      return markup;
    },

    createToast: function createToast(object, id) {
      var slug = 'toast';
      var element = document.createElement('div');
      element.className = 'pxh-' + slug + ' pxh-' + slug + '--animate-in';
      element.id = 'js-' + slug + '--' + id;
      var markup = [];
      markup.push(toast.markup.icon(object, slug));
      markup.push(toast.markup.toastText(object, slug));
      markup.push(toast.markup.button(object, slug));
      // if (object.timestamp) {
      //   markup.push(toast.markup.timestamp(object, slug));
      // }
      markup.push(toast.markup.dismiss(object, slug, id));
      markup = markup.join('');
      element.innerHTML = markup;
      return element;
    },

    createNotification: function createNotification(object, id) {
      var slug = 'notification';
      var element = document.createElement('div');
      // element.className = 'pxh-' + slug + ' pxh-' + slug + '--animate-in';
      element.className = 'pxh-' + slug;
      element.id = 'js-' + slug + '--' + id;
      var markup = [];
      markup.push(toast.markup.icon(object, slug));
      markup.push(toast.markup.notificationText(object, slug));
      markup.push(toast.markup.timestamp(object, slug));
      markup.push(toast.markup.dismiss(object, slug, id));
      markup = markup.join('');
      element.innerHTML = markup;
      return element;
    }
  }
};

document.addEventListener('DOMContentLoaded', function (event) {
  toast.add(toastObject1);
  toast.add(toastObject2);
});

if (document.getElementById('js-toast-emitter')) {
  document.getElementById('js-toast-emitter').addEventListener('click', function () {
    toast.add(toastObject3);
  });
}

if (document.getElementById('js-notifications__link--clear')) {
  document.getElementById('js-notifications__link--clear').addEventListener('click', function () {
    toast.action.removeAllButton();
  });
}

// ********
// FIRE!!!!
// ********

var lgBreakpoint = window.matchMedia('(min-width: 1024px)');
var mdBreakpoint = window.matchMedia('(min-width: 768px)');
document.addEventListener('DOMContentLoaded', function (event) {
  lgBreakpoint.addListener(pxhBreakpointAtLg);
  mdBreakpoint.addListener(pxhBreakpointAtMd);
});

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

document.addEventListener('DOMContentLoaded', function (event) {
  pxhBindControl('pxh-view-header-drawer-toggle');
  pxhBindControl('pxh-drawer-toggle');

  if (pxhCookies.get('pxh-drawer-open') === null) {
    pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
  }

  if (pxhCookies.get('pxh-drawer-narrow') === null) {
    pxhCookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
  }

  // check if the 'narrow' cookie is set and if we're currently at the desktop breakpoint
  if (window.matchMedia('(min-width: 1024px)').matches && pxhCookies.get('pxh-drawer-narrow') === 'true') {
    // toggle the drawer closed
    pxhLoadState(pxhStates, 'narrowAtLg');
    document.dispatchEvent(pxhDrawerClosed);
    pxhCookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
  } else if (window.matchMedia('(min-width: 1024px)').matches) {
    pxhCookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
  } else {
    pxhCookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
  }
  document.addEventListener('navRefreshed', function (event) {
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

  pxhToggleNotifications('pxh-notifications__icon', 'pxh-notifications', 'pxh-notifications--visible');

  pxhAddResizeSensor('js-view');
});
//# sourceMappingURL=pxh-chrome.js.map
