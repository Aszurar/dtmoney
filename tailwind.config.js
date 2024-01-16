import plugin from 'tailwindcss/plugin'

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
        header: '13.25rem',
        dashboard: 'calc(100vh - 13.25rem - 3.5rem)',
      },

      maxWidth: {
        app: '70rem',
        40: '10rem',
        68: '17rem',
        76: '19rem',
        80: '20rem',
      },
      maxHeight: {
        25: '6.25rem',
        50: '12.5rem',
        75: '18.75rem',
        100: '25rem',
        108: '27rem',
        112: '28rem',
        120: '30rem',
        125: '31.25rem',
        134: '33.5rem',
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
        'iPhone-se': {
          raw: '(min-width: 375px) and (max-height: 667px)',
        },
        'notebook-sm': {
          raw: '(min-width: 440px) and (min-height: 668px)',
        },
        'notebook-sm-2': {
          raw: '(min-width: 440px) and (min-height: 700px)',
        },
        'notebook-md': {
          raw: '(min-width: 440px) and (min-height: 800px)',
        },
        'notebook-lg': {
          raw: '(min-width: 440px) and (min-height: 900px)',
        },
        'notebook-xl': {
          raw: '(min-width: 440px) and (min-height: 1024px)',
        },
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
  plugins: [
    require('tailwind-scrollbar'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.border-top-4-table-dark': {
          'border-top': '4px solid #18181b',
        },
        '.border-top-4-table': {
          'border-top': '4px solid #fff',
        },
        '.border-top-4-register': {
          'border-top': '4px solid #33CC95',
        },
      })
    }),
  ],
}
