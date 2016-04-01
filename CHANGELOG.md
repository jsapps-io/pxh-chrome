#pxh-chrome changelog

###v0.4.2 - April 1, 2016
* Fix intertial- scrolling on iOS
  * Prevent all scrolling of `<html>` and `<body>` elements
  * Force iOS intertial scrolling of the `pxh-view`-classed element
  * Disable scrolling of `pxh-view` when `pxh-overlay` is visible
* Move `pxh-chrome` documentation styles into a `pxh-docs` class 

###v0.4.1 - March 31, 2016
* Prevent default event from firing when clicking drawer toggle buttons
* Add modifier classes to login items
* Watch and compile /dist files when running `gulp serve:dist` to steamline local, live development on ui-app-hub via `bower link`

###v0.4.0 - March 30, 2016
* Completely refactor how states are handled in JavaScript
  * States are now handled via a global state object
  * Instead of simple toggles, explicitly add/remove classes from elements
  * Track "drawer is narrow" and "drawer is open" states using JavaScript cookies
  * On desktop, if the drawer is collapsed when moving between microapps, keep it collapsed
* Refactor how we handle JavaScript cookies
* Refine animations between states
* Add `--wide@lg` and `--narrow@lg` modifier classes to more precisely target desktop states
* Improve navigation
  * Add support for badges on secondary navigation items
  * Wrap secondary navigation text in a text BEM element
  * Convert `<spans>`s to `<div>`s for all primary and secondary navigation items (blocks and elements in BEM)

### v0.3.4 - March 25, 2016
* REALLY fix the double scroll bar issue in IE (with a `!important` rule in the px-theme overrides layer)

### v0.3.4 - March 25, 2016
* REALLY fix the double scroll bar issue in IE (with a `!important` rule in the px-theme overrides layer)

### v0.3.3 - March 25, 2016
* Fix double scroll bars in IE

### v0.3.2 - March 25, 2016
* Disable scrolling of background content when navigation drawer is open and overlay is active on mobile and tablet

### v0.3.1 - March 23, 2016
* Update drawer state cookie to work across microapps

### v0.3.0 - March 22, 2016
* Truncate long text in primary and secondary navigation items and show an elipsis
* Truncate long user names
* Use Javascript cookies to track and recall expanded/collapsed state of the drawer between page refreshes (should work when navigating between microapps as well)

### v0.2.0 - March 22, 2016

* Add initial architectural documentation
* Automatically expand and collapse `pxh-drawer` between `@md` and `@lg` breakpoints

### v0.1.3

### v0.1.2

### v0.1.1

### v0.1.0

* Initial release
