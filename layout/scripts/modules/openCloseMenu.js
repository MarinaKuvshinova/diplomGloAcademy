const openCloseMenu = () => {
    const menu = document.querySelector('.popup-menu');
    
    const toggleMenu = () => {

        if (typeof(menu) != 'undefined' && menu != null) {
            menu.classList.toggle('active-menu');
        }
    };

    document.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('.menu')) {
            toggleMenu();
        }

        if (target.closest('.popup-menu.active-menu') && target.matches('a')) {
            toggleMenu();
        }

        if (menu.classList.contains('active-menu') && !target.closest('.menu') && !target.matches('menu') && !target.matches('li')) {
            toggleMenu();
        }
    });

};

export default openCloseMenu;