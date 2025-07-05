const { calculate } = require('./Calculator');

//adding of negative values
test('add with negatives', () => {
  expect(calculate('add:-2,3')).toBe(1);
});

//substraction of negative values
test('sub with negatives', () => {
  expect(calculate('sub:-5,2')).toBe(-7);
});

//multiplication with negative values
test('mul with negatives', () => {
  expect(calculate('mul:-3,4')).toBe(-12);
});

//division with negative values
test('div with negatives', () => {
  expect(calculate('div:-12,3')).toBe(-4);
});

//divide by zero error
test('division by zero throws error', () => {
  expect(() => calculate('div:5,0')).toThrow('Division by zero');
});

//invalid input format error fort mat should be "operator:num1,num2"
test('invalid input format throws', () => {
  expect(() => calculate('badformat')).toThrow('Invalid input format');
});

//invalid input 
test('invalid number throws', () => {
  expect(() => calculate('add:2,a')).toThrow('Invalid number: a');
});

//unsupported operations
test('unsupported operation throws', () => {
  expect(() => calculate('mod:2,3')).toThrow('Unsupported operation: mod');
});

//empty or null returns 0
test('empty or null input returns 0', () => {
  expect(calculate('')).toBe(0);
  expect(calculate(null)).toBe(0);
});
