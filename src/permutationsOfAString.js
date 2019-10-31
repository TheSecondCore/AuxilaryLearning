// TODO: Fix this shit homie

const permutationsOfAString = (str, startIndex = 0, endIndex = str.length-1) => {
    console.log(str,startIndex,endIndex)
    if (startIndex === endIndex) { console.log(str.join('')) }
    else {
        for (i = startIndex; i <= endIndex; i++) {
            let temp = str[startIndex]
            str[startIndex] = str[i]
            str[i] = temp
            permutationsOfAString(str, startIndex + 1, endIndex)
            temp = str[startIndex]
            str[startIndex] = str[i]
            str[i] = temp
        }
    }

}

console.log(permutationsOfAString(['A','B','C']))