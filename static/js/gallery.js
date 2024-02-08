const galleryImages = document.querySelectorAll('.gallery img');
const viewDialog = document.getElementById('gallery-view');
const viewImage = viewDialog.querySelector('.gallery-view-img img');
const leftButton = viewDialog.querySelector('.go-left-btn');
const rightButton = viewDialog.querySelector('.go-right-btn');
const closeButton = viewDialog.querySelector('.gallery-view-untoggle-btn');

let touchStartX = 0;
let touchEndX = 0;
let currentIndex = 0;

function openGalleryView(imageSrc, index) {
    viewImage.src = imageSrc;
    viewDialog.showModal();
    currentIndex = index;
    updateNavigationButtonsVisibility();
}

function closeGalleryView() {
    viewDialog.close();
}

function updateNavigationButtonsVisibility() {
    leftButton.style.display = currentIndex === 0 ? 'none' : 'flex';
    rightButton.style.display = currentIndex === galleryImages.length - 1 ? 'none' : 'flex';
}

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        openGalleryView(img.src, index);
    });
});

closeButton.addEventListener('click', closeGalleryView);

function navigateGalleryView(direction) {
    currentIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
    const newImageSrc = galleryImages[currentIndex].src;
    viewImage.src = newImageSrc;
    updateNavigationButtonsVisibility();
}

leftButton.addEventListener('click', () => {
    navigateGalleryView(-1);
});

rightButton.addEventListener('click', () => {
    navigateGalleryView(1);
});

viewImage.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
});

viewImage.addEventListener('touchmove', (event) => {
    event.preventDefault();
    touchEndX = event.changedTouches[0].clientX;
});

viewImage.addEventListener('touchend', (event) => {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
        navigateGalleryView(1);
    } else if (touchEndX - touchStartX > swipeThreshold) {
        navigateGalleryView(-1);
    }
});