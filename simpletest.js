/* 

Things done to the tinytest.js testing library to improve the usability.

1) Success tests should be green
2) Fix the total number of failures (now double the right number in tinytest.js)
3) Once 2 is fixed, failure tests should be red
4) Only show stack traces if you click the 'expand' arrow button
5) Output summary statistics to the DOM

 */

var SimpleTest = {
  runTests: function (tests) {
    var failures = 0;
    for (var testName in tests) {
      var testAction = tests[testName];
      try {
        testAction.apply(this);
        console.log('%c' + testName, 'color: green; font-weight: bold');
      } catch (e) {
        failures++;
        console.groupCollapsed('%c' + testName, 'color: red');
        console.error(e.stack);
        console.groupEnd();
      }
    }

    document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
    var totalNumberOfTests = Object.keys(tests).length;
    var successes = totalNumberOfTests - failures;
    var h3Els = document.getElementsByTagName('h3');
    h3Els[0].textContent = 'Successes: ' + successes + '; ' + 'Failures: ' + failures + '.';
  },

  fail: function (msg) {
    throw new Error('fail(): ' + msg);
  },

  assertStrictEquals: function (expected, actual) {
    if (expected !== actual) {
      throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
    }
  }
};

// Do I really want to create 3 global variables?
var fail             = SimpleTest.fail,
  // If I create an alias for assertStrictEquals(), maybe I don't need a "shortcut", I have it already!
  assertStrictEquals = SimpleTest.assertStrictEquals,
  // alias for assertStrictEquals
  eq                 = SimpleTest.assertStrictEquals; 

