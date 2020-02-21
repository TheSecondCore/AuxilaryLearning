const findMin = (arr) => {
  let left = 0; let
    right = arr.length - 1;
  while (right - left > 1) {
    // eslint-disable-next-line no-bitwise
    const mid = left + ((right - left) >> 1);
    if (arr[mid] > arr[right]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return Math.min(arr[left], arr[right]);
};

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
