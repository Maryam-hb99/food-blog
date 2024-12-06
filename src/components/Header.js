export default function Header() {
  return `
    <header id="header" class="header fixed top-0 left-0 w-full  px-8 flex justify-between items-center transition-all z-10">
      <div id="logoContainer" class="flex items-center mr-8">
        <img id="logoImage" src="./src/assets/lg3.png" alt="Logo" class="h-16">
      </div>
      
      <nav class="flex space-x-6 custom-padding">
        <a href="/" class="hovertext">Home</a>
        <a href="./recipes.html" class="hovertext">Recipes</a>

        <!-- Shop Dropdown -->
        <div class="relative">
          <a href="/shop" class="hovertext">Shop</a>
          <div class="dropdown-content absolute left-0 mt-2 hidden flex-col bg-white text-[#3D3935] rounded shadow-lg">
            <a href="/shop/gift-card" class="px-4 py-2 hover:bg-gray-100">Gift Card</a>
            <a href="/shop/cookbooks" class="px-4 py-2 hover:bg-gray-100">Cookbooks</a>
          </div>
        </div>

        <!-- Cooking Classes Dropdown -->
        <div class="relative">
          <a href="/cooking-classes" class="hovertext">Cooking Classes</a>
          <div class="dropdown-content absolute left-0 mt-2 hidden flex-col bg-white text-[#3D3935] rounded shadow-lg">
            <a href="/cooking-classes/online" class="px-4 py-2 hover:bg-gray-100">Online Classes</a>
            <a href="/cooking-classes/in-person" class="px-4 py-2 hover:bg-gray-100">In-Person Classes</a>
          </div>
        </div>

        <a href="/about-us" class="hovertext">About Us</a>
      </nav>
    </header>
  `;
}

