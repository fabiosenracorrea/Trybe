import { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj } from './functions_part1.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const assert = require('assert');

// 1 - sum tests

assert.strictEqual(sum(4, 5), 9, "Does not sum 4 & 5 correctly");
assert.strictEqual(sum(0, 0), 0, "Does not sum 0 & 0 correctly");
assert.throws(() => {
  sum(4, '5')
});

assert.throws(() => {
  sum(4, '5')
}, /^Error: parameters must be numbers$/, "Error msg not properly setup");

// 2- myRemove tests

assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], "Should be able to remove the item if it exists");
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], "Should be able to remove the item if it exists");

const myArr = [1, 2, 3, 4];
myRemove(myArr, 3);

assert.deepEqual(myArr, [1, 2, 3, 4], "Should not alter the original array");

assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], "Should not alter the array if item doesnt exist");

// 3 - myRemoveWithoutCopy tests

assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], "Should be able to remove the item if it exists");
assert.notDeepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], "Should be able to remove the item if it exists");

const myNums = [1, 2, 3, 4];
myRemoveWithoutCopy(myNums, 3);

assert.deepEqual(myNums, [1, 2, 4], "Should alter the original array");

assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], "Should not alter the array if item doesnt exist");


// 4 - myFizzBuzz tests

assert.strictEqual(myFizzBuzz(15), "fizzbuzz", "Should return 'fizzbuzz' when num is divided by 3 and 5");
assert.strictEqual(myFizzBuzz(9), "fizz", "Should return 'fizz' when num is divided by 3 only");
assert.strictEqual(myFizzBuzz(5), "buzz", "Should return 'buzz' when num is divided by 5 only");
assert.strictEqual(myFizzBuzz(98), 98, "Should return the same num when num is not divided by 5 or 3");
assert.strictEqual(myFizzBuzz('98'), false, "Should return false if argument passed in is NaN");

// 5 - obj comparisson

assert.deepEqual(obj.obj1, obj.obj2, "obj1 is not equal to obj2"); // passes, as expected
// assert.deepEqual(obj.obj1, obj.obj3, "obj1 is not equal to obj3"); // returns an error as expected
// assert.deepEqual(obj.obj2, obj.obj3, "obj2 is not equal to obj3"); // doesnt run because of the above

