class SliderCarousel {
    constructor({main, wrap, position = 0, next, prev, slidesToShow = 3, infinity = false, responsive = [], buttonVueSecond = false, activeClass = false, circulat = false}) {
        if (!main || !wrap) {
            console.warn('slider-carousel: Необходимо два свойства, "main" и "wrap"');
        }

        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.buttonVueSecond = buttonVueSecond;
        this.activeClass = activeClass;
        this.circulat = circulat;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor( 100 / this.slidesToShow ),
            maxPosition: this.slides.length - this.slidesToShow
        };
        this.responsive = responsive;
        this.direction = 0;

    }

    init() {

        this.addCarouselClass();
        this.addStyle();
        this.checkArrow();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        if (this.responsive) {
            this.responseInit();
        }
        
        if (this.activeClass) {
            this.addClassActive(this.options.position);
        }
    }

    addCarouselClass() {
        this.main.classList.add('carousel');
        this.wrap.classList.add('carousel__wrap');

        for(const item of this.slides) {
            item.classList.add('carousel__item');
        }
    }

    addStyle() {
        for(const item of this.slides) {
            item.style.cssText = `flex: 0 0 ${this.options.widthSlide}%`;
        }

        if (this.options.maxPosition !== this.slidesToShow) {
            this.options.position = 0;
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    addClassActive(position, step = 0) {
        if (step === 1) {
            this.slides[position - 1].classList.remove('active-item');
        }

        if (step === -1 ){
            this.slides[position + 1].classList.remove('active-item');
        }

        this.slides[position].classList.add('active-item');
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
        this.wrap.addEventListener('transitionend', () => {
            if (this.direction === -1) {
                this.wrap.appendChild(this.wrap.firstElementChild);
                
            } else if (this.direction === 1) {
                this.wrap.prepend(this.wrap.lastElementChild);
            }

            this.wrap.style.transition = 'none';
            this.wrap.style.transform = 'translate(0)';
            setTimeout(() => {
                this.wrap.style.transition = 'transform .5s ease-in-out';
            });
        });
    }

    prevSlider() {
        if (this.direction === -1) {
            this.direction = 1;
            this.wrap.appendChild(this.wrap.firstElementChild);
        }
        if (!this.circulat) {
            if (this.options.infinity || this.options.position > 0) {
                --this.options.position;
                if (this.options.position < 0) {
                    this.options.position = this.options.maxPosition;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
                this.checkArrow();
                this.addClassActive(this.options.position, -1);
            }
        } else {
            this.wrap.style.justifyContent = 'flex-end';
            this.wrap.style.transform = `translateX(${this.options.widthSlide}%)`;
        }
    }

    nextSlider() {
        this.direction = -1;
        if (!this.circulat) {
            if (this.options.infinity || this.options.position < this.options.maxPosition) {
                ++this.options.position;
                if (this.options.position > this.options.maxPosition) {
                    this.options.position = 0;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
                this.checkArrow();
                this.addClassActive(this.options.position, 1);
            }
        } else {
            this.wrap.style.justifyContent = 'flex-start';
            this.wrap.style.transform = `translateX(-${this.options.widthSlide}%)`;
        }
    }

    checkArrow() {
        if (this.options.position === 0) {
            this.main.classList.add('disablet-left');
        } else {
            this.main.classList.remove('disablet-left');
        }

        
        if (this.options.position === this.options.maxPosition) {
            this.main.classList.add('disablet-right');
        } else {
            this.main.classList.remove('disablet-right');
        }

    }

    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');
        
        if (!this.buttonVueSecond) {
            this.prev.innerHTML = `<svg width="17" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 12" preserveAspectRatio="xMinYMin meet">
            <path d="M.97 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 1 0 1.06-1.06L2.561 6l4.242-4.243a.75.75 0 0 0-1.06-1.06L.97 5.47zm16.53-.22h-16v1.5h16v-1.5z" fill="#322823"></path>
        </svg>`;
    
            this.next.innerHTML = `<svg width="17" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 12" preserveAspectRatio="xMinYMin meet">
            <path d="M16.03 5.47a.75.75 0 0 1 0 1.06l-4.773 4.773a.75.75 0 0 1-1.06-1.06L14.439 6l-4.242-4.243a.75.75 0 1 1 1.06-1.06L16.03 5.47zM.5 5.25h15v1.5H.5v-1.5z" fill="#322823"></path>
        </svg>`;
    
            this.prev.className = 'slider-arrow slider-arrow_left';
            this.next.className = 'slider-arrow slider-arrow_right';
        } else {
            this.prev.innerHTML = `<svg width="12" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 8l10 7" stroke="#322823" stroke-width=".3" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>`;
    
            this.next.innerHTML = `<svg width="12" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1l10 7-10 7" stroke="#322823" stroke-width=".3" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>`;
    
            this.prev.className = 'nav-arrow nav-arrow_left desktop-hide';
            this.next.className = 'nav-arrow nav-arrow_right desktop-hide';
        }

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);
    }

    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);
        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor( 100 / this.slidesToShow);
                        this.options.maxPosition = this.slides.length - this.slidesToShow;
                        this.addStyle();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor( 100 / this.slidesToShow);
                this.options.maxPosition = this.slides.length - this.slidesToShow;
                this.addStyle(); 
            }
            this.checkArrow();
        };

        checkResponse();
        window.addEventListener('resize', checkResponse, true);
    }
}

export default SliderCarousel;
