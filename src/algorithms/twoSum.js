// Given an array of integers, return the two numbers such that they add up to a specific target.

const twoSum = (arr, target) => {
  const prevValues = {};
  for (let i = 0; i < arr.length; i++) {
    const valToHit = target - arr[i];

    if (prevValues[valToHit]) {
      return [valToHit, arr[i]];
    }

    prevValues[valToHit] = true;
  }
  return -1;
};

console.log(twoSum([1, 2, 56, 34, 2, 434, 26, 45, 66, 8, 2, 9, 9, 234], 10));

// O(n)

const betterTwoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return -1;
};

console.log(betterTwoSum([1, 2, 56, 34, 2, 434, 26, 45, 66, 8, 2, 9, 9, 234], 10));

// O(n^2)
