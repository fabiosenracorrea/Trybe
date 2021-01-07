function countInversions(arr) {
  const toSortArray = [...arr];

  let swaps = 0;

  let lowestToSortIndex = 0;
  let lastIndex = toSortArray.length - 1;

  while(lowestToSortIndex !== lastIndex) {
    let currentLowest = toSortArray[lowestToSortIndex];
    let currentLowestIndex = lowestToSortIndex;

    for (let index = lowestToSortIndex; index < toSortArray.length; index += 1) {
      const currentNumber = toSortArray[index];

      if (currentNumber < currentLowest) {
        currentLowestIndex = index;
        currentLowest = currentNumber;
      }
    }

    if (currentLowestIndex !== lowestToSortIndex) {
      const requiredSwaps = currentLowestIndex - lowestToSortIndex;
      swaps += requiredSwaps;

      for (let localSwaps = currentLowestIndex; localSwaps >= lowestToSortIndex; localSwaps -= 1) {
        const placeholder = toSortArray[localSwaps];
        toSortArray[localSwaps] = toSortArray[localSwaps - 1];
        toSortArray[localSwaps - 1] = placeholder
      }
    }

    lowestToSortIndex += 1;
  }

  return swaps;
}

const arr = [1, 1, 1, 2, 2];

console.log(countInversions(arr));
