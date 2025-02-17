// const images = [
//     "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png", 
//     "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
//     "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
//     "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
//     "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
//     "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
//     "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
//     "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
//     "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
//     "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png",
//     "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
//     "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
//     "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png",
//     "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
//     "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
//     "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png",
//     "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png",
//     "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"

// ];
// const backgroundColors = [
//     "#ffeb3b", 
//     "#3498db", 
//     "#2ecc71", 
//     "#f1c40f", 
//     "#16a085", 
//     "#f39c12", 
//     "#8e44ad",
//     "#1e90ff", 
//     "#e67e22", 
//     "#d35400", 
//     "#a3e4d7", 
//     "#f7c7d4", 
//     "#ffb6c1", 
//     "#d5f5e3", 
//     "#f3f4f6",
//     "#c8d6e5", 
//     "#f4cccc", 
//     "#c9daf8"  
// ];

// function getRandomColor() {
//     const colors = [
//         "#ff6347", "#4caf50", "#1e90ff", "#ffeb3b", "#8e44ad", "#f39c12",
//         "#3498db", "#2ecc71", "#e74c3c", "#9b59b6", "#f1c40f", "#e67e22",
//         "#2c3e50", "#34495e", "#16a085", "#d35400", "#c0392b", "#7f8c8d"
//     ];
//     return colors[Math.floor(Math.random() * colors.length)];
// }

// let currentImageIndex = 0;

// function renderGallery(images) {
//     const galleryContainer = document.getElementById('gallery');
//     images.forEach((imageUrl, index) => {
//         const imgElement = document.createElement('img');
//         imgElement.src = imageUrl;
//         imgElement.alt = "Image";
//         imgElement.classList.add('gallery-image');
//         imgElement.style.backgroundColor = backgroundColors[index]; 
//         imgElement.addEventListener('click', () => openPopup(index));
//         galleryContainer.appendChild(imgElement); 
//         setTimeout(() => {
//             imgElement.classList.add('visible');
//         }, index * 100);
//     });
// }

// function openPopup(index) {
//     const popup = document.getElementById('popup');
//     const popupImage = document.getElementById('popup-img');
//     popupImage.style.backgroundColor = getRandomColor();  
//     popupImage.src = images[index]; 
//     currentImageIndex = index; 
//     popup.style.display = 'flex';  
//     createDots();  
//     updateDots();  
// }

// function closePopup() {
//     const popup = document.getElementById('popup');
//     popup.style.display = 'none';
// }
// function navigate(direction) {
//     const popupImage = document.getElementById('popup-img');
//     const currentImage = popupImage;
//     let nextImageIndex;
//     if (direction === 'next') {
//         nextImageIndex = (currentImageIndex + 1) % images.length;
//     } else if (direction === 'prev') {
//         nextImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//     }
//     currentImage.style.transition = 'transform 0.5s ease-in-out';
//     currentImage.style.transform = direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';

//     setTimeout(() => {
//         currentImageIndex = nextImageIndex;
//         popupImage.src = images[currentImageIndex];
//         popupImage.style.transition = 'none';
//         popupImage.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
//         popupImage.style.backgroundColor = getRandomColor();
        
//         setTimeout(() => {
//             popupImage.style.transition = 'transform 0.5s ease-in-out';
//             popupImage.style.transform = 'translateX(0)';
//             updateDots();
//         }, 50);
//     }, 500);
// }

// function createDots() {
//     const dotsContainer = document.getElementById('dots-container');
//     dotsContainer.innerHTML = ''; 
//         images.forEach((_, index) => {
//         const dot = document.createElement('div');
//         dot.classList.add('dot');
//         dot.addEventListener('click', () => {
//             goToDot(index); 
//         });
//         dotsContainer.appendChild(dot);
//     });
// }

// function goToDot(index) {
//     const popupImage = document.getElementById('popup-img');
//     const currentImage = popupImage;
//     currentImage.style.transition = 'none';
//     let stepIndex = currentImageIndex;
//     let steps = Math.abs(currentImageIndex - index);
//     let direction = index > currentImageIndex ? 1 : -1;
//     let interval = setInterval(() => {
//         stepIndex += direction;
//         popupImage.src = images[stepIndex];
//         if (stepIndex === index) {
//             clearInterval(interval);
//             currentImage.style.transition = 'transform 0.5s ease-in-out';
//             popupImage.style.transform = 'translateX(0)';
//             currentImageIndex = stepIndex; 
//             updateDots();
//         }
//     }, 150); 
// }

// function updateDots() {
//     const dots = document.querySelectorAll('.dot');
//     dots.forEach((dot, index) => {
//         dot.classList.remove('active');
//         if (index === currentImageIndex) {
//             dot.classList.add('active');
//         }
//     });
// }

// window.onload = () => {
//     renderGallery(images);
// };





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
    "#ffeb3b", "#3498db", "#2ecc71", "#f1c40f", "#16a085", "#f39c12", "#8e44ad",
    "#1e90ff", "#e67e22", "#d35400", "#a3e4d7", "#f7c7d4", "#ffb6c1", "#d5f5e3",
    "#f3f4f6", "#c8d6e5", "#f4cccc", "#c9daf8"
];

let currentImageIndex = 0;

function renderGallery(images) {
    const galleryContainer = document.getElementById('gallery');
    images.forEach((imageUrl, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = "Image";
        imgElement.classList.add('gallery-image');
        imgElement.style.backgroundColor = backgroundColors[index]; 
        imgElement.addEventListener('click', () => openPopup(index));
        galleryContainer.appendChild(imgElement); 
        setTimeout(() => {
            imgElement.classList.add('visible');
        }, index * 100);
    });
}

function openPopup(index) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-img');
    popupImage.src = images[index]; 
    popupImage.style.transition = 'none'; // Reset transition during popup open
    popupImage.style.backgroundColor = backgroundColors[index]; // Apply background color when image is displayed
    currentImageIndex = index;
    popup.style.display = 'flex';  
    createDots();  
    updateDots();  
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}



function navigate(direction) {
    const popupImage = document.getElementById('popup-img');
    const currentImage = popupImage;
    let nextImageIndex;
    if (direction === 'next') {
        nextImageIndex = (currentImageIndex + 1) % images.length;
    } else if (direction === 'prev') {
        nextImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
    
    // Apply the background color before the transition starts
    popupImage.style.backgroundColor = backgroundColors[nextImageIndex]; 

    currentImage.style.transition = 'transform 0.5s ease-in-out';
    currentImage.style.transform = direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';

    setTimeout(() => {
        currentImageIndex = nextImageIndex;
        popupImage.src = images[currentImageIndex];
        popupImage.style.transition = 'none';
        popupImage.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
        
        setTimeout(() => {
            popupImage.style.transition = 'transform 0.5s ease-in-out';
            popupImage.style.transform = 'translateX(0)';
            updateDots();
        },50);
    }, 500);
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
    const popupImage = document.getElementById('popup-img');
    const currentImage = popupImage;
    currentImage.style.transition = 'none';
    let stepIndex = currentImageIndex;
    let steps = Math.abs(currentImageIndex - index);
    let direction = index > currentImageIndex ? 1 : -1;
    let interval = setInterval(() => {
        stepIndex += direction;
        popupImage.src = images[stepIndex];
        if (stepIndex === index) {
            clearInterval(interval);
            currentImage.style.transition = 'transform 0.5s ease-in-out';
            popupImage.style.transform = 'translateX(0)';
            currentImageIndex = stepIndex; 
            updateDots();
        }
    }, 150); 
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



