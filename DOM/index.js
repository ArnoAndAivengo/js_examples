const div = document.querySelector('div')
const titles = document.querySelectorAll('h1')
const h1 = document.getElementsByTagName('h1')
// console.dir(h1)
// console.dir(titles)
// console.log(Array.from(titles))
// console.log(Array.prototype.slice.call(titles))
// console.log([...titles])
//
// const link = div.querySelector('.link');
// console.log(link.closest('.content'));
// console.log(link.parentElement);

// div.classList.add('article', 'custom');
// div.classList.remove('article');
// div.classList.contains('custom');
//
// console.log(div.classList)
//
// div.setAttribute('id', 'myId');
// div.removeAttribute('id');
// div.getAttribute('id');
// div.hasAttribute('id');
//
// div.dataset.myattr

// Манипуляция DOM

const title = document.querySelector('h1');
// title.innerHTML = "<span>text</span>";
// title.textContent = 'new text';
// title.insertAdjacentHTML("beforebegin", "<h2>title h2</h2>");
// // title.insertAdjacentElement()
// title.innerHTML += '<span>new text</span>';
// const span = title.querySelector('span');
// console.log(span);
// title.innerHTML += '<span>new text 2</span>'
// span.textContent =  'fdsghhhh'

// Создание элемента

const span = document.createElement('span');
span.textContent = 'dssdngidsjndvcndjfn dgk jd ';
span.classList.add('myclass');
title.appendChild(span);

const fragment = document.createDocumentFragment();