// responsive.spec.js
/*
* Test view port change that triggers responsiveness design
* */

'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var assert = chai.assert;
var expect = chai.expect;

describe('Check responsive design', function() {

  var commonPage = require('../common/common.po.js');
  var mainComponents    = require('../smoke/mainComponents.po.js');
  var drawerComponents = require('../drawer/drawerComponents.po.js');

  var convertPxToNum = function(px){
    return parseInt(px, 10);
  };

  it('should start with desktop version of layout', function() {
    assert.eventually.isOk(mainComponents.getDrawer());
    assert.eventually.isOk(mainComponents.getDrawer().isDisplayed());
    var drawerWidth = mainComponents.getDrawer().getCssValue('width');
    drawerWidth = convertPxToNum(drawerWidth);
    assert.eventually.isAtLeast(Promise.resolve(drawerWidth), 200);
    var leftValue = mainComponents.getDrawer().getCssValue('left');
    leftValue = convertPxToNum(leftValue);
    assert.eventually.isAtMost(Promise.resolve(drawerWidth), 0);
  });

  it('should change to mobile layout', function() {
    browser.driver.manage().window().setSize(400, 800);
    browser.driver.sleep(1000);
    assert.eventually.isOk(mainComponents.getDrawer().isDisplayed());
    var leftValue = mainComponents.getDrawer().getCssValue('left');
    leftValue = convertPxToNum(leftValue);
    assert.eventually.isAtMost(Promise.resolve(leftValue), -200);
  });

  it('should change to tablet layout', function() {
    browser.driver.manage().window().setSize(800, 800);
    browser.driver.sleep(1000);
    assert.eventually.isOk(mainComponents.getDrawer().isDisplayed());
    var drawerWidth = mainComponents.getDrawer().getCssValue('width');
    drawerWidth = convertPxToNum(drawerWidth);
    assert.eventually.isAtMost(Promise.resolve(drawerWidth), 100);
    var leftValue = mainComponents.getDrawer().getCssValue('left');
    leftValue = convertPxToNum(leftValue);
    assert.eventually.isAtMost(Promise.resolve(drawerWidth), 0);
  });
});
