'use strict';

import openClosePhone from './modules/openClosePhone';
import openCloseMenu from './modules/openCloseMenu';
import scrollTo from './modules/scrollTo';
import openClosePopup from './modules/openClosePopup';
import validPhone from './modules/validPhone';
import tooltip from './modules/tooltip';
import tabs from './modules/tabs';
import sliderFade from './modules/sliderFade';
import SliderCarousel from './modules/SliderCarousel';
import accordion from './modules/accordion';
import getDataRepair from './modules/getDataRepair';
import sendDataForm from './modules/sendDataForm';
import Validator from './modules/Validator';



//getDataRepair
getDataRepair();

//openClose phone
openClosePhone();

//openClose menu
openCloseMenu();

//scroll to section
scrollTo();

//openClose popup
openClosePopup();

//validator phone
validPhone();

//tooltip
tooltip();

//tabs
tabs(document.getElementById('repair-types'));
tabs(document.querySelector('.popup-repair-types'));


//slider type Fade
//slider repair-types
const repairTypesSection = document.getElementById('repair-types'),
    repairTypesSliders = repairTypesSection.querySelectorAll('.sliderFade');

repairTypesSliders.forEach(slider => {
    sliderFade(slider);
});


//slider popup-portfolio
const portfolioSection = document.querySelector('.popup-portfolio'),
    portfolioSlider = portfolioSection.querySelector('.sliderFade'),
    portfolioSliderNav = `
<div class="popup-portfolio-slider-wrap popup-portfolio-slider-wrap-nav">
<div class="slider-counter" id="popup-portfolio-counter">
						<div class="slider-counter-content">
							<div class="slider-counter-content__current">1</div>
							<div class="slider-counter-content__total">3</div>
						</div>
					</div>
					<div class="popup-arrow popup-arrow_left slider-arrow_left" id="popup_portfolio_left">
						<svg width="32" height="44" fill="none" viewBox="0 0 32 44" preserveAspectRatio="xMinYMin meet"
							 xmlns="http://www.w3.org/2000/svg">
							<path d="M30 41.999l-28-20 28-20" stroke="#fff" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"
								  stroke-linejoin="round"></path>
						</svg>
					</div>
					<div class="popup-arrow popup-arrow_right slider-arrow_right" id="popup_portfolio_right">
						<svg width="32" height="44" fill="none" viewBox="0 0 32 44" preserveAspectRatio="xMinYMin meet"
							 xmlns="http://www.w3.org/2000/svg">
							<path d="M2 1.999l28 20-28 20" stroke="#fff" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"
								  stroke-linejoin="round"></path>
						</svg>
					</div>
                    </div>
`;
sliderFade(portfolioSlider, portfolioSliderNav);

//slider popup-dialog-transparency
const transparencySection = document.querySelector('.popup-dialog-transparency'),
    transparencySlider = transparencySection.querySelector('.sliderFade'),
    transparencySliderNav = `
    <div class="slider-counter slider-counter_dark" id="transparency-popup-counter">
        <div class="slider-counter-content">
            <div class="slider-counter-content__current"></div>
            <div class="slider-counter-content__total"></div>
        </div>
    </div>
    <div class="popup-arrow popup-arrow_transparency popup-arrow_transparency_left slider-arrow_left" id="transparency_left">
        <svg width="18" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.543 23.205L1 12.103 16.543 1.002" stroke="#fff" stroke-opacity=".5" stroke-width="1.665"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </div>
    <div class="popup-arrow popup-arrow_transparency popup-arrow_transparency_right slider-arrow_right" id="transparency_right">
        <svg width="18" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.458 1L17 12.102 1.458 23.204" stroke="#fff" stroke-opacity=".5" stroke-width="1.665"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </div>
`;
sliderFade(transparencySlider, transparencySliderNav);

//slider mobile-portfolio
const portfolioMobileSection = document.querySelector('.portfolio'),
    portfolioMobileSlider = portfolioMobileSection.querySelector('.sliderFade'),
    portfolioMobileNav = `
<div class="slider-counter slider-counter-responsive desktop-hide" id="portfolio-counter">
    <div class="slider-counter-content">
        <div class="slider-counter-content__current">1</div>
        <div class="slider-counter-content__total">3</div>
    </div>
</div>
<div class="slider-arrow slider-arrow_left slider-arrow-tablet-mobile slider-arrow-tablet-mobile_left tablet-hide desktop-hide"
     id="portfolio-arrow-mobile_left">
    <svg width="25" height="34" fill="none" viewBox="0 0 25 34" preserveAspectRatio="xMinYMin meet"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M23 32L2 17 23 2" stroke="#fff" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round"></path>
    </svg>
</div>
<div class="slider-arrow slider-arrow_right slider-arrow-tablet-mobile slider-arrow-tablet-mobile_right tablet-hide desktop-hide"
     id="portfolio-arrow-mobile_right">
    <svg width="25" height="34" fill="none" viewBox="0 0 25 34" preserveAspectRatio="xMinYMin meet"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2l21 15L2 32" stroke="#fff" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round"></path>
    </svg>
</div>
`;
sliderFade(portfolioMobileSlider, portfolioMobileNav);



//slider type carousel
const carouselReviews = new SliderCarousel({
    main: '.reviews-slider-wrap',
    wrap: '.reviews-slider',
    prev: '#reviews-arrow_left',
    next: '#reviews-arrow_right',
    slidesToShow: 1,
    infinity: true

});
carouselReviews.init();


const carouselTransparency = new SliderCarousel({
    main: '.transparency-slider-wrap',
    wrap: '.transparency-slider',
    prev: '#transparency-arrow_left',
    next: '#transparency-arrow_right',
    slidesToShow: 3,
    infinity: true,
    responsive: [{
        breakpoint: 1100,
        slidesToShow: 1
    }
]});
carouselTransparency.init();


const carouselRepair = new SliderCarousel({
    main: '.nav-wrap-repair',
    wrap: '.nav-list-repair',
    buttonVueSecond: true,
    slidesToShow: 3,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 3,
    },{
        breakpoint: 768,
        slidesToShow: 2,
    },{
        breakpoint: 575,
        slidesToShow: 1,
    }
]});
carouselRepair.init();

const carouselPortfolioDesktop = new SliderCarousel({
    main: '.portfolio-slider-wrap',
    wrap: '.portfolio-slider',
    prev: '#portfolio-arrow_left',
    next: '#portfolio-arrow_right',
    slidesToShow: 3,
    infinity: false,
    responsive: [{
        breakpoint: 1140,
        slidesToShow: 2,
    },{
        breakpoint: 900,
        slidesToShow: 1,
    }
]});
carouselPortfolioDesktop.init();

const carouselFormula = new SliderCarousel({
    main: '.formula-slider-wrap',
    wrap: '.formula-slider',
    prev: '#formula-arrow_left',
    next: '#formula-arrow_right',
    slidesToShow: 3,
    infinity: true,
    responsive: [{
        breakpoint: 1025,
        slidesToShow: 3,
    },{
        breakpoint: 900,
        slidesToShow: 1,
    }
]});
carouselFormula.init();


const carouselRepairPopup = new SliderCarousel({
    main: '.popup-dialog-repair-types .nav-wrap-repair',
    wrap: '.nav-list-popup-repair',
    buttonVueSecond: true,
    slidesToShow: 3,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 2,
    },{
        breakpoint: 768,
        slidesToShow: 1,
    }
]});
carouselRepairPopup.init();


//accordion
accordion();


//sendDataForm

const valid1 = new Validator({
    selector: '#feedback1',
    method: {
        'feedback-input1': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'checkbox1': [
            ['checked']
        ]
    }
});

valid1.init(sendDataForm);


const valid2 = new Validator({
    selector: '#feedback2',
    method: {
        'feedback-input2': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'feedback-input2-name': [
            ['notEmpty'],
            ['pattern', 'name']
        ],
        'checkbox2': [
            ['checked']
        ]
    }
});

valid2.init(sendDataForm);

const valid3 = new Validator({
    selector: '#feedback3',
    method: {
        'feedback-input3': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'checkbox3': [
            ['checked']
        ]
    }
});

valid3.init(sendDataForm);


const valid4 = new Validator({
    selector: '#feedback4',
    method: {
        'feedback-input4': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'feedback-input4-name': [
            ['notEmpty'],
            ['pattern', 'name']
        ],
        'checkbox4': [
            ['checked']
        ]
    }
});

valid4.init(sendDataForm);


const valid5 = new Validator({
    selector: '#feedback3',
    method: {
        'feedback-input5': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'feedback-input5-name': [
            ['notEmpty'],
            ['pattern', 'name']
        ],
        'checkbox5': [
            ['checked']
        ]
    }
});

valid5.init(sendDataForm);

const valid6 = new Validator({
    selector: '#feedback6',
    method: {
        'feedback-input6': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'checkbox6': [
            ['checked']
        ]
    }
});

valid6.init(sendDataForm);