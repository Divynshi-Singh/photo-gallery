let currentImageIndex = -1;
let images = document.querySelectorAll('.gallery-image');
let popup = document.getElementById('popup');
let popupImg = document.getElementById('popup-img');
let dotsContainer = document.getElementById('dots-container');

images.forEach((image, index) => {
    image.addEventListener('click', () => openPopup(index));
});

function openPopup(index) {
    currentImageIndex = index;
    popup.style.display = 'flex';
    popupImg.src = images[index].src;
    createDots();
    updateDots();
}

function closePopup() {
    popup.style.display = 'none';
}

function navigate(direction) {
    if (direction === 'prev') {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;

    } else if (direction === 'next') {
        currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    }

    popupImg.src = images[currentImageIndex].src;
    updateDots();
}

function createDots() {
    dotsContainer.innerHTML = '';
    images.forEach((_, index) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => dotClick(index));
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentImageIndex]) {
        dots[currentImageIndex].classList.add('active');
    }
}

function dotClick(index) {
    currentImageIndex = index;
    popupImg.src = images[currentImageIndex].src;
    updateDots();
}

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll('.gallery-image');
    let delay = 0;
    images.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('visible');
        }, delay);
        delay += 140;
    });
});
