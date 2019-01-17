
/* My first version */
function reduce (arrayToReduce, callback, initialValue) {

  // If the array to reduce is an empty array
  if (Object.keys(arrayToReduce).length === 0) {
    if (initialValue) {
      return initialValue;
    } else {
      throw new TypeError('error message');
    }
  }

  // If the array to reduce has 1 element
  if (Object.keys(arrayToReduce).length === 1) {
    return arrayToReduce[0];
  }

  var startingIndex = 0;
  var accumulator = initialValue;

  // If there's no initialValue
  if (arguments.length < 3) {
    for (var i = startingIndex; i < arrayToReduce.length; i++) {
      if (arrayToReduce[i] !== undefined) {
        accumulator = arrayToReduce[i]; 
        startingIndex = i + 1;
        break;
      }
    }
  }

  for (var i = startingIndex; i < arrayToReduce.length; i++) {
    if (arrayToReduce[i] !== undefined) {
      accumulator = callback(accumulator, arrayToReduce[i], i, arrayToReduce);
    }
  }

  return accumulator;
}