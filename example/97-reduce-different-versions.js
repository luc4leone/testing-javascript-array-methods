
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


/* Gordon's version */
function reduce (array, callback, initialValue) {
  var startingIndex = 0;
  var resultSoFar = initialValue;
  var length = array.length;
  var arrayIndexes = Object.keys(array);

  // No initialValue
  if (arguments.length < 3) {
    // array is empty, throw TypeError.
    if (arrayIndexes.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    // If array has one element, just return it.
    if (arrayIndexes === 1) {
      var onlyIndex = arrayIndexes[0];
      var onlyElement = array[onlyIndex];
      return onlyElement;
    }

    // We want to skip holes at the beginning of the array.
    while (startingIndex in array === false && startingIndex < length) {
      startingIndex++;
    }

    resultSoFar = array[startingIndex];
    startingIndex++;

  // Has initialValue.
  } else {
    if (arrayIndexes.length === 0) {
      return initialValue;
    }
  }

  for (var i = startingIndex; i < length; i++) {
    if (i in array) {
      resultSoFar = callback(resultSoFar, array[i], i, array);
    }
  }

  return resultSoFar;
}

