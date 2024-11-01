/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#00A651", // Primary green, used for buttons and accents
        "brand-dark": "#333333", // Dark color for text and headers
        "brand-light-gray": "#F4F4F4", // Light gray background for sections
        "brand-secondary-gray": "#EDEDED", // Secondary gray for review section backgrounds
        "brand-accent-yellow": "#FFD700", // Accent yellow for rating stars
        "brand-text-light": "#666666", // Light gray text
        "brand-price-old": "#A0A0A0", // Strikethrough old price color
        "brand-link-blue": "#0066CC", // Link color for seller name
        "brand-footer-bg": "#1E1C1C", // Footer background color
        "brand-footer-text": "#CCCCCC", // Footer text color
      },
    },
  },
  plugins: [],
};

