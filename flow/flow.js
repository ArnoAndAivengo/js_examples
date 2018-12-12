// @flow
function xor(x: boolean, y: boolen): boolean {
    return (x && !y) || (!x && y)
}

console.log(xor(1,0)); //true