function countingSort(inputArray) {
  const numbersCount = [];
  const sortedItems = [];
  const minValue = Math.min(...inputArray);
  const maxValue = Math.max(...inputArray);

  for (let i = minValue; i <= maxValue; i++) {
    numbersCount[i] = 0;
  }
  inputArray.forEach((value) => numbersCount[value]++);

  for (let i = minValue; i <= maxValue; i++) {
    while (numbersCount[i]) {
      sortedItems.push(i);
      numbersCount[i]--;
    }
  }

  return sortedItems;
}

console.log(countingSort([10, 5, 3, 8, 2, 6, 4, 18, 4, 2, -4, -23, 3]));
// [-23, -4, 2, 2, 3, 3, 4, 4, 5, 6, 8, 10, 18]
