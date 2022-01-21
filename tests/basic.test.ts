import { assert, expect, it, describe, suite, test } from 'vitest';

test('Math.sqrt()', () => {
 assert.equal(Math.sqrt(2), Math.SQRT2);
 expect(Math.sqrt(144)).toStrictEqual(12);
});

const hi = suite('suite');

hi.test('expect truthy', () => {
 expect({}).toBeTruthy();
 expect(null).not.toBeTruthy();
 expect([]).toBeTruthy();
});

const person = {
 isActive: true,
 age: 32,
};

describe('person', () => {
 test('person is defined', () => {
  expect(person).toBeDefined();
 });

 test('is active', () => {
  expect(person.isActive).toBeTruthy();
 });

 test('age limit', () => {
  expect(person.age).toBeLessThanOrEqual(32);
 });
});

const numberToCurrency = (value) => {
 if (typeof value !== 'number') {
  throw new Error(`Value must be a number`);
 }

 return value
  .toFixed(2)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

describe('numberToCurrency', () => {
 describe('given an invalid number', () => {
  test('composed of non-numbers to throw error', () => {
   expect(() => numberToCurrency('abc')).toThrow();
  });
 });

 describe('given a valid number', () => {
  test('returns the correct string format', () => {
   expect(numberToCurrency(10000)).toBe('10,000.00');
  });
 });
});

// toContain
const getAllFruits = () => ['apple', 'orange', 'grape'];

test('the fruit list contains orange', () => {
 expect(getAllFruits()).toContain('orange');
});

// toHaveLength
test('toHaveLength', () => {
 expect([1, 2, 3]).toHaveLength(3);
 expect('abc').toHaveLength(3);
 expect('').not.toHaveLength(3);
});
