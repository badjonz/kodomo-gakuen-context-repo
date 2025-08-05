/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#32cd32',
          light: '#6fdc6f',
          dark: '#2db82d',
        },
        secondary: {
          DEFAULT: '#f35588',
        },
        tertiary: {
          DEFAULT: '#ffca3a',
        },
        quaternary: {
          DEFAULT: '#00aeff',
        },
        light: {
          1: '#fff',
          2: '#faf9f9',
        },
        dark: {
          1: '#444',
          2: '#666',
        },
      },
      fontFamily: {
        kosugi: ['Kosugi', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        fredericka: ['Fredericka the Great', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 1s ease-in-out',
        'slide-left': 'slideLeft 1s ease-in-out',
        'slide-right': 'slideRight 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(900px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-900px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(900px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}