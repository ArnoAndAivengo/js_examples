const names = ['Alex', 'Max', 'Platon', 'Sonya']

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLength(el) {
  return el.length;
}

function nameToUpperCase(el) {
  return el.toUpperCase();
}

const result = mapArray(names, nameLength)
const result2 = mapArray(names, nameToUpperCase)

console.log(result)
console.log(result2)

function greeting(firstName) {
  return function(lastName) {
    return `Hello, ${firstName} ${lastName}`
  }
}

// const testGreeting = greeting('Mike')
// const fullName = testGreeting('Petrovski')

const fullName2 = greeting('Mike')('Petrovski')

console.log(fullName2)


/** */

function question(character) {

  const characterList = {
    'Гэндальф': 'кольцо у тебя!',
    'Голум': 'украл мою прелесть!'
  }
  return function(name) {
    return `${character}: ${name}, ${characterList[character]}?`
  }
} 

const characterGendalf = question('Гэндальф')
console.log(characterGendalf('Голум'))

const characterGolum = question('Голум')
console.log(characterGolum('Бэгинс'))