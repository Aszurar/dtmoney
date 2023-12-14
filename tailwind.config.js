/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        7: '1.75rem',
        '2.5xl': '2rem',
      },

      borderWidth: {
        0.5: '0.125rem',
      },

      width: {
        highlightcard: '22rem',
      },

      height: {
        header: '25vh',
        dashboard: 'calc(100vh - 25vh - 3.5rem)',
      },

      maxWidth: {
        app: '70rem',
      },

      gridTemplateColumns: {
        table: '4fr 2fr 2fr 1fr',
      },

      transitionDuration: {
        400: '400ms',
      },

      colors: {
        purple: {
          300: '#885AFF',
          400: '#6933FF',
          500: '#5429CC',
          600: '#3F1F99',
        },
        green: {
          400: '#33CC95',
          500: '#2db986',
        },
        gray: {
          50: 'rgba(0, 0, 0, 0.5)',
          500: '#969CB2',
          700: '#363F5F',
        },
        red: {
          500: '#E52E4D',
        },
        background: {
          primary: '#F0F2F5',
          secondary: '#E7E9EE',
          tertiary: '#D7D7D7',
        },
      },
    },
  },
  plugins: [],
}
