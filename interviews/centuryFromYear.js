function centuryFromYear(year) {

  const currentYearString = year.toString()
  const left = currentYearString.slice(0, 2)
  const right = currentYearString.slice(-2)

  if (currentYearString.length === 4) {
    if (right === '00') {
      return Number(currentYearString.slice(0, 2))
    } else {
      return Number(left) + 1
    }
  }

  if (currentYearString.length === 3) {
    if (right === '00') {
      return Number(currentYearString.slice(0, 1))
    } else {
      return Number(currentYearString.slice(0, 1)) + 1
    }
  }

  if (currentYearString === '0') {
    return 0
  } else {
    return 1
  }

}

console.log(centuryFromYear(0))
console.log(centuryFromYear(11))
console.log(centuryFromYear(101))
console.log(centuryFromYear(1600))
console.log(centuryFromYear(2001))