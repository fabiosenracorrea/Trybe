import { createRequire } from 'module';
const require = createRequire(import.meta.url);

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  if (payable > paid) {
    throw new Error("paid value is not enough");
  }

  coins.forEach(coin => {
    if (remaining >= coin) {
      const amountOfThisCoin = Math.floor(remaining / coin);
      for (let i = 0; i < amountOfThisCoin; i += 1) {
        change.push(coin);
      }
      remaining -= coin * amountOfThisCoin;
    }
  })

  return change;
}


const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

const result2 = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
const expected2 = [50, 20, 10, 5];
assert.deepEqual(result2, expected2);

const result3 = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
const expected3 = [100, 10, 2, 2];
assert.deepEqual(result3, expected3);

const result4 = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
const expected4 = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result4, expected4);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);