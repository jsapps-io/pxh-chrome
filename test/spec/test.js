'use strict';

// var foo = 'bar';
// var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
var pxhSubObject = pxhFindObjectByLabel(pxhStatesObject, 'drawerOpen');

describe('Give it some context', () => {
  describe('maybe a bit more context here', function () {
    it('we should be able to return an object by label from the state object', () => {
      assert.isObject(pxhSubObject, 'subObject is an object');
    });
    
    // it('foo should be a string', () => {
    //   assert.isString(foo, 'foo is a string');
    // });
    // it('foo should equal bar', () => {
    //   assert.strictEqual(foo, 'bar', 'foo equals bar');
    // });
    // it('foo should be 3 characters long', () => {
    //   assert.lengthOf(foo, 3, 'foo has length of 3');
    // });
    // it('beverages should have tea and tea should be three', () => {
    //   assert.property(beverages, 'tea');
    //   assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
    // });
  });
});
