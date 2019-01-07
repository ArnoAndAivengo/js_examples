'use strict';


/*
Функция высшего порядка
*/

const fn = (param, callback) => {
    if (!param) {
        callback(new Error('Parametr needed'));
        return;
    }
    callback(null, 'Data ' + param);
    return 'Value';
};

const res = fn('example', (err, data) => {
    if (err) throw err;
    console.dir({ data });
})

console.dir({ res });