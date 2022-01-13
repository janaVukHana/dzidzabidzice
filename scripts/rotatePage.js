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
window.addEventListener('load', () => {

    // window width and height
    const width = window.innerWidth; //number
     const height = window.innerHeight; //number

     const pageHeight = page.offsetHeight; //number
     const linksHeight = navLinksContainer.offsetHeight; //number
     
     if(width <= 600) {
         navLinksContainer.style.position = 'absolute';
         navLinksContainer.style.top = String(height - linksHeight) + 'px';
     } else if (width > 600) {
         navLinksContainer.style.position = 'fixed';
         navLinksContainer.style.top = String(height - linksHeight) + 'px';
     }
})

window.addEventListener('resize', () => {
    // window width and height
    const width = window.innerWidth; //number
     const height = window.innerHeight; //number

     const pageHeight = page.offsetHeight; //number
     const linksHeight = navLinksContainer.offsetHeight; //number
     
     if(width <= 600) {
         navLinksContainer.style.position = 'absolute';
         navLinksContainer.style.top = String(height - linksHeight) + 'px';
     } else if (width > 600) {
         navLinksContainer.style.position = 'fixed';
         navLinksContainer.style.top = String(height - linksHeight) + 'px';
     }
})

window.addEventListener('scroll', () => {
    // window width and height
    const width = window.innerWidth; //number
     const height = window.innerHeight; //number

     const pageHeight = page.offsetHeight; //number
     const linksHeight = navLinksContainer.offsetHeight; //number

     const distanceFromTopOfThePage = window.scrollY; //number

    console.log(height - linksHeight + distanceFromTopOfThePage);

     if(width <= 600) {
        navLinksContainer.style.position = 'absolute';
        navLinksContainer.style.top = String(height - linksHeight + distanceFromTopOfThePage) + 'px';
    }
})


