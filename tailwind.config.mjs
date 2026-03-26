/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0f7ff',
          100: '#dbeefe',
          200: '#bfe0fd',
          300: '#93cbfc',
          400: '#60aef8',
          500: '#3b8ef3',
          600: '#2570e8',
          700: '#1d5bd5',
          800: '#1e4aac',
          900: '#1e4088',
          950: '#172954',
        },
        warm: {
          50:  '#fdf8f0',
          100: '#faeedd',
          200: '#f4d9b5',
          300: '#ecbd83',
          400: '#e39a4f',
          500: '#db7f2e',
          600: '#cc6623',
          700: '#a94e1f',
          800: '#883f20',
          900: '#6f351d',
          950: '#3c190c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
