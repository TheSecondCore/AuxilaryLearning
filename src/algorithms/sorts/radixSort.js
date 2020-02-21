console.log(radixSort([4, 57, 7, 3, 933]));
// [3,4,7,57,933]

console.log(radixSort([170, 45, 75, 1034, 90, 802, 24, 2, 6924, 66]));
// [170, 45, 75, 90, 802, 24, 2, 66, 1034, 6924]

function radixSort(inputArray) {
  let outputArray = inputArray;
  const maxLength = getMaxNumLength(outputArray);
  for (let i = 0; i < maxLength; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    outputArray.forEach((value) => {
      buckets[getNumAtPosition(value, i)].push(value);
    });
    outputArray = [].concat(...buckets);
  }
  return outputArray;
}

function getMaxNumLength(inputArray) {
  const maxValue = inputArray.reduce((a, b) => Math.max(a, b));
  return maxValue.toString().length;
}

function getNumAtPosition(number, positionFromRight) {
  return Math.floor(Math.abs(number) / 10 ** positionFromRight) % 10;
}
