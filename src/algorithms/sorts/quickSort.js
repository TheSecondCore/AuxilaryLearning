console.log(quickSort([10, 5, 3, 8, 2, 6, 4, 18, 4, 2, -4, -23, 3]));
// [-23, -4, 2, 2, 3, 3, 4, 4, 5, 6, 8, 10, 18]

function quickSort(inputItems) {
  const sortedItems = [...inputItems];
  const endIndex = sortedItems.length - 1;
  const pivot = endIndex;
  const partitionIndex = partition(sortedItems, pivot, 0, endIndex);
  impureQuickSort(sortedItems, 0, partitionIndex - 1);
  impureQuickSort(sortedItems, partitionIndex + 1, endIndex);
  return sortedItems;
}

function impureQuickSort(inputItems, left = 0, right = inputItems.length - 1) {
  if (left >= right) return inputItems;
  const pivot = right;
  const partitionIndex = partition(inputItems, pivot, left, right);
  impureQuickSort(inputItems, left, partitionIndex - 1);
  impureQuickSort(inputItems, partitionIndex + 1, right);
  return inputItems;
}

function partition(inputArray, pivot, left, right) {
  const pivotValue = inputArray[pivot];
  let partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (inputArray[i] < pivotValue) {
      swap(inputArray, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(inputArray, right, partitionIndex);
  return partitionIndex;
}

/* eslint-disable no-param-reassign */
function swap(inputItems, i, j) {
  const temp = inputItems[i];
  inputItems[i] = inputItems[j];
  inputItems[j] = temp;
}
/* eslint-enable no-param-reassign */
