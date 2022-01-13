// gallery image double slider
console.log(window.outerHeight, window.outerHeight);

const buttonDown = document.querySelector('.down');
const buttonUp = document.querySelector('.up');
const leftSlide = document.querySelector('.left-slider');
const rightSlide = document.querySelector('.right-slider');

const numberOfSlides = document.querySelectorAll('.description').length-1;

let index = 0;
// What Brad Traversu use instead outerHeight? clientHeight ili tako nesto?
let currentWindowHeight = window.outerHeight;

leftSlide.style.top = `-${numberOfSlides * window.outerHeight}px`;


buttonUp.addEventListener('click', function() {
    // index++;
    // if(index > numberOfSlides) {
    //     index = 0;
    // }
    // currentWindowHeight = window.outerHeight;
    
    // rightSlide.style.top = `-${currentWindowHeight * index}px`;
    // leftSlide.style.top = `-${(numberOfSlides - index) * currentWindowHeight}px`;  
    changeSlide('up');
})

buttonDown.addEventListener('click', function() {
    // index--;
    // if(index < 0) {
    //     index = numberOfSlides;
    // }
    // currentWindowHeight = window.outerHeight;

    // rightSlide.style.top = `-${currentWindowHeight * index}px`;
    // leftSlide.style.top = `-${(numberOfSlides - index) * currentWindowHeight}px`; 
    changeSlide('down')
})

function changeSlide(direction) {
    if(direction === 'up') {
        index++;
        if(index > numberOfSlides) {
            index = 0;
        }
    } else if(direction === 'down') {
        index--;
        if(index < 0) {
            index = numberOfSlides;
        }
    }
    currentWindowHeight = window.outerHeight;

    rightSlide.style.top = `-${currentWindowHeight * index}px`;
    leftSlide.style.top = `-${(numberOfSlides - index) * currentWindowHeight}px`; 

}


