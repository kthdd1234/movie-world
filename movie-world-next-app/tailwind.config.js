/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      whitePoint: 'rgba(255, 255, 255, 0.7)',
      whitePoint2: 'rgba(255, 255, 255, 0.2)',
      black: '#000',
      black2: '#141517',
      mist: '#babac1',
      divider: '#1b1c1d',
      tomato: '#f82f62',
      disabled: '#4f5152',
      deepGray: '#84868d',
      yellow500: '#eab308',
      deepGray2: 'rgb(132, 134, 141)',
      deepGray3: 'rgb(186, 186, 193)',
      inputBG: 'rgb(34, 35, 38)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  plugins: [],
};
