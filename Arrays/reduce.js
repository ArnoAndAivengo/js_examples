const numbers = [8, 0, 33, 234, 3];
const total = numbers.reduce((prevValue, currentElem) => {
    return prevValue + currentElem;
}, 0);

console.log(total);