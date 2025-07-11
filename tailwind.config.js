/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: '#e5e7eb',
        background: '#ffffff',
        foreground: '#1f2937',
      },
    },
  },
  plugins: [],
};
