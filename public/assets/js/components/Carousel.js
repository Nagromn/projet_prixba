// Carousel.js
export const Carousel = () => {
  const carousel = document.querySelector(".carousel");
  const imagePaths = [
    "images/products/bricolage_jardinage_gant_de_protection.png",
    "images/products/bricolage_marteau.png",
    "images/products/bricolage_jardinage_secateur.png",
    "images/products/fourniture_agenda.png",
    "images/products/fourniture_ciseaux.png",
    "images/products/fourniture_support_ecriture.png",
    "images/products/jeux_lego.png",
    "images/products/jeux_tracteur_ferme.png",
    "images/products/jeux_voiture.png",
  ];

  const displayedImages = [];
  let currentIndex = 0;

  function updateCarousel() {
    carousel.innerHTML = "";
    displayedImages.forEach((imagePath) => {
      const imgElement = document.createElement("img");
      imgElement.src = imagePath;
      imgElement.alt = `Image ${currentIndex + 1}`;

      // Redimensionner la taille de l'image et ajouter de l'espace horizontal
  imgElement.style.width = "200px"; // Ajustez la largeur selon vos besoins
  imgElement.style.height = "200px"; // Ajustez la hauteur selon vos besoins
  imgElement.style.marginRight = "20px"; // Ajustez l'espace horizontal à droite de chaque image
  imgElement.style.marginLeft = "20px"; // Ajustez l'espace horizontal à gauche de chaque image

      carousel.appendChild(imgElement);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % imagePaths.length;

    // Réinitialiser la liste avant d'ajouter de nouvelles images
    displayedImages.length = 0;

    // Ajouter les nouvelles images
    for (let i = 0; i < 4; i++) {
      displayedImages.push(imagePaths[(currentIndex + i) % imagePaths.length]);
    }

    updateCarousel();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;

    // Réinitialiser la liste avant d'ajouter de nouvelles images
    displayedImages.length = 0;

    // Ajouter les nouvelles images
    for (let i = 0; i < 4; i++) {
      displayedImages.push(imagePaths[(currentIndex + i) % imagePaths.length]);
    }

    updateCarousel();
  }

  document.getElementById("btn-next").addEventListener("click", nextImage);
  document.getElementById("btn-prev").addEventListener("click", prevImage);

  // Affiche les premières 4 images au chargement
  for (let i = 0; i < 4; i++) {
    displayedImages.push(imagePaths[i]);
  }
  updateCarousel();
};
