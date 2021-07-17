'use strict';

const authSection = document.querySelector('.main-auth'),
    button = authSection.querySelector('.button'),
    labels = authSection.querySelectorAll('label');
let users = [{login:'admin', password: '1234'}];

// const setLocalStorage = () => {
//     localStorage.setItem('users', JSON.stringify(users));
// };

// const getLocalStorage = () => {
//     return JSON.parse(localStorage.getItem('users'));
// };

const login = () => {
    const login = authSection.querySelector('#name').value,
        password = authSection.querySelector('#type').value;

    // users = getLocalStorage();

    let user = users.find(elem => {
        if (elem.login === login && elem.password === password) {
            labels[0].classList.remove('unvalid');
            labels[1].classList.remove('unvalid');
            document.cookie = encodeURIComponent('auth') + '=' + encodeURIComponent(true);
            window.location.href = 'table.html';
            return true;
        }
        
        if (elem.login === login) {
            labels[0].classList.remove('unvalid');
        }
        
        if (elem.password === password) {
            labels[1].classList.remove('unvalid');
        }

        if (elem.login !== login) {
            labels[0].classList.add('unvalid');
            authSection.querySelector('#name').value = '';
        }

        if (elem.password !== password) {
            labels[1].classList.add('unvalid');
            authSection.querySelector('#type').value = '';
        }
    });
};

button.addEventListener('click', e => {
    e.preventDefault();
    login();
});

// setLocalStorage();