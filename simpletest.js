/* 

Things done to the tinytest.js testing library to improve the usability.

1) Success tests should be green
2) Fix the total number of failures (now double the right number in tinytest.js)
3) Once 2 is fixed, failure tests should be red
4) Only show stack traces if you click the 'expand' arrow button
5) Output summary statistics to the DOM

 */

var SimpleTestHelpers = {
  showStats: function (tests, failures) {
    var numberOfTests = Object.keys(tests).length;
    var successes = numberOfTests - failures;
    var statsText = 'Successes: ' + successes + '; ' + 'Failures: ' + failures + '.';
    var statsEl = document.getElementById('stats');
    statsEl.textContent = statsText;
  },
  showSemanticBackground: function (failures) {
    document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
  },
  failMessage: 'Making the test fail on purpose'
}

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
    SimpleTestHelpers.showSemanticBackground(failures);
    SimpleTestHelpers.showStats(tests, failures);
  },

  fail: function (msg) {
    if (msg) {
      throw new Error('fail() >>> ' + msg);
    }
    throw new Error('fail() >>> ' + SimpleTestHelpers.failMessage);
  },

  assertStrictEquals: function (expected, actual) {
    if (expected != actual) {
      //throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
      throw new Error('assertStrictEquals() >>> ' + JSON.stringify(expected) + ' (expected value) is not equal to ' + JSON.stringify(actual) + ' (actual value)');
    }
  }
};

// Do I really want to create 3 global variables?
var fail             = SimpleTest.fail,
  // If I create an alias for assertStrictEquals(), maybe I don't need a "shortcut", I have it already!
  assertStrictEquals = SimpleTest.assertStrictEquals,
  // alias for assertStrictEquals
  eq                 = SimpleTest.assertStrictEquals; 

