'use strict';

var pxhSubObject = pxhFindObjectByLabel(pxhStatesObject, 'drawerOpen');
// create a state object for testing purposes
var testStatesObject = {
  'stateOne' : {
    'qa-item-one' : {
      'remove' : 'qa-item-one--state-two',
      'add' : 'qa-item-one--state-one',
    },
    'qa-item-two' : {
      'remove' : 'qa-item-two--state-two',
      'add' : 'qa-item-two--state-one',
    },
  },
  'stateTwo' : {
    'qa-item-one' : {
      'remove' : 'qa-item-one--state-one',
      'add' : 'qa-item-one--state-two',
    },
    'qa-item-two' : {
      'remove' : 'qa-item-two--state-one',
      'add' : 'qa-item-two--state-two',
    },
  }
}

// assign individual test states from the test states object to variables
var testStateOne = pxhFindObjectByLabel(testStatesObject, 'stateOne');
var testStateTwo = pxhFindObjectByLabel(testStatesObject, 'stateTwo');

// create item to manipulate by toggling state
var stateItemOne = document.createElement('div');
stateItemOne.classList.add('qa-item-one');
stateItemOne.classList.add('qa-item-one--state-one');
document.body.appendChild(stateItemOne);

// create item to manipulate by toggling state
var stateItemTwo = document.createElement('div');
stateItemOne.classList.add('qa-item-two');
stateItemOne.classList.add('qa-item-two--state-one');
document.body.appendChild(stateItemTwo);

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

// fire the changes for pxhLoadState
pxhLoadState(testStatesObject, 'stateTwo');

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
  describe('Tests for pxhLoadState', () => {
    it('pxhLoadState switches from stateOne to stateTwo', () => {
      assert.deepEqual(document.getElementsByClassName('qa-item-one'), document.getElementsByClassName('qa-item-one--state-two'));
      assert.deepEqual(document.getElementsByClassName('qa-item-two'), document.getElementsByClassName('qa-item-two--state-two'));
      assert.notDeepEqual(document.getElementsByClassName('qa-item-one'), document.getElementsByClassName('qa-item-one--state-one'));
      assert.notDeepEqual(document.getElementsByClassName('qa-item-two'), document.getElementsByClassName('qa-item-two--state-one'));
    });
  });
});
