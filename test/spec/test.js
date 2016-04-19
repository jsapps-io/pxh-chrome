(function () {
  'use strict';

  var foo = 'bar';
  var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

  describe('Give it some context', () => {
    describe('maybe a bit more context here', function () {
      it('foo should be a string', () => {
        foo.should.be.a('string');
      });
      it('foo should equal bar', () => {
        foo.should.equal('bar');
      });
      it('foo should be 3 characters long', () => {
        foo.should.have.length(3);
      });
      it('beverages should have tea and tea should be three', () => {
        beverages.should.have.property('tea').with.length(3);
      });
    });
  });
})();
