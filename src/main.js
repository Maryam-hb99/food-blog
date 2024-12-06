import { recipesData } from './data/recipesData.js';  // Ensure correct import path
import recipesList from "./recipesList.js";

// Get the root element
const rootElement = document.getElementById("root");

// Insert the generated recipes list HTML
rootElement.innerHTML = recipesList(); // This will insert the HTML from recipesList.js

// Adding filter functionality (e.g., Sweet, Salty, and All filter buttons)
document.addEventListener("DOMContentLoaded", () => {
  const allButton = document.querySelector('button[data-filter="All"]');
  const saltyButton = document.querySelector('button[data-filter="Salty"]');
  const sweetButton = document.querySelector('button[data-filter="Sweet"]');
  const searchBar = document.getElementById("search-bar");
  const recipeListContainer = document.getElementById("recipe-list-container");

  // Render all recipes on page load
  renderRecipes(recipesData, recipeListContainer);

  // Add event listener for "All" button to show all recipes
  allButton.addEventListener("click", () => {
    renderRecipes(recipesData, recipeListContainer);  // Show all recipes
  });

  // Add event listener for salty button filter
  saltyButton.addEventListener("click", () => {
    filterRecipes("Salty", recipeListContainer);
  });

  // Add event listener for sweet button filter
  sweetButton.addEventListener("click", () => {
    filterRecipes("Sweet", recipeListContainer);
  });

  // Add search functionality
  searchBar.addEventListener("input", (e) => {
    searchRecipes(e.target.value, recipeListContainer);
  });
});

// Filter recipes by category (Salty or Sweet)
function filterRecipes(category, container) {
  const filteredRecipes = recipesData.filter(
    (recipe) => recipe.category === category
  );
  renderRecipes(filteredRecipes, container);
}

// Search recipes by title
function searchRecipes(query, container) {
  const filteredRecipes = recipesData.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );
  renderRecipes(filteredRecipes, container);
}

// Render recipes dynamically
function renderRecipes(recipes, container) {
  container.innerHTML = recipes
    .map(
      (recipe) => `
    <div class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
      <h3 class="recipe-title">${recipe.title}</h3>
    </div>
  `
    )
    .join("");
}
