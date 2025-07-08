/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e6f3e6',
        secondary: '#1a73e8',
        accent: '#34a853',
        text: '#202124',
        background: '#ffffff',
        footer: '#f5f5f5',
        button: '#34a853',
        button_text: '#ffffff',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      borderRadius: {
        'btn': '5px',
        'card': '10px',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
