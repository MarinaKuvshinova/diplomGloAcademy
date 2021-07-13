const openClosePopup = () => {
    const openButtons = document.querySelectorAll('.open-popup');
    let classPopup;
    
    const togglePopup = (className = classPopup) => {
        const popup = document.querySelector(`.popup-${className}`);

        if (typeof(popup) != 'undefined' && popup != null) {
            popup.classList.toggle('active-popup');
        }
    };

    openButtons.forEach(button => {
        button.addEventListener('click', e => {
            const target = e.target;

            [...target.classList].find( elem => {
                if (/open-/.test(elem) && elem !== 'open-popup') {
                    classPopup = elem.replace('open-', '');
                }
            });
            togglePopup(classPopup);
        });
    });

    document.addEventListener('click', e => {
        const target = e.target;

        if (classPopup) {

            if (target.closest(`.popup-${classPopup}.active-popup`) && target.matches('.close')) {
                togglePopup();
            }
    
            if (target.classList.contains('active-popup')) {
                togglePopup();
            }
        }
    });
};

export default openClosePopup;