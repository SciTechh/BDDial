/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          100 : '#0C0D14',
          200 : '#004658',
          300 : '#042e39',
          400 : '#373952',
      },
        light: {
          100 : '#FFFFFF',
          200 : '#EFEFEF',
          300 : '#f5f9ff',
          400 : '#E5E7EB',
      },
        cold:{
          100 : '#A48EFF',
          200 : '#8C52FF',
          300 : '#C65BCF',
          400 : '#6842FF',
        }
    }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

