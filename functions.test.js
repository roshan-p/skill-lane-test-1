const functions = require('./functions')
// run yarn test or npm test
test('test functions.largest_power(90) to equal [81,2] ', () => {
    expect(functions.largest_power(90)).toEqual([81,2]);
  });
  test('test functions.largest_power(6) to equal [4,1] ', () => {
    expect(functions.largest_power(6)).toEqual([4,1]);
  });
  test('test functions.largest_power(65) to equal [64,3] ', () => {
    expect(functions.largest_power(65)).toEqual([64,3]);
  });
  test('test functions.largest_power(90) to equal [81,2] ', () => {
    expect(functions.largest_power(3)).toEqual([1,-1]);
  });
  test('test functions.largest_power(1) to equal [0,-1] ', () => {
    expect(functions.largest_power(1)).toEqual([0,-1]);
  });
  test('test functions.largest_power(81) to equal [64,3] ', () => {
    expect(functions.largest_power(81)).toEqual([64,3]);
  });
  test('test functions.largest_power(29) to equal [27,1] ', () => {
    expect(functions.largest_power(29)).toEqual([27,1]);
  });
  test('test functions.largest_power(4) to equal [1,-1] ', () => {
    expect(functions.largest_power(4)).toEqual([1,-1]);
  });


