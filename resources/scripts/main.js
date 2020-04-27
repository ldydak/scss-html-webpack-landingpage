//Import scss
import "./../styles/main.scss";

// Simple switch between 2 images
$(document).ready(function() {
    var sliderImg = $('.slider-container .slider-action img')
    var sliderButtons = $('.slider-container .slider-arrows img')

    sliderImg.eq(0).addClass('active');
    
    $(sliderButtons).click(function(){
        $(sliderImg).toggleClass('active');
    });
});