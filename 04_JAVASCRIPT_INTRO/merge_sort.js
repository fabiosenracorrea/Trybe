const unsortedArray = [10, 5, 8, 4, 9, 5, 7, 1];

function mergeSort(arr) {
  // create right-left sides

  if (arr.length === 1) {
    return arr;
  }

  const divideIndex = Math.floor(arr.length / 2);
  let leftSide = mergeSort(arr.slice(0, divideIndex));
  let rightSide = mergeSort(arr.slice(divideIndex, arr.length));
  let sorted = [];

  // order leftSide
  for (let i = 0; i < leftSide.length; i += 1) {
    if (leftSide[i + 1]) {
      if (leftSide[i] > leftSide[i + 1]) {
        let placeholder = leftSide[i + 1];
        leftSide[i + 1] = leftSide[i];
        leftSide[i] = placeholder;
      }
    }
  }

  // order rightSide
  for (let i = 0; i < rightSide.length; i += 1) {
    if (rightSide[i + 1]) {
      if (rightSide[i] > rightSide[i + 1]) {
        let placeholder = rightSide[i + 1];
        rightSide[i + 1] = rightSide[i];
        rightSide[i] = placeholder;
      }
    }
  }

  // merge
  while (leftSide[0] || rightSide[0]) {
    if (leftSide[0] && rightSide[0]) {
      switch (leftSide[0] <= rightSide[0]) {
        case true:
          sorted.push(leftSide.shift());
          break;
        default:
          sorted.push(rightSide.shift());
          break;
      }
    } else {
      const lastArray = (leftSide[0] ? leftSide : rightSide);
      sorted.push(lastArray.shift());
    }
  }

  return sorted;
}

console.log(mergeSort(unsortedArray));
