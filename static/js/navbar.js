const navToggleButton = document.querySelector('.navbar-toggle-btn')
const navbarContainer = document.querySelector('.navbar')
const toggleIcon = document.querySelector('.navbar-toggle-icon')

navToggleButton.addEventListener('click', () => {
    navbarContainer.classList.toggle('toggled');
    toggleIcon.classList.toggle('fa-bars');
    toggleIcon.classList.toggle('fa-xmark');
})