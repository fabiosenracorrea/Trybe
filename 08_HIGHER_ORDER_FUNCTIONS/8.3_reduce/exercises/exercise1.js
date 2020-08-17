
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function singleFlat(start, next) {
  start.push(next)
}

function flatten() {
  return (
    arrays
      .reduce((start, next) => {
        next.forEach(elm => start.push(elm));
        return start;
      }, [])
  )
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);