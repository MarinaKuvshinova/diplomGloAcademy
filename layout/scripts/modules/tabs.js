const tabs = (tabsets) => {
    const buttons = tabsets.querySelectorAll('.tabs-nav > *'),
     tabContent = tabsets.querySelector('.tabs-content');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const data = e.target.dataset.tab;

            tabsets.querySelector('.tabs-nav > .active').classList.remove('active');
            tabContent.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            tabContent.querySelector(`[data-tab="${data}"]`).classList.add('active');
        });
    });
};

export default tabs;