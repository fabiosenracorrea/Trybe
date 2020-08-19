
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten() {
  return (
    arrays
      .reduce((start, next) => {
        next.forEach(elm => start.push(elm));
        return start;
      }, [])
  )
}

// or

function flatten2() {
  return (
    arrays.reduce((start, next) => start.concat(next), [])
  )
}
// or

function flatten3() {
  return (
    arrays.reduce((start, next) => [...start, ...next], [])
  )
}

assert.deepEqual(flatten3(), ["1", "2", "3", true, 4, 5, 6]);