const tabs = (tabsets) => {
    const buttonSection = tabsets.querySelector('.tabs-nav'),
     tabContent = tabsets.querySelector('.tabs-content');

     buttonSection.addEventListener('click', (e) => {
         e.preventDefault();
         const target = e.target;

         if(target.tagName === 'BUTTON' && !target.classList.contains('nav-arrow')) {
            const data = target.dataset.tab;
            tabsets.querySelector('.tabs-nav .active').classList.remove('active');
            tabContent.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            tabContent.querySelector(`[data-tab="${data}"]`).classList.add('active');
            if (target.classList.contains('popup-repair-types-nav__item')) {
                const title = document.getElementById('switch-inner');

                title.textContent = target.textContent;
            }
         }
     });
};

export default tabs;