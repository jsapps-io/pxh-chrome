#pxh-chrome changelog

### Pending Release
* _nothing yet..._

### 0.5.1 - April 8, 2016
* Add a responsive "chromeless" view, which can display a Microapp without the left drawer, navigation, login module, and drawer toggle
  * Triggering "chromeless" is simply a matter of removing the markup for the drawer and toggle, removing the responsive classes from `pxh-view-header` and `pxh-view`, and removing `pxh-chrome.js` (`pxh-chrome.js` is not required for chromeless view, as the JavaScript is only necessary for managing drawer state between breakpoints, refreshes and toggles... no drawer, no JavaScript!)

### 0.5.0 - April 6, 2016
* Move `pxh-view-header` out from `pxh-view`
  * There were simply too many bugs on iOS and IE to justify keeping the `position: fixed` view-header element inside the view element
* Add wrapper class `pxh-wrapper` around `pxh-view-header` and `pxh-view`
* Move responsibility of wrapper, view header and view out of the App Hub and into the Microapp
  * The App Hub (via pxh-chrome) will continue to provide the styles and markup for these elements, as well as the desired responsive behavior and JavaScript events, but each Microapp is now responsible for embedding these elements and populating them with content

### 0.4.4 - April 5, 2016
* On tablet and mobile, automatically close the navigation drawer when the user clicks a primary or secondary navigation link

### 0.4.3 - April 4, 2016
* Increase height of drawer toggle and view header to match `px-context-browser`
* Add basic loading spinner from `px-spinner`

### 0.4.2 - April 1, 2016
* Fix intertial- scrolling on iOS
  * Prevent all scrolling of `<html>` and `<body>` elements
  * Force iOS intertial scrolling of the `pxh-view`-classed element
  * Disable scrolling of `pxh-view` when `pxh-overlay` is visible
* Move `pxh-chrome` documentation styles into a `pxh-docs` class 

### 0.4.1 - March 31, 2016
* Prevent default event from firing when clicking drawer toggle buttons
* Add modifier classes to login items
* Watch and compile /dist files when running `gulp serve:dist` to steamline local, live development on ui-app-hub via `bower link`

### 0.4.0 - March 30, 2016
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

### 0.3.4 - March 25, 2016
* REALLY fix the double scroll bar issue in IE (with a `!important` rule in the px-theme overrides layer)

### 0.3.3 - March 25, 2016
* Fix double scroll bars in IE

### 0.3.2 - March 25, 2016
* Disable scrolling of background content when navigation drawer is open and overlay is active on mobile and tablet

### 0.3.1 - March 23, 2016
* Update drawer state cookie to work across microapps

### 0.3.0 - March 22, 2016
* Truncate long text in primary and secondary navigation items and show an elipsis
* Truncate long user names
* Use Javascript cookies to track and recall expanded/collapsed state of the drawer between page refreshes (should work when navigating between microapps as well)

### 0.2.0 - March 22, 2016
* Add initial architectural documentation
* Automatically expand and collapse `pxh-drawer` between `@md` and `@lg` breakpoints

### 0.1.3 - March 21, 2016

### 0.1.2 - March 18, 2016

### 0.1.1 - March 18, 2016

### 0.1.0 - March 18, 2016
* Initial release
