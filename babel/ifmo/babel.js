const { Script } = require { 'vm' }; // Virtual Machine
const { createWriteStream: w } = require('fs'); // поток вывода
const f = 'index.js';

const script = new Script(code);
script.runInThisContext(); // выполнить
w(`./lib/${f}`).write(code); // записать