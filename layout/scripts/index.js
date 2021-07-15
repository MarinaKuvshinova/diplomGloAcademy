'use strict';

import openClosePhone from './modules/openClosePhone';
import openCloseMenu from './modules/openCloseMenu';
import scrollTo from './modules/scrollTo';
import openClosePopup from './modules/openClosePopup';
import validPhone from './modules/validPhone'
import tooltip from './modules/tooltip'
import tabs from './modules/tabs'
import sliderFade from './modules/sliderFade'


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