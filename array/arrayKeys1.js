// var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
// function eliminateDuplicates(arr) {
//     var i,
//         len = arr.length,
//         out = [],
//         obj = {};
//
//     for (i = 0; i < len; i++) {
//         obj[arr[i]] = 0;
//     }
//     for (i in obj) {
//         out.push(i);
//     }
//     return out;
// }
//
// console.log(eliminateDuplicates(arr));

var names = ['188.187.027.025', '188.162.064.018', '188.187.027.025', '188.170.082.040', '188.170.082.040', '188.170.082.040', '188.170.082.040'];
console.log(names);

let gti = objectToArray(resultS).reduce(function(accumulator, currentValue, index, array) {
    let newArray = [];
    if (accumulator === currentValue)  {
        newArray.push(currentValue);
    }
    console.log(newArray);


}, []);
console.log(gti);


var uniq = names
    .map((name) => {
        return {count: 1, name: name}
    })
    .reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count;
        return a
    }, {});

var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1);

console.log(duplicates);