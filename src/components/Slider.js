document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length;

  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });

    // Update dot indicators
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  // Attach event listeners for navigation
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  

  if (nextButton && prevButton) {
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentSlide = idx;
      showSlide(currentSlide);
    });
  });

  // Initialize the first slide
  showSlide(currentSlide);
});
