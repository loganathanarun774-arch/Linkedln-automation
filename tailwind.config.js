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
        linkedin: {
          blue: '#0a66c2',
          DEFAULT: '#0077b5',
          dark: '#004182',
          light: '#e1e9ee',
          icon: '#666666', // dark gray for icons
          gray: '#f3f2ef', // light gray background
        },
      },
    },
  },
  plugins: [],
}
