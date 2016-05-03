'use strict';

var pxhSubObject = pxhFindObjectByLabel(pxhStatesObject, 'drawerOpen');

var addClass = document.createElement('div');
addClass.classList.add('qa-target-add');
document.body.appendChild(addClass);

var removeClass = document.createElement('div');
removeClass.classList.add('qa-target-removed');
removeClass.classList.add('qa-remove');
document.body.appendChild(removeClass);

var toggleClassAdd = document.createElement('div');
toggleClassAdd.classList.add('qa-target-toggle');
toggleClassAdd.classList.add('qa-toggle-remove');
document.body.appendChild(toggleClassAdd);

pxhChangeClasses('qa-target-add', 'add', 'qa-added');
pxhChangeClasses('qa-target-removed', 'remove', 'qa-remove');
pxhChangeClasses('qa-target-toggle', 'toggle', 'qa-toggle-add');
pxhChangeClasses('qa-target-toggle', 'toggle', 'qa-toggle-remove');

// multiple classes ... multiple matching elements




describe('Tests for pxh-chrome.js', () => {
  describe('Tests for pxhFindObjectByLabel', () => {
    it('pxhFindObjectByLabel returns an object by label', () => {
      assert.isObject(pxhSubObject, 'subObject is an object');
    });
  });
  describe('Tests for pxhChangeClasses', () => {
    it('pxhChangeClasses added a class to a target class element', () => {
      assert.deepEqual(document.getElementsByClassName('qa-target-add'), document.getElementsByClassName('qa-added'));
    });
    it('pxhChangeClasses removes a class from a target class element', () => {
      assert.notDeepEqual(document.getElementsByClassName('qa-target-removed'), document.getElementsByClassName('qa-remove'));
    });
    it('pxhChangeClasses toggles (adds) a class on a target class element', () => {
      assert.deepEqual(document.getElementsByClassName('qa-target-toggle'), document.getElementsByClassName('qa-toggle-add'));
    });
    it('pxhChangeClasses toggles (removes) a class on a target class element', () => {
      assert.notDeepEqual(document.getElementsByClassName('qa-target-toggle'), document.getElementsByClassName('qa-toggle-remove'));
    });
  });
});
