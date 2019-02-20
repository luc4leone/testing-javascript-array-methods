# Notes

## Arrange, act, assert

When you are writing your test pretty much always you are going to follow a pattern, called "arrange, act, assert".

```javascript
describe('Subtraction', function () {
  it('subtract positive numbers', function () {
    // arrange our expected values and any other setup
    var expectedResult = 7;
    
    // act by calling production code
    var actualResult = addition.subtract(10 ,3);

    // assert by comparing the values
    assert.equal(actualResult, expectedResult);
  };
})
```

## Check if an array is empty

```javascript
Object.keys(array).length === 0
```

This is a better condition than `array.length` to check if an array is empty because it will catch also sparse arrays, like `[,]` or `[,,]`.

## copyWithin() sketch the solution

```javascript
/* 

[1, 2, 3, 4, 5] (5)
    [1, 2, 3] (3)
> da beginning a beginning + lunghezza di part se questo punto è < di lunghezza di array quindi

[0, 1, 2, 3, 4] indexes 
[1, 2, 3, 4, 5] (5)
    [1, 2, 3] (3)
beginning = 1
part.length = 3
beginning + part.length = 1 + 3 = 4
4 < 5 ? OK then 4

[0, 1, 2, 3, 4] indexes 
[1, 2, 3, 4, 5] (5)
          [1, 2, 3] (3)
beginning = 3
part.length = 3
beginning + part.length = 3 + 3 = 6
6 < 5 ? NO then 5


*/
```

## Sorting algorithms

```javascript
function findSmallest (arr) {
  var smallest = arr[0];
  var smallestIndex = 0;
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort (arr) {
  var newArr = [];
  var arrLength = arr.length;
  for (var i = 0; i < arrLength; i++) {
    var smallestIndex = findSmallest(arr);
    newArr[newArr.length] = arr.splice(smallestIndex,1)[0];
  }
  return newArr;
}
```

## is array-like?

```javascript

// if I pass in 'length' I will get back undefined or the length value
// why returning a function?
// why void 0 instead of a simple undefined?
// summary: check if key in object exist, if it exist returns value, otherwise undefined
var shallowProperty = function(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
};

// constant, it's a language constraint
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1; // 9007199254740991

// getLength is a function, because shallowProperty returns a function
var getLength = shallowProperty('length'); 

// 
var isArrayLike = function(collection) {
  var length = getLength(collection);
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};

```

## Alex copyWithin

```javascript
Array.prototype.myCopyWithin = function(target, optionalStart, optionalEnd) {
    var arr = this;
    var originalArr = []; // to be used as temp storage during execution.
    var startIndex = optionalStart || 0;
    var endIndex = optionalEnd || arr.length;
    
    // copy values of input array into a temp stoarge variable.
    for (var i = 0; i < arr.length; i++) {
      originalArr[i] = arr[i];
    }
    
    if (target < 0) {
      target = arr.length + target;
    }
    if (target > arr.length || target < 0) {
      return arr;
    }
    
    for (var i = startIndex; i < endIndex; i++) { 
      if (target < arr.length) {
        arr[target] = originalArr[i];
        target ++;
      }
    }
    return arr;
  }
```
