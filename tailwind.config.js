/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '800px', // Modification ici
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        /* Absolute colors */
        'absolute-white': '#FFFFFF',
        'absolute-black': '#0F0F0F',

        /* Red Shades */
        'red-45': '#E50000',
        'red-50': '#FF0000',
        'red-55': '#FF1919',
        'red-60': '#FF3333',
        'red-80': '#FF9999',
        'red-90': '#FFCCCC',
        'red-95': '#FFE5E5',
        'red-99': '#FFFAFA',

        /* Black Shades */
        'black-06': '#0F0F0F',
        'black-08': '#141414',
        'black-10': '#1A1A1A',
        'black-12': '#1F1F1F',
        'black-15': '#262626',
        'black-20': '#333333',
        'black-25': '#404040',
        'black-30': '#4C4C4C',

        /* Grey Shades */
        'grey-60': '#999999',
        'grey-65': '#A6A6A6',
        'grey-70': '#B3B3B3',
        'grey-75': '#BFBFBF',
        'grey-90': '#E4E4E7',
        'grey-95': '#F1F1F3',
        'grey-97': '#F7F7F8',
        'grey-99': '#FCFCFD',
      }
    },
  },
  plugins: [],
}

