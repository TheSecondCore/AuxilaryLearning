// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

const validParentheses = str => {
    const stack = [] // Artificial limit to push() and pop()
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop()
        }
        else if (str[i] === '}' && stack[stack.length - 1] === '{') {
            stack.pop()
        }
        else if (str[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop()
        }
        else {
            stack.push(str[i])
        }
    }
    return stack.length === 0 ? true : false
}

console.log(validParentheses('{[]}')) // true
console.log(validParentheses('([)]')) // false

//Solved with a stack, O(n) with O(n) memory