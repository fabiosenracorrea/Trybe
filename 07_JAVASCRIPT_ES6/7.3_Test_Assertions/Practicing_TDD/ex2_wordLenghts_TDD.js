import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const assert = require('assert');

function wordLengths(arr) {
  return arr.map(word => word.length);
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
