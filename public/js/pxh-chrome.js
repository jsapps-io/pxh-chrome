'use strict';
/*! pxh-chrome.js 1.2.0 */

// **************
// CONFIG OBJECTS
// **************

/** @class pxh */
var pxh = {};

pxh.PREFIX = 'pxh-';
pxh.NARROW = '--narrow';
pxh.WIDE = '--wide';
pxh.HIDDEN = '--hidden';
pxh.VISIBLE = '--visible';
pxh.UNTIL = '-until';
pxh.AT_MD = '@md';
pxh.AT_LG = '@lg';
pxh.ANIMATE = '--animate';
pxh.ANIMATE_IN = pxh.ANIMATE + '-in';
pxh.ANIMATE_OUT = pxh.ANIMATE + '-out';
pxh.ANIMATE_NARROW = pxh.ANIMATE + '-narrow';
pxh.ANIMATE_WIDE = pxh.ANIMATE + '-wide';
pxh.ANIMATE_FULL_TO_WIDE = pxh.ANIMATE + '-full-to-wide';
pxh.ANIMATE_OUT_WIDE = pxh.ANIMATE + '-out-wide';

// drawer
pxh.DRAWER = pxh.PREFIX + 'drawer';
pxh.DRAWER_HIDDEN_UNTIL_AT_MD = pxh.DRAWER + pxh.HIDDEN + pxh.UNTIL + pxh.AT_MD;
pxh.DRAWER_NARROW_AT_MD = pxh.DRAWER + pxh.NARROW + pxh.AT_MD;
pxh.DRAWER_WIDE_AT_LG = pxh.DRAWER + pxh.WIDE + pxh.AT_LG;
pxh.DRAWER_NARROW_AT_LG = pxh.DRAWER + pxh.NARROW + pxh.AT_LG;
pxh.DRAWER_ANIMATE_IN = pxh.DRAWER + pxh.ANIMATE_IN;
pxh.DRAWER_ANIMATE_OUT = pxh.DRAWER + pxh.ANIMATE_OUT;
pxh.DRAWER_ANIMATE_WIDE = pxh.DRAWER + pxh.ANIMATE_WIDE;
pxh.DRAWER_ANIMATE_NARROW = pxh.DRAWER + pxh.ANIMATE_NARROW;
pxh.DRAWER_ANIMATE_OUT_WIDE = pxh.DRAWER + pxh.ANIMATE_OUT_WIDE;

// drawer__toggle
pxh.DRAWER_TOGGLE = pxh.PREFIX + 'drawer-toggle';

// drawer-header__link
pxh.DRAWER_HEADER_LINK = pxh.PREFIX + 'drawer-header__link';
pxh.DRAWER_HEADER_LINK_WIDE_AT_MD = pxh.DRAWER_HEADER_LINK + pxh.WIDE + pxh.AT_MD;
pxh.DRAWER_HEADER_LINK_NARROW_AT_MD = pxh.DRAWER_HEADER_LINK + pxh.NARROW + pxh.AT_MD;
pxh.DRAWER_HEADER_LINK_WIDE_AT_LG = pxh.DRAWER_HEADER_LINK + pxh.WIDE + pxh.AT_LG;
pxh.DRAWER_HEADER_LINK_ANIMATE_IN = pxh.DRAWER_HEADER_LINK + pxh.ANIMATE_IN;
pxh.DRAWER_HEADER_LINK_ANIMATE_OUT = pxh.DRAWER_HEADER_LINK + pxh.ANIMATE_OUT;

// overlay
pxh.OVERLAY = pxh.PREFIX + 'overlay';
pxh.OVERLAY_HIDDEN = pxh.OVERLAY + pxh.HIDDEN;

// navigation
pxh.NAVIGATION = pxh.PREFIX + 'navigation';
pxh.NAVIGATION_NARROW_AT_MD = pxh.NAVIGATION + pxh.NARROW + pxh.AT_MD;
pxh.NAVIGATION_WIDE_AT_LG = pxh.NAVIGATION + pxh.WIDE + pxh.AT_LG;

// navigation__item-text
pxh.NAVIGATION_ITEM_TEXT = pxh.PREFIX + 'navigation__item-text';
pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN = pxh.NAVIGATION_ITEM_TEXT + pxh.ANIMATE_IN;
pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT = pxh.NAVIGATION_ITEM_TEXT + pxh.ANIMATE_OUT;

// navigation__link
pxh.NAVIGATION_LINK = pxh.PREFIX + 'navigation__link';
pxh.NAVIGATION_LINK_ANIMATE_IN = pxh.NAVIGATION_LINK + pxh.ANIMATE_IN;
pxh.NAVIGATION_LINK_ANIMATE_OUT = pxh.NAVIGATION_LINK + pxh.ANIMATE_OUT;

// navigation__sub-link
pxh.NAVIGATION_SUB_LINK = pxh.PREFIX + 'navigation__sub-link';
pxh.NAVIGATION_SUB_LINK_ANIMATE_IN = pxh.NAVIGATION_SUB_LINK + pxh.ANIMATE_IN;
pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT = pxh.NAVIGATION_SUB_LINK + pxh.ANIMATE_OUT;

// login
pxh.LOGIN = pxh.PREFIX + 'login';
pxh.LOGIN_NARROW_AT_MD = pxh.LOGIN + pxh.NARROW + pxh.AT_MD;
pxh.LOGIN_WIDE_AT_LG = pxh.LOGIN + pxh.WIDE + pxh.AT_LG;

// login__name
pxh.LOGIN_NAME = pxh.PREFIX + 'login__name';
pxh.LOGIN_NAME_NARROW_AT_MD = pxh.LOGIN_NAME + pxh.NARROW + pxh.AT_MD;
pxh.LOGIN_NAME_WIDE_AT_LG = pxh.LOGIN_NAME + pxh.WIDE + pxh.AT_LG;
pxh.LOGIN_NAME_ANIMATE_IN = pxh.LOGIN_NAME + pxh.ANIMATE_IN;
pxh.LOGIN_NAME_ANIMATE_OUT = pxh.LOGIN_NAME + pxh.ANIMATE_OUT;

// login__link
pxh.LOGIN_LINK = pxh.PREFIX + 'login__link';
pxh.LOGIN_LINK_NARROW_AT_MD = pxh.LOGIN_LINK + pxh.NARROW + pxh.AT_MD;
pxh.LOGIN_LINK_WIDE_AT_LG = pxh.LOGIN_LINK + pxh.WIDE + pxh.AT_LG;
pxh.LOGIN_LINK_NARROW_AT_LG = pxh.LOGIN_LINK + pxh.NARROW + pxh.AT_LG;

pxh.LOGIN_PROFILE_LINK = pxh.PREFIX + 'login__profile-link';
pxh.LOGIN_SETTINGS_LINK = pxh.PREFIX + 'login__settings-link';

pxh.LOGIN_MENU = pxh.PREFIX + 'login-menu';
pxh.LOGIN_MENU_PROFILE = pxh.LOGIN_MENU + '--profile';
pxh.LOGIN_MENU_SETTINGS = pxh.LOGIN_MENU + '--settings';
pxh.LOGIN_MENU_VISIBLE = pxh.LOGIN_MENU + pxh.VISIBLE;

// login__settings
pxh.LOGIN_SETTINGS = pxh.PREFIX + 'login__settings';
pxh.LOGIN_SETTINGS_NARROW_AT_MD = pxh.LOGIN_SETTINGS + pxh.NARROW + pxh.AT_MD;
pxh.LOGIN_SETTINGS_WIDE_AT_LG = pxh.LOGIN_SETTINGS + pxh.WIDE + pxh.AT_LG;
pxh.LOGIN_SETTINGS_ANIMATE_IN = pxh.LOGIN_SETTINGS + pxh.ANIMATE_IN;
pxh.LOGIN_SETTINGS_ANIMATE_OUT = pxh.LOGIN_SETTINGS + pxh.ANIMATE_OUT;

// login__caret
pxh.LOGIN_CARET = pxh.PREFIX + 'login__caret';
pxh.LOGIN_CARET_NARROW_AT_MD = pxh.LOGIN_CARET + pxh.NARROW + pxh.AT_MD;
pxh.LOGIN_CARET_WIDE_AT_LG = pxh.LOGIN_CARET + pxh.WIDE + pxh.AT_LG;
pxh.LOGIN_CARET_ANIMATE_IN = pxh.LOGIN_CARET + pxh.ANIMATE_IN;
pxh.LOGIN_CARET_ANIMATE_OUT = pxh.LOGIN_CARET + pxh.ANIMATE_OUT;

// login__notifications

pxh.LOGIN_NOTIFICATIONS = pxh.PREFIX + 'login__notifications';
pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD = pxh.LOGIN_NOTIFICATIONS + pxh.NARROW + pxh.AT_MD;
pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG = pxh.LOGIN_NOTIFICATIONS + pxh.WIDE + pxh.AT_LG;
pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN = pxh.LOGIN_NOTIFICATIONS + pxh.ANIMATE_IN;
pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT = pxh.LOGIN_NOTIFICATIONS + pxh.ANIMATE_OUT;

// view
pxh.VIEW = pxh.PREFIX + 'view';
pxh.VIEW_NARROW_AT_LG = pxh.VIEW + pxh.NARROW + pxh.AT_LG;
pxh.VIEW_WIDE_AT_LG = pxh.VIEW + pxh.WIDE + pxh.AT_LG;
pxh.VIEW_ANIMATE_FULL_TO_WIDE = pxh.VIEW + pxh.ANIMATE_FULL_TO_WIDE;
pxh.VIEW_ANIMATE_WIDE = pxh.VIEW + pxh.ANIMATE_WIDE;
pxh.VIEW_ANIMATE_NARROW = pxh.VIEW + pxh.ANIMATE_NARROW;

// view-header
pxh.VIEW_HEADER = pxh.PREFIX + 'view-header';
pxh.VIEW_HEADER_NARROW_AT_LG = pxh.VIEW_HEADER + pxh.NARROW + pxh.AT_LG;
pxh.VIEW_HEADER_WIDE_AT_LG = pxh.VIEW_HEADER + pxh.WIDE + pxh.AT_LG;
pxh.VIEW_HEADER_ANIMATE_WIDE = pxh.VIEW_HEADER + pxh.ANIMATE_WIDE;
pxh.VIEW_HEADER_ANIMATE_NARROW = pxh.VIEW_HEADER + pxh.ANIMATE_NARROW;
pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE = pxh.VIEW_HEADER + pxh.ANIMATE_FULL_TO_WIDE;

// view-header-drawer-toggle
pxh.VIEW_HEADER_DRAWER_TOGGLE = pxh.PREFIX + 'view-header-drawer-toggle';
pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN = pxh.VIEW_HEADER_DRAWER_TOGGLE + pxh.HIDDEN;

// notifications
pxh.NOTIFICATIONS = pxh.PREFIX + 'notifications';
pxh.NOTIFICATIONS_VISIBLE = pxh.NOTIFICATIONS + pxh.VISIBLE;

// disable-scroll
pxh.DISABLE_SCROLL = pxh.PREFIX + 'disable-scroll';
pxh.DISABLE_SCROLL_UNTIL_AT_LG = pxh.DISABLE_SCROLL + pxh.UNTIL + pxh.AT_LG;

pxh.states = {
  'default' : {
    'pxh-drawer' : {
      'add' : pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + pxh.DRAWER_NARROW_AT_MD + ' ' + pxh.DRAWER_WIDE_AT_LG,
      'remove' : pxh.DRAWER_NARROW_AT_LG
    },
    'pxh-drawer-header__link' : {
      'remove' : pxh.DRAWER_HEADER_LINK_WIDE_AT_MD,
      'add' : pxh.DRAWER_HEADER_LINK_NARROW_AT_MD + ' ' + pxh.DRAWER_HEADER_LINK_WIDE_AT_LG
    },
    'pxh-overlay' : {
      'add' : pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation' : {
      'add' : pxh.NAVIGATION_NARROW_AT_MD + ' ' + pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login' : {
      'add' : pxh.LOGIN_NARROW_AT_MD + ' ' + pxh.LOGIN_WIDE_AT_LG
    },
    'pxh-login__name' : {
      'add' : pxh.LOGIN_NAME_NARROW_AT_MD + ' ' + pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link' : {
      'add' : pxh.LOGIN_LINK_NARROW_AT_MD + ' ' + pxh.LOGIN_LINK_WIDE_AT_LG
    },
    'pxh-login__settings' : {
      'add' : pxh.LOGIN_SETTINGS_NARROW_AT_MD + ' ' + pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret' : {
      'add' : pxh.LOGIN_CARET_NARROW_AT_MD + ' ' + pxh.LOGIN_CARET_WIDE_AT_LG,
    },
    'pxh-login__notifications' : {
      'add' : pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD + ' ' + pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG,
    },
    'pxh-view' : {
      'remove' : pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + pxh.VIEW_WIDE_AT_LG,
      'add' : pxh.VIEW_NARROW_AT_LG
    },
    'pxh-view-header' : {
      'remove' : pxh.VIEW_HEADER_WIDE_AT_LG,
      'add' : pxh.VIEW_HEADER_NARROW_AT_LG
    },
    'pxh-view-header-drawer-toggle' : {
      'remove' : pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications' : {
      'remove' : pxh.NOTIFICATIONS_VISIBLE
    }
  },
  'open' : {
    'pxh-drawer' : {
      'remove' : pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + pxh.DRAWER_NARROW_AT_MD + ' ' + pxh.DRAWER_NARROW_AT_LG,
      'add' : pxh.DRAWER_WIDE_AT_LG
    },
    'pxh-drawer-header__link' : {
      'remove' : pxh.DRAWER_HEADER_LINK_NARROW_AT_MD,
      'add' : pxh.DRAWER_HEADER_LINK_WIDE_AT_MD + ' ' + pxh.DRAWER_HEADER_LINK_WIDE_AT_LG
    },
    'pxh-overlay' : {
      'remove' : pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation' : {
      'remove' : pxh.NAVIGATION_NARROW_AT_MD,
      'add' : pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login' : {
      'add' : pxh.LOGIN_WIDE_AT_LG,
      'remove' : pxh.LOGIN_NARROW_AT_MD
    },
    'pxh-login__name' : {
      'remove' : pxh.LOGIN_NAME_NARROW_AT_MD,
      'add' : pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link' : {
      'remove' : pxh.LOGIN_LINK_NARROW_AT_MD + ' ' + pxh.LOGIN_LINK_NARROW_AT_LG
    },
    'pxh-login__settings' : {
      'remove' : pxh.LOGIN_SETTINGS_NARROW_AT_MD,
      'add' : pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret' : {
      'remove' : pxh.LOGIN_CARET_NARROW_AT_MD,
      'add' : pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications' : {
      'remove' : pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD,
      'add' : pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view' : {
      'add' : pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + pxh.VIEW_NARROW_AT_LG,
      'remove' : pxh.VIEW_WIDE_AT_LG
    },
    'pxh-view-header' : {
      'add' : pxh.VIEW_HEADER_NARROW_AT_LG,
      'remove' : pxh.VIEW_HEADER_WIDE_AT_LG
    },
    'pxh-view-header-drawer-toggle' : {
      'add' : pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    }
  },
  'narrowAtLg' : {
    'pxh-drawer' : {
      'add' : pxh.DRAWER_HIDDEN_UNTIL_AT_MD + ' ' + pxh.DRAWER_NARROW_AT_MD + ' ' + pxh.DRAWER_NARROW_AT_LG,
      'remove' : pxh.DRAWER_WIDE_AT_LG
    },
    'pxh-drawer-header__link' : {
      'remove' : pxh.DRAWER_HEADER_LINK_WIDE_AT_MD + ' ' + pxh.DRAWER_HEADER_LINK_WIDE_AT_LG,
      'add' : pxh.DRAWER_HEADER_LINK_NARROW_AT_MD
    },
    'pxh-overlay' : {
      'add' : pxh.OVERLAY_HIDDEN
    },
    'pxh-navigation' : {
      'add' : pxh.NAVIGATION_NARROW_AT_MD,
      'remove' : pxh.NAVIGATION_WIDE_AT_LG
    },
    'pxh-login' : {
      'add' : pxh.LOGIN_NARROW_AT_MD,
      'remove' : pxh.LOGIN_WIDE_AT_LG
    },
    'pxh-login__name' : {
      'add' : pxh.LOGIN_NAME_NARROW_AT_MD,
      'remove' : pxh.LOGIN_NAME_WIDE_AT_LG
    },
    'pxh-login__link' : {
      'add' : pxh.LOGIN_LINK_NARROW_AT_MD,
      'remove' : pxh.LOGIN_LINK_WIDE_AT_LG
    },
    'pxh-login__settings' : {
      'add' : pxh.LOGIN_SETTINGS_NARROW_AT_MD,
      'remove' : pxh.LOGIN_SETTINGS_WIDE_AT_LG
    },
    'pxh-login__caret' : {
      'add' : pxh.LOGIN_CARET_NARROW_AT_MD,
      'remove' : pxh.LOGIN_CARET_WIDE_AT_LG
    },
    'pxh-login__notifications' : {
      'add' : pxh.LOGIN_NOTIFICATIONS_NARROW_AT_MD,
      'remove' : pxh.LOGIN_NOTIFICATIONS_WIDE_AT_LG
    },
    'pxh-view' : {
      'remove' : pxh.DISABLE_SCROLL_UNTIL_AT_LG + ' ' + pxh.VIEW_NARROW_AT_LG,
      'add' : pxh.VIEW_WIDE_AT_LG
    },
    'pxh-view-header' : {
      'remove' : pxh.VIEW_HEADER_NARROW_AT_LG,
      'add' : pxh.VIEW_HEADER_WIDE_AT_LG
    },
    'pxh-view-header-drawer-toggle' : {
      'remove' : pxh.VIEW_HEADER_DRAWER_TOGGLE_HIDDEN
    },
    'pxh-notifications' : {
      'remove' : pxh.NOTIFICATIONS_VISIBLE
    }
  }
}

pxh.transitions = {
  'outToIn' : {
    'pxh-drawer' : {
      'add' : pxh.DRAWER_ANIMATE_IN,
    }
  },
  'inToOut' : {
    'pxh-drawer' : {
      'add' : pxh.DRAWER_ANIMATE_OUT,
    }
  },
  'narrowToOpen' : {
    'pxh-drawer' : {
      'add' : pxh.DRAWER_ANIMATE_WIDE,
    },
    'pxh-drawer-header__link' : {
      'add' : pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text' : {
      'add' : pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link' : {
      'add' : pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name' : {
      'add' : pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret' : {
      'add' : pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings' : {
      'add' : pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications' : {
      'add' : pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    }
  },
  'openToNarrow' : {
    'pxh-drawer' : {
      'add' : pxh.DRAWER_ANIMATE_NARROW
    },
    'pxh-drawer-header__link' : {
      'add' : pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text' : {
      'add' : pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link' : {
      'add' : pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name' : {
      'add' : pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret' : {
      'add' : pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings' : {
      'add' : pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications' : {
      'add' : pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    }
  },
  'outToNarrow' : {
    'pxh-drawer' : {
      'add' : pxh.DRAWER_ANIMATE_IN
    },
    'pxh-view' : {
      'add' : pxh.VIEW_ANIMATE_FULL_TO_WIDE
    },
    'pxh-view-header' : {
      'add' : pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE
    }
  },
  'narrowToOut' : {
    'pxh-drawer' : {
      'add' : pxh.DRAWER_ANIMATE_OUT_WIDE
    },
    'pxh-drawer-header__link' : {
      'add' : pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text' : {
      'add' : pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link' : {
      'add' : pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name' : {
      'add' : pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret' : {
      'add' : pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings' : {
      'add' : pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications' : {
      'add' : pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    }
  },
  'wideToNarrow' : {
    'pxh-drawer' : {
      'add' : pxh.DRAWER_ANIMATE_NARROW
    },
    'pxh-drawer-header__link' : {
      'add' : pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text' : {
      'add' : pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link' : {
      'add' : pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name' : {
      'add' : pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret' : {
      'add' : pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings' : {
      'add' : pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications' : {
      'add' : pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    },
    'pxh-view' : {
      'add' : pxh.VIEW_ANIMATE_WIDE
    },
    'pxh-view-header' : {
      'add' : pxh.VIEW_HEADER_ANIMATE_WIDE
    }
  },
  'narrowToWide' : {
    'pxh-drawer' : {
      'add' : pxh.DRAWER_ANIMATE_WIDE
    },
    'pxh-drawer-header__link' : {
      'add' : pxh.DRAWER_HEADER_LINK_ANIMATE_IN
    },
    'pxh-navigation__item-text' : {
      'add' : pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN
    },
    'pxh-navigation__sub-link' : {
      'add' : pxh.NAVIGATION_SUB_LINK_ANIMATE_IN
    },
    'pxh-login__name' : {
      'add' : pxh.LOGIN_NAME_ANIMATE_IN
    },
    'pxh-login__caret' : {
      'add' : pxh.LOGIN_CARET_ANIMATE_IN
    },
    'pxh-login__settings' : {
      'add' : pxh.LOGIN_SETTINGS_ANIMATE_IN
    },
    'pxh-login__notifications' : {
      'add' : pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN
    },
    'pxh-view' : {
      'add' : pxh.VIEW_ANIMATE_NARROW
    },
    'pxh-view-header' : {
      'add' : pxh.VIEW_HEADER_ANIMATE_NARROW
    }
  },
  'clearAll' : {
    'pxh-drawer' : {
      'remove' : pxh.DRAWER_ANIMATE_IN + ' ' + pxh.DRAWER_ANIMATE_OUT + ' ' + pxh.DRAWER_ANIMATE_NARROW  + ' ' + pxh.DRAWER_ANIMATE_WIDE + ' ' + pxh.DRAWER_ANIMATE_OUT_WIDE
    },
    'pxh-drawer-header__link' : {
      'remove' : pxh.DRAWER_HEADER_LINK_ANIMATE_IN + ' ' + pxh.DRAWER_HEADER_LINK_ANIMATE_OUT
    },
    'pxh-navigation__item-text' : {
      'remove' : pxh.NAVIGATION_ITEM_TEXT_ANIMATE_IN + ' ' + pxh.NAVIGATION_ITEM_TEXT_ANIMATE_OUT
    },
    'pxh-navigation__sub-link' : {
      'remove' : pxh.NAVIGATION_SUB_LINK_ANIMATE_IN + ' ' + pxh.NAVIGATION_SUB_LINK_ANIMATE_OUT
    },
    'pxh-login__name' : {
      'remove' : pxh.LOGIN_NAME_ANIMATE_IN + ' ' + pxh.LOGIN_NAME_ANIMATE_OUT
    },
    'pxh-login__caret' : {
      'remove' : pxh.LOGIN_CARET_ANIMATE_IN  + ' ' + pxh.LOGIN_CARET_ANIMATE_OUT
    },
    'pxh-login__settings' : {
      'remove' : pxh.LOGIN_SETTINGS_ANIMATE_IN + ' ' + pxh.LOGIN_SETTINGS_ANIMATE_OUT
    },
    'pxh-login__notifications' : {
      'remove' : pxh.LOGIN_NOTIFICATIONS_ANIMATE_IN + ' ' + pxh.LOGIN_NOTIFICATIONS_ANIMATE_OUT
    },
    'pxh-view' : {
      'remove' : pxh.VIEW_ANIMATE_WIDE + ' ' + pxh.VIEW_ANIMATE_NARROW + ' ' + pxh.VIEW_ANIMATE_FULL_TO_WIDE
    },
    'pxh-view-header' : {
      'remove' : pxh.VIEW_HEADER_ANIMATE_WIDE + ' ' + pxh.VIEW_HEADER_ANIMATE_NARROW + ' ' + pxh.VIEW_HEADER_ANIMATE_FULL_TO_WIDE
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

pxh.Cookies = Cookies.noConflict();

// *********
// GENERIC FUNCTIONS
// *********

/**
 * polyfill to support .remove() in IE11
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
 * checks if an array exists
 * 
 * @param {Array} array
 * @returns {Boolean} true if array exists, false if it does not
 */
pxh.arrayExists = function(array) {
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
pxh.getItemByPropertyName = function(haystack, propertyName) {
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
 * Returns the value of a particular CSS property of an HTML element
 * 
 * @param {String} id The id="" attribute of the HTML element
 * @param {String} property The CSS property to query, e.g. z-index
 * @returns {String|Boolean} CSS property value if found, false if not
 */
pxh.getStyle = function(id, property) {
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
 * Strips HTML tags from a given string
 * 
 * @param {String} html A string that may contain HTML tags
 * @returns {String|Boolean} Input string's text with HTML removed, false if no input parameter provided
 */
pxh.stripHTML = function(html) {
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
 * Load a state from a state object, and change the CSS classes on all relevant HTML elements
 * 
 * @param {Object} stateObject An object containing the states of your application
 * @param {String} targetStateName The name of the desired state to load from the state object
 */
pxh.loadState = function(stateObject, targetStateName) {
  // grab the target state object from the master states object
  var targetState = pxh.getItemByPropertyName(stateObject, targetStateName);
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
      pxh.changeClasses(targetClass, stateChangeType, stateChangeClasses);
    }
  }
}

/**
 * Change the classes on a target HTML element
 * 
 * e.g. pxh.changeClasses('nav', 'add', 'hidden--until-@md')
 * @param {String} targetClassName Base CSS class of the targeted HTML elements to be changed
 * @param {String} changeType Type of change to apply. Options are `add`, `remove`, `toggle` 
 * @param {String} classNamesToChange List of classes to change on the targeted HTML elements, separated by spaces
 */
pxh.changeClasses = function(targetClassName, changeType, classNamesToChange) {
  var targetElements = document.getElementsByClassName(targetClassName);
  if (pxh.arrayExists(targetElements) && (classNamesToChange))
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
 * Bind drawer state change events to toggle buttons, which will change the state of the drawer depending on the current drawer and responsive contexts
 * 
 * @param {String} controlName CSS class name of control to bind events to
 */
pxh.bindControl = function(controlName) {
  var controlElements = document.getElementsByClassName(controlName);
  if (pxh.arrayExists(controlElements))
  {
    for (var i = controlElements.length - 1; i >= 0; i--)
    {
      controlElements[i].addEventListener('click', function() {
        var firstDrawer = document.getElementsByClassName('pxh-drawer')[0];
        var drawerIsAtDefaultState = firstDrawer.classList.contains('pxh-drawer--wide@lg');
        var drawerIsNarrowAtMd = firstDrawer.classList.contains('pxh-drawer--narrow@md');
        var drawerIsHiddenAtSm = firstDrawer.classList.contains('pxh-drawer--hidden-until@md');
        pxh.loadState(pxh.transitions, 'clearAll');
        if ((window.matchMedia('(min-width: 1024px)').matches) && (drawerIsAtDefaultState))
        {
          pxh.loadState(pxh.transitions, 'wideToNarrow');
          pxh.loadState(pxh.states, 'narrowAtLg');
          document.dispatchEvent(pxh.drawerClosed);
          pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
        }
        else if (window.matchMedia('(min-width: 1024px)').matches)
        {
          pxh.loadState(pxh.transitions, 'narrowToWide');
          pxh.loadState(pxh.states, 'default');
          document.dispatchEvent(pxh.drawerOpened);
          pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
          pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
        }
        else if ((drawerIsNarrowAtMd) && (window.matchMedia('(min-width: 768px)').matches))
        {
          pxh.loadState(pxh.transitions, 'narrowToOpen');
          pxh.loadState(pxh.states, 'open');
          document.dispatchEvent(pxh.drawerOpened);
          pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
          pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
        }
        else if (window.matchMedia('(min-width: 768px)').matches)
        {
          pxh.loadState(pxh.transitions, 'openToNarrow');
          pxh.loadState(pxh.states, 'default');
          document.dispatchEvent(pxh.drawerClosed);
          pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
        }
        else if (drawerIsHiddenAtSm)
        {
          pxh.loadState(pxh.transitions, 'outToIn');
          pxh.loadState(pxh.states, 'open');
          document.dispatchEvent(pxh.drawerOpened);
          pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
          pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
        }
        else
        {
          pxh.loadState(pxh.transitions, 'inToOut');
          pxh.loadState(pxh.states, 'default');
          document.dispatchEvent(pxh.drawerClosed);
          pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
        }
      })
    }
  }
}

/**
 * Create drawer state change events that should fire when the browser transitions between the medium breakpoint
 * 
 * @param {String} breakpoint 
 */
pxh.breakpointAtMd = function(breakpoint) {
  pxh.loadState(pxh.transitions, 'clearAll');
  var firstDrawer = document.getElementsByClassName('pxh-drawer')[0];
  var drawerIsWideAtLg = firstDrawer.classList.contains('pxh-drawer--wide@lg');
  var drawerIsNarrowAtMd = firstDrawer.classList.contains('pxh-drawer--narrow@md');
  if (breakpoint.matches)
  {
    // we entered the @md breakpoint from the @sm breakpoint
    if (drawerIsNarrowAtMd)
    {
      // the drawer wasn't open @sm so open it to narrow @md
      // fire the transition
      pxh.loadState(pxh.transitions, 'outToNarrow');
    }
  } else
  {
    // we exited the @md breakpoint into the @sm breakpoint
    if (drawerIsNarrowAtMd)
    {
      // the drawer was open to narrow @md so move it out @sm
      pxh.loadState(pxh.transitions, 'narrowToOut');
    }
  }
}

/**
 * Create drawer state change events that should fire when the browser transitions between the medium breakpoint
 * 
 * @param {String} breakpoint 
 */
pxh.breakpointAtLg = function(breakpoint) {
  pxh.loadState(pxh.transitions, 'clearAll');
  var firstDrawer = document.getElementsByClassName('pxh-drawer')[0];
  var drawerIsWideAtLg = firstDrawer.classList.contains('pxh-drawer--wide@lg');
  var drawerIsNarrowAtMd = firstDrawer.classList.contains('pxh-drawer--narrow@md');
  if (breakpoint.matches)
  {
    // we entered the @lg breakpoint from the @md breakpoint
    if ((drawerIsWideAtLg) && (!drawerIsNarrowAtMd))
    {
      // the drawer was open @md so keep it open @lg
      // don't fire any transitions
      pxh.loadState(pxh.states, 'default');
      pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
      pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
    }
    else
    {
      // drawer was narrow @md so transition it to wide @lg
      // fire transitions
      pxh.loadState(pxh.transitions, 'narrowToWide');
      pxh.loadState(pxh.states, 'default');
      document.dispatchEvent(pxh.drawerOpened);
      pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
      pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
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
      pxh.loadState(pxh.transitions, 'wideToNarrow');
    };
    pxh.loadState(pxh.states, 'default');
    document.dispatchEvent(pxh.drawerClosed);
    pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
    pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
  }
}

/**
 * Bind media queries to drawer controls or something
 * 
 * @param {String} targetClass CSS class name of elements to bind to
 * @param {Object} window.matchMedia object
 */
pxh.bindDrawerMediaQueryControls = function(targetClass, mediaQuery) {
  var targetElements = document.getElementsByClassName(targetClass);
  if (pxh.arrayExists(targetElements))
  {
    // iterate through drawer controls and fire the pxhToggleDrawer function when clicked
    for (var i = targetElements.length - 1; i >= 0; i--)
    {
      targetElements[i].addEventListener('click', function() {
        pxh.loadState(pxh.transitions, 'clearAll');
        if (!mediaQuery.matches)
        {
          pxh.loadState(pxh.states, 'default');
          pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
          pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
        }
      })
    }
  }
}

/**
 * When the user clicks the overlay, hide the drawer at the small breakpoint, or collapse the drawer at the narrow breakpoint
 * If the notification list is displayed, hide it when the user clicks the overlay but don't hide or collapse the drawer
 * 
 */
pxh.overlayDrawerControl = function() {
  var overlay = document.getElementsByClassName('pxh-overlay');
  var notifications = document.getElementsByClassName('pxh-notifications');
  if (pxh.arrayExists(overlay))
  {
    for (var i = overlay.length - 1; i >= 0; i--)
    {
      overlay[i].addEventListener('click', function(event) {
        if ((!lgBreakpoint.matches) && (pxh.Cookies.get('pxh-drawer-open') === 'true'))
        {
          // if the notifications list is visible, close it when clicking the overlay but don't close the drawer
          if ((pxh.arrayExists(notifications)) && (notifications[0].classList.contains('pxh-notifications--visible')))
          {
            notifications[0].classList.remove('pxh-notifications--visible');
          }
          else
          {
            pxh.loadState(pxh.transitions, 'clearAll');
            pxh.loadState(pxh.states, 'default');
            document.dispatchEvent(pxh.drawerClosed);
            pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
            pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
          }
        }
      })
    }
  }
}

/**
 * When the user hits the "ESC" key on the keyboard, hide the drawer at the small breakpoint, or collapse the drawer at the narrow breakpoint
 * 
 */
pxh.escapeDrawerControl = function() {
  document.addEventListener('keyup', function(event) {
    if ((event.keyCode == 27) && (!lgBreakpoint.matches) && (pxh.Cookies.get('pxh-drawer-open') === 'true'))
    {
      pxh.loadState(pxh.transitions, 'clearAll');
      pxh.loadState(pxh.states, 'default');
      document.dispatchEvent(pxh.drawerClosed);
      pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
      pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
    }
  })
}

/**
 * Toggle visibility of a login menu
 * 
 * @param {String} toggleControl CSS class name of the HTML elements to turn into controls that will fire this event
 * @param {String} toggleTarget CSS class name of the login menu HTML elements that should have their visibility toggled
 * @param {string} toggleClass Space-delimited list of CSS class names to toggle on the target HTML elements when this event fires
 */
pxh.toggleLoginMenu = function(toggleControl, toggleTarget, toggleClass) {
  var toggleControlElements = document.getElementsByClassName(toggleControl);
  var toggleTargetElements = document.getElementsByClassName(toggleTarget);
  if ((pxh.arrayExists(toggleControlElements)) && (pxh.arrayExists(toggleTargetElements)))
  {
    for (var i = toggleControlElements.length - 1; i >= 0; i--)
    {
      toggleControlElements[i].addEventListener('click', function(event) {
        event.preventDefault();
        var menuIsVisible = toggleTargetElements[0].classList.contains(toggleClass);
        pxh.changeClasses('pxh-login-menu', 'remove', toggleClass);
        if (!menuIsVisible)
        {
          pxh.changeClasses(toggleTarget, 'toggle', toggleClass);
        }
        event.stopPropagation();
      });
    }
  }
}

/**
 * Add a sensor that will fire a viewResized event every time its corresponding element changes size
 * 
 * @param {string} targetId The id of the target HTML element that should fire an event when it resizes
 */
pxh.addResizeSensor = function(targetId) {
  var targetElement = document.getElementById(targetId);
  if (targetElement)
  {
    new pxhResizeSensor(targetElement, function() {
      document.dispatchEvent(pxh.viewResized);
    });
  }
}

pxh.action = {};

/**
 * Toggle classes on an element when clicked, and immediately fires any event on the click target area
 * 
 * @param {string} control CSS class name of the HTML elements that should act as controls for firing this event
 * @param {string} target CSS class name of the target HTML elements that should be changed when this event is fired
 * @param {string} change Type of change to perform on the target HTML elements. Options are `add`, `remove`, `toggle`
 * @param {string} className Space-delimited list of CSS classes to change on the target HTML elements
 */

pxh.action.clickToCloseAndFire = function(control, target, change, className)
{
  var controlElement = document.getElementsByClassName(control);
  var targetElement = document.getElementsByClassName(target);
  if ((pxh.arrayExists(controlElement)) && (pxh.arrayExists(targetElement)))
  {
    document.addEventListener('click', function(event) {
      pxh.changeClasses(target, change, className);
    });
  }
}

/**
 * Toggle classes on an element when clicked, but do not fire any event tied to the click target area
 * 
 * @param {string} control Unique ID of the HTML element that should act as controls for firing this event
 * @param {string} target Unique ID of the target HTML element that should be changed when this event is fired
 * @param {string} className The class to be removed from the target HTML element
 */
pxh.action.clickToCloseAndHold = function(control, target, className) {
  var controlElement = document.getElementById(control);
  var closeElement = document.getElementById('js-closer');
  var targetElement = document.getElementById(target);
  var zIndex = (pxh.getStyle(target, 'z-index') - 1);
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

var notificationsIcon;

if (notificationsIcon = document.getElementById('js-login__notifications'))
{
  notificationsIcon.addEventListener('click', function(event) {
    pxh.action.clickToCloseAndHold('js-login__notifications', 'js-notifications', 'pxh-notifications--visible');
  })
}

/**
 * Toggle classes on an element when clicked
 * 
 * @param {string} control CSS class name of the HTML elements that should act as controls for firing this event
 * @param {string} target CSS class name of the target HTML elements that should be changed when this event is fired
 * @param {string} className The class to be removed from the target HTML element
 */
pxh.toggleMenu = function(control, target, className) {
  var controlElements = document.getElementsByClassName(control);
  var targetElements = document.getElementsByClassName(target);
  if ((pxh.arrayExists(controlElements)) && (pxh.arrayExists(targetElements)))
  {
    for (var i = controlElements.length - 1; i >= 0; i--)
    {
      controlElements[i].addEventListener('click', function(event) {
        event.preventDefault();
        pxh.changeClasses(target, 'toggle', className);
      })
    }
  }
}

// type : 'green' // green, blue, orange, red
// isPersistent : false // true, false
// icon : 'info-circle' // any Font Awesome icon slug
// text : 'This is the text for notification #1.'
// actionLabel : 'View'
// actionLink : 'http://google.com' // fully qualified link or route
// actionCallback : // callback function
// timestamp: '9:36 AM'

pxh.toast = {
  badge : {
    count : 0,
    increment : function() {
      pxh.toast.badge.count = pxh.toast.badge.count + 1;
      if (pxh.toast.badge.count > 9)
      {
        pxh.toast.badge.text = '9+';
      }
      else if (pxh.toast.badge.count < 0)
      {
        pxh.toast.badge.count = 0;
        pxh.toast.badge.text = 0;
      }
      else
      {
        pxh.toast.badge.text = pxh.toast.badge.count;
      }
      pxh.toast.badge.update();
    },
    decrement : function() {
      pxh.toast.badge.count = pxh.toast.badge.count - 1;
      if (pxh.toast.badge.count > 9)
      {
        pxh.toast.badge.text = '9+';
      }
      else if (pxh.toast.badge.count < 0)
      {
        pxh.toast.badge.count = 0;
        pxh.toast.badge.text = 0;
      }
      else
      {
        pxh.toast.badge.text = pxh.toast.badge.count;
      }
      pxh.toast.badge.update();
    },
    update : function() {
      var notificationIcon = '';
      var notificationBadge = '';
      if ((notificationIcon = document.getElementById('js-login__notifications')) && (notificationBadge = document.getElementById('js-login__notifications-badge')))
      {
        if (pxh.toast.badge.count > 0)
        {
          notificationBadge.innerHTML = pxh.toast.badge.text;
          notificationIcon.classList.remove('pxh-display-none');
          notificationBadge.classList.remove('pxh-login__notifications-badge--hidden');
        }
        else
        {
          notificationIcon.classList.add('pxh-display-none');
          notificationBadge.classList.add('pxh-login__notifications-badge--hidden');
        }
      }
    }
  },

  add : function(object, suppressToast) {
    var id = Math.floor(Math.random()*16777215).toString(16);
    var notificationList = '';
    var toastList = '';
    if ((notificationList = document.getElementById('js-notifications__list')) && ((object.actionLink) || (object.actionCallback)))
    {
      var notificationFirstChild = notificationList.firstChild;
      var notificationElement = notificationList.insertBefore(pxh.toast.markup.createNotification(object, id), notificationFirstChild);
      pxh.toast.badge.increment();
      pxh.toast.action.dismissButton(notificationElement, 'notification', id);
      pxh.toast.action.expandButton(notificationElement, 'notification');
      if (object.actionCallback)
      {
        pxh.toast.action.bindCallback(toastElement, 'notification__link', id, object.actionCallback);
      }
    }
    if ((toastList = document.getElementById('js-toasts')) && (!suppressToast))
    {
      var toastFirstChild = toastList.firstChild;
      var toastElement = toastList.insertBefore(pxh.toast.markup.createToast(object, id), toastFirstChild);
      pxh.toast.action.dismissButton(toastElement, 'toast', id);
      pxh.toast.action.expandButton(toastElement, 'toast');
      if (object.actionCallback)
      {
        pxh.toast.action.bindCallback(toastElement, 'toast__button', id, object.actionCallback);
      }
      if (!object.isPersistent)
      {
        setTimeout(function() {
          if (!toastElement.classList.contains('pxh-toast--expanded'))
          {
            // after 2000ms animate the toast out
            pxh.toast.autoHide(id);
            // 1000ms after the animation, remove the notification from the DOM
            setTimeout(function() {
              pxh.toast.autoRemove(id);
            }, 1000);
          }
        }, 5000);
      }
    }
    return id;
  },

  action : {
    dismissButton : function(element, slug, id) {
      var button = document.getElementById('js-' + slug + '__dismiss-button--' + id);
      if (button)
      {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          pxh.toast.hide(id);
          setTimeout(function() {
            pxh.toast.remove(id);
          }, 1000);
        })
      }
    },

    expandButton : function(element, slug) {
      var button = element.querySelector('.js-' + slug + '__more-button');
      if (button)
      {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          pxh.toast.expand(element, slug);
        })
      }
    },

    removeAllButton : function() {
      pxh.toast.hideAll();
      setTimeout(function() {
        pxh.toast.removeAll();
      }, 1000);
    },

    bindCallback : function(element, slug, id, callback) {
      var button = document.getElementById('js-' + slug + '--' + id);
      if (button)
      {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          pxh.toast.action.fireCallback(callback);
        })
      }
    },

    fireCallback : function(callback) {
      callback();
    }
  },

  hide : function(id) {
    var toastList = '';
    var toastItem = '';
    var notificationList = '';
    var notification = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastItem = document.getElementById('js-toast--' + id)))
    {
      toastItem.classList.add('pxh-toast--animate-out');
      toastItem.classList.remove('pxh-toast--animate-in');
    }
    if ((notificationList = document.getElementById('js-notifications__list')) && (notification = document.getElementById('js-notification--' + id)))
    {
      notification.classList.add('pxh-notification--animate-out');
      notification.classList.remove('pxh-notification--animate-in');
    }
  },

  hideAll : function() {
    var notificationList = '';
    var notifications = [];
    if ((notificationList = document.getElementById('js-notifications__list')) && (notifications = document.getElementsByClassName('pxh-notification')))
    {
      for (var i = notifications.length - 1; i >= 0; i--) {
        var id = notifications[i].id.replace('js-notification--', '');
        pxh.toast.hide(id);
      }
    }
  },

  autoHide : function(id) {
    var toastList = '';
    var toastItem = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastItem = document.getElementById('js-toast--' + id))) {
      toastItem.classList.add('pxh-toast--animate-out');
      toastItem.classList.remove('pxh-toast--animate-in');
    }
  },

  remove : function(id) {
    var toastList = '';
    var toastElement = '';
    var notificationList = '';
    var notification = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastElement = document.getElementById('js-toast--' + id)))
    {
      toastElement.remove();

    }
    if ((notificationList = document.getElementById('js-notifications__list')) && (notification = document.getElementById('js-notification--' + id)))
    {
      notification.remove();
      pxh.toast.badge.decrement();
    }
  },

  autoRemove : function(id) {
    var toastList = '';
    var toastElement = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastElement = document.getElementById('js-toast--' + id)))
    {
      toastElement.remove();
    }
  },

  removeAll : function() {
    var notificationList = '';
    var notifications = [];
    if ((notificationList = document.getElementById('js-notifications__list')) && (notifications = document.getElementsByClassName('pxh-notification')))
    {
      for (var i = notifications.length - 1; i >= 0; i--)
      {
        var id = notifications[i].id.replace('js-notification--', '');
        pxh.toast.remove(id);
      }
    }
  },

  expand : function(element, slug) {
    if (element.classList.contains('pxh-' + slug + '--expanded'))
    {
      element.classList.remove('pxh-' + slug + '--expanded');
      element.querySelector('.pxh-' + slug + '__more').classList.remove('pxh-' + slug + '__more--expanded');
      element.querySelector('.pxh-' + slug + '__more-button').innerHTML = 'Show more';
    }
    else
    {
      element.classList.remove('pxh-' + slug + '--animate-in');
      element.classList.add('pxh-' + slug + '--expanded');
      element.querySelector('.pxh-' + slug + '__more').classList.add('pxh-' + slug + '__more--expanded');
      element.querySelector('.pxh-' + slug + '__more-button').innerHTML = 'Show less';
    }
  },

  markup : {
    icon : function(object, slug)
    {
      var icon = object.icon ? object.icon : 'info-circle';
      var type = object.type ? object.type : 'blue';
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__icon pxh-' + slug + '__icon--' + type + '">\n');
      markup.push('  <i class="fa fa-' + icon + '"></i>\n');
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    toastText : function(object, slug)
    {
      var text = object.text ? pxh.stripHTML(object.text) : 'You received a new notification.';
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__text">\n');
      markup.push('  ' + text + '\n');
      markup.push(pxh.toast.markup.more(object, slug));
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    notificationText : function(object, slug, id)
    {
      var text = object.text ? pxh.stripHTML(object.text) : 'You received a new notification.';
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__text">\n');
      if (object.actionLink) {
        markup.push('  <a class="pxh-' + slug + '__link" href="' + object.actionLink + '">\n');
      } else if (object.actionCallback)
      {
        markup.push('  <a class="pxh-' + slug + '__link" href="#" id="js-' + slug + '__link--' + id + '">\n');
      }
      markup.push('  ' + text + '\n');
      if ((object.actionLink) || (object.actionCallback))
      {
        markup.push('  </a>\n');
      }
      markup.push(pxh.toast.markup.more(object, slug));
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    more : function(object, slug) {
      var markup = [];
      markup.push('  <div class="pxh-' + slug + '__more">\n');
      markup.push('    <a href="#" class="pxh-' + slug + '__more-button js-' + slug + '__more-button">\n');
      markup.push('      Show more\n');
      markup.push('    </a>\n');
      markup.push('  </div>\n');
      markup = markup.join('');
      return markup;
    },

    // timestamp : function(object, slug) {
    //   var timestamp = object.timestamp ? object.timestamp : false;
    //   var markup = [];
    //   if (timestamp)
    //   {
    //     markup.push('<div class="pxh-' + slug + '__timestamp">\n');
    //     markup.push('  ' + timestamp + '\n');
    //     markup.push('</div>\n');
    //   }
    //   markup = markup.join('');
    //   return markup;
    // },

    dismiss : function(object, slug, id) {
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__dismiss">\n');
      markup.push('  <a href="#" class="pxh-' + slug + '__dismiss-button js-' + slug + '__dismiss-button" id="js-' + slug + '__dismiss-button--' + id + '">\n');
      markup.push('    <i class="fa fa-times"></i>\n');
      markup.push('  </a>\n');
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    button : function(object, slug, id) {
      var markup = [];
      if (object.actionLink)
      {
        markup.push('<div class="pxh-' + slug + '__action">\n');
        markup.push('  <a class="pxh-' + slug + '__button" href="' + object.actionLink + '">' + object.actionLabel + '</a>\n');
        markup.push('</div>\n');
      }
      else if (object.actionCallback)
      {
        markup.push('<div class="pxh-' + slug + '__action">\n');
        markup.push('  <a class="pxh-' + slug + '__button" href="#" id="js-' + slug + '__button--' + id + '">' + object.actionLabel + '</a>\n');
        markup.push('</div>\n');
      }
      markup = markup.join('');
      return markup;
    },

    createToast : function(object, id) {
      var slug = 'toast';
      var element = document.createElement('div');
      element.className = 'pxh-' + slug + ' pxh-' + slug + '--animate-in';
      element.id = 'js-' + slug + '--' + id;
      var markup = [];
      markup.push(pxh.toast.markup.icon(object, slug));
      markup.push(pxh.toast.markup.toastText(object, slug));
      markup.push(pxh.toast.markup.button(object, slug, id));
      markup.push(pxh.toast.markup.dismiss(object, slug, id));
      markup = markup.join('');
      element.innerHTML = markup;
      return element;
    },

    createNotification : function(object, id) {
      var slug = 'notification';
      var element = document.createElement('div');
      element.className = 'pxh-' + slug;
      element.id = 'js-' + slug + '--' + id;
      var markup = [];
      markup.push(pxh.toast.markup.icon(object, slug));
      markup.push(pxh.toast.markup.notificationText(object, slug, id));
      markup.push(pxh.toast.markup.dismiss(object, slug, id));
      markup = markup.join('');
      element.innerHTML = markup;
      return element;
    }
  },
  getNotifications : function() {
    var notifications = [];
    var notificationList = document.getElementById('js-notifications__list');
    var notificationElements = '';
    if (notificationList) 
    {
      notificationElements = notificationList.getElementsByClassName('pxh-notification');
    }
    if (notificationElements.length > 0) {
      for (var i = notificationElements.length - 1; i >= 0; i--) 
      {
        notifications.push(notificationElements[i].id)
      }
      return notifications;
    }
    else {
      return false;
    }
  }
}

if (document.getElementById('js-notifications__link--clear'))
{
  document.getElementById('js-notifications__link--clear').addEventListener('click', function() {
  pxh.toast.action.removeAllButton();
  })
}

// ********
// FIRE!!!!
// ********

var lgBreakpoint = window.matchMedia('(min-width: 1024px)');
var mdBreakpoint = window.matchMedia('(min-width: 768px)');
document.addEventListener('DOMContentLoaded', function(event) {
  lgBreakpoint.addListener(pxh.breakpointAtLg);
  mdBreakpoint.addListener(pxh.breakpointAtMd);
});

pxh.viewResized = document.createEvent('CustomEvent');
pxh.viewResized.initCustomEvent('pxhViewResized', false, false, {
  'viewResized': true
});

pxh.drawerOpened = document.createEvent('CustomEvent');
pxh.drawerOpened.initCustomEvent('pxh.drawerOpened', false, false, {
  'drawerOpened': true
});

pxh.drawerClosed = document.createEvent('CustomEvent');
pxh.drawerClosed.initCustomEvent('pxh.drawerClosed', false, false, {
  'drawerClosed': true
});

document.addEventListener('DOMContentLoaded', function(event) {
  pxh.bindControl(pxh.VIEW_HEADER_DRAWER_TOGGLE);
  pxh.bindControl(pxh.DRAWER_TOGGLE);

  if (pxh.Cookies.get('pxh-drawer-open') === null)
  {
    pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
  }

  if (pxh.Cookies.get('pxh-drawer-narrow') === null)
  {
    pxh.Cookies.set('pxh-drawer-narrow', 'false', { expires: 1, path: '/'});
  }

  // check if the 'narrow' cookie is set and if we're currently at the desktop breakpoint
  if ((window.matchMedia('(min-width: 1024px)').matches) && (pxh.Cookies.get('pxh-drawer-narrow') === 'true'))
  {
    // toggle the drawer closed
    pxh.loadState(pxh.states, 'narrowAtLg');
    document.dispatchEvent(pxh.drawerClosed);
    pxh.Cookies.set('pxh-drawer-narrow', 'true', { expires: 1, path: '/'});
  }
  else if (window.matchMedia('(min-width: 1024px)').matches)
  {
    pxh.Cookies.set('pxh-drawer-open', 'true', { expires: 1, path: '/'});
  } else
  {
    pxh.Cookies.set('pxh-drawer-open', 'false', { expires: 1, path: '/'});
  }
  document.addEventListener('navRefreshed', function(event)
  {
    pxh.toggleLoginMenu(pxh.LOGIN_PROFILE_LINK, pxh.LOGIN_MENU_PROFILE, pxh.LOGIN_MENU_VISIBLE);
    pxh.toggleLoginMenu(pxh.LOGIN_SETTINGS_LINK, pxh.LOGIN_MENU_SETTINGS, pxh.LOGIN_MENU_VISIBLE);
  });

  pxh.bindDrawerMediaQueryControls(pxh.NAVIGATION_LINK, lgBreakpoint);
  pxh.bindDrawerMediaQueryControls(pxh.NAVIGATION_SUB_LINK, lgBreakpoint);

  pxh.overlayDrawerControl();

  pxh.escapeDrawerControl();

  pxh.action.clickToCloseAndFire(pxh.LOGIN_PROFILE_LINK, pxh.LOGIN_MENU_PROFILE, 'remove', pxh.LOGIN_MENU_VISIBLE);
  pxh.action.clickToCloseAndFire(pxh.LOGIN_SETTINGS_LINK, pxh.LOGIN_MENU_SETTINGS, 'remove', pxh.LOGIN_MENU_VISIBLE);

  pxh.toggleLoginMenu(pxh.LOGIN_PROFILE_LINK, pxh.LOGIN_MENU_PROFILE, pxh.LOGIN_MENU_VISIBLE);
  pxh.toggleLoginMenu(pxh.LOGIN_SETTINGS_LINK, pxh.LOGIN_MENU_SETTINGS, pxh.LOGIN_MENU_VISIBLE);

  pxh.toggleMenu(pxh.LOGIN_NOTIFICATIONS, pxh.NOTIFICATIONS, pxh.NOTIFICATIONS_VISIBLE);

  pxh.addResizeSensor('js-view');
});
