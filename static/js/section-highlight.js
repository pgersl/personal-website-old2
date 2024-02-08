var currentPage = window.location.pathname.slice(0, -1);

var navLinks = document.querySelectorAll('.navbar-content a');
var homeLink = document.querySelector('.navbar-content-title-link')

navLinks.forEach(function(link) {
    var linkPage = link.getAttribute('href');
    if (currentPage.includes(linkPage)) {
        link.classList.add('highlighted');
      }
});

if (currentPage === "") {
  homeLink.classList.add('highlighted')
}