const accordion = () => {
    const accordions = document.querySelectorAll('.accordion');


    accordions.forEach(accordion => {
        accordion.addEventListener('click', (e) => {
            const target = e.target;
    
            if (target.classList.contains('title_block') && target.closest('.title_block')) {
                target.classList.toggle('msg-active');
            }
        });
    });

};

export default accordion;