'use strict';
/*! toasts.pxh-chrome.js 1.7.0 */

// **************
// CONFIG OBJECTS
// **************

/** @namespace window.pxh */
if (!window.pxh) window.pxh = {};

/** @namespace window.pxh.toast */
window.pxh.toast = {
  /** @namespace window.pxh.toast.badge */
  badge : {
    count : 0,

    /** 
     * Increases the value of the notification icon badge by 1
     * 
     * Truncates the value if the resulting number of notifications is greater than 9
     * 
     * Won't display a value below zero
     */
    increment : function() {
      window.pxh.toast.badge.count = window.pxh.toast.badge.count + 1;
      if (window.pxh.toast.badge.count > 9)
      {
        window.pxh.toast.badge.text = '9+';
      }
      else if (window.pxh.toast.badge.count < 0)
      {
        window.pxh.toast.badge.count = 0;
        window.pxh.toast.badge.text = 0;
      }
      else
      {
        window.pxh.toast.badge.text = window.pxh.toast.badge.count;
      }
      window.pxh.toast.badge.update();
    },
    /** 
     * Decreases the value for on the notification icon badge by 1
     * 
     * Truncates the value if the resulting number of notifications is greater than 9
     * 
     * Won't display a value below zero
     */
    decrement : function() {
      window.pxh.toast.badge.count = window.pxh.toast.badge.count - 1;
      if (window.pxh.toast.badge.count > 9)
      {
        window.pxh.toast.badge.text = '9+';
      }
      else if (window.pxh.toast.badge.count < 0)
      {
        window.pxh.toast.badge.count = 0;
        window.pxh.toast.badge.text = 0;
      }
      else
      {
        window.pxh.toast.badge.text = window.pxh.toast.badge.count;
      }
      window.pxh.toast.badge.update();
    },
    /** 
     * Locates the notification icon badge element and updates the displayed value
     * Hides the notification icon and badge entirely if there aren't any notifications
     */
    update : function() {
      var notificationIcon = '';
      var notificationBadge = '';
      if ((notificationIcon = document.getElementById('js-login__notifications')) && (notificationBadge = document.getElementById('js-login__notifications-badge')))
      {
        if (window.pxh.toast.badge.count > 0)
        {
          notificationBadge.innerHTML = window.pxh.toast.badge.text;
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
  
  /** 
   * Adds a toast and corresponding notification (if applicable) to the application
   * 
   * @example
   * var toastObject1 = {
   *   value : 'something' // window.pxh.toast.add merely requires that the toast object exists, and will use reasonable defaults if any parameters are missing
   * }
   *
   * var toastObject2 = {
   *   type : 'orange',
   *   isPersistent : true,
   *   icon : 'exclamation-circle',
   *   text : 'It can be this long or longer if you want. In fact, it can be really, really long if you have a lot you want to say. We kind of discourage this much content but knock yourself out! Just keep talking and talking and talking and this area will keep expanding and expanding.',
   *   actionLabel : 'View a lot of things right now',
   *   actionLink : 'http://predix.com',
   *   formattedTimestamp: '9:36 AM'
   * }
   *
   * var toastObject3 = {
   *   type : 'red',
   *   isPersistent : false,
   *   icon : 'exclamation-triangle',
   *   text : 'This is going to fire a callback.',
   *   actionLabel : 'Callback, yo!',
   *   actionCallback : function() {
   *     console.log('this was called from actionCallback')
   *   }
   * }
   *
   * var toastObject4 = {
   *   type : 'red',
   *   isPersistent : false,
   *   icon : 'times-circle',
   *   text : 'Fourth notification? Coming right up!',
   *   actionLabel : 'GE Digital',
   *   actionLink : 'http://digital.ge.com'
   * }
   * 
   * document.addEventListener('DOMContentLoaded', function(event) {
   *   window.pxh.toast.add(toastObject1);
   *   window.pxh.toast.add(toastObject2, true); // creates a notification but not a toast
   *   window.pxh.toast.add(toastObject3);
   *   window.pxh.toast.add(toastObject4);
   * });
   * @param {object} object An object containing the parameters for the toast (and notification, if applicable) that will be created
   * @param {String} [object.id=unique hex value] - The unique id for the toast/notification being generated. If not provided, pxh-chrome will automatically generate a unique hexidecimal value. The id must be unique or else unexpected behavior might occur. If your application will be providing its own id, it is your responsibility to enforce its uniqueness
   * @param {String} [object.type='blue'] - The type of toast/notification. Available options are 'green', 'blue', 'orange', 'red'
   * @param {String} [object.icon='info-circle'] - The name of the Font Awesome icon to display for the toast/notification
   * @param {String} [object.text='You received a new notification.'] - The text to display for the toast/notification. Any HTML tags will be stripped out and the resulting plaintext will be displayed. 
   * @param {String} [object.formattedTimestamp] The formatted text to display for the datetime the toast/notification was issued (e.g. 9:36 AM)
   * @param {String} [object.timestamp] The ISO 8601 datetime value for when the toast/notification was issued (e.g. 2016-08-01T17:36:10+00:00)
  * @param {Boolean} [object.isPersistent=false] - Whether or not the toast should persist until the user actively dismisses it. This option is only recognized if the toast has an `actionLink` or `actionCallback` associated with it
   * @param {Boolean} [object.suppressToast=false] An optional parameter that, if true, will only create a notification (if applicable) from the object, and will display a corresponding toast to the user
   * @param {String} [object.actionText='Action'] - The text to display in the toast's action button, if an `actionLink` or `actionCallback` is present.
   * @param {String} [object.actionLink] - The URL to follow when the user clicks the action button. Can be a fully qualified URL (e.g. http://www.predix.com/) or a relative route within your application (e.g. assets/detail/1234?show_cases_tab)
   * @param {Function} [object.actionCallback] - The callback function to execute when the user clicks the toast/notification's action button
   */
  add : function(object, suppressToast) {
    var id = (object && object.id) ? object.id : Math.floor(Math.random()*16777215).toString(16);
    var notificationList = '';
    var toastList = '';
    if ((notificationList = document.getElementById('js-notifications__list')) && ((object.actionLink) || (object.actionCallback)))
    {
      var notificationFirstChild = notificationList.firstChild;
      var notificationElement = notificationList.insertBefore(window.pxh.toast.markup.createNotification(object, id), notificationFirstChild);
      window.pxh.toast.badge.increment();
      window.pxh.toast.action.dismissButton(notificationElement, 'notification', id);
      window.pxh.toast.action.expandButton(notificationElement, 'notification');
      if (object.actionLink)
      {
        window.pxh.toast.action.bindLink(toastElement, 'notification__link', id);
      }
      else if (object.actionCallback)
      {
        window.pxh.toast.action.bindCallback(toastElement, 'notification__link', id, object.actionCallback);
      }
    }
    if ((toastList = document.getElementById('js-toasts')) && (!suppressToast))
    {
      var toastFirstChild = toastList.firstChild;
      var toastElement = toastList.insertBefore(window.pxh.toast.markup.createToast(object, id), toastFirstChild);
      window.pxh.toast.action.dismissButton(toastElement, 'toast', id, true);
      window.pxh.toast.action.expandButton(toastElement, 'toast');
      if (object.actionLink) 
      {
        window.pxh.toast.action.bindLink(toastElement, 'toast__button', id);
      }
      else if (object.actionCallback)
      {
        window.pxh.toast.action.bindCallback(toastElement, 'toast__button', id, object.actionCallback);
      }
      if (!object.isPersistent)
      {
        setTimeout(function() {
          if (!toastElement.classList.contains('pxh-toast--expanded'))
          {
            // after 2000ms animate the toast out
            window.pxh.toast.autoHide(id);
            // 1000ms after the animation, remove the notification from the DOM
            setTimeout(function() {
              window.pxh.toast.autoRemove(id);
            }, 1000);
          }
        }, 5000);
      }
    }
    return id;
  },
  /** @namespace window.pxh.toast.action */
  action : {
    /** 
     * Binds an event to an element that will dismiss a toast/notification (and its correponding toast/notification, if applicable) when clicked
     * 
     * @param {HTMLElement} element The element of the toast/notification to be dismissed
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification combination associated with the target dismiss button
     */
    dismissButton : function(element, slug, id, preserveNotification) {
      var button = document.getElementById('js-' + slug + '__dismiss-button--' + id);
      if (button)
      {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          window.pxh.toast.hide(id, preserveNotification);
          setTimeout(function() {
            window.pxh.toast.remove(id, preserveNotification);
          }, 1000);
        })
      }
    },
    /** 
     * Binds an event to an element that will expand its corresponding toast/notification when clicked
     * 
     * @param {HTMLElement} element The element of the toast/notification to be dismissed
     * @param {String} slug The text slug to be used when generating class names and targets
     */
    expandButton : function(element, slug) {
      var button = element.querySelector('.js-' + slug + '__more-button');
      if (button)
      {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          window.pxh.toast.expand(element, slug);
        })
      }
    },
    /** 
     * Removes all toasts and notifications from application
     */
    removeAllButton : function() {
      window.pxh.toast.hideAll();
      setTimeout(function() {
        window.pxh.toast.removeAll();
      }, 1000);
    },

    /** 
     * Binds an callback to an element that will fire when clicked, and automatically hide and remove the corresponding toast/notification from the application
     * 
     * @param {HTMLElement} element The element of the toast/notification to be dismissed
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification combination associated with the callback action
     * @param {Function} callback The callback to fire
     */
    bindCallback : function(element, slug, id, callback) {
      var button = document.getElementById('js-' + slug + '--' + id);
      if (button)
      {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          window.pxh.toast.action.fireCallback(callback);
          window.pxh.toast.hide(id);
          setTimeout(function() {
            window.pxh.toast.remove(id);
          }, 1000);
        })
      }
    },

    /** 
     * Binds a hyperlink to an element that will fire when clicked, and automatically hide and remove the corresponding toast/notification from the application
     * 
     * @param {HTMLElement} element The element of the toast/notification to be dismissed
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification combination associated with the link action
     * @param {Function} callback The callback to fire
     */
    bindLink : function(element, slug, id) {
      var button = document.getElementById('js-' + slug + '--' + id);
      if (button)
      {
        button.addEventListener('click', function(event) {
          window.pxh.toast.hide(id);
          setTimeout(function() {
            window.pxh.toast.remove(id);
          }, 1000);
        })
      }
    },
    /** 
     * Fires a callback
     * 
     * @param {Function} callback The callback to fire
     */
    fireCallback : function(callback) {
      callback();
    }
  },

  /** 
   * Hides a toast and its corresponding notification (if applicable) from the user
   * 
   * @param {String} id The unique ID of the toast/notification combination to hide from the user
   * @param {Boolean} [preserveNotification=false] When dismissing a toast, whether to retain its corresponding notification in the notification list
   */
  hide : function(id, preserveNotification) {
    var toastList = '';
    var toastItem = '';
    var notificationList = '';
    var notification = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastItem = document.getElementById('js-toast--' + id)))
    {
      toastItem.classList.add('pxh-toast--animate-out');
      toastItem.classList.remove('pxh-toast--animate-in');
    }
    if ((notificationList = document.getElementById('js-notifications__list')) && (notification = document.getElementById('js-notification--' + id)) && (!preserveNotification))
    {
      notification.classList.add('pxh-notification--animate-out');
      notification.classList.remove('pxh-notification--animate-in');
    }
  },

  /** 
   * Hides all notifications from the user
   * 
   */
  hideAll : function() {
    var notificationList = '';
    var notifications = [];
    if ((notificationList = document.getElementById('js-notifications__list')) && (notifications = document.getElementsByClassName('pxh-notification')))
    {
      for (var i = notifications.length - 1; i >= 0; i--) {
        var id = notifications[i].id.replace('js-notification--', '');
        window.pxh.toast.hide(id);
      }
    }
  },

  /** 
   * Hides a toast
   * 
   * @param {String} id The unique ID of the toast to hide
   */
  autoHide : function(id) {
    var toastList = '';
    var toastItem = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastItem = document.getElementById('js-toast--' + id))) {
      toastItem.classList.add('pxh-toast--animate-out');
      toastItem.classList.remove('pxh-toast--animate-in');
    }
  },

  /** 
   * Removes a toast and its corresponding notification (if applicable) from the application
   * 
   * @param {String} id The unique ID of the toast/notification combination to remove
   */
  remove : function(id, preserveNotification) {
    var toastList = '';
    var toastElement = '';
    var notificationList = '';
    var notification = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastElement = document.getElementById('js-toast--' + id)))
    {
      toastElement.remove();
    }
    if ((notificationList = document.getElementById('js-notifications__list')) && (notification = document.getElementById('js-notification--' + id)) && (!preserveNotification))
    {
      notification.remove();
      window.pxh.toast.badge.decrement();
    }
  },

  /**
   * Removes a toast from the application
   * 
   * @param {String} id The unique ID of the toast to remove
   */
  autoRemove : function(id) {
    var toastList = '';
    var toastElement = '';
    if ((toastList = document.getElementById('js-toasts')) && (toastElement = document.getElementById('js-toast--' + id)))
    {
      toastElement.remove();
    }
  },

  /**
   * Removes all notifications from the application
   * 
   */
  removeAll : function() {
    var notificationList = '';
    var notifications = [];
    if ((notificationList = document.getElementById('js-notifications__list')) && (notifications = document.getElementsByClassName('pxh-notification')))
    {
      for (var i = notifications.length - 1; i >= 0; i--)
      {
        var id = notifications[i].id.replace('js-notification--', '');
        window.pxh.toast.remove(id);
      }
    }
  },

  /**
   * Expands the targeted toast/notification so all its text is visible to the user, or collapses it if it is already expanded
   * 
   * @param {HTMLElement} element The element to expand
   * @param {String} slug The text slug to be used when generating class names and targets
   */
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
  /** @namespace window.pxh.toast.markup */
  markup : {
    /**
     * Generates the HTML markup for displaying a toast/notification's icon
     * 
     * @param {Object} object The JavaScript object of the toast/notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     */
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

    /**
     * Generates the HTML markup for displaying a toast's text
     * 
     * @param {Object} object The JavaScript object of the toast that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     */
    toastText : function(object, slug)
    {
      var text = object.text ? window.pxh.stripHTML(object.text) : 'You received a new notification.';
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__text">\n');
      markup.push('  ' + text + '\n');
      markup.push(window.pxh.toast.markup.more(object, slug));
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the HTML markup for displaying a notification's text
     * 
     * @param {Object} object The JavaScript object of the notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the notification being created
     */
    notificationText : function(object, slug, id)
    {
      var text = object.text ? window.pxh.stripHTML(object.text) : 'You received a new notification.';
      var markup = [];
      markup.push('<div class="pxh-' + slug + '__text">\n');
      if (object.actionLink) {
        markup.push('  <a class="pxh-' + slug + '__link" href="' + object.actionLink + '" id="js-' + slug + '__link--' + id + '">\n');
      } else if (object.actionCallback)
      {
        markup.push('  <a class="pxh-' + slug + '__link" href="#" id="js-' + slug + '__link--' + id + '">\n');
      }
      markup.push('  ' + text + '\n');
      if ((object.actionLink) || (object.actionCallback))
      {
        markup.push('  </a>\n');
      }
      markup.push(window.pxh.toast.markup.more(object, slug));
      markup.push('</div>\n');
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the HTML markup for displaying a toast/notification's "show more" button
     * 
     * @param {Object} object The JavaScript object of the toast/notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     */
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

    /**
     * Generates the HTML markup for displaying a notification's formatted timestamp. This method displays the contents of the `object.formattedTimestamp` string for the toast object passed to it, with a fallback to `object.timestamp` if `formattedTimestamp` is not present. Any formatting for how `formattedTimestamp` should be displayed must be performed in advance.
     * 
     * @param {Object} object The JavaScript object of the notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     */
    timestamp : function(object, slug) {
      var formattedTimestamp = object.formattedTimestamp ? object.formattedTimestamp : false;
      var timestamp = object.timestamp ? object.timestamp : false;
      var timestampTitle = '';
      if (timestamp)
      {
        timestampTitle = ' title="' + timestamp + '"';
      }
      var markup = [];
      if (formattedTimestamp)
      {
        markup.push('<div class="pxh-' + slug + '__timestamp"' + timestampTitle + '>\n');
        markup.push('  ' + formattedTimestamp + '\n');
        markup.push('</div>\n');
      }
      else if (timestamp)
      {
        markup.push('<div class="pxh-' + slug + '__timestamp">\n');
        markup.push('  ' + timestamp + '\n');
        markup.push('</div>\n');
      }
      markup = markup.join('');
      return markup;
    },

    /**
     * Generates the HTML markup for displaying a toast/notification's "dismiss" button
     * 
     * @param {Object} object The JavaScript object of the toast/notification that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification being created, and that will be dismissed
     */
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

    /**
     * Generates the HTML markup for displaying a toast/'s action button, which can be either a hyperlink (relative or absolute) or a callback
     * 
     * @param {Object} object The JavaScript object of the toast that is being created
     * @param {String} slug The text slug to be used when generating class names and targets
     * @param {String} id The unique ID of the toast/notification being created
     */
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

    /**
     * Generates the complete HTML markup for creating a new toast
     * 
     * @param {Object} object The JavaScript object of the toast that should be created
     * @param {String} id The unique ID of the toast being created
     * @returns {HTMLElement} element A toast element that can be inserted into the DOM
     */
    createToast : function(object, id) {
      var slug = 'toast';
      var element = document.createElement('div');
      element.className = 'pxh-' + slug + ' pxh-' + slug + '--animate-in';
      element.id = 'js-' + slug + '--' + id;
      var markup = [];
      markup.push(window.pxh.toast.markup.icon(object, slug));
      markup.push(window.pxh.toast.markup.toastText(object, slug));
      markup.push(window.pxh.toast.markup.button(object, slug, id));
      markup.push(window.pxh.toast.markup.dismiss(object, slug, id));
      markup = markup.join('');
      element.innerHTML = markup;
      return element;
    },

    /**
     * Generates the complete HTML markup for creating a new notification
     * 
     * @param {Object} object The JavaScript object of the notification that should be created
     * @param {String} id The unique ID of the toast/notification being created, and that will be dismissed
     * @returns {HTMLElement} element A notification element that can be inserted into the DOM
     */
    createNotification : function(object, id) {
      var slug = 'notification';
      var element = document.createElement('div');
      element.className = 'pxh-' + slug;
      element.id = 'js-' + slug + '--' + id;
      var markup = [];
      markup.push(window.pxh.toast.markup.icon(object, slug));
      markup.push(window.pxh.toast.markup.notificationText(object, slug, id));
      markup.push(window.pxh.toast.markup.timestamp(object, slug));
      markup.push(window.pxh.toast.markup.dismiss(object, slug, id));
      markup = markup.join('');
      element.innerHTML = markup;
      return element;
    }
  },
  /**
   * Returns an array of all notifications currently displayed in the notification list
   * 
   * @returns {Array|Boolean} notifications An array of notification IDs, or false if no notifications are currently displayed in the notification list
   */
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

document.addEventListener('DOMContentLoaded', function(event) {

  if (document.getElementById('js-notifications__link--clear'))
  {
    document.getElementById('js-notifications__link--clear').addEventListener('click', function(event) {
      event.preventDefault();
      window.pxh.toast.action.removeAllButton();
    })
  }

  window.pxh.toggleMenu(window.pxh.LOGIN_NOTIFICATIONS, window.pxh.NOTIFICATIONS, window.pxh.NOTIFICATIONS_VISIBLE);

});
