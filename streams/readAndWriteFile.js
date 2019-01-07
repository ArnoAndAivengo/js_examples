// const { createReadStream: r } = require('fs');
// const { createWriteStream: w } = require('fs');
// const rdStr = r(`./1.txt`, { highWaterMark: 1 });
// const rwStr = w(`./1.txt`, { encoding: 'utf8' });
// let buf = '';
// rdStr.on('data', d => buf = buf + d * 1 + 1);
// rdStr.on('end', () => console.log(String(buf)));
// rwStr.write(buf);
// rwStr.end();


// const fs = require('fs');

// const rs = fs.createReadStream('./1.txt', { highWaterMark: 1 }, 'utf8');
// const ws = fs.createWriteStream('./2.txt', 'utf8');
// let buf = '';
// rs.on('data', buffer => {
//   buf += buffer * 1 + 1;
//   console.log(`Copy ${buffer.length} ch'utf8'ars`);
//   ws.write(String(buf));
// });

// rs.on('end', () => {
//   console.log('Done');
// });

const fs = require('fs');

const rs = fs.createReadStream('./1.txt', { highWaterMark: 1 }, 'utf8');
const ws = fs.createWriteStream('./2.txt', 'utf8');

// const { createReadStream: r } = require('fs');
// const rdStr = r(`./1.txt`, { highWaterMark: 1 });
let buf = '';
rs.on('data', d => {
  buf += d * 1 + 1;
  console.log(`Copy ${d.length} ch'utf8'ars`);

});
rs.on('end', () => {
  console.log(String(buf));
  ws.write(String(buf));
});
