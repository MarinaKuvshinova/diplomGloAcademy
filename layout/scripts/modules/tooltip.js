const tooltip = () => {
    const tooltips = document.querySelectorAll('.tooltip');
    
    const checkPosition = () => {
        tooltips.forEach( tooltip => {
            if ( tooltip.getBoundingClientRect().top - tooltip.getBoundingClientRect().height - 104 < 0) {
                tooltip.classList.add('bottom');
            } else {
                tooltip.classList.remove('bottom');
            }
        });
    };

    const debounce = (callback, delay) => {
        let timeoutHandler = null;
        return function() {
            clearTimeout(timeoutHandler);
            timeoutHandler = setTimeout(() => {
                callback();
            }, delay);
        };
    };

    window.addEventListener('scroll', debounce(checkPosition, 300));

};

export default tooltip;