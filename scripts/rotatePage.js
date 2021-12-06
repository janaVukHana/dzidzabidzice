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