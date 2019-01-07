'use strict';

const fs = require('fs');

const rs = fs.createReadStream('./1.txt', { highWaterMark: 1 }, 'utf8');

let buf = '';
let dd = '';
rs.on('data', d => {
  buf += d * 1 + 1;
  dd += d;
});

rs.on('end',() => {
  console.log('Прочитано из файла ' + dd);
  console.log('Увеличиваем на 1 каждый байт ');
  console.log('Записываем в файл результат ' + buf);
  console.error('Запись выполнена успешно.');
  const ws = fs.createWriteStream('./1.txt', 'utf8');
  ws.write(String(buf));
});
