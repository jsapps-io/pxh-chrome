'use strict';

var pxhSubObject = pxhFindObjectByLabel(pxhStatesObject, 'drawerOpen');

// create element to test adding a single class
var addClass = document.createElement('div');
addClass.classList.add('qa-target-add');
document.body.appendChild(addClass);

// create element to test adding multiple classes
var addMultipleClasses = document.createElement('div');
addMultipleClasses.classList.add('qa-target-add-multiple');
document.body.appendChild(addMultipleClasses);

// create element to test removing a single class
var removeClass = document.createElement('div');
removeClass.classList.add('qa-target-removed');
removeClass.classList.add('qa-remove');
document.body.appendChild(removeClass);

// create element to test removing multiple classes
var removeMultipleClasses = document.createElement('div');
removeMultipleClasses.classList.add('qa-target-removed-multiple');
removeMultipleClasses.classList.add('qa-remove-multiple-one');
removeMultipleClasses.classList.add('qa-remove-multiple-two');
document.body.appendChild(removeMultipleClasses);

// create element to test toggling multiple classes on multiple targets
var toggleMultipleClassesOnMultipleTargetsOne = document.createElement('div');
toggleMultipleClassesOnMultipleTargetsOne.classList.add('qa-target-toggle');
toggleMultipleClassesOnMultipleTargetsOne.classList.add('qa-toggle-remove');
document.body.appendChild(toggleMultipleClassesOnMultipleTargetsOne);

// create element to test toggling multiple classes on multiple targets
var toggleMultipleClassesOnMultipleTargetsTwo = document.createElement('div');
toggleMultipleClassesOnMultipleTargetsTwo.classList.add('qa-target-toggle-multiple');
toggleMultipleClassesOnMultipleTargetsTwo.classList.add('qa-toggle-remove-multiple-one');
toggleMultipleClassesOnMultipleTargetsTwo.classList.add('qa-toggle-remove-multiple-two');
document.body.appendChild(toggleMultipleClassesOnMultipleTargetsTwo);

// fire the changes for pxhChangeClasses
pxhChangeClasses('qa-target-add', 'add', 'qa-added');
pxhChangeClasses('qa-target-add-multiple', 'add', 'qa-added-multiple-one qa-added-multiple-two');
pxhChangeClasses('qa-target-removed', 'remove', 'qa-remove');
pxhChangeClasses('qa-target-removed-multiple', 'remove', 'qa-remove-multiple-one qa-remove-multiple-two');
pxhChangeClasses('qa-target-toggle-multiple', 'toggle', 'qa-toggle-add-multiple-one qa-toggle-add-multiple-two qa-toggle-remove-multiple-one qa-toggle-remove-multiple-two');


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
    it('pxhChangeClasses added multiple classes to a target class element', () => {
      assert.deepEqual(document.getElementsByClassName('qa-target-add-multiple'), document.getElementsByClassName('qa-added-multiple-one'));
      assert.deepEqual(document.getElementsByClassName('qa-target-add-multiple'), document.getElementsByClassName('qa-added-multiple-two'));
    });
    it('pxhChangeClasses removes a class from a target class element', () => {
      assert.notDeepEqual(document.getElementsByClassName('qa-target-removed'), document.getElementsByClassName('qa-remove'));
    });
    it('pxhChangeClasses removes multiple classes from a target class element', () => {
      assert.notDeepEqual(document.getElementsByClassName('qa-target-removed-multiple'), document.getElementsByClassName('qa-remove-multiple-one'));
      assert.notDeepEqual(document.getElementsByClassName('qa-target-removed-multiple'), document.getElementsByClassName('qa-remove-multiple-two'));
    });
    it('pxhChangeClasses toggles (adds) a class on a target class element', () => {
      assert.deepEqual(document.getElementsByClassName('qa-target-toggle-multiple'), document.getElementsByClassName('qa-toggle-add-multiple-one'));
      assert.deepEqual(document.getElementsByClassName('qa-target-toggle-multiple'), document.getElementsByClassName('qa-toggle-add-multiple-two'));
    });
    it('pxhChangeClasses toggles (removes) a class on a target class element', () => {
      assert.notDeepEqual(document.getElementsByClassName('qa-target-toggle-multiple'), document.getElementsByClassName('qa-toggle-remove-multiple-one'));
      assert.notDeepEqual(document.getElementsByClassName('qa-target-toggle-multiple'), document.getElementsByClassName('qa-toggle-remove-multiple-two'));
    });
  });
    });
  });
});
