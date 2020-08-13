import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const assert = require('assert');

function addAllnumbers(arr) {
  return arr.reduce((start, next) => start + next);
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);