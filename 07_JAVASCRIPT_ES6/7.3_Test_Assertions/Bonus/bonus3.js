import { createRequire } from 'module';
const require = createRequire(import.meta.url);


const assert = require('assert');

function removeMiddle(arr) {
  const middleIndex = (arr.length - 1) / 2
  return arr.splice(middleIndex, 1);
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);