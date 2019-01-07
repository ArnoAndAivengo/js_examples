const Duplex = require('stream').Duplex;

class MyDuplex extends Duplex {
    constructor(name, options) {
        super(options);
        this.name = name;
    }

    _read(size) {}

    _write(chunk, encoding, callback) {
        console.log(this.name + ' writes: ' + chunk + '\n');
        callback();
    }
}

let aStream = new MyDuplex('A');
let bStream = new MyDuplex('B');


aStream.pipe(bStream).pipe(aStream);

aStream.on('data', (chunk) => {
    console.log('A read: ' + chunk + '\n');
})

aStream.write('Hello B!');

bStream.on('data', (chunk) => {
    console.log('B read: ' + chunk + '\n');
})
bStream.write('Hello A!');