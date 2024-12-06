// src/app.js
import Header from './components/Header.js';
import MenuList from './components/MenuList.js';
import MainContent from './components/main.js';
import BlogSection from './components/BlogSection.js';
import './components/Slider.js';
import GiftSection from './components/GiftSection.js';
import menuData from './data/menuData.js';

// Function to handle the scroll event
function handleScroll() {
  const header = document.getElementById('header');

  // Check if the page is scrolled down past a certain threshold (e.g., 50px)
  if (window.scrollY > 50) {
    header.classList.add('scrolled'); // Add 'scrolled' class to activate the border
  } else {
    header.classList.remove('scrolled'); // Remove the 'scrolled' class when at the top
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);


//welcome page

document.addEventListener("DOMContentLoaded", () => {
  const leftDoor = document.querySelector(".door.left");
  const rightDoor = document.querySelector(".door.right");
  const welcomePage = document.getElementById("welcome-page");
  const appContent = document.getElementById("app");

  // Open the doors after 3 seconds
  setTimeout(() => {
    leftDoor.classList.add("open");
    rightDoor.classList.add("open");

    // Fade out the welcome page
    welcomePage.style.opacity = "0";

    // After the doors are fully open, show the main content
    setTimeout(() => {
      welcomePage.remove(); // Remove the welcome page from the DOM
      appContent.classList.remove("hidden"); // Show the app content
    }, 2000); // Match the door animation time
  }, 3000); // Delay before doors open
});




// Initializing the app's inner HTML
const app = document.getElementById('app');
app.innerHTML = `
  ${Header()}
  ${MainContent()} 
  ${MenuList(menuData)}
  ${BlogSection()}
  ${GiftSection()}
`;
