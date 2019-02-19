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

