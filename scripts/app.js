// RESIZING WINDOW

//when use scroll, at one point put smaller header on top of the page and fix it

const logo = document.querySelector('.logo a');
const header = document.querySelector('.header');

console.log(logo, header);

window.addEventListener('scroll', function(e) {
    // console.log('scrolling');
    //pronadjeno :) dir u target
    // console.log(e.target.defaultView.pageYOffset);
    if (e.target.defaultView.pageYOffset > 600) {
        logo.classList.add('shrink-logo')
        header.classList.add('shrink-header');
        header.classList.add('light-section');
    }
    else {
        logo.classList.remove('shrink-logo');
        header.classList.remove('shrink-header');
        header.classList.remove('light-section');
    }

})

// set current year in footer
const year = document.querySelector('.dinamic-year');
const currentYear = new Date().getFullYear();

year.textContent = currentYear;





