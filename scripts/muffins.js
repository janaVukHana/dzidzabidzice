// gallery image double slider

const buttonDown = document.querySelector('.down');
const buttonUp = document.querySelector('.up');
const leftSlide = document.querySelector('.left-slider');
const rightSlide = document.querySelector('.right-slider');

const numberOfSlides = document.querySelectorAll('.description').length-1;

let index = 0;
// What Brad Traversu use instead innerHeight? clientHeight ili tako nesto?
let currentWindowHeight = leftSlide.offsetHeight;

leftSlide.style.top = `-${numberOfSlides * leftSlide.offsetHeight}px`;


buttonUp.addEventListener('click', function() {
    // index++;
    // if(index > numberOfSlides) {
    //     index = 0;
    // }
    // currentWindowHeight = leftSlide.offsetHeight;
    
    // rightSlide.style.top = `-${currentWindowHeight * index}px`;
    // leftSlide.style.top = `-${(numberOfSlides - index) * currentWindowHeight}px`;  
    changeSlide('up');
})

buttonDown.addEventListener('click', function() {
    // index--;
    // if(index < 0) {
    //     index = numberOfSlides;
    // }
    // currentWindowHeight = leftSlide.offsetHeight;

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
    currentWindowHeight = leftSlide.offsetHeight;

    rightSlide.style.top = `-${currentWindowHeight * index}px`;
    leftSlide.style.top = `-${(numberOfSlides - index) * currentWindowHeight}px`; 

}

// testing for mobile - my personal mobile 
// address bar on mobile is making problem
window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, leftSlide.offsetHeight);
    }, 0);
});




