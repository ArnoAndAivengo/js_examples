'use stricts';

const i = 5;
const f = 10.3;
const s = 'Hello';
const b = true;

const person = {
    name: 'Alex Krozn',
    bor: 1983,
    city: 'Moscow',
    position: 'deveoper',
};

person.city = 'St.Peterburg';

const cities = [ '', ' ', ' ',]

cities.push('Kiev');
cities.unshift('Denver');

console.log('shift: ' + cities.shift());
console.log('pop: ' + cities.pop());

console.log({ i }, typeof i);
console.log({ s }, typeof (s) + i);
console.log({ b }, typeof b);
console.log({ f }, typeof f);