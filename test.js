console.log(1)
console.log(2)

function a() {
    setTimeout(() => {
        console.log(3)
    })
}

a();

console.log(3)