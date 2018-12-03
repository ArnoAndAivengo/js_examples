
function  sayHello(name) {
    return `Привет, ${name} !`;
}
console.log(sayHello('Alex'));

const sayHi = name => `Привет, ${name} !`;
console.log(sayHi('Alex'));

x => x * x;
// => Function

(x => x * x)(5);
// IIFE - Immediately Invoked Function Expression

const cube = x => x ** 3;
cube(5);
const cube5 = (x => x **3)(5);
cube5


const y = 5;
console.log((function cube(x) {
    const y = 3;
    return x ** y;
})(4)); // 64
console.log(y); // 5