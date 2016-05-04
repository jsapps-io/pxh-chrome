// dimension.spec.js
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

    // var commonPage = require('../common/common.po.js');
    // var drawerComponents    = require('../drawer/drawerComponents.po.js');

    // var convertPxToNum = function(px){
    //     return parseInt(px, 10);
    // };

    // it('should start with wide version of layout', function() {
    //     browser.driver.sleep(2000);
    //     expect(drawerComponents.getNavBar().isPresent()).toBe(true);
    //     expect(drawerComponents.getNavBar().isDisplayed()).toBe(true);
    //     browser.manage().window().setSize(1200, 1000);
    //     browser.driver.sleep(2000);

    //     drawerComponents.getNavBar().getSize().then(function(dimension){
    //        expect(dimension.width).toBeGreaterThan(250);
    //     });
    // });

    // it('should respond to view port change to narrow size', function() {

    //     browser.manage().window().setSize(400, 1000);
    //     browser.driver.sleep(2000);
    //     expect(drawerComponents.getNavBar().isPresent()).toBe(true);
    //     //Nav bar is hidden (but size is does not change)
    //     drawerComponents.getNavBar().getCssValue('left').then(function(leftValue){
    //         leftValue = convertPxToNum(leftValue);
    //         expect(leftValue ).toBeLessThan(-200); //off view port to the left
    //     });

    // });


    // it('should respond to view port change to wide size', function() {

    //     browser.manage().window().setSize(1200, 1000);

    //     browser.driver.sleep(2000);
    //     expect(drawerComponents.getNavBar().isPresent()).toBe(true);
    //     expect(drawerComponents.getNavBar().isDisplayed()).toBe(true);
    //     drawerComponents.getNavBar().getSize().then(function(dimension){
    //         expect(dimension.width).toBeGreaterThan(250);
    //     });

    // });
});