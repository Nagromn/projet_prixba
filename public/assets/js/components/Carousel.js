// Carousel

export const Carousel = () => {
  // Selects the card container and the cards themselves
  const cardContainer = document.querySelector(".card-container");
  const cards = cardContainer.querySelectorAll(".card");

  // Selects the previous and next navigation buttons
  const btnPrev = cardContainer.querySelector("#btn-prev");
  const btnNext = cardContainer.querySelector("#btn-next");

  // Defines the number of cards to display per page for each type of device
  const cardsPerPageDesktop = 4;
  const cardsPerPageTablet = 2;
  const cardsPerPageMobile = 1;

  // Initializes the current index and the number of cards per page
  let currentIndex = 0;
  let cardsPerPage = getCardsPerPage();

  // Function to update the carousel display
  function updateCarousel() {
    cards.forEach((card, index) => {
      const isVisible =
        index >= currentIndex && index < currentIndex + cardsPerPage;

      card.style.display = isVisible ? "block" : "none";
    });
  }

  // Function to move to the next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % cards.length;

    // If we go back to the first card, readjust the number of cards per page
    if (currentIndex === 0) {
      cardsPerPage = getCardsPerPage();
    }

    // If we exceed the last visible card, go back to the first
    if (currentIndex + cardsPerPage > cards.length) {
      currentIndex = 0;
    }

    updateCarousel();
  }

  // Function to go back to the previous image
  function prevImage() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;

    // If we go back to the last card, readjust the number of cards per page
    if (currentIndex === 0) {
      cardsPerPage = getCardsPerPage();
    }

    // If we exceed the last visible card, go back to the last card
    if (currentIndex + cardsPerPage > cards.length) {
      currentIndex = cards.length - cardsPerPage;
    }

    updateCarousel();
  }

  // Function to determine the number of cards per page based on the window width
  function getCardsPerPage() {
    if (window.innerWidth >= 1024) {
      return cardsPerPageDesktop; // Desktop
    } else if (window.innerWidth >= 768) {
      return cardsPerPageTablet; // Tablet
    } else {
      return cardsPerPageMobile; // Mobile
    }
  }

  // Updates the number of cards per page when resizing the window
  window.addEventListener("resize", () => {
    const newCardsPerPage = getCardsPerPage();
    if (newCardsPerPage !== cardsPerPage) {
      currentIndex = 0; // Reset the index when changing the number of cards per page
      cardsPerPage = newCardsPerPage;
      updateCarousel();
    }
  });

  // Adds event listeners for the navigation buttons
  btnPrev.addEventListener("click", prevImage);
  btnNext.addEventListener("click", nextImage);

  // Initializes the carousel when the page loads
  updateCarousel();
};
