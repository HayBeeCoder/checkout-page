module.exports = {

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    'sm': {
      // 'min': '640px',
      'max': '767px'
    },
    'md': {
      // 'min': '768px',
      'max': '1023px'
    },
    'lg': {
      // 'min': '1024px',
      'max': '1279px'
    },
    'xl': {
      // 'min': '1280px',
      'max': '1535px'
    },
    '2xl': {
      'min': '1536px'
    },
    fontFamily: {
      'display': ['Montserrat'],
      'logo': ['Belleza']
    },
    extend: {
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
