let imagesWithBackground = [];
let currentImageIndex = 0;
let popupImages = [];
async function fetchImages() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    imagesWithBackground = data.products.map(product => ({
      src: product.thumbnail,
      backgroundColor: getRandomColor()
    }));
    renderGallery(imagesWithBackground);
    updateDots();
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

function getRandomColor() {
  const colors = ["#fff9c4", "#a6c8f7", "#a5d6a7", "#f8e4a1", "#80cbc4", "#f7d147"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function renderGallery(images) {
  const galleryContainer = document.getElementById("gallery");
  galleryContainer.innerHTML = "";

  images.forEach((item, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.alt = "Image";
    imgElement.classList.add("gallery-image");
    imgElement.style.backgroundColor = item.backgroundColor;
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
    currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : imagesWithBackground.length - 1;
  } else if (direction === "next") {
    currentImageIndex = currentImageIndex < imagesWithBackground.length - 1 ? currentImageIndex + 1 : 0;
  }

  adjustImagePosition();
  updateDots();
}

function adjustImagePosition() {
  const popupContent = document.getElementById("img-wrapper");
  popupContent.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function updateDots() {
  const dotsContainer = document.querySelector(".dots");
  dotsContainer.innerHTML = "";
  imagesWithBackground.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "button";
    dot.addEventListener("click", () => goToImage(i));
    if (i === currentImageIndex) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });
}

function goToImage(index) {
  currentImageIndex = index;
  adjustImagePosition();
  updateDots();
}

window.onload = fetchImages;