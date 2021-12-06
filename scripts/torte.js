// torte page: sliding backgrounds gallery

const containerS = document.querySelector('.containerS');
const slidesContainer = document.querySelector('.container-slides');
const slides = document.querySelectorAll('.slide');

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

let index = 0;

slides[index].style.opacity = 1;

// RADI !!
containerS.style.backgroundImage = slides[index].style.backgroundImage;

leftBtn.addEventListener('click', function() {
    console.log('clicked');
    slides.forEach(slide => {
        slide.style.opacity = 0;
    })
    
    index--;
    if(index < 0) {
        index = slides.length -1;
    }
    slides[index].style.opacity = 1;
    
    containerS.style.backgroundImage = slides[index].style.backgroundImage;

})

rightBtn.addEventListener('click', function() {
    console.log('clicked');
    slides.forEach(slide => {
        slide.style.opacity = 0;
    })
    
    index++;
    if(index > slides.length - 1) {
        index = 0;
    }
    slides[index].style.opacity = 1;
    
    containerS.style.backgroundImage = slides[index].style.backgroundImage;

})

// NOTE:
// radi kada stavim inline styles. 
// ZASTO KADA POKUSAM SA DISPLAY NONE BACKGROUND IMAGE NE DAJE REZULTAT????????????
// slides.forEach(slide => {
//     slide.style.display = 'none';
// });
// slides[index].style.display = 'block';
// ne daje rezultat
// containerS.style.backgroundImage = slides[index].style.backgroundImage;



