function strCount(str, char) {
    const StrToString = str.toString()
    const StrtoLowerCase = StrToString.toLowerCase()
    const StrSlice = StrtoLowerCase.split('')

    let arr= []

    for (let i = 0; i < StrSlice.length; i++) {
        if (StrSlice[i] === char) {
            arr.push(StrSlice[i])
        }
    }

    return arr.length
}


console.log(strCount('HELllllolll', 'l'))
