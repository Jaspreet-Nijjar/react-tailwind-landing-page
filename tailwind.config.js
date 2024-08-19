/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayBlue: 'hsl(210, 10%, 33%)',
        grayBlue: 'hsl(201, 11%, 66%)',
      },
    },
  },
  plugins: [],
};
