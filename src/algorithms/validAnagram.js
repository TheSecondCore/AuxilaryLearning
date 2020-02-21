// Given two strings s and t , write a function to determine if t is an anagram of s.

const validAnagram = (s, t) => {
  const letterObj = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (letterObj[s[i]]) letterObj[s[i]]++;
    else letterObj[s[i]] = 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (letterObj[t[i]] && letterObj[t[i]] !== 0) {
      letterObj[t[i]]--;
    } else {
      return false;
    }
  }
  return true;
};

// O(n), with O(1) memory, because the table's size stays constant no matter how large n is

console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
