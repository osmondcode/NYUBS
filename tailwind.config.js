/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        's': '300px',
        // => @media (min-width: 300px) { ... }

        'sl': '320px',
        // => @media (min-width: 320px) { ... }

        'sm': '440px',
        // => @media (min-width: 440px) { ... }
  
        '2sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '795px',
        // => @media (min-width: 768px) { ... }

        '2md': '905px',
        // => @media (min-width: 905px) { ... }
  
        'lg': '1074px',
        // => @media (min-width: 1054px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
  
    },
  },
  plugins: [],
}