'use strict';
/*! common.pxh-chrome.js 2.0.0 */

// **************
// CONFIG OBJECTS
// **************

/** @namespace window.pxh */

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol ? 'symbol' : typeof obj; };

if (!window.pxh) window.pxh = {};

window.pxh.PREFIX = 'pxh-';
window.pxh.NARROW = '--narrow';
window.pxh.WIDE = '--wide';
window.pxh.HIDDEN = '--hidden';
window.pxh.VISIBLE = '--visible';
window.pxh.EXPANDED = '--expanded';
window.pxh.UNTIL = '-until';
window.pxh.AT_MD = '@md';
window.pxh.AT_LG = '@lg';
window.pxh.ANIMATE = '--animate';
window.pxh.ANIMATE_IN = window.pxh.ANIMATE + '-in';
window.pxh.ANIMATE_OUT = window.pxh.ANIMATE + '-out';
window.pxh.ANIMATE_NARROW = window.pxh.ANIMATE + '-narrow';
window.pxh.ANIMATE_WIDE = window.pxh.ANIMATE + '-wide';
window.pxh.ANIMATE_FULL_TO_WIDE = window.pxh.ANIMATE + '-full-to-wide';
window.pxh.ANIMATE_OUT_WIDE = window.pxh.ANIMATE + '-out-wide';

// drawer
window.pxh.DRAWER = window.pxh.PREFIX + 'drawer';
window.pxh.DRAWER_HIDDEN_UNTIL_AT_MD = window.pxh.DRAWER + window.pxh.HIDDEN + window.pxh.UNTIL + window.pxh.AT_MD;
window.pxh.DRAWER_NARROW_AT_MD = window.pxh.DRAWER + window.pxh.NARROW + window.pxh.AT_MD;
window.pxh.DRAWER_WIDE_AT_LG = window.pxh.DRAWER + window.pxh.WIDE + window.pxh.AT_LG;
window.pxh.DRAWER_NARROW_AT_LG = window.pxh.DRAWER + window.pxh.NARROW + window.pxh.AT_LG;
window.pxh.DRAWER_ANIMATE_IN = window.pxh.DRAWER + window.pxh.ANIMATE_IN;
window.pxh.DRAWER_ANIMATE_OUT = window.pxh.DRAWER + window.pxh.ANIMATE_OUT;
window.pxh.DRAWER_ANIMATE_WIDE = window.pxh.DRAWER + window.pxh.ANIMATE_WIDE;
window.pxh.DRAWER_ANIMATE_NARROW = window.pxh.DRAWER + window.pxh.ANIMATE_NARROW;
window.pxh.DRAWER_ANIMATE_OUT_WIDE = window.pxh.DRAWER + window.pxh.ANIMATE_OUT_WIDE;

// drawer__toggle
window.pxh.DRAWER_TOGGLE = window.pxh.PREFIX + 'drawer-toggle';

// drawer-header__link
window.pxh.DRAWER_HEADER_LINK = window.pxh.PREFIX + 'drawer-header__link';
window.pxh.DRAWER_HEADER_LINK_WIDE_AT_MD = window.pxh.DRAWER_HEADER_LINK + window.pxh.WIDE + window.pxh.AT_MD;
window.pxh.DRAWER_HEADER_LINK_NARROW_AT_MD = window.pxh.DRAWER_HEADER_LINK + window.pxh.NARROW + window.pxh.AT_MD;
window.pxh.DRAWER_HEADER_LINK_WIDE_AT_LG = window.pxh.DRAWER_HEADER_LINK + window.pxh.WIDE + window.pxh.AT_LG;
window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN = window.pxh.DRAWER_HEADER_LINK + window.pxh.ANIMATE_IN;
window.pxh.DRAWER_HEADER_LINK_ANIMATE_OUT = window.pxh.DRAWER_HEADER_LINK + window.pxh.ANIMATE_OUT;

// overlay
window.pxh.OVERLAY = window.pxh.PREFIX + 'overlay';
window.pxh.OVERLAY_HIDDEN = window.pxh.OVERLAY + window.pxh.HIDDEN;

// navigation
window.pxh.NAVIGATION = window.pxh.PREFIX + 'navigation';
window.pxh.NAVIGATION_NARROW_AT_MD = window.pxh.NAVIGATION + window.pxh.NARROW + window.pxh.AT_MD;
window.pxh.NAVIGATION_WIDE_AT_LG = window.pxh.NAVIGATION + window.pxh.WIDE + window.pxh.AT_LG;

// navigation__item-text
window.pxh.NAVIGATION_ITEM_TEXT = window.pxh.PREFIX + 'navigation__item-text';
window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN = window.pxh.NAVIGATION_ITEM_TEXT + window.pxh.ANIMATE_IN;
window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT = window.pxh.NAVIGATION_ITEM_TEXT + window.pxh.ANIMATE_OUT;

// navigation__link
window.pxh.NAVIGATION_LINK = window.pxh.PREFIX + 'navigation__link';
window.pxh.NAVIGATION_LINK_ANIMATE_IN = window.pxh.NAVIGATION_LINK + window.pxh.ANIMATE_IN;
window.pxh.NAVIGATION_LINK_ANIMATE_OUT = window.pxh.NAVIGATION_LINK + window.pxh.ANIMATE_OUT;

// navigation__sub-link
window.pxh.NAVIGATION_SUB_LINK = window.pxh.PREFIX + 'navigation__sub-link';
window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN = window.pxh.NAVIGATION_SUB_LINK + window.pxh.ANIMATE_IN;
window.pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT = window.pxh.NAVIGATION_SUB_LINK + window.pxh.ANIMATE_OUT;

// login
window.pxh.LOGIN = window.pxh.PREFIX + 'login';
window.pxh.LOGIN_NARROW_AT_MD = window.pxh.LOGIN + window.pxh.NARROW + window.pxh.AT_MD;
window.pxh.LOGIN_WIDE_AT_LG = window.pxh.LOGIN + window.pxh.WIDE + window.pxh.AT_LG;

// login__name
window.pxh.LOGIN_NAME = window.pxh.PREFIX + 'login__name';
window.pxh.LOGIN_NAME_NARROW_AT_MD = window.pxh.LOGIN_NAME + window.pxh.NARROW + window.pxh.AT_MD;
window.pxh.LOGIN_NAME_WIDE_AT_LG = window.pxh.LOGIN_NAME + window.pxh.WIDE + window.pxh.AT_LG;
window.pxh.LOGIN_NAME_ANIMATE_IN = window.pxh.LOGIN_NAME + window.pxh.ANIMATE_IN;
window.pxh.LOGIN_NAME_ANIMATE_OUT = window.pxh.LOGIN_NAME + window.pxh.ANIMATE_OUT;

// login__link
window.pxh.LOGIN_LINK = window.pxh.PREFIX + 'login__link';
window.pxh.LOGIN_LINK_NARROW_AT_MD = window.pxh.LOGIN_LINK + window.pxh.NARROW + window.pxh.AT_MD;
window.pxh.LOGIN_LINK_WIDE_AT_LG = window.pxh.LOGIN_LINK + window.pxh.WIDE + window.pxh.AT_LG;
window.pxh.LOGIN_LINK_NARROW_AT_LG = window.pxh.LOGIN_LINK + window.pxh.NARROW + window.pxh.AT_LG;

window.pxh.LOGIN_PROFILE_LINK = window.pxh.PREFIX + 'login__profile-link';
window.pxh.LOGIN_SETTINGS_LINK = window.pxh.PREFIX + 'login__settings-link';

window.pxh.LOGIN_MENU = window.pxh.PREFIX + 'login-menu';
window.pxh.LOGIN_MENU_PROFILE = window.pxh.LOGIN_MENU + '--profile';
window.pxh.LOGIN_MENU_SETTINGS = window.pxh.LOGIN_MENU + '--settings';
window.pxh.LOGIN_MENU_VISIBLE = window.pxh.LOGIN_MENU + window.pxh.VISIBLE;

// login__settings
window.pxh.LOGIN_SETTINGS = window.pxh.PREFIX + 'login__settings';
window.pxh.LOGIN_SETTINGS_NARROW_AT_MD = window.pxh.LOGIN_SETTINGS + window.pxh.NARROW + window.pxh.AT_MD;
window.pxh.LOGIN_SETTINGS_WIDE_AT_LG = window.pxh.LOGIN_SETTINGS + window.pxh.WIDE + window.pxh.AT_LG;
window.pxh.LOGIN_SETTINGS_ANIMATE_IN = window.pxh.LOGIN_SETTINGS + window.pxh.ANIMATE_IN;
window.pxh.LOGIN_SETTINGS_ANIMATE_OUT = window.pxh.LOGIN_SETTINGS + window.pxh.ANIMATE_OUT;

// login__caret
window.pxh.LOGIN_CARET = window.pxh.PREFIX + 'login__caret';
window.pxh.LOGIN_CARET_NARROW_AT_MD = window.pxh.LOGIN_CARET + window.pxh.NARROW + window.pxh.AT_MD;
window.pxh.LOGIN_CARET_WIDE_AT_LG = window.pxh.LOGIN_CARET + window.pxh.WIDE + window.pxh.AT_LG;
window.pxh.LOGIN_CARET_ANIMATE_IN = window.pxh.LOGIN_CARET + window.pxh.ANIMATE_IN;
window.pxh.LOGIN_CARET_ANIMATE_OUT = window.pxh.LOGIN_CARET + window.pxh.ANIMATE_OUT;

// login__notifications
window.pxh.LOGIN_NOTIFICATIONS = window.pxh.PREFIX + 'login__notifications';
window.pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD = window.pxh.LOGIN_NOTIFICATIONS + window.pxh.NARROW + window.pxh.AT_MD;
window.pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG = window.pxh.LOGIN_NOTIFICATIONS + window.pxh.WIDE + window.pxh.AT_LG;
window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN = window.pxh.LOGIN_NOTIFICATIONS + window.pxh.ANIMATE_IN;
window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT = window.pxh.LOGIN_NOTIFICATIONS + window.pxh.ANIMATE_OUT;

// login__notifications-badge
window.pxh.LOGIN_NOTIFICATIONS_BADGE = window.pxh.PREFIX + 'login__notifications-badge';
window.pxh.LOGIN_NOTIFICATIONS_BADGE_HIDDEN = window.pxh.LOGIN_NOTIFICATIONS_BADGE + window.pxh.HIDDEN;

// view
window.pxh.VIEW = window.pxh.PREFIX + 'view';
window.pxh.VIEW_NARROW_AT_LG = window.pxh.VIEW + window.pxh.NARROW + window.pxh.AT_LG;
window.pxh.VIEW_WIDE_AT_LG = window.pxh.VIEW + window.pxh.WIDE + window.pxh.AT_LG;
window.pxh.VIEW_ANIMATE_FULL_TO_WIDE = window.pxh.VIEW + window.pxh.ANIMATE_FULL_TO_WIDE;
window.pxh.VIEW_ANIMATE_WIDE = window.pxh.VIEW + window.pxh.ANIMATE_WIDE;
window.pxh.VIEW_ANIMATE_NARROW = window.pxh.VIEW + window.pxh.ANIMATE_NARROW;

// view-header
window.pxh.VIEW_HEADER = window.pxh.PREFIX + 'view-header';
window.pxh.VIEW_HEADER_NARROW_AT_LG = window.pxh.VIEW_HEADER + window.pxh.NARROW + window.pxh.AT_LG;
window.pxh.VIEW_HEADER_WIDE_AT_LG = window.pxh.VIEW_HEADER + window.pxh.WIDE + window.pxh.AT_LG;
window.pxh.VIEW_HEADER_ANIMATE_WIDE = window.pxh.VIEW_HEADER + window.pxh.ANIMATE_WIDE;
window.pxh.VIEW_HEADER_ANIMATE_NARROW = window.pxh.VIEW_HEADER + window.pxh.ANIMATE_NARROW;
window.pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE = window.pxh.VIEW_HEADER + window.pxh.ANIMATE_FULL_TO_WIDE;

// view-header-drawer-toggle
window.pxh.VIEW_HEADER_DRAWER_TOGGLE = window.pxh.PREFIX + 'view-header-drawer-toggle';
window.pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN = window.pxh.VIEW_HEADER_DRAWER_TOGGLE + window.pxh.HIDDEN;

// notifications
window.pxh.NOTIFICATIONS = window.pxh.PREFIX + 'notifications';
window.pxh.NOTIFICATIONS_VISIBLE = window.pxh.NOTIFICATIONS + window.pxh.VISIBLE;

// notification
window.pxh.NOTIFICATION = window.pxh.PREFIX + 'notification';
window.pxh.NOTIFICATION_ANIMATE_IN = window.pxh.NOTIFICATION + window.pxh.ANIMATE_IN;
window.pxh.NOTIFICATION_ANIMATE_OUT = window.pxh.NOTIFICATION + window.pxh.ANIMATE_OUT;
window.pxh.NOTIFICATION_EXPANDED = window.pxh.NOTIFICATION + window.pxh.EXPANDED;

// toast
window.pxh.TOAST = window.pxh.PREFIX + 'toast';
window.pxh.TOAST_ANIMATE_IN = window.pxh.TOAST + window.pxh.ANIMATE_IN;
window.pxh.TOAST_ANIMATE_OUT = window.pxh.TOAST + window.pxh.ANIMATE_OUT;
window.pxh.TOAST_EXPANDED = window.pxh.TOAST + window.pxh.EXPANDED;

// disable-scroll
window.pxh.DISABLE_SCROLL = window.pxh.PREFIX + 'disable-scroll';
window.pxh.DISABLE_SCROLL_UNTIL_AT_LG = window.pxh.DISABLE_SCROLL + window.pxh.UNTIL + window.pxh.AT_LG;

// display none
window.pxh.DISPLAY_NONE = window.pxh.PREFIX + 'display-none';

window.pxh.states = {
  'default': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_MD + ' ' + window.pxh.DRAWER_WIDE_AT_LG,
      'remove': window.pxh.DRAWER_NARROW_AT_LG
    },
    'pxh-drawer-header__link': {
      'remove': window.pxh.DRAWER_HEADER_LINK_WIDE_AT_MD,
      'add': window.pxh.DRAWER_HEADER_LINK_NARROW_AT_MD + ' ' + window.pxh.DRAWER_HEADER_LINK_WIDE_AT_LG
    },
    'pxh-overlay': {
      'add': window.pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation': {
      'add': window.pxh.NAVIGATION_NARROW_AT_MD + ' ' + window.pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login': {
      'add': window.pxh.LOGIN_NARROW_AT_MD + ' ' + window.pxh.LOGIN_WIDE_AT_LG
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_NARROW_AT_MD + ' ' + window.pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link': {
      'add': window.pxh.LOGIN_LINK_NARROW_AT_MD + ' ' + window.pxh.LOGIN_LINK_WIDE_AT_LG
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_NARROW_AT_MD + ' ' + window.pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_NARROW_AT_MD + ' ' + window.pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD + ' ' + window.pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view': {
      'remove': window.pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + window.pxh.VIEW_WIDE_AT_LG,
      'add': window.pxh.VIEW_NARROW_AT_LG
    },
    'pxh-view-header': {
      'remove': window.pxh.VIEW_HEADER_WIDE_AT_LG,
      'add': window.pxh.VIEW_HEADER_NARROW_AT_LG
    },
    'pxh-view-header-drawer-toggle': {
      'remove': window.pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications': {
      'remove': window.pxh.NOTIFICATIONS_VISIBLE
    }
  },
  'open': {
    'pxh-drawer': {
      'remove': window.pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_LG,
      'add': window.pxh.DRAWER_WIDE_AT_LG
    },
    'pxh-drawer-header__link': {
      'remove': window.pxh.DRAWER_HEADER_LINK_NARROW_AT_MD,
      'add': window.pxh.DRAWER_HEADER_LINK_WIDE_AT_MD + ' ' + window.pxh.DRAWER_HEADER_LINK_WIDE_AT_LG
    },
    'pxh-overlay': {
      'remove': window.pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation': {
      'remove': window.pxh.NAVIGATION_NARROW_AT_MD,
      'add': window.pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login': {
      'add': window.pxh.LOGIN_WIDE_AT_LG,
      'remove': window.pxh.LOGIN_NARROW_AT_MD
    },
    'pxh-login__name': {
      'remove': window.pxh.LOGIN_NAME_NARROW_AT_MD,
      'add': window.pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link': {
      'remove': window.pxh.LOGIN_LINK_NARROW_AT_MD + ' ' + window.pxh.LOGIN_LINK_NARROW_AT_LG
    },
    'pxh-login__settings': {
      'remove': window.pxh.LOGIN_SETTINGS_NARROW_AT_MD,
      'add': window.pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret': {
      'remove': window.pxh.LOGIN_CARET_NARROW_AT_MD,
      'add': window.pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications': {
      'remove': window.pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD,
      'add': window.pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view': {
      'add': window.pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + window.pxh.VIEW_NARROW_AT_LG,
      'remove': window.pxh.VIEW_WIDE_AT_LG
    },
    'pxh-view-header': {
      'add': window.pxh.VIEW_HEADER_NARROW_AT_LG,
      'remove': window.pxh.VIEW_HEADER_WIDE_AT_LG
    },
    'pxh-view-header-drawer-toggle': {
      'add': window.pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    }
  },
  'narrowAtLg': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_LG,
      'remove': window.pxh.DRAWER_WIDE_AT_LG
    },
    'pxh-drawer-header__link': {
      'remove': window.pxh.DRAWER_HEADER_LINK_WIDE_AT_MD + ' ' + window.pxh.DRAWER_HEADER_LINK_WIDE_AT_LG,
      'add': window.pxh.DRAWER_HEADER_LINK_NARROW_AT_MD
    },
    'pxh-overlay': {
      'add': window.pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation': {
      'add': window.pxh.NAVIGATION_NARROW_AT_MD,
      'remove': window.pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login': {
      'add': window.pxh.LOGIN_NARROW_AT_MD,
      'remove': window.pxh.LOGIN_WIDE_AT_LG
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_NARROW_AT_MD,
      'remove': window.pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link': {
      'add': window.pxh.LOGIN_LINK_NARROW_AT_MD,
      'remove': window.pxh.LOGIN_LINK_WIDE_AT_LG
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_NARROW_AT_MD,
      'remove': window.pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_NARROW_AT_MD,
      'remove': window.pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD,
      'remove': window.pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view': {
      'remove': window.pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + window.pxh.VIEW_NARROW_AT_LG,
      'add': window.pxh.VIEW_WIDE_AT_LG
    },
    'pxh-view-header': {
      'remove': window.pxh.VIEW_HEADER_NARROW_AT_LG,
      'add': window.pxh.VIEW_HEADER_WIDE_AT_LG
    },
    'pxh-view-header-drawer-toggle': {
      'remove': window.pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications': {
      'remove': window.pxh.NOTIFICATIONS_VISIBLE
    }
  }
};

window.pxh.transitions = {
  'outToIn': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_IN
    }
  },
  'inToOut': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_OUT
    }
  },
  'narrowToOpen': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_WIDE
    },
    'pxh-drawer-header__link': {
      'add': window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text': {
      'add': window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link': {
      'add': window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    }
  },
  'openToNarrow': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_NARROW
    },
    'pxh-drawer-header__link': {
      'add': window.pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text': {
      'add': window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link': {
      'add': window.pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    }
  },
  'outToNarrow': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_IN
    },
    'pxh-view': {
      'add': window.pxh.VIEW_ANIMATE_FULL_TO_WIDE
    },
    'pxh-view-header': {
      'add': window.pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE
    }
  },
  'narrowToOut': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_OUT_WIDE
    },
    'pxh-drawer-header__link': {
      'add': window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text': {
      'add': window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link': {
      'add': window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    }
  },
  'wideToNarrow': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_NARROW
    },
    'pxh-drawer-header__link': {
      'add': window.pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text': {
      'add': window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link': {
      'add': window.pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    },
    'pxh-view': {
      'add': window.pxh.VIEW_ANIMATE_WIDE
    },
    'pxh-view-header': {
      'add': window.pxh.VIEW_HEADER_ANIMATE_WIDE
    }
  },
  'narrowToWide': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_WIDE
    },
    'pxh-drawer-header__link': {
      'add': window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text': {
      'add': window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link': {
      'add': window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    },
    'pxh-view': {
      'add': window.pxh.VIEW_ANIMATE_NARROW
    },
    'pxh-view-header': {
      'add': window.pxh.VIEW_HEADER_ANIMATE_NARROW
    }
  },
  'clearAll': {
    'pxh-drawer': {
      'remove': window.pxh.DRAWER_ANIMATE_IN + ' ' + window.pxh.DRAWER_ANIMATE_OUT + ' ' + window.pxh.DRAWER_ANIMATE_NARROW + ' ' + window.pxh.DRAWER_ANIMATE_WIDE + ' ' + window.pxh.DRAWER_ANIMATE_OUT_WIDE
    },
    'pxh-drawer-header__link': {
      'remove': window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN + ' ' + window.pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text': {
      'remove': window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN + ' ' + window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link': {
      'remove': window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN + ' ' + window.pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name': {
      'remove': window.pxh.LOGIN_NAME_ANIMATE_IN + ' ' + window.pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret': {
      'remove': window.pxh.LOGIN_CARET_ANIMATE_IN + ' ' + window.pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings': {
      'remove': window.pxh.LOGIN_SETTINGS_ANIMATE_IN + ' ' + window.pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications': {
      'remove': window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN + ' ' + window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    },
    'pxh-view': {
      'remove': window.pxh.VIEW_ANIMATE_WIDE + ' ' + window.pxh.VIEW_ANIMATE_NARROW + ' ' + window.pxh.VIEW_ANIMATE_FULL_TO_WIDE
    },
    'pxh-view-header': {
      'remove': window.pxh.VIEW_HEADER_ANIMATE_WIDE + ' ' + window.pxh.VIEW_HEADER_ANIMATE_NARROW + ' ' + window.pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE
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
 * @param {HTMLElement|Element[]|Elements|jQuery} element
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
 * JavaScript Cookie v2.1.2
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
        var cookie = parts.slice(1).join('=');

        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          var name = parts[0].replace(rdecode, decodeURIComponent);
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

    // api.set = api;
    // api.get = function (key) {
    //   return api(key);
    // };
    api.get = api.set = api;
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

window.pxh.Cookies = Cookies.noConflict();

// *********
// GENERIC FUNCTIONS
// *********

/**
 * Polyfill to support .remove() in IE11
 * https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
 * 
 */
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

/** 
 * Checks if an array exists
 * 
 * @param {Array} array
 * @returns {Boolean} true if array exists, false if it does not
 */
window.pxh.arrayExists = function (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns an item from an object based on its property name
 * 
 * @param {Object} haystack
 * @param {String} propertyName
 * @returns {Object|Boolean} Object that corresponds to the property name if found, false if not
 */
window.pxh.getItemByPropertyName = function (haystack, propertyName) {
  for (var i in haystack) {
    if (haystack.hasOwnProperty(propertyName)) {
      return haystack[propertyName];
    } else {
      return false;
    }
  }
};

/**
 * Returns the value of a particular CSS property of an element
 * 
 * @param {String} id The id="" attribute of the element
 * @param {String} property The CSS property to query, e.g. z-index
 * @returns {String|Boolean} CSS property value if found, false if not
 */
window.pxh.getStyle = function (id, property) {
  var element = document.getElementById(id);
  var style = '';
  if (window.getComputedStyle) {
    var style = document.defaultView.getComputedStyle(element, null).getPropertyValue(property);
  } else if (element.currentStyle) {
    var style = element.currentStyle[property];
  }
  return style;
};

/**
 * Strips HTML tags from the given string
 * 
 * @param {String} html A string that may contain HTML tags
 * @returns {String|Boolean} Input string's text with HTML removed, false if no input parameter provided
 */
window.pxh.stripHTML = function (html) {
  if (html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  } else {
    return false;
  }
};

/**
 * Changes classes on the targeted elements
 * 
 * @example
 * // finds all elements with class `nav` and adds the class `nav--hidden` to them
 * window.pxh.changeClasses('nav', 'add', 'nav--hidden');
 * @param {String} targetClassName Base CSS class of the targeted elements to be changed
 * @param {String} changeType Type of change to apply. Options are `add`, `remove`, `toggle` 
 * @param {String} classNamesToChange List of classes to change on the targeted elements, separated by spaces
 */
window.pxh.changeClasses = function (targetClassName, changeType, classNamesToChange) {
  var targetElements = document.getElementsByClassName(targetClassName);
  if (window.pxh.arrayExists(targetElements) && classNamesToChange) {
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

/**
 * Adds a sensor that will fire a viewResized event every time its corresponding element changes size
 * 
 * @param {string} targetId The id of the target element that should fire an event when it resizes
 */
window.pxh.addResizeSensor = function (targetId) {
  var targetElement = document.getElementById(targetId);
  if (targetElement) {
    new pxhResizeSensor(targetElement, function () {
      document.dispatchEvent(window.pxh.viewResized);
    });
  }
};

window.pxh.action = {};

/**
 * Toggles classes on an element when clicked, and immediately fires any event in the clicked target area
 * 
 * @param {string} control CSS class name of the elements that should act as controls for firing this event
 * @param {string} target CSS class name of the target elements that should be changed when this event is fired
 * @param {string} change Type of change to perform on the target elements. Options are `add`, `remove`, `toggle`
 * @param {string} className Space-delimited list of CSS classes to change on the target elements
 */

window.pxh.action.clickToCloseAndFire = function (control, target, change, className) {
  var controlElement = document.getElementsByClassName(control);
  var targetElement = document.getElementsByClassName(target);
  if (window.pxh.arrayExists(controlElement) && window.pxh.arrayExists(targetElement)) {
    document.addEventListener('click', function (event) {
      window.pxh.changeClasses(target, change, className);
    });
  }
};

/**
 * Toggles classes on an element when clicked, but does not fire any event in the clicked target area
 * 
 * @param {string} control Unique ID of the element that should act as controls for firing this event
 * @param {string} target Unique ID of the target element that should be changed when this event is fired
 * @param {string} className The class to be removed from the target element
 */
window.pxh.action.clickToCloseAndHold = function (control, target, className) {
  var controlElement = document.getElementById(control);
  var closeElement = document.getElementById('js-closer');
  var targetElement = document.getElementById(target);
  var zIndex = window.pxh.getStyle(target, 'z-index') - 1;
  if (controlElement && targetElement) {
    if (!closeElement) {
      var closeElement = document.createElement('div');
      closeElement.id = 'js-closer';
      closeElement.classList.add('pxh-closer');
      closeElement.classList.add('pxh-closer--transparent');
      closeElement.setAttribute('style', 'z-index: ' + zIndex + ';');
      var insertedCloser = document.body.appendChild(closeElement);
      insertedCloser.addEventListener('click', function (event) {
        targetElement.classList.remove(className);
        insertedCloser.remove();
      });
    } else {
      closeElement.remove();
    }
  }
};

/**
 * Toggles classes on an element when clicked
 * 
 * @param {string} control CSS class name of the elements that should act as controls for firing this event
 * @param {string} target CSS class name of the target elements that should be changed when this event is fired
 * @param {string} className The class to be removed from the target element
 */
window.pxh.toggleMenu = function (control, target, className) {
  var controlElements = document.getElementsByClassName(control);
  var targetElements = document.getElementsByClassName(target);
  if (window.pxh.arrayExists(controlElements) && window.pxh.arrayExists(targetElements)) {
    for (var i = controlElements.length - 1; i >= 0; i--) {
      controlElements[i].addEventListener('click', function (event) {
        event.preventDefault();
        window.pxh.changeClasses(target, 'toggle', className);
      });
    }
  }
};

// ********
// FIRE!!!!
// ********

window.pxh.viewResized = document.createEvent('CustomEvent');
window.pxh.viewResized.initCustomEvent('pxhViewResized', false, false, {
  'viewResized': true
});

document.addEventListener('DOMContentLoaded', function (event) {
  window.pxh.addResizeSensor('js-view');
});

// ******
// DRAWER
// ******

// **************
// CONFIG OBJECTS
// **************

window.pxh.states = {
  'default': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_MD + ' ' + window.pxh.DRAWER_WIDE_AT_LG,
      'remove': window.pxh.DRAWER_NARROW_AT_LG
    },
    'pxh-drawer-header__link': {
      'remove': window.pxh.DRAWER_HEADER_LINK_WIDE_AT_MD,
      'add': window.pxh.DRAWER_HEADER_LINK_NARROW_AT_MD + ' ' + window.pxh.DRAWER_HEADER_LINK_WIDE_AT_LG
    },
    'pxh-overlay': {
      'add': window.pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation': {
      'add': window.pxh.NAVIGATION_NARROW_AT_MD + ' ' + window.pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login': {
      'add': window.pxh.LOGIN_NARROW_AT_MD + ' ' + window.pxh.LOGIN_WIDE_AT_LG
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_NARROW_AT_MD + ' ' + window.pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link': {
      'add': window.pxh.LOGIN_LINK_NARROW_AT_MD + ' ' + window.pxh.LOGIN_LINK_WIDE_AT_LG
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_NARROW_AT_MD + ' ' + window.pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_NARROW_AT_MD + ' ' + window.pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD + ' ' + window.pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view': {
      'remove': window.pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + window.pxh.VIEW_WIDE_AT_LG,
      'add': window.pxh.VIEW_NARROW_AT_LG
    },
    'pxh-view-header': {
      'remove': window.pxh.VIEW_HEADER_WIDE_AT_LG,
      'add': window.pxh.VIEW_HEADER_NARROW_AT_LG
    },
    'pxh-view-header-drawer-toggle': {
      'remove': window.pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications': {
      'remove': window.pxh.NOTIFICATIONS_VISIBLE
    }
  },
  'open': {
    'pxh-drawer': {
      'remove': window.pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_LG,
      'add': window.pxh.DRAWER_WIDE_AT_LG
    },
    'pxh-drawer-header__link': {
      'remove': window.pxh.DRAWER_HEADER_LINK_NARROW_AT_MD,
      'add': window.pxh.DRAWER_HEADER_LINK_WIDE_AT_MD + ' ' + window.pxh.DRAWER_HEADER_LINK_WIDE_AT_LG
    },
    'pxh-overlay': {
      'remove': window.pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation': {
      'remove': window.pxh.NAVIGATION_NARROW_AT_MD,
      'add': window.pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login': {
      'add': window.pxh.LOGIN_WIDE_AT_LG,
      'remove': window.pxh.LOGIN_NARROW_AT_MD
    },
    'pxh-login__name': {
      'remove': window.pxh.LOGIN_NAME_NARROW_AT_MD,
      'add': window.pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link': {
      'remove': window.pxh.LOGIN_LINK_NARROW_AT_MD + ' ' + window.pxh.LOGIN_LINK_NARROW_AT_LG
    },
    'pxh-login__settings': {
      'remove': window.pxh.LOGIN_SETTINGS_NARROW_AT_MD,
      'add': window.pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret': {
      'remove': window.pxh.LOGIN_CARET_NARROW_AT_MD,
      'add': window.pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications': {
      'remove': window.pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD,
      'add': window.pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view': {
      'add': window.pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + window.pxh.VIEW_NARROW_AT_LG,
      'remove': window.pxh.VIEW_WIDE_AT_LG
    },
    'pxh-view-header': {
      'add': window.pxh.VIEW_HEADER_NARROW_AT_LG,
      'remove': window.pxh.VIEW_HEADER_WIDE_AT_LG
    },
    'pxh-view-header-drawer-toggle': {
      'add': window.pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    }
  },
  'narrowAtLg': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_MD + ' ' + window.pxh.DRAWER_NARROW_AT_LG,
      'remove': window.pxh.DRAWER_WIDE_AT_LG
    },
    'pxh-drawer-header__link': {
      'remove': window.pxh.DRAWER_HEADER_LINK_WIDE_AT_MD + ' ' + window.pxh.DRAWER_HEADER_LINK_WIDE_AT_LG,
      'add': window.pxh.DRAWER_HEADER_LINK_NARROW_AT_MD
    },
    'pxh-overlay': {
      'add': window.pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation': {
      'add': window.pxh.NAVIGATION_NARROW_AT_MD,
      'remove': window.pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login': {
      'add': window.pxh.LOGIN_NARROW_AT_MD,
      'remove': window.pxh.LOGIN_WIDE_AT_LG
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_NARROW_AT_MD,
      'remove': window.pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link': {
      'add': window.pxh.LOGIN_LINK_NARROW_AT_MD,
      'remove': window.pxh.LOGIN_LINK_WIDE_AT_LG
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_NARROW_AT_MD,
      'remove': window.pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_NARROW_AT_MD,
      'remove': window.pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD,
      'remove': window.pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view': {
      'remove': window.pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + window.pxh.VIEW_NARROW_AT_LG,
      'add': window.pxh.VIEW_WIDE_AT_LG
    },
    'pxh-view-header': {
      'remove': window.pxh.VIEW_HEADER_NARROW_AT_LG,
      'add': window.pxh.VIEW_HEADER_WIDE_AT_LG
    },
    'pxh-view-header-drawer-toggle': {
      'remove': window.pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications': {
      'remove': window.pxh.NOTIFICATIONS_VISIBLE
    }
  }
};

window.pxh.transitions = {
  'outToIn': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_IN
    }
  },
  'inToOut': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_OUT
    }
  },
  'narrowToOpen': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_WIDE
    },
    'pxh-drawer-header__link': {
      'add': window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text': {
      'add': window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link': {
      'add': window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    }
  },
  'openToNarrow': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_NARROW
    },
    'pxh-drawer-header__link': {
      'add': window.pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text': {
      'add': window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link': {
      'add': window.pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    }
  },
  'outToNarrow': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_IN
    },
    'pxh-view': {
      'add': window.pxh.VIEW_ANIMATE_FULL_TO_WIDE
    },
    'pxh-view-header': {
      'add': window.pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE
    }
  },
  'narrowToOut': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_OUT_WIDE
    },
    'pxh-drawer-header__link': {
      'add': window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text': {
      'add': window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link': {
      'add': window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    }
  },
  'wideToNarrow': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_NARROW
    },
    'pxh-drawer-header__link': {
      'add': window.pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text': {
      'add': window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link': {
      'add': window.pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    },
    'pxh-view': {
      'add': window.pxh.VIEW_ANIMATE_WIDE
    },
    'pxh-view-header': {
      'add': window.pxh.VIEW_HEADER_ANIMATE_WIDE
    }
  },
  'narrowToWide': {
    'pxh-drawer': {
      'add': window.pxh.DRAWER_ANIMATE_WIDE
    },
    'pxh-drawer-header__link': {
      'add': window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text': {
      'add': window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link': {
      'add': window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name': {
      'add': window.pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret': {
      'add': window.pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings': {
      'add': window.pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications': {
      'add': window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    },
    'pxh-view': {
      'add': window.pxh.VIEW_ANIMATE_NARROW
    },
    'pxh-view-header': {
      'add': window.pxh.VIEW_HEADER_ANIMATE_NARROW
    }
  },
  'clearAll': {
    'pxh-drawer': {
      'remove': window.pxh.DRAWER_ANIMATE_IN + ' ' + window.pxh.DRAWER_ANIMATE_OUT + ' ' + window.pxh.DRAWER_ANIMATE_NARROW + ' ' + window.pxh.DRAWER_ANIMATE_WIDE + ' ' + window.pxh.DRAWER_ANIMATE_OUT_WIDE
    },
    'pxh-drawer-header__link': {
      'remove': window.pxh.DRAWER_HEADER_LINK_ANIMATE_IN + ' ' + window.pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text': {
      'remove': window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN + ' ' + window.pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link': {
      'remove': window.pxh.NAVIGATION_SUB_LINK_ANIMATE_IN + ' ' + window.pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name': {
      'remove': window.pxh.LOGIN_NAME_ANIMATE_IN + ' ' + window.pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret': {
      'remove': window.pxh.LOGIN_CARET_ANIMATE_IN + ' ' + window.pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings': {
      'remove': window.pxh.LOGIN_SETTINGS_ANIMATE_IN + ' ' + window.pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications': {
      'remove': window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN + ' ' + window.pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    },
    'pxh-view': {
      'remove': window.pxh.VIEW_ANIMATE_WIDE + ' ' + window.pxh.VIEW_ANIMATE_NARROW + ' ' + window.pxh.VIEW_ANIMATE_FULL_TO_WIDE
    },
    'pxh-view-header': {
      'remove': window.pxh.VIEW_HEADER_ANIMATE_WIDE + ' ' + window.pxh.VIEW_HEADER_ANIMATE_NARROW + ' ' + window.pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE
    }
  }
};

// *****************
// DRAWER FUNCTIONS
// *****************

/**
 * Loads a state from a state object, and changes the CSS classes on all relevant elements
 * 
 * @param {Object} stateObject An object containing the states of your application
 * @param {String} targetStateName The name of the desired state to load from the state object
 */
window.pxh.loadState = function (stateObject, targetStateName) {
  // grab the target state object from the master states object
  var targetState = window.pxh.getItemByPropertyName(stateObject, targetStateName);
  // iterate through each target class in the target state object
  for (var targetClass in targetState) {
    // grab the target state for each class in the target state
    var stateChangeTarget = targetState[targetClass];
    // iterate through each target state change (e.g. whether to add, remove, toggle)
    for (var stateChangeType in stateChangeTarget) {
      // grab the target state change classes (e.g. which classes to add, remove, or toggle)
      var stateChangeClasses = stateChangeTarget[stateChangeType];
      // change the classes of each target element based on its target class, the type of change to make, and its target classes
      window.pxh.changeClasses(targetClass, stateChangeType, stateChangeClasses);
    }
  }
};

/**
 * Binds drawer state change events to toggle buttons, which will change the state of the drawer depending on the current drawer and responsive contexts
 * 
 * @param {String} controlName CSS class name of control to bind events to
 */
window.pxh.bindControl = function (controlName) {
  var controlElements = document.getElementsByClassName(controlName);
  var drawer = document.getElementById('js-drawer');
  if (window.pxh.arrayExists(controlElements) && drawer) {
    for (var i = controlElements.length - 1; i >= 0; i--) {
      controlElements[i].addEventListener('click', function (event) {
        event.preventDefault();
        var drawerIsAtDefaultState = drawer.classList.contains(window.pxh.DRAWER_WIDE_AT_LG);
        var drawerIsNarrowAtMd = drawer.classList.contains(window.pxh.DRAWER_NARROW_AT_MD);
        var drawerIsHiddenAtSm = drawer.classList.contains(window.pxh.DRAWER_HIDDEN_UNTIL_AT_MD);
        var closeElement = document.getElementById('js-closer');
        window.pxh.loadState(window.pxh.transitions, 'clearAll');
        if (window.matchMedia('(min-width: 1024px)').matches && drawerIsAtDefaultState) {
          window.pxh.loadState(window.pxh.transitions, 'wideToNarrow');
          window.pxh.loadState(window.pxh.states, 'narrowAtLg');
          if (closeElement) closeElement.remove();
          document.dispatchEvent(window.pxh.drawerClosed);
          window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        } else if (window.matchMedia('(min-width: 1024px)').matches) {
          window.pxh.loadState(window.pxh.transitions, 'narrowToWide');
          window.pxh.loadState(window.pxh.states, 'default');
          document.dispatchEvent(window.pxh.drawerOpened);
          window.pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
          window.pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
        } else if (drawerIsNarrowAtMd && window.matchMedia('(min-width: 768px)').matches) {
          window.pxh.loadState(window.pxh.transitions, 'narrowToOpen');
          window.pxh.loadState(window.pxh.states, 'open');
          document.dispatchEvent(window.pxh.drawerOpened);
          window.pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
          window.pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
        } else if (window.matchMedia('(min-width: 768px)').matches) {
          window.pxh.loadState(window.pxh.transitions, 'openToNarrow');
          window.pxh.loadState(window.pxh.states, 'default');
          if (closeElement) closeElement.remove();
          document.dispatchEvent(window.pxh.drawerClosed);
          window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        } else if (drawerIsHiddenAtSm) {
          window.pxh.loadState(window.pxh.transitions, 'outToIn');
          window.pxh.loadState(window.pxh.states, 'open');
          document.dispatchEvent(window.pxh.drawerOpened);
          window.pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
          window.pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
        } else {
          window.pxh.loadState(window.pxh.transitions, 'inToOut');
          window.pxh.loadState(window.pxh.states, 'default');
          document.dispatchEvent(window.pxh.drawerClosed);
          window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        }
      });
    }
  }
};

/**
 * Creates drawer state change events that should fire when the browser transitions between the medium breakpoint
 * 
 * @param {String} breakpoint 
 */
window.pxh.breakpointAtMd = function (breakpoint) {
  window.pxh.loadState(window.pxh.transitions, 'clearAll');
  var drawer = document.getElementById('js-drawer');
  var drawerIsWideAtLg = drawer.classList.contains('pxh-drawer--wide@lg');
  var drawerIsNarrowAtMd = drawer.classList.contains('pxh-drawer--narrow@md');
  if (breakpoint.matches) {
    // we entered the @md breakpoint from the @sm breakpoint
    if (drawerIsNarrowAtMd) {
      // the drawer wasn't open @sm so open it to narrow @md
      // fire the transition
      window.pxh.loadState(window.pxh.transitions, 'outToNarrow');
    }
  } else {
    // we exited the @md breakpoint into the @sm breakpoint
    if (drawerIsNarrowAtMd) {
      // the drawer was open to narrow @md so move it out @sm
      window.pxh.loadState(window.pxh.transitions, 'narrowToOut');
    }
  }
};

/**
 * Creates drawer state change events that should fire when the browser transitions between the large breakpoint
 * 
 * @param {String} breakpoint 
 */
window.pxh.breakpointAtLg = function (breakpoint) {
  window.pxh.loadState(window.pxh.transitions, 'clearAll');
  var drawer = document.getElementById('js-drawer');
  var drawerIsWideAtLg = drawer.classList.contains('pxh-drawer--wide@lg');
  var drawerIsNarrowAtMd = drawer.classList.contains('pxh-drawer--narrow@md');
  var closeElement = document.getElementById('js-closer');
  if (breakpoint.matches) {
    // we entered the @lg breakpoint from the @md breakpoint
    if (drawerIsWideAtLg && !drawerIsNarrowAtMd) {
      // the drawer was open @md so keep it open @lg
      // don't fire any transitions
      window.pxh.loadState(window.pxh.states, 'default');
      if (closeElement) closeElement.remove(); // the state change auto-hides the notification list because it doesn't know if it's @sm or @lg, so the close element needs to follow suit
      window.pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
      window.pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
    } else {
      // drawer was narrow @md so transition it to wide @lg
      // fire transitions
      window.pxh.loadState(window.pxh.transitions, 'narrowToWide');
      window.pxh.loadState(window.pxh.states, 'default');
      document.dispatchEvent(window.pxh.drawerOpened);
      window.pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
      window.pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
    }
  } else {
    // we exited the @lg breakpoint into the @md breakpoint
    if (drawerIsWideAtLg) {
      // the drawer was wide @lg so transition it to narrow @md
      // close the notifications list if it's open
      // fire transitions
      window.pxh.loadState(window.pxh.transitions, 'wideToNarrow');
    };
    window.pxh.loadState(window.pxh.states, 'default');
    if (closeElement) closeElement.remove();
    document.dispatchEvent(window.pxh.drawerClosed);
    window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
    window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
  }
};

/**
 * Binds media queries to drawer controls or something
 * 
 * @param {String} targetClass CSS class name of elements to bind to
 * @param {Object} window.matchMedia object
 */
window.pxh.bindDrawerMediaQueryControls = function (targetClass, mediaQuery) {
  var targetElements = document.getElementsByClassName(targetClass);
  var drawer = document.getElementById('js-drawer');
  if (window.pxh.arrayExists(targetElements) && drawer) {
    // iterate through drawer controls and fire the pxhToggleDrawer function when clicked
    for (var i = targetElements.length - 1; i >= 0; i--) {
      targetElements[i].addEventListener('click', function () {
        window.pxh.loadState(window.pxh.transitions, 'clearAll');
        if (!mediaQuery.matches) {
          window.pxh.loadState(window.pxh.states, 'default');
          window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        }
      });
    }
  }
};

/**
 * When the user clicks the overlay, hides the drawer at the small breakpoint, or collapses the drawer at the narrow breakpoint
 * 
 * 
 */
window.pxh.overlayDrawerControl = function () {
  var overlay = document.getElementsByClassName(window.pxh.OVERLAY);
  if (window.pxh.arrayExists(overlay)) {
    for (var i = overlay.length - 1; i >= 0; i--) {
      overlay[i].addEventListener('click', function (event) {
        if (!lgBreakpoint.matches && window.pxh.Cookies.get('pxh-drawer-open') === 'true') {
          window.pxh.loadState(window.pxh.transitions, 'clearAll');
          window.pxh.loadState(window.pxh.states, 'default');
          document.dispatchEvent(window.pxh.drawerClosed);
          window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
          window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
        }
      });
    }
  }
};

/**
 * When the user hits the "ESC" key on the keyboard, hides the drawer at the small breakpoint, or collapses the drawer at the narrow breakpoint
 * 
 */
window.pxh.escapeDrawerControl = function () {
  document.addEventListener('keyup', function (event) {
    if (event.keyCode == 27 && !lgBreakpoint.matches && window.pxh.Cookies.get('pxh-drawer-open') === 'true') {
      window.pxh.loadState(window.pxh.transitions, 'clearAll');
      window.pxh.loadState(window.pxh.states, 'default');
      document.dispatchEvent(window.pxh.drawerClosed);
      window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
      window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
    }
  });
};

/**
 * Toggles the visibility of a login menu
 * 
 * @param {String} toggleControl CSS class name of the elements to turn into controls that will fire this event
 * @param {String} toggleTarget CSS class name of the login menu elements that should have their visibility toggled
 * @param {string} toggleClass Space-delimited list of CSS class names to toggle on the target elements when this event fires
 */
window.pxh.toggleLoginMenu = function (toggleControl, toggleTarget, toggleClass) {
  var toggleControlElements = document.getElementsByClassName(toggleControl);
  var toggleTargetElements = document.getElementsByClassName(toggleTarget);
  if (window.pxh.arrayExists(toggleControlElements) && window.pxh.arrayExists(toggleTargetElements)) {
    for (var i = toggleControlElements.length - 1; i >= 0; i--) {
      toggleControlElements[i].addEventListener('click', function (event) {
        event.preventDefault();
        var menuIsVisible = toggleTargetElements[0].classList.contains(toggleClass);
        window.pxh.changeClasses(window.pxh.LOGIN_MENU, 'remove', toggleClass);
        if (!menuIsVisible) {
          window.pxh.changeClasses(toggleTarget, 'toggle', toggleClass);
        }
        event.stopPropagation();
      });
    }
  }
};

// ********
// FIRE!!!!
// ********

var lgBreakpoint = window.matchMedia('(min-width: 1024px)');
var mdBreakpoint = window.matchMedia('(min-width: 768px)');

document.addEventListener('DOMContentLoaded', function (event) {
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

  if (window.pxh.Cookies.get('pxh-drawer-open') === null) {
    window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
  }

  if (window.pxh.Cookies.get('pxh-drawer-narrow') === null) {
    window.pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/' });
  }

  // check if the 'narrow' cookie is set and if we're currently at the desktop breakpoint
  if (window.matchMedia('(min-width: 1024px)').matches && window.pxh.Cookies.get('pxh-drawer-narrow') === 'true') {
    // toggle the drawer closed
    window.pxh.loadState(window.pxh.states, 'narrowAtLg');
    document.dispatchEvent(window.pxh.drawerClosed);
    window.pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/' });
  } else if (window.matchMedia('(min-width: 1024px)').matches) {
    window.pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/' });
  } else {
    window.pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/' });
  }
  document.addEventListener('navRefreshed', function (event) {
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

// ******
// TOASTS
// ******

/** @namespace window.pxh.toast */
window.pxh.toast = {
  /** @namespace window.pxh.toast.badge */
  badge: {
    count: 0,

    /** 
     * Increases the value of the notification icon badge by 1
     * 
     * Truncates the value if the resulting number of notifications is greater than 9
     * 
     * Won't display a value below zero
     */
    increment: function increment() {
      window.pxh.toast.badge.count = window.pxh.toast.badge.count + 1;
      if (window.pxh.toast.badge.count > 9) {
        window.pxh.toast.badge.text = '9+';
      } else if (window.pxh.toast.badge.count < 0) {
        window.pxh.toast.badge.count = 0;
        window.pxh.toast.badge.text = 0;
      } else {
        window.pxh.toast.badge.text = window.pxh.toast.badge.count;
      }
      window.pxh.toast.badge.update();
    },
    /** 
     * Decreases the value for on the notification icon badge by 1
     * 
     * Truncates the value if the resulting number of notifications is greater than 9
     * 
     * Won't display a value below zero
     */
    decrement: function decrement() {
      window.pxh.toast.badge.count = window.pxh.toast.badge.count - 1;
      if (window.pxh.toast.badge.count > 9) {
        window.pxh.toast.badge.text = '9+';
      } else if (window.pxh.toast.badge.count < 0) {
        window.pxh.toast.badge.count = 0;
        window.pxh.toast.badge.text = 0;
      } else {
        window.pxh.toast.badge.text = window.pxh.toast.badge.count;
      }
      window.pxh.toast.badge.update();
    },
    /** 
     * Locates the notification icon badge element and updates the displayed value
     * Hides the notification icon and badge entirely if there aren't any notifications
     */
    update: function update() {
      var notificationIcon = '';
      var notificationBadge = '';
      if ((notificationIcon = document.getElementById('js-login__notifications')) && (notificationBadge = document.getElementById('js-login__notifications-badge'))) {
        if (window.pxh.toast.badge.count > 0) {
          notificationBadge.innerHTML = window.pxh.toast.badge.text;
          notificationIcon.classList.remove(window.pxh.DISPLAY_NONE);
          notificationBadge.classList.remove(window.pxh.LOGIN_NOTIFICATIONS_BADGE_HIDDEN);
        } else {
          notificationIcon.classList.add(window.pxh.DISPLAY_NONE);
          notificationBadge.classList.add(window.pxh.LOGIN_NOTIFICATIONS_BADGE_HIDDEN);
        }
      }
    }
  },

  /** 
   * Adds a toast and corresponding notification (if applicable) to the application
   * 
   * @example
   * var toastObject1 = {
   *   value : 'something' // window.pxh.toast.add merely requires that the toast object exists, and will use reasonable defaults if any parameters are missing
   * }
   *
   * var toastObject2 = {
   *   type : 'orange',
   *   isPersistent : true,
   *   icon : 'exclamation-circle',
   *   text : 'It can be this long or longer if you want. In fact, it can be really, really long if you have a lot you want to say. We kind of discourage this much content but knock yourself out! Just keep talking and talking and talking and this area will keep expanding and expanding.',
   *   actionLabel : 'View a lot of things right now',
   *   actionLink : 'http://predix.com',
   *   formattedTimestamp: '9:36 AM'
   * }
   *
   * var toastObject3 = {
   *   type : 'red',
   *   isPersistent : false,
   *   icon : 'exclamation-triangle',
   *   text : 'This is going to fire a callback.',
   *   actionLabel : 'Callback, yo!',
   *   actionCallback : function() {
   *     console.log('this was called from actionCallback')
   *   }
   * }
   *
   * var toastObject4 = {
   *   type : 'red',
   *   isPersistent : false,
   *   icon : 'times-circle',
   *   text : 'Fourth notification? Coming right up!',
   *   actionLabel : 'GE Digital',
   *   actionLink : 'http://digital.ge.com'
   * }
   * 
   * document.addEventListener('DOMContentLoaded', function(event) {
   *   window.pxh.toast.add(toastObject1);
   *   window.pxh.toast.add(toastObject2, true); // creates a notification but not a toast
   *   window.pxh.toast.add(toastObject3);
   *   window.pxh.toast.add(toastObject4);
   * });
   * @param {object} object An object containing the parameters for the toast (and notification, if applicable) that will be created
   * @param {String} [object.id=unique hex value] - The unique id for the toast/notification being generated. If not provided, pxh-chrome will automatically generate a unique hexidecimal value. The id must be unique or else unexpected behavior might occur. If your application will be providing its own id, it is your responsibility to enforce its uniqueness
   * @param {String} [object.type='blue'] - The type of toast/notification. Available options are 'green', 'blue', 'orange', 'red'
   * @param {String} [object.icon='info-circle'] - The name of the Font Awesome icon to display for the toast/notification
   * @param {String} [object.text='You received a new notification.'] - The text to display for the toast/notification. Any HTML tags will be stripped out and the resulting plaintext will be displayed. 
   * @param {String} [object.formattedTimestamp] The formatted text to display for the datetime the toast/notification was issued (e.g. 9:36 AM)
   * @param {String} [object.timestamp] The ISO 8601 datetime value for when the toast/notification was issued (e.g. 2016-08-01T17:36:10+00:00)
  * @param {Boolean} [object.isPersistent=false] - Whether or not the toast should persist until the user actively dismisses it. This option is only recognized if the toast has an `actionLink` or `actionCallback` associated with it
   * @param {Boolean} [object.suppressToast=false] An optional parameter that, if true, will only create a notification (if applicable) from the object, and will display a corresponding toast to the user
   * @param {String} [object.actionText='Action'] - The text to display in the toast's action button, if an `actionLink` or `actionCallback` is present.
   * @param {String} [object.actionLink] - The URL to follow when the user clicks the action button. Can be a fully qualified URL (e.g. http://www.predix.com/) or a relative route within your application (e.g. assets/detail/1234?show_cases_tab)
   * @param {Function} [object.actionCallback] - The callback function to execute when the user clicks the toast/notification's action button
   */
  add: function add(object, suppressToast) {
    var id = object && object.id ? object.id : Math.floor(Math.random() * 16777215).toString(16);
    var notificationList = '';
    var toastList = '';
    if ((notificationList = document.getElementById('js-notifications__list')) && (object.actionLink || object.actionCallback)) {
      var notificationFirstChild = notificationList.firstChild;
      var notificationElement = notificationList.insertBefore(window.pxh.toast.markup.createNotification(object, id), notificationFirstChild);
      window.pxh.toast.badge.increment();
      window.pxh.toast.action.dismissButton(notificationElement, 'notification', id);
      window.pxh.toast.action.expandButton(notificationElement, 'notification');
      if (object.actionLink) {
        window.pxh.toast.action.bindLink(toastElement, 'notification__link', id);
      } else if (object.actionCallback) {
        window.pxh.toast.action.bindCallback(toastElement, 'notification__link', id, object.actionCallback);
      }
    }
    if ((toastList = document.getElementById('js-toasts')) && !suppressToast) {
      var toastFirstChild = toastList.firstChild;
      var toastElement = toastList.insertBefore(window.pxh.toast.markup.createToast(object, id), toastFirstChild);
      window.pxh.toast.action.dismissButton(toastElement, 'toast', id, true);
      window.pxh.toast.action.expandButton(toastElement, 'toast');
      if (object.actionLink) {
        window.pxh.toast.action.bindLink(toastElement, 'toast__button', id);
      } else if (object.actionCallback) {
        window.pxh.toast.action.bindCallback(toastElement, 'toast__button', id, object.actionCallback);
      }
      if (!object.isPersistent) {
        setTimeout(function () {
          if (!toastElement.classList.contains(window.pxh.TOAST_EXPANDED)) {
            // after 2000ms animate the toast out
            window.pxh.toast.autoHide(id);
            // 1000ms after the animation, remove the notification from the DOM
            setTimeout(function () {
              window.pxh.toast.autoRemove(id);
            }, 1000);
          }
        }, 5000);
      }
    }
    return id;
  },
  /** @namespace window.pxh.toast.action */
  action: {
    /** 
     * Binds an event to an element that will dismiss a toast/notification (and its correponding toast/notification, if applicable) when clicked
     * 
     * @param {HTMLElement} element The element of the toast/notification to be dismissed
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification combination associated with the target dismiss button
     */
    dismissButton: function dismissButton(element, slug, id, preserveNotification) {
      var button = document.getElementById('js-' + slug + '__dismiss-button--' + id);
      if (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          window.pxh.toast.hide(id, preserveNotification);
          setTimeout(function () {
            window.pxh.toast.remove(id, preserveNotification);
          }, 1000);
        });
      }
    },
    /** 
     * Binds an event to an element that will expand its corresponding toast/notification when clicked
     * 
     * @param {HTMLElement} element The element of the toast/notification to be dismissed
     * @param {String} slug The text slug to be used when generating class names and targets
     */
    expandButton: function expandButton(element, slug) {
      var button = element.querySelector('.js-' + slug + '__more-button');
      if (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          window.pxh.toast.expand(element, slug);
        });
      }
    },
    /** 
     * Removes all toasts and notifications from application
     */
    removeAllButton: function removeAllButton() {
      window.pxh.toast.hideAll();
      setTimeout(function () {
        window.pxh.toast.removeAll();
      }, 1000);
    },

    /** 
     * Binds an callback to an element that will fire when clicked, and automatically hide and remove the corresponding toast/notification from the application
     * 
     * @param {HTMLElement} element The element of the toast/notification to be dismissed
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification combination associated with the callback action
     * @param {Function} callback The callback to fire
     */
    bindCallback: function bindCallback(element, slug, id, callback) {
      var button = document.getElementById('js-' + slug + '--' + id);
      if (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          window.pxh.toast.action.fireCallback(callback);
          window.pxh.toast.hide(id);
          setTimeout(function () {
            window.pxh.toast.remove(id);
          }, 1000);
        });
      }
    },

    /** 
     * Binds a hyperlink to an element that will fire when clicked, and automatically hide and remove the corresponding toast/notification from the application
     * 
     * @param {HTMLElement} element The element of the toast/notification to be dismissed
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification combination associated with the link action
     * @param {Function} callback The callback to fire
     */
    bindLink: function bindLink(element, slug, id) {
      var button = document.getElementById('js-' + slug + '--' + id);
      if (button) {
        button.addEventListener('click', function (event) {
          window.pxh.toast.hide(id);
          setTimeout(function () {
            window.pxh.toast.remove(id);
          }, 1000);
        });
      }
    },
    /** 
     * Fires a callback
     * 
     * @param {Function} callback The callback to fire
     */
    fireCallback: function fireCallback(callback) {
      callback();
    }
  },

  /** 
   * Hides a toast and its corresponding notification (if applicable) from the user
   * 
   * @param {String} id The unique ID of the toast/notification combination to hide from the user
   * @param {Boolean} [preserveNotification=false] When dismissing a toast, whether to retain its corresponding notification in the notification list
   */
  hide: function hide(id, preserveNotification) {
    var toastList = '';
    var toastItem = '';
    var notificationList = '';
    var notification = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastItem = document.getElementById('js-toast--' + id))) {
      toastItem.classList.add(window.pxh.TOAST_ANIMATE_OUT);
      toastItem.classList.remove(window.pxh.TOAST_ANIMATE_IN);
    }
    if ((notificationList = document.getElementById('js-notifications__list')) && (notification = document.getElementById('js-notification--' + id)) && !preserveNotification) {
      notification.classList.add(window.pxh.NOTIFICATION_ANIMATE_OUT);
      notification.classList.remove(window.pxh.NOTIFICATION_ANIMATE_IN);
    }
  },

  /** 
   * Hides all notifications from the user
   * 
   */
  hideAll: function hideAll() {
    var notificationList = '';
    var notifications = [];
    if ((notificationList = document.getElementById('js-notifications__list')) && (notifications = document.getElementsByClassName(window.pxh.NOTIFICATION))) {
      for (var i = notifications.length - 1; i >= 0; i--) {
        var id = notifications[i].id.replace('js-notification--', '');
        window.pxh.toast.hide(id);
      }
    }
  },

  /** 
   * Hides a toast
   * 
   * @param {String} id The unique ID of the toast to hide
   */
  autoHide: function autoHide(id) {
    var toastList = '';
    var toastItem = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastItem = document.getElementById('js-toast--' + id))) {
      toastItem.classList.add(window.pxh.TOAST_ANIMATE_OUT);
      toastItem.classList.remove(window.pxh.TOAST_ANIMATE_IN);
    }
  },

  /** 
   * Removes a toast and its corresponding notification (if applicable) from the application
   * 
   * @param {String} id The unique ID of the toast/notification combination to remove
   */
  remove: function remove(id, preserveNotification) {
    var toastList = '';
    var toastElement = '';
    var notificationList = '';
    var notification = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastElement = document.getElementById('js-toast--' + id))) {
      toastElement.remove();
    }
    if ((notificationList = document.getElementById('js-notifications__list')) && (notification = document.getElementById('js-notification--' + id)) && !preserveNotification) {
      notification.remove();
      window.pxh.toast.badge.decrement();
    }
  },

  /**
   * Removes a toast from the application
   * 
   * @param {String} id The unique ID of the toast to remove
   */
  autoRemove: function autoRemove(id) {
    var toastList = '';
    var toastElement = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastElement = document.getElementById('js-toast--' + id))) {
      toastElement.remove();
    }
  },

  /**
   * Removes all notifications from the application
   * 
   */
  removeAll: function removeAll() {
    var notificationList = '';
    var notifications = [];
    if ((notificationList = document.getElementById('js-notifications__list')) && (notifications = document.getElementsByClassName(window.pxh.NOTIFICATION))) {
      for (var i = notifications.length - 1; i >= 0; i--) {
        var id = notifications[i].id.replace('js-notification--', '');
        window.pxh.toast.remove(id);
      }
    }
  },

  /**
   * Expands the targeted toast/notification so all its text is visible to the user, or collapses it if it is already expanded
   * 
   * @param {HTMLElement} element The element to expand
   * @param {String} slug The text slug to be used when generating class names and targets
   */
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
  /** @namespace window.pxh.toast.markup */
  markup: {
    /**
     * Generates the HTML markup for displaying a toast/notification's icon
     * 
     * @param {Object} object The JavaScript object of the toast/notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     */
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

    /**
     * Generates the HTML markup for displaying a toast's text
     * 
     * @param {Object} object The JavaScript object of the toast that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     */
    toastText: function toastText(object, slug) {
      var text = object.text ? window.pxh.stripHTML(object.text) : 'You received a new notification.';
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__text">\n');
      markup.push('  ' + text + '\n');
      markup.push(window.pxh.toast.markup.more(object, slug));
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the HTML markup for displaying a notification's text
     * 
     * @param {Object} object The JavaScript object of the notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the notification being created
     */
    notificationText: function notificationText(object, slug, id) {
      var text = object.text ? window.pxh.stripHTML(object.text) : 'You received a new notification.';
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__text">\n');
      if (object.actionLink) {
        markup.push('  <a class="pxh-' + slug + '__link" href="' + object.actionLink + '" id="js-' + slug + '__link--' + id + '">\n');
      } else if (object.actionCallback) {
        markup.push('  <a class="pxh-' + slug + '__link" href="#" id="js-' + slug + '__link--' + id + '">\n');
      }
      markup.push('  ' + text + '\n');
      if (object.actionLink || object.actionCallback) {
        markup.push('  </a>\n');
      }
      markup.push(window.pxh.toast.markup.more(object, slug));
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the HTML markup for displaying a toast/notification's "show more" button
     * 
     * @param {Object} object The JavaScript object of the toast/notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     */
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

    /**
     * Generates the HTML markup for displaying a notification's formatted timestamp. This method displays the contents of the `object.formattedTimestamp` string for the toast object passed to it, with a fallback to `object.timestamp` if `formattedTimestamp` is not present. Any formatting for how `formattedTimestamp` should be displayed must be performed in advance.
     * 
     * @param {Object} object The JavaScript object of the notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     */
    timestamp: function timestamp(object, slug) {
      var formattedTimestamp = object.formattedTimestamp ? object.formattedTimestamp : false;
      var timestamp = object.timestamp ? object.timestamp : false;
      var timestampTitle = '';
      if (timestamp) {
        timestampTitle = ' title="' + timestamp + '"';
      }
      var markup = [];
      if (formattedTimestamp) {
        markup.push('<div class="pxh-' + slug + '__timestamp"' + timestampTitle + '>\n');
        markup.push('  ' + formattedTimestamp + '\n');
        markup.push('</div>\n');
      } else if (timestamp) {
        markup.push('<div class="pxh-' + slug + '__timestamp">\n');
        markup.push('  ' + timestamp + '\n');
        markup.push('</div>\n');
      }
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the HTML markup for displaying a toast/notification's "dismiss" button
     * 
     * @param {Object} object The JavaScript object of the toast/notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification being created, and that will be dismissed
     */
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

    /**
     * Generates the HTML markup for displaying a toast/'s action button, which can be either a hyperlink (relative or absolute) or a callback
     * 
     * @param {Object} object The JavaScript object of the toast that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification being created
     */
    button: function button(object, slug, id) {
      var markup = [];
      if (object.actionLink) {
        markup.push('<div class="pxh-' + slug + '__action">\n');
        markup.push('  <a class="pxh-' + slug + '__button" href="' + object.actionLink + '">' + object.actionLabel + '</a>\n');
        markup.push('</div>\n');
      } else if (object.actionCallback) {
        markup.push('<div class="pxh-' + slug + '__action">\n');
        markup.push('  <a class="pxh-' + slug + '__button" href="#" id="js-' + slug + '__button--' + id + '">' + object.actionLabel + '</a>\n');
        markup.push('</div>\n');
      }
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the complete HTML markup for creating a new toast
     * 
     * @param {Object} object The JavaScript object of the toast that should be created
     * @param {String} id The unique ID of the toast being created
     * @returns {HTMLElement} element A toast element that can be inserted into the DOM
     */
    createToast: function createToast(object, id) {
      var slug = 'toast';
      var element = document.createElement('div');
      element.className = 'pxh-' + slug + ' pxh-' + slug + '--animate-in';
      element.id = 'js-' + slug + '--' + id;
      var markup = [];
      markup.push(window.pxh.toast.markup.icon(object, slug));
      markup.push(window.pxh.toast.markup.toastText(object, slug));
      markup.push(window.pxh.toast.markup.button(object, slug, id));
      markup.push(window.pxh.toast.markup.dismiss(object, slug, id));
      markup = markup.join('');
      element.innerHTML = markup;
      return element;
    },

    /**
     * Generates the complete HTML markup for creating a new notification
     * 
     * @param {Object} object The JavaScript object of the notification that should be created
     * @param {String} id The unique ID of the toast/notification being created, and that will be dismissed
     * @returns {HTMLElement} element A notification element that can be inserted into the DOM
     */
    createNotification: function createNotification(object, id) {
      var slug = 'notification';
      var element = document.createElement('div');
      element.className = 'pxh-' + slug;
      element.id = 'js-' + slug + '--' + id;
      var markup = [];
      markup.push(window.pxh.toast.markup.icon(object, slug));
      markup.push(window.pxh.toast.markup.notificationText(object, slug, id));
      markup.push(window.pxh.toast.markup.timestamp(object, slug));
      markup.push(window.pxh.toast.markup.dismiss(object, slug, id));
      markup = markup.join('');
      element.innerHTML = markup;
      return element;
    }
  },
  /**
   * Returns an array of all notifications currently displayed in the notification list
   * 
   * @returns {Array|Boolean} notifications An array of notification IDs, or false if no notifications are currently displayed in the notification list
   */
  getNotifications: function getNotifications() {
    var notifications = [];
    var notificationList = document.getElementById('js-notifications__list');
    var notificationElements = '';
    if (notificationList) {
      notificationElements = notificationList.getElementsByClassName(window.pxh.NOTIFICATION);
    }
    if (notificationElements.length > 0) {
      for (var i = notificationElements.length - 1; i >= 0; i--) {
        notifications.push(notificationElements[i].id);
      }
      return notifications;
    } else {
      return false;
    }
  }
};

// ********
// FIRE!!!!
// ********

document.addEventListener('DOMContentLoaded', function (event) {
  window.pxh.toggleMenu(window.pxh.LOGIN_NOTIFICATIONS, window.pxh.NOTIFICATIONS, window.pxh.NOTIFICATIONS_VISIBLE);
  var notificationsIcon;
  if (notificationsIcon = document.getElementById('js-login__notifications')) {
    notificationsIcon.addEventListener('click', function (event) {
      event.preventDefault();
      window.pxh.action.clickToCloseAndHold('js-login__notifications', 'js-notifications', window.pxh.NOTIFICATIONS_VISIBLE);
    });
  }

  var clearNotificationsLink;
  if (clearNotificationsLink = document.getElementById('js-notifications__link--clear')) {
    clearNotificationsLink.addEventListener('click', function (event) {
      event.preventDefault();
      window.pxh.toast.action.removeAllButton();
    });
  }
});
