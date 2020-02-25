const numbers = [1, 2, 100, 3, 200, 4, 165]

const numbersSorted = numbers.sort((firstItem, secondItem) => firstItem - secondItem

    // if (firstItem > secondItem) { 
    //     return 1
    // } else if (secondItem > firstItem) {
    //     return -1
    // } else {
    //     return 0
    // }
)

console.log(numbersSorted)