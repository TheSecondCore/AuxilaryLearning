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

// O(n) but uses a lot of memory

console.log(arrContainsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))