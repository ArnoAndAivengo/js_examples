let fun = () => {
  console.log(this);
};

fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();

// let btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//     let show = () => {
//         console.log(this);
//     };
//     show();
// });

function calcOrDouble(number, basis = 2) { // ES6
    // basis = basis || 2; // если передан basis то присваиваем basis если нет то 2 (ИЛИ) ES5
    console.log(number * basis);
}

let calcOrDouble1 = (number, basis = 2) => console.log(number * basis);

calcOrDouble1(3, 5);
calcOrDouble1(6);
