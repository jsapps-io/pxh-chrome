'use strict';
/*! drawer.pxh-chrome.js 1.7.0 */

// **************
// CONFIG OBJECTS
// **************

/** @namespace window.pxh */
if (!window.pxh) window.pxh = {};

window.pxh.states = {
  'default' : {
    'pxh-drawer' : {
      'add' : window.pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_MD + ' ' + window.pxh.DRAWER_WIDE_AT_LG,
      'remove' : window.pxh.DRAWER_NARROW_AT_LG
    },
    'pxh-drawer-header__link' : {
      'remove' : window.pxh.DRAWER_HEADER_LINK_WIDE_AT_MD,
      'add' : window.pxh.DRAWER_HEADER_LINK_NARROW_AT_MD + ' ' + window.pxh.DRAWER_HEADER_LINK_WIDE_AT_LG
    },
    'pxh-overlay' : {
      'add' : window.pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation' : {
      'add' : window.pxh.NAVIGATION_NARROW_AT_MD + ' ' + window.pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login' : {
      'add' : window.pxh.LOGIN_NARROW_AT_MD + ' ' + window.pxh.LOGIN_WIDE_AT_LG
    },
    'pxh-login__name' : {
      'add' : window.pxh.LOGIN_NAME_NARROW_AT_MD + ' ' + window.pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link' : {
      'add' : window.pxh.LOGIN_LINK_NARROW_AT_MD + ' ' + window.pxh.LOGIN_LINK_WIDE_AT_LG
    },
    'pxh-login__settings' : {
      'add' : window.pxh.LOGIN_SETTINGS_NARROW_AT_MD + ' ' + window.pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret' : {
      'add' : window.pxh.LOGIN_CARET_NARROW_AT_MD + ' ' + window.pxh.LOGIN_CARET_WIDE_AT_LG,
    },
    'pxh-login__notifications' : {
      'add' : window.pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD + ' ' + window.pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG,
    },
    'pxh-view' : {
      'remove' : window.pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + window.pxh.VIEW_WIDE_AT_LG,
      'add' : window.pxh.VIEW_NARROW_AT_LG
    },
    'pxh-view-header' : {
      'remove' : window.pxh.VIEW_HEADER_WIDE_AT_LG,
      'add' : window.pxh.VIEW_HEADER_NARROW_AT_LG
    },
    'pxh-view-header-drawer-toggle' : {
      'remove' : window.pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications' : {
      'remove' : window.pxh.NOTIFICATIONS_VISIBLE
    }
  },
  'open' : {
    'pxh-drawer' : {
      'remove' : window.pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_LG,
      'add' : window.pxh.DRAWER_WIDE_AT_LG
    },
    'pxh-drawer-header__link' : {
      'remove' : window.pxh.DRAWER_HEADER_LINK_NARROW_AT_MD,
      'add' : window.pxh.DRAWER_HEADER_LINK_WIDE_AT_MD + ' ' + window.pxh.DRAWER_HEADER_LINK_WIDE_AT_LG
    },
    'pxh-overlay' : {
      'remove' : window.pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation' : {
      'remove' : window.pxh.NAVIGATION_NARROW_AT_MD,
      'add' : window.pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login' : {
      'add' : window.pxh.LOGIN_WIDE_AT_LG,
      'remove' : window.pxh.LOGIN_NARROW_AT_MD
    },
    'pxh-login__name' : {
      'remove' : window.pxh.LOGIN_NAME_NARROW_AT_MD,
      'add' : window.pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link' : {
      'remove' : window.pxh.LOGIN_LINK_NARROW_AT_MD + ' ' + window.pxh.LOGIN_LINK_NARROW_AT_LG
    },
    'pxh-login__settings' : {
      'remove' : window.pxh.LOGIN_SETTINGS_NARROW_AT_MD,
      'add' : window.pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret' : {
      'remove' : window.pxh.LOGIN_CARET_NARROW_AT_MD,
      'add' : window.pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications' : {
      'remove' : window.pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD,
      'add' : window.pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view' : {
      'add' : window.pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + window.pxh.VIEW_NARROW_AT_LG,
      'remove' : window.pxh.VIEW_WIDE_AT_LG
    },
    'pxh-view-header' : {
      'add' : window.pxh.VIEW_HEADER_NARROW_AT_LG,
      'remove' : window.pxh.VIEW_HEADER_WIDE_AT_LG
    },
    'pxh-view-header-drawer-toggle' : {
      'add' : window.pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    }
  },
  'narrowAtLg' : {
    'pxh-drawer' : {
      'add' : window.pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_LG,
      'remove' : window.pxh.DRAWER_WIDE_AT_LG
    },
    'pxh-drawer-header__link' : {
      'remove' : window.pxh.DRAWER_HEADER_LINK_WIDE_AT_MD + ' ' + window.pxh.DRAWER_HEADER_LINK_WIDE_AT_LG,
      'add' : window.pxh.DRAWER_HEADER_LINK_NARROW_AT_MD
    },
    'pxh-overlay' : {
      'add' : window.pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation' : {
      'add' : window.pxh.NAVIGATION_NARROW_AT_MD,
      'remove' : window.pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login' : {
      'add' : window.pxh.LOGIN_NARROW_AT_MD,
      'remove' : window.pxh.LOGIN_WIDE_AT_LG
    },
    'pxh-login__name' : {
      'add' : window.pxh.LOGIN_NAME_NARROW_AT_MD,
      'remove' : window.pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link' : {
      'add' : window.pxh.LOGIN_LINK_NARROW_AT_MD,
      'remove' : window.pxh.LOGIN_LINK_WIDE_AT_LG
    },
    'pxh-login__settings' : {
      'add' : window.pxh.LOGIN_SETTINGS_NARROW_AT_MD,
      'remove' : window.pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret' : {
      'add' : window.pxh.LOGIN_CARET_NARROW_AT_MD,
      'remove' : window.pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications' : {
      'add' : window.pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD,
      'remove' : window.pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view' : {
      'remove' : window.pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + window.pxh.VIEW_NARROW_AT_LG,
      'add' : window.pxh.VIEW_WIDE_AT_LG
    },
    'pxh-view-header' : {
      'remove' : window.pxh.VIEW_HEADER_NARROW_AT_LG,
      'add' : window.pxh.VIEW_HEADER_WIDE_AT_LG
    },
    'pxh-view-header-drawer-toggle' : {
      'remove' : window.pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications' : {
      'remove' : window.pxh.NOTIFICATIONS_VISIBLE
    }
  }
}

window.pxh.transitions = {
  'outToIn' : {
    'pxh-drawer' : {
      'add' : window.pxh.DRAWER_ANIMATE_IN,
    }
  },
  'inToOut' : {
    'pxh-drawer' : {
      'add' : window.pxh.DRAWER_ANIMATE_OUT,
    }
  },
  'narrowToOpen' : {
    'pxh-drawer' : {
      'add' : window.pxh.DRAWER_ANIMATE_WIDE,
    },
    'pxh-drawer-header__link' : {
      'add' : window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text' : {
      'add' : window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link' : {
      'add' : window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name' : {
      'add' : window.pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret' : {
      'add' : window.pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings' : {
      'add' : window.pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications' : {
      'add' : window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    }
  },
  'openToNarrow' : {
    'pxh-drawer' : {
      'add' : window.pxh.DRAWER_ANIMATE_NARROW
    },
    'pxh-drawer-header__link' : {
      'add' : window.pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text' : {
      'add' : window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link' : {
      'add' : window.pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name' : {
      'add' : window.pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret' : {
      'add' : window.pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings' : {
      'add' : window.pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications' : {
      'add' : window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    }
  },
  'outToNarrow' : {
    'pxh-drawer' : {
      'add' : window.pxh.DRAWER_ANIMATE_IN
    },
    'pxh-view' : {
      'add' : window.pxh.VIEW_ANIMATE_FULL_TO_WIDE
    },
    'pxh-view-header' : {
      'add' : window.pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE
    }
  },
  'narrowToOut' : {
    'pxh-drawer' : {
      'add' : window.pxh.DRAWER_ANIMATE_OUT_WIDE
    },
    'pxh-drawer-header__link' : {
      'add' : window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text' : {
      'add' : window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link' : {
      'add' : window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name' : {
      'add' : window.pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret' : {
      'add' : window.pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings' : {
      'add' : window.pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications' : {
      'add' : window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    }
  },
  'wideToNarrow' : {
    'pxh-drawer' : {
      'add' : window.pxh.DRAWER_ANIMATE_NARROW
    },
    'pxh-drawer-header__link' : {
      'add' : window.pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text' : {
      'add' : window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link' : {
      'add' : window.pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name' : {
      'add' : window.pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret' : {
      'add' : window.pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings' : {
      'add' : window.pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications' : {
      'add' : window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    },
    'pxh-view' : {
      'add' : window.pxh.VIEW_ANIMATE_WIDE
    },
    'pxh-view-header' : {
      'add' : window.pxh.VIEW_HEADER_ANIMATE_WIDE
    }
  },
  'narrowToWide' : {
    'pxh-drawer' : {
      'add' : window.pxh.DRAWER_ANIMATE_WIDE
    },
    'pxh-drawer-header__link' : {
      'add' : window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text' : {
      'add' : window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link' : {
      'add' : window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name' : {
      'add' : window.pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret' : {
      'add' : window.pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings' : {
      'add' : window.pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications' : {
      'add' : window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    },
    'pxh-view' : {
      'add' : window.pxh.VIEW_ANIMATE_NARROW
    },
    'pxh-view-header' : {
      'add' : window.pxh.VIEW_HEADER_ANIMATE_NARROW
    }
  },
  'clearAll' : {
    'pxh-drawer' : {
      'remove' : window.pxh.DRAWER_ANIMATE_IN + ' ' + window.pxh.DRAWER_ANIMATE_OUT + ' ' + window.pxh.DRAWER_ANIMATE_NARROW  + ' ' + window.pxh.DRAWER_ANIMATE_WIDE + ' ' + window.pxh.DRAWER_ANIMATE_OUT_WIDE
    },
    'pxh-drawer-header__link' : {
      'remove' : window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN + ' ' + window.pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text' : {
      'remove' : window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN + ' ' + window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link' : {
      'remove' : window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN + ' ' + window.pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name' : {
      'remove' : window.pxh.LOGIN_NAME_ANIMATE_IN + ' ' + window.pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret' : {
      'remove' : window.pxh.LOGIN_CARET_ANIMATE_IN  + ' ' + window.pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings' : {
      'remove' : window.pxh.LOGIN_SETTINGS_ANIMATE_IN + ' ' + window.pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications' : {
      'remove' : window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN + ' ' + window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    },
    'pxh-view' : {
      'remove' : window.pxh.VIEW_ANIMATE_WIDE + ' ' + window.pxh.VIEW_ANIMATE_NARROW + ' ' + window.pxh.VIEW_ANIMATE_FULL_TO_WIDE
    },
    'pxh-view-header' : {
      'remove' : window.pxh.VIEW_HEADER_ANIMATE_WIDE + ' ' + window.pxh.VIEW_HEADER_ANIMATE_NARROW + ' ' + window.pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE
    }
  }
}

// *********
// GENERIC FUNCTIONS
// *********

/**
 * Polyfill to support .remove() in IE11
 * https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
 * 
 */
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function()
  {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  }
}

/** 
 * Checks if an array exists
 * 
 * @param {Array} array
 * @returns {Boolean} true if array exists, false if it does not
 */
window.pxh.arrayExists = function(array) {
  if ((typeof array !== 'undefined') && (array.length > 0))
  {
    return true;
  }
  else
  {
    return false;
  }
}

/**
 * Returns an item from an object based on its property name
 * 
 * @param {Object} haystack
 * @param {String} propertyName
 * @returns {Object|Boolean} Object that corresponds to the property name if found, false if not
 */
window.pxh.getItemByPropertyName = function(haystack, propertyName) {
  for (var i in haystack)
  {
    if (haystack.hasOwnProperty(propertyName))
    {
      return haystack[propertyName];
    }
    else {
      return false;
    }
  }
}

/**
 * Returns the value of a particular CSS property of an element
 * 
 * @param {String} id The id="" attribute of the element
 * @param {String} property The CSS property to query, e.g. z-index
 * @returns {String|Boolean} CSS property value if found, false if not
 */
window.pxh.getStyle = function(id, property) {
  var element = document.getElementById(id);
  var style = '';
  if (window.getComputedStyle)
  {
    var style = document.defaultView.getComputedStyle(element, null).getPropertyValue(property);
  }
  else if (element.currentStyle)
  {
    var style = element.currentStyle[property];
  }
  return style;
}

/**
 * Strips HTML tags from the given string
 * 
 * @param {String} html A string that may contain HTML tags
 * @returns {String|Boolean} Input string's text with HTML removed, false if no input parameter provided
 */
window.pxh.stripHTML = function(html) {
  if (html)
  {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }
  else
  {
    return false;
  }
}

/**
 * Loads a state from a state object, and changes the CSS classes on all relevant elements
 * 
 * @param {Object} stateObject An object containing the states of your application
 * @param {String} targetStateName The name of the desired state to load from the state object
 */
window.pxh.loadState = function(stateObject, targetStateName) {
  // grab the target state object from the master states object
  var targetState = window.pxh.getItemByPropertyName(stateObject, targetStateName);
  // iterate through each target class in the target state object
  for (var targetClass in targetState)
  {
    // grab the target state for each class in the target state
    var stateChangeTarget = targetState[targetClass];
    // iterate through each target state change (e.g. whether to add, remove, toggle)
    for (var stateChangeType in stateChangeTarget)
    {
      // grab the target state change classes (e.g. which classes to add, remove, or toggle)
      var stateChangeClasses = stateChangeTarget[stateChangeType];
      // change the classes of each target element based on its target class, the type of change to make, and its target classes
      window.pxh.changeClasses(targetClass, stateChangeType, stateChangeClasses);
    }
  }
}

/**
 * Binds drawer state change events to toggle buttons, which will change the state of the drawer depending on the current drawer and responsive contexts
 * 
 * @param {String} controlName CSS class name of control to bind events to
 */
window.pxh.bindControl = function(controlName) {
  var controlElements = document.getElementsByClassName(controlName);
  var drawer = document.getElementById('js-drawer');
  if ((window.pxh.arrayExists(controlElements)) && (drawer))
  {
    for (var i = controlElements.length - 1; i >= 0; i--)
    {
      controlElements[i].addEventListener('click', function(event) {
        event.preventDefault();
        var drawerIsAtDefaultState = drawer.classList.contains('pxh-drawer--wide@lg');
        var drawerIsNarrowAtMd = drawer.classList.contains('pxh-drawer--narrow@md');
        var drawerIsHiddenAtSm = drawer.classList.contains('pxh-drawer--hidden-until@md');
        window.pxh.loadState(window.pxh.transitions, 'clearAll');
        if ((window.matchMedia('(min-width: 1024px)').matches) && (drawerIsAtDefaultState))
        {
          window.pxh.loadState(window.pxh.transitions, 'wideToNarrow');
          window.pxh.loadState(window.pxh.states, 'narrowAtLg');
          document.dispatchEvent(window.pxh.drawerClosed);
          window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
        }
        else if (window.matchMedia('(min-width: 1024px)').matches)
        {
          window.pxh.loadState(window.pxh.transitions, 'narrowToWide');
          window.pxh.loadState(window.pxh.states, 'default');
          document.dispatchEvent(window.pxh.drawerOpened);
          window.pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
          window.pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
        }
        else if ((drawerIsNarrowAtMd) && (window.matchMedia('(min-width: 768px)').matches))
        {
          window.pxh.loadState(window.pxh.transitions, 'narrowToOpen');
          window.pxh.loadState(window.pxh.states, 'open');
          document.dispatchEvent(window.pxh.drawerOpened);
          window.pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
          window.pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
        }
        else if (window.matchMedia('(min-width: 768px)').matches)
        {
          window.pxh.loadState(window.pxh.transitions, 'openToNarrow');
          window.pxh.loadState(window.pxh.states, 'default');
          document.dispatchEvent(window.pxh.drawerClosed);
          window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
        }
        else if (drawerIsHiddenAtSm)
        {
          window.pxh.loadState(window.pxh.transitions, 'outToIn');
          window.pxh.loadState(window.pxh.states, 'open');
          document.dispatchEvent(window.pxh.drawerOpened);
          window.pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
          window.pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
        }
        else
        {
          window.pxh.loadState(window.pxh.transitions, 'inToOut');
          window.pxh.loadState(window.pxh.states, 'default');
          document.dispatchEvent(window.pxh.drawerClosed);
          window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
        }
      })
    }
  }
}

/**
 * Creates drawer state change events that should fire when the browser transitions between the medium breakpoint
 * 
 * @param {String} breakpoint 
 */
window.pxh.breakpointAtMd = function(breakpoint) {
  window.pxh.loadState(window.pxh.transitions, 'clearAll');
  var drawer = document.getElementById('js-drawer');
  var drawerIsWideAtLg = drawer.classList.contains('pxh-drawer--wide@lg');
  var drawerIsNarrowAtMd = drawer.classList.contains('pxh-drawer--narrow@md');
  if (breakpoint.matches)
  {
    // we entered the @md breakpoint from the @sm breakpoint
    if (drawerIsNarrowAtMd)
    {
      // the drawer wasn't open @sm so open it to narrow @md
      // fire the transition
      window.pxh.loadState(window.pxh.transitions, 'outToNarrow');
    }
  } else
  {
    // we exited the @md breakpoint into the @sm breakpoint
    if (drawerIsNarrowAtMd)
    {
      // the drawer was open to narrow @md so move it out @sm
      window.pxh.loadState(window.pxh.transitions, 'narrowToOut');
    }
  }
}

/**
 * Creates drawer state change events that should fire when the browser transitions between the large breakpoint
 * 
 * @param {String} breakpoint 
 */
window.pxh.breakpointAtLg = function(breakpoint) {
  window.pxh.loadState(window.pxh.transitions, 'clearAll');
  var drawer = document.getElementById('js-drawer');
  var drawerIsWideAtLg = drawer.classList.contains('pxh-drawer--wide@lg');
  var drawerIsNarrowAtMd = drawer.classList.contains('pxh-drawer--narrow@md');
  if (breakpoint.matches)
  {
    // we entered the @lg breakpoint from the @md breakpoint
    if ((drawerIsWideAtLg) && (!drawerIsNarrowAtMd))
    {
      // the drawer was open @md so keep it open @lg
      // don't fire any transitions
      window.pxh.loadState(window.pxh.states, 'default');
      window.pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
      window.pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
    }
    else
    {
      // drawer was narrow @md so transition it to wide @lg
      // fire transitions
      window.pxh.loadState(window.pxh.transitions, 'narrowToWide');
      window.pxh.loadState(window.pxh.states, 'default');
      document.dispatchEvent(window.pxh.drawerOpened);
      window.pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
      window.pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
    }
  }
  else
  {
    // we exited the @lg breakpoint into the @md breakpoint
    if (drawerIsWideAtLg)
    {
      // the drawer was wide @lg so transition it to narrow @md
      // close the notifications list if it's open
      // fire transitions
      window.pxh.loadState(window.pxh.transitions, 'wideToNarrow');
    };
    window.pxh.loadState(window.pxh.states, 'default');
    document.dispatchEvent(window.pxh.drawerClosed);
    window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
    window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
  }
}

/**
 * Binds media queries to drawer controls or something
 * 
 * @param {String} targetClass CSS class name of elements to bind to
 * @param {Object} window.matchMedia object
 */
window.pxh.bindDrawerMediaQueryControls = function(targetClass, mediaQuery) {
  var targetElements = document.getElementsByClassName(targetClass);
  var drawer = document.getElementById('js-drawer');
  if ((window.pxh.arrayExists(targetElements)) && (drawer))
  {
    // iterate through drawer controls and fire the pxhToggleDrawer function when clicked
    for (var i = targetElements.length - 1; i >= 0; i--)
    {
      targetElements[i].addEventListener('click', function() {
        window.pxh.loadState(window.pxh.transitions, 'clearAll');
        if (!mediaQuery.matches)
        {
          window.pxh.loadState(window.pxh.states, 'default');
          window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
        }
      })
    }
  }
}

/**
 * When the user clicks the overlay, hides the drawer at the small breakpoint, or collapses the drawer at the narrow breakpoint
 * 
 * If the notification list is displayed, hides it when the user clicks the overlay but doesn't hide or collapse the drawer
 * 
 */
window.pxh.overlayDrawerControl = function() {
  var overlay = document.getElementsByClassName('pxh-overlay');
  var notifications = document.getElementById('js-notifications');
  if (window.pxh.arrayExists(overlay))
  {
    for (var i = overlay.length - 1; i >= 0; i--)
    {
      overlay[i].addEventListener('click', function(event) {
        if ((!lgBreakpoint.matches) && (window.pxh.Cookies.get('pxh-drawer-open') === 'true'))
        {
          // if the notifications list is visible, close it when clicking the overlay but don't close the drawer
          if ((notifications) && (notifications.classList.contains('pxh-notifications--visible')))
          {
            notifications.classList.remove('pxh-notifications--visible');
          }
          else
          {
            window.pxh.loadState(window.pxh.transitions, 'clearAll');
            window.pxh.loadState(window.pxh.states, 'default');
            document.dispatchEvent(window.pxh.drawerClosed);
            window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
            window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
          }
        }
      })
    }
  }
}

/**
 * When the user hits the "ESC" key on the keyboard, hides the drawer at the small breakpoint, or collapses the drawer at the narrow breakpoint
 * 
 */
window.pxh.escapeDrawerControl = function() {
  document.addEventListener('keyup', function(event) {
    if ((event.keyCode == 27) && (!lgBreakpoint.matches) && (window.pxh.Cookies.get('pxh-drawer-open') === 'true'))
    {
      window.pxh.loadState(window.pxh.transitions, 'clearAll');
      window.pxh.loadState(window.pxh.states, 'default');
      document.dispatchEvent(window.pxh.drawerClosed);
      window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
      window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
    }
  })
}

/**
 * Toggles the visibility of a login menu
 * 
 * @param {String} toggleControl CSS class name of the elements to turn into controls that will fire this event
 * @param {String} toggleTarget CSS class name of the login menu elements that should have their visibility toggled
 * @param {string} toggleClass Space-delimited list of CSS class names to toggle on the target elements when this event fires
 */
window.pxh.toggleLoginMenu = function(toggleControl, toggleTarget, toggleClass) {
  var toggleControlElements = document.getElementsByClassName(toggleControl);
  var toggleTargetElements = document.getElementsByClassName(toggleTarget);
  if ((window.pxh.arrayExists(toggleControlElements)) && (window.pxh.arrayExists(toggleTargetElements)))
  {
    for (var i = toggleControlElements.length - 1; i >= 0; i--)
    {
      toggleControlElements[i].addEventListener('click', function(event) {
        event.preventDefault();
        var menuIsVisible = toggleTargetElements[0].classList.contains(toggleClass);
        window.pxh.changeClasses('pxh-login-menu', 'remove', toggleClass);
        if (!menuIsVisible)
        {
          window.pxh.changeClasses(toggleTarget, 'toggle', toggleClass);
        }
        event.stopPropagation();
      });
    }
  }
}

// ********
// FIRE!!!!
// ********

var lgBreakpoint = window.matchMedia('(min-width: 1024px)');
var mdBreakpoint = window.matchMedia('(min-width: 768px)');

document.addEventListener('DOMContentLoaded', function(event) {
  if (document.getElementById('js-drawer')) {
    lgBreakpoint.addListener(window.pxh.breakpointAtLg);
    mdBreakpoint.addListener(window.pxh.breakpointAtMd);
  }
  window.pxh.drawerOpened = document.createEvent('CustomEvent');
  window.pxh.drawerOpened.initCustomEvent('pxhDrawerOpened', false, false, {
    'drawerOpened': true
  });

  window.pxh.drawerClosed = document.createEvent('CustomEvent');
  window.pxh.drawerClosed.initCustomEvent('pxhDrawerClosed', false, false, {
    'drawerClosed': true
  });

  window.pxh.bindControl(window.pxh.VIEW_HEADER_DRAWER_TOGGLE);
  window.pxh.bindControl(window.pxh.DRAWER_TOGGLE);

  if (window.pxh.Cookies.get('pxh-drawer-open') === null)
  {
    window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
  }

  if (window.pxh.Cookies.get('pxh-drawer-narrow') === null)
  {
    window.pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
  }

  // check if the 'narrow' cookie is set and if we're currently at the desktop breakpoint
  if ((window.matchMedia('(min-width: 1024px)').matches) && (window.pxh.Cookies.get('pxh-drawer-narrow') === 'true'))
  {
    // toggle the drawer closed
    window.pxh.loadState(window.pxh.states, 'narrowAtLg');
    document.dispatchEvent(window.pxh.drawerClosed);
    window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
  }
  else if (window.matchMedia('(min-width: 1024px)').matches)
  {
    window.pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
  } else
  {
    window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
  }
  document.addEventListener('navRefreshed', function(event)
  {
    window.pxh.toggleLoginMenu(window.pxh.LOGIN_PROFILE_LINK, window.pxh.LOGIN_MENU_PROFILE, window.pxh.LOGIN_MENU_VISIBLE);
    window.pxh.toggleLoginMenu(window.pxh.LOGIN_SETTINGS_LINK, window.pxh.LOGIN_MENU_SETTINGS, window.pxh.LOGIN_MENU_VISIBLE);
  });

  window.pxh.bindDrawerMediaQueryControls(window.pxh.NAVIGATION_LINK, lgBreakpoint);
  window.pxh.bindDrawerMediaQueryControls(window.pxh.NAVIGATION_SUB_LINK, lgBreakpoint);

  window.pxh.overlayDrawerControl();

  window.pxh.escapeDrawerControl();

  window.pxh.action.clickToCloseAndFire(window.pxh.LOGIN_PROFILE_LINK, window.pxh.LOGIN_MENU_PROFILE, 'remove', window.pxh.LOGIN_MENU_VISIBLE);
  window.pxh.action.clickToCloseAndFire(window.pxh.LOGIN_SETTINGS_LINK, window.pxh.LOGIN_MENU_SETTINGS, 'remove', window.pxh.LOGIN_MENU_VISIBLE);

  window.pxh.toggleLoginMenu(window.pxh.LOGIN_PROFILE_LINK, window.pxh.LOGIN_MENU_PROFILE, window.pxh.LOGIN_MENU_VISIBLE);
  window.pxh.toggleLoginMenu(window.pxh.LOGIN_SETTINGS_LINK, window.pxh.LOGIN_MENU_SETTINGS, window.pxh.LOGIN_MENU_VISIBLE);
});
