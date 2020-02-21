// TODO: Fix this shit homie

const permutationsOfAString = (str, startIndex = 0, endIndex = str.length - 1) => {
  const newStr = str;
  console.log(str, startIndex, endIndex);
  if (startIndex === endIndex) { console.log(str.join('')); } else {
    for (let i = startIndex; i <= endIndex; i++) {
      let temp = str[startIndex];
      newStr[startIndex] = str[i];
      newStr[i] = temp;
      permutationsOfAString(str, startIndex + 1, endIndex);
      temp = str[startIndex];
      newStr[startIndex] = str[i];
      newStr[i] = temp;
    }
  }
};

console.log(permutationsOfAString(['A', 'B', 'C']));
