const merge = (left, right) => {
  const arr = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  return [...arr, ...left, ...right]
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

console.log(mergeSort([10, 5, 3, 8, 2, 2, 6, 4, 18, 4, 2, -4, -23, 3])) // [-23, -4, 2, 2, 2, 3, 3, 4, 4, 5, 6, 8, 10, 18]