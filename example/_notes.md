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

