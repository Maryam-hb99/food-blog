export default function BlogSection() {
    return `
      <section class="blog-section">
        <h1 class="blog-title">Our Latest Blog Articles</h1>
        <h2 class="blog-subtitle">Dive into the heart of Moroccan cuisine & culture</h2>
        
        <!-- Slider Container -->
        <div class="slider">         
          <!-- Slide 1 -->
          <div class="slide active">
            <!-- Font Awesome Arrow Buttons -->
            <i class="fas fa-arrow-left prev"></i>
            <i class="fas fa-arrow-right next"></i>
            <img src="./src/assets/FOM-blogs-content-2.png" alt="Recipe 1" class="slide-image">
            <div class="overlay-text">
              <h3>Moroccan Roast Chicken (Djaj Mahmar)</h3>
              <p>A festive favorite for celebrations and family feasts.</p>
              <button class="read-more-btn">Read More</button>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="slide">
            <!-- Font Awesome Arrow Buttons -->
            <i class="fas fa-arrow-left prev"></i>
            <i class="fas fa-arrow-right next"></i>
            <img src="./src/assets/FOM-blogs-content.png" alt="Recipe 2" class="slide-image">
            <div class="overlay-text">
              <h3>Moroccan Beef & Prune Tagine</h3>
              <p>Experience the intricate sweet-savory balance that defines Moroccan cooking.</p>
              <button class="read-more-btn">Read More</button>
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="slide">
            <!-- Font Awesome Arrow Buttons -->
            <i class="fas fa-arrow-left prev"></i>
            <i class="fas fa-arrow-right next"></i>
            <img src="./src/assets/Dada-Malika-talking-Website.png" alt="Recipe 3" class="slide-image">
            <div class="overlay-text">
              <h3>Moroccan Almond Briwats</h3>
              <p>A traditional treat best paired with Moroccan mint tea.</p>
              <button class="read-more-btn">Read More</button>
            </div>
          </div>

          <!-- Slide 4 -->
          <div class="slide">
            <!-- Font Awesome Arrow Buttons -->
            <i class="fas fa-arrow-left prev"></i>
            <i class="fas fa-arrow-right next"></i>
            <img src="./src/assets/blog-post-cover.png" alt="Recipe 4" class="slide-image">
            <div class="overlay-text">
              <h3>Moroccan Vegetarian Harira</h3>
              <p>More than a soup; it’s a flavor symphony, essential for Moroccan Ramadan celebrations.</p>
              <button class="read-more-btn">Read More</button>
            </div>
          </div>

            <!-- Slider Dots -->
              <div class="slider-controls">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
        
        </div>
        <div class="see-more-btn-container">
          <button class="see-more-btn">See More Blogs</button>
        </div>

      
      </section>
    `;
}
