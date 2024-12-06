// tailwind.config.js
module.exports = {
  content: [
    "./index.html",              
    "./src/app.js",  
    "./src/components/main.js",  
    "./src/components/BlogSection.js ",
    "./src/components/Slider.js ", 
    "./src/components/Header.js", 
    "./src/components/MenuList.js", 
    "./src/components/MenuItem.js",
    "./src/components/Footer.js",   
    "./src/data/menuData.js",     
    "./src/utils/formatPrice.js"  
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A5F6B",         // Example primary color (Thistle's blue tone)
        secondary: "#4F9DA6",       // Example secondary color
        accent: "#F1A400",          // Accent color (orange for highlights/buttons)
        textPrimary: "#333333",     // Dark text for readability
        textSecondary: "#666666",   // Lighter text for less important content
      },
      fontFamily: {
        sans: ["Raleway', sans-serif;"],  // Similar to Thistle's font style
      },
      spacing: {
        18: '4.5rem',              // Custom spacing value for layout consistency
        36: '9rem',
      },
      boxShadow: {
        'menu': '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for menu items
        'card': '0 2px 12px rgba(0, 0, 0, 0.1)',  // Shadow for card-like elements
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333333',          // Text color
            h1: { color: '#1A5F6B' },  // Primary color for headers
            h2: { color: '#1A5F6B' },  // Secondary headers
            p: { color: '#666666' },   // Paragraphs with secondary text color
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // Tailwind Typography plugin for improved readability
  ],
};
