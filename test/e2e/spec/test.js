'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var assert = chai.assert;

describe('pxh-chrome end-to-end test', function() {
  it('should have a title', function() {
    browser.driver.get('http://localhost:4000');
    assert.eventually.strictEqual(browser.driver.getTitle(), 'pxh-chrome 0.8.3');
  });
});
