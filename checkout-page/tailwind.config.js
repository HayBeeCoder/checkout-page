
module.exports = {

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    boxShadow: {
      'input': '0 0 0.125rem 0.125rem rgb(109 40 217 / 15%)',
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      'display': ['Montserrat'],
      'logo': ['Belleza']
    },
    extend: {
      spacing: {
        'full': '100%',
      },
      colors: {
        'custom-purple': '#d600b7',
        'custom-black': '#161616',
      },
      backgroundImage: {
        'hero-image-desktop': "url('./assets/images/female-male-landscape.jpg')",
        'hero-image-mobile': "url('./assets/images/female-male-potrait.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
