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
    },
    extend: {
      colors: {
        'custom-purple': '#d600b7',
        'custom-black': '#161616',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
