// src/components/MenuList.js
import menuData from '../data/menuData.js';

export default function MenuList() {
    return `
        <section class="menu-cover text-center ">
            <h2 class="menu-title text-4xl font-bold mb-4">Spotlight on Authentic Moroccan Recipes</h2>
            <p class="menu-title text-2xl mb-8">Dive into the heart of Moroccan cuisine</p>
            <!-- Container for the images, set to 80% width -->
            <div class="w-4/5 mx-auto grid grid-cols-4 mb-6">
                ${menuData.map(item => `
                    <div class="flex flex-col items-center w-[164.05px]">
                        <!-- Image Container with border radius and hover class -->
                        <div class="image-container w-[164.05px] h-[164.05px] bg-cover bg-center rounded-lg" style="background-image: url('${item.image}');"></div>
                        <!-- Text Container -->
                        <div class="mt-2 w-[164.05px] text-center px-2">
                            <h3 class="font-bold text-[#781924] text-lg">${item.title}</h3>
                            <p class="text-sm text-[#781924]">${item.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <a href="./recipes.html">
            <button class="mt-4 px-6 py-2 bg-[#781924] text-white font-bold rounded hover:text-red-700 hover:bg-orange-100">
                Discover More Authentic Moroccan Recipes
            </button>
            </a>
        </section>
    `;
}
