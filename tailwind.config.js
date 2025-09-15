/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'dark-charcoal': '#0F0000',
          'dark-red': '#440000',
          'medium-red': '#6E1313',
          'rose-brown': '#866061',
          'cream': '#F2EDE7',
          'teal': '#012128',
          'pink': '#F9C4C5',
          'burgundy': '#743438',
        }
      },
      fontFamily: {
        'heading': ['serif'], // Will use serif as fallback for "The Seasons"
        'body': ['system-ui', 'sans-serif'], // Fallback for Helvetica World
        'accent': ['serif'], // For special accents
        'note': ['cursive', 'handwriting'], // For Caveat style notes
      }
    },
  },
  plugins: [],
}
