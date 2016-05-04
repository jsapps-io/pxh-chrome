// drawer.spec.js
/*
 * Test functionality of navigation bar
 * */

'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var assert = chai.assert;

describe('Check drawer', function () {

  var commonPage = require('../common/common.po.js');
  var mainComponents    = require('../smoke/mainComponents.po.js');
  var drawerComponents = require('../drawer/drawerComponents.po.js');

  browser.driver.manage().window().setSize(1200, 1000);

  describe('Check navigation toggling', function () {

    // it('should have nav bar expanded as expected', function () {
    //   assert.eventually.strictEqual(mainComponents.getDrawer(), browser.driver.findElement(by.className("pxh-drawer--wide@lg")));
    // });

    // it('should contract nav bar when toggle button is clicked ', function () {
    //   drawerComponents.clickNavToggleButton();
    //   expect(commonPage.hasClass(drawerComponents.getNavBar(), 'pxh-drawer--narrow@md')).toBe(true);
    // });

    // it('should expanded nav bar when toggle button is clicked again', function () {
    //   drawerComponents.clickNavToggleButton();
    //   expect(commonPage.hasClass(drawerComponents.getNavBar(), 'pxh-drawer--narrow@md')).toBe(false);
    //   expect(commonPage.hasClass(drawerComponents.getNavBar(), 'pxh-drawer--wide@lg')).toBe(true);
    // });

  });

  describe('Check user menu and settings', function () {

    // beforeEach(function(){
    //   drawerComponents.waitForDrawer();
    // });

    // it('should have user button, user menu and setting elements', function () {
    //   expect(drawerComponents.getUserMenu().isPresent()).toBe(true);
    //   expect(drawerComponents.getGearMenu().isPresent()).toBe(true);
    // });

    // it('should have user button, user menu elements', function () {
    //   drawerComponents.clickUserMenu();
    //   expect(drawerComponents.getUserPopupMenu().getAttribute('class')).toContain('pxh-login-menu--visible');
    //   expect(drawerComponents.getUserLogoutLink().isDisplayed()).toBe(true);
    //   expect(drawerComponents.getGearMenu().isPresent()).toBe(true);
    //   drawerComponents.clickUserMenu();
    // });

    // it('should have user setting elements', function () {
    //   drawerComponents.clickGearMenu();
    //   expect(drawerComponents.getSettingsLink().isDisplayed()).toBe(true);
    //   expect(drawerComponents.getUserMenu().isPresent()).toBe(true);
    //   drawerComponents.clickGearMenu();
    // });

  });

});
