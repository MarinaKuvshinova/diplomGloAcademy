const openClosePhone = () => {
    const openCloseBlock = document.querySelector('.header-contacts');
    openCloseBlock.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('.header-contacts__arrow')) {
            openCloseBlock.classList.toggle('active');
        }
    });
};

export default openClosePhone;