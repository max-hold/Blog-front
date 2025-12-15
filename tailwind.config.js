/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-default': 'var(--bg-default)',
        'bg-muted': 'var(--bg-muted)',
        'bg-muted-2': 'var(--bg-muted-2)',
        'bg-primary': 'var(--bg-primary)',
        'text-default': 'var(--text-default)',
        'text-muted': 'var(--text-muted)',
        'text-inverse': 'var(--text-inverse)',
        'text-inverse-muted': 'var(--text-inverse-muted)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
