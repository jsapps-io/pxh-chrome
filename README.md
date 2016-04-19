#pxh-chrome 0.8.2

Application chrome for the Predix UI App Hub

##[Live Demo](https://github.build.ge.com/pages/hubs/pxh-chrome-demo)

pxh-chrome is the CSS/HTML layer of [ui-app-hub](https://github.build.ge.com/hubs/ui-app-hub), a front-end architecture that allows you to build and deliver separate [microapps](https://github.build.ge.com/hubs/ui-microapp) to your users through a shared navigation portal. Adhering to a mobile-first mindset, pxh-chrome offers the following components:

* `pxh-drawer`, a fixed lefthand drawer that contains application navigation, user profile information, and login controls
* `pxh-drawer-toggle` - a "hamburger" that allows a user to toggle the navigation drawer open or closed
* `pxh-navigation`, a linked list that works with ui-config-service and ui-app-hub to show the primary and secondary navigation for your microapps
* `pxh-badge`, a small component for displaying "unread counts" for an item, with configurable color options (required by pxh-navigation)
* `pxh-login`, a fixed bottom-left component that offers login controls, user profile information, and access to user settings
* `pxh-overlay`, a semi-transparent background that overlays microapp content when the user opens the navigation drawer in mobile and tablet contexts
* `pxh-wrapper` - an element that wraps around the view header and view in your Microapp
* `pxh-view-header` - a fixed top header that should display a user's context within a microapp, potentially with a px-context-browser component
* `pxh-view` - a flexible, responsive target container for all microapp content

##Using pxh-chrome

###Use pxh-chrome on its own
####Pre-work
1. Make sure your GE proxies are configured
1. Make sure you have Node installed
1. Install Bower and Gulp globally

####Build pxh-chrome
1. Download, clone or fork pxh-chrome to your local machine
1. Run `npm install && bower install` at the command line to install all dependencies
1. Run `gulp` to compile the static files for pxh-chrome
1. Run `gulp serve` to start your local development server
  * Type `CTRL+C` to shut down your local development server
1. Navigate to [http://localhost:4000](http://localhost:4000) to view a static version of pxh-chrome, which shows the styles, markup and responsive behavior of pxh-chrome
  * The navigation links are for demonstration purposes, and will not allow you to navigate between pages

**Need a more robust prototyping environment?** Try [Propeller-Px](https://github.build.ge.com/212326609/propeller-px), which includes pxh-chrome along with server-side templating, jQuery, Bootstrap, GitHub Pages hosting, etc.

###Use pxh-chrome in your project

Add pxh-chrome to your project using Bower:

```bash
bower install https://github.build.ge.com/hubs/pxh-chrome --save
```

Add `pxh-chrome.css` and `pxh-chrome.js` to your HTML file:

```html
<link rel="stylesheet" href="bower_components/pxh-chrome/dist/css/pxh-chrome.css">
```

```html
<script src="bower_components/pxh-chrome/dist/js/pxh-chrome.js"></script>
```

Finally, update your HTML to use pxh-chrome's markup and classes. Refer to the source code of `index.html` for the full and proper way of doing this.

##Design Philosophy

Harry Roberts' [discovr](https://github.com/csswizardry/discovr/tree/correct) application from his CSS Architecture workshop is a great reference that encapsulates much of our markup and style goals with pxh-chrome.

pxh-chrome aims to provide the App Hub with enough HTML, CSS and JS to render the above components, and then get out of the way for microapp development. In achieving this goal it loads a few external depenencies (detailed in its `bower.json` file), including Sass components from Px, Font Awesome, and the GE Inspira Sans typeface.

We use Sass to author our style rules for pxh-chrome, which in turn are compiled into CSS. We pull in our color variables from [px-colors-design](https://github.com/PredixDev/px-colors-design), reset and normalize the browser's default styles with [normalize.css](https://github.com/PredixDev/px-normalize-design), and [update the global `box-sizing` state](https://github.com/PredixDev/px-box-sizing-design) to `border-box` for all elements. Additionally we use [sass-mq](https://github.com/sass-mq/sass-mq) to define our responsive media queries, ensuring they are consistent and readable.

We import [px-typography](https://github.com/PredixDev/px-typography-design) and [px-icongraphy](https://github.com/PredixDev/px-iconography-design) to bring in the GE Inspira fonts and Font Awesome icons. Since these dependencies are available in the global space you can likely eliminate them from your Microapp, reducing your page weight without any ill effect.

###Mobile-First

pxh-chrome adheres to a "mobile first" philosophy, where we consider the mobile experience to be the bedrock of our application. The "mobile" view is the "default" view of our application, and so all our styles start from these base rules. As the width of our application increases, we add additional styles as necessary to optimize our design and layout for wider and wider displays, including tablets, laptops and desktops.

When coding in a "mobile first" environment you must always ask yourself the question: "What rules do I need to add to [narrower responsive breakpoint] in order to get it to look right at [wider responsive breakpoint]?" The more consistently you layer styles _on top of_ narrower breakpoints, the easier your code will be to read, understand and reason with.


###Media Queries

We use [sass-mq](https://github.com/sass-mq/sass-mq). `@md`, `@lg`, etc.

Define your responsive styles using `$from` (mobile-first philosophy) rather than `$until` (desktop-first philosophy) ... Work hard to maintain this consistency; be prepared to rethink and refactor your code to make this happen.

###BEM

pxh-chrome uses [BEM syntax when naming CSS classes](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). BEM (Block, Element, Modifier) gives us a controlled grammer for describing the relationships between classes, which is incredibly helpful when working with large, sophisticated design systems like Px.

* `block` -- person
* `block--modifier` -- person--female, person--jogging
* `block--modifier@md` -- menu--hidden@md
* `block__element` -- person__arm, person__hand, person__finger
* `block__element--modifier` -- person__arm--raised, person__finger--pointing
* `block--modifier-until@lg` -- menu--collapsed-until@lg
* `block--modifier@md-until@lg` -- menu--fixed@md-until@lg
* `block__element--modifier@md` -- menu__summary--visible@md
* `block__element--modifier@md-until@lg` -- menu__summary--visible@md-until@lg

###Inverted Triangle (ITCSS)

We follow the Inverted Triangle architecture for our Sass manifest. Start with the most general selector rules at the top of your manifest, and get more and more specific as you move towards the bottom.

The triangle is divided into layers. Settings, Tools, Generic, Base, Objects, Components, "Trumps" (let's call them Overrides or Utilities instead).

Make sure you put your styles in the right layer. Most of pxh-chrome's styles are in the Components layer.

See Harry Roberts' slides from [Managing CSS Projects with ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss) for more information.

###Classes are cheap. Your time is not.

HTML and classes are cheap. Your time is not cheap. The time of developers trying to understand your code in the future is not cheap. Write classes that are verbose (enough) and are self-documenting.

Classes should be readable. We use a lot of classes, especially with BEM. Especially with responsiveness.

Don't nest classes. Don't rely on inheritance. Write your styles and classes to be as shallow as possible.

Refer to [CSS Guidelines](http://cssguidelin.es/) for more best practices, including [recommendations against using nested selectors](http://cssguidelin.es/#nesting).

###Principle of Immutability

  * A class should look and behave the same way no matter where it's used in your markup and no matter what breakpoint you're at.
  * Want an element to look different in a different context? Write a "modifier" class and add that class to it
  * Want an element to look different at a particular breakpoint? Write a "responsive modifier" class and add that class to it

###Theming, Branding and Personalization

There are a number of ways to skin this cat, from redefining variables at the pxh-chrome level and recompiling your CSS to embedding your theme styles in the <head> of your HTML file. Refer to Harry Roberts' [4 1/2 Methods for Theming in (S)CSS](https://speakerdeck.com/csswizardry/4half-methods-for-theming-in-s-css).

###Triggering "Chromeless" Mode
To trigger "chromeless" mode, which hides the drawer, drawer toggle, navigation, and login module, simply:

1. Replace the `pxh-chromeful` class on your `<body>` element with `pxh-chromeless`
1. Remove the markup for `pxh-drawer`, `pxh-view-header-toggle` and `pxh-overlay` from your HTML file (we're not showing it so we don't need it)
1. Remove the `<script>` tag for `pxh-chrome.js`
  * `pxh-chrome.js` is not required for chromeless view, as the JavaScript is only necessary for managing drawer state between breakpoints, page refreshes and toggle events... if there's no drawer, there's no need for JavaScript!

##Browser Support
pxh-chrome is tested in the most recent major releases of Chrome, Firefox, Safari, and Internet Explorer (IE11 and IE Edge).

##Distributing pxh-chrome
1. Run `gulp` to compile your local version of pxh-chrome to your `/dist` folder
  * The files at `/dist` contain the compiled, concatenated and minified HTML, CSS and JavaScript for pxh-chrome
1. Run `gulp serve:dist` to test your distribution version of pxh-chrome for any last-minute bugs
  1. At this point you might want to test your local version of pxh-chrome in your local version of ui-app-hub
  1. In your local pxh-chrome folder, type `bower link` to create a local symlink for pxh-chrome
  1. In your local ui-app-hub folder, type `bower link pxh-chrome` to tell ui-app-hub to use _your local modified version_ of pxh-chrome rather than the version listed on ui-app-hub's `bower.json` file
  1. In your local ui-app-hub folder, run `gulp` (or `node app.js` or `nodemon`) to start your local App Hub
  1. Preview your changes to your local ui-app-hub and local pxh-chrome at [http://localhost:4000](http://localhost:4000)
  1. If anything looks broken, keep modifying your local ui-app-hub and pxh-chrome until it looks right
1. If everything looks good, bump your local version of pxh-chrome, tag it as a release, and push it to GitHub (remember to push your `--tags` too!)
1. Update the `bower.json` in your local version of ui-app-hub to reference your latest version of pxh-chrome
1. Run `bower install` to install the version of pxh-chrome that you just pushed to GitHub
1. Fire up your local App Hub
1. If everything looks good, commit your changes to ui-app-hub and push them to GitHub
