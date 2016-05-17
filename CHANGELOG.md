#pxh-chrome changelog

### pending release
* Use Metalsmith to stub out static site tool for generating demo and test screens 
* Replace `gulp e2e` task with `gulp serve:e2e` task for running end-to-end tests
  * `gulp serve:e2e` will automatically fire up a local server at `http://localhost:4444` and then run e2e tests against it
    * It doesn't automatically shut down, though ... use CTRL+C to do that
* Run end-to-end tests via `directConnect` rather than through Selenium
* Fix end-to-end tests in Firefox
  * They now work in Firefox and Chrome (Safari isn't supported by `directConnect` and is too buggy in Selenium Web Driver)
* Remove `gulp e2e-install` task

### 0.11.0 - May 17, 2016
* Replace `pxhCookies` JavaScript cookie library with js-cookie
  * Replace `pxhCookies.setItem()` with `pxhCookies.set()`
  * Replace `pxhCookies.getItem()` with `pxhCookies.get()`
  * Replace `pxhCookies.removeItem()` with `pxhCookies.remove()`
  * Remove unused `pxhCookies.hasItem()` method
* Add `pxhResizeSensor` function from css-element-queries so we can detect changes in element widths
* Fire a `pxhViewResized` event when the width of `pxh-view` changes
* Bump normalize.css to 4.1.1
  * Improve font rendering in all browsers
  * Remove opinionated style declarations
* Move `box-sizing` rule into the `generic.defaults` ITCSS Sass layer
* Move `px/typography` rules into the `elements.typography` layer
* Move global font families declaration into the `elements.body` layer
* Consolidate `px/settings.defaults` and `px/settings.colors` into a single `settings.defaults` layer
* Remove `px/functions`, `px/inuit-functions`, `px/iconography`, `px/mixins`, `px/typography`
* Remove unused `pxh-header` and `pxh-footer` Sass files
* Remove unused `pxh-is-hidden` class
* Remove `:host` declarations and minification hacks
* Remove `calculateRem` mixin
* Pluralize `elements.links` layer
* Make `pxh-badge` font weight normal (not bold) by default 

### 0.10.0 - May 12, 2016
* Change "Your Profile" user menu item to "My Profile"
* Move all Px Sass `@import` dependencies directly into pxh-chrome 
* Remove all Px dependencies from `bower.json`
* Remove GE Inspira fonts from pxh-chrome
  * We are relying on each microapp to load it if it needs it, which current experience indicates is a reliable assumption.
* Bump required Node version to 4.x.x
* Bump font-awesome to 4.6.2
* Increase default end-to-end test timeout to 10 seconds

### 0.9.0 - May 6, 2016
* Remove anonymous wrapper function around `pxh-chrome.js` code
* Reorder and refactor`pxh-chrome.js` code
* Rename functions and variables in `pxh-chrome.js`
  * Namespace all functions with `pxh-`
  * Changed functions/variables include `pxhCookies`, `pxhChangeClasses`, `pxhFindObjectByLabel`, `pxhLoadState`, `pxhStatesObject`, etc.
* Add a `removeAll()` method to `pxhCookies` that obliterates all cookies
* Add unit tests for:
  * working with cookies
  * adding/removing/toggling classes
  * switching between states
* Add end-to-end tests for:
  * basic presence and visibility of key elements
  * toggling login menus
  * toggling `pxh-drawer` and `pxh-overlay` on mobile, tablet and desktop
  * preserving drawer state between page refreshes

### 0.8.3 - May 3, 2016
* Add `title=""` attributes to all pxh-drawer links, so users can see the full text even when they're truncated with ellipses
* Add a task for bumping the pxh-chrome version number across all relevant files, with lightweight validation
  * Just type `gulp bump --old 0.8.2 --new 0.8.3` to use it
  * At the next `gulp` it will compile the changes to `/dist` as well
* Bump version numbers on all node modules
* Add a `gulp dist` task that does the exact same thing as `gulp`
* Stub out tests (currently broken in this release)

### 0.8.2 - April 14, 2016
* Bump version number in CSS/JS comments, HTML, `bower.json`, `package.json`, etc.

### 0.8.1 - April 14, 2016
* Use `<section>` element instead of `<main>` for the `pxh-view` content area to avoid colliding with the global `<main>` element styles defined in px-theme

### 0.8.0 - April 13, 2016
* Scope `pxh-view-header` and `pxh-view` reponsive modifier class styles so they are only applied in the "chromeful" view
  * That is, when the `<body>` has a class of `pxh-chromeful` on it
  * "chromeful" means we show all the UI chrome (drawer, hamburger, navigation, login module)
  * "chromeless" means we only show the content of the microapp
* Add semantic HTML elements for accessibility purposes
  * Support heading elements (e.g. h1, h2, etc.) in drawer header and view header
* Launch development server on port `4000` by default to avoid conflicts with ui-app-hub and ui-micro-app

### 0.7.1 - April 12, 2016
* Fix JavaScript bug that prevented click events from firing if they were not bound to JavaScript (e.g. raw hyperlinks)

### 0.7.0 - April 12, 2016
* Allow user to dismiss the drawer on tablet and mobile by clicking anywhere in the overlay
* Allow user to dismiss the drawer on tablet and mobile by pressing the ESC key on the keyboard
* Update login module design
  * Update design
  * Add two menus, one for user profile and one for user settings (and sign out link)
  * Allow user to click anywhere to disable menus
  * Add (reasonably) smarter menu positioning

### 0.6.1 - April 11, 2016
* Limit width of application title in `drawer-header`, add elipses if too long, and fix word wrap when narrow
* Prevent px-theme from overriding the application title link color
* Move toggle styles to drawer header link (for animation sequencing reasons)
* Animation is janky, but other things are an improvement over 0.6.0?
* Fix overflow issue where last two navigation items were inaccessible behind login module on short viewports

### 0.6.0 - April 11, 2016
* Update drawer to latest styles from APM UX team
  * Newish colors
  * New normal, active, current, and hover styles
* Add drawer header component ("Predix") that displays responsively depending on viewport width (hidden on narrow, visible on wide)
* Add global style for hyperlinks
* Bump versions on Bower dependencies, including Px Sass components

### 0.5.1 - April 8, 2016
* Add a responsive "chromeless" view, which can display a Microapp without the left drawer, navigation, login module, and drawer toggle. Triggering "chromeless" is simply a matter of:
  * Removing the markup for the drawer and toggle
  * Removing all the responsive classes from `pxh-view-header` and `pxh-view`
  * Removing the `<script>` tag for `pxh-chrome.js` (`pxh-chrome.js` is not required for chromeless view, as the JavaScript is only necessary for managing drawer state between breakpoints, page refreshes and toggle events... if there's no drawer, there's no need for JavaScript!)

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
* Initial release of pxh-chrome
