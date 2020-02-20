function strCount(str, char) {

    const strToString = str.toString()
    const strToLowerCase = strToString.toLowerCase()
    const strSlice = strToLowerCase.split('')
    const strFilter = strSlice.filter(val => val === char)

    return strFilter.length
}

console.log(strCount('HELlolll', 'l'))
