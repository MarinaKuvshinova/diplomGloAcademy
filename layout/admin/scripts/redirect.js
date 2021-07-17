'use strict';

const redirect = () => {
    // const auth = JSON.parse(localStorage.getItem('auth'));

    // if (!auth) {
    //     window.location.href = 'index.html';
    // }


    if (!document.cookie) {
        window.location.href = 'index.html';
    }
};

redirect();