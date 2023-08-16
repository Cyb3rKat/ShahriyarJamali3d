/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, colors: {
        'jamali-black': '#1d1c20',
        'jamali-blue': '#2a4683',
        'jamali-orange': '#ff7800',
        'jamali-white': '#c7ccd0',

      },
    },
  },
  plugins: [require('tailwind-scrollbar'), plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
    const newUtilities = {
      '.horizontal-tb': {
        writingMode: 'horizontal-tb',
      },
      '.vertical-rl': {
        writingMode: 'vertical-rl'
      },
      '.vertical-lr': {
        writingMode: 'vertical-lr'
      }
    }
    addUtilities(newUtilities)
  })
  ],
}
