const arrContainsDuplicate = arr => {
    const passedVals = {}
    for (let i = 0; i < arr.length; i++) {
        if (passedVals[arr[i]]) {
            return true
        } 
        passedVals[arr[i]] = true
    }
    return false
}

// O(n) but uses O(n) auxilary space

console.log(arrContainsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))

const arrContainsDuplicate = arr => {
    arr.sort()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            return true
        }
    }
    return false
}

// O(n), uses O(1) auxilary space, but need to sort first

console.log(arrContainsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))