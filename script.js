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
    "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png",
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
    "#c6e4f6",
  ];
  
  let currentImageIndex = 0;
  function renderGallery(images) {
    const galleryContainer = document.getElementById("gallery");
  
    images.forEach((imageUrl, index) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.alt = "Image";
      imgElement.classList.add("gallery-image");
      imgElement.style.backgroundColor = backgroundColors[index]; // Add background color
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
    images.forEach((imageUrl, index) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.alt = "Image";
      imgElement.style.backgroundColor = backgroundColors[index]; // Add background color
      popupContent.appendChild(imgElement);
      setTimeout(() => {
        imgElement.classList.add("visible");
      }, index * 100);
    });
    popup.style.display = "flex";
    const popupImage = document.getElementById("img-wrapper");
    popupImage.style.transition = "transform 0.5s ease";
    popupImage.style.transform = `translateX(-${currentImageIndex * 600}px)`;
    updateDots();
  }
  
  function navigate(direction) {
    if (direction === "prev") {
      currentImageIndex =
        currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
    } else if (direction === "next") {
      currentImageIndex =
        currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
    }
  
    const popupContent = document.getElementById("img-wrapper");
    popupContent.style.transition = "transform 0.5s ease";
    popupContent.style.transform = `translateX(-${currentImageIndex * 600}px)`;
    updateDots();
  }
  
 
  function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    updateDots();
  }
  
  const dots = document.querySelector(".dots");
  for (let i = 0; i < images.length; i++) {
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
    const popupImage = document.getElementById("img-wrapper");
    popupImage.style.transition = "transform 0.5s ease";
    popupImage.style.transform =` translateX(-${currentImageIndex * 600}px)`;
    updateDots();
  }

  window.onload = () => {
    renderGallery(images);
    updateDots();
  };
  