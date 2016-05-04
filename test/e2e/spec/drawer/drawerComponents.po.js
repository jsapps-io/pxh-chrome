/*
 * drawerComponents
 * This page object tests the drawer of pxh-chrome
 *
 * */

'use strict';

var drawerComponents = function() {
  var commonPage = require('../common/common.po.js');
  return {
    getDrawerHeaderLink: function (){
      return driver.findElement(by.css("a.pxh-drawer-header__link"));
    },
    getDrawerToggleLink: function (){
      return driver.findElement(by.css("a.phx-drawer-toggle__link"));
    },
    clickDrawerToggleLink: function (){
      return this.getDrawerToggleLink().click();
    },
    getLoginProfileLink: function () {
      return driver.findElement(by.css("a.pxh-login__profile-link"));
    },
    clickLoginProfileLink: function () {
      this.getLoginProfileLink().click();
    },
    getLoginProfileMenu: function () {
      var css = '.pxh-login-menu--profile';
      commonPage.waitForElement(css);
      return driver.findElement(by.css(css));
    },
    getLoginSettingsLink: function () {
      return driver.findElement(by.css("a.pxh-login__settings-link"));
    },
    clickLoginSettingsLink: function () {
      this.getLoginSettingsLink().click();
    },
    getLoginSettingsMenu: function () {
      var css = '.pxh-login-menu--settings';
      commonPage.waitForElement(css);
      return driver.findElement(by.css(css));
    }
  };
};
module.exports = new drawerComponents();
