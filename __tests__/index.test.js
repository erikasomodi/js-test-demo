const { getMax, getSum, calculate } = require('../api/index');

// unit testing

describe('getMax function testing', () => {
  test('Test with correct parameters', () => {
    const result = getMax([1, 2, 3]);
    expect(result).toBe(3);
  });
  test('Get one string parameter', () => {
    expect(getMax([1, 2, 3, 'str'])).toBe('Invalid input');
  });
});

describe('getSum function testing', () => {
  test('get normal paramaters', () => {
    expect(getSum(12, 32)).toBe(44);
  });
  test('get invalid parameter', () => {
    expect(getSum(12, null)).toBe('Invalid input');
  });
});

// Integration testing
describe('getMax and getSum integration test', () => {
  test('test all parameters correct', () => {
    const result = calculate(10, [1, 2, 10]);
    expect(result).toBe(20);
  });
});
