document.addEventListener("DOMContentLoaded", function() {
    const elementToWatch = document.querySelector(".page-header");
    const elementToToggle = document.querySelector(".toc");

    function isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function toggleClassBasedOnVisibility() {
        if (!isElementVisible(elementToWatch)) {
            elementToToggle.classList.add("toc-visible");
        } else {
            elementToToggle.classList.remove("toc-visible");
        }
    }

    toggleClassBasedOnVisibility();


    window.addEventListener("scroll", toggleClassBasedOnVisibility);
});

const tocToggleButton = document.querySelector('.toc-toggle-btn');
const tocContainer = document.querySelector('.toc');
const tocToggleIcon = document.querySelector('.toc-toggle-icon');
const tocLinks = document.querySelectorAll('.toc a');

tocToggleButton.addEventListener('click', () => {
    tocContainer.classList.toggle('toggled');
    tocToggleIcon.classList.toggle('fa-list-ul');
    tocToggleIcon.classList.toggle('fa-xmark');
});

tocLinks.forEach(function(tocLink) {
    tocLink.addEventListener("click", function(event) {
        event.preventDefault();
        tocContainer.classList.toggle('toggled');
        tocToggleIcon.classList.toggle('fa-list-ul');
        tocToggleIcon.classList.toggle('fa-xmark');
        const targetId = tocLink.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 120;
        const scrollPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: scrollPosition
        })
    });
});

