'use strict';

fetch('https://kodaktor.ru/j/users')
    .then(x => x.json())
    .then(x => {console.log(x);
        let users = JSON.parse(x);
        return users;
    })
    .then(x => {console.log(users);
        return httpGet('https://kodaktor.ru/j/users/${users[3].login}`)
    })
    .then(x = {login} = x => x)
    .then(x => console.log(x));
