# Unit Testing Javascript array methods

I wrote these tests as part of the [Watch and Code](https://watchandcode.com) Javascript course.

## Testing library

For the forEach() and filter() methods I have used [tinytest.js](https://github.com/joewalnes/jstinytest), that from the map() tests has been renamed "simpletest.js" because of some minor edits suggested during the course by [Gordon Zhu](https://twitter.com/gordon_zhu):

1) Success tests should be green
2) Fix the total number of failures (in tinytest.js it's double the right number)
3) Once point 2 is fixed, failure tests should be red
4) Only show stack traces if you click the 'expand' arrow button
5) Output summary statistics to the DOM

and some of my own:

1) Wait for the DOM to be ready before executing javascript by putting javascript code before the closing body tag, instead of using setTimeout()
2) Setting the background with a call to a helper method

## The testing process

1. Write the name of the test (which is a property of the object
I pass to tests()). 

2. Make the test fail. 

3. Make it pass by writing the application code necessary to make it pass.

In general:

- Tests: go from simple to complex
- Try to write as little code as possible to make the test pass, 1 error
message at the time


