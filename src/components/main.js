// src/components/main.js
export default function MainContent() {
    return `
      <div class="main-text bg-cover bg-center" style="background-image: url('./src/assets/beef_tajine.png'); background-size: 100%;box-shadow: inset 0 0 0 2000px rgb(0 0 0 / 66%);">
        <div class="max-w-4xl mx-auto text-center text-white space-y-6">
          <!-- Heading -->
          <h2 class="text-5xl font-bold">Embark on a Moroccan Culinary Journey!</h2>
          
          <!-- Introductory Paragraph -->
          <p class="text-xl">
            Welcome to Morocco's Flavors, your premiere online platform for authentic Moroccan cooking classes and recipes. 
            Uncover the secrets of traditional Moroccan dishes, passed down through generations, with online and in-person 
            classes led by ‘dadas’ – master chefs preserving Morocco’s rich culinary heritage.
          </p>
          
          <!-- Call to Action Text -->
          <p class="text-xl font-semibold">
            Discover Our Moroccan Cooking School
          </p>
          
          <!-- Button (Optional) -->
          <a href="/discover" class="inline-block mt-6 px-8 py-3 bg-[#E5E2D9] text-white rounded-full hover:bg-[#781924] hover:text-white transition duration-300">Join Now</a>
        </div>
      </div>
    `;
}

