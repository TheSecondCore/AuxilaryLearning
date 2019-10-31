/* eslint-disable no-param-reassign */
// swap() is not pure, but I feel like it's justified in this example.
// Hence the eslint override.
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(inputArray, pivot, left, right) {
  const pivotValue = inputArray[pivot];
  let partitionIndex = left;
  for (let i = left; i < right; i += 1) {
    if (inputArray[i] < pivotValue) {
      swap(inputArray, i, partitionIndex);
      partitionIndex += 1;
    }
  }
  swap(inputArray, right, partitionIndex);
  return partitionIndex;
}

function quickSort(inputArray, left = 0, right = inputArray.length - 1) {
  let pivot;
  let partitionIndex;
  if (left < right) {
    pivot = right;
    partitionIndex = partition(inputArray, pivot, left, right);
    quickSort(inputArray, left, partitionIndex - 1);
    quickSort(inputArray, partitionIndex + 1, right);
  }
  return inputArray;
}

console.log(quickSort([10, 5, 3, 8, 2, 6, 4, 18, 4, 2, -4, -23, 3]));
// [-23, -4, 2, 2, 3, 3, 4, 4, 5, 6, 8, 10, 18]
