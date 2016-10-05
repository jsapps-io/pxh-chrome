Super, GE, EA, Honda, CFM

COLORS
  * background colors
  * text colors
  * link colors
  * border colors (and widths)
  * scrollbars
  * box shadows
FAVICON
LOGOS
FONTS





// pxh-badge

$pxh-badge-bg-color: $gray5;
$pxh-badge-font-color: $white;

  &--navigation: $select-blue-pressed;
    &--border: $select-blue-pressed;
    &--font-color: $white;

  &--primary: $primary-blue;
    &--border: $primary-blue;
    &--font-color: $white;

  &--important: $alert-red;
    &--border: $alert-red;
    &--font-color: $white;

  &--warning: $alert-orange;
    &--border: $alert-orange;
    &--font-color: $white;

  &--error: $alert-yellow;
    &--border: $alert-orange;
    &--font-color: $white;

  &--info: $alert-blue;
    &--border: $alert-blue;
    &--font-color: $white;

  &--healthy-black: $black;
    &--border: $black;
    &--font-color: $white;

  &--healthy-white: $white;
    &--border: $gray5;
    &--font-color: $black;



// pxh-drawer

$pxh-drawer-bg-color: $pxh-drawer-bg-color;

$pxh-drawer-toggle-link-color: $white; // don't think we need this if we're using fill
  &--link, &--visited: $white; // don't think we need this if we're using fill

$pxh-drawer-toggle-icon-color: $pxh-drawer-toggle-icon-color; // this is the fill; this is what we want

$pxh-drawer-header--image {
  background-image: url('../img/predix_logo_color.png');
}

$pxh-drawer-side
$pxh-drawer-opposite-side

$pxh-drawer-box-shadow;


// pxh-error

$pxh-error-icon-color: $error-icon-color;

$pxh-error-title-font-color: $error-title-color;

$pxh-error-description-font-color: $error-description-color;


// pxh-login

$pxh-login-border-top-color: $pxh-login-border-top-color;
$pxh-login-border-top-width: $pxh-login-border-top-width;
$pxh-drawer-bg-color: $pxh-drawer-bg-color;

$pxh-login-notifications-link-font-color: $gray7;
  &:hover + .pxh-login__notifications-link: $white !important // px-theme override

$pxh-login-notiifcations-hover-font-color: $white;

$pxh-login-notifications-badge-bg-color: $gray5;
  &--green: $green;
  &--blue: $blue;
  &--orange: $orange;
  &--red: $red;

$pxh-login-notifications-badge-font-color: $white;

$pxh-login-avatar-icon-color: $gray7;

$pxh-login-avater-border-width: 1px;

$pxh-login-avatar-border-color: $gray7;

$pxh-login-settings-link-font-color: $gray7;

$pxh-login-settings-link-font-color-hover: $white;

pxh-login-menu-font-color: $white;
pxh-login-menu-bg-color: $black;

$pxh-login-menu-border-width: 1px;

$pxh-login-menu-border-color: $gray9;

$pxh-login-menu-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);

$pxh-login-menu-divider-border-top-width: 1px;

$pxh-login-menu-divider-border-color: $gray10;

$pxh-login-menu-link-font-color: $white;

$pxh-login-menu-link-font-color-hover: $white;

$pxh-login-menu-link-bg-color-hover: $gray10;





// pxh-navigation

$pxh-navigation-border-top-width: 1px;
$pxh-navigation-border-top-color: rgba(0, 0, 0, 0.15);

$pxh-navigation-item-icon-error-color: $pxh-navigation-error-icon-color;

$pxh-navigation-sub-link-font-color-selected: $pxh-navigation-sub-selected-color;
  &:link, &:visited, &:hover

$pxh-navigation-sub-link-bg-color-selected: $pxh-navigation-sub-selected-bg-color;
  &:link, &:visited, &:hover

$pxh-navigation-sub-link-font-color;
$pxh-navigation-sub-link-bg-color;
$pxh-navigation-sub-link-font-color-hover;
$pxh-navigation-sub-link-bg-color-hover;
$pxh-navigation-sub-link-font-color-selected;
$pxh-navigation-sub-link-bg-color-selected;

$pxh-navigation-sub-link-settings-font-color;
$pxh-navigation-sub-link-settings-bg-color;
$pxh-navigation-sub-link-settings-font-color-hover;
$pxh-navigation-sub-link-settings-bg-color-hover;
$pxh-navigation-sub-link-settings-font-color-selected;
$pxh-navigation-sub-link-settings-bg-color-selected;

$pxh-navigation-link-font-color;
$pxh-navigation-link-bg-color;
$pxh-navigation-link-font-color-hover;
$pxh-navigation-link-bg-color-hover;
$pxh-navigation-link-font-color-selected;
$pxh-navigation-link-bg-color-selected;
$pxh-navigation-sub-link-font-color-active;
$pxh-navigation-sub-link-bg-color-active;

$pxh-navigation-sub-item-divider-height: 1px;
$pxh-navigation-sub-item-divider-color: $gray9; // used as bg color but that's an implementation detail

$pxh-navigation-item-icon-color; // hover, selected, active states, too?
$pxh-navigation-item-icon-color-error; // hover, selected, active states, too?




// pxh-notifications

$pxh-notification-border-bottom-width: 1px;

$pxh-notification-border-color: $gray9;

$pxh-notifications-bg-color: $gray10;

$pxh-notifications-font-color: $gray2;

$pxh-notifications-border-width: 1px;

$pxh-notifications-border-color: $gray7;

$pxh-notifications-box-shadow;

$pxh-notifications-header-border-bottom-width: 1px;

$pxh-notifications-header-border-color: $gray7;

$pxh-notifications-link-font-color: $gray5;

$pxh-notifications-link-font-color-hover: $primary-blue;

$pxh-notifications-clear-font-color: $pxh-notifications-link-font-color;

$pxh-notifications-clear-font-color-hover: $pxh-notifications-link-font-color-hover;

$pxh-notifications-empty-font-color: $gray7;

$pxh-notification-icon-color;
  &--green: $green;
  &--blue: $blue;
  $--orange: $orange;
  $--red: $red;

$pxh-notification-link-font-color: $gray4;

$pxh-notification-link-font-color-hover: $primary-blue;

$pxh-notification-more-button-bg-color: $gray10;

$pxh-notification-more-button-bg-color-hover: $gray9;

$pxh-notification-dismiss-button-font-color: $gray8;

$pxh-notification-dismiss-button-font-color-hover: $primary-blue;







$pxh-overlay-bg-color: rgba(0, 0, 0, 0.7);


// pxh-spinner

$pxh-spinner-base-color: rgba($gray4, $pxh-spinner-alpha);
$pxh-spinner-accent-color: $primary-blue;

$pxh-spinner-base-color-inverted: rgba($gray8, $pxh-spinner-alpha);
$pxh-spinner-inverted-accent-color-inverted: $pxh-spinner-accent-color;



// pxh-toast

$pxh-toast-font-color: $gray5;

$pxh-toast-background-color: $gray10;

$pxh-toast-more-button-font-color: $gray7;

$pxh-toast-more-button-bg-color: $gray10;

$pxh-toast-more-button-border-color: $gray8;

$pxh-toast-more-button-border-width: 1px;

$pxh-toast-more-button-font-color-hover: $primary-blue;

$pxh-toast-more-button-bg-color-hover: $pxh-toast-more-button-bg-color;

$pxh-toast-button-bg-color: $gray10;

$pxh-toast-button-font-color: $gray5;

$pxh-toast-button-bg-color-hover: $gray9;

$pxh-toast-button-font-color-hover: $gray9;

$pxh-toast-timestamp-font-color: $gray8;

$pxh-toast-dismiss-button-font-color: $gray7;

$pxh-toast-dismiss-button-font-color-hover: primary-blue;

$pxh-toast-icon-color: $white;
  &--green: $green;
  &--blue: $blue;
  $--orange: $orange;
  $--red: $red;





// pxh-view

$pxh-view-background-colors: [array]

$pxh-view-header-bg-color: $pxh-view-header-bg-color;

$pxh-view-header-border-color: $pxh-view-header-border-color; // should just define border color for the whole thing and set bottom width to 1px

$pxh-view-header-border-width: 0 0 1px 0; // should allow all borders, but specify just the bottom to start

$pxh-view-header-border-bottom-color: $pxh-view-header-border-bottom-color;
$pxh-view-header-border-bottom-width: $pxh-view-header-border-bottom-width;

$pxh-view-header-title-link-font-color: $black;
  &:link, &:visited;

$pxh-view-header-drawer-toggle-icon-color: $pxh-view-header-drawer-toggle-icon-color;


// <html> and <body> elements

$pxh-html-bg-color: $inuit-base-background-color;

$pxh-html-font-color: $inuit-base-background-color;

$pxh-html-font-family: "'GE Inspira Sans', 'Helvetica', 'Arial', sans-serif";

<hr> element

$pxh-hr-color: $gray6;

<a> element

$pxh-link-font-color: $primary-blue;
  &:link,
  &:visited,
  &:active

$pxh-link-font-color-hover: $pxh-link-font-color;




// fonts

// provide ability to import custom web fonts from custom URLs and link them up/namespace them, etc.



// overrides.px-theme

$pxh-html-bg-color;



// overrides.pxh-docs

$pxh-docs-bg-color: $white;
$pxh-docs-code-font-size: $inuit-base-font-size;
$pxh-docs-code-bg-color: $fff3f3;
$pxh-docs-code-font-color: #900;





// settings.defaults

primary brand colors
light brand colors
dark brand colors

monochromatic brand colors
gray -> gray typos help

button colors (primary blue)
select colors (turquoise)
alert colors

data viz colors basic
data viz colors light
data viz colors dark

base background color
base font color
base font size
base spacing unit
base line height
inuit namespace



// settings.pxh-chrome

...all the variables should probably go in here



// pxh-animations





// pxh-mixins

FANCY SCROLLBAR
$base-color
$arrow-color
$track-color
$face-color
$track-bg-color
$scrollbar-width
$track-border-width;
$track-border-color;
$thumb-border-left-width;
$thumb-border-left-color;
$thumb-border-right-width;
$thumb-border-right-color;
$thumb-bg-color;




// pxh-pre-chrome

$pxh-html-bg-color: $gray10;
$pxh-html-font-color: $white;
$pxh-prechrome-error-icon-color: $gray5;
$pxh-prechrome-error-title-font-color: $white;
$pxh-prechrome-error-description-font-color: $white;





