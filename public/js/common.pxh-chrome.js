'use strict';
/*! common.pxh-chrome.js 1.7.0 */

// **************
// CONFIG OBJECTS
// **************

/** @namespace window.pxh */
if (!window.pxh) window.pxh = {};

window.pxh.PREFIX = 'pxh-';
window.pxh.NARROW = '--narrow';
window.pxh.WIDE = '--wide';
window.pxh.HIDDEN = '--hidden';
window.pxh.VISIBLE = '--visible';
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

// disable-scroll
window.pxh.DISABLE_SCROLL = window.pxh.PREFIX + 'disable-scroll';
window.pxh.DISABLE_SCROLL_UNTIL_AT_LG = window.pxh.DISABLE_SCROLL + window.pxh.UNTIL + window.pxh.AT_LG;

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
 * JavaScript Cookie v2.1.2
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
        var cookie = parts.slice(1).join('=');

        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          var name = parts[0].replace(rdecode, decodeURIComponent);
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
    }

    api.withConverter = init;

    return api;
  }

  return init(function () {});
}));

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
 * Changes classes on the targeted elements
 * 
 * @example
 * // finds all elements with class `nav` and adds the class `nav--hidden` to them
 * window.pxh.changeClasses('nav', 'add', 'nav--hidden');
 * @param {String} targetClassName Base CSS class of the targeted elements to be changed
 * @param {String} changeType Type of change to apply. Options are `add`, `remove`, `toggle` 
 * @param {String} classNamesToChange List of classes to change on the targeted elements, separated by spaces
 */
window.pxh.changeClasses = function(targetClassName, changeType, classNamesToChange) {
  var targetElements = document.getElementsByClassName(targetClassName);
  if (window.pxh.arrayExists(targetElements) && (classNamesToChange))
  {
    classNamesToChange = classNamesToChange.replace(/  +/g, ' ');
    var classNamesToChangeArray = classNamesToChange.split(' ');
    for (var i = targetElements.length - 1; i >= 0; i--)
    {
      for (var j = classNamesToChangeArray.length -1; j >= 0; j--)
      {
        if (changeType === 'add')
        {
          targetElements[i].classList.add(classNamesToChangeArray[j]);
        }
        else if (changeType === 'remove')
        {
          targetElements[i].classList.remove(classNamesToChangeArray[j]);
        }
        else if (changeType === 'toggle')
        {
          targetElements[i].classList.toggle(classNamesToChangeArray[j]);
        }
      }
    }
  }
}

/**
 * Adds a sensor that will fire a viewResized event every time its corresponding element changes size
 * 
 * @param {string} targetId The id of the target element that should fire an event when it resizes
 */
window.pxh.addResizeSensor = function(targetId) {
  var targetElement = document.getElementById(targetId);
  if (targetElement)
  {
    new pxhResizeSensor(targetElement, function() {
      document.dispatchEvent(window.pxh.viewResized);
    });
  }
}

window.pxh.action = {};

/**
 * Toggles classes on an element when clicked, and immediately fires any event in the clicked target area
 * 
 * @param {string} control CSS class name of the elements that should act as controls for firing this event
 * @param {string} target CSS class name of the target elements that should be changed when this event is fired
 * @param {string} change Type of change to perform on the target elements. Options are `add`, `remove`, `toggle`
 * @param {string} className Space-delimited list of CSS classes to change on the target elements
 */

window.pxh.action.clickToCloseAndFire = function(control, target, change, className)
{
  var controlElement = document.getElementsByClassName(control);
  var targetElement = document.getElementsByClassName(target);
  if ((window.pxh.arrayExists(controlElement)) && (window.pxh.arrayExists(targetElement)))
  {
    document.addEventListener('click', function(event) {
      window.pxh.changeClasses(target, change, className);
    });
  }
}

/**
 * Toggles classes on an element when clicked, but does not fire any event in the clicked target area
 * 
 * @param {string} control Unique ID of the element that should act as controls for firing this event
 * @param {string} target Unique ID of the target element that should be changed when this event is fired
 * @param {string} className The class to be removed from the target element
 */
window.pxh.action.clickToCloseAndHold = function(control, target, className) {
  var controlElement = document.getElementById(control);
  var closeElement = document.getElementById('js-closer');
  var targetElement = document.getElementById(target);
  var zIndex = (window.pxh.getStyle(target, 'z-index') - 1);
  if ((controlElement) && (targetElement))
  {
    if ((!closeElement))
    {
      var closeElement = document.createElement('div');
      closeElement.id = 'js-closer';
      closeElement.classList.add('pxh-closer');
      closeElement.classList.add('pxh-closer--transparent');
      closeElement.setAttribute('style', 'z-index: ' + zIndex + ';');
      var insertedCloser = document.body.appendChild(closeElement);
      insertedCloser.addEventListener('click', function(event)
      {
        targetElement.classList.remove(className);
        insertedCloser.remove();
      })
    }
    else
    {
      closeElement.remove();
    }
  }
}

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

document.addEventListener('DOMContentLoaded', function(event) {
  window.pxh.addResizeSensor('js-view');
});
