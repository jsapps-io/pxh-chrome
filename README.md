#pxh-chrome

Application chrome for Px App Hub

##[Live Demo](https://github.build.ge.com/pages/hubs/pxh-chrome-demo)

pxh-chrome is the CSS/HTML layer of ui-app-hub, a front-end architecture that allows you to build and deliver separate "microapps" to your users through a shared navigation portal. Adhering to a mobile-first mindset, pxh-chrome offers the following components:

* pxh-drawer, a fixed lefthand drawer that contains application navigation, user profile information, and login controls
* pxh-navigation, a linked list that works with ui-config-service and ui-app-hub to show the primary and secondary navigation for your microapps
* pxh-login, a fixed bottom-left component that offers login controls, user profile information, and access to user settings
* pxh-overlay, a semi-transparent background that overlays microapp content when the user opens the navigation drawer in mobile and tablet contexts
* pxh-badge, a small component for displaying "unread counts" for an item, with configurable color options (required by pxh-navigation)
* drawer toggle - a mysterious "hamburger" that allows a user to toggle the navigation drawer open or closed
* view header - a fixed top header that should display a user's context within a microapp, potentially with a px-context-browser component
* view - a flexible, responsive target container for all microapp content

##Design Philosophy

pxh-chrome aims to provide the App Hub with enough HTML, CSS and JS to render the above components, and then get out of the way for microapp development. In achieving this goal it loads a few external depenencies (detailed in its `bower.json` file), including Sass components from Px, Font Awesome, and the GE Inspira Sans typeface.

We use Sass to author our style rules for pxh-chrome, which in turn are compiled into CSS. We pull in our color variables from px-colors-design, reset and normalize the browser's default styles with normalize.css, and reset the box model to use `border-box` for all elements. Additionally we use sass-mq to define our responsive media queries, ensuring they are consistent and readable.

We import px-typography and px-icongraphy to bring in the GE Inspira fonts and Font Awesome icons. Since these dependencies are available in the global space you can likely eliminate them from your Microapp, reducing your page weight without any ill effect. 


###Mobile-First

pxh-chrome adheres to a "mobile first" philosophy, where we consider the mobile experience to be the bedrock of our application. The "mobile" view is the "default" view of our application, and so all our styles start from these base rules. As the width of our application increases, we add additional styles as necessary to optimize our design and layout for wider and wider displays, including tablets, laptops and desktops.

When coding in a "mobile first" environment you must always ask yourself the question: "What rules do I need to add to [narrower responsive breakpoint] in order to get it to look right at [wider responsive breakpoint]?" The more consistently you layer styles _on top of_ narrower breakpoints, the easier your code will be to read, understand and reason with.


###Media Queries

We use sass-mq. @md, @lg, etc.

Define your responsive styles using $from (mobile-first philosophy) rather than $until (desktop-first philosophy) ... Work really hard to maintain this consistency; be prepared to rethink and refactor your code to make this happen.


###BEM

pxh-chrome uses BEM (Block, Element, Modifier) syntax in naming CSS classes. BEM gives us a controlled grammer for describing the relationships between classes, which is incredibly helpful when working with large, sophisticated design systems like Px.

block
block--modifier
block--modifier@md
block--modifier@lg
block--modifier@md-until@lg

block__element
block__element--modifier
block__element--modifier@md


###Inverted Triangle (ITCSS)

We use it for our Sass manifest. Start at the most general, and get more and more specific. Make sure you're putting your styles in the right layer.


###Classes are cheap. Your time is not.

HTML and classes are cheap. Your time is not cheap. The time of developers trying to understand your code in the future is not cheap. Write classes that are verbose (enough) and are self-documenting.

Classes should be readable. We use a lot of classes, especially with BEM. Especially with responsiveness.

Don't nest classes. Don't rely on inheritance. Write your styles and classes to be as shallow as possible.


###Principle of Immutability

  * A class should look and behave the same way no matter where it's used in your markup and no matter what breakpoint you're at.
  * Want an element to look different in a different context? Write a "modifier" class and add that class to it
  * Want an element to look different at a particular breakpoint? Write a "responsive modifier" class and add that class to it


##Browser Support

pxh-chrome is tested in latest major releases of Chrome, Firefox, Safari, and Internet Explorer (IE11 and IE Edge).

