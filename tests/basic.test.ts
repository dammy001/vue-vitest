import { assert, expect, it, suite, test } from 'vitest';

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
