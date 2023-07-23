const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: colors.stone,
      primary: colors.violet,
      danger: colors.red,
      success: colors.green,
      warning: colors.yellow,
      transparent: 'transparent',
      white: colors.white,
      black: colors.black,
    },
    extend: {},
  },
  plugins: [],
}
