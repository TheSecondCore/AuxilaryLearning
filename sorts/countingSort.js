const countingSort = (arr, min, max) => {

  const count = {}
  for (let i = min; i <= max; i++) {
    count[i] = 0
  }
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1
  }

  sortedArr = []
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      sortedArr.push(i)
      count[i]--
    }
  }

  return sortedArr
}

console.log(countingSort([10, 5, 3, 8, 2, 6, 4, 18, 4, 2, -4, -23, 3], -23, 18)) // [-23, -4, 2, 2, 2, 3, 3, 4, 4, 5, 6, 8, 10, 18]