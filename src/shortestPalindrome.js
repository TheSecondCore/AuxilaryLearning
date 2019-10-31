// Assumption: The input is NOT a palindrome, but it has to be made into one.
// Restriction: Can only add character on one side

shortestPalindrome = str => {
    let center = str.length-1
    while (str[center-1] === str[center]) {center--}
    for (let i = center - 1; i >= 0 ; i--) {
        str = str+str[i]
    }
    return str
}

console.log(shortestPalindrome('race')) // One character in the center test
console.log(shortestPalindrome('abcdeee')) // Multiple of the same char in the center test