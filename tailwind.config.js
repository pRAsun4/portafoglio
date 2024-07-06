/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: 'true',
      padding:{
        'md': '1.5rem',
        'sm': '1.25rem',
          DEFAULT: '1rem'
      },
      screens:{
        xsm: '480px',
        sm: '600px',
        md: '750px',
        lg: '920px',
        xl: '1240px',
        '2xl': '1440px'
      },
    },
    extend: {},
  },
  plugins: [],
}

