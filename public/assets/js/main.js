// Import
import { Carousel } from "./components/Carousel.js";

// Main function that initializes the application
export const Main = () => {

  console.log("Hello from main.js");

  // Adding an event listener for when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", () => {

    // Calling the Carousel function to set up the carousel functionality
    Carousel();
  });
};

Main(); // Call main funtion
