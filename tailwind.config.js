/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        7: '1.75rem',
        '2.5xl': '2rem',
      },

      borderWidth: {
        0.5: '0.125rem',
        0.375: '0.0938rem',
      },

      inset: {
        18: '4.5rem',
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
        40: '10rem',
        68: '17rem',
        76: '19rem',
        80: '20rem',
      },
      maxHeight: {
        108: '27rem',
        112: '28rem',
        120: '30rem',
      },
      minWidth: {
        highlightcard: '260px',
      },

      borderRadius: {
        switch: '5.625rem',
      },

      gridTemplateColumns: {
        table: '4fr 2fr 2fr 1fr 0.5fr',
      },

      transitionDuration: {
        400: '400ms',
      },

      screens: {
        'phone-md': '360px',
        'phone-lg': '390px',
        'phone-xl': '400px',
      },

      colors: {
        purple: {
          300: '#885AFF',
          400: '#6933FF', // purple-300
          500: '#5429CC', // purple-400
          600: '#3F1F99', // purple-500
        },
        green: {
          75: 'rgba(18, 164, 84, 0.5)',
          400: '#33CC95',
          500: '#2db986',
        },
        gray: {
          25: 'rgba(255, 255, 255, 0.4)',
          50: 'rgba(0, 0, 0, 0.5)',
          500: '#969CB2', // gray-400
          700: '#363F5F', // gray-600 or white
        },
        red: {
          75: 'rgba(232, 63, 91, 0.5)',
          500: '#E52E4D', // red-400
        },
        background: {
          primary: '#F0F2F5', // zinc-900
          secondary: '#E7E9EE', // zinc-800
          tertiary: '#D7D7D7', // zinc-500
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
