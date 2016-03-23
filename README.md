#pxh-chrome

Application chrome for Px App Hub

##[Live Demo](https://github.build.ge.com/pages/hubs/pxh-chrome-demo)

pxh-chrome is the CSS/HTML layer of [ui-app-hub](https://github.build.ge.com/hubs/ui-app-hub), a front-end architecture that allows you to build and deliver separate [microapps](https://github.build.ge.com/hubs/ui-microapp) to your users through a shared navigation portal. Adhering to a mobile-first mindset, pxh-chrome offers the following components:

* `pxh-drawer`, a fixed lefthand drawer that contains application navigation, user profile information, and login controls
* `pxh-navigation`, a linked list that works with ui-config-service and ui-app-hub to show the primary and secondary navigation for your microapps
* `pxh-login`, a fixed bottom-left component that offers login controls, user profile information, and access to user settings
* `pxh-overlay`, a semi-transparent background that overlays microapp content when the user opens the navigation drawer in mobile and tablet contexts
* `pxh-badge`, a small component for displaying "unread counts" for an item, with configurable color options (required by pxh-navigation)
* `drawer toggle` - a "hamburger" that allows a user to toggle the navigation drawer open or closed
* `view header` - a fixed top header that should display a user's context within a microapp, potentially with a px-context-browser component
* `view` - a flexible, responsive target container for all microapp content

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

* `block`
* `block--modifier`
* `block--modifier@md`
* `block--modifier-until@lg`
* `block--modifier@md-until@lg`


* `block__element`
* `block__element--modifier`
* `block__element--modifier@md`
* `block__element--modifier@md-until@lg`

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

##Browser Support

pxh-chrome is tested in the most recent major releases of Chrome, Firefox, Safari, and Internet Explorer (IE11 and IE Edge).
