const sliderFade = (slider, navSlider) => {
    let index = 0;

    const sliders = slider.getElementsByClassName('slide');

    const render = () => {
        sliders[0].classList.add('active-slider');

        if (typeof(navSlider) != 'undefined') {
            slider.innerHTML += navSlider;
        } else {
            slider.innerHTML += `
            <div class="slider-counter slider-counter-repair slider-counter-responsive">
                <div class="slider-counter-content">
                    <div class="slider-counter-content__current"></div>
                    <div class="slider-counter-content__total"></div>
                </div>
            </div>
            <div class="slider-arrow slider-arrow_left">
                <svg width="18" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12"
                    preserveAspectRatio="xMinYMin meet">
                    <path
                            d="M.97 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 1 0 1.06-1.06L2.561 6l4.242-4.243a.75.75 0 0 0-1.06-1.06L.97 5.47zm16.53-.22h-16v1.5h16v-1.5z"
                            fill="#322823"></path>
                </svg>
            </div>
            <div class="slider-arrow slider-arrow_right">
                <svg width="17" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 12"
                    preserveAspectRatio="xMinYMin meet">
                    <path
                            d="M16.03 5.47a.75.75 0 0 1 0 1.06l-4.773 4.773a.75.75 0 0 1-1.06-1.06L14.439 6l-4.242-4.243a.75.75 0 1 1 1.06-1.06L16.03 5.47zM.5 5.25h15v1.5H.5v-1.5z"
                            fill="#322823"></path>
                </svg>
            </div>
        `;
        }

        slider.querySelector('.slider-counter-content__current').textContent = index + 1;
        slider.querySelector('.slider-counter-content__total').textContent = sliders.length;
    };

    const moveSlider = (step) => {
        [...sliders].forEach((slide, i) => {
            if (slide.classList.contains('active-slider')) {
                slide.classList.remove('active-slider');
                index = i;
            }
        });

        index += step;

        if (index === [...sliders].length) {
            index = 0;
        } else if (index < 0) {
            index = [...sliders].length - 1;
        }

        sliders[index].classList.add('active-slider');
        slider.querySelector('.slider-counter-content__current').textContent = index + 1;
    };

    render();

    slider.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('slider-arrow_left') || target.closest('.slider-arrow_left')) {
            moveSlider(-1);
        }

        if (target.classList.contains('slider-arrow_right') || target.closest('.slider-arrow_right')) {
            moveSlider(1);
        }
    });
};

export default sliderFade;