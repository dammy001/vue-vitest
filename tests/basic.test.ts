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

const invoice = {
 isActive: true,
 customer: {
  first_name: 'John',
  last_name: 'Doe',
  location: 'China',
 },
 total_amount: 5000,
 items: [
  {
   type: 'apples',
   quantity: 10,
  },
  {
   type: 'oranges',
   quantity: 5,
  },
 ],
};

test('John Doe Invoice', () => {
 // Example Referencing
 expect(invoice).toHaveProperty('isActive'); // assert that the key exists;
 expect(invoice).toHaveProperty('total_amount', 5000); //assert that the key exists and the value is equal;

 expect(invoice).not.toHaveProperty('account'); //assert that this key does not exist

 // Deep referencing using dot notation
 expect(invoice).toHaveProperty('customer.first_name');
 expect(invoice).toHaveProperty('customer.last_name', 'Doe');
 expect(invoice).not.toHaveProperty('customer.location', 'India');

 // // Deep referencing using an array containing the keyPath
 // expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
 // expect(houseForSale).toHaveProperty(
 //   ['kitchen', 'amenities'],
 //   ['oven', 'stove', 'washer'],
 // );
 // expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
 expect(invoice).toHaveProperty('items[0].type', 'apples');
 // expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
 // expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);

 // Referencing keys with dot in the key itself
 //  expect(houseForSale).toHaveProperty(['ceiling.height'], 'tall');
});

test('apple is a fruit', () => {
 expect('top fruits include apple, orange and grape').toMatch(/apple/);
 expect('applefruits').toMatch('fruit'); // toMatch also accepts string
});

//toMatchObject
describe('toMatchObject applied to arrays', () => {
 test('the number of elements must match exactly', () => {
  expect([{ foo: 'bar' }, { baz: 1 }]).toMatchObject([
   { foo: 'bar' },
   { baz: 1 },
  ]);
 });

 test('.toMatchObject is called for each elements, so extra object properties are okay', () => {
  expect([{ foo: 'bar' }, { baz: 1, extra: 'quux' }]).toMatchObject([
   { foo: 'bar' },
   { baz: 1 },
  ]);
 });
});

const johnInvoice = {
 isActive: true,
 customer: {
  first_name: 'John',
  last_name: 'Doe',
  location: 'China',
 },
 total_amount: 5000,
 items: [
  {
   type: 'apples',
   quantity: 10,
  },
  {
   type: 'oranges',
   quantity: 5,
  },
 ],
};

const johnDetails = {
 customer: {
  first_name: 'John',
  last_name: 'Doe',
  location: 'China',
 },
};

test('invoice has john personal information', () => {
 expect(johnInvoice).toMatchObject(johnDetails);
});

test('the number of elements must match exactly', () => {
 expect([{ foo: 'bar' }, { baz: 1 }]).toMatchObject([
  { foo: 'bar' },
  { baz: 1 },
 ]);
});

class DiabetesError extends Error {
 public constructor(message: string) {
  super(message);
 }
}

function getFruitStock(type) {
 if (type == 'pineapples') {
  throw new DiabetesError('Pineapples is not good for people with diabetes');
 }
 // Do some other stuff
}

test('throws on pineapples', () => {
 // Test that the error message says "diabetes" somewhere: these are equivalent
 expect(() => getFruitStock('pineapples')).toThrowError(/diabetes/);
 expect(() => getFruitStock('pineapples')).toThrowError('diabetes');

 // Test the exact error message
 expect(() => getFruitStock('pineapples')).toThrowError(
  /^Pineapples is not good for people with diabetes$/,
 );

 //  Test that we get a DiabetesError
 //  expect(() => getFruitStock('pineapples')).toThrowError(new DiabetesError('Pineapples is not good for people with diabetes')); type error
});
