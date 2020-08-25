let unsortedArray = [5, 7, 18, 1, 0, 9, 46, 0, 7, 19, 84];

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const divideIndex = Math.floor(arr.length / 2);

  const orderedLeft = mergeSort(arr.slice(0, divideIndex));
  const orderedRight = mergeSort(arr.slice(divideIndex, arr.length));

  const sidesOrdered = [];

  while (orderedLeft[0] || orderedRight[0]) {
    if (orderedLeft[0] && orderedRight[0]) {
      (orderedLeft[0] < orderedRight[0]) ? (sidesOrdered.push(orderedLeft.shift())) : (sidesOrdered.push(orderedRight.shift()));
    } else {
      (orderedLeft[0]) ? (sidesOrdered.push(orderedLeft.shift())) : (sidesOrdered.push(orderedRight.shift()));
    }
  }

  return sidesOrdered;
}

console.log(mergeSort(unsortedArray));
