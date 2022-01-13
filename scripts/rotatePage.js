//rotate main page and nav button - show/hide navigation links

const buttonOpen = document.querySelector('.open');
const buttonClose = document.querySelector('.close');
const circleDiv = document.querySelector('.buttons-container');
const page = document.querySelector('.container');
const navLinksContainer = document.querySelector('.nav-links');

buttonOpen.addEventListener('click', function(e) {
    console.log('clicked button open');
    circleDiv.classList.add('rotate-buttons');
    page.classList.add('show-nav');
    navLinksContainer.classList.add('show-links')
})


buttonClose.addEventListener('click', function(e) {
    console.log('clicked button close');
    circleDiv.classList.remove('rotate-buttons');
    page.classList.remove('show-nav');
    navLinksContainer.classList.remove('show-links')
});

// fix nav links position for mobile devices 

window.addEventListener('resize', (e) => {
    // window width and height
    const width = window.innerWidth;
    const height = window.innerHeight;
    // document height 
    const pageHeight = page.offsetHeight;
    console.log(height, pageHeight);
    
    if(width <= 600) {
        const position = pageHeight - height;
        navLinksContainer.style.position = 'absolute';
        navLinksContainer.style.bottom = position;
        navLinksContainer.style.top = height;
    } else if (width > 600) {
        navLinksContainer.style.position = 'fixed';
        navLinksContainer.style.bottom = '0';
    }
    
    // window height 
})