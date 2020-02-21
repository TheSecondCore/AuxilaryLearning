// Reverse an array in place (Without reverse())

const reverseArrayInPlace = (arr) => {
  const newArr = arr;
  for (let i = 0; i < Math.floor((arr.length) / 2); i++) {
    const temp = arr[i];
    newArr[i] = arr[arr.length - 1 - i];
    newArr[arr.length - 1 - i] = temp;
  }
  return newArr;
};

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
