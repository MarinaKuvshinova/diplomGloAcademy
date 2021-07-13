const openCloseMenu = () => {
    const scrolling = elem => {

        if (!elem.getAttribute('href')) {
            const link = elem.getElementsByTagName('a')[0];
            elem = link;
        }

        if (typeof(elem) != 'undefined' && elem != null && elem.getAttribute('href') != '' && elem.getAttribute('href') != '#') {
            const idSection = elem.getAttribute('href').slice(1),
                topPositionSection = document.getElementById(idSection).offsetTop;

            window.scrollTo({
                top: topPositionSection,
                behavior: "smooth"
            });
        }
    };

    document.addEventListener('click', e => {
        const target = e.target;

        if (target.classList.contains('menu-link')) {
            e.preventDefault();
            scrolling(target);
        }

        if (target.closest('.button-footer')) {
            e.preventDefault();
            scrolling(target);
        }
    });
};

export default openCloseMenu;