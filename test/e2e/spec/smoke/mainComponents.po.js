/*
 * mainComponents
 * This page object tests the main components of pxh-chrome
 *
 * */
(function () {
  'use strict';
  var mainComponents = function() {
    return {
      getDrawer: function() {
        return browser.driver.findElement(by.className('pxh-drawer'));
      },
      getDrawerHeader: function() {
        return browser.driver.findElement(by.className('pxh-drawer-header'));
      },
      getDrawerToggle: function() {
        return browser.driver.findElement(by.className('pxh-drawer-toggle'));
      },
      getNavigation: function() {
        return browser.driver.findElement(by.className('pxh-navigation'));
      },
      getBadge: function() {
        return browser.driver.findElement(by.className('pxh-badge'));
      },
      getLogin: function() {
        return browser.driver.findElement(by.className('pxh-login'));
      },
      getOverlay: function() {
        return browser.driver.findElement(by.className('pxh-overlay'));
      },
      getWrapper: function() {
        return browser.driver.findElement(by.className('pxh-wrapper'));
      },
      getViewHeader: function() {
        return browser.driver.findElement(by.className('pxh-view-header'));
      },
      getViewHeaderDrawerToggle: function() {
        return browser.driver.findElement(by.className('pxh-view'));
      },
      getView: function() {
        return browser.driver.findElement(by.className('pxh-view'));
      }
    };
  };
  module.exports = new mainComponents();
}());
