const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const partition = (arr, pivot, left, right) => {
  let pivotValue = arr[pivot]
  let partitionIndex = left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(arr, right, partitionIndex)
  return partitionIndex
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  let pivot
  let partitionIndex
  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

console.log(quickSort([10, 5, 3, 8, 2, 6, 4, 18, 4, 2, -4, -23, 3])) // [-23, -4, 2, 2, 2, 3, 3, 4, 4, 5, 6, 8, 10, 18]