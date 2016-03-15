'use strict';
(function(){

  var selectedApp = window.location.pathname;
  var selectedRoute = window.location.hash;

  var navContainer = document.querySelector('.pxh-navigation'); // Is this safe?
  var navItems = document.querySelectorAll('.pxh-navigation__item');

  var loginAction = document.querySelector('.pxh-login__action');
  var loginMenu = document.querySelector('.pxh-login-menu');

  function loginButton() {
      loginAction.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(loginMenu);
        loginMenu.classList.toggle('pxh-login-menu--visible');
      });
  }

  function setNavState(){
    // Set initial highlighted & expanded state
    for(var i=0;i<navItems.length;i++){
      var item = navItems[i];
      var link = item.querySelector('a');
      var path = link.getAttribute('href');
      // Hash routing
      var app = path.split('#')[0];
      var route = path.split('#')[1];
      console.log(app,route);
      // Highlight if item is selected
      // TODO: subnav highlight
      if(path === selectedApp + selectedRoute){
        link.setAttribute('class', 'pxh-navigation__link pxh-navigation__link--selected');
      } else {
        link.setAttribute('class', 'pxh-navigation__link');
      }
      // Expand the subnav for the selected app
      if(app === selectedApp && item.querySelector('ul')){
        item.querySelector('ul').setAttribute('class', 'pxh-navigation__sub-list');
      }
    }
  }

  function watchState(){
    // Set up a watch on the hashchange event
    window.onhashchange = function(e){
      selectedRoute = '#' + e.newURL.split('#')[1];
      console.log('nav changed to',selectedRoute);
      setNavState();
    };
  }

  var controlTriggers = [
    '.pxh-drawer-toggle__link',
    '.pxh-view-header-drawer-toggle__link'
  ];

  var toggleTargets = {
    '.pxh-drawer' : 'pxh-drawer--hidden-until@md pxh-drawer--narrow@md',
    '.pxh-overlay' : 'pxh-overlay--hidden pxh-overlay--hidden@lg',
    '.pxh-navigation' : 'pxh-navigation--narrow@md',
    '.pxh-login__name' : 'pxh-login__name--hidden',
    '.pxh-login__control' : 'pxh-login__control--hidden',
    '.pxh-login__settings' : 'pxh-login__settings--hidden',
    '.pxh-view-header-drawer-toggle' : 'pxh-view-header-drawer-toggle--visible',
    '.pxh-view' : 'pxh-view--narrow@lg',
    '.pxh-view-header' : 'pxh-view-header--narrow@lg',
    '.pxh-drawer-toggle' : 'pxh-drawer-toggle--narrow@md',
    '.pxh-drawer-toggle__link' : 'pxh-drawer-toggle__link--visible',
    'html' : 'pxh-disable-scroll-until@lg',
    'body' : 'pxh-disable-scroll-until@lg'
  };

  function bindControls() {
    for (var i = 0; i < controlTriggers.length; i++) {
      var item = controlTriggers[i];
      var el = document.querySelector(item);
      el.addEventListener('click', toggleThings);
    }
  }

  function toggleThings(event) {
    event.preventDefault();
    // handle badge elements separately because they're an array (gross)
    var els = document.querySelectorAll('.pxh-badge--navigation');

    // handle all the other single elements
    for (var i = 0; i < els.length; i++) {
      els[i].classList.toggle('pxh-is-hidden');
    }
    for (var key in toggleTargets) {
      if ((toggleTargets.hasOwnProperty(key)) && (document.querySelector(key))) {
        var el = document.querySelector(key);
        if (toggleTargets[key].indexOf(' ')) {
          var classes = toggleTargets[key].split(' ');
          console.log(classes);
          for (var i = 0; i < classes.length; i++) {
            el.classList.toggle(classes[i]);
          }
        } else {
          el.classList.toggle(toggleTargets[key]);
        }
      }
    }
  }

  // INIT
  setNavState();
  watchState();
  bindControls();
  loginButton();

}());
