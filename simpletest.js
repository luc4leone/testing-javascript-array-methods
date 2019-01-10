/* 

Things done to the tinytest.js testing framework (here) to improve the usability.

1) Success tests should be green
2) Fix the total number of failures (now double the right number in tinytest.js)
3) Once 2 is fixed, failure tests should be red
4) Only show stack traces if you click the 'expand' arrow button
5) Output summary statistics to the DOM

 */

var SimpleTest = {

  run: function(tests) {
      var failures = 0;
      for (var testName in tests) {
          var testAction = tests[testName];
          try {
              testAction.apply(this);
              console.log('%c' + testName, 'color: green');
          } catch (e) {
              failures++;
              console.groupCollapsed('%c' + testName, 'color: red');
              console.error(e.stack);
              console.groupEnd();
          }
      }
      setTimeout(function() { // Give document a chance to complete
          if (window.document && document.body) {
              document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
          }
      }, 0);
  },

  fail: function(msg) {
      throw new Error('fail(): ' + msg);
  },

  assert: function(value, msg) {
      if (!value) {
          throw new Error('assert(): ' + msg);
      }
  },

  assertEquals: function(expected, actual) {
      if (expected != actual) {
          throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
      }
  },

  assertStrictEquals: function(expected, actual) {
      if (expected !== actual) {
          throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
      }
  },

};

var fail               = SimpleTest.fail.bind(SimpleTest),
    assert             = SimpleTest.assert.bind(SimpleTest),
    assertEquals       = SimpleTest.assertEquals.bind(SimpleTest),
    eq                 = SimpleTest.assertEquals.bind(SimpleTest), // alias for assertEquals
    assertStrictEquals = SimpleTest.assertStrictEquals.bind(SimpleTest),
    tests              = SimpleTest.run.bind(SimpleTest);
