const imagesWithBackground = [
  {
    src: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
    backgroundColor: "#fff9c4"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
    backgroundColor: "#a6c8f7"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    backgroundColor: "#a5d6a7"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
    backgroundColor: "#f8e4a1"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
    backgroundColor: "#80cbc4"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
    backgroundColor: "#f7d147"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
    backgroundColor: "#e8a3d7"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
    backgroundColor: "#e1bee7"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
    backgroundColor: "#80cbc4"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png",
    backgroundColor: "#f5a880"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
    backgroundColor: "#d1f0f0"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
    backgroundColor: "#f9d4e0"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png",
    backgroundColor: "#ffebf0"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    backgroundColor: "#d0f0c0"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    backgroundColor: "#f9f9f9"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png",
    backgroundColor: "#d1d8e0"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png",
    backgroundColor: "#f1c6d7"
  },
  {
    src: "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png",
    backgroundColor: "#c6e4f6"
  }
];

let currentImageIndex = 0;
let popupImages = [];

function renderGallery(imagesWithBackground) {
  const galleryContainer = document.getElementById("gallery");

  imagesWithBackground.forEach((item, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.alt = "Image";
    imgElement.classList.add("gallery-image");
    imgElement.style.backgroundColor = item.backgroundColor; // Add background color from merged array
    imgElement.addEventListener("click", () => openPopup(index));
    galleryContainer.appendChild(imgElement);
    setTimeout(() => {
      imgElement.classList.add("visible");
    }, index * 100);
  });
}

function openPopup(index) {
  const popup = document.getElementById("popup");
  const popupContent = document.getElementById("img-wrapper");
  currentImageIndex = index;
 
  popupContent.innerHTML = "";
  imagesWithBackground.forEach((item) => {
    const imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.alt = "Image";
    imgElement.style.backgroundColor = item.backgroundColor; 
    popupContent.appendChild(imgElement);
    popupImages.push(imgElement);
  });

  popup.style.display = "flex";
  adjustImagePosition();
  updateDots();
}

function navigate(direction) {
  if (direction === "prev") {
    currentImageIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : imagesWithBackground.length - 1;
  } else if (direction === "next") {
    currentImageIndex =
      currentImageIndex < imagesWithBackground.length - 1 ? currentImageIndex + 1 : 0;
  }

  adjustImagePosition();
  updateDots();
}

function adjustImagePosition() {
  const popupContent = document.getElementById("img-wrapper");
  popupContent.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

window.onload = () => {
  renderGallery(imagesWithBackground);
  updateDots();
};

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  // updateDots();
}

const dots = document.querySelector(".dots");
for (let i = 0; i < imagesWithBackground.length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  div.addEventListener("click", () => goToImage(i));
  dots.appendChild(div);
}

function updateDots() {
  const allDots = document.querySelectorAll(".dots .button");
  allDots.forEach((dot) => dot.classList.remove("active"));
  allDots[currentImageIndex].classList.add("active");
}

function goToImage(index) {
  currentImageIndex = index;
  adjustImagePosition();
  updateDots();
}
