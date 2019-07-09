// Reverse an array in place (Without reverse())

reverseArrayInPlace = arr => {
    for (var i = 0; i < Math.floor((arr.length) / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))