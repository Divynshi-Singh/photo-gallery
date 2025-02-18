const images = [
    "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png", 
    "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
    "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
    "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
    "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
    "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
    "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
    "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png",
    "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
    "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png",
    "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png",
    "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png",
    "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"
];

const backgroundColors = [
    "#fff9c4", 
    "#a6c8f7", 
    "#a5d6a7", 
    "#f8e4a1", 
    "#80cbc4", 
    "#f7d147", 
    "#e8a3d7", 
    "#81c5e6", 
    "#f4b082", 
    "#f5a880", 
    "#d1f0f0", 
    "#f9d4e0", 
    "#ffebf0", 
    "#d0f0c0", 
    "#f9f9f9", 
    "#d1d8e0", 
    "#f1c6d7", 
    "#c6e4f6"
];

let currentImageIndex = 0;

function renderGallery(images) {
    const galleryContainer = document.getElementById('gallery');
    images.forEach((imageUrl, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = "Image";
        imgElement.classList.add('gallery-image');
        imgElement.style.backgroundColor = backgroundColors[index]; // Add background color
        imgElement.addEventListener('click', () => openPopup(index));
        galleryContainer.appendChild(imgElement); 
        setTimeout(() => {
            imgElement.classList.add('visible');
        }, index * 100);
    });
}

function openPopup(index) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('img-wrapper');
    currentImageIndex = index; 
    images.forEach((imageUrl, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = "Image";
        imgElement.style.backgroundColor = backgroundColors[index]; // Add background color
        popupContent.appendChild(imgElement); 
        setTimeout(() => {
            imgElement.classList.add('visible');
        }, index * 100);
    });
    // const popupImage = document.getElementById('popup-img');
    // popupImage.style.backgroundColor = backgroundColors[index]; // Set background color for popup
    // popupImage.src = images[index]; 
    popup.style.display = 'flex';
    const popupImage = document.getElementById('img-wrapper');
    // popupImage.style.backgroundColor = backgroundColors[currentImageIndex]; // Set the background color
    // popupImage.src = images[currentImageIndex]; 
    popupImage.style.transition = 'transform 0.5s ease';
    popupImage.style.transform = `translateX(-${currentImageIndex * 600}px)`; 

    // createDots();  
    // updateDots();  
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function navigate(direction) {
    const popupImage = document.getElementById('popup-img');
    const popup = document.getElementById('popup');
    // if (direction === 'next') {
    //     currentImageIndex = (currentImageIndex + 1);
    // } else if (direction === 'prev') {
    //     currentImageIndex = (currentImageIndex - 1);
    // }
    currentImageIndex += 1
    console.log(currentImageIndex)
    const popupContent = document.getElementById('img-wrapper');
    // popupImage.style.backgroundColor = backgroundColors[currentImageIndex]; // Set the background color
    // popupImage.src = images[currentImageIndex]; 
    popupContent.style.transition = 'transform 0.5s ease';
    popupContent.style.transform = `translateX(-${currentImageIndex * 600}px)`; 
    // updateDots();s
}

function createDots() {
    const dotsContainer = document.getElementById('dots-container');
    dotsContainer.innerHTML = ''; 
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            goToDot(index); 
        });
        dotsContainer.appendChild(dot);
    });
}

function goToDot(index) {
    currentImageIndex = index;
    const popupImage = document.getElementById('popup-img');
    const popupContent = document.querySelector('.popup-content');
    const popup = document.getElementById('popup');
    popupImage.src = images[currentImageIndex];
    popupImage.style.backgroundColor = backgroundColors[currentImageIndex]; // Set the background color
    popupContent.style.transition = 'transform 0.5s ease';
    popupContent.style.transform = `translateX(-${currentImageIndex * 600}px)`; 
    updateDots();
}
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentImageIndex) {
            dot.classList.add('active');
        }
    });
}
window.onload = () => {
    renderGallery(images);
};


