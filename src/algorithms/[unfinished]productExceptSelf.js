// Given an array nums of n integers where n > 1,  return an array output such that output[i]
// is equal to the product of all the elements of nums except nums[i].

const productExceptSelf = (arr) => {
  const output = [1, 1, 1, 1];
  for (let i = 0; i < arr.length; i++) {
    output[i] = 'a';
  }
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
