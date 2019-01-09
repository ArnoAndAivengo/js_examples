const f = function cube(x) {
    return x ** 3;
};

const executor = (x, y) => x(y);

console.log(executor(f, 5)); // 125

const pwr1 = y => x => y ** x;
console.log(pwr1(5)(4)); // 625

const pwr2 = (y, x) => y ** x;
console.log(pwr1(5, 4)); // 625

const count = (i = 0) => () => ++i;
const counterClosure = count();
console.log(counterClosure()); // 1
console.log(counterClosure()); // 2
console.log(counterClosure()); // 3



// IIFE
( () => Out.log('Меня вызвали!'))();

(() => x => x())()(() => Out.log('Меня вызвали');
