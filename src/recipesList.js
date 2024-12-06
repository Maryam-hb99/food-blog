import { recipesData } from './data/recipesData.js';

export default function recipesList() {
  return `
    <section class="recipes-section">
      <h1 class="recipes-title">Explore Moroccan Recipes</h1>
      <div class="recipes-filter">
        <input type="text" id="search-bar" placeholder="Search recipes..." />
        <button data-filter="All">All</button>
        <button data-filter="Salty">Salty</button>
        <button data-filter="Sweet">Sweet</button>
      </div>
      <div id="recipe-list-container" class="recipes-list">
        <!-- Recipes will be inserted here dynamically -->
      </div>
    </section>
  `;
}
