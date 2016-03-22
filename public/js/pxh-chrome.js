'use strict';
(function(){

  var selectedApp = window.location.pathname;
  var selectedRoute = window.location.hash;

  var navItems = document.querySelectorAll('.pxh-navigation__item');

  var pxhLoginMenuToggleControl = document.querySelector('.pxh-login__link');
  var pxhLoginMenuToggleTarget = document.querySelector('.pxh-login-menu');

  function pxhToggleLoginMenu() {
    if ((pxhLoginMenuToggleControl) && (pxhLoginMenuToggleTarget)) {
      pxhLoginMenuToggleControl.addEventListener('click', function(e) {
        e.preventDefault();
        pxhLoginMenuToggleTarget.classList.toggle('pxh-login-menu--visible');
      }); 
    }
  }

  // function setNavState(){
  //   // Set initial highlighted & expanded state
  //   for(var i=0;i<navItems.length;i++){
  //     var item = navItems[i];
  //     var link = item.querySelector('a');
  //     var path = link.getAttribute('href');
  //     // Hash routing
  //     var app = path.split('#')[0];
  //     var route = path.split('#')[1];
  //     // console.log(app,route);
  //     // Highlight if item is selected
  //     // TODO: subnav highlight
  //     if(path === selectedApp + selectedRoute){
  //       link.setAttribute('class', 'pxh-navigation__link pxh-navigation__link--selected');
  //     } else {
  //       link.setAttribute('class', 'pxh-navigation__link');
  //     }
  //     // Expand the subnav for the selected app
  //     if(app === selectedApp && item.querySelector('ul')){
  //       item.querySelector('ul').setAttribute('class', 'pxh-navigation__sub-list');
  //     }
  //   }
  // }

  // function watchState(){
  //   // Set up a watch on the hashchange event
  //   window.onhashchange = function(e){
  //     selectedRoute = '#' + e.newURL.split('#')[1];
  //     console.log('nav changed to',selectedRoute);
  //     setNavState();
  //   };
  // }

  // 
  var pxhDrawerToggleControls = [
    '.pxh-drawer-toggle__link',
    '.pxh-view-header-drawer-toggle__link'
  ];

  var pxhDrawerToggleTargets = {
    '.pxh-drawer' : 'pxh-drawer--hidden-until@md pxh-drawer--narrow@md',
    '.pxh-overlay' : 'pxh-overlay--hidden',
    '.pxh-navigation' : 'pxh-navigation--narrow@md',
    '.pxh-login__name' : 'pxh-login__name--narrow@md',
    '.pxh-login__link' : 'pxh-login__link--narrow@md',
    '.pxh-login__settings' : 'pxh-login__settings--narrow@md',
    '.pxh-login__caret' : 'pxh-login__caret--narrow@md',
    '.pxh-view' : 'pxh-view--narrow@lg',
    '.pxh-view-header' : 'pxh-view-header--narrow@lg',
    '.pxh-view-header-drawer-toggle' : 'pxh-view-header-drawer-toggle--hidden',
    'html' : 'pxh-disable-scroll-until@lg',
    'body' : 'pxh-disable-scroll-until@lg'
  };

  function pxhBindDrawerToggleEvents() {
    for (var i = 0; i < pxhDrawerToggleControls.length; i++) {
      var toggleControl = pxhDrawerToggleControls[i];
      var toggleControlElement = document.querySelector(toggleControl);
      toggleControlElement.addEventListener('click', pxhToggleDrawerTargets);
    }
  }

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var phxToggleDrawerOnWindowChange = debounce(function() {
    var windowWidth = window.innerWidth;
    var triggerWidth = 1024 + 30; // add a few extra pixels to accomodate scroll bar and prevent @md state bounce
    console.log('current width: ' + windowWidth);
    if (
      ((windowWidth >= triggerWidth) && (document.querySelector('.pxh-view--narrow\\@lg') === null))
      ||
      ((windowWidth < triggerWidth) && (document.querySelector('.pxh-view--narrow\\@lg')))
      )
      {
      pxhToggleDrawerTargets();
    }
  }, 500);

  function pxhToggleDrawerTargets(event) {
    if (event) {
      event.preventDefault();
    }
    for (var pxhBaseClassName in pxhDrawerToggleTargets) {
      if ((pxhDrawerToggleTargets.hasOwnProperty(pxhBaseClassName)) && (document.querySelector(pxhBaseClassName))) {
        var toggleTargetElement = document.querySelector(pxhBaseClassName);
        if (pxhDrawerToggleTargets[pxhBaseClassName].indexOf(' ')) {
          var pxhToggleClassNames = pxhDrawerToggleTargets[pxhBaseClassName].split(' ');
          for (var i = 0; i < pxhToggleClassNames.length; i++) {
            toggleTargetElement.classList.toggle(pxhToggleClassNames[i]);
          }
        } else {
          toggleTargetElement.classList.toggle(pxhDrawerToggleTargets[pxhBaseClassName]);
        }
      }
    }
  }

  // INIT
  // setNavState();
  // watchState();
  pxhBindDrawerToggleEvents();
  pxhToggleLoginMenu();
  window.addEventListener('resize', phxToggleDrawerOnWindowChange);

}());
