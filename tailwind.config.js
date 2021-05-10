const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: [
      './index.html',
      './src/**/*.jsx',
      './src/**/*.js',
    ],
  },
  theme: {
    fontFamily: {
      'sans': ['Lato', 'sans-serif', 'system-ui']
    },
    fontSize: {
      
      'sm': '14px',
       'base':'1rem',
       'lg': '1.25rem',
       'xl': '1.563rem',
       '2xl': '1.953rem',
      '3xl': '2.441rem',
      '4xl': '3.052rem',
       '5xl': ['3.815rem', '120%'],
       
     },
    extend: {
      fontWeight: ['hover', 'focus'],

    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/forms')]
};
