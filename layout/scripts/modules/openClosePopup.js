const openClosePopup = () => {
    const openButtons = document.querySelectorAll('.open-popup');
    let classPopup;
    
    const togglePopup = (className = classPopup) => {
        const name = className.includes('popup-') ? className : `popup-${className}`;
        const popup = document.querySelector(`.${name}`);

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
        const target = e.target,
        parent = target.closest('.active-popup');
         
        if (classPopup) {

            classPopup = `popup-${classPopup}`;

            if ( typeof(parent) != 'undefined' && parent != null) {
                classPopup = [...parent.classList].filter(elem => elem !== 'popup' && elem !== 'active-popup')[0];
            }

            if (target.closest(`.${classPopup}.active-popup`) && target.matches('.close')) {
                togglePopup();
            }
    
            if (target.classList.contains('active-popup')) {
                togglePopup();
            }
        }
    });
};

export default openClosePopup;