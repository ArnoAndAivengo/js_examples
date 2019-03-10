

const fs = require('fs');

fs.readFile('./package.js').then(items,index => console.log(items))
    .catch(err => console.error(err));