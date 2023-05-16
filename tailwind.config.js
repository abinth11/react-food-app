/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,jsx}'];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      customBlue: '#0C1326',
    }
  },
};
export const plugins = [];
