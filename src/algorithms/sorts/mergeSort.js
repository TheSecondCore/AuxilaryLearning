console.log(mergeSort([10, 5, 3, 8, 2, 6, 4, 18, 4, 2, -4, -23, 3]));
// [-23, -4, 2, 2, 3, 3, 4, 4, 5, 6, 8, 10, 18]

function mergeSort(inputArray) {
  if (inputArray.length < 2) return inputArray;
  const middleIndex = Math.floor(inputArray.length / 2);
  const left = inputArray.slice(0, middleIndex);
  const right = inputArray.slice(middleIndex);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const mergedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArray.push(left.shift());
    } else {
      mergedArray.push(right.shift());
    }
  }
  return [...mergedArray, ...left, ...right];
}
