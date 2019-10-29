const merge = (left, right) => {
  const resultArray = []
  let leftIndex = 0, rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex])
      leftIndex++
    } else {
      resultArray.push(right[rightIndex])
      rightIndex++
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))
}

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2)

  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([10,5,3,8,2,2,6,4,18,4,2,-4,-23,3])) // [-23, -4, 2, 2, 2, 3, 3, 4, 4, 5, 6, 8, 10, 18]